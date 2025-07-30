import { BaseComponent } from '../../utils/base-component';
import { SplitterProps } from '../../types';
import { splitterStyles } from './index-style';

export class EwSplitter extends BaseComponent {
  private splitterProps: SplitterProps = {};
  private splitterElement: HTMLElement | null = null;
  private panes: HTMLElement[] = [];
  private resizers: HTMLElement[] = [];
  private isDragging = false;
  private currentResizer: HTMLElement | null = null;
  private startPosition = 0;
  private startSizes: number[] = [];

  protected initProps(): void {
    super.initProps();
    this.splitterProps = {
      layout: (this.getAttribute('layout') as SplitterProps['layout']) || 'horizontal',
      disabled: this.hasAttribute('disabled'),
      size: (this.getAttribute('size') as SplitterProps['size']) || 'medium'
    };
  }

  protected render(): void {
    // 创建分割面板容器
    this.splitterElement = this.createElement('div', {
      class: this.getSplitterClasses()
    });

    // 获取所有子面板
    const slot = this.createElement('slot');
    this.splitterElement.appendChild(slot);

    // 清空并重新渲染
    this.shadow.innerHTML = '';
    
    // 注入样式
    this.injectStyles(splitterStyles);
    
    // 添加分割面板元素
    this.shadow.appendChild(this.splitterElement);

    // 等待 DOM 更新后初始化面板
    setTimeout(() => {
      this.initializePanes();
      // 监听窗口大小变化
      window.addEventListener('resize', this.handleResize.bind(this));
    }, 0);
  }

  private handleResize(): void {
    // 防抖处理窗口大小变化
    clearTimeout((this as any)._resizeTimeout);
    (this as any)._resizeTimeout = setTimeout(() => {
      this.updateResizerPositions();
    }, 100);
  }

  private initializePanes(): void {
    if (!this.splitterElement) return;

    // 获取所有 ew-splitter-pane 元素
    const paneElements = this.querySelectorAll('ew-splitter-pane');
    this.panes = Array.from(paneElements) as HTMLElement[];

    if (this.panes.length < 2) return;

    // 清理之前的调整器
    this.cleanupResizers();

    // 为每个面板创建调整器并插入到 Shadow DOM 中
    for (let i = 0; i < this.panes.length - 1; i++) {
      const resizer = this.createResizer(i);
      this.resizers.push(resizer);
      // 在 Shadow DOM 中插入调整器
      this.splitterElement!.appendChild(resizer);
    }

    // 初始化面板大小
    this.initializePaneSizes();
    
    // 初始定位调整器
    this.updateResizerPositions();
  }

  private updateResizerPositions(): void {
    if (!this.splitterElement || this.resizers.length === 0) return;

    const isHorizontal = this.splitterProps.layout === 'horizontal';
    
    this.resizers.forEach((resizer, index) => {
      const pane = this.panes[index];
      if (pane) {
        const rect = pane.getBoundingClientRect();
        const containerRect = this.splitterElement!.getBoundingClientRect();
        
        if (isHorizontal) {
          const left = rect.right - containerRect.left - 2; // 居中调整器
          resizer.style.left = `${left}px`;
        } else {
          const top = rect.bottom - containerRect.top - 2; // 居中调整器
          resizer.style.top = `${top}px`;
        }
      }
    });
  }

  private createResizer(index: number): HTMLElement {
    const resizer = this.createElement('div', {
      class: 'ew-splitter__resizer',
      'data-index': index.toString()
    });

    // 添加拖拽手柄
    const handle = this.createElement('div', {
      class: 'ew-splitter__resizer-handle'
    });
    resizer.appendChild(handle);

    // 添加拖拽事件监听器
    if (!this.splitterProps.disabled) {
      this.addResizerEventListeners(resizer, index);
    }

    return resizer;
  }

  private addResizerEventListeners(resizer: HTMLElement, index: number): void {
    const startDrag = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      this.startDrag(e, index);
    };

    const doDrag = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      this.doDrag(e);
    };

    const endDrag = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      this.endDrag();
    };

    // 鼠标事件
    resizer.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', doDrag);
    document.addEventListener('mouseup', endDrag);

    // 触摸事件
    resizer.addEventListener('touchstart', startDrag, { passive: false });
    document.addEventListener('touchmove', doDrag, { passive: false });
    document.addEventListener('touchend', endDrag, { passive: false });

    // 存储事件监听器以便清理
    (resizer as any)._eventListeners = {
      startDrag,
      doDrag,
      endDrag
    };
  }

  private startDrag(e: MouseEvent | TouchEvent, index: number): void {
    if (this.splitterProps.disabled) return;

    this.isDragging = true;
    this.currentResizer = this.resizers[index];
    this.currentResizer?.classList.add('ew-splitter__resizer--dragging');

    const isHorizontal = this.splitterProps.layout === 'horizontal';
    const clientPos = this.getClientPosition(e);
    this.startPosition = isHorizontal ? clientPos.x : clientPos.y;

    // 记录当前面板大小
    this.startSizes = this.panes.map(pane => {
      const rect = pane.getBoundingClientRect();
      return isHorizontal ? rect.width : rect.height;
    });

    document.body.style.cursor = isHorizontal ? 'col-resize' : 'row-resize';
    document.body.style.userSelect = 'none';
  }

  private doDrag(e: MouseEvent | TouchEvent): void {
    if (!this.isDragging || !this.currentResizer) return;

    const isHorizontal = this.splitterProps.layout === 'horizontal';
    const clientPos = this.getClientPosition(e);
    const currentPosition = isHorizontal ? clientPos.x : clientPos.y;
    const delta = currentPosition - this.startPosition;

    const resizerIndex = parseInt(this.currentResizer.getAttribute('data-index') || '0');
    this.resizePanes(resizerIndex, delta);
  }

  private endDrag(): void {
    if (!this.isDragging) return;

    this.isDragging = false;
    this.currentResizer?.classList.remove('ew-splitter__resizer--dragging');
    this.currentResizer = null;

    document.body.style.cursor = '';
    document.body.style.userSelect = '';

    // 更新调整器位置
    this.updateResizerPositions();

    // 触发大小变化事件
    this.dispatchCustomEvent('resize', {
      sizes: this.getPaneSizes()
    });
  }

  private resizePanes(resizerIndex: number, delta: number): void {
    const isHorizontal = this.splitterProps.layout === 'horizontal';
    const containerSize = isHorizontal 
      ? this.splitterElement!.offsetWidth 
      : this.splitterElement!.offsetHeight;

    // 计算新的面板大小
    const leftPane = this.panes[resizerIndex];
    const rightPane = this.panes[resizerIndex + 1];

    const leftSize = this.startSizes[resizerIndex] + delta;
    const rightSize = this.startSizes[resizerIndex + 1] - delta;

    // 检查最小尺寸限制
    const leftMin = this.getPaneMinSize(leftPane);
    const rightMin = this.getPaneMinSize(rightPane);

    if (leftSize < leftMin || rightSize < rightMin) return;

    // 应用新的大小
    const leftPercent = (leftSize / containerSize) * 100;
    const rightPercent = (rightSize / containerSize) * 100;

    leftPane.style.flex = `0 0 ${leftPercent}%`;
    rightPane.style.flex = `0 0 ${rightPercent}%`;
  }

  private getPaneMinSize(pane: HTMLElement): number {
    const minSize = pane.getAttribute('min');
    if (minSize) {
      const value = parseFloat(minSize);
      if (minSize.includes('%')) {
        const containerSize = this.splitterProps.layout === 'horizontal' 
          ? this.splitterElement!.offsetWidth 
          : this.splitterElement!.offsetHeight;
        return (value / 100) * containerSize;
      }
      return value;
    }
    return 50; // 默认最小尺寸
  }

  private getPaneSizes(): number[] {
    const isHorizontal = this.splitterProps.layout === 'horizontal';
    const containerSize = isHorizontal 
      ? this.splitterElement!.offsetWidth 
      : this.splitterElement!.offsetHeight;

    return this.panes.map(pane => {
      const rect = pane.getBoundingClientRect();
      const size = isHorizontal ? rect.width : rect.height;
      return (size / containerSize) * 100;
    });
  }

  private initializePaneSizes(): void {
    const totalPanes = this.panes.length;
    const defaultSize = 100 / totalPanes;

    this.panes.forEach((pane) => {
      const size = pane.getAttribute('size');
      if (size) {
        const value = parseFloat(size);
        if (size.includes('%')) {
          pane.style.flex = `0 0 ${value}%`;
        } else {
          const containerSize = this.splitterProps.layout === 'horizontal' 
            ? this.splitterElement!.offsetWidth 
            : this.splitterElement!.offsetHeight;
          const percent = (value / containerSize) * 100;
          pane.style.flex = `0 0 ${percent}%`;
        }
      } else {
        pane.style.flex = `0 0 ${defaultSize}%`;
      }
    });
  }

  private getClientPosition(e: MouseEvent | TouchEvent): { x: number; y: number } {
    if (e instanceof MouseEvent) {
      return { x: e.clientX, y: e.clientY };
    } else {
      const touch = e.touches[0] || e.changedTouches[0];
      return { x: touch.clientX, y: touch.clientY };
    }
  }

  private cleanupResizers(): void {
    this.resizers.forEach(resizer => {
      // 清理事件监听器
      const listeners = (resizer as any)._eventListeners;
      if (listeners) {
        document.removeEventListener('mousemove', listeners.doDrag);
        document.removeEventListener('mouseup', listeners.endDrag);
        document.removeEventListener('touchmove', listeners.doDrag);
        document.removeEventListener('touchend', listeners.endDrag);
      }
      resizer.remove();
    });
    this.resizers = [];
  }

  private getSplitterClasses(): string {
    const { layout, disabled, size } = this.splitterProps;
    
    const classes = ['ew-splitter'];
    
    if (layout && layout !== 'horizontal') {
      classes.push(`ew-splitter--${layout}`);
    }
    
    if (disabled) classes.push('ew-splitter--disabled');
    if (size && size !== 'medium') {
      classes.push(`ew-splitter--${size}`);
    }

    return classes.join(' ');
  }

  disconnectedCallback(): void {
    this.cleanupResizers();
    // 清理窗口大小变化监听器
    window.removeEventListener('resize', this.handleResize.bind(this));
    clearTimeout((this as any)._resizeTimeout);
  }

  static get observedAttributes(): string[] {
    return ['layout', 'disabled', 'size'];
  }
}

// 注册组件
customElements.define('ew-splitter', EwSplitter); 
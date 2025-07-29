import { BaseComponent } from '../../../utils/base-component';
import { createSplitterPaneStyles } from './index-style';
import { ArrowIcon } from '@water-ui/icons';

export class EwSplitterPane extends BaseComponent {
  private index = 0;
  private size = '0%';
  private resizable = true;
  private collapsible = false;
  private layout: 'horizontal' | 'vertical' = 'horizontal';
  private isDragging = false;
  private startPosition = { x: 0, y: 0 };
  private startSizes: number[] = [];
  private cacheCollapsedSize: number[] = [];

  constructor() {
    super();
    this.initProps();
  }

  protected initProps(): void {
    this.size = this.getAttribute('size') || '0%';
    this.resizable = this.getAttribute('resizable') !== 'false';
    this.collapsible = this.hasAttribute('collapsible');
    
    // 获取父级 splitter 的布局
    const parentSplitter = this.closest('ew-splitter');
    if (parentSplitter) {
      this.layout = (parentSplitter as any).getLayout?.() || 'horizontal';
    }
  }

  protected render(): void {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <style>${createSplitterPaneStyles()}</style>
        <div class="ew-splitter-pane" style="flex-basis: ${this.size};">
          <slot></slot>
        </div>
        ${this.shouldShowBar() ? this.createSplitBar() : ''}
      `;
    } else {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot!.innerHTML = `
        <style>${createSplitterPaneStyles()}</style>
        <div class="ew-splitter-pane" style="flex-basis: ${this.size};">
          <slot></slot>
        </div>
        ${this.shouldShowBar() ? this.createSplitBar() : ''}
      `;
    }

    this.addEventListeners();
  }

  private shouldShowBar(): boolean {
    const parentSplitter = this.closest('ew-splitter');
    if (!parentSplitter) return false;
    
    const panels = Array.from(parentSplitter.querySelectorAll('ew-splitter-pane'));
    return this.index < panels.length - 1;
  }

  private createSplitBar(): string {
    const isHorizontal = this.layout === 'horizontal';
    const startCollapsible = this.isStartCollapsible();
    const endCollapsible = this.isEndCollapsible();
    
    return `
      <div class="ew-splitter-bar">
        ${startCollapsible ? `
          <div class="ew-splitter-collapse-icon ew-splitter-${this.layout}-collapse-icon-start" 
               data-action="collapse-start" title="折叠左侧面板">
            ${ArrowIcon({ direction: isHorizontal ? 'left' : 'left', size: '12px' })}
          </div>
        ` : ''}
        
        <div class="ew-splitter-dragger ${this.resizable ? '' : 'ew-splitter-dragger--disable'}" 
             data-action="drag" 
             style="
               width: ${isHorizontal ? '16px' : '100%'};
               height: ${isHorizontal ? '100%' : '16px'};
               cursor: ${isHorizontal ? 'col-resize' : 'row-resize'};
             ">
        </div>
        
        ${endCollapsible ? `
          <div class="ew-splitter-collapse-icon ew-splitter-${this.layout}-collapse-icon-end" 
               data-action="collapse-end" title="折叠右侧面板">
            ${ArrowIcon({ direction: isHorizontal ? 'right' : 'right', size: '12px' })}
          </div>
        ` : ''}
      </div>
    `;
  }

  private isStartCollapsible(): boolean {
    if (!this.collapsible) return false;
    
    const currentSize = this.getCurrentSizeValue();
    const nextSize = this.getNextSize();
    
    // 当前面板可折叠且有尺寸
    if (currentSize > 0) return true;
    
    // 下一个面板已折叠，当前面板有尺寸
    if (nextSize === 0 && currentSize > 0) return true;
    
    return false;
  }

  private isEndCollapsible(): boolean {
    const nextPanel = this.getNextPanel();
    if (!nextPanel) return false;
    
    const nextCollapsible = nextPanel.hasAttribute('collapsible');
    const currentSize = this.getCurrentSizeValue();
    const nextSize = this.getNextSize();
    
    // 下一个面板可折叠且有尺寸
    if (nextCollapsible && nextSize > 0) return true;
    
    // 当前面板已折叠，下一个面板有尺寸
    if (currentSize === 0 && nextSize > 0) return true;
    
    return false;
  }

  private getCurrentSizeValue(): number {
    const parentSplitter = this.closest('ew-splitter');
    if (!parentSplitter) return 0;
    
    const container = parentSplitter.shadowRoot?.querySelector('.ew-splitter') as HTMLElement;
    if (!container) return 0;
    
    const totalSize = this.layout === 'horizontal' ? container.offsetWidth : container.offsetHeight;
    if (totalSize === 0) return 0;
    
    const panelElement = this.shadowRoot?.querySelector('.ew-splitter-pane') as HTMLElement;
    if (!panelElement) return 0;
    
    const panelSize = this.layout === 'horizontal' ? panelElement.offsetWidth : panelElement.offsetHeight;
    return (panelSize / totalSize) * 100;
  }

  private getNextSize(): number {
    const nextPanel = this.getNextPanel();
    if (!nextPanel) return 0;
    
    return (nextPanel as any).getCurrentSizeValue?.() || 0;
  }

  private getNextPanel(): HTMLElement | null {
    const parentSplitter = this.closest('ew-splitter');
    if (!parentSplitter) return null;
    
    const panels = Array.from(parentSplitter.querySelectorAll('ew-splitter-pane'));
    return panels[this.index + 1] as HTMLElement | null;
  }

  private addEventListeners(): void {
    const bar = this.shadowRoot?.querySelector('.ew-splitter-bar');
    if (!bar) return;

    // 拖拽事件
    const dragger = bar.querySelector('[data-action="drag"]');
    if (dragger && this.resizable) {
      dragger.addEventListener('mousedown', (e) => this.startDrag(e as MouseEvent));
      dragger.addEventListener('touchstart', (e) => this.startDrag(e as TouchEvent));
    }

    // 折叠事件
    bar.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const actionElement = target.closest('[data-action]') as HTMLElement;
      const action = actionElement?.getAttribute('data-action');
      
      if (action === 'collapse-start') {
        this.handleCollapse('start');
      } else if (action === 'collapse-end') {
        this.handleCollapse('end');
      }
    });
  }

  private startDrag(event: MouseEvent | TouchEvent): void {
    if (this.isDragging) return;
    
    this.isDragging = true;
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;
    this.startPosition = { x: clientX, y: clientY };
    this.startSizes = this.getAllSizes();
    
    this.dispatchCustomEvent('resize-start', { index: this.index, sizes: this.startSizes });
    
    document.addEventListener('mousemove', this.handleDrag);
    document.addEventListener('touchmove', this.handleDrag);
    document.addEventListener('mouseup', this.stopDrag);
    document.addEventListener('touchend', this.stopDrag);
  }

  private handleDrag = (event: MouseEvent | TouchEvent): void => {
    if (!this.isDragging) return;
    
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;
    const delta = this.layout === 'horizontal' ? clientX - this.startPosition.x : clientY - this.startPosition.y;
    
    this.updateSizes(delta);
    this.dispatchCustomEvent('resize', { index: this.index, sizes: this.getAllSizes() });
  };

  private stopDrag = (): void => {
    if (!this.isDragging) return;
    
    this.isDragging = false;
    this.dispatchCustomEvent('resize-end', { index: this.index, sizes: this.getAllSizes() });
    
    document.removeEventListener('mousemove', this.handleDrag);
    document.removeEventListener('touchmove', this.handleDrag);
    document.removeEventListener('mouseup', this.stopDrag);
    document.removeEventListener('touchend', this.stopDrag);
  };

  private handleCollapse(type: 'start' | 'end'): void {
    if (!this.cacheCollapsedSize.length) {
      this.cacheCollapsedSize = [...this.getAllSizes()];
    }

    const currentSizes = this.getAllSizes();
    const currentIndex = type === 'start' ? this.index : this.index + 1;
    const targetIndex = type === 'start' ? this.index + 1 : this.index;

    const currentSize = currentSizes[currentIndex];
    const targetSize = currentSizes[targetIndex];

    if (currentSize !== 0 && targetSize !== 0) {
      // 折叠
      currentSizes[currentIndex] = 0;
      currentSizes[targetIndex] += currentSize;
      this.cacheCollapsedSize[this.index] = currentSize;
    } else {
      // 展开
      const totalSize = currentSize + targetSize;
      const targetCacheCollapsedSize = this.cacheCollapsedSize[this.index];
      const currentCacheCollapsedSize = totalSize - targetCacheCollapsedSize;

      currentSizes[targetIndex] = targetCacheCollapsedSize;
      currentSizes[currentIndex] = currentCacheCollapsedSize;
    }

    this.applySizes(currentSizes);
    this.dispatchCustomEvent('collapse', { 
      index: this.index, 
      type, 
      sizes: currentSizes 
    });
    
    // 重新渲染以更新按钮显示
    this.render();
  }

  private getAllSizes(): number[] {
    const parentSplitter = this.closest('ew-splitter');
    if (!parentSplitter) return [];
    
    const panels = Array.from(parentSplitter.querySelectorAll('ew-splitter-pane'));
    return panels.map(panel => (panel as any).getCurrentSizeValue?.() || 0);
  }

  private updateSizes(delta: number): void {
    const parentSplitter = this.closest('ew-splitter');
    if (!parentSplitter) return;
    
    const container = parentSplitter.shadowRoot?.querySelector('.ew-splitter') as HTMLElement;
    if (!container) return;
    
    const totalSize = this.layout === 'horizontal' ? container.offsetWidth : container.offsetHeight;
    if (totalSize === 0) return;
    
    const deltaPercent = (delta / totalSize) * 100;
    const newSizes = [...this.startSizes];
    newSizes[this.index] += deltaPercent;
    newSizes[this.index + 1] -= deltaPercent;
    
    this.applySizes(newSizes);
  }

  private applySizes(sizes: number[]): void {
    const parentSplitter = this.closest('ew-splitter');
    if (!parentSplitter) return;
    
    const panels = Array.from(parentSplitter.querySelectorAll('ew-splitter-pane'));
    panels.forEach((panel: any, index) => {
      if (panel.setSize && sizes[index] !== undefined) {
        panel.setSize(`${sizes[index]}%`);
      }
    });
  }

  // 公共方法
  public setIndex(index: number): void {
    this.index = index;
  }

  public setSize(size: string): void {
    this.size = size;
    const panelElement = this.shadowRoot?.querySelector('.ew-splitter-pane') as HTMLElement;
    if (panelElement) {
      panelElement.style.flexBasis = size;
    }
  }

  public getSize(): string {
    return this.size;
  }

  public getCurrentSize(): number {
    return this.getCurrentSizeValue();
  }

  // 属性变化监听
  static get observedAttributes(): string[] {
    return ['size', 'min', 'max', 'resizable', 'collapsible'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
    if (oldValue === newValue) return;
    
    switch (name) {
      case 'size':
        this.size = newValue;
        this.setSize(newValue);
        break;
      case 'min':
        break;
      case 'max':
        break;
      case 'resizable':
        this.resizable = newValue !== 'false';
        this.render();
        break;
      case 'collapsible':
        this.collapsible = this.hasAttribute('collapsible');
        this.render();
        break;
    }
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.render();
  }
}

customElements.define('ew-splitter-pane', EwSplitterPane); 
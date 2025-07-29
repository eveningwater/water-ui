import { BaseComponent } from '../../utils/base-component';
import { SplitterProps } from '../../types';
import { splitterStyles } from './index-style';
import { ArrowIcon } from '@water-ui/icons';

export class EwSplitter extends BaseComponent {
  private splitterProps: SplitterProps = {};
  private panels: HTMLElement[] = [];
  private dividers: HTMLElement[] = [];
  private isDragging = false;
  private currentDividerIndex = -1;
  private startPosition = { x: 0, y: 0 };
  private startSizes: number[] = [];
  private observer: MutationObserver | null = null;

  protected initProps(): void {
    super.initProps();
    this.splitterProps = {
      layout: (this.getAttribute('layout') as SplitterProps['layout']) || 'horizontal',
    };
  }

  protected render(): void {
    this.shadow.innerHTML = '';
    this.injectStyles(splitterStyles);
    const splitter = this.createElement('div', { class: this.getSplitterClasses() });
    this.panels = Array.from(this.querySelectorAll('ew-splitter-pane'));
    
    // 为每个面板分配 slot 名称
    this.panels.forEach((panel, index) => {
      panel.setAttribute('slot', `panel-${index}`);
    });
    
    this.createSplitterContent(splitter);
    this.shadow.appendChild(splitter);
    this.initializeSizes();
  }

  private createSplitterContent(splitter: HTMLElement): void {
    this.panels.forEach((_panel, index) => {
      const panelContainer = this.createElement('div', {
        class: `ew-splitter-panel ew-splitter-panel-container`
      });
      // slot 分发
      const slot = this.createElement('slot', { name: `panel-${index}` });
      panelContainer.appendChild(slot);
      splitter.appendChild(panelContainer);
      if (index < this.panels.length - 1) {
        const divider = this.createDivider(index);
        splitter.appendChild(divider);
        this.dividers.push(divider);
      }
    });
  }

  private createDivider(index: number): HTMLElement {
    const divider = this.createElement('div', {
      class: this.getDividerClasses()
    });
    this.addDividerEventListeners(divider, index);
    this.addCollapseButtons(divider, index);
    return divider;
  }

  private addCollapseButtons(divider: HTMLElement, index: number): void {
    const leftPanel = this.panels[index];
    const rightPanel = this.panels[index + 1];
    
    // 检查左右面板是否可折叠
    const leftCollapsible = leftPanel.hasAttribute('collapsible');
    const rightCollapsible = rightPanel.hasAttribute('collapsible');
    
    // 检查当前折叠状态
    const isLeftCollapsed = leftPanel.hasAttribute('data-collapsed');
    const isRightCollapsed = rightPanel.hasAttribute('data-collapsed');
    
    // Element Plus 折叠规则：
    // 1. 每个分割条都有两个折叠按钮（如果相邻面板可折叠）
    // 2. 左侧按钮：控制左侧面板的折叠/展开
    // 3. 右侧按钮：控制右侧面板的折叠/展开
    // 4. 按钮的显示/隐藏基于面板的折叠状态
    
    if (leftCollapsible) {
      const leftButton = this.createElement('button', {
        class: 'ew-splitter-collapse-button ew-splitter-collapse-button--left',
        title: isLeftCollapsed ? '展开左侧面板' : '折叠左侧面板'
      });
      leftButton.innerHTML = ArrowIcon({ direction: 'left', size: '12px' });
      leftButton.addEventListener('click', (e) => {
        e.stopPropagation();
        this.handleCollapseButtonClick(index, 'left');
      });
      divider.appendChild(leftButton);
    }
    
    if (rightCollapsible) {
      const rightButton = this.createElement('button', {
        class: 'ew-splitter-collapse-button ew-splitter-collapse-button--right',
        title: isRightCollapsed ? '展开右侧面板' : '折叠右侧面板'
      });
      rightButton.innerHTML = ArrowIcon({ direction: 'right', size: '12px' });
      rightButton.addEventListener('click', (e) => {
        e.stopPropagation();
        this.handleCollapseButtonClick(index, 'right');
      });
      divider.appendChild(rightButton);
    }
  }

  private handleCollapseButtonClick(dividerIndex: number, direction: 'left' | 'right'): void {
    const leftPanel = this.panels[dividerIndex] as any;
    const rightPanel = this.panels[dividerIndex + 1] as any;
    
    if (!leftPanel || !rightPanel) return;
    
    // 确定要操作的面板
    const targetPanel = direction === 'left' ? leftPanel : rightPanel;
    const isCollapsed = targetPanel.hasAttribute('data-collapsed');
    
    if (isCollapsed) {
      // 展开面板
      this.expandPanel(targetPanel);
    } else {
      // 折叠面板
      this.collapsePanel(targetPanel);
    }
    
    // 触发折叠事件
    this.dispatchCustomEvent('collapse', {
      index: dividerIndex,
      direction,
      panel: targetPanel,
      collapsed: !isCollapsed
    });
    
    // 重新渲染以更新按钮显示
    this.render();
  }

  private collapsePanel(panel: any): void {
    // 保存被折叠面板的原始尺寸
    const currentSize = panel.getSize ? panel.getSize() : panel.getAttribute('size') || '30%';
    panel.setAttribute('data-original-size', currentSize);
    panel.setAttribute('data-collapsed', 'true');
    
    // 设置被折叠面板尺寸为0
    if (panel.setSize) {
      panel.setSize('0%');
    }
    
    // 重新计算其他面板的尺寸
    this.updateSizes(0);
  }

  private expandPanel(panel: any): void {
    // 恢复原始尺寸
    const originalSize = panel.getAttribute('data-original-size') || '30%';
    if (panel.setSize) {
      panel.setSize(originalSize);
    }
    
    // 移除折叠状态
    panel.removeAttribute('data-collapsed');
    panel.removeAttribute('data-original-size');
  }

  private addDividerEventListeners(divider: HTMLElement, index: number): void {
    const leftPanel = this.panels[index];
    const rightPanel = this.panels[index + 1];
    if (!leftPanel || !rightPanel) return;
    const leftResizable = leftPanel.getAttribute('resizable') !== 'false';
    const rightResizable = rightPanel.getAttribute('resizable') !== 'false';
    if (!leftResizable || !rightResizable) return;
    divider.addEventListener('mousedown', (e) => {
      e.preventDefault();
      this.startDrag(e, index);
    });
    divider.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.startDrag(e, index);
    });
  }

  private startDrag(event: MouseEvent | TouchEvent, index: number): void {
    if (this.isDragging) return;
    this.isDragging = true;
    this.currentDividerIndex = index;
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;
    this.startPosition = { x: clientX, y: clientY };
    this.startSizes = this.getCurrentSizes();
    this.dispatchCustomEvent('resize-start', { index, sizes: this.startSizes });
    document.addEventListener('mousemove', this.handleDrag);
    document.addEventListener('touchmove', this.handleDrag);
    document.addEventListener('mouseup', this.stopDrag);
    document.addEventListener('touchend', this.stopDrag);
  }

  private handleDrag = (event: MouseEvent | TouchEvent): void => {
    if (!this.isDragging) return;
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;
    const delta = this.splitterProps.layout === 'horizontal' ? clientX - this.startPosition.x : clientY - this.startPosition.y;
    this.updateSizes(delta);
  };

  private stopDrag = (): void => {
    if (!this.isDragging) return;
    this.isDragging = false;
    const index = this.currentDividerIndex;
    const sizes = this.getCurrentSizes();
    this.currentDividerIndex = -1;
    this.dispatchCustomEvent('resize-end', { index, sizes });
    document.removeEventListener('mousemove', this.handleDrag);
    document.removeEventListener('touchmove', this.handleDrag);
    document.removeEventListener('mouseup', this.stopDrag);
    document.removeEventListener('touchend', this.stopDrag);
  };

  private getCurrentSizes(): number[] {
    const container = this.shadow.querySelector('.ew-splitter') as HTMLElement;
    if (!container) return [];
    const totalSize = this.splitterProps.layout === 'horizontal' ? container.offsetWidth : container.offsetHeight;
    if (totalSize === 0) return [];
    const panelContainers = Array.from(container.children).filter(child => child.classList.contains('ew-splitter-panel-container')) as HTMLElement[];
    return panelContainers.map(panelContainer => {
      const size = this.splitterProps.layout === 'horizontal' ? panelContainer.offsetWidth : panelContainer.offsetHeight;
      return (size / totalSize) * 100;
    });
  }

  private updateSizes(delta: number): void {
    if (this.currentDividerIndex < 0 || this.currentDividerIndex >= this.panels.length - 1) return;
    const container = this.shadow.querySelector('.ew-splitter') as HTMLElement;
    if (!container) return;
    const totalSize = this.splitterProps.layout === 'horizontal' ? container.offsetWidth : container.offsetHeight;
    if (totalSize === 0) return;
    const deltaPercent = (delta / totalSize) * 100;
    const newSizes = [...this.startSizes];
    newSizes[this.currentDividerIndex] += deltaPercent;
    newSizes[this.currentDividerIndex + 1] -= deltaPercent;
    this.applySizes(newSizes);
    this.dispatchCustomEvent('resize', { index: this.currentDividerIndex, sizes: this.getCurrentSizes() });
  }

  private applySizes(sizes: number[]): void {
    const container = this.shadow.querySelector('.ew-splitter') as HTMLElement;
    if (!container) return;
    const panelContainers = Array.from(container.children).filter(child => child.classList.contains('ew-splitter-panel-container')) as HTMLElement[];
    panelContainers.forEach((panelContainer, index) => {
      if (index < sizes.length) {
        const size = Math.max(0, Math.min(100, sizes[index]));
        panelContainer.style.flex = `0 0 ${size}%`;
      }
    });
  }

  private initializeSizes(): void {
    if (this.panels.length === 0) return;
    const container = this.shadow.querySelector('.ew-splitter') as HTMLElement;
    if (!container) return;
    const panelContainers = Array.from(container.children).filter(child => child.classList.contains('ew-splitter-panel-container')) as HTMLElement[];
    const hasFixedSizes = this.panels.some(panel => panel.hasAttribute('size'));
    if (!hasFixedSizes) {
      const equalSize = 100 / panelContainers.length;
      panelContainers.forEach(panelContainer => {
        panelContainer.style.flex = `0 0 ${equalSize}%`;
      });
    } else {
      this.panels.forEach((panel, index) => {
        if (index < panelContainers.length) {
          const size = panel.getAttribute('size');
          if (size) {
            const sizeValue = size.includes('%') ? size : `${size}%`;
            panelContainers[index].style.flex = `0 0 ${sizeValue}`;
          }
        }
      });
    }
  }

  private getSplitterClasses(): string {
    const classes = ['ew-splitter'];
    if (this.splitterProps.layout === 'vertical') {
      classes.push('ew-splitter--vertical');
    } else {
      classes.push('ew-splitter--horizontal');
    }
    return classes.join(' ');
  }

  private getDividerClasses(): string {
    const classes = ['ew-splitter-divider'];
    if (this.splitterProps.layout === 'vertical') {
      classes.push('ew-splitter-divider--vertical');
    } else {
      classes.push('ew-splitter-divider--horizontal');
    }
    return classes.join(' ');
  }

  public setLayout(layout: 'horizontal' | 'vertical'): void {
    this.splitterProps.layout = layout;
    this.setAttribute('layout', layout);
    this.render();
  }

  public getLayout(): 'horizontal' | 'vertical' {
    return this.splitterProps.layout || 'horizontal';
  }

  static get observedAttributes(): string[] {
    return ['layout'];
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.setupMutationObserver();
  }

  disconnectedCallback(): void {
    this.cleanupMutationObserver();
  }

  private setupMutationObserver(): void {
    this.observer = new MutationObserver((mutations) => {
      let shouldReRender = false;
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE && (node as Element).tagName.toLowerCase() === 'ew-splitter-pane') {
              shouldReRender = true;
            }
          });
          mutation.removedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE && (node as Element).tagName.toLowerCase() === 'ew-splitter-pane') {
              shouldReRender = true;
            }
          });
        }
      });
      if (shouldReRender) {
        this.render();
      }
    });
    this.observer.observe(this, {
      childList: true,
      subtree: false
    });
  }

  private cleanupMutationObserver(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }

  attributeChangedCallback(_name: string, oldValue: string | null, newValue: string | null): void {
    if (oldValue !== newValue) {
      this.initProps();
      this.render();
    }
  }
}

customElements.define('ew-splitter', EwSplitter); 
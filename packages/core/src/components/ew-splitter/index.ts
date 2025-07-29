import { BaseComponent } from '../../utils/base-component';
import { createSplitterStyles } from './index-style';

export class EwSplitter extends BaseComponent {
  private panels: HTMLElement[] = [];
  private layout: 'horizontal' | 'vertical' = 'horizontal';

  constructor() {
    super();
    this.initProps();
  }

  protected initProps(): void {
    this.layout = (this.getAttribute('layout') as 'horizontal' | 'vertical') || 'horizontal';
  }

  protected render(): void {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <style>${createSplitterStyles()}</style>
        <div class="ew-splitter ew-splitter--${this.layout}">
          <slot></slot>
        </div>
      `;
    } else {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot!.innerHTML = `
        <style>${createSplitterStyles()}</style>
        <div class="ew-splitter ew-splitter--${this.layout}">
          <slot></slot>
        </div>
      `;
    }

    // 监听子元素变化
    this.observeChildren();
  }

  private observeChildren(): void {
    const observer = new MutationObserver(() => {
      this.updatePanels();
    });

    observer.observe(this, {
      childList: true,
      subtree: true
    });

    this.updatePanels();
  }

  private updatePanels(): void {
    this.panels = Array.from(this.querySelectorAll('ew-splitter-pane'));
    
    // 通知每个面板更新索引
    this.panels.forEach((panel: any, index) => {
      if (panel.setIndex) {
        panel.setIndex(index);
      }
    });

    // 初始化面板尺寸
    this.initializeSizes();
  }

  private initializeSizes(): void {
    if (this.panels.length === 0) return;

    const totalSize = this.layout === 'horizontal' ? this.offsetWidth : this.offsetHeight;
    if (totalSize === 0) return;

    const sizes: number[] = [];
    let totalPercent = 0;
    let panelsWithoutSize = 0;

    // 收集已设置的尺寸
    this.panels.forEach((panel: any) => {
      const size = panel.getAttribute('size');
      if (size) {
        const percent = this.parseSize(size);
        sizes.push(percent);
        totalPercent += percent;
      } else {
        sizes.push(0);
        panelsWithoutSize++;
      }
    });

    // 为未设置尺寸的面板分配剩余空间
    if (panelsWithoutSize > 0) {
      const remainingPercent = 100 - totalPercent;
      const percentPerPanel = remainingPercent / panelsWithoutSize;
      
      this.panels.forEach((_, index) => {
        if (sizes[index] === 0) {
          sizes[index] = percentPerPanel;
        }
      });
    }

    // 应用尺寸
    this.applySizes(sizes);
  }

  private parseSize(size: string): number {
    if (size.endsWith('%')) {
      return parseFloat(size);
    }
    if (size.endsWith('px')) {
      return parseFloat(size);
    }
    return parseFloat(size);
  }

  private applySizes(sizes: number[]): void {
    this.panels.forEach((panel: any, index) => {
      if (panel.setSize && sizes[index] !== undefined) {
        panel.setSize(`${sizes[index]}%`);
      }
    });
  }

  // 公共方法
  public setLayout(layout: 'horizontal' | 'vertical'): void {
    this.layout = layout;
    this.setAttribute('layout', layout);
    this.render();
  }

  public getLayout(): 'horizontal' | 'vertical' {
    return this.layout;
  }

  public getPanels(): HTMLElement[] {
    return this.panels;
  }

  // 属性变化监听
  static get observedAttributes(): string[] {
    return ['layout'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
    if (name === 'layout' && oldValue !== newValue) {
      this.layout = newValue as 'horizontal' | 'vertical';
      this.render();
    }
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.render();
  }
}

customElements.define('ew-splitter', EwSplitter); 
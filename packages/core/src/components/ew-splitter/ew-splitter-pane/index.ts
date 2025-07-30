import { BaseComponent } from '../../../utils/base-component';
import { SplitterPaneProps } from '../../../types';
import { splitterPaneStyles } from './index-style';

export class EwSplitterPane extends BaseComponent {
  private paneProps: SplitterPaneProps = {};
  private paneElement: HTMLElement | null = null;
  private isCollapsed = false;
  private originalSize = '';

  protected initProps(): void {
    super.initProps();
    this.paneProps = {
      size: this.getAttribute('size') || '',
      min: this.getAttribute('min') || '50',
      max: this.getAttribute('max') || '',
      resizable: !this.hasAttribute('resizable') || this.getAttribute('resizable') !== 'false',
      collapsible: this.hasAttribute('collapsible')
    };
  }

  protected render(): void {
    const { collapsible } = this.paneProps;
    
    // 创建面板容器
    this.paneElement = this.createElement('div', {
      class: this.getPaneClasses()
    });

    // 添加插槽内容
    const slot = this.createElement('slot');
    this.paneElement.appendChild(slot);

    // 如果可折叠，添加折叠按钮
    if (collapsible) {
      const collapseButton = this.createCollapseButton();
      this.paneElement.appendChild(collapseButton);
    }

    // 清空并重新渲染
    this.shadow.innerHTML = '';
    
    // 注入样式
    this.injectStyles(splitterPaneStyles);
    
    // 添加面板元素
    this.shadow.appendChild(this.paneElement);
  }

  private createCollapseButton(): HTMLElement {
    const button = this.createElement('button', {
      class: 'ew-splitter-pane__collapse-btn',
      type: 'button',
      'aria-label': this.isCollapsed ? '展开面板' : '折叠面板'
    });

    const icon = this.createElement('span', {
      class: 'ew-splitter-pane__collapse-icon'
    });
    icon.innerHTML = this.isCollapsed ? '◀' : '▶';
    button.appendChild(icon);

    // 添加点击事件
    button.addEventListener('click', () => {
      this.toggleCollapse();
    });

    return button;
  }

  private toggleCollapse(): void {
    if (this.isCollapsed) {
      this.expand();
    } else {
      this.collapse();
    }
  }

  private collapse(): void {
    if (this.isCollapsed) return;

    this.isCollapsed = true;
    this.originalSize = this.style.flex || '';
    this.style.flex = '0 0 0%';
    this.paneElement?.classList.add('ew-splitter-pane--collapsed');

    // 更新折叠按钮图标和aria-label
    const button = this.paneElement?.querySelector('.ew-splitter-pane__collapse-btn') as HTMLElement;
    const icon = this.paneElement?.querySelector('.ew-splitter-pane__collapse-icon');
    if (button) {
      button.setAttribute('aria-label', '展开面板');
    }
    if (icon) {
      icon.innerHTML = '◀';
    }

    // 触发折叠事件
    this.dispatchCustomEvent('collapse', { collapsed: true });
  }

  private expand(): void {
    if (!this.isCollapsed) return;

    this.isCollapsed = false;
    this.style.flex = this.originalSize || '1 1 auto';
    this.paneElement?.classList.remove('ew-splitter-pane--collapsed');

    // 更新折叠按钮图标和aria-label
    const button = this.paneElement?.querySelector('.ew-splitter-pane__collapse-btn') as HTMLElement;
    const icon = this.paneElement?.querySelector('.ew-splitter-pane__collapse-icon');
    if (button) {
      button.setAttribute('aria-label', '折叠面板');
    }
    if (icon) {
      icon.innerHTML = '▶';
    }

    // 触发展开事件
    this.dispatchCustomEvent('expand', { collapsed: false });
  }

  private getPaneClasses(): string {
    const { collapsible } = this.paneProps;
    
    const classes = ['ew-splitter-pane'];
    
    if (collapsible) {
      classes.push('ew-splitter-pane--collapsible');
    }

    if (this.isCollapsed) {
      classes.push('ew-splitter-pane--collapsed');
    }

    return classes.join(' ');
  }

  // 公共方法
  public collapsePane(): void {
    this.collapse();
  }

  public expandPane(): void {
    this.expand();
  }

  public isCollapsedState(): boolean {
    return this.isCollapsed;
  }

  public setSize(size: string): void {
    if (!this.isCollapsed) {
      this.style.flex = `0 0 ${size}`;
    }
  }

  public getSize(): string {
    return this.style.flex || '1 1 auto';
  }

  static get observedAttributes(): string[] {
    return ['size', 'min', 'max', 'resizable', 'collapsible'];
  }
}

// 注册组件
customElements.define('ew-splitter-pane', EwSplitterPane); 
import { BaseComponent } from '../../utils/base-component';
import { tableStyles } from './index-style';

export class EwTable extends BaseComponent {

  protected initProps(): void {
    super.initProps();
    // 表格组件的属性初始化逻辑
    // 这里可以根据需要添加更多属性处理
  }

  protected render(): void {
    // 创建表格元素
    const table = this.createElement('table', { class: this.getTableClasses() });

    // 获取插槽内容
    const slot = this.createElement('slot');
    table.appendChild(slot);

    // 清空并重新渲染
    this.shadow.innerHTML = '';
    
    // 注入样式
    this.injectStyles(tableStyles);
    
    // 添加表格元素
    this.shadow.appendChild(table);
  }

  private getTableClasses(): string {
    const classes = ['ew-table'];
    return classes.join(' ');
  }

  static get observedAttributes(): string[] {
    return [
      'data',
      'columns',
      'stripe',
      'border',
      'size',
      'fit',
      'show-header',
      'highlight-current-row',
      'current-row-key',
      'row-class-name',
      'row-style',
      'cell-class-name',
      'cell-style',
      'header-row-class-name',
      'header-row-style',
      'header-cell-class-name',
      'header-cell-style',
      'row-key',
      'empty-text',
      'default-expand-all',
      'expand-row-keys',
      'default-sort',
      'tooltip-effect',
      'show-summary',
      'sum-text',
      'summary-method',
      'span-method',
      'select-on-indeterminate',
      'indent',
      'lazy',
      'load',
      'tree-props',
      'table-layout',
      'scrollbar-always-on',
      'flexible'
    ];
  }

  attributeChangedCallback(_name: string, oldValue: string | null, newValue: string | null): void {
    if (oldValue !== newValue) {
      this.render();
    }
  }
}

// 注册组件
customElements.define('ew-table', EwTable); 
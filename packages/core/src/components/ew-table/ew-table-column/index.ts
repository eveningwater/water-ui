import { BaseComponent } from '../../../utils/base-component';
import { TableColumn } from '../../../types';

export class EwTableColumn extends BaseComponent {
  private columnProps: TableColumn = {};

  protected initProps(): void {
    super.initProps();
    this.columnProps = {
      type: (this.getAttribute('type') as TableColumn['type']) || undefined,
      index: this.getAttribute('index') ? parseInt(this.getAttribute('index')!) : undefined,
      columnKey: this.getAttribute('column-key') || undefined,
      label: this.getAttribute('label') || '',
      prop: this.getAttribute('prop') || '',
      width: this.getAttribute('width') || undefined,
      minWidth: this.getAttribute('min-width') || undefined,
      fixed: this.getAttribute('fixed') as TableColumn['fixed'] || undefined,
      sortable: this.hasAttribute('sortable'),
      sortMethod: undefined, // 需要从父组件传入
      sortBy: this.getAttribute('sort-by') || undefined,
      sortOrders: this.getAttribute('sort-orders') ? 
        JSON.parse(this.getAttribute('sort-orders')!) : undefined,
      resizable: this.hasAttribute('resizable'),
      formatter: undefined, // 需要从父组件传入
      showOverflowTooltip: this.hasAttribute('show-overflow-tooltip'),
      align: (this.getAttribute('align') as TableColumn['align']) || 'left',
      headerAlign: (this.getAttribute('header-align') as TableColumn['headerAlign']) || 'left',
      className: this.getAttribute('class-name') || undefined,
      labelClassName: this.getAttribute('label-class-name') || undefined,
      selectable: undefined, // 需要从父组件传入
      reserveSelection: this.hasAttribute('reserve-selection'),
      filters: this.getAttribute('filters') ? 
        JSON.parse(this.getAttribute('filters')!) : undefined,
      filterPlacement: this.getAttribute('filter-placement') || undefined,
      filterMultiple: this.hasAttribute('filter-multiple'),
      filterMethod: undefined, // 需要从父组件传入
      filteredValue: this.getAttribute('filtered-value') ? 
        JSON.parse(this.getAttribute('filtered-value')!) : undefined
    };
  }

  protected render(): void {
    // 表格列组件不需要渲染自己的内容
    // 它只是用来定义列的配置，实际的渲染由父表格组件处理
    this.shadow.innerHTML = '';
  }

  // 获取列配置
  public getColumnProps(): TableColumn {
    return this.columnProps;
  }

  // 更新列配置
  public updateColumnProps(props: Partial<TableColumn>): void {
    this.columnProps = { ...this.columnProps, ...props };
  }

  static get observedAttributes(): string[] {
    return [
      'type',
      'index',
      'column-key',
      'label',
      'prop',
      'width',
      'min-width',
      'fixed',
      'sortable',
      'sort-by',
      'sort-orders',
      'resizable',
      'show-overflow-tooltip',
      'align',
      'header-align',
      'class-name',
      'label-class-name',
      'reserve-selection',
      'filters',
      'filter-placement',
      'filter-multiple',
      'filtered-value'
    ];
  }

  attributeChangedCallback(_name: string, oldValue: string | null, newValue: string | null): void {
    if (oldValue !== newValue) {
      this.initProps();
      // 通知父表格组件列配置已更新
      this.dispatchCustomEvent('column-change', this.columnProps);
    }
  }
}

// 注册组件
customElements.define('ew-table-column', EwTableColumn); 
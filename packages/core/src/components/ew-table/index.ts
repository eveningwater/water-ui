import { BaseComponent } from '../../utils/base-component';
import { TableProps, TableColumn } from '../../types';
import { tableStyles } from './index-style';

export class EwTable extends BaseComponent {
  private tableProps: TableProps = {
    data: [],
    columns: []
  };
  private columns: TableColumn[] = [];
  private selectedRows: any[] = [];
  private expandedRows: any[] = [];
  private sortState: { prop: string; order: 'ascending' | 'descending' | null } = { prop: '', order: null };

  protected initProps(): void {
    super.initProps();
    this.tableProps = {
      data: this.getAttribute('data') ? JSON.parse(this.getAttribute('data')!) : [],
      columns: this.getAttribute('columns') ? JSON.parse(this.getAttribute('columns')!) : [],
      stripe: this.hasAttribute('stripe'),
      border: this.hasAttribute('border'),
      size: (this.getAttribute('size') as TableProps['size']) || 'medium',
      fit: this.hasAttribute('fit'),
      showHeader: this.getAttribute('show-header') !== 'false',
      highlightCurrentRow: this.hasAttribute('highlight-current-row'),
      currentRowKey: this.getAttribute('current-row-key') || undefined,
      rowClassName: this.getAttribute('row-class-name') || undefined,
      rowStyle: this.getAttribute('row-style') ? JSON.parse(this.getAttribute('row-style')!) : undefined,
      cellClassName: this.getAttribute('cell-class-name') || undefined,
      cellStyle: this.getAttribute('cell-style') ? JSON.parse(this.getAttribute('cell-style')!) : undefined,
      headerRowClassName: this.getAttribute('header-row-class-name') || undefined,
      headerRowStyle: this.getAttribute('header-row-style') ? JSON.parse(this.getAttribute('header-row-style')!) : undefined,
      headerCellClassName: this.getAttribute('header-cell-class-name') || undefined,
      headerCellStyle: this.getAttribute('header-cell-style') ? JSON.parse(this.getAttribute('header-cell-style')!) : undefined,
      rowKey: this.getAttribute('row-key') || 'id',
      emptyText: this.getAttribute('empty-text') || '暂无数据',
      defaultExpandAll: this.hasAttribute('default-expand-all'),
      expandRowKeys: this.getAttribute('expand-row-keys') ? JSON.parse(this.getAttribute('expand-row-keys')!) : [],
      defaultSort: this.getAttribute('default-sort') ? JSON.parse(this.getAttribute('default-sort')!) : undefined,
      tooltipEffect: (this.getAttribute('tooltip-effect') as TableProps['tooltipEffect']) || 'dark',
      showSummary: this.hasAttribute('show-summary'),
      sumText: this.getAttribute('sum-text') || '合计',
      summaryMethod: undefined,
      spanMethod: undefined,
      selectOnIndeterminate: this.hasAttribute('select-on-indeterminate'),
      indent: this.getAttribute('indent') ? parseInt(this.getAttribute('indent')!) : 16,
      lazy: this.hasAttribute('lazy'),
      load: undefined,
      treeProps: this.getAttribute('tree-props') ? JSON.parse(this.getAttribute('tree-props')!) : undefined,
      tableLayout: (this.getAttribute('table-layout') as TableProps['tableLayout']) || 'auto',
      scrollbarAlwaysOn: this.hasAttribute('scrollbar-always-on'),
      flexible: this.hasAttribute('flexible')
    };
  }

  protected render(): void {
    // 获取列配置
    this.updateColumns();
    
    // 如果没有列配置，延迟渲染
    if (this.columns.length === 0) {
      setTimeout(() => this.render(), 0);
      return;
    }
    
    // 创建表格容器
    const tableContainer = this.createElement('div', { class: 'ew-table__container' });
    
    // 创建表格元素
    const table = this.createElement('table', { class: this.getTableClasses() });
    
    // 渲染表头
    if (this.tableProps.showHeader) {
      const thead = this.renderHeader();
      table.appendChild(thead);
    }
    
    // 渲染表体
    const tbody = this.renderBody();
    table.appendChild(tbody);
    
    // 渲染汇总行
    if (this.tableProps.showSummary) {
      const tfoot = this.renderSummary();
      table.appendChild(tfoot);
    }
    
    tableContainer.appendChild(table);
    
    // 清空并重新渲染
    this.shadow.innerHTML = '';
    
    // 注入样式
    this.injectStyles(tableStyles);
    
    // 添加表格容器
    this.shadow.appendChild(tableContainer);
  }

  private updateColumns(): void {
    // 从子组件获取列配置
    this.columns = [];
    const columnElements = this.querySelectorAll('ew-table-column');
    
    columnElements.forEach((columnElement: any) => {
      if (columnElement.getColumnProps) {
        this.columns.push(columnElement.getColumnProps());
      }
    });
    
    // 如果没有子组件，使用props中的columns
    if (this.columns.length === 0 && this.tableProps.columns) {
      this.columns = this.tableProps.columns;
    }
  }

  private renderHeader(): HTMLTableSectionElement {
    const thead = this.createElement('thead') as HTMLTableSectionElement;
    const headerRow = this.createElement('tr');
    
    this.columns.forEach((column, index) => {
      const th = this.createElement('th', {
        class: this.getHeaderCellClasses(column, index),
        style: this.getHeaderCellStyle(column, index)
      });
      
      // 选择列
      if (column.type === 'selection') {
        const checkbox = this.createElement('ew-checkbox', {
          class: 'ew-table__checkbox ew-table__checkbox--header',
          ...(this.isAllSelected() ? { 'model-value': 'true' } : {}),
          ...(this.isIndeterminate() ? { indeterminate: '' } : {})
        });
        checkbox.addEventListener('change', this.handleSelectAll.bind(this));
        th.appendChild(checkbox);
      }
      // 序号列
      else if (column.type === 'index') {
        const indexSpan = this.createElement('span', { class: 'ew-table__index' });
        indexSpan.textContent = '#';
        th.appendChild(indexSpan);
      }
      // 展开列
      else if (column.type === 'expand') {
        th.textContent = '';
      }
      // 普通列
      else {
        th.textContent = column.label || '';
        
        // 添加排序功能
        if (column.sortable) {
          const sortIcon = this.createElement('span', { class: 'ew-table__sort-icon' });
          sortIcon.innerHTML = this.getSortIcon(column.prop || '');
          sortIcon.addEventListener('click', () => this.handleSort(column));
          th.appendChild(sortIcon);
        }
      }
      
      headerRow.appendChild(th);
    });
    
    thead.appendChild(headerRow);
    return thead;
  }

  private renderBody(): HTMLTableSectionElement {
    const tbody = this.createElement('tbody') as HTMLTableSectionElement;
    
    if (this.tableProps.data.length === 0) {
      const emptyRow = this.createElement('tr');
      const emptyCell = this.createElement('td', {
        colspan: this.columns.length.toString(),
        class: 'ew-table__empty'
      });
      emptyCell.innerHTML = `
        <div class="ew-table__empty-icon">📋</div>
        <div class="ew-table__empty-text">${this.tableProps.emptyText}</div>
      `;
      emptyRow.appendChild(emptyCell);
      tbody.appendChild(emptyRow);
    } else {
      this.tableProps.data.forEach((row, rowIndex) => {
        const tr = this.createElement('tr', {
          class: this.getRowClasses(row, rowIndex),
          style: this.getRowStyle(row, rowIndex)
        });
        
        this.columns.forEach((column, columnIndex) => {
          const td = this.createElement('td', {
            class: this.getCellClasses(row, column, rowIndex, columnIndex),
            style: this.getCellStyle(row, column, rowIndex, columnIndex)
          });
          
          // 选择列
          if (column.type === 'selection') {
            const checkbox = this.createElement('ew-checkbox', {
              class: 'ew-table__checkbox ew-table__checkbox--row',
              ...(this.isRowSelected(row) ? { 'model-value': 'true' } : {})
            });
            checkbox.addEventListener('change', (event) => this.handleSelectRow(row, event));
            td.appendChild(checkbox);
          }
          // 序号列
          else if (column.type === 'index') {
            const indexSpan = this.createElement('span', { class: 'ew-table__index' });
            indexSpan.textContent = (rowIndex + 1).toString();
            td.appendChild(indexSpan);
          }
          // 展开列
          else if (column.type === 'expand') {
            const expandIcon = this.createElement('span', {
              class: `ew-table__expand-icon ${this.isRowExpanded(row) ? 'ew-table__expand-icon--expanded' : ''}`
            });
            expandIcon.innerHTML = '▶';
            expandIcon.addEventListener('click', () => this.handleExpandRow(row));
            td.appendChild(expandIcon);
          }
          // 普通列
          else {
            const cellValue = this.getCellValue(row, column);
            td.textContent = cellValue;
          }
          
          tr.appendChild(td);
        });
        
        tbody.appendChild(tr);
      });
    }
    
    return tbody;
  }

  private renderSummary(): HTMLTableSectionElement {
    const tfoot = this.createElement('tfoot') as HTMLTableSectionElement;
    const summaryRow = this.createElement('tr');
    
    this.columns.forEach((_column, index) => {
      const td = this.createElement('td');
      
      if (index === 0) {
        td.textContent = this.tableProps.sumText || '合计';
      } else if (this.tableProps.summaryMethod) {
        const summaryData = this.tableProps.summaryMethod({
          columns: this.columns,
          data: this.tableProps.data
        });
        td.textContent = summaryData[index] || '';
      }
      
      summaryRow.appendChild(td);
    });
    
    tfoot.appendChild(summaryRow);
    return tfoot;
  }

  private getTableClasses(): string {
    const classes = ['ew-table'];
    
    if (this.tableProps.border) classes.push('ew-table--border');
    if (this.tableProps.stripe) classes.push('ew-table--stripe');
    if (this.tableProps.size && this.tableProps.size !== 'medium') {
      classes.push(`ew-table--${this.tableProps.size}`);
    }
    if (this.tableProps.fit) classes.push('ew-table--fit');
    
    return classes.join(' ');
  }

  private getHeaderCellClasses(column: TableColumn, _index: number): string {
    const classes = [];
    
    if (column.headerAlign) {
      classes.push(`ew-table__cell--${column.headerAlign}`);
    }
    if (column.className) {
      classes.push(column.className);
    }
    
    return classes.join(' ');
  }

  private getHeaderCellStyle(column: TableColumn, _index: number): string {
    const styles: string[] = [];
    
    if (column.width) {
      styles.push(`width: ${column.width}px`);
    }
    if (column.minWidth) {
      styles.push(`min-width: ${column.minWidth}px`);
    }
    
    return styles.join('; ');
  }

  private getRowClasses(row: any, rowIndex: number): string {
    const classes = [];
    
    if (this.tableProps.highlightCurrentRow && this.isCurrentRow(row)) {
      classes.push('ew-table__row--current');
    }
    if (this.tableProps.rowClassName) {
      if (typeof this.tableProps.rowClassName === 'function') {
        classes.push(this.tableProps.rowClassName(row, rowIndex));
      } else {
        classes.push(this.tableProps.rowClassName);
      }
    }
    
    return classes.join(' ');
  }

  private getRowStyle(row: any, rowIndex: number): string {
    if (this.tableProps.rowStyle) {
      if (typeof this.tableProps.rowStyle === 'function') {
        const style = this.tableProps.rowStyle(row, rowIndex);
        return Object.entries(style).map(([key, value]) => `${key}: ${value}`).join('; ');
      } else {
        return Object.entries(this.tableProps.rowStyle).map(([key, value]) => `${key}: ${value}`).join('; ');
      }
    }
    return '';
  }

  private getCellClasses(row: any, column: TableColumn, rowIndex: number, columnIndex: number): string {
    const classes = [];
    
    if (column.align) {
      classes.push(`ew-table__cell--${column.align}`);
    }
    if (this.tableProps.cellClassName) {
      if (typeof this.tableProps.cellClassName === 'function') {
        classes.push(this.tableProps.cellClassName(row, column, rowIndex, columnIndex));
      } else {
        classes.push(this.tableProps.cellClassName);
      }
    }
    
    return classes.join(' ');
  }

  private getCellStyle(row: any, column: TableColumn, rowIndex: number, columnIndex: number): string {
    const styles: string[] = [];
    
    // 设置列宽度，确保与表头对齐
    if (column.width) {
      styles.push(`width: ${column.width}px`);
    }
    if (column.minWidth) {
      styles.push(`min-width: ${column.minWidth}px`);
    }
    
    if (this.tableProps.cellStyle) {
      if (typeof this.tableProps.cellStyle === 'function') {
        const style = this.tableProps.cellStyle(row, column, rowIndex, columnIndex);
        Object.entries(style).forEach(([key, value]) => styles.push(`${key}: ${value}`));
      } else {
        Object.entries(this.tableProps.cellStyle).forEach(([key, value]) => styles.push(`${key}: ${value}`));
      }
    }
    
    return styles.join('; ');
  }

  private getCellValue(row: any, column: TableColumn): string {
    let value = '';
    
    if (column.prop) {
      value = this.getNestedValue(row, column.prop);
    }
    
    if (column.formatter) {
      value = column.formatter(row, column, value, this.tableProps.data.indexOf(row));
    }
    
    return value?.toString() || '';
  }

  private getNestedValue(obj: any, path: string): any {
    return path.split('.').reduce((current, key) => current?.[key], obj);
  }

  private getSortIcon(prop: string): string {
    if (this.sortState.prop !== prop) {
      return '↕';
    }
    switch (this.sortState.order) {
      case 'ascending': return '↑';
      case 'descending': return '↓';
      default: return '↕';
    }
  }

  private handleSort(column: TableColumn): void {
    if (!column.sortable) return;
    
    const prop = column.prop || '';
    let order: 'ascending' | 'descending' | null = 'ascending';
    
    if (this.sortState.prop === prop) {
      if (this.sortState.order === 'ascending') {
        order = 'descending';
      } else if (this.sortState.order === 'descending') {
        order = null;
      }
    }
    
    this.sortState = { prop, order };
    this.sortData();
    this.render();
    
    this.dispatchCustomEvent('sort-change', { prop, order });
  }

  private sortData(): void {
    if (!this.sortState.order || !this.sortState.prop) return;
    
    this.tableProps.data.sort((a, b) => {
      const aValue = this.getNestedValue(a, this.sortState.prop);
      const bValue = this.getNestedValue(b, this.sortState.prop);
      
      if (this.sortState.order === 'ascending') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  }

  private handleSelectAll(event: Event): void {
    // 从事件详情中获取选中状态
    const isChecked = (event as CustomEvent).detail;
    
    if (isChecked) {
      this.selectedRows = [...this.tableProps.data];
    } else {
      this.selectedRows = [];
    }
    
    this.render();
    this.dispatchCustomEvent('selection-change', this.selectedRows);
  }

  private handleSelectRow(row: any, event?: Event): void {
    // 从事件详情中获取选中状态
    const shouldSelect = (event as CustomEvent).detail;
    
    const index = this.selectedRows.findIndex(selectedRow => 
      this.getRowKey(selectedRow) === this.getRowKey(row)
    );
    
    if (shouldSelect && index === -1) {
      this.selectedRows.push(row);
    } else if (!shouldSelect && index > -1) {
      this.selectedRows.splice(index, 1);
    }
    
    this.render();
    this.dispatchCustomEvent('selection-change', this.selectedRows);
  }

  private handleExpandRow(row: any): void {
    const rowKey = this.getRowKey(row);
    const index = this.expandedRows.findIndex(key => key === rowKey);
    
    if (index > -1) {
      this.expandedRows.splice(index, 1);
    } else {
      this.expandedRows.push(rowKey);
    }
    
    this.render();
    this.dispatchCustomEvent('expand-change', { row, expanded: index === -1 });
  }

  private isAllSelected(): boolean {
    return this.tableProps.data.length > 0 && this.selectedRows.length === this.tableProps.data.length;
  }

  private isIndeterminate(): boolean {
    return this.selectedRows.length > 0 && this.selectedRows.length < this.tableProps.data.length;
  }

  private isRowSelected(row: any): boolean {
    return this.selectedRows.some(selectedRow => 
      this.getRowKey(selectedRow) === this.getRowKey(row)
    );
  }

  private isRowExpanded(row: any): boolean {
    return this.expandedRows.includes(this.getRowKey(row));
  }

  private isCurrentRow(row: any): boolean {
    return this.getRowKey(row) === this.tableProps.currentRowKey;
  }

  private getRowKey(row: any): string | number {
    if (typeof this.tableProps.rowKey === 'function') {
      return this.tableProps.rowKey(row);
    }
    return row[this.tableProps.rowKey as string] || row.id || row;
  }

  // 公共方法
  public setData(data: any[]): void {
    this.tableProps.data = data;
    this.render();
  }

  public getData(): any[] {
    return this.tableProps.data;
  }

  public setColumns(columns: TableColumn[]): void {
    this.columns = columns;
    this.render();
  }

  public getColumns(): TableColumn[] {
    return this.columns;
  }

  public getSelectedRows(): any[] {
    return this.selectedRows;
  }

  public clearSelection(): void {
    this.selectedRows = [];
    this.render();
  }

  public toggleRowSelection(row: any, selected?: boolean): void {
    const index = this.selectedRows.findIndex(selectedRow => 
      this.getRowKey(selectedRow) === this.getRowKey(row)
    );
    
    if (selected === undefined) {
      selected = index === -1;
    }
    
    if (selected && index === -1) {
      this.selectedRows.push(row);
    } else if (!selected && index > -1) {
      this.selectedRows.splice(index, 1);
    }
    
    this.render();
  }

  public toggleAllSelection(): void {
    if (this.selectedRows.length === this.tableProps.data.length) {
      this.clearSelection();
    } else {
      this.selectedRows = [...this.tableProps.data];
    }
    
    this.render();
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
      this.initProps();
      this.render();
    }
  }
}

// 注册组件
customElements.define('ew-table', EwTable); 
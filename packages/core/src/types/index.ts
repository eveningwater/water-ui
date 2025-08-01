// 基础组件属性
export interface BaseComponentProps {
  disabled?: boolean;
  loading?: boolean;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  style?: string;
}

// 按钮组件属性
export interface ButtonProps extends BaseComponentProps {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default';
  plain?: boolean;
  round?: boolean;
  circle?: boolean;
  icon?: string;
  text?: boolean;
  link?: boolean;
  autofocus?: boolean;
  nativeType?: 'button' | 'submit' | 'reset';
}

// 输入框组件属性
export interface InputProps extends BaseComponentProps {
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
  placeholder?: string;
  value?: string;
  readonly?: boolean;
  clearable?: boolean;
  showPassword?: boolean;
  prefixIcon?: string;
  suffixIcon?: string;
  maxlength?: number;
  minlength?: number;
  autocomplete?: string;
  autofocus?: boolean;
  form?: string;
  name?: string;
  required?: boolean;
}

// 表格组件属性
export interface TableProps {
  data: any[];
  columns: TableColumn[];
  stripe?: boolean;
  border?: boolean;
  size?: 'small' | 'medium' | 'large';
  fit?: boolean;
  showHeader?: boolean;
  highlightCurrentRow?: boolean;
  currentRowKey?: string | number;
  rowClassName?: string | ((row: any, rowIndex: number) => string);
  rowStyle?: object | ((row: any, rowIndex: number) => object);
  cellClassName?: string | ((row: any, column: TableColumn, rowIndex: number, columnIndex: number) => string);
  cellStyle?: object | ((row: any, column: TableColumn, rowIndex: number, columnIndex: number) => object);
  headerRowClassName?: string | ((row: any, rowIndex: number) => string);
  headerRowStyle?: object | ((row: any, rowIndex: number) => object);
  headerCellClassName?: string | ((row: any, column: TableColumn, rowIndex: number, columnIndex: number) => string);
  headerCellStyle?: object | ((row: any, column: TableColumn, rowIndex: number, columnIndex: number) => object);
  rowKey?: string | ((row: any) => string);
  emptyText?: string;
  defaultExpandAll?: boolean;
  expandRowKeys?: any[];
  defaultSort?: object;
  tooltipEffect?: 'dark' | 'light';
  showSummary?: boolean;
  sumText?: string;
  summaryMethod?: (param: { columns: TableColumn[]; data: any[] }) => any[];
  spanMethod?: (param: { row: any; column: TableColumn; rowIndex: number; columnIndex: number }) => number[] | object;
  selectOnIndeterminate?: boolean;
  indent?: number;
  lazy?: boolean;
  load?: (row: any, treeNode: any, resolve: (data: any[]) => void) => void;
  treeProps?: object;
  tableLayout?: 'fixed' | 'auto';
  scrollbarAlwaysOn?: boolean;
  flexible?: boolean;
}

// 表格列定义
export interface TableColumn {
  type?: 'selection' | 'index' | 'expand';
  index?: number | ((index: number) => number);
  columnKey?: string;
  label?: string;
  prop?: string;
  width?: string | number;
  minWidth?: string | number;
  fixed?: boolean | 'left' | 'right';
  renderHeader?: (column: TableColumn, index: number) => string;
  sortable?: boolean | 'custom';
  sortMethod?: (a: any, b: any) => number;
  sortBy?: string | string[] | ((row: any, index: number) => string | string[]);
  sortOrders?: ('ascending' | 'descending' | null)[];
  resizable?: boolean;
  formatter?: (row: any, column: TableColumn, cellValue: any, index: number) => string;
  showOverflowTooltip?: boolean;
  align?: 'left' | 'center' | 'right';
  headerAlign?: 'left' | 'center' | 'right';
  className?: string;
  labelClassName?: string;
  selectable?: (row: any, index: number) => boolean;
  reserveSelection?: boolean;
  filters?: { text: string; value: any }[];
  filterPlacement?: string;
  filterMultiple?: boolean;
  filterMethod?: (value: any, row: any, column: TableColumn) => boolean;
  filteredValue?: any[];
}

// 弹窗组件属性
export interface ModalProps {
  modelValue?: boolean;
  title?: string;
  width?: string | number;
  fullscreen?: boolean;
  top?: string;
  modal?: boolean;
  appendToBody?: boolean;
  lockScroll?: boolean;
  closeOnClickModal?: boolean;
  closeOnPressEscape?: boolean;
  showClose?: boolean;
  beforeClose?: (done: () => void) => void;
  center?: boolean;
  destroyOnClose?: boolean;
  customClass?: string;
  closeIcon?: string;
  showCancelButton?: boolean;
  showConfirmButton?: boolean;
  cancelButtonText?: string;
  confirmButtonText?: string;
  cancelButtonClass?: string;
  confirmButtonClass?: string;
  closeOnHashChange?: boolean;
}

// 事件类型
export interface ComponentEvents {
  click?: (event: Event) => void;
  change?: (value: any) => void;
  input?: (value: any) => void;
  focus?: (event: Event) => void;
  blur?: (event: Event) => void;
  keydown?: (event: KeyboardEvent) => void;
  keyup?: (event: KeyboardEvent) => void;
  keypress?: (event: KeyboardEvent) => void;
}

// Checkbox 组件属性
export interface CheckboxProps extends BaseComponentProps {
  modelValue?: boolean;
  label?: string;
  value?: string | number | boolean;
  name?: string;
  indeterminate?: boolean;
  border?: boolean;
  button?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  trueLabel?: string | number;
  falseLabel?: string | number;
  id?: string;
  controls?: string;
}

// Checkbox Group 组件属性
export interface CheckboxGroupProps extends BaseComponentProps {
  modelValue?: (string | number | boolean)[];
  min?: number;
  max?: number;
  textColor?: string;
  fill?: string;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  name?: string;
  border?: boolean;
}

// Radio 组件属性
export interface RadioProps extends BaseComponentProps {
  modelValue?: string | number | boolean;
  label?: string;
  value?: string | number | boolean;
  name?: string;
  border?: boolean;
  button?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  id?: string;
  controls?: string;
}

// Radio Group 组件属性
export interface RadioGroupProps extends BaseComponentProps {
  modelValue?: string | number | boolean;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  textColor?: string;
  fill?: string;
  name?: string;
  border?: boolean;
}

// Input Number 组件属性
export interface InputNumberProps extends BaseComponentProps {
  modelValue?: number;
  min?: number;
  max?: number;
  step?: number;
  stepStrictly?: boolean;
  precision?: number;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  controls?: boolean;
  controlsPosition?: 'right' | 'both';
  name?: string;
  label?: string;
  placeholder?: string;
  readonly?: boolean;
  clearable?: boolean;
  autofocus?: boolean;
  form?: string;
  required?: boolean;
  validateEvent?: boolean;
  debounce?: number;
}

// 容器组件属性
export interface ContainerProps extends BaseComponentProps {
  direction?: 'horizontal' | 'vertical';
}

// 头部组件属性
export interface HeaderProps extends BaseComponentProps {
  height?: string;
}

// 侧边栏组件属性
export interface AsideProps extends BaseComponentProps {
  width?: string;
}

// 主内容区组件属性
export interface MainProps extends BaseComponentProps {
  // 主内容区通常不需要特殊属性
}

// 底部组件属性
export interface FooterProps extends BaseComponentProps {
  height?: string;
}

// Row 组件属性
export interface RowProps extends BaseComponentProps {
  gutter?: number | string;
  type?: 'flex';
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
  align?: 'top' | 'middle' | 'bottom';
  tag?: string;
}

// Col 组件属性
export interface ColProps extends BaseComponentProps {
  span?: number;
  offset?: number;
  push?: number;
  pull?: number;
  xs?: number | object;
  sm?: number | object;
  md?: number | object;
  lg?: number | object;
  xl?: number | object;
  tag?: string;
}

// Icon 组件属性
export interface IconProps extends Omit<BaseComponentProps, 'size'> {
  size?: 'small' | 'large' | string | number;
  color?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | string;
}

// Link 组件属性
export interface LinkProps extends BaseComponentProps {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  underline?: boolean;
  disabled?: boolean;
  href?: string;
  target?: string;
}

export interface TextProps extends Omit<BaseComponentProps, 'size'> {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'large' | 'default' | 'small';
  truncated?: boolean;
  lineClamp?: 1 | 2 | 3;
  align?: 'left' | 'center' | 'right';
  weight?: 'bold' | 'normal' | 'light';
  style?: 'italic' | 'underline' | 'line-through';
  disabled?: boolean;
  clickable?: boolean;
  responsive?: boolean;
  tag?: string;
}

export interface ScrollbarProps extends BaseComponentProps {
  height?: string | number;
  maxHeight?: string | number;
  wrapStyle?: string;
  wrapClass?: string;
  viewClass?: string;
  viewStyle?: string;
  noresize?: boolean;
  tag?: string;
  always?: boolean;
  minSize?: number;
}

export interface SpaceProps extends Omit<BaseComponentProps, 'size'> {
  direction?: 'horizontal' | 'vertical';
  alignment?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  size?: number | 'small' | 'default' | 'large' | [number, number];
  wrap?: boolean;
  fill?: boolean;
  fillRatio?: number;
  spacer?: string | number;
  tag?: string;
}

export interface SpaceItemProps extends Omit<BaseComponentProps, 'size'> {
  direction?: 'horizontal' | 'vertical';
  size?: number | 'small' | 'default' | 'large' | [number, number];
  tag?: string;
}

// 分割面板组件属性
export interface SplitterProps extends BaseComponentProps {
  layout?: 'horizontal' | 'vertical';
}

// 分割面板子面板属性
export interface SplitterPaneProps extends Omit<BaseComponentProps, 'size'> {
  size?: string | number;
  min?: string | number;
  max?: string | number;
  resizable?: boolean;
  collapsible?: boolean;
} 
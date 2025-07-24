// 导出所有组件
export { EwButton } from './components/ew-button';
export { EwInput } from './components/ew-input';
export { EwTable } from './components/ew-table';
export { EwModal } from './components/ew-modal';

// 导出类型定义
export type {
  BaseComponentProps,
  ButtonProps,
  InputProps,
  TableProps,
  TableColumn,
  ModalProps,
  ComponentEvents
} from './types';

// 导出基础组件类
export { BaseComponent } from './utils/base-component';

// 自动注册所有组件
import './components/ew-button';
import './components/ew-input';
import './components/ew-table';
import './components/ew-modal';

// 确保所有组件都已注册
import { EwButton, EwInput, EwTable, EwModal } from './components';

// 手动注册组件（以防自动注册失败）
if (!customElements.get('ew-button')) {
  customElements.define('ew-button', EwButton);
}
if (!customElements.get('ew-input')) {
  customElements.define('ew-input', EwInput);
}
if (!customElements.get('ew-table')) {
  customElements.define('ew-table', EwTable);
}
if (!customElements.get('ew-modal')) {
  customElements.define('ew-modal', EwModal);
}

// 默认导出
export default {
  install: () => {
    // 组件已经通过 import 自动注册
    console.log('Water UI components registered successfully!');
  }
}; 
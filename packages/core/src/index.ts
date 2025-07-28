// 导出所有组件
export * from './components';

// 导出类型定义
export type {
  BaseComponentProps,
  ButtonProps,
  InputProps,
  TableProps,
  TableColumn,
  ModalProps,
  ComponentEvents,
  CheckboxProps,
  CheckboxGroupProps,
  RadioProps,
  RadioGroupProps,
  InputNumberProps,
  ContainerProps,
  HeaderProps,
  AsideProps,
  MainProps,
  FooterProps,
  RowProps,
  ColProps,
  IconProps,
  LinkProps,
  TextProps
} from './types';

// 导出基础组件类
export { BaseComponent } from './utils/base-component';

// 自动注册所有组件
import './components/ew-button';
import './components/ew-input';
import './components/ew-table';
import './components/ew-modal';
import './components/ew-checkbox';
import './components/ew-checkbox/ew-checkbox-group';
import './components/ew-checkbox-button';
import './components/ew-radio';
import './components/ew-radio-button';
import './components/ew-radio-group';
import './components/ew-input-number';
import './components/ew-container';
import './components/ew-container/ew-header';
import './components/ew-container/ew-aside';
import './components/ew-container/ew-main';
import './components/ew-container/ew-footer';
import './components/ew-row';
import './components/ew-col';
import './components/ew-link';
import './components/ew-icon';
import './components/ew-text';

// 确保所有组件都已注册
import {
  EwButton, EwInput, EwTable, EwModal, EwCheckbox, EwCheckboxGroup,
  EwCheckboxButton, EwRadio, EwRadioButton, EwRadioGroup, EwInputNumber,
  EwContainer, EwHeader, EwAside, EwMain, EwFooter, EwRow, EwCol,
  EwLink, EwIcon, EwText
} from './components';

// 手动注册组件（以防自动注册失败）
const components = [
  { name: 'ew-button', component: EwButton },
  { name: 'ew-input', component: EwInput },
  { name: 'ew-table', component: EwTable },
  { name: 'ew-modal', component: EwModal },
  { name: 'ew-checkbox', component: EwCheckbox },
  { name: 'ew-checkbox-group', component: EwCheckboxGroup },
  { name: 'ew-checkbox-button', component: EwCheckboxButton },
  { name: 'ew-radio', component: EwRadio },
  { name: 'ew-radio-button', component: EwRadioButton },
  { name: 'ew-radio-group', component: EwRadioGroup },
  { name: 'ew-input-number', component: EwInputNumber },
  { name: 'ew-container', component: EwContainer },
  { name: 'ew-header', component: EwHeader },
  { name: 'ew-aside', component: EwAside },
  { name: 'ew-main', component: EwMain },
  { name: 'ew-footer', component: EwFooter },
  { name: 'ew-row', component: EwRow },
  { name: 'ew-col', component: EwCol },
  { name: 'ew-link', component: EwLink },
  { name: 'ew-icon', component: EwIcon },
  { name: 'ew-text', component: EwText }
];

components.forEach(({ name, component }) => {
  if (!customElements.get(name)) {
    customElements.define(name, component);
  }
});

// 默认导出
export default {
  install: () => {
    // 组件已经通过 import 自动注册
    console.log('Water UI components registered successfully!');
  }
}; 
import { BaseComponent } from '../../utils/base-component';
import { ContainerProps } from '../../types';
import { containerStyles } from './index-style';
import { EwHeader } from './ew-header';
import { EwAside } from './ew-aside';
import { EwMain } from './ew-main';
import { EwFooter } from './ew-footer';

export class EwContainer extends BaseComponent {
  private containerProps: ContainerProps = {};
  static EwHeader: typeof EwHeader;
  static EwAside: typeof EwAside;
  static EwMain: typeof EwMain;
  static EwFooter: typeof EwFooter;

  protected initProps(): void {
    super.initProps();
    this.containerProps = {
      direction: (this.getAttribute('direction') as ContainerProps['direction']) || 'horizontal'
    };
  }

  protected render(): void {
    // 创建容器元素
    const container = this.createElement('div', { 
      class: this.getContainerClasses() 
    });

    // 添加插槽内容
    const slot = this.createElement('slot');
    container.appendChild(slot);

    // 清空并重新渲染
    this.shadow.innerHTML = '';

    // 注入样式
    this.injectStyles(containerStyles);

    // 添加容器元素
    this.shadow.appendChild(container);
  }

  private getContainerClasses(): string {
    const { direction } = this.containerProps;
    const classes = ['ew-container'];

    if (direction === 'vertical') {
      classes.push('ew-container--vertical');
    }

    return classes.join(' ');
  }

  static get observedAttributes(): string[] {
    return ['direction'];
  }
}

// 注册组件
customElements.define('ew-container', EwContainer);

// 设置静态属性
EwContainer.EwHeader = EwHeader;
EwContainer.EwAside = EwAside;
EwContainer.EwMain = EwMain;
EwContainer.EwFooter = EwFooter;
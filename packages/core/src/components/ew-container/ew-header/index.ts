import { BaseComponent } from '../../../utils/base-component';
import { HeaderProps } from '../../../types';
import { containerStyles } from '../index-style';

export class EwHeader extends BaseComponent {
  private headerProps: HeaderProps = {};

  protected initProps(): void {
    super.initProps();
    const heightAttr = this.getAttribute('height');
    let height = '60px';
    
    if (heightAttr) {
      // 如果是纯数字，自动添加 px 单位
      if (/^\d+$/.test(heightAttr)) {
        height = `${heightAttr}px`;
      } else {
        height = heightAttr;
      }
    }
    
    this.headerProps = {
      height
    };
  }

  protected render(): void {
    const { height } = this.headerProps;

    // 创建头部元素
    const header = this.createElement('header', { 
      class: 'ew-header',
      style: `height: ${height}; line-height: ${height};`
    });

    // 添加插槽内容
    const slot = this.createElement('slot');
    header.appendChild(slot);

    // 清空并重新渲染
    this.shadow.innerHTML = '';

    // 注入样式
    this.injectStyles(containerStyles);

    // 添加头部元素
    this.shadow.appendChild(header);
  }

  static get observedAttributes(): string[] {
    return ['height'];
  }
}

// 注册组件
customElements.define('ew-header', EwHeader); 
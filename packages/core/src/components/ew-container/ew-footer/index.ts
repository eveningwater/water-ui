import { BaseComponent } from '../../../utils/base-component';
import { FooterProps } from '../../../types';
import { containerStyles } from '../index-style';

export class EwFooter extends BaseComponent {
  private footerProps: FooterProps = {};

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
    
    this.footerProps = {
      height
    };
  }

  protected render(): void {
    const { height } = this.footerProps;

    // 创建底部元素
    const footer = this.createElement('footer', { 
      class: 'ew-footer',
      style: `height: ${height}; line-height: ${height};`
    });

    // 添加插槽内容
    const slot = this.createElement('slot');
    footer.appendChild(slot);

    // 清空并重新渲染
    this.shadow.innerHTML = '';

    // 注入样式
    this.injectStyles(containerStyles);

    // 添加底部元素
    this.shadow.appendChild(footer);
  }

  static get observedAttributes(): string[] {
    return ['height'];
  }
}

// 注册组件
customElements.define('ew-footer', EwFooter); 
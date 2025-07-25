import { BaseComponent } from '../../../utils/base-component';
import { AsideProps } from '../../../types';
import { containerStyles } from '../index-style';

export class EwAside extends BaseComponent {
  private asideProps: AsideProps = {};

  protected initProps(): void {
    super.initProps();
    const widthAttr = this.getAttribute('width');
    let width = '200px';
    
    if (widthAttr) {
      // 如果是纯数字，自动添加 px 单位
      if (/^\d+$/.test(widthAttr)) {
        width = `${widthAttr}px`;
      } else {
        width = widthAttr;
      }
    }
    
    this.asideProps = {
      width
    };
  }

  protected render(): void {
    const { width } = this.asideProps;

    // 创建侧边栏元素
    const aside = this.createElement('aside', { 
      class: 'ew-aside',
      style: `width: ${width};`
    });

    // 添加插槽内容
    const slot = this.createElement('slot');
    aside.appendChild(slot);

    // 清空并重新渲染
    this.shadow.innerHTML = '';

    // 注入样式
    this.injectStyles(containerStyles);

    // 添加侧边栏元素
    this.shadow.appendChild(aside);
  }

  static get observedAttributes(): string[] {
    return ['width'];
  }
}

// 注册组件
customElements.define('ew-aside', EwAside); 
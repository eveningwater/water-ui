import { BaseComponent } from '../../../utils/base-component';
import { containerStyles } from '../index-style';

export class EwMain extends BaseComponent {
  protected initProps(): void {
    super.initProps();
  }

  protected render(): void {
    // 创建主内容区元素
    const main = this.createElement('main', { 
      class: 'ew-main'
    });

    // 添加插槽内容
    const slot = this.createElement('slot');
    main.appendChild(slot);

    // 清空并重新渲染
    this.shadow.innerHTML = '';

    // 注入样式
    this.injectStyles(containerStyles);

    // 添加主内容区元素
    this.shadow.appendChild(main);
  }
}

// 注册组件
customElements.define('ew-main', EwMain); 
import { BaseComponent } from '../../utils/base-component';
import { IconProps } from '../../types';
import { iconStyles } from './index-style';


export class EwIcon extends BaseComponent {
  private iconProps: IconProps = {};

  protected initProps(): void {
    super.initProps();
    this.iconProps = {
      size: this.getAttribute('size') || undefined,
      color: this.getAttribute('color') || undefined
    };
  }

  protected render(): void {
    // 创建图标容器
    const iconContainer = this.createElement('i', {
      class: this.getIconClasses()
    });

    // 添加插槽内容
    const slot = this.createElement('slot');
    iconContainer.appendChild(slot);

    // 清空并重新渲染
    this.shadow.innerHTML = '';

    // 注入样式
    this.injectStyles(iconStyles);

    // 添加图标容器
    this.shadow.appendChild(iconContainer);
  }

  private getIconClasses(): string {
    const { size, color } = this.iconProps;
    const classes = ['ew-icon'];

    if (size) {
      if (size === 'small' || size === 'large') {
        classes.push(`ew-icon--${size}`);
      }
    }

    if (color) {
      if (['primary', 'success', 'warning', 'danger', 'info'].includes(color)) {
        classes.push(`ew-icon--${color}`);
      }
    }

    return classes.join(' ');
  }



  static get observedAttributes(): string[] {
    return ['size', 'color'];
  }
}

// 注册组件
customElements.define('ew-icon', EwIcon); 
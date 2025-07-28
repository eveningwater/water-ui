import { BaseComponent } from '../../../utils/base-component';
import { SpaceItemProps } from '../../../types';
import { spaceItemStyles } from './index-style';

export class EwSpaceItem extends BaseComponent {
  private spaceItemProps: SpaceItemProps = {};

  protected initProps(): void {
    super.initProps();
    
    this.spaceItemProps = {
      direction: this.getAttribute('direction') as 'horizontal' | 'vertical' || 'horizontal',
      size: this.parseSize(this.getAttribute('size')),
      tag: this.getAttribute('tag') || 'div'
    };
  }

  private parseSize(sizeAttr: string | null): number | 'small' | 'default' | 'large' | [number, number] | undefined {
    if (!sizeAttr) return 'default';
    
    if (sizeAttr === 'small' || sizeAttr === 'default' || sizeAttr === 'large') {
      return sizeAttr;
    }
    
    if (sizeAttr.includes(',')) {
      const parts = sizeAttr.split(',').map(s => s.trim());
      if (parts.length === 2) {
        const x = parseInt(parts[0]);
        const y = parseInt(parts[1]);
        if (!isNaN(x) && !isNaN(y)) {
          return [x, y];
        }
      }
    }
    
    const num = parseInt(sizeAttr);
    return isNaN(num) ? 'default' : num;
  }

  protected render(): void {
    const { tag, size } = this.spaceItemProps;

    // 清空并重新渲染
    this.shadow.innerHTML = '';

    // 注入样式
    this.injectStyles(spaceItemStyles);

    // 创建空间项容器
    const spaceItem = this.createElement(tag || 'div', {
      class: this.getSpaceItemClasses()
    });

    // 设置 CSS 变量
    if (typeof size === 'number') {
      spaceItem.style.setProperty('--ew-space-gap', `${size}px`);
    } else if (Array.isArray(size)) {
      const [x, y] = size;
      spaceItem.style.setProperty('--ew-space-gap-x', `${x}px`);
      spaceItem.style.setProperty('--ew-space-gap-y', `${y}px`);
    }

    // 添加插槽内容
    const slot = this.createElement('slot');
    spaceItem.appendChild(slot);

    // 添加到 Shadow DOM
    this.shadow.appendChild(spaceItem);
  }

  private getSpaceItemClasses(): string {
    const { direction, size } = this.spaceItemProps;
    const classes = ['ew-space-item'];

    // 方向类
    classes.push(`ew-space-item--${direction || 'horizontal'}`);

    // 间距类
    if (typeof size === 'string') {
      classes.push(`ew-space-item--${size}`);
    } else if (typeof size === 'number' || Array.isArray(size)) {
      classes.push('ew-space-item--custom');
    }

    return classes.join(' ');
  }

  // 公共方法
  public setDirection(direction: 'horizontal' | 'vertical'): void {
    this.spaceItemProps.direction = direction;
    this.render();
  }

  public setSize(size: number | 'small' | 'default' | 'large' | [number, number]): void {
    this.spaceItemProps.size = size;
    this.render();
  }

  static get observedAttributes(): string[] {
    return ['direction', 'size', 'tag'];
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    super.attributeChangedCallback(name, oldValue, newValue);
    
    // 重新初始化属性并渲染
    this.initProps();
    this.render();
  }
}

// 注册组件
customElements.define('ew-space-item', EwSpaceItem); 
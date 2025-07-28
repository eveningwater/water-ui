import { BaseComponent } from '../../utils/base-component';
import { SpaceProps } from '../../types';
import { spaceStyles } from './index-style';
import { EwSpaceItem } from './ew-space-item';

export class EwSpace extends BaseComponent {
  private spaceProps: SpaceProps = {};
  static ewSpaceItem: typeof EwSpaceItem;

  protected initProps(): void {
    super.initProps();
    
    this.spaceProps = {
      direction: this.getAttribute('direction') as 'horizontal' | 'vertical' || 'horizontal',
      alignment: this.getAttribute('alignment') as 'start' | 'end' | 'center' | 'baseline' | 'stretch' || 'start',
      size: this.parseSize(this.getAttribute('size')),
      wrap: this.hasAttribute('wrap'),
      fill: this.hasAttribute('fill'),
      fillRatio: this.getAttribute('fill-ratio') ? parseFloat(this.getAttribute('fill-ratio')!) : undefined,
      spacer: this.getAttribute('spacer') || undefined,
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
    const { tag, size, fillRatio } = this.spaceProps;

    // 清空并重新渲染
    this.shadow.innerHTML = '';

    // 注入样式
    this.injectStyles(spaceStyles);

    // 创建空间容器
    const space = this.createElement(tag || 'div', {
      class: this.getSpaceClasses()
    });

    // 设置 CSS 变量
    if (typeof size === 'number') {
      space.style.setProperty('--ew-space-gap', `${size}px`);
    } else if (Array.isArray(size)) {
      const [x, y] = size;
      space.style.setProperty('--ew-space-gap-x', `${x}px`);
      space.style.setProperty('--ew-space-gap-y', `${y}px`);
    }

    if (fillRatio !== undefined) {
      space.style.setProperty('--ew-space-fill-ratio', String(fillRatio));
    }

    // 添加插槽内容
    const slot = this.createElement('slot');
    space.appendChild(slot);

    // 添加到 Shadow DOM
    this.shadow.appendChild(space);
  }

  private getSpaceClasses(): string {
    const { direction, alignment, size, wrap, fill } = this.spaceProps;
    const classes = ['ew-space'];

    // 方向类
    classes.push(`ew-space--${direction || 'horizontal'}`);

    // 对齐类
    if (alignment) {
      classes.push(`ew-space--${alignment}`);
    }

    // 换行类
    if (wrap) {
      classes.push('ew-space--wrap');
    }

    // 填充类
    if (fill) {
      classes.push('ew-space--fill');
    }

    // 间距类
    if (typeof size === 'string') {
      classes.push(`ew-space--${size}`);
    } else if (typeof size === 'number' || Array.isArray(size)) {
      classes.push('ew-space--custom');
    }

    return classes.join(' ');
  }

  // 公共方法
  public setDirection(direction: 'horizontal' | 'vertical'): void {
    this.spaceProps.direction = direction;
    this.render();
  }

  public setAlignment(alignment: 'start' | 'end' | 'center' | 'baseline' | 'stretch'): void {
    this.spaceProps.alignment = alignment;
    this.render();
  }

  public setSize(size: number | 'small' | 'default' | 'large' | [number, number]): void {
    this.spaceProps.size = size;
    this.render();
  }

  public setWrap(wrap: boolean): void {
    this.spaceProps.wrap = wrap;
    this.render();
  }

  public setFill(fill: boolean): void {
    this.spaceProps.fill = fill;
    this.render();
  }

  public setFillRatio(ratio: number): void {
    this.spaceProps.fillRatio = ratio;
    this.render();
  }

  public setSpacer(spacer: string | number): void {
    this.spaceProps.spacer = spacer;
    this.render();
  }

  static get observedAttributes(): string[] {
    return ['direction', 'alignment', 'size', 'wrap', 'fill', 'fill-ratio', 'spacer', 'tag'];
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    super.attributeChangedCallback(name, oldValue, newValue);
    
    // 重新初始化属性并渲染
    this.initProps();
    this.render();
  }
}

// 注册组件
customElements.define('ew-space', EwSpace); 

EwSpace.ewSpaceItem = EwSpaceItem;
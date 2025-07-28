import { BaseComponent } from '../../utils/base-component';
import { TextProps } from '../../types';
import { textStyles } from './index-style';

export class EwText extends BaseComponent {
  private textProps: TextProps = {};

  protected initProps(): void {
    super.initProps();
    
    this.textProps = {
      type: (this.getAttribute('type') as TextProps['type']) || undefined,
      size: (this.getAttribute('size') as TextProps['size']) || 'default',
      truncated: this.hasAttribute('truncated'),
      lineClamp: (this.getAttribute('line-clamp') ? parseInt(this.getAttribute('line-clamp')!) as 1 | 2 | 3 : undefined),
      align: (this.getAttribute('align') as TextProps['align']) || undefined,
      weight: (this.getAttribute('weight') as TextProps['weight']) || undefined,
      style: (this.getAttribute('style') as TextProps['style']) || undefined,
      disabled: this.hasAttribute('disabled'),
      clickable: this.hasAttribute('clickable'),
      responsive: this.hasAttribute('responsive'),
      tag: this.getAttribute('tag') || 'span'
    };
  }

  protected render(): void {
    const { tag, clickable } = this.textProps;

    // 清空并重新渲染
    this.shadow.innerHTML = '';

    // 注入样式
    this.injectStyles(textStyles);

    // 将类名添加到宿主元素
    this.className = this.getTextClasses();

    // 创建文本元素
    const text = this.createElement(tag || 'span', {
      class: 'ew-text'
    });

    // 添加插槽内容
    const slot = this.createElement('slot');
    text.appendChild(slot);

    // 如果可点击，添加事件监听器
    if (clickable) {
      this.addEventListeners(text);
    }

    // 添加文本元素
    this.shadow.appendChild(text);
  }

  private addEventListeners(text: HTMLElement): void {
    // 点击事件
    text.addEventListener('click', (event) => {
      if (this.textProps.disabled) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      event.stopPropagation();
      this.dispatchCustomEvent('click', event);
    });

    // 鼠标事件
    text.addEventListener('mouseenter', (event) => {
      if (!this.textProps.disabled) {
        event.stopPropagation();
        this.dispatchCustomEvent('mouseenter', event);
      }
    });

    text.addEventListener('mouseleave', (event) => {
      if (!this.textProps.disabled) {
        event.stopPropagation();
        this.dispatchCustomEvent('mouseleave', event);
      }
    });

    // 键盘事件
    text.addEventListener('keydown', (event) => {
      if (this.textProps.disabled) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        event.stopPropagation();
        this.dispatchCustomEvent('click', event);
      }
    });
  }

  private getTextClasses(): string {
    const { type, size, truncated, lineClamp, align, weight, style, disabled, clickable, responsive } = this.textProps;
    const classes = [];

    // 文本类型
    if (type) {
      classes.push(`ew-text--${type}`);
    }

    // 文本大小
    if (size && size !== 'default') {
      classes.push(`ew-text--${size}`);
    }

    // 文本截断
    if (truncated) {
      classes.push('ew-text--truncate');
    }

    // 行数限制
    if (lineClamp) {
      classes.push(`ew-text--line-clamp-${lineClamp}`);
    }

    // 文本对齐
    if (align) {
      classes.push(`ew-text--${align}`);
    }

    // 文本粗细
    if (weight) {
      classes.push(`ew-text--${weight}`);
    }

    // 文本样式
    if (style) {
      classes.push(`ew-text--${style}`);
    }

    // 禁用状态
    if (disabled) {
      classes.push('ew-text--disabled');
    }

    // 可点击状态
    if (clickable) {
      classes.push('ew-text--clickable');
    }

    // 响应式
    if (responsive) {
      classes.push('ew-text--responsive');
    }

    return classes.join(' ');
  }

  // 公共方法
  public setType(type: TextProps['type']): void {
    this.textProps.type = type;
    this.render();
  }

  public setSize(size: TextProps['size']): void {
    this.textProps.size = size;
    this.render();
  }

  public setTruncated(truncated: boolean): void {
    this.textProps.truncated = truncated;
    this.render();
  }

  public setLineClamp(lineClamp: TextProps['lineClamp']): void {
    this.textProps.lineClamp = lineClamp;
    this.render();
  }

  public setAlign(align: TextProps['align']): void {
    this.textProps.align = align;
    this.render();
  }

  public setWeight(weight: TextProps['weight']): void {
    this.textProps.weight = weight;
    this.render();
  }

  public setStyle(style: TextProps['style']): void {
    this.textProps.style = style;
    this.render();
  }

  public setDisabled(disabled: boolean): void {
    this.textProps.disabled = disabled;
    this.render();
  }

  public setClickable(clickable: boolean): void {
    this.textProps.clickable = clickable;
    this.render();
  }

  public setResponsive(responsive: boolean): void {
    this.textProps.responsive = responsive;
    this.render();
  }

  static get observedAttributes(): string[] {
    return ['type', 'size', 'truncated', 'line-clamp', 'align', 'weight', 'style', 'disabled', 'clickable', 'responsive', 'tag'];
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    super.attributeChangedCallback(name, oldValue, newValue);
  }
}

// 注册组件
customElements.define('ew-text', EwText); 
import { BaseComponent } from '../../utils/base-component';
import { RowProps } from '../../types';
import { rowStyles } from './index-style';

export class EwRow extends BaseComponent {
  private rowProps: RowProps = {};

  protected initProps(): void {
    super.initProps();
    const gutterAttr = this.getAttribute('gutter');
    let gutter = 0;
    
    if (gutterAttr) {
      gutter = parseInt(gutterAttr) || 0;
    }
    
    this.rowProps = {
      gutter,
      type: (this.getAttribute('type') as RowProps['type']) || undefined,
      justify: (this.getAttribute('justify') as RowProps['justify']) || undefined,
      align: (this.getAttribute('align') as RowProps['align']) || undefined,
      tag: this.getAttribute('tag') || 'div'
    };
  }

  protected render(): void {
    const { gutter, tag } = this.rowProps;

    // 清空并重新渲染
    this.shadow.innerHTML = '';

    // 注入样式
    this.injectStyles(rowStyles);

    // 将 CSS 类应用到组件本身
    this.className = this.getRowClasses();
    
    // 设置 CSS 变量到组件本身，让子组件可以继承
    this.style.setProperty('--ew-row-gutter', `${gutter}px`);
    // 设置响应式 gutter 变量，默认使用基础 gutter 值
    this.style.setProperty('--ew-row-gutter-xs', `${gutter}px`);
    this.style.setProperty('--ew-row-gutter-sm', `${gutter}px`);
    this.style.setProperty('--ew-row-gutter-md', `${gutter}px`);
    this.style.setProperty('--ew-row-gutter-lg', `${gutter}px`);
    this.style.setProperty('--ew-row-gutter-xl', `${gutter}px`);

    // 创建行元素
    const row = this.createElement(tag || 'div', {
      class: `ew-row ${this.getRowClasses()}`,
      style: `--ew-row-gutter: ${gutter}px; --ew-row-gutter-xs: ${gutter}px; --ew-row-gutter-sm: ${gutter}px; --ew-row-gutter-md: ${gutter}px; --ew-row-gutter-lg: ${gutter}px; --ew-row-gutter-xl: ${gutter}px;`
    });

    // 添加插槽内容
    const slot = this.createElement('slot');
    row.appendChild(slot);

   
    // 添加行元素
    this.shadow.appendChild(row);
  }

  private getRowClasses(): string {
    const { type, justify, align } = this.rowProps;
    const classes = ['ew-row'];

    if (type === 'flex') {
      classes.push('ew-row--flex');
    }

    if (justify) {
      classes.push(`ew-row--justify-${justify}`);
    }

    if (align) {
      classes.push(`ew-row--align-${align}`);
    }

    return classes.join(' ');
  }

  static get observedAttributes(): string[] {
    return ['gutter', 'type', 'justify', 'align', 'tag'];
  }
}

// 注册组件
customElements.define('ew-row', EwRow); 
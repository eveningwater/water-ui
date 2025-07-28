import { BaseComponent } from '../../utils/base-component';
import { LinkProps } from '../../types';
import { linkStyles } from './index-style';

export class EwLink extends BaseComponent {
  private linkProps: LinkProps = {};

  protected initProps(): void {
    super.initProps();
    this.linkProps = {
      type: (this.getAttribute('type') as LinkProps['type']) || undefined,
      underline: this.hasAttribute('underline'),
      disabled: this.hasAttribute('disabled'),
      href: this.getAttribute('href') || undefined,
      target: this.getAttribute('target') || '_self'
    };
  }

  protected render(): void {
    const { href, target } = this.linkProps;

    // 确定标签类型
    const tag = href ? 'a' : 'span';

    // 创建链接元素
    const link = this.createElement(tag, {
      class: this.getLinkClasses(),
      ...(href && { href }),
      ...(href && { target }),
      ...(target === '_blank' && { rel: 'noopener noreferrer' })
    });

    // 添加插槽内容（包括图标）
    const slot = this.createElement('slot');
    link.appendChild(slot);

    // 如果是外部链接，添加外部链接图标
    if (href && (target === '_blank' || href.startsWith('http'))) {
      const externalIcon = this.createElement('i', {
        class: 'ew-link__external'
      });
      externalIcon.textContent = '↗';
      link.appendChild(externalIcon);
    }

    // 清空并重新渲染
    this.shadow.innerHTML = '';

    // 注入样式
    this.injectStyles(linkStyles);

    // 添加链接元素
    this.shadow.appendChild(link);

    // 添加事件监听器
    this.addEventListeners(link);
  }

  private getLinkClasses(): string {
    const { type, underline, disabled } = this.linkProps;
    const classes = ['ew-link'];

    if (type) {
      classes.push(`ew-link--${type}`);
    }

    if (underline) {
      classes.push('ew-link--underline');
    }

    if (disabled) {
      classes.push('ew-link--disabled');
    }

    return classes.join(' ');
  }



  private addEventListeners(link: HTMLElement): void {
    // 点击事件
    link.addEventListener('click', (event) => {
      if (this.linkProps.disabled) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      event.stopPropagation();
      this.dispatchCustomEvent('click', event);
    });

    // 鼠标事件
    link.addEventListener('mouseenter', (event) => {
      if (!this.linkProps.disabled) {
        event.stopPropagation();
        this.dispatchCustomEvent('mouseenter', event);
      }
    });

    link.addEventListener('mouseleave', (event) => {
      if (!this.linkProps.disabled) {
        event.stopPropagation();
        this.dispatchCustomEvent('mouseleave', event);
      }
    });

    // 键盘事件
    link.addEventListener('keydown', (event) => {
      if (this.linkProps.disabled) {
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

  // 公共方法
  public focus(): void {
    if (!this.linkProps.disabled) {
      const linkElement = this.shadow.querySelector('.ew-link') as HTMLElement;
      if (linkElement) {
        linkElement.focus();
      }
    }
  }

  public blur(): void {
    const linkElement = this.shadow.querySelector('.ew-link') as HTMLElement;
    if (linkElement) {
      linkElement.blur();
    }
  }

  static get observedAttributes(): string[] {
    return ['type', 'underline', 'disabled', 'href', 'target'];
  }
}

// 注册组件
customElements.define('ew-link', EwLink); 
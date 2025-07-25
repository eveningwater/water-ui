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
      icon: this.getAttribute('icon') || undefined,
      target: this.getAttribute('target') || '_self'
    };
  }

  protected render(): void {
    const { href, icon, target } = this.linkProps;

    // 确定标签类型
    const tag = href ? 'a' : 'span';

    // 创建链接元素
    const link = this.createElement(tag, {
      class: this.getLinkClasses(),
      ...(href && { href }),
      ...(href && { target }),
      ...(target === '_blank' && { rel: 'noopener noreferrer' })
    });

    // 添加图标
    if (icon && this.isValidIcon(icon)) {
      const iconElement = this.createElement('i', {
        class: `ew-link__icon ${icon}`
      });
      iconElement.innerHTML = icon;
      link.appendChild(iconElement);
    }

    // 添加内容区域
    const inner = this.createElement('span', {
      class: 'ew-link__inner'
    });

    // 添加插槽内容
    const slot = this.createElement('slot');
    inner.appendChild(slot);

    link.appendChild(inner);

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

  private isValidIcon(icon: string): boolean {
    // 灵活的图标验证 - 只要不是空字符串且符合基本命名规范就认为是有效图标
    return Boolean(icon && icon.trim().length > 0);
  }

  private addEventListeners(link: HTMLElement): void {
    // 点击事件
    link.addEventListener('click', (event) => {
      if (this.linkProps.disabled) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      this.dispatchCustomEvent('click', event);
    });

    // 鼠标事件
    link.addEventListener('mouseenter', (event) => {
      if (!this.linkProps.disabled) {
        this.dispatchCustomEvent('mouseenter', event);
      }
    });

    link.addEventListener('mouseleave', (event) => {
      if (!this.linkProps.disabled) {
        this.dispatchCustomEvent('mouseleave', event);
      }
    });

    // 键盘事件
    link.addEventListener('keydown', (event) => {
      if (this.linkProps.disabled) {
        event.preventDefault();
        return;
      }

      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
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
    return ['type', 'underline', 'disabled', 'href', 'icon', 'target'];
  }
}

// 注册组件
customElements.define('ew-link', EwLink); 
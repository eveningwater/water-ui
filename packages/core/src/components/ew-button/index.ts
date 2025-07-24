import { BaseComponent } from '../../utils/base-component';
import { LoadingIcon } from '@water-ui/icons';
import { executeInlineCode } from '@water-ui/utils';
import { ButtonProps } from '../../types';
import { buttonStyles } from './index-style';

export class EwButton extends BaseComponent {
  private buttonProps: ButtonProps = {};

  protected initProps(): void {
    super.initProps();
    this.buttonProps = {
      type: (this.getAttribute('type') as ButtonProps['type']) || 'default',
      plain: this.hasAttribute('plain'),
      round: this.hasAttribute('round'),
      circle: this.hasAttribute('circle'),
      text: this.hasAttribute('text'),
      link: this.hasAttribute('link'),
      disabled: this.hasAttribute('disabled'),
      loading: this.hasAttribute('loading'),
      size: (this.getAttribute('size') as ButtonProps['size']) || 'medium',
      nativeType: (this.getAttribute('native-type') as ButtonProps['nativeType']) || 'button',
      autofocus: this.hasAttribute('autofocus'),
      icon: this.getAttribute('icon') || ''
    };
  }

  protected render(): void {
    const { icon, disabled, loading, nativeType } = this.buttonProps;
    
    // 收集所有事件属性
    const eventAttributes: Record<string, string> = {};
    for (const attr of this.attributes) {
      if (attr.name.startsWith('on')) {
        eventAttributes[attr.name] = attr.value;
      }
    }
    
    const button = this.createElement('button', {
      type: nativeType || 'button',
      class: this.getButtonClasses(),
      ...(disabled || loading ? { disabled: '' } : {}),
      autofocus: this.buttonProps.autofocus ? '' : ''
    });

    // 手动添加事件监听器来处理内联事件
    for (const [eventName, eventCode] of Object.entries(eventAttributes)) {
      const actualEventName = eventName.slice(2).toLowerCase(); // 移除 "on" 前缀
      
      // 使用更直接的事件处理方式
      if (actualEventName === 'click') {
        button.onclick = (e) => {
          executeInlineCode(eventCode, window, e);
        };
      } else {
        button.addEventListener(actualEventName, (e) => {
          executeInlineCode(eventCode, window, e);
        });
      }
    }

    // 添加图标
    if (icon) {
      const iconElement = this.createElement('span', { class: 'ew-button__icon' });
      iconElement.innerHTML = icon;
      button.appendChild(iconElement);
    }

    // 添加加载状态
    if (loading) {
      const loadingElement = this.createElement('span', { class: 'ew-button__loading' });
      loadingElement.innerHTML = LoadingIcon({ size: '14px' });
      button.appendChild(loadingElement);
    }

    // 添加插槽内容
    const slot = this.createElement('slot');
    button.appendChild(slot);

    // 清空并重新渲染
    this.shadow.innerHTML = '';
    
    // 注入样式
    this.injectStyles(buttonStyles);
    
    // 添加按钮元素
    this.shadow.appendChild(button);
  }

  private getButtonClasses(): string {
    const { type, plain, round, circle, text, link, disabled, loading, size } = this.buttonProps;
    
    const classes = ['ew-button'];
    
    if (type && type !== 'default') {
      classes.push(`ew-button--${type}`);
    }
    
    if (plain) classes.push('ew-button--plain');
    if (round) classes.push('ew-button--round');
    if (circle) classes.push('ew-button--circle');
    if (text) classes.push('ew-button--text');
    if (link) classes.push('ew-button--link');
    if (disabled) classes.push('ew-button--disabled');
    if (loading) classes.push('ew-button--loading');
    if (size && size !== 'medium') {
      classes.push(`ew-button--${size}`);
    }

    return classes.join(' ');
  }

  static get observedAttributes(): string[] {
    return [
      'type',
      'plain',
      'round',
      'circle',
      'text',
      'link',
      'disabled',
      'loading',
      'size',
      'native-type',
      'autofocus',
      'icon'
    ];
  }
}

// 注册组件
customElements.define('ew-button', EwButton); 
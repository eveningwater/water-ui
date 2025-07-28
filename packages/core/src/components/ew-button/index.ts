import { BaseComponent } from '../../utils/base-component';
import { LoadingIcon } from '@water-ui/icons';
import { executeInlineCode } from '@water-ui/utils';
import { ButtonProps } from '../../types';
import { buttonStyles } from './index-style';

export class EwButton extends BaseComponent {
  private buttonProps: ButtonProps = {};
  private buttonElement: HTMLButtonElement | null = null;
  private eventListeners: Array<{ event: string; handler: (e: Event) => void }> = [];

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
    }) as HTMLButtonElement;

    // 清理之前的事件监听器
    this.cleanupEventListeners();

    // 手动添加事件监听器来处理内联事件
    for (const [eventName, eventCode] of Object.entries(eventAttributes)) {
      const actualEventName = eventName.slice(2).toLowerCase(); // 移除 "on" 前缀
      
      const handler = (e: Event) => {
        // 阻止事件冒泡，但不阻止默认行为
        e.stopPropagation();
        
        // 如果按钮被禁用或正在加载，不执行事件
        if (disabled || loading) {
          return;
        }
        
        executeInlineCode(eventCode, window, e);
      };

      // 记录事件监听器以便后续清理
      this.eventListeners.push({ event: actualEventName, handler });
      
      // 使用更直接的事件处理方式
      if (actualEventName === 'click') {
        button.onclick = handler;
      } else {
        button.addEventListener(actualEventName, handler);
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
    this.buttonElement = button;
  }

  private cleanupEventListeners(): void {
    if (this.buttonElement) {
      // 清理之前的事件监听器
      this.eventListeners.forEach(({ event, handler }) => {
        if (event === 'click') {
          this.buttonElement!.onclick = null;
        } else {
          this.buttonElement!.removeEventListener(event, handler);
        }
      });
      this.eventListeners = [];
    }
  }

  disconnectedCallback(): void {
    // 组件销毁时清理事件监听器
    this.cleanupEventListeners();
  }

  // 重写 attributeChangedCallback 来避免不必要的事件属性变化导致的重新渲染
  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    // 如果是事件属性变化，只更新事件监听器，不重新渲染整个组件
    if (name.startsWith('on')) {
      this.updateEventListeners();
      return;
    }

    // 对于其他属性变化，检查值是否真的改变了
    if (oldValue !== newValue) {
      this.initProps();
      this.render();
    }
  }

  private updateEventListeners(): void {
    if (!this.buttonElement) return;

    // 清理之前的事件监听器
    this.cleanupEventListeners();

    // 重新收集事件属性
    const eventAttributes: Record<string, string> = {};
    for (const attr of this.attributes) {
      if (attr.name.startsWith('on')) {
        eventAttributes[attr.name] = attr.value;
      }
    }

    // 重新绑定事件监听器
    for (const [eventName, eventCode] of Object.entries(eventAttributes)) {
      const actualEventName = eventName.slice(2).toLowerCase();
      
      const handler = (e: Event) => {
        // 阻止事件冒泡，但不阻止默认行为
        e.stopPropagation();
        
        // 如果按钮被禁用或正在加载，不执行事件
        if (this.buttonProps.disabled || this.buttonProps.loading) {
          return;
        }
        
        executeInlineCode(eventCode, window, e);
      };

      this.eventListeners.push({ event: actualEventName, handler });
      
      if (actualEventName === 'click') {
        this.buttonElement!.onclick = handler;
      } else {
        this.buttonElement!.addEventListener(actualEventName, handler);
      }
    }
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
      'icon',
      'onclick',
      'onmouseenter',
      'onmouseleave',
      'onfocus',
      'onblur'
    ];
  }
}

// 注册组件
customElements.define('ew-button', EwButton); 
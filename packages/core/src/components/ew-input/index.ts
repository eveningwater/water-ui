import { BaseComponent } from '../../utils/base-component';
import { ClearIcon, EyeIcon, EyeOffIcon } from '@water-ui/icons';
import { InputProps } from '../../types';
import { inputStyles } from './index-style';

export class EwInput extends BaseComponent {
  private inputProps: InputProps = {};
  private inputElement: HTMLInputElement | null = null;
  private isPasswordVisible: boolean = false;
  private clearButton: HTMLElement | null = null;

  protected initProps(): void {
    super.initProps();
    this.inputProps = {
      type: (this.getAttribute('type') as InputProps['type']) || 'text',
      placeholder: this.getAttribute('placeholder') || '',
      value: this.getAttribute('value') || '',
      disabled: this.hasAttribute('disabled'),
      readonly: this.hasAttribute('readonly'),
      clearable: this.hasAttribute('clearable'),
      showPassword: this.hasAttribute('show-password'),
      size: (this.getAttribute('size') as InputProps['size']) || 'medium',
      maxlength: this.getAttribute('maxlength') ? parseInt(this.getAttribute('maxlength')!) : undefined,
      minlength: this.getAttribute('minlength') ? parseInt(this.getAttribute('minlength')!) : undefined,
      autocomplete: this.getAttribute('autocomplete') || 'off',
      name: this.getAttribute('name') || ''
    };
  }

  protected render(): void {
    const { type, placeholder, disabled, readonly, clearable, showPassword } = this.inputProps;
    
    // 创建输入框容器
    const inputContainer = this.createElement('div', { class: this.getInputClasses() });

    // 创建输入框包装器
    const inputWrapper = this.createElement('div', { class: 'ew-input__wrapper' });

    // 创建输入框
    const input = this.createElement('input', {
      type: type === 'password' && this.isPasswordVisible ? 'text' : type || 'text',
      placeholder: placeholder || '',
      value: this.inputProps.value || '',
      ...(disabled ? { disabled: '' } : {}),
      ...(readonly ? { readonly: '' } : {}),
      class: 'ew-input__inner'
    });

    // 保存输入框引用
    this.inputElement = input as HTMLInputElement;

    // 添加事件监听器
    input.addEventListener('input', this.handleInput.bind(this));
    input.addEventListener('focus', this.handleFocus.bind(this));
    input.addEventListener('blur', this.handleBlur.bind(this));
    input.addEventListener('keydown', this.handleKeydown.bind(this));

    inputWrapper.appendChild(input);

    // 添加清除按钮
    if (clearable && !disabled && !readonly) {
      this.clearButton = this.createElement('span', { 
        class: 'ew-input__clear',
        style: this.inputProps.value ? 'display: flex' : 'display: none'
      });
      this.clearButton.innerHTML = ClearIcon({ size: '16px' });
      this.clearButton.addEventListener('click', this.handleClear.bind(this));
      inputWrapper.appendChild(this.clearButton);
    }

    // 添加密码切换按钮
    if (type === 'password' && showPassword && !disabled && !readonly) {
      const passwordToggle = this.createElement('span', { class: 'ew-input__password-toggle' });
      passwordToggle.innerHTML = this.isPasswordVisible ? EyeOffIcon({ size: '16px' }) : EyeIcon({ size: '16px' });
      passwordToggle.addEventListener('click', this.handlePasswordToggle.bind(this));
      inputWrapper.appendChild(passwordToggle);
    }

    inputContainer.appendChild(inputWrapper);

    // 添加插槽内容
    const slot = this.createElement('slot');
    inputContainer.appendChild(slot);

    // 清空并重新渲染
    this.shadow.innerHTML = '';
    
    // 注入样式
    this.injectStyles(inputStyles);
    
    // 添加容器元素
    this.shadow.appendChild(inputContainer);
  }

  private getInputClasses(): string {
    const { size, disabled, readonly } = this.inputProps;
    
    const classes = ['ew-input'];
    
    if (size && size !== 'medium') {
      classes.push(`ew-input--${size}`);
    }
    if (disabled) classes.push('ew-input--disabled');
    if (readonly) classes.push('ew-input--readonly');

    return classes.join(' ');
  }

  private handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.inputProps.value = target.value;
    this.dispatchCustomEvent('input', target.value);
    this.dispatchCustomEvent('change', target.value);
    
    // 更新清除按钮显示状态，而不是重新渲染整个组件
    this.updateClearButton();
  }

  private updateClearButton(): void {
    if (this.clearButton) {
      this.clearButton.style.display = this.inputProps.value ? 'flex' : 'none';
    }
  }

  private handleFocus(event: Event): void {
    this.dispatchCustomEvent('focus', event);
  }

  private handleBlur(event: Event): void {
    this.dispatchCustomEvent('blur', event);
  }

  private handleKeydown(event: KeyboardEvent): void {
    this.dispatchCustomEvent('keydown', event);
  }

  private handleClear(): void {
    if (this.inputElement) {
      this.inputElement.value = '';
      this.inputProps.value = '';
      this.inputElement.focus();
      this.dispatchCustomEvent('input', '');
      this.dispatchCustomEvent('change', '');
      this.updateClearButton();
    }
  }

  private handlePasswordToggle(): void {
    if (this.inputProps.type === 'password') {
      this.isPasswordVisible = !this.isPasswordVisible;
      this.render();
    }
  }

  static get observedAttributes(): string[] {
    return [
      'type',
      'placeholder',
      'value',
      'disabled',
      'readonly',
      'clearable',
      'show-password',
      'size',
      'maxlength',
      'minlength',
      'autocomplete',
      'name',
      'id'
    ];
  }
}

// 注册组件
customElements.define('ew-input', EwInput); 
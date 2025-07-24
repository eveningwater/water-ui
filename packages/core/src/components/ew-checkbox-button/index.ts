import { BaseComponent } from '../../utils/base-component';
import { CheckboxProps } from '../../types';
import { checkboxButtonStyles } from './index-style';

export class EwCheckboxButton extends BaseComponent {
  private checkboxProps: CheckboxProps = {};
  private inputElement: HTMLInputElement | null = null;
  private isChecked: boolean = false;

  protected initProps(): void {
    super.initProps();
    this.checkboxProps = {
      modelValue: this.getAttribute('model-value') === 'true',
      label: this.getAttribute('label') || '',
      value: this.getAttribute('value') || '',
      name: this.getAttribute('name') || '',
      border: this.hasAttribute('border'),
      button: this.hasAttribute('button'),
      checked: this.hasAttribute('checked'),
      defaultChecked: this.hasAttribute('default-checked'),
      trueLabel: this.getAttribute('true-label') || 'true',
      falseLabel: this.getAttribute('false-label') || 'false',
      id: this.getAttribute('id') || '',
      controls: this.getAttribute('controls') || '',
      disabled: this.hasAttribute('disabled'),
      size: (this.getAttribute('size') as 'small' | 'medium' | 'large') || 'medium'
    };

    // 初始化状态
    this.isChecked = this.checkboxProps.modelValue || this.checkboxProps.checked || this.checkboxProps.defaultChecked || false;
  }

  protected render(): void {
    // 创建checkbox-button容器
    const buttonContainer = this.createElement('label', { class: this.getButtonClasses() });

    // 创建隐藏的input元素
    const input = this.createElement('input', {
      type: 'checkbox',
      class: 'ew-checkbox-button__input',
      ...(this.isChecked ? { checked: '' } : {}),
      ...(this.checkboxProps.disabled ? { disabled: '' } : {}),
      ...(this.checkboxProps.name ? { name: this.checkboxProps.name } : {}),
      ...(this.checkboxProps.value ? { value: this.checkboxProps.value.toString() } : {}),
      ...(this.checkboxProps.id ? { id: this.checkboxProps.id } : {}),
      ...(this.checkboxProps.controls ? { 'aria-controls': this.checkboxProps.controls } : {})
    });

    this.inputElement = input as HTMLInputElement;

    // 创建按钮内部元素
    const buttonInner = this.createElement('span', { class: 'ew-checkbox-button__inner' });
    buttonInner.textContent = this.checkboxProps.label || '';

    // 添加事件监听器
    input.addEventListener('change', this.handleChange.bind(this));
    input.addEventListener('focus', this.handleFocus.bind(this));
    input.addEventListener('blur', this.handleBlur.bind(this));

    // 组装组件
    buttonContainer.appendChild(input);
    buttonContainer.appendChild(buttonInner);

    // 清空并重新渲染
    this.shadow.innerHTML = '';
    
    // 注入样式
    this.injectStyles(checkboxButtonStyles);
    
    // 添加button容器
    this.shadow.appendChild(buttonContainer);
  }

  private getButtonClasses(): string {
    const classes = ['ew-checkbox-button'];
    
    if (this.checkboxProps.disabled) {
      classes.push('ew-checkbox-button--disabled');
    }
    if (this.checkboxProps.size && this.checkboxProps.size !== 'medium') {
      classes.push(`ew-checkbox-button--${this.checkboxProps.size}`);
    }
    if (this.checkboxProps.border) {
      classes.push('ew-checkbox-button--border');
    }
    
    return classes.join(' ');
  }

  private handleChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    
    if (this.checkboxProps.disabled) {
      return;
    }

    this.isChecked = target.checked;
    
    // 更新modelValue
    this.checkboxProps.modelValue = this.isChecked;
    
    // 触发事件
    this.dispatchCustomEvent('change', this.isChecked);
    this.dispatchCustomEvent('input', this.isChecked);
    
    // 更新DOM属性
    this.setAttribute('model-value', this.isChecked.toString());
    
    // 通知父组件（checkbox-group）
    this.notifyParent();
  }

  private handleFocus(event: Event): void {
    this.dispatchCustomEvent('focus', event);
  }

  private handleBlur(event: Event): void {
    this.dispatchCustomEvent('blur', event);
  }

  private notifyParent(): void {
    // 查找父级checkbox-group
    const parent = this.closest('ew-checkbox-group');
    if (parent && (parent as any).handleCheckboxChange) {
      (parent as any).handleCheckboxChange(this);
    }
  }

  // 公共方法
  public setChecked(checked: boolean): void {
    this.isChecked = checked;
    this.checkboxProps.modelValue = checked;
    
    if (this.inputElement) {
      this.inputElement.checked = checked;
    }
    
    this.setAttribute('model-value', checked.toString());
  }

  public getChecked(): boolean {
    return this.isChecked;
  }

  public getValue(): string | number | boolean {
    return this.checkboxProps.value || this.isChecked;
  }

  public toggle(): void {
    this.setChecked(!this.isChecked);
    this.handleChange({ target: this.inputElement } as any);
  }

  static get observedAttributes(): string[] {
    return [
      'model-value',
      'label',
      'value',
      'name',
      'border',
      'checked',
      'default-checked',
      'true-label',
      'false-label',
      'id',
      'controls',
      'disabled',
      'size'
    ];
  }

  attributeChangedCallback(_name: string, oldValue: string | null, newValue: string | null): void {
    if (oldValue !== newValue) {
      this.initProps();
      this.render();
    }
  }
}

// 注册组件
customElements.define('ew-checkbox-button', EwCheckboxButton); 
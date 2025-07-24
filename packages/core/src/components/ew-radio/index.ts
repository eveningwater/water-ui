import { BaseComponent } from '../../utils/base-component';
import { RadioProps } from '../../types';
import { radioStyles } from './index-style';

export class EwRadio extends BaseComponent {
  private radioProps: RadioProps = {};
  private inputElement: HTMLInputElement | null = null;
  private isChecked: boolean = false;

  protected initProps(): void {
    super.initProps();
    this.radioProps = {
      modelValue: this.getAttribute('model-value') || '',
      label: this.getAttribute('label') || '',
      value: this.getAttribute('value') || '',
      name: this.getAttribute('name') || '',
      border: this.hasAttribute('border'),
      button: this.hasAttribute('button'),
      checked: this.hasAttribute('checked'),
      defaultChecked: this.hasAttribute('default-checked'),
      id: this.getAttribute('id') || '',
      controls: this.getAttribute('controls') || '',
      disabled: this.hasAttribute('disabled'),
      size: (this.getAttribute('size') as 'small' | 'medium' | 'large') || 'medium'
    };

    // 初始化状态
    this.isChecked = this.radioProps.checked || this.radioProps.defaultChecked || false;
  }

  protected render(): void {
    // 创建radio容器
    const radioContainer = this.createElement('label', { class: this.getRadioClasses() });

    // 创建隐藏的input元素
    const input = this.createElement('input', {
      type: 'radio',
      class: 'ew-radio__input',
      ...(this.isChecked ? { checked: '' } : {}),
      ...(this.radioProps.disabled ? { disabled: '' } : {}),
      ...(this.radioProps.name ? { name: this.radioProps.name } : {}),
      ...(this.radioProps.value ? { value: this.radioProps.value.toString() } : {}),
      ...(this.radioProps.id ? { id: this.radioProps.id } : {}),
      ...(this.radioProps.controls ? { 'aria-controls': this.radioProps.controls } : {})
    });

    this.inputElement = input as HTMLInputElement;

    // 创建radio内部元素
    const radioInner = this.createElement('span', { class: 'ew-radio__inner' });

    // 创建标签
    const label = this.createElement('span', { class: 'ew-radio__label' });
    label.textContent = this.radioProps.label || '';

    // 添加事件监听器
    input.addEventListener('change', this.handleChange.bind(this));
    input.addEventListener('focus', this.handleFocus.bind(this));
    input.addEventListener('blur', this.handleBlur.bind(this));

    // 组装组件
    radioContainer.appendChild(input);
    radioContainer.appendChild(radioInner);
    radioContainer.appendChild(label);

    // 清空并重新渲染
    this.shadow.innerHTML = '';
    
    // 注入样式
    this.injectStyles(radioStyles);
    
    // 添加radio容器
    this.shadow.appendChild(radioContainer);
  }

  private getRadioClasses(): string {
    const classes = ['ew-radio'];
    
    if (this.radioProps.disabled) {
      classes.push('ew-radio--disabled');
    }
    if (this.radioProps.size && this.radioProps.size !== 'medium') {
      classes.push(`ew-radio--${this.radioProps.size}`);
    }
    if (this.radioProps.button) {
      classes.push('ew-radio--button');
    }
    if (this.radioProps.border) {
      classes.push('ew-radio--border');
    }
    
    return classes.join(' ');
  }

  private handleChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    
    if (this.radioProps.disabled) {
      return;
    }

    this.isChecked = target.checked;
    
    // 更新modelValue
    this.radioProps.modelValue = this.radioProps.value;
    
    // 触发事件
    this.dispatchCustomEvent('change', this.radioProps.value);
    this.dispatchCustomEvent('input', this.radioProps.value);
    
    // 更新DOM属性
    this.setAttribute('model-value', this.radioProps.value?.toString() || '');
    
    // 通知父组件（radio-group）
    this.notifyParent();
  }

  private handleFocus(event: Event): void {
    this.dispatchCustomEvent('focus', event);
  }

  private handleBlur(event: Event): void {
    this.dispatchCustomEvent('blur', event);
  }

  private notifyParent(): void {
    // 查找父级radio-group
    const parent = this.closest('ew-radio-group');
    if (parent && (parent as any).handleRadioChange) {
      (parent as any).handleRadioChange(this);
    }
  }

  // 公共方法
  public setChecked(checked: boolean): void {
    this.isChecked = checked;
    
    if (this.inputElement) {
      this.inputElement.checked = checked;
    }
    
    if (checked) {
      this.setAttribute('model-value', this.radioProps.value?.toString() || '');
    }
  }

  public getChecked(): boolean {
    return this.isChecked;
  }

  public getValue(): string | number | boolean {
    return this.radioProps.value || '';
  }

  static get observedAttributes(): string[] {
    return [
      'model-value',
      'label',
      'value',
      'name',
      'border',
      'button',
      'checked',
      'default-checked',
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
customElements.define('ew-radio', EwRadio); 
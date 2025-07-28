import { BaseComponent } from '../../utils/base-component';
import { CheckboxProps } from '../../types';
import { checkboxStyles } from './index-style';

export class EwCheckbox extends BaseComponent {
  private checkboxProps: CheckboxProps = {};
  private inputElement: HTMLInputElement | null = null;
  private isChecked: boolean = false;
  private isIndeterminate: boolean = false;

  protected initProps(): void {
    super.initProps();
    this.checkboxProps = {
      modelValue: this.getAttribute('model-value') === 'true',
      label: this.getAttribute('label') || '',
      value: this.getAttribute('value') || '',
      name: this.getAttribute('name') || '',
      indeterminate: this.hasAttribute('indeterminate'),
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
    this.isIndeterminate = this.checkboxProps.indeterminate || false;
  }

  protected render(): void {
    // 创建checkbox容器
    const checkboxContainer = this.createElement('label', { class: this.getCheckboxClasses() });

    // 创建隐藏的input元素
    const input = this.createElement('input', {
      type: 'checkbox',
      class: 'ew-checkbox__input',
      ...(this.isChecked ? { checked: '' } : {}),
      ...(this.isIndeterminate ? { indeterminate: '' } : {}),
      ...(this.checkboxProps.disabled ? { disabled: '' } : {}),
      ...(this.checkboxProps.name ? { name: this.checkboxProps.name } : {}),
      ...(this.checkboxProps.value ? { value: this.checkboxProps.value.toString() } : {}),
      ...(this.checkboxProps.id ? { id: this.checkboxProps.id } : {}),
      ...(this.checkboxProps.controls ? { 'aria-controls': this.checkboxProps.controls } : {})
    });

    this.inputElement = input as HTMLInputElement;

    // 创建checkbox内部元素
    const checkboxInner = this.createElement('span', { class: 'ew-checkbox__inner' });

    // 创建标签
    const label = this.createElement('span', { class: 'ew-checkbox__label' });
    label.textContent = this.checkboxProps.label || '';

    // 添加事件监听器
    input.addEventListener('change', this.handleChange.bind(this));
    input.addEventListener('focus', this.handleFocus.bind(this));
    input.addEventListener('blur', this.handleBlur.bind(this));
    input.addEventListener('click', this.handleClick.bind(this));
    
    // 为禁用状态添加额外的事件阻止
    if (this.checkboxProps.disabled) {
      input.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      });
    }

    // 组装组件
    checkboxContainer.appendChild(input);
    checkboxContainer.appendChild(checkboxInner);
    checkboxContainer.appendChild(label);

    // 清空并重新渲染
    this.shadow.innerHTML = '';
    
    // 注入样式
    this.injectStyles(checkboxStyles);
    
    // 添加checkbox容器
    this.shadow.appendChild(checkboxContainer);
  }

  private getCheckboxClasses(): string {
    const classes = ['ew-checkbox'];
    
    if (this.checkboxProps.disabled) {
      classes.push('ew-checkbox--disabled');
    }
    if (this.checkboxProps.size && this.checkboxProps.size !== 'medium') {
      classes.push(`ew-checkbox--${this.checkboxProps.size}`);
    }
    if (this.checkboxProps.button) {
      classes.push('ew-checkbox--button');
    }
    if (this.checkboxProps.border) {
      classes.push('ew-checkbox--border');
    }
    
    return classes.join(' ');
  }

  private handleChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    
    if (this.checkboxProps.disabled) {
      // 阻止事件传播和默认行为
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    this.isChecked = target.checked;
    this.isIndeterminate = target.indeterminate;
    
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

  private handleClick(event: Event): void {
    // 阻止事件冒泡
    event.stopPropagation();
    
    if (this.checkboxProps.disabled) {
      event.preventDefault();
      return;
    }
    
    this.dispatchCustomEvent('click', event);
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
    this.isIndeterminate = false;
    this.checkboxProps.modelValue = checked;
    
    if (this.inputElement) {
      this.inputElement.checked = checked;
      this.inputElement.indeterminate = false;
    }
    
    this.setAttribute('model-value', checked.toString());
  }

  public setIndeterminate(indeterminate: boolean): void {
    this.isIndeterminate = indeterminate;
    
    if (this.inputElement) {
      this.inputElement.indeterminate = indeterminate;
    }
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
      'indeterminate',
      'border',
      'button',
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

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (oldValue !== newValue) {
      // 只更新必要的状态，不重新渲染
      if (name === 'model-value') {
        this.isChecked = this.getAttribute('model-value') === 'true';
        if (this.inputElement) {
          this.inputElement.checked = this.isChecked;
        }
      } else if (name === 'indeterminate') {
        this.isIndeterminate = this.hasAttribute('indeterminate');
        if (this.inputElement) {
          this.inputElement.indeterminate = this.isIndeterminate;
        }
      } else {
        // 其他属性变化时才重新渲染
        this.initProps();
        this.render();
      }
    }
  }
}

// 注册组件
customElements.define('ew-checkbox', EwCheckbox); 
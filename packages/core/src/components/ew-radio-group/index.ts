import { BaseComponent } from '../../utils/base-component';
import { RadioGroupProps } from '../../types';
import { radioGroupStyles } from './index-style';

export class EwRadioGroup extends BaseComponent {
  private groupProps: RadioGroupProps = {
    modelValue: ''
  };
  private radios: any[] = [];

  protected initProps(): void {
    super.initProps();
    this.groupProps = {
      modelValue: this.getAttribute('model-value') || '',
      size: (this.getAttribute('size') as RadioGroupProps['size']) || 'medium',
      disabled: this.hasAttribute('disabled'),
      textColor: this.getAttribute('text-color') || '#ffffff',
      fill: this.getAttribute('fill') || '#409eff',
      name: this.getAttribute('name') || '',
      border: this.hasAttribute('border')
    };
  }

  protected render(): void {
    // 创建radio-group容器
    const groupContainer = this.createElement('div', { class: this.getGroupClasses() });

    // 获取插槽内容
    const slot = this.createElement('slot');
    groupContainer.appendChild(slot);

    // 清空并重新渲染
    this.shadow.innerHTML = '';
    
    // 注入样式
    this.injectStyles(radioGroupStyles);
    
    // 添加group容器
    this.shadow.appendChild(groupContainer);

    // 初始化子radio
    this.initRadios();
  }

  private getGroupClasses(): string {
    const classes = ['ew-radio-group'];
    
    if (this.groupProps.disabled) {
      classes.push('ew-radio-group--disabled');
    }
    if (this.groupProps.size && this.groupProps.size !== 'medium') {
      classes.push(`ew-radio-group--${this.groupProps.size}`);
    }
    if (this.hasAttribute('vertical')) {
      classes.push('ew-radio-group--vertical');
    }
    if (this.hasAttribute('button')) {
      classes.push('ew-radio-group--button');
    }
    if (this.groupProps.border) {
      classes.push('ew-radio-group--border');
    }
    
    return classes.join(' ');
  }

  private initRadios(): void {
    // 延迟执行，确保子元素已经渲染
    setTimeout(() => {
      this.radios = Array.from(this.querySelectorAll('ew-radio, ew-radio-button'));
      this.updateRadios();
    }, 0);
  }

  private updateRadios(): void {
    this.radios.forEach(radio => {
      const value = radio.getValue();
      const isChecked = this.groupProps.modelValue === value;
      
      radio.setChecked(isChecked);
      
      // 设置禁用状态
      if (this.groupProps.disabled) {
        radio.setAttribute('disabled', '');
      }
      
      // 设置尺寸
      if (this.groupProps.size && this.groupProps.size !== 'medium') {
        radio.setAttribute('size', this.groupProps.size);
      }
      
      // 设置name属性
      if (this.groupProps.name) {
        radio.setAttribute('name', this.groupProps.name);
      }
    });
  }

  public handleRadioChange(radio: any): void {
    const value = radio.getValue();
    
    // 取消其他radio的选中状态
    this.radios.forEach(r => {
      if (r !== radio) {
        r.setChecked(false);
      }
    });
    
    // 设置当前radio为选中状态
    radio.setChecked(true);
    
    this.groupProps.modelValue = value;
    this.setAttribute('model-value', value?.toString() || '');
    
    // 触发事件
    this.dispatchCustomEvent('change', value);
    this.dispatchCustomEvent('input', value);
  }

  // 公共方法
  public setValue(value: string | number | boolean): void {
    this.groupProps.modelValue = value;
    this.setAttribute('model-value', value?.toString() || '');
    this.updateRadios();
  }

  public getValue(): string | number | boolean {
    return this.groupProps.modelValue || '';
  }

  public addRadio(radio: any): void {
    if (!this.radios.includes(radio)) {
      this.radios.push(radio);
      this.updateRadios();
    }
  }

  public removeRadio(radio: any): void {
    const index = this.radios.indexOf(radio);
    if (index > -1) {
      this.radios.splice(index, 1);
    }
  }

  static get observedAttributes(): string[] {
    return [
      'model-value',
      'size',
      'disabled',
      'text-color',
      'fill',
      'name',
      'vertical',
      'button',
      'border'
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
customElements.define('ew-radio-group', EwRadioGroup); 
import { BaseComponent } from '../../../utils/base-component';
import { CheckboxGroupProps } from '../../../types';
import { checkboxGroupStyles } from './index-style';

export class EwCheckboxGroup extends BaseComponent {
  private groupProps: CheckboxGroupProps = {
    modelValue: []
  };
  private checkboxes: any[] = [];

  protected initProps(): void {
    super.initProps();
    this.groupProps = {
      modelValue: this.getAttribute('model-value') ? 
        JSON.parse(this.getAttribute('model-value')!) : [],
      min: this.getAttribute('min') ? parseInt(this.getAttribute('min')!) : undefined,
      max: this.getAttribute('max') ? parseInt(this.getAttribute('max')!) : undefined,
      textColor: this.getAttribute('text-color') || '#ffffff',
      fill: this.getAttribute('fill') || '#409eff',
      size: (this.getAttribute('size') as CheckboxGroupProps['size']) || 'medium',
      disabled: this.hasAttribute('disabled'),
      name: this.getAttribute('name') || '',
      border: this.hasAttribute('border')
    };
  }

  protected render(): void {
    // 创建checkbox-group容器
    const groupContainer = this.createElement('div', { class: this.getGroupClasses() });

    // 获取插槽内容
    const slot = this.createElement('slot');
    groupContainer.appendChild(slot);

    // 清空并重新渲染
    this.shadow.innerHTML = '';
    
    // 注入样式
    this.injectStyles(checkboxGroupStyles);
    
    // 添加group容器
    this.shadow.appendChild(groupContainer);

    // 初始化子checkbox
    this.initCheckboxes();
  }

  private getGroupClasses(): string {
    const classes = ['ew-checkbox-group'];
    
    if (this.groupProps.disabled) {
      classes.push('ew-checkbox-group--disabled');
    }
    if (this.groupProps.size && this.groupProps.size !== 'medium') {
      classes.push(`ew-checkbox-group--${this.groupProps.size}`);
    }
    if (this.hasAttribute('vertical')) {
      classes.push('ew-checkbox-group--vertical');
    }
    if (this.hasAttribute('button')) {
      classes.push('ew-checkbox-group--button');
    }
    if (this.groupProps.border) {
      classes.push('ew-checkbox-group--border');
    }
    
    return classes.join(' ');
  }

  private initCheckboxes(): void {
    // 延迟执行，确保子元素已经渲染
    setTimeout(() => {
      this.checkboxes = Array.from(this.querySelectorAll('ew-checkbox'));
      this.updateCheckboxes();
    }, 0);
  }

  private updateCheckboxes(): void {
    this.checkboxes.forEach(checkbox => {
      const value = checkbox.getValue();
      const isChecked = this.groupProps.modelValue?.includes(value);
      
      if (isChecked !== undefined) {
        checkbox.setChecked(isChecked);
      }
      
      // 设置禁用状态
      if (this.groupProps.disabled) {
        checkbox.setAttribute('disabled', '');
      }
      
      // 设置尺寸
      if (this.groupProps.size && this.groupProps.size !== 'medium') {
        checkbox.setAttribute('size', this.groupProps.size);
      }
    });
  }

  public handleCheckboxChange(checkbox: any): void {
    const value = checkbox.getValue();
    const isChecked = checkbox.getChecked();
    
    let newValue = [...(this.groupProps.modelValue || [])];
    
    if (isChecked) {
      // 检查max限制
      if (this.groupProps.max && newValue.length >= this.groupProps.max) {
        checkbox.setChecked(false);
        return;
      }
      
      if (!newValue.includes(value)) {
        newValue.push(value);
      }
    } else {
      // 检查min限制
      if (this.groupProps.min && newValue.length <= this.groupProps.min) {
        checkbox.setChecked(true);
        return;
      }
      
      const index = newValue.indexOf(value);
      if (index > -1) {
        newValue.splice(index, 1);
      }
    }
    
    this.groupProps.modelValue = newValue;
    this.setAttribute('model-value', JSON.stringify(newValue));
    
    // 触发事件
    this.dispatchCustomEvent('change', newValue);
    this.dispatchCustomEvent('input', newValue);
  }

  // 公共方法
  public setValue(value: (string | number | boolean)[]): void {
    this.groupProps.modelValue = value;
    this.setAttribute('model-value', JSON.stringify(value));
    this.updateCheckboxes();
  }

  public getValue(): (string | number | boolean)[] {
    return this.groupProps.modelValue || [];
  }

  public addCheckbox(checkbox: any): void {
    if (!this.checkboxes.includes(checkbox)) {
      this.checkboxes.push(checkbox);
      this.updateCheckboxes();
    }
  }

  public removeCheckbox(checkbox: any): void {
    const index = this.checkboxes.indexOf(checkbox);
    if (index > -1) {
      this.checkboxes.splice(index, 1);
    }
  }

  public clearSelection(): void {
    this.checkboxes.forEach(checkbox => {
      checkbox.setChecked(false);
    });
    this.setValue([]);
  }

  public selectAll(): void {
    const values = this.checkboxes.map(checkbox => checkbox.getValue());
    this.setValue(values);
  }

  static get observedAttributes(): string[] {
    return [
      'model-value',
      'min',
      'max',
      'text-color',
      'fill',
      'size',
      'disabled',
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
customElements.define('ew-checkbox-group', EwCheckboxGroup); 
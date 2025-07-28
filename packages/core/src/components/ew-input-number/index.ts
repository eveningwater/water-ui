import { BaseComponent } from '../../utils/base-component';
import { PlusIcon, MinusIcon, ClearIcon } from '@water-ui/icons';
import { InputNumberProps } from '../../types';
import { inputNumberStyles } from './index-style';

export class EwInputNumber extends BaseComponent {
  private inputNumberProps: InputNumberProps = {};
  private inputElement: HTMLInputElement | null = null;
  private currentValue: number | null = null;
  private clearButton: HTMLElement | null = null;
  private increaseButton: HTMLElement | null = null;
  private decreaseButton: HTMLElement | null = null;
  private debounceTimer: number | null = null;

  protected initProps(): void {
    super.initProps();
    this.inputNumberProps = {
      modelValue: this.getAttribute('model-value') ? parseFloat(this.getAttribute('model-value')!) : undefined,
      min: this.getAttribute('min') ? parseFloat(this.getAttribute('min')!) : -Infinity,
      max: this.getAttribute('max') ? parseFloat(this.getAttribute('max')!) : Infinity,
      step: this.getAttribute('step') ? parseFloat(this.getAttribute('step')!) : 1,
      stepStrictly: this.hasAttribute('step-strictly'),
      precision: this.getAttribute('precision') ? parseInt(this.getAttribute('precision')!) : undefined,
      size: (this.getAttribute('size') as InputNumberProps['size']) || 'medium',
      disabled: this.hasAttribute('disabled'),
      controls: this.getAttribute('controls') !== 'false',
      controlsPosition: (this.getAttribute('controls-position') as InputNumberProps['controlsPosition']) || 'right',
      name: this.getAttribute('name') || '',
      label: this.getAttribute('label') || '',
      placeholder: this.getAttribute('placeholder') || '',
      readonly: this.hasAttribute('readonly'),
      clearable: this.hasAttribute('clearable'),
      autofocus: this.hasAttribute('autofocus'),
      form: this.getAttribute('form') || '',
      required: this.hasAttribute('required'),
      validateEvent: this.getAttribute('validate-event') !== 'false',
      debounce: this.getAttribute('debounce') ? parseInt(this.getAttribute('debounce')!) : 300
    };

    // 初始化当前值
    this.currentValue = this.inputNumberProps.modelValue ?? null;
    if (this.currentValue !== null) {
      this.currentValue = this.validateValue(this.currentValue);
    }
  }

  protected render(): void {
    // 重新初始化属性以确保获取最新值
    this.initProps();
    
    const { 
      min, max, step, stepStrictly, disabled, controls, 
      controlsPosition, placeholder, readonly, clearable 
    } = this.inputNumberProps;
    
    // 创建输入框容器
    const inputContainer = this.createElement('div', { class: this.getInputClasses() });

    // 创建输入框包装器
    const inputWrapper = this.createElement('div', { class: 'ew-input-number__wrapper' });

    // 创建输入框
    const inputAttrs: Record<string, string> = {
      type: 'number',
      placeholder: placeholder || '',
      value: this.formatValue(this.currentValue),
      class: 'ew-input-number__inner'
    };

    if (min !== undefined) inputAttrs.min = min.toString();
    if (max !== undefined) inputAttrs.max = max.toString();
    if (stepStrictly && step !== undefined) inputAttrs.step = step.toString();
    if (disabled) inputAttrs.disabled = '';
    if (readonly) inputAttrs.readonly = '';

    const input = this.createElement('input', inputAttrs);

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
        class: 'ew-input-number__clear',
        style: this.currentValue !== null ? 'display: flex' : 'display: none'
      });
      this.clearButton.innerHTML = ClearIcon({ size: '16px' });
      this.clearButton.addEventListener('click', (e) => this.handleClear(e));
      inputWrapper.appendChild(this.clearButton);
    }

    // 添加控制按钮
    if (controls) {
      const controlsContainer = this.createElement('div', { class: 'ew-input-number__controls' });
      
      // 减少按钮
      this.decreaseButton = this.createElement('span', { class: 'ew-input-number__decrease' });
      this.decreaseButton.innerHTML = MinusIcon({ size: '14px' });
      this.decreaseButton.addEventListener('click', (e) => this.handleDecrease(e));
      controlsContainer.appendChild(this.decreaseButton);

      // 增加按钮
      this.increaseButton = this.createElement('span', { class: 'ew-input-number__increase' });
      this.increaseButton.innerHTML = PlusIcon({ size: '14px' });
      this.increaseButton.addEventListener('click', (e) => this.handleIncrease(e));
      controlsContainer.appendChild(this.increaseButton);

      if (controlsPosition === 'both') {
        // 两侧都有控制按钮
        inputWrapper.appendChild(controlsContainer);
        const rightControls = controlsContainer.cloneNode(true) as HTMLElement;
        inputWrapper.appendChild(rightControls);
        
        // 重新绑定事件
        const rightDecrease = rightControls.querySelector('.ew-input-number__decrease') as HTMLElement;
        const rightIncrease = rightControls.querySelector('.ew-input-number__increase') as HTMLElement;
        rightDecrease.addEventListener('click', (e) => this.handleDecrease(e));
        rightIncrease.addEventListener('click', (e) => this.handleIncrease(e));
      } else {
        // 默认右侧控制按钮
        inputWrapper.appendChild(controlsContainer);
      }
    }

    inputContainer.appendChild(inputWrapper);

    // 添加插槽内容
    const slot = this.createElement('slot');
    inputContainer.appendChild(slot);

    // 清空并重新渲染
    this.shadow.innerHTML = '';
    
    // 注入样式
    this.injectStyles(inputNumberStyles);
    
    // 添加容器元素
    this.shadow.appendChild(inputContainer);

    // 更新按钮状态
    this.updateControlsState();
  }

  private getInputClasses(): string {
    const { size, disabled, readonly } = this.inputNumberProps;
    
    const classes = ['ew-input-number'];
    
    if (size && size !== 'medium') {
      classes.push(`ew-input-number--${size}`);
    }
    if (disabled) classes.push('ew-input-number--disabled');
    if (readonly) classes.push('ew-input-number--readonly');

    return classes.join(' ');
  }

  private formatValue(value: number | null): string {
    if (value === null || value === undefined) return '';
    
    const { precision } = this.inputNumberProps;
    if (precision !== undefined) {
      return value.toFixed(precision);
    }
    return value.toString();
  }

  private parseValue(value: string): number | null {
    if (!value || value.trim() === '') return null;
    
    const num = parseFloat(value);
    if (isNaN(num)) return null;
    
    const { precision } = this.inputNumberProps;
    if (precision !== undefined) {
      return parseFloat(num.toFixed(precision));
    }
    return num;
  }

  private validateValue(value: number): number {
    const { min, max, step, stepStrictly } = this.inputNumberProps;
    
    // 范围验证
    if (min !== -Infinity && min !== undefined && value < min) value = min;
    if (max !== Infinity && max !== undefined && value > max) value = max;
    
    // 步长验证
    if (stepStrictly && step !== undefined && step > 0) {
      // 如果没有设置最小值，使用0作为基准
      const baseValue = (min !== -Infinity && min !== undefined) ? min : 0;
      const steps = Math.round((value - baseValue) / step);
      value = baseValue + steps * step;
      
      // 确保值在有效范围内
      if (min !== -Infinity && min !== undefined && value < min) value = min;
      if (max !== Infinity && max !== undefined && value > max) value = max;
    }
    
    return value;
  }

  private handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    const newValue = this.parseValue(target.value);
    
    if (newValue !== this.currentValue) {
      this.currentValue = newValue;
      this.updateControlsState();
      this.updateClearButton();
      
      // 防抖处理
      if (this.debounceTimer) {
        clearTimeout(this.debounceTimer);
      }
      
      this.debounceTimer = window.setTimeout(() => {
        this.dispatchCustomEvent('input', newValue);
        this.dispatchCustomEvent('change', newValue);
      }, this.inputNumberProps.debounce || 300);
    }
  }

  private handleFocus(event: Event): void {
    this.dispatchCustomEvent('focus', event);
  }

  private handleBlur(event: Event): void {
    // 失焦时验证并格式化值
    if (this.currentValue !== null) {
      const validatedValue = this.validateValue(this.currentValue);
      if (validatedValue !== this.currentValue) {
        this.currentValue = validatedValue;
        if (this.inputElement) {
          this.inputElement.value = this.formatValue(validatedValue);
        }
      }
    }
    
    this.dispatchCustomEvent('blur', event);
  }

  private handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.handleIncrease();
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.handleDecrease();
    }
    
    this.dispatchCustomEvent('keydown', event);
  }

  private handleIncrease(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    
    if (this.inputNumberProps.disabled || this.inputNumberProps.readonly) return;
    
    const { step = 1 } = this.inputNumberProps;
    const currentVal = this.currentValue ?? 0;
    const newValue = this.validateValue(currentVal + step);
    
    if (newValue !== this.currentValue) {
      this.currentValue = newValue;
      if (this.inputElement) {
        this.inputElement.value = this.formatValue(newValue);
      }
      this.updateControlsState();
      this.updateClearButton();
      this.dispatchCustomEvent('input', newValue);
      this.dispatchCustomEvent('change', newValue);
    }
  }

  private handleDecrease(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    
    if (this.inputNumberProps.disabled || this.inputNumberProps.readonly) return;
    
    const { step = 1 } = this.inputNumberProps;
    const currentVal = this.currentValue ?? 0;
    const newValue = this.validateValue(currentVal - step);
    
    if (newValue !== this.currentValue) {
      this.currentValue = newValue;
      if (this.inputElement) {
        this.inputElement.value = this.formatValue(newValue);
      }
      this.updateControlsState();
      this.updateClearButton();
      this.dispatchCustomEvent('input', newValue);
      this.dispatchCustomEvent('change', newValue);
    }
  }

  private handleClear(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    
    if (this.inputElement) {
      this.inputElement.value = '';
      this.currentValue = null;
      this.updateControlsState();
      this.updateClearButton();
      this.dispatchCustomEvent('input', null);
      this.dispatchCustomEvent('change', null);
      this.inputElement.focus();
    }
  }

  private updateControlsState(): void {
    const { min, max, disabled, readonly } = this.inputNumberProps;
    
    if (this.decreaseButton) {
      const canDecrease = !disabled && !readonly && (this.currentValue === null || this.currentValue > (min ?? -Infinity));
      this.decreaseButton.classList.toggle('ew-input-number__decrease--disabled', !canDecrease);
    }
    
    if (this.increaseButton) {
      const canIncrease = !disabled && !readonly && (this.currentValue === null || this.currentValue < (max ?? Infinity));
      this.increaseButton.classList.toggle('ew-input-number__increase--disabled', !canIncrease);
    }
  }

  private updateClearButton(): void {
    if (this.clearButton) {
      this.clearButton.style.display = this.currentValue !== null ? 'flex' : 'none';
    }
  }

  // 公共方法
  public setValue(value: number | null): void {
    if (value !== null) {
      // 先应用精度，再验证
      const { precision } = this.inputNumberProps;
      if (precision !== undefined) {
        value = parseFloat(value.toFixed(precision));
      }
      this.currentValue = this.validateValue(value);
    } else {
      this.currentValue = null;
    }
    
    if (this.inputElement) {
      this.inputElement.value = this.formatValue(this.currentValue);
    }
    this.updateControlsState();
    this.updateClearButton();
    
    // 触发事件
    this.dispatchCustomEvent('input', this.currentValue);
    this.dispatchCustomEvent('change', this.currentValue);
  }

  public getValue(): number | null {
    return this.currentValue;
  }

  public focus(): void {
    if (this.inputElement) {
      this.inputElement.focus();
    }
  }

  public blur(): void {
    if (this.inputElement) {
      this.inputElement.blur();
      // 手动触发 blur 事件
      this.dispatchCustomEvent('blur', new Event('blur'));
    }
  }

  public select(): void {
    if (this.inputElement) {
      this.inputElement.select();
    }
  }

  static get observedAttributes(): string[] {
    return [
      'model-value',
      'min',
      'max',
      'step',
      'step-strictly',
      'precision',
      'size',
      'disabled',
      'controls',
      'controls-position',
      'name',
      'label',
      'placeholder',
      'readonly',
      'clearable',
      'autofocus',
      'form',
      'required',
      'validate-event',
      'debounce'
    ];
  }
}

// 注册组件
customElements.define('ew-input-number', EwInputNumber); 
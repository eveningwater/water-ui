import { BaseComponent } from '../../../utils/base-component';
import { SelectOptionProps } from '../../../types';

export class EwSelectOption extends BaseComponent {
  private optionProps: SelectOptionProps = {};

  protected initProps(): void {
    super.initProps();
    this.optionProps = {
      value: this.getAttribute('value') || '',
      label: this.getAttribute('label') || this.textContent || '',
      disabled: this.hasAttribute('disabled'),
      created: this.hasAttribute('created')
    };
  }

  protected render(): void {
    // Select Option 组件本身不渲染任何内容
    // 它只是作为数据容器，实际的渲染由父组件 EwSelect 处理
    this.style.display = 'none';
  }

  public getSlotContent(): string {
    // 获取插槽内容
    return this.innerHTML || '';
  }

  public getValue(): string | number {
    return this.optionProps.value || '';
  }

  public getLabel(): string {
    // 优先使用 label 属性，如果没有则使用 textContent
    return this.getAttribute('label') || this.textContent || '';
  }

  public isDisabled(): boolean {
    return this.optionProps.disabled || false;
  }

  public isCreated(): boolean {
    return this.optionProps.created || false;
  }

  public getOptionData() {
    const data: any = {
      value: this.getValue(),
      label: this.getLabel(),
      disabled: this.isDisabled(),
      created: this.isCreated()
    };
    
    // 只有在有插槽内容时才添加 slotContent 字段
    const slotContent = this.getSlotContent();
    if (slotContent) {
      data.slotContent = slotContent;
    }
    
    return data;
  }

  static get observedAttributes(): string[] {
    return ['value', 'label', 'disabled', 'created'];
  }
}

// 注册组件
customElements.define('ew-select-option', EwSelectOption); 
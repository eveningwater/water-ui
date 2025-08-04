import { BaseComponent } from '../../../utils/base-component';
import { SelectOptionGroupProps } from '../../../types';

export class EwSelectOptionGroup extends BaseComponent {
  private groupProps: SelectOptionGroupProps = {};

  protected initProps(): void {
    super.initProps();
    this.groupProps = {
      label: this.getAttribute('label') || '',
      disabled: this.hasAttribute('disabled')
    };
  }

  protected render(): void {
    // Select Option Group 组件本身不渲染任何内容
    // 它只是作为数据容器，实际的渲染由父组件 EwSelect 处理
    this.style.display = 'none';
  }

  public getLabel(): string {
    return this.groupProps.label || '';
  }

  public isDisabled(): boolean {
    return this.groupProps.disabled || false;
  }

  public getGroupData() {
    return {
      label: this.getLabel(),
      disabled: this.isDisabled(),
      options: this.getChildOptions()
    };
  }

  private getChildOptions() {
    const options: any[] = [];
    const optionElements = this.querySelectorAll('ew-select-option');
    
    optionElements.forEach(optionElement => {
      if (optionElement instanceof HTMLElement && 'getOptionData' in optionElement) {
        options.push((optionElement as any).getOptionData());
      }
    });

    return options;
  }

  static get observedAttributes(): string[] {
    return ['label', 'disabled'];
  }
}

// 注册组件
customElements.define('ew-select-option-group', EwSelectOptionGroup); 
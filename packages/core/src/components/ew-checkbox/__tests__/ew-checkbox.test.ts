import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { EwCheckbox } from '../index';

describe('EwCheckbox', () => {
  let checkbox: EwCheckbox;

  beforeEach(() => {
    checkbox = document.createElement('ew-checkbox') as EwCheckbox;
    document.body.appendChild(checkbox);
  });

  afterEach(() => {
    if (checkbox && checkbox.parentNode) {
      checkbox.parentNode.removeChild(checkbox);
    }
  });

  it('应该正确渲染checkbox组件', async () => {
    // 等待组件初始化
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(checkbox.shadowRoot).toBeTruthy();
    const checkboxElement = checkbox.shadowRoot?.querySelector('label');
    expect(checkboxElement).toBeTruthy();
    expect(checkboxElement?.classList.contains('ew-checkbox')).toBe(true);
  });

  it('应该应用正确的标签', async () => {
    checkbox.setAttribute('label', '测试选项');
    
    // 等待属性变化处理
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const labelElement = checkbox.shadowRoot?.querySelector('.ew-checkbox__label');
    expect(labelElement?.textContent).toBe('测试选项');
  });

  it('应该在选中状态下正确渲染', async () => {
    checkbox.setAttribute('checked', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const inputElement = checkbox.shadowRoot?.querySelector('input') as HTMLInputElement;
    expect(inputElement?.checked).toBe(true);
  });

  it('应该在禁用状态下正确渲染', async () => {
    checkbox.setAttribute('disabled', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const checkboxElement = checkbox.shadowRoot?.querySelector('label');
    expect(checkboxElement?.classList.contains('ew-checkbox--disabled')).toBe(true);
    
    const inputElement = checkbox.shadowRoot?.querySelector('input') as HTMLInputElement;
    expect(inputElement?.disabled).toBe(true);
  });

  it('应该处理change事件', async () => {
    let changeEvent = false;
    checkbox.addEventListener('change', () => {
      changeEvent = true;
    });
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const inputElement = checkbox.shadowRoot?.querySelector('input') as HTMLInputElement;
    inputElement.checked = true;
    inputElement.dispatchEvent(new Event('change'));
    
    expect(changeEvent).toBe(true);
  });

  it('应该在禁用状态下阻止change事件', async () => {
    checkbox.setAttribute('disabled', '');
    let changeEvent = false;
    checkbox.addEventListener('change', () => {
      changeEvent = true;
    });
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const inputElement = checkbox.shadowRoot?.querySelector('input') as HTMLInputElement;
    inputElement.checked = true;
    inputElement.dispatchEvent(new Event('change'));
    
    expect(changeEvent).toBe(false);
  });

  it('应该应用正确的尺寸样式', async () => {
    checkbox.setAttribute('size', 'large');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const checkboxElement = checkbox.shadowRoot?.querySelector('label');
    expect(checkboxElement?.classList.contains('ew-checkbox--large')).toBe(true);
  });

  it('应该应用边框样式', async () => {
    checkbox.setAttribute('border', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const checkboxElement = checkbox.shadowRoot?.querySelector('label');
    expect(checkboxElement?.classList.contains('ew-checkbox--border')).toBe(true);
  });

  it('应该应用按钮样式', async () => {
    checkbox.setAttribute('button', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const checkboxElement = checkbox.shadowRoot?.querySelector('label');
    expect(checkboxElement?.classList.contains('ew-checkbox--button')).toBe(true);
  });

  it('应该处理indeterminate状态', async () => {
    checkbox.setAttribute('indeterminate', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const inputElement = checkbox.shadowRoot?.querySelector('input') as HTMLInputElement;
    expect(inputElement?.indeterminate).toBe(true);
  });

  it('应该正确设置和获取值', async () => {
    checkbox.setAttribute('value', 'test-value');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(checkbox.getValue()).toBe('test-value');
  });

  it('应该正确切换状态', async () => {
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const initialChecked = checkbox.getChecked();
    checkbox.toggle();
    
    expect(checkbox.getChecked()).toBe(!initialChecked);
  });
}); 
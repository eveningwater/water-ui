import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { EwCheckboxButton } from '../index';

describe('EwCheckboxButton', () => {
  let checkboxButton: EwCheckboxButton;

  beforeEach(() => {
    checkboxButton = document.createElement('ew-checkbox-button') as EwCheckboxButton;
    document.body.appendChild(checkboxButton);
  });

  afterEach(() => {
    if (checkboxButton && checkboxButton.parentNode) {
      checkboxButton.parentNode.removeChild(checkboxButton);
    }
  });

  it('应该正确渲染checkbox-button组件', async () => {
    // 等待组件初始化
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(checkboxButton.shadowRoot).toBeTruthy();
    const checkboxElement = checkboxButton.shadowRoot?.querySelector('label');
    expect(checkboxElement).toBeTruthy();
    expect(checkboxElement?.classList.contains('ew-checkbox')).toBe(true);
    expect(checkboxElement?.classList.contains('ew-checkbox--button')).toBe(true);
  });

  it('应该应用正确的标签', async () => {
    checkboxButton.setAttribute('label', '测试按钮');
    
    // 等待属性变化处理
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const labelElement = checkboxButton.shadowRoot?.querySelector('.ew-checkbox__label');
    expect(labelElement?.textContent).toBe('测试按钮');
  });

  it('应该在选中状态下正确渲染', async () => {
    checkboxButton.setAttribute('checked', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const inputElement = checkboxButton.shadowRoot?.querySelector('input') as HTMLInputElement;
    expect(inputElement?.checked).toBe(true);
  });

  it('应该在禁用状态下正确渲染', async () => {
    checkboxButton.setAttribute('disabled', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const checkboxElement = checkboxButton.shadowRoot?.querySelector('label');
    expect(checkboxElement?.classList.contains('ew-checkbox--disabled')).toBe(true);
    
    const inputElement = checkboxButton.shadowRoot?.querySelector('input') as HTMLInputElement;
    expect(inputElement?.disabled).toBe(true);
  });

  it('应该处理change事件', async () => {
    let changeEvent = false;
    checkboxButton.addEventListener('change', () => {
      changeEvent = true;
    });
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const inputElement = checkboxButton.shadowRoot?.querySelector('input') as HTMLInputElement;
    inputElement.checked = true;
    inputElement.dispatchEvent(new Event('change'));
    
    expect(changeEvent).toBe(true);
  });

  it('应该在禁用状态下阻止change事件', async () => {
    checkboxButton.setAttribute('disabled', '');
    let changeEvent = false;
    checkboxButton.addEventListener('change', () => {
      changeEvent = true;
    });
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const inputElement = checkboxButton.shadowRoot?.querySelector('input') as HTMLInputElement;
    inputElement.checked = true;
    inputElement.dispatchEvent(new Event('change'));
    
    expect(changeEvent).toBe(false);
  });

  it('应该应用正确的尺寸样式', async () => {
    checkboxButton.setAttribute('size', 'large');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const checkboxElement = checkboxButton.shadowRoot?.querySelector('label');
    expect(checkboxElement?.classList.contains('ew-checkbox--large')).toBe(true);
  });

  it('应该正确设置和获取值', async () => {
    checkboxButton.setAttribute('value', 'button-value');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(checkboxButton.getValue()).toBe('button-value');
  });

  it('应该正确切换状态', async () => {
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const initialChecked = checkboxButton.getChecked();
    checkboxButton.toggle();
    
    expect(checkboxButton.getChecked()).toBe(!initialChecked);
  });
}); 
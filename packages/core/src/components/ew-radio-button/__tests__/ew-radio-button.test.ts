import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { EwRadioButton } from '../index';

describe('EwRadioButton', () => {
  let radioButton: EwRadioButton;

  beforeEach(() => {
    radioButton = document.createElement('ew-radio-button') as EwRadioButton;
    document.body.appendChild(radioButton);
  });

  afterEach(() => {
    if (radioButton && radioButton.parentNode) {
      radioButton.parentNode.removeChild(radioButton);
    }
  });

  it('应该正确渲染radio-button组件', async () => {
    // 等待组件初始化
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(radioButton.shadowRoot).toBeTruthy();
    const radioElement = radioButton.shadowRoot?.querySelector('label');
    expect(radioElement).toBeTruthy();
    expect(radioElement?.classList.contains('ew-radio-button')).toBe(true);
  });

  it('应该应用正确的标签', async () => {
    radioButton.setAttribute('label', '测试按钮');
    
    // 等待属性变化处理
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const labelElement = radioButton.shadowRoot?.querySelector('.ew-radio-button__inner');
    expect(labelElement?.textContent).toBe('测试按钮');
  });

  it('应该在选中状态下正确渲染', async () => {
    radioButton.setAttribute('checked', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const inputElement = radioButton.shadowRoot?.querySelector('input') as HTMLInputElement;
    expect(inputElement?.checked).toBe(true);
  });

  it('应该在禁用状态下正确渲染', async () => {
    radioButton.setAttribute('disabled', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const radioElement = radioButton.shadowRoot?.querySelector('label');
    expect(radioElement?.classList.contains('ew-radio-button--disabled')).toBe(true);
    
    const inputElement = radioButton.shadowRoot?.querySelector('input') as HTMLInputElement;
    expect(inputElement?.disabled).toBe(true);
  });

  it('应该处理change事件', async () => {
    let changeEvent = false;
    radioButton.addEventListener('change', () => {
      changeEvent = true;
    });
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const inputElement = radioButton.shadowRoot?.querySelector('input') as HTMLInputElement;
    inputElement.checked = true;
    inputElement.dispatchEvent(new Event('change'));
    
    expect(changeEvent).toBe(true);
  });

  it('应该在禁用状态下阻止change事件', async () => {
    radioButton.setAttribute('disabled', '');
    let changeEvent = false;
    radioButton.addEventListener('change', () => {
      changeEvent = true;
    });
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const inputElement = radioButton.shadowRoot?.querySelector('input') as HTMLInputElement;
    inputElement.checked = true;
    inputElement.dispatchEvent(new Event('change'));
    
    expect(changeEvent).toBe(false);
  });

  it('应该应用正确的尺寸样式', async () => {
    radioButton.setAttribute('size', 'large');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const radioElement = radioButton.shadowRoot?.querySelector('label');
    expect(radioElement?.classList.contains('ew-radio-button--large')).toBe(true);
  });

  it('应该正确设置和获取值', async () => {
    radioButton.setAttribute('value', 'button-value');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(radioButton.getValue()).toBe('button-value');
  });
}); 
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { EwRadio } from '../index';

describe('EwRadio', () => {
  let radio: EwRadio;

  beforeEach(() => {
    radio = document.createElement('ew-radio') as EwRadio;
    document.body.appendChild(radio);
  });

  afterEach(() => {
    if (radio && radio.parentNode) {
      radio.parentNode.removeChild(radio);
    }
  });

  it('应该正确渲染radio组件', async () => {
    // 等待组件初始化
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(radio.shadowRoot).toBeTruthy();
    const radioElement = radio.shadowRoot?.querySelector('label');
    expect(radioElement).toBeTruthy();
    expect(radioElement?.classList.contains('ew-radio')).toBe(true);
  });

  it('应该应用正确的标签', async () => {
    radio.setAttribute('label', '测试选项');
    
    // 等待属性变化处理
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const labelElement = radio.shadowRoot?.querySelector('.ew-radio__label');
    expect(labelElement?.textContent).toBe('测试选项');
  });

  it('应该在选中状态下正确渲染', async () => {
    radio.setAttribute('checked', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const inputElement = radio.shadowRoot?.querySelector('input') as HTMLInputElement;
    expect(inputElement?.checked).toBe(true);
  });

  it('应该在禁用状态下正确渲染', async () => {
    radio.setAttribute('disabled', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const radioElement = radio.shadowRoot?.querySelector('label');
    expect(radioElement?.classList.contains('ew-radio--disabled')).toBe(true);
    
    const inputElement = radio.shadowRoot?.querySelector('input') as HTMLInputElement;
    expect(inputElement?.disabled).toBe(true);
  });

  it('应该处理change事件', async () => {
    let changeEvent = false;
    radio.addEventListener('change', () => {
      changeEvent = true;
    });
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const inputElement = radio.shadowRoot?.querySelector('input') as HTMLInputElement;
    inputElement.checked = true;
    inputElement.dispatchEvent(new Event('change'));
    
    expect(changeEvent).toBe(true);
  });

  it('应该在禁用状态下阻止change事件', async () => {
    radio.setAttribute('disabled', '');
    let changeEvent = false;
    radio.addEventListener('change', () => {
      changeEvent = true;
    });
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const inputElement = radio.shadowRoot?.querySelector('input') as HTMLInputElement;
    inputElement.checked = true;
    inputElement.dispatchEvent(new Event('change'));
    
    expect(changeEvent).toBe(false);
  });

  it('应该应用正确的尺寸样式', async () => {
    radio.setAttribute('size', 'large');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const radioElement = radio.shadowRoot?.querySelector('label');
    expect(radioElement?.classList.contains('ew-radio--large')).toBe(true);
  });

  it('应该应用边框样式', async () => {
    radio.setAttribute('border', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const radioElement = radio.shadowRoot?.querySelector('label');
    expect(radioElement?.classList.contains('ew-radio--border')).toBe(true);
  });

  it('应该应用按钮样式', async () => {
    radio.setAttribute('button', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const radioElement = radio.shadowRoot?.querySelector('label');
    expect(radioElement?.classList.contains('ew-radio--button')).toBe(true);
  });
}); 
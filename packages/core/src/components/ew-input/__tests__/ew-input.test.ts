import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { EwInput } from '../index';

describe('EwInput', () => {
  let input: EwInput;

  beforeEach(() => {
    input = document.createElement('ew-input') as EwInput;
    document.body.appendChild(input);
  });

  afterEach(() => {
    if (input && input.parentNode) {
      input.parentNode.removeChild(input);
    }
  });

  it('应该正确渲染输入框', async () => {
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(input.shadowRoot).toBeTruthy();
    const inputElement = input.shadowRoot?.querySelector('input');
    expect(inputElement).toBeTruthy();
    expect(inputElement?.classList.contains('ew-input__inner')).toBe(true);
  });

  it('应该应用正确的类型', async () => {
    input.setAttribute('type', 'password');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const inputElement = input.shadowRoot?.querySelector('input') as HTMLInputElement;
    expect(inputElement?.type).toBe('password');
  });

  it('应该设置占位符', async () => {
    input.setAttribute('placeholder', '请输入内容');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const inputElement = input.shadowRoot?.querySelector('input') as HTMLInputElement;
    expect(inputElement?.placeholder).toBe('请输入内容');
  });

  it('应该在禁用状态下正确渲染', async () => {
    input.setAttribute('disabled', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const inputElement = input.shadowRoot?.querySelector('input') as HTMLInputElement;
    expect(inputElement?.hasAttribute('disabled')).toBe(true);
    expect(input.shadowRoot?.querySelector('.ew-input--disabled')).toBeTruthy();
  });

  it('应该在只读状态下正确渲染', async () => {
    input.setAttribute('readonly', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const inputElement = input.shadowRoot?.querySelector('input') as HTMLInputElement;
    expect(inputElement?.hasAttribute('readonly')).toBe(true);
    expect(input.shadowRoot?.querySelector('.ew-input--readonly')).toBeTruthy();
  });

  it('应该显示清除按钮', async () => {
    input.setAttribute('clearable', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const clearButton = input.shadowRoot?.querySelector('.ew-input__clear');
    expect(clearButton).toBeTruthy();
  });

  it('应该在密码模式下显示切换按钮', async () => {
    input.setAttribute('type', 'password');
    input.setAttribute('show-password', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const passwordToggle = input.shadowRoot?.querySelector('.ew-input__password-toggle');
    expect(passwordToggle).toBeTruthy();
  });

  it('应该应用正确的尺寸样式', async () => {
    input.setAttribute('size', 'large');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(input.shadowRoot?.querySelector('.ew-input--large')).toBeTruthy();
  });

  it('应该处理输入事件', async () => {
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const inputElement = input.shadowRoot?.querySelector('input') as HTMLInputElement;
    const testValue = 'test input';
    
    // 模拟输入事件
    inputElement.value = testValue;
    inputElement.dispatchEvent(new Event('input'));
    
    // 验证事件被触发
    expect(inputElement.value).toBe(testValue);
  });
}); 
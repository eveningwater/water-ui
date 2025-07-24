import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { EwRadioGroup } from '../index';

describe('EwRadioGroup', () => {
  let radioGroup: EwRadioGroup;

  beforeEach(() => {
    radioGroup = document.createElement('ew-radio-group') as EwRadioGroup;
    document.body.appendChild(radioGroup);
  });

  afterEach(() => {
    if (radioGroup && radioGroup.parentNode) {
      radioGroup.parentNode.removeChild(radioGroup);
    }
  });

  it('应该正确渲染radio-group组件', async () => {
    // 等待组件初始化
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(radioGroup.shadowRoot).toBeTruthy();
    const containerElement = radioGroup.shadowRoot?.querySelector('.ew-radio-group');
    expect(containerElement).toBeTruthy();
  });

  it('应该应用正确的modelValue', async () => {
    radioGroup.setAttribute('model-value', 'option1');
    
    // 等待属性变化处理
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(radioGroup.getValue()).toBe('option1');
  });

  it('应该处理子radio的变化', async () => {
    await new Promise(resolve => setTimeout(resolve, 10));
    
    // 创建子radio元素
    const radio1 = document.createElement('ew-radio');
    radio1.setAttribute('value', 'option1');
    radio1.setAttribute('label', '选项1');
    
    const radio2 = document.createElement('ew-radio');
    radio2.setAttribute('value', 'option2');
    radio2.setAttribute('label', '选项2');
    
    radioGroup.appendChild(radio1);
    radioGroup.appendChild(radio2);
    
    // 等待子元素初始化
    await new Promise(resolve => setTimeout(resolve, 10));
    
    // 模拟选择第二个选项
    let changeEvent = false;
    radioGroup.addEventListener('change', () => {
      changeEvent = true;
    });
    
    (radio2 as any).setChecked(true);
    (radio2 as any).handleChange({ target: { checked: true } });
    
    expect(changeEvent).toBe(true);
    expect(radioGroup.getValue()).toBe('option2');
  });

  it('应该在禁用状态下正确渲染', async () => {
    radioGroup.setAttribute('disabled', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const containerElement = radioGroup.shadowRoot?.querySelector('.ew-radio-group');
    expect(containerElement?.classList.contains('ew-radio-group--disabled')).toBe(true);
  });

  it('应该应用正确的尺寸样式', async () => {
    radioGroup.setAttribute('size', 'large');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const containerElement = radioGroup.shadowRoot?.querySelector('.ew-radio-group');
    expect(containerElement?.classList.contains('ew-radio-group--large')).toBe(true);
  });

  it('应该应用按钮样式', async () => {
    radioGroup.setAttribute('button', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const containerElement = radioGroup.shadowRoot?.querySelector('.ew-radio-group');
    expect(containerElement?.classList.contains('ew-radio-group--button')).toBe(true);
  });

  it('应该应用边框样式', async () => {
    radioGroup.setAttribute('border', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const containerElement = radioGroup.shadowRoot?.querySelector('.ew-radio-group');
    expect(containerElement?.classList.contains('ew-radio-group--border')).toBe(true);
  });

  it('应该正确设置和获取值', async () => {
    radioGroup.setAttribute('model-value', 'test-value');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(radioGroup.getValue()).toBe('test-value');
  });
}); 
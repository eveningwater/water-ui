import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { EwCheckboxGroup } from '../index';

describe('EwCheckboxGroup', () => {
  let checkboxGroup: EwCheckboxGroup;

  beforeEach(() => {
    checkboxGroup = document.createElement('ew-checkbox-group') as EwCheckboxGroup;
    document.body.appendChild(checkboxGroup);
  });

  afterEach(() => {
    if (checkboxGroup && checkboxGroup.parentNode) {
      checkboxGroup.parentNode.removeChild(checkboxGroup);
    }
  });

  it('应该正确渲染checkbox-group组件', async () => {
    // 等待组件初始化
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(checkboxGroup.shadowRoot).toBeTruthy();
    const containerElement = checkboxGroup.shadowRoot?.querySelector('.ew-checkbox-group');
    expect(containerElement).toBeTruthy();
  });

  it('应该应用正确的modelValue', async () => {
    checkboxGroup.setAttribute('model-value', '["option1"]');
    
    // 等待属性变化处理
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(checkboxGroup.getValue()).toEqual(['option1']);
  });

  it('应该处理子checkbox的变化', async () => {
    await new Promise(resolve => setTimeout(resolve, 10));
    
    // 创建子checkbox元素
    const checkbox1 = document.createElement('ew-checkbox');
    checkbox1.setAttribute('value', 'option1');
    checkbox1.setAttribute('label', '选项1');
    
    const checkbox2 = document.createElement('ew-checkbox');
    checkbox2.setAttribute('value', 'option2');
    checkbox2.setAttribute('label', '选项2');
    
    checkboxGroup.appendChild(checkbox1);
    checkboxGroup.appendChild(checkbox2);
    
    // 等待子元素初始化
    await new Promise(resolve => setTimeout(resolve, 10));
    
    // 模拟选择第二个选项
    let changeEvent = false;
    checkboxGroup.addEventListener('change', () => {
      changeEvent = true;
    });
    
    (checkbox2 as any).setChecked(true);
    (checkbox2 as any).handleChange({ target: { checked: true } });
    
    expect(changeEvent).toBe(true);
    expect(checkboxGroup.getValue()).toContain('option2');
  });

  it('应该在禁用状态下正确渲染', async () => {
    checkboxGroup.setAttribute('disabled', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const containerElement = checkboxGroup.shadowRoot?.querySelector('.ew-checkbox-group');
    expect(containerElement?.classList.contains('ew-checkbox-group--disabled')).toBe(true);
  });

  it('应该应用正确的尺寸样式', async () => {
    checkboxGroup.setAttribute('size', 'large');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const containerElement = checkboxGroup.shadowRoot?.querySelector('.ew-checkbox-group');
    expect(containerElement?.classList.contains('ew-checkbox-group--large')).toBe(true);
  });

  it('应该应用按钮样式', async () => {
    checkboxGroup.setAttribute('button', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const containerElement = checkboxGroup.shadowRoot?.querySelector('.ew-checkbox-group');
    expect(containerElement?.classList.contains('ew-checkbox-group--button')).toBe(true);
  });

  it('应该应用边框样式', async () => {
    checkboxGroup.setAttribute('border', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const containerElement = checkboxGroup.shadowRoot?.querySelector('.ew-checkbox-group');
    expect(containerElement?.classList.contains('ew-checkbox-group--border')).toBe(true);
  });

  it('应该正确设置和获取值', async () => {
    checkboxGroup.setAttribute('model-value', '["test-value"]');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(checkboxGroup.getValue()).toEqual(['test-value']);
  });
}); 
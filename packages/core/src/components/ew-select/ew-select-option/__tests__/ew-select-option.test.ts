import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { EwSelectOption } from '../index';

describe('EwSelectOption', () => {
  let option: EwSelectOption;

  beforeEach(() => {
    option = document.createElement('ew-select-option') as EwSelectOption;
    document.body.appendChild(option);
  });

  afterEach(() => {
    if (option && option.parentNode) {
      option.parentNode.removeChild(option);
    }
  });

  it('应该正确渲染选项组件', async () => {
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(option.shadowRoot).toBeTruthy();
    expect(option.style.display).toBe('none');
  });

  it('应该正确获取选项值', async () => {
    option.setAttribute('value', 'test-value');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(option.getValue()).toBe('test-value');
  });

  it('应该正确获取选项标签', async () => {
    option.setAttribute('label', '测试选项');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(option.getLabel()).toBe('测试选项');
  });

  it('应该从文本内容获取标签', async () => {
    option.textContent = '选项文本';
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(option.getLabel()).toBe('选项文本');
  });

  it('应该处理禁用状态', async () => {
    option.setAttribute('disabled', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(option.isDisabled()).toBe(true);
  });

  it('应该处理创建状态', async () => {
    option.setAttribute('created', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(option.isCreated()).toBe(true);
  });

  it('应该返回完整的选项数据', async () => {
    option.setAttribute('value', 'test-value');
    option.setAttribute('label', '测试选项');
    option.setAttribute('disabled', '');
    option.setAttribute('created', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const optionData = option.getOptionData();
    expect(optionData).toEqual({
      value: 'test-value',
      label: '测试选项',
      disabled: true,
      created: true
    });
  });

  it('应该处理属性变化', async () => {
    await new Promise(resolve => setTimeout(resolve, 10));
    
    option.setAttribute('value', 'new-value');
    option.setAttribute('label', '新标签');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(option.getValue()).toBe('new-value');
    expect(option.getLabel()).toBe('新标签');
  });
}); 
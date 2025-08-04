import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { EwSelectOptionGroup } from '../index';

describe('EwSelectOptionGroup', () => {
  let group: EwSelectOptionGroup;

  beforeEach(() => {
    group = document.createElement('ew-select-option-group') as EwSelectOptionGroup;
    document.body.appendChild(group);
  });

  afterEach(() => {
    if (group && group.parentNode) {
      group.parentNode.removeChild(group);
    }
  });

  it('应该正确渲染选项组组件', async () => {
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(group.shadowRoot).toBeTruthy();
    expect(group.style.display).toBe('none');
  });

  it('应该正确获取组标签', async () => {
    group.setAttribute('label', '测试分组');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(group.getLabel()).toBe('测试分组');
  });

  it('应该处理禁用状态', async () => {
    group.setAttribute('disabled', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(group.isDisabled()).toBe(true);
  });

  it('应该返回完整的组数据', async () => {
    group.setAttribute('label', '测试分组');
    group.setAttribute('disabled', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const groupData = group.getGroupData();
    expect(groupData).toEqual({
      label: '测试分组',
      disabled: true,
      options: []
    });
  });

  it('应该处理子选项', async () => {
    // 创建子选项
    const option1 = document.createElement('ew-select-option');
    option1.setAttribute('value', 'option1');
    option1.setAttribute('label', '选项1');
    
    const option2 = document.createElement('ew-select-option');
    option2.setAttribute('value', 'option2');
    option2.setAttribute('label', '选项2');
    
    group.appendChild(option1);
    group.appendChild(option2);
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const groupData = group.getGroupData();
    expect(groupData.options).toHaveLength(2);
    expect(groupData.options[0]).toEqual({
      value: 'option1',
      label: '选项1',
      disabled: false,
      created: false
    });
    expect(groupData.options[1]).toEqual({
      value: 'option2',
      label: '选项2',
      disabled: false,
      created: false
    });
  });

  it('应该处理属性变化', async () => {
    await new Promise(resolve => setTimeout(resolve, 10));
    
    group.setAttribute('label', '新分组');
    group.setAttribute('disabled', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(group.getLabel()).toBe('新分组');
    expect(group.isDisabled()).toBe(true);
  });

  it('应该忽略非选项子元素', async () => {
    // 添加非选项子元素
    const div = document.createElement('div');
    div.textContent = '非选项元素';
    group.appendChild(div);
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const groupData = group.getGroupData();
    expect(groupData.options).toHaveLength(0);
  });
}); 
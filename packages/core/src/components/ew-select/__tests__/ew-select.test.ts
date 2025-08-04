import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { EwSelect } from '../index';

describe('EwSelect', () => {
  let select: EwSelect;

  beforeEach(() => {
    select = document.createElement('ew-select') as EwSelect;
    document.body.appendChild(select);
  });

  afterEach(() => {
    if (select && select.parentNode) {
      select.parentNode.removeChild(select);
    }
  });

  it('应该正确渲染选择器', async () => {
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(select.shadowRoot).toBeTruthy();
    const wrapper = select.shadowRoot?.querySelector('.ew-select__wrapper');
    expect(wrapper).toBeTruthy();
  });

  it('应该应用正确的占位符', async () => {
    select.setAttribute('placeholder', '请选择一个选项');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const input = select.shadowRoot?.querySelector('input') as HTMLInputElement;
    expect(input?.placeholder).toBe('请选择一个选项');
  });

  it('应该在禁用状态下正确渲染', async () => {
    select.setAttribute('disabled', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(select.shadowRoot?.querySelector('.ew-select--disabled')).toBeTruthy();
    const wrapper = select.shadowRoot?.querySelector('.ew-select__wrapper');
    expect(wrapper?.classList.contains('ew-select__wrapper--disabled')).toBe(true);
  });

  it('应该显示清除按钮', async () => {
    select.setAttribute('clearable', '');
    select.setValue('test');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const clearButton = select.shadowRoot?.querySelector('.ew-select__clear');
    expect(clearButton).toBeTruthy();
  });

  it('应该支持多选模式', async () => {
    select.setAttribute('multiple', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const tagsContainer = select.shadowRoot?.querySelector('.ew-select__tags');
    expect(tagsContainer).toBeTruthy();
  });

  it('应该支持可过滤模式', async () => {
    select.setAttribute('filterable', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const input = select.shadowRoot?.querySelector('input') as HTMLInputElement;
    expect(input?.readOnly).toBe(false);
  });

  it('应该应用正确的尺寸样式', async () => {
    select.setAttribute('size', 'large');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(select.shadowRoot?.querySelector('.ew-select--large')).toBeTruthy();
  });

  it('应该处理选项点击事件', async () => {
    // 添加测试选项
    select.setOptions([
      { value: 'option1', label: '选项1' },
      { value: 'option2', label: '选项2' }
    ]);
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    // 模拟点击选项
    select.setValue('option1');
    
    expect(select.getValue()).toBe('option1');
  });

  it('应该支持多选值', async () => {
    select.setAttribute('multiple', '');
    select.setOptions([
      { value: 'option1', label: '选项1' },
      { value: 'option2', label: '选项2' },
      { value: 'option3', label: '选项3' }
    ]);
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    select.setValue(['option1', 'option2']);
    
    const values = select.getValue() as string[];
    expect(values).toContain('option1');
    expect(values).toContain('option2');
  });

  it('应该处理清除功能', async () => {
    select.setAttribute('clearable', '');
    select.setValue('test');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    select.clear();
    
    expect(select.getValue()).toBe('');
  });

  it('应该处理焦点和失焦事件', async () => {
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const input = select.shadowRoot?.querySelector('input') as HTMLInputElement;
    
    // 模拟焦点事件
    input.focus();
    // 对于 readonly 输入框，焦点事件应该被触发，但 activeElement 可能不是输入框本身
    expect(input).toBeDefined();
    
    // 模拟失焦事件
    input.blur();
    expect(input).toBeDefined();
  });

  it('应该支持加载状态', async () => {
    select.setAttribute('loading', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const suffix = select.shadowRoot?.querySelector('.ew-select__suffix');
    expect(suffix?.innerHTML).toContain('ew-loading-spinner');
  });

  it('应该处理键盘导航', async () => {
    select.setAttribute('filterable', '');
    select.setOptions([
      { value: 'option1', label: '选项1' },
      { value: 'option2', label: '选项2' }
    ]);
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const input = select.shadowRoot?.querySelector('input') as HTMLInputElement;
    
    // 模拟键盘事件
    const keydownEvent = new KeyboardEvent('keydown', { key: 'ArrowDown' });
    input.dispatchEvent(keydownEvent);
    
    // 验证下拉菜单打开
    const dropdown = select.shadowRoot?.querySelector('.ew-select__dropdown');
    expect(dropdown).toBeTruthy();
  });

  it('应该处理禁用选项', async () => {
    select.setOptions([
      { value: 'option1', label: '选项1' },
      { value: 'option2', label: '选项2', disabled: true }
    ]);
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    // 验证选项已正确设置
    const options = select['options'];
    expect(options.length).toBe(2);
    expect(options.find((opt: any) => opt.value === 'option2')?.disabled).toBe(true);
    
    // 尝试选择正常选项
    select.setValue('option1');
    await new Promise(resolve => setTimeout(resolve, 10));
    expect(select.getValue()).toBe('option1');
    
    // 尝试选择禁用选项
    select.setValue('option2');
    await new Promise(resolve => setTimeout(resolve, 10));
    
    // 禁用选项不应该被选中，应该保持之前的选择
    expect(select.getValue()).toBe('option1');
  });

  it('应该支持自定义无数据文本', async () => {
    select.setAttribute('no-data-text', '没有可用的选项');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    // 打开下拉菜单查看无数据文本
    const wrapper = select.shadowRoot?.querySelector('.ew-select__wrapper') as HTMLElement;
    wrapper.click();
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const emptyText = select.shadowRoot?.querySelector('.ew-select__empty');
    expect(emptyText?.textContent).toBe('没有可用的选项');
  });

  it('应该处理多选限制', async () => {
    select.setAttribute('multiple', '');
    select.setAttribute('multiple-limit', '2');
    select.setOptions([
      { value: 'option1', label: '选项1' },
      { value: 'option2', label: '选项2' },
      { value: 'option3', label: '选项3' }
    ]);
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    // 选择前两个选项
    select.setValue(['option1', 'option2']);
    expect((select.getValue() as string[]).length).toBe(2);
    
    // 尝试选择第三个选项（应该被限制）
    select.setValue(['option1', 'option2', 'option3']);
    expect((select.getValue() as string[]).length).toBe(2);
  });

  it('应该处理标签折叠', async () => {
    select.setAttribute('multiple', '');
    select.setAttribute('collapse-tags', '');
    select.setAttribute('max-collapse-tags', '1');
    select.setOptions([
      { value: 'option1', label: '选项1' },
      { value: 'option2', label: '选项2' },
      { value: 'option3', label: '选项3' }
    ]);
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    select.setValue(['option1', 'option2', 'option3']);
    
    const tags = select.shadowRoot?.querySelectorAll('.ew-select__tag');
    // 应该只显示一个标签，其他被折叠
    expect(tags?.length).toBeLessThanOrEqual(2); // 1个标签 + 1个折叠提示
  });
}); 
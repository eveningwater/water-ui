import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { EwTable } from '../index';

describe('EwTable', () => {
  let table: EwTable;

  beforeEach(() => {
    table = document.createElement('ew-table') as EwTable;
    document.body.appendChild(table);
  });

  afterEach(() => {
    if (table && table.parentNode) {
      table.parentNode.removeChild(table);
    }
  });

  it('应该正确渲染表格', async () => {
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(table.shadowRoot).toBeTruthy();
    const tableElement = table.shadowRoot?.querySelector('table');
    expect(tableElement).toBeTruthy();
    expect(tableElement?.classList.contains('ew-table')).toBe(true);
  });

  it('应该包含插槽元素', async () => {
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const slot = table.shadowRoot?.querySelector('slot');
    expect(slot).toBeTruthy();
  });

  it('应该应用边框样式', async () => {
    table.setAttribute('border', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const tableElement = table.shadowRoot?.querySelector('table');
    expect(tableElement?.classList.contains('ew-table--border')).toBe(true);
  });

  it('应该应用尺寸样式', async () => {
    table.setAttribute('size', 'small');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const tableElement = table.shadowRoot?.querySelector('table');
    expect(tableElement?.classList.contains('ew-table--small')).toBe(true);
  });

  it('应该应用固定布局样式', async () => {
    table.setAttribute('fit', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const tableElement = table.shadowRoot?.querySelector('table');
    expect(tableElement?.classList.contains('ew-table--fit')).toBe(true);
  });

  it('应该响应属性变化', async () => {
    await new Promise(resolve => setTimeout(resolve, 10));
    
    // 初始状态
    let tableElement = table.shadowRoot?.querySelector('table');
    expect(tableElement?.classList.contains('ew-table--border')).toBe(false);
    
    // 添加边框属性
    table.setAttribute('border', '');
    await new Promise(resolve => setTimeout(resolve, 10));
    
    tableElement = table.shadowRoot?.querySelector('table');
    expect(tableElement?.classList.contains('ew-table--border')).toBe(true);
  });

  it('应该支持多个属性组合', async () => {
    table.setAttribute('border', '');
    table.setAttribute('size', 'large');
    table.setAttribute('fit', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const tableElement = table.shadowRoot?.querySelector('table');
    expect(tableElement?.classList.contains('ew-table--border')).toBe(true);
    expect(tableElement?.classList.contains('ew-table--large')).toBe(true);
    expect(tableElement?.classList.contains('ew-table--fit')).toBe(true);
  });
}); 
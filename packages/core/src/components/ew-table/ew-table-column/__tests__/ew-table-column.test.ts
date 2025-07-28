import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { EwTableColumn } from '../index';

describe('EwTableColumn', () => {
  let tableColumn: EwTableColumn;

  beforeEach(() => {
    tableColumn = document.createElement('ew-table-column') as EwTableColumn;
    document.body.appendChild(tableColumn);
  });

  afterEach(() => {
    if (tableColumn && tableColumn.parentNode) {
      tableColumn.parentNode.removeChild(tableColumn);
    }
  });

  describe('基础功能', () => {
    it('应该正确创建表格列组件', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(tableColumn).toBeInstanceOf(EwTableColumn);
    });

    it('应该支持属性设置', async () => {
      tableColumn.setAttribute('label', '测试列');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(tableColumn.getAttribute('label')).toBe('测试列');
    });
  });

  describe('属性设置', () => {
    it('应该支持 label 属性', async () => {
      tableColumn.setAttribute('label', '测试列');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(tableColumn.getAttribute('label')).toBe('测试列');
    });

    it('应该支持 prop 属性', async () => {
      tableColumn.setAttribute('prop', 'name');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(tableColumn.getAttribute('prop')).toBe('name');
    });

    it('应该支持 width 属性', async () => {
      tableColumn.setAttribute('width', '100');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(tableColumn.getAttribute('width')).toBe('100');
    });

    it('应该支持 min-width 属性', async () => {
      tableColumn.setAttribute('min-width', '80');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(tableColumn.getAttribute('min-width')).toBe('80');
    });

    it('应该支持 align 属性', async () => {
      tableColumn.setAttribute('align', 'center');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(tableColumn.getAttribute('align')).toBe('center');
    });
  });

  describe('列类型', () => {
    it('应该支持 selection 类型', async () => {
      tableColumn.setAttribute('type', 'selection');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(tableColumn.getAttribute('type')).toBe('selection');
    });

    it('应该支持 index 类型', async () => {
      tableColumn.setAttribute('type', 'index');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(tableColumn.getAttribute('type')).toBe('index');
    });

    it('应该支持 expand 类型', async () => {
      tableColumn.setAttribute('type', 'expand');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(tableColumn.getAttribute('type')).toBe('expand');
    });
  });

  describe('排序功能', () => {
    it('应该支持 sortable 属性', async () => {
      tableColumn.setAttribute('sortable', '');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(tableColumn.hasAttribute('sortable')).toBe(true);
    });

    it('应该支持 sort-method 属性', async () => {
      tableColumn.setAttribute('sort-method', 'custom');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(tableColumn.getAttribute('sort-method')).toBe('custom');
    });

    it('应该支持 sort-by 属性', async () => {
      tableColumn.setAttribute('sort-by', 'name');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(tableColumn.getAttribute('sort-by')).toBe('name');
    });
  });

  describe('格式化功能', () => {
    it('应该支持 formatter 属性', async () => {
      tableColumn.setAttribute('formatter', 'formatFunction');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(tableColumn.getAttribute('formatter')).toBe('formatFunction');
    });

    it('应该支持 show-overflow-tooltip 属性', async () => {
      tableColumn.setAttribute('show-overflow-tooltip', '');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(tableColumn.hasAttribute('show-overflow-tooltip')).toBe(true);
    });
  });

  describe('属性监听', () => {
    it('应该监听属性变化', async () => {
      tableColumn.setAttribute('label', '原始标签');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(tableColumn.getAttribute('label')).toBe('原始标签');

      tableColumn.setAttribute('label', '更新标签');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(tableColumn.getAttribute('label')).toBe('更新标签');
    });
  });
}); 
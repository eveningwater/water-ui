import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { EwRow } from '../index';

describe('EwRow', () => {
  let row: any;

  beforeEach(async () => {
    row = document.createElement('ew-row');
    document.body.appendChild(row);
    await new Promise(resolve => setTimeout(resolve, 10));
  });

  afterEach(() => {
    if (row && row.parentNode) {
      row.parentNode.removeChild(row);
    }
  });

  describe('基本功能', () => {
    it('应该正确渲染行组件', () => {
      expect(row.shadowRoot).toBeTruthy();
      const rowElement = row.shadowRoot.querySelector('.ew-row');
      expect(rowElement).toBeTruthy();
    });

    it('应该设置默认间距为0', () => {
      const gutter = row.style.getPropertyValue('--ew-row-gutter');
      expect(gutter).toBe('0px');
    });

    it('应该包含插槽', () => {
      const slot = row.shadowRoot.querySelector('slot');
      expect(slot).toBeTruthy();
    });
  });

  describe('间距设置', () => {
    it('应该设置自定义间距', async () => {
      row.setAttribute('gutter', '20');
      await new Promise(resolve => setTimeout(resolve, 10));

      const gutter = row.style.getPropertyValue('--ew-row-gutter');
      expect(gutter).toBe('20px');
    });

    it('应该处理无效间距值', async () => {
      row.setAttribute('gutter', 'invalid');
      await new Promise(resolve => setTimeout(resolve, 10));

      const gutter = row.style.getPropertyValue('--ew-row-gutter');
      expect(gutter).toBe('0px');
    });
  });

  describe('布局类型', () => {
    it('应该设置flex布局', async () => {
      row.setAttribute('type', 'flex');
      await new Promise(resolve => setTimeout(resolve, 10));

      expect(row.classList.contains('ew-row--flex')).toBe(true);
    });
  });

  describe('水平对齐', () => {
    it('应该设置start对齐', async () => {
      row.setAttribute('justify', 'start');
      await new Promise(resolve => setTimeout(resolve, 10));

      expect(row.classList.contains('ew-row--justify-start')).toBe(true);
    });

    it('应该设置end对齐', async () => {
      row.setAttribute('justify', 'end');
      await new Promise(resolve => setTimeout(resolve, 10));

      expect(row.classList.contains('ew-row--justify-end')).toBe(true);
    });

    it('应该设置center对齐', async () => {
      row.setAttribute('justify', 'center');
      await new Promise(resolve => setTimeout(resolve, 10));

      expect(row.classList.contains('ew-row--justify-center')).toBe(true);
    });

    it('应该设置space-around对齐', async () => {
      row.setAttribute('justify', 'space-around');
      await new Promise(resolve => setTimeout(resolve, 10));

      expect(row.classList.contains('ew-row--justify-space-around')).toBe(true);
    });

    it('应该设置space-between对齐', async () => {
      row.setAttribute('justify', 'space-between');
      await new Promise(resolve => setTimeout(resolve, 10));

      expect(row.classList.contains('ew-row--justify-space-between')).toBe(true);
    });
  });

  describe('垂直对齐', () => {
    it('应该设置top对齐', async () => {
      row.setAttribute('align', 'top');
      await new Promise(resolve => setTimeout(resolve, 10));

      expect(row.classList.contains('ew-row--align-top')).toBe(true);
    });

    it('应该设置middle对齐', async () => {
      row.setAttribute('align', 'middle');
      await new Promise(resolve => setTimeout(resolve, 10));

      expect(row.classList.contains('ew-row--align-middle')).toBe(true);
    });

    it('应该设置bottom对齐', async () => {
      row.setAttribute('align', 'bottom');
      await new Promise(resolve => setTimeout(resolve, 10));

      expect(row.classList.contains('ew-row--align-bottom')).toBe(true);
    });
  });

  describe('标签设置', () => {
    it('应该使用默认div标签', () => {
      const rowElement = row.shadowRoot.querySelector('div');
      expect(rowElement).toBeTruthy();
    });

    it('应该使用自定义标签', async () => {
      row.setAttribute('tag', 'section');
      await new Promise(resolve => setTimeout(resolve, 10));

      const rowElement = row.shadowRoot.querySelector('section');
      expect(rowElement).toBeTruthy();
    });
  });

  describe('样式验证', () => {
    it('应该应用正确的CSS类', () => {
      expect(row.classList.contains('ew-row')).toBe(true);
    });

    it('应该支持多个属性组合', async () => {
      row.setAttribute('gutter', '16');
      row.setAttribute('type', 'flex');
      row.setAttribute('justify', 'center');
      row.setAttribute('align', 'middle');
      await new Promise(resolve => setTimeout(resolve, 10));

      const gutter = row.style.getPropertyValue('--ew-row-gutter');
      expect(gutter).toBe('16px');

      expect(row.classList.contains('ew-row--flex')).toBe(true);
      expect(row.classList.contains('ew-row--justify-center')).toBe(true);
      expect(row.classList.contains('ew-row--align-middle')).toBe(true);
    });
  });

  describe('布局功能', () => {
    it('应该支持子组件布局', async () => {
      const col1 = document.createElement('ew-col');
      const col2 = document.createElement('ew-col');

      row.appendChild(col1);
      await new Promise(resolve => setTimeout(resolve, 10));
      row.appendChild(col2);
      await new Promise(resolve => setTimeout(resolve, 10));

      expect(row.children.length).toBe(2);
      expect(row.children[0].tagName).toBe('EW-COL');
      expect(row.children[1].tagName).toBe('EW-COL');
    });
  });
}); 
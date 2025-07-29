import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { EwSplitterPane } from '../index';

describe('EwSplitterPane', () => {
  let pane: EwSplitterPane;

  beforeEach(() => {
    pane = document.createElement('ew-splitter-pane') as EwSplitterPane;
    document.body.appendChild(pane);
  });

  afterEach(() => {
    if (pane && pane.parentNode) {
      document.body.removeChild(pane);
    }
  });

  describe('基础功能', () => {
    it('应该正确渲染分割面板组件', () => {
      expect(pane.shadowRoot).toBeTruthy();
      expect(pane.shadowRoot?.querySelector('.ew-splitter-pane')).toBeTruthy();
    });

    it('应该包含默认插槽', () => {
      const slot = pane.shadowRoot?.querySelector('slot');
      expect(slot).toBeTruthy();
      expect(slot?.getAttribute('name')).toBeFalsy();
    });
  });

  describe('属性设置', () => {
    it('应该支持 size 属性', async () => {
      pane.setAttribute('size', '30%');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(pane.getAttribute('size')).toBe('30%');
    });

    it('应该支持 min 属性', async () => {
      pane.setAttribute('min', '20%');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(pane.getAttribute('min')).toBe('20%');
    });

    it('应该支持 max 属性', async () => {
      pane.setAttribute('max', '80%');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(pane.getAttribute('max')).toBe('80%');
    });

    it('应该支持 resizable 属性', async () => {
      pane.setAttribute('resizable', 'false');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(pane.getAttribute('resizable')).toBe('false');
    });

    it('应该支持 collapsible 属性', async () => {
      pane.setAttribute('collapsible', '');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(pane.hasAttribute('collapsible')).toBe(true);
    });
  });

  describe('样式应用', () => {
    it('应该应用 size 样式', async () => {
      pane.setAttribute('size', '40%');
      await new Promise(resolve => setTimeout(resolve, 10));
      const paneElement = pane.shadowRoot?.querySelector('.ew-splitter-pane') as HTMLElement;
      expect(paneElement?.style.flex).toBe('0 0 40%');
    });

    it('应该应用 min 样式', async () => {
      pane.setAttribute('min', '25%');
      await new Promise(resolve => setTimeout(resolve, 10));
      const paneElement = pane.shadowRoot?.querySelector('.ew-splitter-pane') as HTMLElement;
      expect(paneElement?.style.minWidth).toBe('25%');
    });

    it('应该应用 max 样式', async () => {
      pane.setAttribute('max', '75%');
      await new Promise(resolve => setTimeout(resolve, 10));
      const paneElement = pane.shadowRoot?.querySelector('.ew-splitter-pane') as HTMLElement;
      expect(paneElement?.style.maxWidth).toBe('75%');
    });
  });

  describe('公共方法', () => {
    it('应该支持 setSize 和 getSize 方法', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      pane.setSize('35%');
      expect(pane.getSize()).toBe('35%');
      expect(pane.getAttribute('size')).toBe('35%');
    });

    it('应该支持 setMin 和 getMin 方法', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      pane.setMin('15%');
      expect(pane.getMin()).toBe('15%');
      expect(pane.getAttribute('min')).toBe('15%');
    });

    it('应该支持 setMax 和 getMax 方法', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      pane.setMax('85%');
      expect(pane.getMax()).toBe('85%');
      expect(pane.getAttribute('max')).toBe('85%');
    });

    it('应该支持 setResizable 和 isResizable 方法', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      pane.setResizable(false);
      expect(pane.isResizable()).toBe(false);
      expect(pane.getAttribute('resizable')).toBe('false');
      
      pane.setResizable(true);
      expect(pane.isResizable()).toBe(true);
      expect(pane.hasAttribute('resizable')).toBe(false);
    });

    it('应该支持 setCollapsible 和 isCollapsible 方法', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      pane.setCollapsible(true);
      expect(pane.isCollapsible()).toBe(true);
      expect(pane.hasAttribute('collapsible')).toBe(true);
      
      pane.setCollapsible(false);
      expect(pane.isCollapsible()).toBe(false);
      expect(pane.hasAttribute('collapsible')).toBe(false);
    });
  });

  describe('事件处理', () => {
    it('应该触发 update:size 事件', async () => {
      const mockCallback = vi.fn();
      pane.addEventListener('update:size', mockCallback);
      await new Promise(resolve => setTimeout(resolve, 10));
      pane.setSize('45%');
      expect(mockCallback).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: { size: 0.45 }
        })
      );
    });
  });

  describe('插槽功能', () => {
    it('应该支持默认插槽', () => {
      const slot = pane.shadowRoot?.querySelector('slot');
      expect(slot).toBeTruthy();
      expect(slot?.getAttribute('name')).toBeFalsy();
    });

    it('应该在 collapsible 时添加折叠插槽', async () => {
      pane.setAttribute('collapsible', '');
      await new Promise(resolve => setTimeout(resolve, 10));
      const startSlot = pane.shadowRoot?.querySelector('slot[name="start-collapsible"]');
      const endSlot = pane.shadowRoot?.querySelector('slot[name="end-collapsible"]');
      expect(startSlot).toBeTruthy();
      expect(endSlot).toBeTruthy();
    });
  });

  describe('属性监听', () => {
    it('应该监听属性变化', async () => {
      pane.setAttribute('size', '50%');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(pane.getAttribute('size')).toBe('50%');
    });
  });
}); 
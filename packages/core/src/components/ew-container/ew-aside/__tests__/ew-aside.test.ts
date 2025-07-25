import { describe, it, expect, beforeEach, afterEach } from 'vitest';

describe('EwAside', () => {
  let aside: any;

  beforeEach(async () => {
    aside = document.createElement('ew-aside');
    document.body.appendChild(aside);
    await new Promise(resolve => setTimeout(resolve, 10));
  });

  afterEach(() => {
    if (aside && aside.parentNode) {
      aside.parentNode.removeChild(aside);
    }
  });

  describe('基本功能', () => {
    it('应该正确渲染侧边栏组件', () => {
      expect(aside.shadowRoot).toBeTruthy();
      const asideElement = aside.shadowRoot.querySelector('.ew-aside');
      expect(asideElement).toBeTruthy();
    });

    it('应该设置默认宽度', () => {
      const asideElement = aside.shadowRoot.querySelector('.ew-aside');
      expect(asideElement.style.width).toBe('200px');
    });

    it('应该包含插槽', () => {
      const slot = aside.shadowRoot.querySelector('slot');
      expect(slot).toBeTruthy();
    });
  });

  describe('属性设置', () => {
    it('应该设置自定义宽度', async () => {
      aside.setAttribute('width', '300px');
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const asideElement = aside.shadowRoot.querySelector('.ew-aside');
      expect(asideElement.style.width).toBe('300px');
    });

    it('应该支持数字宽度值', async () => {
      aside.setAttribute('width', '250');
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const asideElement = aside.shadowRoot.querySelector('.ew-aside');
      expect(asideElement.style.width).toBe('250px');
    });

    it('应该支持百分比宽度', async () => {
      aside.setAttribute('width', '20%');
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const asideElement = aside.shadowRoot.querySelector('.ew-aside');
      expect(asideElement.style.width).toBe('20%');
    });
  });

  describe('样式验证', () => {
    it('应该应用正确的CSS类', () => {
      const asideElement = aside.shadowRoot.querySelector('.ew-aside');
      expect(asideElement.classList.contains('ew-aside')).toBe(true);
    });

    it('应该使用aside标签', () => {
      const asideElement = aside.shadowRoot.querySelector('aside');
      expect(asideElement).toBeTruthy();
    });
  });
}); 
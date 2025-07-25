import { describe, it, expect, beforeEach, afterEach } from 'vitest';

describe('EwHeader', () => {
  let header: any;

  beforeEach(async () => {
    header = document.createElement('ew-header');
    document.body.appendChild(header);
    await new Promise(resolve => setTimeout(resolve, 10));
  });

  afterEach(() => {
    if (header && header.parentNode) {
      header.parentNode.removeChild(header);
    }
  });

  describe('基本功能', () => {
    it('应该正确渲染头部组件', () => {
      expect(header.shadowRoot).toBeTruthy();
      const headerElement = header.shadowRoot.querySelector('.ew-header');
      expect(headerElement).toBeTruthy();
    });

    it('应该设置默认高度', () => {
      const headerElement = header.shadowRoot.querySelector('.ew-header');
      expect(headerElement.style.height).toBe('60px');
      expect(headerElement.style.lineHeight).toBe('60px');
    });

    it('应该包含插槽', () => {
      const slot = header.shadowRoot.querySelector('slot');
      expect(slot).toBeTruthy();
    });
  });

  describe('属性设置', () => {
    it('应该设置自定义高度', async () => {
      header.setAttribute('height', '80px');
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const headerElement = header.shadowRoot.querySelector('.ew-header');
      expect(headerElement.style.height).toBe('80px');
      expect(headerElement.style.lineHeight).toBe('80px');
    });

    it('应该支持数字高度值', async () => {
      header.setAttribute('height', '100');
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const headerElement = header.shadowRoot.querySelector('.ew-header');
      expect(headerElement.style.height).toBe('100px');
      expect(headerElement.style.lineHeight).toBe('100px');
    });
  });

  describe('样式验证', () => {
    it('应该应用正确的CSS类', () => {
      const headerElement = header.shadowRoot.querySelector('.ew-header');
      expect(headerElement.classList.contains('ew-header')).toBe(true);
    });

    it('应该使用header标签', () => {
      const headerElement = header.shadowRoot.querySelector('header');
      expect(headerElement).toBeTruthy();
    });
  });
}); 
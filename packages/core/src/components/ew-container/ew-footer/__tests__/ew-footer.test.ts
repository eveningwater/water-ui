import { describe, it, expect, beforeEach, afterEach } from 'vitest';

describe('EwFooter', () => {
  let footer: any;

  beforeEach(async () => {
    footer = document.createElement('ew-footer');
    document.body.appendChild(footer);
    await new Promise(resolve => setTimeout(resolve, 10));
  });

  afterEach(() => {
    if (footer && footer.parentNode) {
      footer.parentNode.removeChild(footer);
    }
  });

  describe('基本功能', () => {
    it('应该正确渲染底部组件', () => {
      expect(footer.shadowRoot).toBeTruthy();
      const footerElement = footer.shadowRoot.querySelector('.ew-footer');
      expect(footerElement).toBeTruthy();
    });

    it('应该设置默认高度', () => {
      const footerElement = footer.shadowRoot.querySelector('.ew-footer');
      expect(footerElement.style.height).toBe('60px');
      expect(footerElement.style.lineHeight).toBe('60px');
    });

    it('应该包含插槽', () => {
      const slot = footer.shadowRoot.querySelector('slot');
      expect(slot).toBeTruthy();
    });
  });

  describe('属性设置', () => {
    it('应该设置自定义高度', async () => {
      footer.setAttribute('height', '80px');
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const footerElement = footer.shadowRoot.querySelector('.ew-footer');
      expect(footerElement.style.height).toBe('80px');
      expect(footerElement.style.lineHeight).toBe('80px');
    });

    it('应该支持数字高度值', async () => {
      footer.setAttribute('height', '100');
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const footerElement = footer.shadowRoot.querySelector('.ew-footer');
      expect(footerElement.style.height).toBe('100px');
      expect(footerElement.style.lineHeight).toBe('100px');
    });
  });

  describe('样式验证', () => {
    it('应该应用正确的CSS类', () => {
      const footerElement = footer.shadowRoot.querySelector('.ew-footer');
      expect(footerElement.classList.contains('ew-footer')).toBe(true);
    });

    it('应该使用footer标签', () => {
      const footerElement = footer.shadowRoot.querySelector('footer');
      expect(footerElement).toBeTruthy();
    });
  });
}); 
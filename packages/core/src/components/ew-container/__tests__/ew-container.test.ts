import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { EwContainer } from '../index';

describe('EwContainer', () => {
  let container: any;

  beforeEach(async () => {
    container = document.createElement('ew-container');
    document.body.appendChild(container);
    await new Promise(resolve => setTimeout(resolve, 10));
  });

  afterEach(() => {
    if (container && container.parentNode) {
      container.parentNode.removeChild(container);
    }
  });

  describe('基本功能', () => {
    it('应该正确渲染容器组件', () => {
      expect(container.shadowRoot).toBeTruthy();
      const containerElement = container.shadowRoot.querySelector('.ew-container');
      expect(containerElement).toBeTruthy();
    });

    it('应该设置默认方向为水平', () => {
      const containerElement = container.shadowRoot.querySelector('.ew-container');
      expect(containerElement.classList.contains('ew-container--vertical')).toBe(false);
    });

    it('应该支持垂直方向', async () => {
      container.setAttribute('direction', 'vertical');
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const containerElement = container.shadowRoot.querySelector('.ew-container');
      expect(containerElement.classList.contains('ew-container--vertical')).toBe(true);
    });

    it('应该包含插槽', () => {
      const slot = container.shadowRoot.querySelector('slot');
      expect(slot).toBeTruthy();
    });
  });

  describe('属性设置', () => {
    it('应该设置水平方向', async () => {
      container.setAttribute('direction', 'horizontal');
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const containerElement = container.shadowRoot.querySelector('.ew-container');
      expect(containerElement.classList.contains('ew-container--vertical')).toBe(false);
    });

    it('应该设置垂直方向', async () => {
      container.setAttribute('direction', 'vertical');
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const containerElement = container.shadowRoot.querySelector('.ew-container');
      expect(containerElement.classList.contains('ew-container--vertical')).toBe(true);
    });
  });

  describe('布局功能', () => {
    it('应该支持子组件布局', async () => {
      const header = document.createElement('ew-header');
      const aside = document.createElement('ew-aside');
      const main = document.createElement('ew-main');
      const footer = document.createElement('ew-footer');

      container.appendChild(header);
      await new Promise(resolve => setTimeout(resolve, 10));
      container.appendChild(aside);
      await new Promise(resolve => setTimeout(resolve, 10));
      container.appendChild(main);
      await new Promise(resolve => setTimeout(resolve, 10));
      container.appendChild(footer);
      await new Promise(resolve => setTimeout(resolve, 10));

      expect(container.children.length).toBe(4);
      expect(container.children[0].tagName).toBe('EW-HEADER');
      expect(container.children[1].tagName).toBe('EW-ASIDE');
      expect(container.children[2].tagName).toBe('EW-MAIN');
      expect(container.children[3].tagName).toBe('EW-FOOTER');
    });
  });

  describe('静态属性', () => {
    it('应该包含 EwHeader 静态属性', () => {
      expect(EwContainer.EwHeader).toBeDefined();
      expect(typeof EwContainer.EwHeader).toBe('function');
    });

    it('应该包含 EwAside 静态属性', () => {
      expect(EwContainer.EwAside).toBeDefined();
      expect(typeof EwContainer.EwAside).toBe('function');
    });

    it('应该包含 EwMain 静态属性', () => {
      expect(EwContainer.EwMain).toBeDefined();
      expect(typeof EwContainer.EwMain).toBe('function');
    });

    it('应该包含 EwFooter 静态属性', () => {
      expect(EwContainer.EwFooter).toBeDefined();
      expect(typeof EwContainer.EwFooter).toBe('function');
    });

    it('静态属性应该指向正确的组件类', () => {
      expect(EwContainer.EwHeader).toBe(customElements.get('ew-header'));
      expect(EwContainer.EwAside).toBe(customElements.get('ew-aside'));
      expect(EwContainer.EwMain).toBe(customElements.get('ew-main'));
      expect(EwContainer.EwFooter).toBe(customElements.get('ew-footer'));
    });
  });
}); 
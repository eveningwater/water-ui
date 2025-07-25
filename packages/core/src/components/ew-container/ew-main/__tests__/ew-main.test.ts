import { describe, it, expect, beforeEach, afterEach } from 'vitest';

describe('EwMain', () => {
  let main: any;

  beforeEach(async () => {
    main = document.createElement('ew-main');
    document.body.appendChild(main);
    await new Promise(resolve => setTimeout(resolve, 10));
  });

  afterEach(() => {
    if (main && main.parentNode) {
      main.parentNode.removeChild(main);
    }
  });

  describe('基本功能', () => {
    it('应该正确渲染主内容区组件', () => {
      expect(main.shadowRoot).toBeTruthy();
      const mainElement = main.shadowRoot.querySelector('.ew-main');
      expect(mainElement).toBeTruthy();
    });

    it('应该包含插槽', () => {
      const slot = main.shadowRoot.querySelector('slot');
      expect(slot).toBeTruthy();
    });
  });

  describe('样式验证', () => {
    it('应该应用正确的CSS类', () => {
      const mainElement = main.shadowRoot.querySelector('.ew-main');
      expect(mainElement.classList.contains('ew-main')).toBe(true);
    });

    it('应该使用main标签', () => {
      const mainElement = main.shadowRoot.querySelector('main');
      expect(mainElement).toBeTruthy();
    });
  });

  describe('布局功能', () => {
    it('应该支持内容渲染', () => {
      const content = document.createElement('div');
      content.textContent = '测试内容';
      main.appendChild(content);

      expect(main.children.length).toBe(1);
      expect(main.children[0].textContent).toBe('测试内容');
    });
  });
}); 
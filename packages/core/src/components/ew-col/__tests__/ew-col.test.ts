import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { EwCol } from '../index';

describe('EwCol', () => {
  let col: any;

  beforeEach(async () => {
    col = document.createElement('ew-col');
    document.body.appendChild(col);
    await new Promise(resolve => setTimeout(resolve, 10));
  });

  afterEach(() => {
    if (col && col.parentNode) {
      col.parentNode.removeChild(col);
    }
  });

  describe('基本功能', () => {
    it('应该正确渲染列组件', () => {
      expect(col.shadowRoot).toBeTruthy();
      const colElement = col.shadowRoot.querySelector('.ew-col');
      expect(colElement).toBeTruthy();
    });

    it('应该包含插槽', () => {
      const slot = col.shadowRoot.querySelector('slot');
      expect(slot).toBeTruthy();
    });
  });

  describe('基础栅格', () => {
    it('应该设置span属性', async () => {
      col.setAttribute('span', '6');
      await new Promise(resolve => setTimeout(resolve, 10));

      const colElement = col.shadowRoot.querySelector('.ew-col');
      expect(colElement.classList.contains('ew-col-6')).toBe(true);
    });

    it('应该处理无效span值', async () => {
      col.setAttribute('span', 'invalid');
      await new Promise(resolve => setTimeout(resolve, 10));

      const colElement = col.shadowRoot.querySelector('.ew-col');
      expect(colElement.classList.contains('ew-col-6')).toBe(false);
    });

    it('应该支持不同的span值', async () => {
      const testCases = [1, 6, 12, 24];
      
      for (const span of testCases) {
        col.setAttribute('span', span.toString());
        await new Promise(resolve => setTimeout(resolve, 10));

        const colElement = col.shadowRoot.querySelector('.ew-col');
        expect(colElement.classList.contains(`ew-col-${span}`)).toBe(true);
      }
    });
  });

  describe('偏移设置', () => {
    it('应该设置offset属性', async () => {
      col.setAttribute('offset', '3');
      await new Promise(resolve => setTimeout(resolve, 10));

      const colElement = col.shadowRoot.querySelector('.ew-col');
      expect(colElement.classList.contains('ew-col-offset-3')).toBe(true);
    });

    it('应该处理无效offset值', async () => {
      col.setAttribute('offset', 'invalid');
      await new Promise(resolve => setTimeout(resolve, 10));

      const colElement = col.shadowRoot.querySelector('.ew-col');
      expect(colElement.classList.contains('ew-col-offset-3')).toBe(false);
    });
  });

  describe('推拉设置', () => {
    it('应该设置push属性', async () => {
      col.setAttribute('push', '2');
      await new Promise(resolve => setTimeout(resolve, 10));

      const colElement = col.shadowRoot.querySelector('.ew-col');
      expect(colElement.classList.contains('ew-col-push-2')).toBe(true);
    });

    it('应该设置pull属性', async () => {
      col.setAttribute('pull', '1');
      await new Promise(resolve => setTimeout(resolve, 10));

      const colElement = col.shadowRoot.querySelector('.ew-col');
      expect(colElement.classList.contains('ew-col-pull-1')).toBe(true);
    });

    it('应该处理无效推拉值', async () => {
      col.setAttribute('push', 'invalid');
      col.setAttribute('pull', 'invalid');
      await new Promise(resolve => setTimeout(resolve, 10));

      const colElement = col.shadowRoot.querySelector('.ew-col');
      expect(colElement.classList.contains('ew-col-push-2')).toBe(false);
      expect(colElement.classList.contains('ew-col-pull-1')).toBe(false);
    });
  });

  describe('响应式设置', () => {
    it('应该设置xs属性', async () => {
      col.setAttribute('xs', '12');
      await new Promise(resolve => setTimeout(resolve, 10));

      const colElement = col.shadowRoot.querySelector('.ew-col');
      expect(colElement.classList.contains('ew-col-xs-12')).toBe(true);
    });

    it('应该设置sm属性', async () => {
      col.setAttribute('sm', '8');
      await new Promise(resolve => setTimeout(resolve, 10));

      const colElement = col.shadowRoot.querySelector('.ew-col');
      expect(colElement.classList.contains('ew-col-sm-8')).toBe(true);
    });

    it('应该设置md属性', async () => {
      col.setAttribute('md', '6');
      await new Promise(resolve => setTimeout(resolve, 10));

      const colElement = col.shadowRoot.querySelector('.ew-col');
      expect(colElement.classList.contains('ew-col-md-6')).toBe(true);
    });

    it('应该设置lg属性', async () => {
      col.setAttribute('lg', '4');
      await new Promise(resolve => setTimeout(resolve, 10));

      const colElement = col.shadowRoot.querySelector('.ew-col');
      expect(colElement.classList.contains('ew-col-lg-4')).toBe(true);
    });

    it('应该设置xl属性', async () => {
      col.setAttribute('xl', '3');
      await new Promise(resolve => setTimeout(resolve, 10));

      const colElement = col.shadowRoot.querySelector('.ew-col');
      expect(colElement.classList.contains('ew-col-xl-3')).toBe(true);
    });

    it('应该处理无效响应式值', async () => {
      col.setAttribute('xs', 'invalid');
      await new Promise(resolve => setTimeout(resolve, 10));

      const colElement = col.shadowRoot.querySelector('.ew-col');
      expect(colElement.classList.contains('ew-col-xs-12')).toBe(false);
    });
  });

  describe('标签设置', () => {
    it('应该使用默认div标签', () => {
      const colElement = col.shadowRoot.querySelector('div');
      expect(colElement).toBeTruthy();
    });

    it('应该使用自定义标签', async () => {
      col.setAttribute('tag', 'article');
      await new Promise(resolve => setTimeout(resolve, 10));

      const colElement = col.shadowRoot.querySelector('article');
      expect(colElement).toBeTruthy();
    });
  });

  describe('样式验证', () => {
    it('应该应用正确的CSS类', () => {
      const colElement = col.shadowRoot.querySelector('.ew-col');
      expect(colElement.classList.contains('ew-col')).toBe(true);
    });

    it('应该支持多个属性组合', async () => {
      col.setAttribute('span', '6');
      col.setAttribute('offset', '3');
      col.setAttribute('push', '1');
      col.setAttribute('pull', '1');
      col.setAttribute('xs', '12');
      col.setAttribute('sm', '8');
      await new Promise(resolve => setTimeout(resolve, 10));

      const colElement = col.shadowRoot.querySelector('.ew-col');
      expect(colElement.classList.contains('ew-col-6')).toBe(true);
      expect(colElement.classList.contains('ew-col-offset-3')).toBe(true);
      expect(colElement.classList.contains('ew-col-push-1')).toBe(true);
      expect(colElement.classList.contains('ew-col-pull-1')).toBe(true);
      expect(colElement.classList.contains('ew-col-xs-12')).toBe(true);
      expect(colElement.classList.contains('ew-col-sm-8')).toBe(true);
    });
  });

  describe('布局功能', () => {
    it('应该支持内容渲染', () => {
      const content = document.createElement('div');
      content.textContent = '测试内容';
      col.appendChild(content);

      expect(col.children.length).toBe(1);
      expect(col.children[0].textContent).toBe('测试内容');
    });
  });
}); 
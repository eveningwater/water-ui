import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { EwScrollbar } from '../index';

describe('EwScrollbar', () => {
  let scrollbar: EwScrollbar;

  beforeEach(() => {
    scrollbar = document.createElement('ew-scrollbar') as EwScrollbar;
    document.body.appendChild(scrollbar);
  });

  afterEach(() => {
    if (scrollbar && scrollbar.parentNode) {
      scrollbar.parentNode.removeChild(scrollbar);
    }
  });

  describe('基础功能', () => {
    it('应该正确渲染滚动条组件', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(scrollbar.shadowRoot?.querySelector('.ew-scrollbar')).toBeTruthy();
      expect(scrollbar.shadowRoot?.querySelector('.ew-scrollbar__wrap')).toBeTruthy();
      expect(scrollbar.shadowRoot?.querySelector('.ew-scrollbar__view')).toBeTruthy();
    });

    it('应该使用默认的 div 标签', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      const viewElement = scrollbar.shadowRoot?.querySelector('.ew-scrollbar__view');
      expect(viewElement?.tagName.toLowerCase()).toBe('div');
    });

    it('应该支持自定义标签', async () => {
      scrollbar.setAttribute('tag', 'section');
      await new Promise(resolve => setTimeout(resolve, 10));
      const viewElement = scrollbar.shadowRoot?.querySelector('.ew-scrollbar__view');
      expect(viewElement?.tagName.toLowerCase()).toBe('section');
    });
  });

  describe('高度设置', () => {
    it('应该支持 height 属性', async () => {
      scrollbar.setAttribute('height', '300px');
      await new Promise(resolve => setTimeout(resolve, 10));
      const scrollbarElement = scrollbar.shadowRoot?.querySelector('.ew-scrollbar') as HTMLElement;
      expect(scrollbarElement.style.height).toBe('300px');
    });

    it('应该支持数字类型的 height', async () => {
      scrollbar.setAttribute('height', '200');
      await new Promise(resolve => setTimeout(resolve, 10));
      const scrollbarElement = scrollbar.shadowRoot?.querySelector('.ew-scrollbar') as HTMLElement;
      expect(scrollbarElement.style.height).toBe('200px');
    });

    it('应该支持 max-height 属性', async () => {
      scrollbar.setAttribute('max-height', '400px');
      await new Promise(resolve => setTimeout(resolve, 10));
      const scrollbarElement = scrollbar.shadowRoot?.querySelector('.ew-scrollbar') as HTMLElement;
      expect(scrollbarElement.style.maxHeight).toBe('400px');
    });
  });

  describe('样式类名', () => {
    it('应该支持 wrap-class 属性', async () => {
      scrollbar.setAttribute('wrap-class', 'custom-wrap');
      await new Promise(resolve => setTimeout(resolve, 10));
      const wrapElement = scrollbar.shadowRoot?.querySelector('.ew-scrollbar__wrap');
      expect(wrapElement?.classList.contains('custom-wrap')).toBe(true);
    });

    it('应该支持 view-class 属性', async () => {
      scrollbar.setAttribute('view-class', 'custom-view');
      await new Promise(resolve => setTimeout(resolve, 10));
      const viewElement = scrollbar.shadowRoot?.querySelector('.ew-scrollbar__view');
      expect(viewElement?.classList.contains('custom-view')).toBe(true);
    });
  });

  describe('样式属性', () => {
    it('应该支持 wrap-style 属性', async () => {
      scrollbar.setAttribute('wrap-style', 'background: red;');
      await new Promise(resolve => setTimeout(resolve, 10));
      const wrapElement = scrollbar.shadowRoot?.querySelector('.ew-scrollbar__wrap') as HTMLElement;
      expect(wrapElement.style.background).toBe('red');
    });

    it('应该支持 view-style 属性', async () => {
      scrollbar.setAttribute('view-style', 'color: blue;');
      await new Promise(resolve => setTimeout(resolve, 10));
      const viewElement = scrollbar.shadowRoot?.querySelector('.ew-scrollbar__view') as HTMLElement;
      expect(viewElement.style.color).toBe('blue');
    });
  });

  describe('滚动条行为', () => {
    it('应该支持 always 属性', async () => {
      scrollbar.setAttribute('always', '');
      await new Promise(resolve => setTimeout(resolve, 10));
      const verticalBar = scrollbar.shadowRoot?.querySelector('.ew-scrollbar__bar.is-vertical');
      const horizontalBar = scrollbar.shadowRoot?.querySelector('.ew-scrollbar__bar.is-horizontal');
      expect(verticalBar?.classList.contains('is-visible')).toBe(true);
      expect(horizontalBar?.classList.contains('is-visible')).toBe(true);
    });

    it('应该支持 min-size 属性', async () => {
      scrollbar.setAttribute('min-size', '30');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(scrollbar.getAttribute('min-size')).toBe('30');
    });
  });

  describe('滚动条元素', () => {
    it('应该包含垂直滚动条', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      const verticalBar = scrollbar.shadowRoot?.querySelector('.ew-scrollbar__bar.is-vertical');
      const verticalThumb = scrollbar.shadowRoot?.querySelector('.ew-scrollbar__bar.is-vertical .ew-scrollbar__thumb');
      expect(verticalBar).toBeTruthy();
      expect(verticalThumb).toBeTruthy();
    });

    it('应该包含水平滚动条', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      const horizontalBar = scrollbar.shadowRoot?.querySelector('.ew-scrollbar__bar.is-horizontal');
      const horizontalThumb = scrollbar.shadowRoot?.querySelector('.ew-scrollbar__bar.is-horizontal .ew-scrollbar__thumb');
      expect(horizontalBar).toBeTruthy();
      expect(horizontalThumb).toBeTruthy();
    });
  });

  describe('公共方法', () => {
    it('应该支持 setHeight 方法', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      scrollbar.setHeight('250px');
      const scrollbarElement = scrollbar.shadowRoot?.querySelector('.ew-scrollbar') as HTMLElement;
      expect(scrollbarElement.style.height).toBe('250px');
    });

    it('应该支持 setMaxHeight 方法', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      scrollbar.setMaxHeight('350px');
      const scrollbarElement = scrollbar.shadowRoot?.querySelector('.ew-scrollbar') as HTMLElement;
      expect(scrollbarElement.style.maxHeight).toBe('350px');
    });

    it('应该支持 setAlways 方法', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      scrollbar.setAlways(true);
      const verticalBar = scrollbar.shadowRoot?.querySelector('.ew-scrollbar__bar.is-vertical');
      expect(verticalBar?.classList.contains('is-visible')).toBe(true);
    });

    it('应该支持 setMinSize 方法', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      scrollbar.setMinSize(25);
      expect(scrollbar.getAttribute('min-size')).toBe('25');
    });
  });

  describe('滚动方法', () => {
    it('应该支持 scrollToTop 方法', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      scrollbar.scrollToTop();
      expect(scrollbar.getScrollTop()).toBe(0);
    });

    it('应该支持 scrollToBottom 方法', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      const scrollHeight = scrollbar.getScrollHeight();
      scrollbar.scrollToBottom();
      expect(scrollbar.getScrollTop()).toBe(scrollHeight);
    });

    it('应该支持 scrollToLeft 方法', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      scrollbar.scrollToLeft();
      expect(scrollbar.getScrollLeft()).toBe(0);
    });

    it('应该支持 scrollToRight 方法', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      const scrollWidth = scrollbar.getScrollWidth();
      scrollbar.scrollToRight();
      expect(scrollbar.getScrollLeft()).toBe(scrollWidth);
    });

    it('应该支持 scrollTo 方法（对象参数）', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      scrollbar.scrollTo({ top: 100, left: 50 });
      expect(scrollbar.getScrollTop()).toBe(100);
      expect(scrollbar.getScrollLeft()).toBe(50);
    });

    it('应该支持 scrollTo 方法（数字参数）', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      scrollbar.scrollTo(200, 150);
      expect(scrollbar.getScrollTop()).toBe(200);
      expect(scrollbar.getScrollLeft()).toBe(150);
    });
  });

  describe('获取滚动信息', () => {
    it('应该支持 getScrollTop 方法', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(typeof scrollbar.getScrollTop()).toBe('number');
    });

    it('应该支持 getScrollLeft 方法', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(typeof scrollbar.getScrollLeft()).toBe('number');
    });

    it('应该支持 getScrollHeight 方法', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(typeof scrollbar.getScrollHeight()).toBe('number');
    });

    it('应该支持 getScrollWidth 方法', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(typeof scrollbar.getScrollWidth()).toBe('number');
    });

    it('应该支持 getClientHeight 方法', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(typeof scrollbar.getClientHeight()).toBe('number');
    });

    it('应该支持 getClientWidth 方法', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(typeof scrollbar.getClientWidth()).toBe('number');
    });
  });

  describe('属性监听', () => {
    it('应该监听属性变化', async () => {
      scrollbar.setAttribute('height', '300px');
      await new Promise(resolve => setTimeout(resolve, 10));
      let scrollbarElement = scrollbar.shadowRoot?.querySelector('.ew-scrollbar') as HTMLElement;
      expect(scrollbarElement.style.height).toBe('300px');

      scrollbar.setAttribute('height', '400px');
      await new Promise(resolve => setTimeout(resolve, 10));
      scrollbarElement = scrollbar.shadowRoot?.querySelector('.ew-scrollbar') as HTMLElement;
      expect(scrollbarElement.style.height).toBe('400px');
    });
  });

  describe('组合使用', () => {
    it('应该支持多个属性组合', async () => {
      scrollbar.setAttribute('height', '300px');
      scrollbar.setAttribute('max-height', '500px');
      scrollbar.setAttribute('wrap-class', 'custom-wrap');
      scrollbar.setAttribute('view-class', 'custom-view');
      scrollbar.setAttribute('always', '');
      await new Promise(resolve => setTimeout(resolve, 10));

      const scrollbarElement = scrollbar.shadowRoot?.querySelector('.ew-scrollbar') as HTMLElement;
      const wrapElement = scrollbar.shadowRoot?.querySelector('.ew-scrollbar__wrap');
      const viewElement = scrollbar.shadowRoot?.querySelector('.ew-scrollbar__view');
      const verticalBar = scrollbar.shadowRoot?.querySelector('.ew-scrollbar__bar.is-vertical');

      expect(scrollbarElement.style.height).toBe('300px');
      expect(scrollbarElement.style.maxHeight).toBe('500px');
      expect(wrapElement?.classList.contains('custom-wrap')).toBe(true);
      expect(viewElement?.classList.contains('custom-view')).toBe(true);
      expect(verticalBar?.classList.contains('is-visible')).toBe(true);
    });
  });
}); 
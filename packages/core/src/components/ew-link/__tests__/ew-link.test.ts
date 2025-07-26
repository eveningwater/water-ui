import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { EwLink } from '../index';

describe('EwLink', () => {
  let link: any;

  beforeEach(async () => {
    link = document.createElement('ew-link');
    document.body.appendChild(link);
    await new Promise(resolve => setTimeout(resolve, 10));
  });

  afterEach(() => {
    if (link && link.parentNode) {
      link.parentNode.removeChild(link);
    }
  });

  describe('基本功能', () => {
    it('应该正确渲染链接组件', () => {
      expect(link.shadowRoot).toBeTruthy();
      const linkElement = link.shadowRoot.querySelector('.ew-link');
      expect(linkElement).toBeTruthy();
    });

    it('应该不设置默认类型', () => {
      const linkElement = link.shadowRoot.querySelector('.ew-link');
      expect(linkElement.classList.contains('ew-link--primary')).toBe(false);
    });

    it('应该包含插槽', () => {
      const slot = link.shadowRoot.querySelector('slot');
      expect(slot).toBeTruthy();
    });

    it('应该渲染为span标签（无href时）', () => {
      const linkElement = link.shadowRoot.querySelector('span');
      expect(linkElement).toBeTruthy();
    });
  });

  describe('链接类型', () => {
    it('应该设置primary类型', async () => {
      link.setAttribute('type', 'primary');
      await new Promise(resolve => setTimeout(resolve, 10));

      const linkElement = link.shadowRoot.querySelector('.ew-link');
      expect(linkElement.classList.contains('ew-link--primary')).toBe(true);
    });

    it('应该设置success类型', async () => {
      link.setAttribute('type', 'success');
      await new Promise(resolve => setTimeout(resolve, 10));

      const linkElement = link.shadowRoot.querySelector('.ew-link');
      expect(linkElement.classList.contains('ew-link--success')).toBe(true);
    });

    it('应该设置warning类型', async () => {
      link.setAttribute('type', 'warning');
      await new Promise(resolve => setTimeout(resolve, 10));

      const linkElement = link.shadowRoot.querySelector('.ew-link');
      expect(linkElement.classList.contains('ew-link--warning')).toBe(true);
    });

    it('应该设置danger类型', async () => {
      link.setAttribute('type', 'danger');
      await new Promise(resolve => setTimeout(resolve, 10));

      const linkElement = link.shadowRoot.querySelector('.ew-link');
      expect(linkElement.classList.contains('ew-link--danger')).toBe(true);
    });

    it('应该设置info类型', async () => {
      link.setAttribute('type', 'info');
      await new Promise(resolve => setTimeout(resolve, 10));

      const linkElement = link.shadowRoot.querySelector('.ew-link');
      expect(linkElement.classList.contains('ew-link--info')).toBe(true);
    });
  });

  describe('下划线功能', () => {
    it('应该显示下划线', async () => {
      link.setAttribute('underline', '');
      await new Promise(resolve => setTimeout(resolve, 10));

      const linkElement = link.shadowRoot.querySelector('.ew-link');
      expect(linkElement.classList.contains('ew-link--underline')).toBe(true);
    });

    it('应该移除下划线属性', async () => {
      link.setAttribute('underline', '');
      await new Promise(resolve => setTimeout(resolve, 10));
      link.removeAttribute('underline');
      await new Promise(resolve => setTimeout(resolve, 10));

      const linkElement = link.shadowRoot.querySelector('.ew-link');
      expect(linkElement.classList.contains('ew-link--underline')).toBe(false);
    });
  });

  describe('禁用状态', () => {
    it('应该设置禁用状态', async () => {
      link.setAttribute('disabled', '');
      await new Promise(resolve => setTimeout(resolve, 10));

      const linkElement = link.shadowRoot.querySelector('.ew-link');
      expect(linkElement.classList.contains('ew-link--disabled')).toBe(true);
    });

    it('应该在禁用状态下阻止点击事件', async () => {
      link.setAttribute('disabled', '');
      await new Promise(resolve => setTimeout(resolve, 10));

      const clickHandler = vi.fn();
      link.addEventListener('click', clickHandler);

      const linkElement = link.shadowRoot.querySelector('.ew-link');
      linkElement.click();

      expect(clickHandler).not.toHaveBeenCalled();
    });
  });

  describe('href属性', () => {
    it('应该渲染为a标签（有href时）', async () => {
      link.setAttribute('href', 'https://example.com');
      await new Promise(resolve => setTimeout(resolve, 10));

      const linkElement = link.shadowRoot.querySelector('a');
      expect(linkElement).toBeTruthy();
      expect(linkElement.getAttribute('href')).toBe('https://example.com');
    });

    it('应该设置target属性', async () => {
      link.setAttribute('href', 'https://example.com');
      link.setAttribute('target', '_blank');
      await new Promise(resolve => setTimeout(resolve, 10));

      const linkElement = link.shadowRoot.querySelector('a');
      expect(linkElement.getAttribute('target')).toBe('_blank');
      expect(linkElement.getAttribute('rel')).toBe('noopener noreferrer');
    });

    it('应该设置默认target为_self', async () => {
      link.setAttribute('href', 'https://example.com');
      await new Promise(resolve => setTimeout(resolve, 10));

      const linkElement = link.shadowRoot.querySelector('a');
      expect(linkElement.getAttribute('target')).toBe('_self');
    });
  });



  describe('外部链接图标', () => {
    it('应该为_blank目标显示外部链接图标', async () => {
      link.setAttribute('href', 'https://example.com');
      link.setAttribute('target', '_blank');
      await new Promise(resolve => setTimeout(resolve, 10));

      const externalIcon = link.shadowRoot.querySelector('.ew-link__external');
      expect(externalIcon).toBeTruthy();
      expect(externalIcon.textContent).toBe('↗');
    });

    it('应该为http链接显示外部链接图标', async () => {
      link.setAttribute('href', 'https://example.com');
      await new Promise(resolve => setTimeout(resolve, 10));

      const externalIcon = link.shadowRoot.querySelector('.ew-link__external');
      expect(externalIcon).toBeTruthy();
    });

    it('不应该为内部链接显示外部链接图标', async () => {
      link.setAttribute('href', '/internal-link');
      await new Promise(resolve => setTimeout(resolve, 10));

      const externalIcon = link.shadowRoot.querySelector('.ew-link__external');
      expect(externalIcon).toBeFalsy();
    });
  });

  describe('事件处理', () => {
    it('应该触发点击事件', async () => {
      const clickHandler = vi.fn();
      link.addEventListener('click', clickHandler);

      const linkElement = link.shadowRoot.querySelector('.ew-link');
      linkElement.click();

      expect(clickHandler).toHaveBeenCalled();
    });

    it('应该触发鼠标进入事件', async () => {
      const mouseenterHandler = vi.fn();
      link.addEventListener('mouseenter', mouseenterHandler);

      const linkElement = link.shadowRoot.querySelector('.ew-link');
      linkElement.dispatchEvent(new Event('mouseenter'));

      expect(mouseenterHandler).toHaveBeenCalled();
    });

    it('应该触发鼠标离开事件', async () => {
      const mouseleaveHandler = vi.fn();
      link.addEventListener('mouseleave', mouseleaveHandler);

      const linkElement = link.shadowRoot.querySelector('.ew-link');
      linkElement.dispatchEvent(new Event('mouseleave'));

      expect(mouseleaveHandler).toHaveBeenCalled();
    });

    it('应该在禁用状态下阻止事件', async () => {
      link.setAttribute('disabled', '');
      await new Promise(resolve => setTimeout(resolve, 10));

      const mouseenterHandler = vi.fn();
      const mouseleaveHandler = vi.fn();
      link.addEventListener('mouseenter', mouseenterHandler);
      link.addEventListener('mouseleave', mouseleaveHandler);

      const linkElement = link.shadowRoot.querySelector('.ew-link');
      linkElement.dispatchEvent(new Event('mouseenter'));
      linkElement.dispatchEvent(new Event('mouseleave'));

      // 在禁用状态下，鼠标事件被阻止
      expect(mouseenterHandler).not.toHaveBeenCalled();
      expect(mouseleaveHandler).not.toHaveBeenCalled();
    });
  });

  describe('键盘事件', () => {
    it('应该响应Enter键', async () => {
      const clickHandler = vi.fn();
      link.addEventListener('click', clickHandler);

      const linkElement = link.shadowRoot.querySelector('.ew-link');
      const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
      linkElement.dispatchEvent(enterEvent);

      expect(clickHandler).toHaveBeenCalled();
    });

    it('应该响应空格键', async () => {
      const clickHandler = vi.fn();
      link.addEventListener('click', clickHandler);

      const linkElement = link.shadowRoot.querySelector('.ew-link');
      const spaceEvent = new KeyboardEvent('keydown', { key: ' ' });
      linkElement.dispatchEvent(spaceEvent);

      expect(clickHandler).toHaveBeenCalled();
    });

    it('应该在禁用状态下阻止键盘事件', async () => {
      link.setAttribute('disabled', '');
      await new Promise(resolve => setTimeout(resolve, 10));

      const clickHandler = vi.fn();
      link.addEventListener('click', clickHandler);

      const linkElement = link.shadowRoot.querySelector('.ew-link');
      const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
      linkElement.dispatchEvent(enterEvent);

      expect(clickHandler).not.toHaveBeenCalled();
    });
  });

  describe('公共方法', () => {
    it('应该支持focus方法', async () => {
      const linkElement = link.shadowRoot.querySelector('.ew-link');
      const focusSpy = vi.spyOn(linkElement, 'focus');

      link.focus();

      expect(focusSpy).toHaveBeenCalled();
    });

    it('应该支持blur方法', async () => {
      const linkElement = link.shadowRoot.querySelector('.ew-link');
      const blurSpy = vi.spyOn(linkElement, 'blur');

      link.blur();

      expect(blurSpy).toHaveBeenCalled();
    });

    it('应该在禁用状态下阻止focus', async () => {
      link.setAttribute('disabled', '');
      await new Promise(resolve => setTimeout(resolve, 10));

      const linkElement = link.shadowRoot.querySelector('.ew-link');
      const focusSpy = vi.spyOn(linkElement, 'focus');

      link.focus();

      expect(focusSpy).not.toHaveBeenCalled();
    });
  });

  describe('样式验证', () => {
    it('应该应用正确的CSS类', () => {
      const linkElement = link.shadowRoot.querySelector('.ew-link');
      expect(linkElement.classList.contains('ew-link')).toBe(true);
    });

    it('应该支持多个属性组合', async () => {
      link.setAttribute('type', 'success');
      link.setAttribute('underline', '');
      await new Promise(resolve => setTimeout(resolve, 10));

      const linkElement = link.shadowRoot.querySelector('.ew-link');
      expect(linkElement.classList.contains('ew-link--success')).toBe(true);
      expect(linkElement.classList.contains('ew-link--underline')).toBe(true);
    });
  });

  describe('内容渲染', () => {
    it('应该支持文本内容', () => {
      link.textContent = '测试链接';
      expect(link.textContent).toBe('测试链接');
    });

    it('应该支持HTML内容', () => {
      link.innerHTML = '<strong>粗体链接</strong>';
      expect(link.innerHTML).toBe('<strong>粗体链接</strong>');
    });
  });
}); 
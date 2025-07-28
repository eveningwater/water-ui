import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { EwText } from '../index';

describe('EwText', () => {
  let text: EwText;

  beforeEach(() => {
    text = document.createElement('ew-text') as EwText;
    document.body.appendChild(text);
  });

  afterEach(() => {
    if (text && text.parentNode) {
      text.parentNode.removeChild(text);
    }
  });

  describe('基础功能', () => {
    it('应该正确渲染基础文本', async () => {
      text.textContent = '测试文本';
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(text.shadowRoot?.querySelector('.ew-text')).toBeTruthy();
    });

    it('应该使用默认的 span 标签', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      const textElement = text.shadowRoot?.querySelector('.ew-text');
      expect(textElement?.tagName.toLowerCase()).toBe('span');
    });

    it('应该支持自定义标签', async () => {
      text.setAttribute('tag', 'div');
      await new Promise(resolve => setTimeout(resolve, 10));
      const textElement = text.shadowRoot?.querySelector('.ew-text');
      expect(textElement?.tagName.toLowerCase()).toBe('div');
    });
  });

  describe('文本类型', () => {
    it('应该支持 primary 类型', async () => {
      text.setAttribute('type', 'primary');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(text.classList.contains('ew-text--primary')).toBe(true);
    });

    it('应该支持 success 类型', async () => {
      text.setAttribute('type', 'success');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(text.classList.contains('ew-text--success')).toBe(true);
    });

    it('应该支持 warning 类型', async () => {
      text.setAttribute('type', 'warning');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(text.classList.contains('ew-text--warning')).toBe(true);
    });

    it('应该支持 danger 类型', async () => {
      text.setAttribute('type', 'danger');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(text.classList.contains('ew-text--danger')).toBe(true);
    });

    it('应该支持 info 类型', async () => {
      text.setAttribute('type', 'info');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(text.classList.contains('ew-text--info')).toBe(true);
    });
  });

  describe('文本大小', () => {
    it('应该支持 large 大小', async () => {
      text.setAttribute('size', 'large');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(text.classList.contains('ew-text--large')).toBe(true);
    });

    it('应该支持 default 大小（默认）', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(text.classList.contains('ew-text--default')).toBe(false);
    });

    it('应该支持 small 大小', async () => {
      text.setAttribute('size', 'small');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(text.classList.contains('ew-text--small')).toBe(true);
    });
  });

  describe('文本截断', () => {
    it('应该支持 truncated 属性', async () => {
      text.setAttribute('truncated', '');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(text.classList.contains('ew-text--truncate')).toBe(true);
    });

    it('应该支持 line-clamp 属性', async () => {
      text.setAttribute('line-clamp', '2');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(text.classList.contains('ew-text--line-clamp-2')).toBe(true);
    });

    it('应该支持 line-clamp 1', async () => {
      text.setAttribute('line-clamp', '1');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(text.classList.contains('ew-text--line-clamp-1')).toBe(true);
    });

    it('应该支持 line-clamp 3', async () => {
      text.setAttribute('line-clamp', '3');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(text.classList.contains('ew-text--line-clamp-3')).toBe(true);
    });
  });

  describe('文本对齐', () => {
    it('应该支持 left 对齐', async () => {
      text.setAttribute('align', 'left');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(text.classList.contains('ew-text--left')).toBe(true);
    });

    it('应该支持 center 对齐', async () => {
      text.setAttribute('align', 'center');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(text.classList.contains('ew-text--center')).toBe(true);
    });

    it('应该支持 right 对齐', async () => {
      text.setAttribute('align', 'right');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(text.classList.contains('ew-text--right')).toBe(true);
    });
  });

  describe('文本粗细', () => {
    it('应该支持 bold 粗细', async () => {
      text.setAttribute('weight', 'bold');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(text.classList.contains('ew-text--bold')).toBe(true);
    });

    it('应该支持 normal 粗细', async () => {
      text.setAttribute('weight', 'normal');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(text.classList.contains('ew-text--normal')).toBe(true);
    });

    it('应该支持 light 粗细', async () => {
      text.setAttribute('weight', 'light');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(text.classList.contains('ew-text--light')).toBe(true);
    });
  });

  describe('文本样式', () => {
    it('应该支持 italic 样式', async () => {
      text.setAttribute('style', 'italic');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(text.classList.contains('ew-text--italic')).toBe(true);
    });

    it('应该支持 underline 样式', async () => {
      text.setAttribute('style', 'underline');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(text.classList.contains('ew-text--underline')).toBe(true);
    });

    it('应该支持 line-through 样式', async () => {
      text.setAttribute('style', 'line-through');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(text.classList.contains('ew-text--line-through')).toBe(true);
    });
  });

  describe('状态', () => {
    it('应该支持 disabled 状态', async () => {
      text.setAttribute('disabled', '');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(text.classList.contains('ew-text--disabled')).toBe(true);
    });

    it('应该支持 clickable 状态', async () => {
      text.setAttribute('clickable', '');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(text.classList.contains('ew-text--clickable')).toBe(true);
    });

    it('应该支持 responsive 状态', async () => {
      text.setAttribute('responsive', '');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(text.classList.contains('ew-text--responsive')).toBe(true);
    });
  });

  describe('组合使用', () => {
    it('应该支持多个属性组合', async () => {
      text.setAttribute('type', 'success');
      text.setAttribute('size', 'large');
      text.setAttribute('weight', 'bold');
      text.setAttribute('align', 'center');
      await new Promise(resolve => setTimeout(resolve, 10));

      expect(text.classList.contains('ew-text--success')).toBe(true);
      expect(text.classList.contains('ew-text--large')).toBe(true);
      expect(text.classList.contains('ew-text--bold')).toBe(true);
      expect(text.classList.contains('ew-text--center')).toBe(true);
    });
  });

  describe('公共方法', () => {
    it('应该支持 setType 方法', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      text.setType('warning');
      expect(text.classList.contains('ew-text--warning')).toBe(true);
    });

    it('应该支持 setSize 方法', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      text.setSize('small');
      expect(text.classList.contains('ew-text--small')).toBe(true);
    });

    it('应该支持 setTruncated 方法', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      text.setTruncated(true);
      expect(text.classList.contains('ew-text--truncate')).toBe(true);
    });

    it('应该支持 setLineClamp 方法', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      text.setLineClamp(2);
      expect(text.classList.contains('ew-text--line-clamp-2')).toBe(true);
    });

    it('应该支持 setAlign 方法', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      text.setAlign('right');
      expect(text.classList.contains('ew-text--right')).toBe(true);
    });

    it('应该支持 setWeight 方法', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      text.setWeight('bold');
      expect(text.classList.contains('ew-text--bold')).toBe(true);
    });

    it('应该支持 setStyle 方法', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      text.setStyle('underline');
      expect(text.classList.contains('ew-text--underline')).toBe(true);
    });

    it('应该支持 setDisabled 方法', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      text.setDisabled(true);
      expect(text.classList.contains('ew-text--disabled')).toBe(true);
    });

    it('应该支持 setClickable 方法', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      text.setClickable(true);
      expect(text.classList.contains('ew-text--clickable')).toBe(true);
    });

    it('应该支持 setResponsive 方法', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      text.setResponsive(true);
      expect(text.classList.contains('ew-text--responsive')).toBe(true);
    });
  });

  describe('属性监听', () => {
    it('应该监听属性变化', async () => {
      text.setAttribute('type', 'primary');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(text.classList.contains('ew-text--primary')).toBe(true);

      text.setAttribute('type', 'danger');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(text.classList.contains('ew-text--danger')).toBe(true);
      expect(text.classList.contains('ew-text--primary')).toBe(false);
    });
  });
}); 
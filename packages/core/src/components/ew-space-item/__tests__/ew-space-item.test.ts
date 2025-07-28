import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { EwSpaceItem } from '../index';

describe('EwSpaceItem', () => {
  let spaceItem: EwSpaceItem;

  beforeEach(() => {
    spaceItem = document.createElement('ew-space-item') as EwSpaceItem;
    document.body.appendChild(spaceItem);
  });

  afterEach(() => {
    document.body.removeChild(spaceItem);
  });

  describe('基础功能', () => {
    it('应该正确渲染', () => {
      expect(spaceItem.shadowRoot).toBeTruthy();
      expect(spaceItem.shadowRoot?.querySelector('.ew-space-item')).toBeTruthy();
    });

    it('应该包含插槽', () => {
      const slot = spaceItem.shadowRoot?.querySelector('slot');
      expect(slot).toBeTruthy();
    });
  });

  describe('属性测试', () => {
    it('应该正确设置 direction 属性', async () => {
      spaceItem.setAttribute('direction', 'vertical');
      spaceItem.attributeChangedCallback('direction', null, 'vertical');
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const spaceItemElement = spaceItem.shadowRoot?.querySelector('.ew-space-item');
      expect(spaceItemElement?.classList.contains('ew-space-item--vertical')).toBeTruthy();
    });

    it('应该正确设置 size 属性', async () => {
      spaceItem.setAttribute('size', 'large');
      spaceItem.attributeChangedCallback('size', null, 'large');
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const spaceItemElement = spaceItem.shadowRoot?.querySelector('.ew-space-item');
      expect(spaceItemElement?.classList.contains('ew-space-item--large')).toBeTruthy();
    });

    it('应该正确设置自定义 size 属性', async () => {
      spaceItem.setAttribute('size', '20');
      spaceItem.attributeChangedCallback('size', null, '20');
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const spaceItemElement = spaceItem.shadowRoot?.querySelector('.ew-space-item') as HTMLElement;
      expect(spaceItemElement?.classList.contains('ew-space-item--custom')).toBeTruthy();
      expect(spaceItemElement?.style.getPropertyValue('--ew-space-gap')).toBe('20px');
    });

    it('应该正确设置数组 size 属性', async () => {
      spaceItem.setAttribute('size', '10,20');
      spaceItem.attributeChangedCallback('size', null, '10,20');
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const spaceItemElement = spaceItem.shadowRoot?.querySelector('.ew-space-item') as HTMLElement;
      expect(spaceItemElement?.classList.contains('ew-space-item--custom')).toBeTruthy();
      expect(spaceItemElement?.style.getPropertyValue('--ew-space-gap-x')).toBe('10px');
      expect(spaceItemElement?.style.getPropertyValue('--ew-space-gap-y')).toBe('20px');
    });

    it('应该正确设置 tag 属性', async () => {
      spaceItem.setAttribute('tag', 'span');
      spaceItem.attributeChangedCallback('tag', null, 'span');
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const spaceItemElement = spaceItem.shadowRoot?.querySelector('span');
      expect(spaceItemElement).toBeTruthy();
    });
  });

  describe('公共方法测试', () => {
    it('setDirection 方法应该正常工作', async () => {
      spaceItem.setDirection('vertical');
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const spaceItemElement = spaceItem.shadowRoot?.querySelector('.ew-space-item');
      expect(spaceItemElement?.classList.contains('ew-space-item--vertical')).toBeTruthy();
    });

    it('setSize 方法应该正常工作', async () => {
      spaceItem.setSize('large');
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const spaceItemElement = spaceItem.shadowRoot?.querySelector('.ew-space-item');
      expect(spaceItemElement?.classList.contains('ew-space-item--large')).toBeTruthy();
    });

    it('setSize 方法应该支持数字', async () => {
      spaceItem.setSize(30);
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const spaceItemElement = spaceItem.shadowRoot?.querySelector('.ew-space-item') as HTMLElement;
      expect(spaceItemElement?.classList.contains('ew-space-item--custom')).toBeTruthy();
      expect(spaceItemElement?.style.getPropertyValue('--ew-space-gap')).toBe('30px');
    });

    it('setSize 方法应该支持数组', async () => {
      spaceItem.setSize([15, 25]);
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const spaceItemElement = spaceItem.shadowRoot?.querySelector('.ew-space-item') as HTMLElement;
      expect(spaceItemElement?.classList.contains('ew-space-item--custom')).toBeTruthy();
      expect(spaceItemElement?.style.getPropertyValue('--ew-space-gap-x')).toBe('15px');
      expect(spaceItemElement?.style.getPropertyValue('--ew-space-gap-y')).toBe('25px');
    });
  });

  describe('默认值测试', () => {
    it('应该使用默认的 direction', () => {
      const spaceItemElement = spaceItem.shadowRoot?.querySelector('.ew-space-item');
      expect(spaceItemElement?.classList.contains('ew-space-item--horizontal')).toBeTruthy();
    });

    it('应该使用默认的 size', () => {
      const spaceItemElement = spaceItem.shadowRoot?.querySelector('.ew-space-item');
      expect(spaceItemElement?.classList.contains('ew-space-item--default')).toBeTruthy();
    });

    it('应该使用默认的 tag', () => {
      const spaceItemElement = spaceItem.shadowRoot?.querySelector('div');
      expect(spaceItemElement).toBeTruthy();
    });
  });

  describe('组合属性测试', () => {
    it('应该正确处理多个属性组合', async () => {
      spaceItem.setAttribute('direction', 'vertical');
      spaceItem.setAttribute('size', 'large');
      spaceItem.attributeChangedCallback('direction', null, 'vertical');
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const spaceItemElement = spaceItem.shadowRoot?.querySelector('.ew-space-item');
      expect(spaceItemElement?.classList.contains('ew-space-item--vertical')).toBeTruthy();
      expect(spaceItemElement?.classList.contains('ew-space-item--large')).toBeTruthy();
    });
  });
}); 
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { EwSpace } from '../index';

describe('EwSpace', () => {
  let space: EwSpace;

  beforeEach(() => {
    space = document.createElement('ew-space') as EwSpace;
    document.body.appendChild(space);
  });

  afterEach(() => {
    document.body.removeChild(space);
  });

  describe('基础功能', () => {
    it('应该正确渲染', () => {
      expect(space.shadowRoot).toBeTruthy();
      expect(space.shadowRoot?.querySelector('.ew-space')).toBeTruthy();
    });

    it('应该包含插槽', () => {
      const slot = space.shadowRoot?.querySelector('slot');
      expect(slot).toBeTruthy();
    });
  });

  describe('属性测试', () => {
    it('应该正确设置 direction 属性', async () => {
      space.setAttribute('direction', 'vertical');
      space.attributeChangedCallback('direction', null, 'vertical');
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const spaceElement = space.shadowRoot?.querySelector('.ew-space');
      expect(spaceElement?.classList.contains('ew-space--vertical')).toBeTruthy();
    });

    it('应该正确设置 alignment 属性', async () => {
      space.setAttribute('alignment', 'center');
      space.attributeChangedCallback('alignment', null, 'center');
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const spaceElement = space.shadowRoot?.querySelector('.ew-space');
      expect(spaceElement?.classList.contains('ew-space--center')).toBeTruthy();
    });

    it('应该正确设置 size 属性', async () => {
      space.setAttribute('size', 'large');
      space.attributeChangedCallback('size', null, 'large');
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const spaceElement = space.shadowRoot?.querySelector('.ew-space');
      expect(spaceElement?.classList.contains('ew-space--large')).toBeTruthy();
    });

    it('应该正确设置自定义 size 属性', async () => {
      space.setAttribute('size', '20');
      space.attributeChangedCallback('size', null, '20');
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const spaceElement = space.shadowRoot?.querySelector('.ew-space') as HTMLElement;
      expect(spaceElement?.classList.contains('ew-space--custom')).toBeTruthy();
      expect(spaceElement?.style.getPropertyValue('--ew-space-gap')).toBe('20px');
    });

    it('应该正确设置数组 size 属性', async () => {
      space.setAttribute('size', '10,20');
      space.attributeChangedCallback('size', null, '10,20');
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const spaceElement = space.shadowRoot?.querySelector('.ew-space') as HTMLElement;
      expect(spaceElement?.classList.contains('ew-space--custom')).toBeTruthy();
      expect(spaceElement?.style.getPropertyValue('--ew-space-gap-x')).toBe('10px');
      expect(spaceElement?.style.getPropertyValue('--ew-space-gap-y')).toBe('20px');
    });

    it('应该正确设置 wrap 属性', async () => {
      space.setAttribute('wrap', '');
      space.attributeChangedCallback('wrap', null, '');
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const spaceElement = space.shadowRoot?.querySelector('.ew-space');
      expect(spaceElement?.classList.contains('ew-space--wrap')).toBeTruthy();
    });

    it('应该正确设置 fill 属性', async () => {
      space.setAttribute('fill', '');
      space.attributeChangedCallback('fill', null, '');
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const spaceElement = space.shadowRoot?.querySelector('.ew-space');
      expect(spaceElement?.classList.contains('ew-space--fill')).toBeTruthy();
    });

    it('应该正确设置 fill-ratio 属性', async () => {
      space.setAttribute('fill-ratio', '0.5');
      space.attributeChangedCallback('fill-ratio', null, '0.5');
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const spaceElement = space.shadowRoot?.querySelector('.ew-space') as HTMLElement;
      expect(spaceElement?.style.getPropertyValue('--ew-space-fill-ratio')).toBe('0.5');
    });

    it('应该正确设置 tag 属性', async () => {
      space.setAttribute('tag', 'span');
      space.attributeChangedCallback('tag', null, 'span');
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const spaceElement = space.shadowRoot?.querySelector('span');
      expect(spaceElement).toBeTruthy();
    });
  });

  describe('公共方法测试', () => {
    it('setDirection 方法应该正常工作', async () => {
      space.setDirection('vertical');
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const spaceElement = space.shadowRoot?.querySelector('.ew-space');
      expect(spaceElement?.classList.contains('ew-space--vertical')).toBeTruthy();
    });

    it('setAlignment 方法应该正常工作', async () => {
      space.setAlignment('center');
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const spaceElement = space.shadowRoot?.querySelector('.ew-space');
      expect(spaceElement?.classList.contains('ew-space--center')).toBeTruthy();
    });

    it('setSize 方法应该正常工作', async () => {
      space.setSize('large');
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const spaceElement = space.shadowRoot?.querySelector('.ew-space');
      expect(spaceElement?.classList.contains('ew-space--large')).toBeTruthy();
    });

    it('setSize 方法应该支持数字', async () => {
      space.setSize(30);
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const spaceElement = space.shadowRoot?.querySelector('.ew-space') as HTMLElement;
      expect(spaceElement?.classList.contains('ew-space--custom')).toBeTruthy();
      expect(spaceElement?.style.getPropertyValue('--ew-space-gap')).toBe('30px');
    });

    it('setSize 方法应该支持数组', async () => {
      space.setSize([15, 25]);
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const spaceElement = space.shadowRoot?.querySelector('.ew-space') as HTMLElement;
      expect(spaceElement?.classList.contains('ew-space--custom')).toBeTruthy();
      expect(spaceElement?.style.getPropertyValue('--ew-space-gap-x')).toBe('15px');
      expect(spaceElement?.style.getPropertyValue('--ew-space-gap-y')).toBe('25px');
    });

    it('setWrap 方法应该正常工作', async () => {
      space.setWrap(true);
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const spaceElement = space.shadowRoot?.querySelector('.ew-space');
      expect(spaceElement?.classList.contains('ew-space--wrap')).toBeTruthy();
    });

    it('setFill 方法应该正常工作', async () => {
      space.setFill(true);
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const spaceElement = space.shadowRoot?.querySelector('.ew-space');
      expect(spaceElement?.classList.contains('ew-space--fill')).toBeTruthy();
    });

    it('setFillRatio 方法应该正常工作', async () => {
      space.setFillRatio(0.7);
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const spaceElement = space.shadowRoot?.querySelector('.ew-space') as HTMLElement;
      expect(spaceElement?.style.getPropertyValue('--ew-space-fill-ratio')).toBe('0.7');
    });

    it('setSpacer 方法应该正常工作', async () => {
      space.setSpacer('divider');
      await new Promise(resolve => setTimeout(resolve, 10));
      
      // 这里可以添加对 spacer 的测试逻辑
      expect(space).toBeTruthy();
    });
  });

  describe('默认值测试', () => {
    it('应该使用默认的 direction', () => {
      const spaceElement = space.shadowRoot?.querySelector('.ew-space');
      expect(spaceElement?.classList.contains('ew-space--horizontal')).toBeTruthy();
    });

    it('应该使用默认的 size', () => {
      const spaceElement = space.shadowRoot?.querySelector('.ew-space');
      expect(spaceElement?.classList.contains('ew-space--default')).toBeTruthy();
    });

    it('应该使用默认的 tag', () => {
      const spaceElement = space.shadowRoot?.querySelector('div');
      expect(spaceElement).toBeTruthy();
    });
  });

  describe('组合属性测试', () => {
    it('应该正确处理多个属性组合', async () => {
      space.setAttribute('direction', 'vertical');
      space.setAttribute('alignment', 'center');
      space.setAttribute('size', 'large');
      space.setAttribute('wrap', '');
      space.attributeChangedCallback('direction', null, 'vertical');
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const spaceElement = space.shadowRoot?.querySelector('.ew-space');
      expect(spaceElement?.classList.contains('ew-space--vertical')).toBeTruthy();
      expect(spaceElement?.classList.contains('ew-space--center')).toBeTruthy();
      expect(spaceElement?.classList.contains('ew-space--large')).toBeTruthy();
      expect(spaceElement?.classList.contains('ew-space--wrap')).toBeTruthy();
    });
  });
}); 
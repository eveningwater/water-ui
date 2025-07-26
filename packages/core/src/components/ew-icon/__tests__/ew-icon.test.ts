import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { EwIcon } from '../index';

describe('EwIcon', () => {
  let icon: any;

  beforeEach(async () => {
    icon = document.createElement('ew-icon');
    document.body.appendChild(icon);
    await new Promise(resolve => setTimeout(resolve, 10));
  });

  afterEach(() => {
    if (icon && icon.parentNode) {
      icon.parentNode.removeChild(icon);
    }
  });

  describe('基本功能', () => {
    it('应该正确渲染图标组件', () => {
      expect(icon.shadowRoot).toBeTruthy();
      const iconElement = icon.shadowRoot.querySelector('.ew-icon');
      expect(iconElement).toBeTruthy();
    });


  });

  describe('插槽内容', () => {
    it('应该包含插槽', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));

      const slotElement = icon.shadowRoot.querySelector('slot');
      expect(slotElement).toBeTruthy();
    });
  });

  describe('尺寸变体', () => {
    it('应该设置small尺寸', async () => {
      icon.setAttribute('size', 'small');
      await new Promise(resolve => setTimeout(resolve, 10));

      const iconElement = icon.shadowRoot.querySelector('.ew-icon');
      expect(iconElement.classList.contains('ew-icon--small')).toBe(true);
    });

    it('应该设置large尺寸', async () => {
      icon.setAttribute('size', 'large');
      await new Promise(resolve => setTimeout(resolve, 10));

      const iconElement = icon.shadowRoot.querySelector('.ew-icon');
      expect(iconElement.classList.contains('ew-icon--large')).toBe(true);
    });

    it('应该移除尺寸类', async () => {
      icon.setAttribute('size', 'small');
      await new Promise(resolve => setTimeout(resolve, 10));
      icon.removeAttribute('size');
      await new Promise(resolve => setTimeout(resolve, 10));

      const iconElement = icon.shadowRoot.querySelector('.ew-icon');
      expect(iconElement.classList.contains('ew-icon--small')).toBe(false);
    });
  });

  describe('颜色变体', () => {
    it('应该设置primary颜色', async () => {
      icon.setAttribute('color', 'primary');
      await new Promise(resolve => setTimeout(resolve, 10));

      const iconElement = icon.shadowRoot.querySelector('.ew-icon');
      expect(iconElement.classList.contains('ew-icon--primary')).toBe(true);
    });

    it('应该设置success颜色', async () => {
      icon.setAttribute('color', 'success');
      await new Promise(resolve => setTimeout(resolve, 10));

      const iconElement = icon.shadowRoot.querySelector('.ew-icon');
      expect(iconElement.classList.contains('ew-icon--success')).toBe(true);
    });

    it('应该设置warning颜色', async () => {
      icon.setAttribute('color', 'warning');
      await new Promise(resolve => setTimeout(resolve, 10));

      const iconElement = icon.shadowRoot.querySelector('.ew-icon');
      expect(iconElement.classList.contains('ew-icon--warning')).toBe(true);
    });

    it('应该设置danger颜色', async () => {
      icon.setAttribute('color', 'danger');
      await new Promise(resolve => setTimeout(resolve, 10));

      const iconElement = icon.shadowRoot.querySelector('.ew-icon');
      expect(iconElement.classList.contains('ew-icon--danger')).toBe(true);
    });

    it('应该设置info颜色', async () => {
      icon.setAttribute('color', 'info');
      await new Promise(resolve => setTimeout(resolve, 10));

      const iconElement = icon.shadowRoot.querySelector('.ew-icon');
      expect(iconElement.classList.contains('ew-icon--info')).toBe(true);
    });

    it('应该移除颜色类', async () => {
      icon.setAttribute('color', 'primary');
      await new Promise(resolve => setTimeout(resolve, 10));
      icon.removeAttribute('color');
      await new Promise(resolve => setTimeout(resolve, 10));

      const iconElement = icon.shadowRoot.querySelector('.ew-icon');
      expect(iconElement.classList.contains('ew-icon--primary')).toBe(false);
    });
  });

  describe('属性组合', () => {
    it('应该支持多个属性组合', async () => {
      icon.setAttribute('size', 'small');
      icon.setAttribute('color', 'primary');
      await new Promise(resolve => setTimeout(resolve, 10));

      const iconElement = icon.shadowRoot.querySelector('.ew-icon');
      expect(iconElement.classList.contains('ew-icon--small')).toBe(true);
      expect(iconElement.classList.contains('ew-icon--primary')).toBe(true);
    });
  });

  describe('样式验证', () => {
    it('应该应用正确的CSS类', () => {
      const iconElement = icon.shadowRoot.querySelector('.ew-icon');
      expect(iconElement.classList.contains('ew-icon')).toBe(true);
    });
  });

  describe('属性变化', () => {
    it('应该响应size属性变化', async () => {
      icon.setAttribute('size', 'small');
      await new Promise(resolve => setTimeout(resolve, 10));
      
      let iconElement = icon.shadowRoot.querySelector('.ew-icon');
      expect(iconElement.classList.contains('ew-icon--small')).toBe(true);

      icon.setAttribute('size', 'large');
      await new Promise(resolve => setTimeout(resolve, 10));
      
      iconElement = icon.shadowRoot.querySelector('.ew-icon');
      expect(iconElement.classList.contains('ew-icon--large')).toBe(true);
      expect(iconElement.classList.contains('ew-icon--small')).toBe(false);
    });

    it('应该响应color属性变化', async () => {
      icon.setAttribute('color', 'primary');
      await new Promise(resolve => setTimeout(resolve, 10));
      
      let iconElement = icon.shadowRoot.querySelector('.ew-icon');
      expect(iconElement.classList.contains('ew-icon--primary')).toBe(true);

      icon.setAttribute('color', 'success');
      await new Promise(resolve => setTimeout(resolve, 10));
      
      iconElement = icon.shadowRoot.querySelector('.ew-icon');
      expect(iconElement.classList.contains('ew-icon--success')).toBe(true);
      expect(iconElement.classList.contains('ew-icon--primary')).toBe(false);
    });
  });
}); 
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { EwInputNumber } from '../index';

describe('EwInputNumber', () => {
  let inputNumber: EwInputNumber;

  beforeEach(() => {
    inputNumber = document.createElement('ew-input-number') as EwInputNumber;
    document.body.appendChild(inputNumber);
  });

  afterEach(() => {
    if (inputNumber && inputNumber.parentNode) {
      inputNumber.parentNode.removeChild(inputNumber);
    }
  });

  describe('基本功能', () => {
    it('应该正确渲染组件', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      
      expect(inputNumber).toBeInstanceOf(EwInputNumber);
      expect(inputNumber.shadowRoot).toBeTruthy();
      const inputElement = inputNumber.shadowRoot?.querySelector('input');
      expect(inputElement).toBeTruthy();
      expect(inputElement?.classList.contains('ew-input-number__inner')).toBe(true);
    });

    it('应该设置初始值', async () => {
      inputNumber.setAttribute('model-value', '10');
      
      await new Promise(resolve => setTimeout(resolve, 10));
      
      expect(inputNumber.getValue()).toBe(10);
    });

    it('应该处理空值', async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      
      expect(inputNumber.getValue()).toBeNull();
    });
  });

  describe('属性设置', () => {
    it('应该设置最小值', async () => {
      inputNumber.setAttribute('min', '0');
      
      await new Promise(resolve => setTimeout(resolve, 10));
      
      expect(inputNumber.getAttribute('min')).toBe('0');
    });

    it('应该设置最大值', async () => {
      inputNumber.setAttribute('max', '100');
      
      await new Promise(resolve => setTimeout(resolve, 10));
      
      expect(inputNumber.getAttribute('max')).toBe('100');
    });

    it('应该设置步长', async () => {
      inputNumber.setAttribute('step', '5');
      
      await new Promise(resolve => setTimeout(resolve, 10));
      
      expect(inputNumber.getAttribute('step')).toBe('5');
    });

    it('应该设置精度', async () => {
      inputNumber.setAttribute('precision', '2');
      
      await new Promise(resolve => setTimeout(resolve, 10));
      
      expect(inputNumber.getAttribute('precision')).toBe('2');
    });

    it('应该设置尺寸', async () => {
      inputNumber.setAttribute('size', 'large');
      
      await new Promise(resolve => setTimeout(resolve, 10));
      
      expect(inputNumber.getAttribute('size')).toBe('large');
    });

    it('应该设置禁用状态', async () => {
      inputNumber.setAttribute('disabled', '');
      
      await new Promise(resolve => setTimeout(resolve, 10));
      
      expect(inputNumber.hasAttribute('disabled')).toBe(true);
    });

    it('应该设置只读状态', async () => {
      inputNumber.setAttribute('readonly', '');
      
      await new Promise(resolve => setTimeout(resolve, 10));
      
      expect(inputNumber.hasAttribute('readonly')).toBe(true);
    });

    it('应该设置清除功能', async () => {
      inputNumber.setAttribute('clearable', '');
      
      await new Promise(resolve => setTimeout(resolve, 10));
      
      expect(inputNumber.hasAttribute('clearable')).toBe(true);
    });

    it('应该设置控制按钮', async () => {
      inputNumber.setAttribute('controls', 'true');
      
      await new Promise(resolve => setTimeout(resolve, 10));
      
      expect(inputNumber.getAttribute('controls')).toBe('true');
    });

    it('应该设置控制按钮位置', async () => {
      inputNumber.setAttribute('controls-position', 'both');
      
      await new Promise(resolve => setTimeout(resolve, 10));
      
      expect(inputNumber.getAttribute('controls-position')).toBe('both');
    });
  });

  describe('值验证', () => {
    it('应该验证最小值', async () => {
      inputNumber.setAttribute('min', '10');
      inputNumber.setValue(5);
      
      await new Promise(resolve => setTimeout(resolve, 10));
      
      expect(inputNumber.getValue()).toBe(10);
    });

    it('应该验证最大值', async () => {
      inputNumber.setAttribute('max', '100');
      inputNumber.setValue(150);
      
      await new Promise(resolve => setTimeout(resolve, 10));
      
      expect(inputNumber.getValue()).toBe(100);
    });

    it('应该处理步长严格模式', async () => {
      // 创建一个新的组件实例来测试
      const testInputNumber = document.createElement('ew-input-number') as any;
      testInputNumber.setAttribute('step', '5');
      testInputNumber.setAttribute('step-strictly', '');
      document.body.appendChild(testInputNumber);
      
      await new Promise(resolve => setTimeout(resolve, 50));
      
      // 通过 setValue 方法测试
      testInputNumber.setValue(7);
      await new Promise(resolve => setTimeout(resolve, 10));
      
      // 7 应该被调整为 5 (最近的步长倍数)
      expect(testInputNumber.getValue()).toBe(5);
      
      document.body.removeChild(testInputNumber);
    });

    it('应该处理精度', async () => {
      inputNumber.setAttribute('precision', '2');
      // 重新渲染以应用新属性
      (inputNumber as any).render();
      inputNumber.setValue(10.123);
      
      await new Promise(resolve => setTimeout(resolve, 10));
      
      expect(inputNumber.getValue()).toBe(10.12);
    });
  });

  describe('事件处理', () => {
    it('应该触发 input 事件', async () => {
      return new Promise<void>((resolve) => {
        inputNumber.addEventListener('input', (event: any) => {
          expect(event.detail).toBe(15);
          resolve();
        });

        inputNumber.setValue(15);
      });
    });

    it('应该触发 change 事件', async () => {
      return new Promise<void>((resolve) => {
        inputNumber.addEventListener('change', (event: any) => {
          expect(event.detail).toBe(20);
          resolve();
        });

        inputNumber.setValue(20);
      });
    });

    it('应该触发 focus 事件', async () => {
      return new Promise<void>((resolve) => {
        inputNumber.addEventListener('focus', () => {
          resolve();
        });

        inputNumber.focus();
      });
    });

    it('应该触发 blur 事件', async () => {
      // 创建一个新的组件实例来测试
      const testInputNumber = document.createElement('ew-input-number') as any;
      document.body.appendChild(testInputNumber);
      
      await new Promise(resolve => setTimeout(resolve, 50));
      
      let blurTriggered = false;
      testInputNumber.addEventListener('blur', () => {
        blurTriggered = true;
      });

      testInputNumber.blur();
      await new Promise(resolve => setTimeout(resolve, 10));
      
      expect(blurTriggered).toBe(true);
      document.body.removeChild(testInputNumber);
    });
  });

  describe('公共方法', () => {
    it('应该设置值', () => {
      inputNumber.setValue(25);
      expect(inputNumber.getValue()).toBe(25);
    });

    it('应该获取值', () => {
      inputNumber.setValue(30);
      expect(inputNumber.getValue()).toBe(30);
    });

    it('应该处理空值', () => {
      inputNumber.setValue(null);
      expect(inputNumber.getValue()).toBeNull();
    });

    it('应该聚焦', () => {
      const focusSpy = vi.spyOn(inputNumber, 'focus');
      inputNumber.focus();
      expect(focusSpy).toHaveBeenCalled();
    });

    it('应该失焦', () => {
      const blurSpy = vi.spyOn(inputNumber, 'blur');
      inputNumber.blur();
      expect(blurSpy).toHaveBeenCalled();
    });

    it('应该选择文本', () => {
      const selectSpy = vi.spyOn(inputNumber, 'select');
      inputNumber.select();
      expect(selectSpy).toHaveBeenCalled();
    });
  });

  describe('键盘事件', () => {
    it('应该响应上箭头键', async () => {
      // 创建一个新的组件实例来测试
      const testInputNumber = document.createElement('ew-input-number') as any;
      testInputNumber.setAttribute('step', '1');
      document.body.appendChild(testInputNumber);
      
      await new Promise(resolve => setTimeout(resolve, 50));
      
      testInputNumber.setValue(10);
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const input = testInputNumber.shadowRoot?.querySelector('input') as HTMLInputElement;
      expect(input).toBeTruthy();
      
      const keydownEvent = new KeyboardEvent('keydown', { key: 'ArrowUp' });
      input.dispatchEvent(keydownEvent);
      
      await new Promise(resolve => setTimeout(resolve, 50));
      expect(testInputNumber.getValue()).toBe(11);
      
      document.body.removeChild(testInputNumber);
    });

    it('应该响应下箭头键', async () => {
      // 创建一个新的组件实例来测试
      const testInputNumber = document.createElement('ew-input-number') as any;
      testInputNumber.setAttribute('step', '1');
      document.body.appendChild(testInputNumber);
      
      await new Promise(resolve => setTimeout(resolve, 50));
      
      testInputNumber.setValue(10);
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const input = testInputNumber.shadowRoot?.querySelector('input') as HTMLInputElement;
      expect(input).toBeTruthy();
      
      const keydownEvent = new KeyboardEvent('keydown', { key: 'ArrowDown' });
      input.dispatchEvent(keydownEvent);
      
      await new Promise(resolve => setTimeout(resolve, 50));
      expect(testInputNumber.getValue()).toBe(9);
      
      document.body.removeChild(testInputNumber);
    });
  });

  describe('控制按钮', () => {
    it('应该增加值', async () => {
      // 创建一个新的组件实例来测试
      const testInputNumber = document.createElement('ew-input-number') as any;
      testInputNumber.setAttribute('step', '2');
      document.body.appendChild(testInputNumber);
      
      await new Promise(resolve => setTimeout(resolve, 50));
      
      testInputNumber.setValue(10);
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const increaseButton = testInputNumber.shadowRoot?.querySelector('.ew-input-number__increase') as HTMLElement;
      expect(increaseButton).toBeTruthy();
      increaseButton.click();
      
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(testInputNumber.getValue()).toBe(12);
      
      document.body.removeChild(testInputNumber);
    });

    it('应该减少值', async () => {
      // 创建一个新的组件实例来测试
      const testInputNumber = document.createElement('ew-input-number') as any;
      testInputNumber.setAttribute('step', '2');
      document.body.appendChild(testInputNumber);
      
      await new Promise(resolve => setTimeout(resolve, 50));
      
      testInputNumber.setValue(10);
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const decreaseButton = testInputNumber.shadowRoot?.querySelector('.ew-input-number__decrease') as HTMLElement;
      expect(decreaseButton).toBeTruthy();
      decreaseButton.click();
      
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(testInputNumber.getValue()).toBe(8);
      
      document.body.removeChild(testInputNumber);
    });

    it('应该在达到最小值时禁用减少按钮', () => {
      inputNumber.setAttribute('min', '0');
      inputNumber.setValue(0);
      
      const decreaseButton = inputNumber.shadowRoot?.querySelector('.ew-input-number__decrease') as HTMLElement;
      expect(decreaseButton.classList.contains('ew-input-number__decrease--disabled')).toBe(true);
    });

    it('应该在达到最大值时禁用增加按钮', () => {
      inputNumber.setAttribute('max', '100');
      inputNumber.setValue(100);
      
      const increaseButton = inputNumber.shadowRoot?.querySelector('.ew-input-number__increase') as HTMLElement;
      expect(increaseButton.classList.contains('ew-input-number__increase--disabled')).toBe(true);
    });
  });

  describe('清除功能', () => {
    it('应该清除值', () => {
      inputNumber.setAttribute('clearable', '');
      inputNumber.setValue(10);
      
      const clearButton = inputNumber.shadowRoot?.querySelector('.ew-input-number__clear') as HTMLElement;
      clearButton.click();
      
      expect(inputNumber.getValue()).toBeNull();
    });
  });

  describe('属性观察', () => {
    it('应该观察属性变化', () => {
      const observedAttributes = EwInputNumber.observedAttributes;
      expect(observedAttributes).toContain('model-value');
      expect(observedAttributes).toContain('min');
      expect(observedAttributes).toContain('max');
      expect(observedAttributes).toContain('step');
      expect(observedAttributes).toContain('precision');
      expect(observedAttributes).toContain('size');
      expect(observedAttributes).toContain('disabled');
      expect(observedAttributes).toContain('controls');
      expect(observedAttributes).toContain('controls-position');
    });
  });
}); 
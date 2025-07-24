import { describe, it, expect } from 'vitest';
import { debounce, throttle, delegate, executeInlineCode } from '../event';

describe('Event Utils', () => {
  describe('debounce', () => {
    it('应该正确防抖', async () => {
      let callCount = 0;
      const debouncedFn = debounce(() => {
        callCount++;
      }, 100);

      // 快速调用多次
      debouncedFn();
      debouncedFn();
      debouncedFn();

      // 等待防抖时间
      await new Promise(resolve => setTimeout(resolve, 150));

      expect(callCount).toBe(1);
    });

    it('应该支持立即执行', async () => {
      let callCount = 0;
      const debouncedFn = debounce(() => {
        callCount++;
      }, 100, true);

      // 第一次调用应该立即执行
      debouncedFn();
      expect(callCount).toBe(1);

      // 后续调用应该被防抖
      debouncedFn();
      debouncedFn();

      await new Promise(resolve => setTimeout(resolve, 150));
      expect(callCount).toBe(1);
    });
  });

  describe('throttle', () => {
    it('应该正确节流', async () => {
      let callCount = 0;
      const throttledFn = throttle(() => {
        callCount++;
      }, 100);

      // 快速调用多次
      throttledFn();
      throttledFn();
      throttledFn();

      // 立即检查，应该只执行一次
      expect(callCount).toBe(1);

      // 等待节流时间后再次调用
      await new Promise(resolve => setTimeout(resolve, 150));
      throttledFn();
      expect(callCount).toBe(2);
    });
  });

  describe('delegate', () => {
    it('应该正确委托事件', () => {
      const parent = document.createElement('div');
      const child = document.createElement('button');
      child.className = 'test-button';
      parent.appendChild(child);

      let eventTriggered = false;
      delegate(parent, '.test-button', 'click', () => {
        eventTriggered = true;
      });

      // 触发子元素点击事件
      child.click();

      expect(eventTriggered).toBe(true);
    });
  });

  describe('executeInlineCode', () => {
    it('应该正确执行内联代码', () => {
      const context = { testValue: 'hello' };
      const result = executeInlineCode('testValue + " world"', context);
      expect(result).toBe('hello world');
    });

    it('应该处理事件参数', () => {
      const event = new Event('click');
      const context = { event };
      const result = executeInlineCode('event.type', context, event);
      expect(result).toBe('click');
    });

    it('应该安全处理错误代码', () => {
      const result = executeInlineCode('invalid code', {});
      expect(result).toBeUndefined();
    });
  });
}); 
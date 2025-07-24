import { describe, it, expect } from 'vitest';
import { 
  isEmpty, 
  merge, 
  deepClone, 
  get, 
  set, 
  omitEmpty 
} from '../object';

describe('Object Utils', () => {
  describe('isEmpty', () => {
    it('应该正确判断空对象', () => {
      expect(isEmpty({})).toBe(true);
      expect(isEmpty({ key: 'value' })).toBe(false);
      expect(isEmpty(null)).toBe(true);
      expect(isEmpty(undefined)).toBe(true);
      expect(isEmpty([])).toBe(true);
      expect(isEmpty('')).toBe(true);
    });
  });

  describe('merge', () => {
    it('应该正确合并对象', () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { b: 3, c: 4 };
      const result = merge(obj1, obj2);
      
      expect(result).toEqual({ a: 1, b: 3, c: 4 });
    });

    it('应该深度合并嵌套对象', () => {
      const obj1 = { a: { b: 1, c: 2 } };
      const obj2 = { a: { c: 3, d: 4 } };
      const result = merge(obj1, obj2);
      
      expect(result).toEqual({ a: { b: 1, c: 3, d: 4 } });
    });
  });

  describe('deepClone', () => {
    it('应该正确深拷贝对象', () => {
      const original = { a: 1, b: { c: 2 } };
      const cloned = deepClone(original);
      
      expect(cloned).toEqual(original);
      expect(cloned).not.toBe(original);
      expect(cloned.b).not.toBe(original.b);
    });

    it('应该正确处理数组', () => {
      const original = [1, { a: 2 }, [3, 4]];
      const cloned = deepClone(original);
      
      expect(cloned).toEqual(original);
      expect(cloned).not.toBe(original);
      expect(cloned[1]).not.toBe(original[1]);
    });
  });

  describe('get', () => {
    it('应该正确获取嵌套属性', () => {
      const obj = { a: { b: { c: 1 } } };
      expect(get(obj, 'a.b.c')).toBe(1);
      expect(get(obj, 'a.b.d', 'default')).toBe('default');
    });
  });

  describe('set', () => {
    it('应该正确设置嵌套属性', () => {
      const obj: any = { a: { b: 1 } };
      set(obj, 'a.c', 2);
      expect(obj.a.c).toBe(2);
    });
  });

  describe('omitEmpty', () => {
    it('应该正确移除空值', () => {
      const obj = { a: 1, b: '', c: null, d: undefined, e: 0, f: false };
      const result = omitEmpty(obj);
      
      expect(result).toEqual({ a: 1, e: 0, f: false });
    });
  });
}); 
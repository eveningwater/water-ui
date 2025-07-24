import { describe, it, expect } from 'vitest';
import { 
  capitalize, 
  camelCase, 
  kebabCase, 
  snakeCase, 
  truncate,
  stripHtml,
  escapeHtml,
  unescapeHtml
} from '../string';

describe('String Utils', () => {
  describe('capitalize', () => {
    it('应该正确首字母大写', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('world')).toBe('World');
      expect(capitalize('')).toBe('');
    });
  });

  describe('camelCase', () => {
    it('应该正确转换为驼峰命名', () => {
      expect(camelCase('hello-world')).toBe('helloWorld');
      expect(camelCase('hello_world')).toBe('helloWorld');
      expect(camelCase('hello world')).toBe('helloWorld');
    });
  });

  describe('kebabCase', () => {
    it('应该正确转换为短横线命名', () => {
      expect(kebabCase('helloWorld')).toBe('hello-world');
      expect(kebabCase('hello_world')).toBe('hello-world');
      expect(kebabCase('hello world')).toBe('hello-world');
    });
  });

  describe('snakeCase', () => {
    it('应该正确转换为下划线命名', () => {
      expect(snakeCase('helloWorld')).toBe('hello_world');
      expect(snakeCase('hello-world')).toBe('hello_world');
      expect(snakeCase('hello world')).toBe('hello_world');
    });
  });

  describe('truncate', () => {
    it('应该正确截断字符串', () => {
      expect(truncate('hello world', 5)).toBe('hello...');
      expect(truncate('hello', 10)).toBe('hello');
      expect(truncate('', 5)).toBe('');
    });

    it('应该支持自定义后缀', () => {
      expect(truncate('hello world', 5, '***')).toBe('hello***');
    });
  });

  describe('stripHtml', () => {
    it('应该正确移除HTML标签', () => {
      expect(stripHtml('<p>hello</p>')).toBe('hello');
      expect(stripHtml('<div>world</div>')).toBe('world');
      expect(stripHtml('no html')).toBe('no html');
    });
  });

  describe('escapeHtml', () => {
    it('应该正确转义HTML字符', () => {
      expect(escapeHtml('<div>hello</div>')).toBe('&lt;div&gt;hello&lt;/div&gt;');
      expect(escapeHtml('& < > " \'')).toBe('&amp; &lt; &gt; &quot; &#39;');
    });
  });

  describe('unescapeHtml', () => {
    it('应该正确反转义HTML字符', () => {
      expect(unescapeHtml('&lt;div&gt;hello&lt;/div&gt;')).toBe('<div>hello</div>');
      expect(unescapeHtml('&amp; &lt; &gt; &quot; &#39;')).toBe('& < > " \'');
    });
  });
}); 
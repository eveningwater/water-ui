import { describe, it, expect } from 'vitest';
import { 
  LoadingIcon, 
  CloseIcon, 
  EyeIcon, 
  EyeOffIcon, 
  ClearIcon,
  ArrowIcon,
  SearchIcon,
  CalendarIcon,
  ClockIcon
} from '../icons';

describe('Icons', () => {
  describe('LoadingIcon', () => {
    it('应该生成加载图标SVG', () => {
      const svg = LoadingIcon({ size: '16px' });
      expect(svg).toContain('<svg');
      expect(svg).toContain('class="ew-loading-spinner"');
      expect(svg).toContain('width="16px"');
      expect(svg).toContain('height="16px"');
    });
  });

  describe('CloseIcon', () => {
    it('应该生成关闭图标SVG', () => {
      const svg = CloseIcon({ size: '16px' });
      expect(svg).toContain('<svg');
      expect(svg).toContain('viewBox="0 0 24 24"');
    });
  });

  describe('EyeIcon', () => {
    it('应该生成眼睛图标SVG', () => {
      const svg = EyeIcon({ size: '16px' });
      expect(svg).toContain('<svg');
      expect(svg).toContain('viewBox="0 0 24 24"');
    });
  });

  describe('EyeOffIcon', () => {
    it('应该生成眼睛关闭图标SVG', () => {
      const svg = EyeOffIcon({ size: '16px' });
      expect(svg).toContain('<svg');
      expect(svg).toContain('viewBox="0 0 24 24"');
    });
  });

  describe('ClearIcon', () => {
    it('应该生成清除图标SVG', () => {
      const svg = ClearIcon({ size: '16px' });
      expect(svg).toContain('<svg');
      expect(svg).toContain('viewBox="0 0 24 24"');
    });
  });

  describe('ArrowIcon', () => {
    it('应该生成箭头图标SVG', () => {
      const svg = ArrowIcon({ size: '16px' });
      expect(svg).toContain('<svg');
      expect(svg).toContain('viewBox="0 0 24 24"');
    });
  });

  describe('SearchIcon', () => {
    it('应该生成搜索图标SVG', () => {
      const svg = SearchIcon({ size: '16px' });
      expect(svg).toContain('<svg');
      expect(svg).toContain('viewBox="0 0 24 24"');
    });
  });

  describe('CalendarIcon', () => {
    it('应该生成日历图标SVG', () => {
      const svg = CalendarIcon({ size: '16px' });
      expect(svg).toContain('<svg');
      expect(svg).toContain('viewBox="0 0 24 24"');
    });
  });

  describe('ClockIcon', () => {
    it('应该生成时钟图标SVG', () => {
      const svg = ClockIcon({ size: '16px' });
      expect(svg).toContain('<svg');
      expect(svg).toContain('viewBox="0 0 24 24"');
    });
  });

  describe('图标尺寸', () => {
    it('应该支持不同的尺寸', () => {
      const smallIcon = LoadingIcon({ size: '12px' });
      const largeIcon = LoadingIcon({ size: '24px' });
      
      expect(smallIcon).toContain('width="12px"');
      expect(smallIcon).toContain('height="12px"');
      expect(largeIcon).toContain('width="24px"');
      expect(largeIcon).toContain('height="24px"');
    });
  });
}); 
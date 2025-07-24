// 导入主题样式
import './default.css';
import './dark.css';

// 主题管理类
export class ThemeManager {
  private static instance: ThemeManager;
  private currentTheme: string = 'light';

  private constructor() {
    this.initTheme();
  }

  public static getInstance(): ThemeManager {
    if (!ThemeManager.instance) {
      ThemeManager.instance = new ThemeManager();
    }
    return ThemeManager.instance;
  }

  private initTheme(): void {
    // 从localStorage获取保存的主题
    const savedTheme = localStorage.getItem('ew-theme');
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      this.setTheme(savedTheme as 'light' | 'dark');
    } else {
      // 检测系统主题偏好
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setTheme(prefersDark ? 'dark' : 'light');
    }

    // 监听系统主题变化
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('ew-theme')) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  public setTheme(theme: 'light' | 'dark'): void {
    this.currentTheme = theme;
    
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }

    // 保存到localStorage
    localStorage.setItem('ew-theme', theme);

    // 触发主题变化事件
    window.dispatchEvent(new CustomEvent('ew-theme-change', { detail: { theme } }));
  }

  public getTheme(): string {
    return this.currentTheme;
  }

  public toggleTheme(): void {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme as 'light' | 'dark');
  }

  // 获取CSS变量值
  public getCSSVariable(name: string): string {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  // 设置CSS变量值
  public setCSSVariable(name: string, value: string): void {
    document.documentElement.style.setProperty(name, value);
  }
}

// 导出主题管理器实例
export const themeManager = ThemeManager.getInstance();

// 导出主题切换函数
export const setTheme = (theme: 'light' | 'dark') => themeManager.setTheme(theme);
export const getTheme = () => themeManager.getTheme();
export const toggleTheme = () => themeManager.toggleTheme();

// 默认导出
export default {
  ThemeManager,
  themeManager,
  setTheme,
  getTheme,
  toggleTheme
}; 
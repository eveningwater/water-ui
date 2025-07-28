// 主题管理类
export class ThemeManager {
  private static instance: ThemeManager;
  private currentTheme: string = 'light';
  private loadedThemes: Set<string> = new Set();

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
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark' || savedTheme === 'pixel')) {
      this.setTheme(savedTheme as 'light' | 'dark' | 'pixel');
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

  private async loadThemeCSS(theme: string): Promise<void> {
    if (this.loadedThemes.has(theme)) {
      return;
    }

    try {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      
      // 尝试多种可能的CSS文件路径
      const possiblePaths = [
        // 开发环境路径
        `../packages/themes/dist/themes/theme-${theme}.css`,
        `../../packages/themes/dist/themes/theme-${theme}.css`,
        `../../../packages/themes/dist/themes/theme-${theme}.css`,
        // 生产环境路径
        `./themes/theme-${theme}.css`,
        `../themes/theme-${theme}.css`,
        // npm包路径
        `@water-ui/themes/themes/${theme}`,
        `./node_modules/@water-ui/themes/dist/themes/theme-${theme}.css`
      ];
      
      let loaded = false;
      for (const path of possiblePaths) {
        try {
          link.href = path;
          await new Promise((resolve, reject) => {
            const timeout = setTimeout(() => reject(new Error('Timeout')), 3000);
            link.onload = () => {
              clearTimeout(timeout);
              resolve(true);
            };
            link.onerror = () => {
              clearTimeout(timeout);
              reject(new Error(`Failed to load ${path}`));
            };
            document.head.appendChild(link);
          });
          loaded = true;
          break;
        } catch (error) {
          console.warn(`Failed to load theme from ${path}:`, error);
          // 移除失败的link元素
          if (link.parentNode) {
            link.parentNode.removeChild(link);
          }
        }
      }
      
      if (loaded) {
        this.loadedThemes.add(theme);
      } else {
        // 如果所有路径都失败，尝试内联CSS
        await this.loadInlineCSS(theme);
      }
    } catch (error) {
      console.warn(`Failed to load theme CSS for ${theme}:`, error);
      // 尝试内联CSS作为备选方案
      await this.loadInlineCSS(theme);
    }
  }

  private async loadInlineCSS(theme: string): Promise<void> {
    try {
      // 这里可以添加内联CSS作为备选方案
      // 或者从CDN加载
      const cdnPaths = [
        `https://unpkg.com/@water-ui/themes@latest/dist/themes/theme-${theme}.css`,
        `https://cdn.jsdelivr.net/npm/@water-ui/themes@latest/dist/themes/theme-${theme}.css`
      ];

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      
      for (const path of cdnPaths) {
        try {
          link.href = path;
          await new Promise((resolve, reject) => {
            const timeout = setTimeout(() => reject(new Error('Timeout')), 5000);
            link.onload = () => {
              clearTimeout(timeout);
              resolve(true);
            };
            link.onerror = () => {
              clearTimeout(timeout);
              reject(new Error(`Failed to load ${path}`));
            };
            document.head.appendChild(link);
          });
          console.log(`✅ Theme CSS loaded from CDN: ${path}`);
          this.loadedThemes.add(theme);
          return;
        } catch (error) {
          console.warn(`Failed to load theme from CDN ${path}:`, error);
          if (link.parentNode) {
            link.parentNode.removeChild(link);
          }
        }
      }
      
      throw new Error(`Could not load theme CSS for ${theme} from any source`);
    } catch (error) {
      console.error(`Failed to load inline CSS for ${theme}:`, error);
    }
  }

  public async setTheme(theme: 'light' | 'dark' | 'pixel'): Promise<void> {
    this.currentTheme = theme;
    
    // 加载主题CSS文件
    await this.loadThemeCSS(theme);
    
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else if (theme === 'pixel') {
      document.documentElement.setAttribute('data-theme', 'pixel');
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

  public async toggleTheme(): Promise<void> {
    const themes: ('light' | 'dark' | 'pixel')[] = ['light', 'dark', 'pixel'];
    const currentIndex = themes.indexOf(this.currentTheme as 'light' | 'dark' | 'pixel');
    const nextIndex = (currentIndex + 1) % themes.length;
    await this.setTheme(themes[nextIndex]);
  }

  // 获取CSS变量值
  public getCSSVariable(name: string): string {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  // 设置CSS变量值
  public setCSSVariable(name: string, value: string): void {
    document.documentElement.style.setProperty(name, value);
  }

  // 预加载所有主题
  public async preloadAllThemes(): Promise<void> {
    const themes: ('light' | 'dark' | 'pixel')[] = ['light', 'dark', 'pixel'];
    await Promise.all(themes.map(theme => this.loadThemeCSS(theme)));
  }
}

// 导出主题管理器实例
export const themeManager = ThemeManager.getInstance();

// 导出主题切换函数
export const setTheme = (theme: 'light' | 'dark' | 'pixel') => themeManager.setTheme(theme);
export const getTheme = () => themeManager.getTheme();
export const toggleTheme = () => themeManager.toggleTheme();
export const preloadAllThemes = () => themeManager.preloadAllThemes();

// 默认导出
export default {
  ThemeManager,
  themeManager,
  setTheme,
  getTheme,
  toggleTheme,
  preloadAllThemes
}; 
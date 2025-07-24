# @water-ui/themes

Water UI 主题包，提供多种预设主题和主题管理功能。

## 安装

```bash
npm install @water-ui/themes
```

## 主题类型

### 1. Light Theme (默认主题)
- 清新明亮的流水风格
- 适合日常使用和浅色界面

### 2. Dark Theme (深色主题)
- 深色背景的流水风格
- 适合夜间使用和深色界面

### 3. Pixel Theme (像素主题)
- 复古游戏像素风格
- 独特的像素化视觉效果

## 使用方法

### 方法一：使用主题管理器（推荐）

```javascript
import { setTheme, getTheme, toggleTheme } from '@water-ui/themes';

// 设置主题
await setTheme('light');   // 浅色主题
await setTheme('dark');    // 深色主题
await setTheme('pixel');   // 像素主题

// 获取当前主题
const currentTheme = getTheme();

// 切换主题（按顺序：light -> dark -> pixel -> light）
await toggleTheme();

// 预加载所有主题（可选，用于提升切换性能）
import { preloadAllThemes } from '@water-ui/themes';
await preloadAllThemes();
```

### 方法二：直接引入CSS文件

```html
<!-- 浅色主题 -->
<link rel="stylesheet" href="@water-ui/themes/themes/light">

<!-- 深色主题 -->
<link rel="stylesheet" href="@water-ui/themes/themes/dark">

<!-- 像素主题 -->
<link rel="stylesheet" href="@water-ui/themes/themes/pixel">
```

### 方法三：在HTML中直接应用

```html
<!-- 应用浅色主题 -->
<html data-theme="light">
  <!-- 或者 -->
<html class="light">

<!-- 应用深色主题 -->
<html data-theme="dark">
  <!-- 或者 -->
<html class="dark">

<!-- 应用像素主题 -->
<html data-theme="pixel">
  <!-- 或者 -->
<html class="pixel">
```

## 主题管理器API

### ThemeManager 类

```javascript
import { ThemeManager } from '@water-ui/themes';

const themeManager = ThemeManager.getInstance();

// 设置主题
await themeManager.setTheme('pixel');

// 获取当前主题
const theme = themeManager.getTheme();

// 切换主题
await themeManager.toggleTheme();

// 预加载所有主题
await themeManager.preloadAllThemes();

// 获取CSS变量值
const primaryColor = themeManager.getCSSVariable('--ew-color-primary');

// 设置CSS变量值
themeManager.setCSSVariable('--ew-color-primary', '#ff0000');
```

## 事件监听

```javascript
// 监听主题变化事件
window.addEventListener('ew-theme-change', (event) => {
  console.log('Theme changed to:', event.detail.theme);
});
```

## 主题特性

### Light Theme
- 🌊 流水风格设计
- 🎨 清新的蓝色主色调
- ✨ 渐变和波纹效果
- 🌟 现代化的视觉体验

### Dark Theme
- 🌊 深色流水风格
- 🌙 适合夜间使用
- 🎨 高对比度设计
- ✨ 保持流水特性

### Pixel Theme
- 🎮 复古游戏风格
- 🖼️ 像素化视觉效果
- 🎨 高对比度像素色彩
- ⚡ 步进动画效果

## 构建

```bash
# 构建所有文件
npm run build

# 只构建主题CSS文件
npm run build:themes
```

## 文件结构

```
dist/
├── index.js              # CommonJS 格式
├── index.esm.js          # ES Module 格式
├── index.d.ts            # TypeScript 声明文件
└── themes/
    ├── theme-light.css   # 浅色主题
    ├── theme-dark.css    # 深色主题
    └── theme-pixel.css   # 像素主题
```

## 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 注意事项

1. 主题切换是异步操作，需要等待CSS文件加载完成
2. 建议在生产环境中预加载所有主题以提升用户体验
3. 主题管理器会自动保存用户的选择到localStorage
4. 支持系统主题偏好检测（prefers-color-scheme） 
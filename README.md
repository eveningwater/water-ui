# Water UI

一个基于原生 Web Components 的跨框架组件库，提供现代化的 UI 组件和工具函数。

## 特性

- 🚀 **原生 Web Components** - 基于标准 Web Components 技术，无需框架依赖
- 🎨 **跨框架兼容** - 可在 React、Vue、Angular 等任何框架中使用
- 🎯 **TypeScript 支持** - 完整的 TypeScript 类型定义
- 📦 **模块化架构** - 多包 monorepo 结构，按需引入
- 🧪 **完整测试** - 全面的单元测试覆盖
- 🎨 **主题系统** - 支持默认和暗色主题
- 🔧 **工具函数** - 丰富的工具函数库

## 安装

```bash
# 安装核心组件库
npm install @water-ui/core

# 安装工具函数
npm install @water-ui/utils

# 安装图标库
npm install @water-ui/icons

# 安装主题
npm install @water-ui/themes
```

## 快速开始

### 1. 引入组件

```html
<!DOCTYPE html>
<html>
<head>
  <script type="module">
    import '@water-ui/core';
  </script>
</head>
<body>
  <ew-button type="primary">点击我</ew-button>
  <ew-input placeholder="请输入内容"></ew-input>
  <ew-modal title="标题" model-value="false">
    <p>这是弹框内容</p>
  </ew-modal>
</body>
</html>
```

### 2. 使用主题

```html
<head>
  <link rel="stylesheet" href="@water-ui/themes/dist/default.css">
  <!-- 或者使用暗色主题 -->
  <link rel="stylesheet" href="@water-ui/themes/dist/dark.css">
</head>
```

### 3. 使用工具函数

```javascript
import { debounce, throttle, deepClone } from '@water-ui/utils';

// 防抖
const debouncedFn = debounce(() => {
  console.log('防抖执行');
}, 300);

// 节流
const throttledFn = throttle(() => {
  console.log('节流执行');
}, 300);

// 深拷贝
const cloned = deepClone(originalObject);
```

## 组件列表

### 基础组件

- `ew-button` - 按钮组件
- `ew-input` - 输入框组件
- `ew-modal` - 弹框组件
- `ew-table` - 表格组件

### 属性支持

每个组件都支持丰富的属性配置：

```html
<!-- 按钮组件 -->
<ew-button 
  type="primary" 
  size="large" 
  disabled 
  loading>
  加载中
</ew-button>

<!-- 输入框组件 -->
<ew-input 
  type="password" 
  placeholder="请输入密码"
  clearable 
  show-password>
</ew-input>

<!-- 弹框组件 -->
<ew-modal 
  title="确认操作"
  model-value="true"
  show-close
  show-cancel-button
  show-confirm-button>
  <p>确定要执行此操作吗？</p>
</ew-modal>
```

## 开发

### 环境要求

- Node.js >= 16
- pnpm >= 7

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
# 启动所有包的开发模式
pnpm dev

# 启动特定包的开发模式
pnpm --filter @water-ui/core dev
```

### 构建

```bash
# 构建所有包
pnpm build

# 构建特定包
pnpm --filter @water-ui/core build
```

### 测试

```bash
# 运行所有测试
pnpm test

# 运行特定包的测试
pnpm --filter @water-ui/core test
```

## 项目结构

```
water-ui/
├── packages/
│   ├── core/           # 核心组件库
│   ├── utils/          # 工具函数库
│   ├── icons/          # 图标库
│   └── themes/         # 主题包
├── examples/           # 示例文件
├── docs/              # 文档
└── tests/             # 测试文件
```

## 贡献

欢迎提交 Issue 和 Pull Request！

### 开发流程

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

## 许可证

MIT License

## 相关链接

- [GitHub 仓库](https://github.com/eveningwater/water-ui)
- [在线文档](https://water-ui.vercel.app)
- [组件演示](https://water-ui.vercel.app/examples) 
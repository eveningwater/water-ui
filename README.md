# Water UI

基于原生Web Components的现代化UI组件库

## 特性

- 🎨 **原生Web Components** - 无需框架依赖，可在任意框架中使用
- 🎯 **丰富的组件** - 包含Button、Input、Table、Modal等常用组件
- 🎨 **主题系统** - 支持CSS变量自定义主题
- 📦 **多包架构** - 组件、工具函数、图标等分包管理
- 🧪 **完善测试** - 单元测试覆盖
- 📚 **详细文档** - 完整的API文档和示例
- 🚀 **现代化构建** - 基于Vite的快速构建

## 快速开始

### 安装

```bash
npm install @water-ui/core
```

### 使用

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://unpkg.com/@water-ui/core/dist/style.css">
</head>
<body>
  <w-button type="primary">点击我</w-button>
  <w-input placeholder="请输入内容"></w-input>
  
  <script type="module">
    import '@water-ui/core/dist/index.js';
  </script>
</body>
</html>
```

## 开发

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 构建
pnpm build

# 运行测试
pnpm test

# 启动文档站点
pnpm docs:dev
```

## 项目结构

```
water-ui/
├── packages/
│   ├── core/           # 核心组件
│   ├── icons/          # 图标包
│   ├── utils/          # 工具函数
│   ├── themes/         # 主题包
│   ├── docs/           # 文档站点
│   └── storybook/      # Storybook
├── examples/           # 示例项目
└── tests/             # 测试文件
```

## 浏览器支持

- Chrome 67+
- Firefox 63+
- Safari 10.1+
- Edge 79+

## 许可证

MIT 
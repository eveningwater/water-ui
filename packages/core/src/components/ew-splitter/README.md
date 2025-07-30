# EW Splitter 分割面板组件

EW Splitter 是一个功能强大的分割面板组件，支持水平/垂直分割、面板折叠、拖拽调整大小等功能。

## 功能特性

- ✅ 水平/垂直分割布局
- ✅ 拖拽调整面板大小
- ✅ 面板折叠/展开功能
- ✅ 最小/最大尺寸限制
- ✅ 禁用拖拽功能
- ✅ 响应式设计
- ✅ 暗色主题支持
- ✅ 触摸设备支持
- ✅ 事件监听

## 基础用法

### 水平分割（默认）

```html
<ew-splitter>
  <ew-splitter-pane size="30%">
    左侧面板内容
  </ew-splitter-pane>
  <ew-splitter-pane size="70%">
    右侧面板内容
  </ew-splitter-pane>
</ew-splitter>
```

### 垂直分割

```html
<ew-splitter layout="vertical">
  <ew-splitter-pane size="40%">
    顶部面板内容
  </ew-splitter-pane>
  <ew-splitter-pane size="60%">
    底部面板内容
  </ew-splitter-pane>
</ew-splitter>
```

### 可折叠面板

```html
<ew-splitter>
  <ew-splitter-pane size="25%" collapsible>
    可折叠面板内容
  </ew-splitter-pane>
  <ew-splitter-pane size="75%">
    主内容区域
  </ew-splitter-pane>
</ew-splitter>
```

### 禁用拖拽

```html
<ew-splitter disabled>
  <ew-splitter-pane size="50%">
    固定面板内容
  </ew-splitter-pane>
</ew-splitter>
```

## API 参考

### EwSplitter 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `layout` | `'horizontal' \| 'vertical'` | `'horizontal'` | 分割方向 |
| `disabled` | `boolean` | `false` | 是否禁用拖拽 |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | 调整器尺寸 |

### EwSplitterPane 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `size` | `string \| number` | - | 面板大小（百分比或像素） |
| `min` | `string \| number` | `'50'` | 最小尺寸 |
| `max` | `string \| number` | - | 最大尺寸 |
| `resizable` | `boolean` | `true` | 是否可调整大小 |
| `collapsible` | `boolean` | `false` | 是否可折叠 |

### 事件

#### EwSplitter 事件

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| `resize` | 面板大小变化时触发 | `{ sizes: number[] }` |

#### EwSplitterPane 事件

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| `collapse` | 面板折叠时触发 | `{ collapsed: boolean }` |
| `expand` | 面板展开时触发 | `{ collapsed: boolean }` |

### 方法

#### EwSplitterPane 方法

| 方法名 | 说明 | 参数 |
|--------|------|------|
| `collapsePane()` | 折叠面板 | - |
| `expandPane()` | 展开面板 | - |
| `isCollapsedState()` | 获取折叠状态 | - |
| `setSize(size: string)` | 设置面板大小 | `size: string` |
| `getSize()` | 获取面板大小 | - |

## 使用示例

### 基础示例

```html
<!DOCTYPE html>
<html>
<head>
  <title>EW Splitter 示例</title>
</head>
<body>
  <ew-splitter>
    <ew-splitter-pane size="30%">
      <div style="padding: 20px;">
        <h3>左侧面板</h3>
        <p>这是左侧面板的内容</p>
      </div>
    </ew-splitter-pane>
    <ew-splitter-pane size="70%">
      <div style="padding: 20px;">
        <h3>右侧面板</h3>
        <p>这是右侧面板的内容</p>
      </div>
    </ew-splitter-pane>
  </ew-splitter>

  <script type="module">
    import '@water-ui/core/components/ew-splitter';
    import '@water-ui/core/components/ew-splitter-pane';
  </script>
</body>
</html>
```

### 事件监听示例

```javascript
const splitter = document.querySelector('ew-splitter');
const pane = document.querySelector('ew-splitter-pane');

// 监听面板大小变化
splitter.addEventListener('resize', (event) => {
  console.log('面板大小变化:', event.detail.sizes);
});

// 监听面板折叠/展开
pane.addEventListener('collapse', (event) => {
  console.log('面板折叠:', event.detail.collapsed);
});

pane.addEventListener('expand', (event) => {
  console.log('面板展开:', event.detail.collapsed);
});
```

### 编程控制示例

```javascript
const pane = document.querySelector('ew-splitter-pane[collapsible]');

// 折叠面板
pane.collapsePane();

// 展开面板
pane.expandPane();

// 检查折叠状态
if (pane.isCollapsedState()) {
  console.log('面板已折叠');
}

// 设置面板大小
pane.setSize('40%');

// 获取面板大小
const size = pane.getSize();
console.log('当前大小:', size);
```

## 样式定制

组件使用 CSS 自定义属性，可以通过以下变量进行样式定制：

```css
:root {
  /* 基础颜色 */
  --ew-color-primary: #0ea5e9;
  --ew-color-primary-light: #38bdf8;
  --ew-color-primary-dark: #0284c7;
  
  /* 背景颜色 */
  --ew-bg-color: #ffffff;
  --ew-bg-color-dark: #1e293b;
  
  /* 边框颜色 */
  --ew-border-color: #e2e8f0;
  --ew-border-color-dark: #475569;
  
  /* 圆角 */
  --ew-border-radius: 8px;
  
  /* 过渡动画 */
  --ew-transition: 200ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

## 响应式设计

组件支持响应式设计，在移动设备上会自动调整布局：

- 屏幕宽度小于 768px 时，水平分割会自动切换为垂直分割
- 调整器尺寸会根据屏幕大小自动调整
- 触摸设备支持触摸拖拽操作

## 浏览器兼容性

- Chrome 67+
- Firefox 63+
- Safari 11.1+
- Edge 79+

## 注意事项

1. 组件需要至少两个 `ew-splitter-pane` 子元素才能正常工作
2. 面板大小支持百分比和像素值，建议使用百分比以获得更好的响应式效果
3. 折叠功能需要设置 `collapsible` 属性
4. 最小尺寸限制可以防止面板被压缩得太小
5. 组件会自动处理触摸事件，无需额外配置 
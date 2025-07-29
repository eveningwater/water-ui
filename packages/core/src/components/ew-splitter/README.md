# EW Splitter 分割面板组件

`ew-splitter` 是一个可拖拽调整大小的分割面板组件，支持水平和垂直布局，可以创建多个可调整大小的面板区域。

## 基本用法

### 水平分割

```html
<ew-splitter>
  <ew-splitter-pane size="30%">
    <div>左侧面板</div>
  </ew-splitter-pane>
  <ew-splitter-pane size="70%">
    <div>右侧面板</div>
  </ew-splitter-pane>
</ew-splitter>
```

### 垂直分割

```html
<ew-splitter layout="vertical">
  <ew-splitter-pane size="40%">
    <div>顶部面板</div>
  </ew-splitter-pane>
  <ew-splitter-pane size="60%">
    <div>底部面板</div>
  </ew-splitter-pane>
</ew-splitter>
```

## API

### ew-splitter 属性

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| layout | 分割方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |

### ew-splitter-pane 属性

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| size | 面板尺寸 | `string \| number` | - |
| min | 最小尺寸 | `string \| number` | - |
| max | 最大尺寸 | `string \| number` | - |
| resizable | 是否可调整大小 | `boolean` | `true` |
| collapsible | 是否可折叠 | `boolean` | `false` |

### ew-splitter 事件

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| resize-start | 开始调整大小时触发 | `{ index: number }` |
| resize | 调整大小时触发 | `{ index: number, sizes: number[] }` |
| resize-end | 结束调整大小时触发 | `{ index: number }` |

### ew-splitter-pane 事件

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:size | 尺寸更新时触发 | `{ size: number }` |

### ew-splitter 方法

| 方法名 | 说明 | 参数 |
|--------|------|------|
| setLayout | 设置布局方向 | `layout: 'horizontal' \| 'vertical'` |
| getLayout | 获取布局方向 | - |

### ew-splitter-pane 方法

| 方法名 | 说明 | 参数 |
|--------|------|------|
| setSize | 设置面板尺寸 | `size: string \| number` |
| getSize | 获取面板尺寸 | - |
| setMin | 设置最小尺寸 | `min: string \| number` |
| getMin | 获取最小尺寸 | - |
| setMax | 设置最大尺寸 | `max: string \| number` |
| getMax | 获取最大尺寸 | - |
| setResizable | 设置是否可调整大小 | `resizable: boolean` |
| isResizable | 获取是否可调整大小 | - |
| setCollapsible | 设置是否可折叠 | `collapsible: boolean` |
| isCollapsible | 获取是否可折叠 | - |

## 插槽

### ew-splitter-pane 插槽

| 插槽名 | 说明 |
|--------|------|
| default | 面板内容 |
| start-collapsible | 开始折叠按钮（仅在 collapsible 为 true 时可用） |
| end-collapsible | 结束折叠按钮（仅在 collapsible 为 true 时可用） |

## 使用示例

### 基础用法

```html
<ew-splitter>
  <ew-splitter-pane size="25%">
    <div>导航面板</div>
  </ew-splitter-pane>
  <ew-splitter-pane size="50%">
    <div>主内容区域</div>
  </ew-splitter-pane>
  <ew-splitter-pane size="25%">
    <div>侧边栏</div>
  </ew-splitter-pane>
</ew-splitter>
```

### 尺寸限制

```html
<ew-splitter>
  <ew-splitter-pane size="30%" min="20%" max="50%">
    <div>左侧面板（最小20%，最大50%）</div>
  </ew-splitter-pane>
  <ew-splitter-pane size="70%" min="30%" max="80%">
    <div>右侧面板（最小30%，最大80%）</div>
  </ew-splitter-pane>
</ew-splitter>
```

### 可折叠面板

```html
<ew-splitter>
  <ew-splitter-pane size="30%" collapsible>
    <div>可折叠面板</div>
    <button slot="start-collapsible">◀</button>
    <button slot="end-collapsible">▶</button>
  </ew-splitter-pane>
  <ew-splitter-pane size="70%">
    <div>主内容区域</div>
  </ew-splitter-pane>
</ew-splitter>
```

### 事件监听

```javascript
const splitter = document.querySelector('ew-splitter');
const pane = document.querySelector('ew-splitter-pane');

// 监听分割面板事件
splitter.addEventListener('resize-start', (e) => {
  console.log('开始调整大小:', e.detail.index);
});

splitter.addEventListener('resize', (e) => {
  console.log('调整大小:', e.detail.index, e.detail.sizes);
});

splitter.addEventListener('resize-end', (e) => {
  console.log('结束调整大小:', e.detail.index);
});

// 监听面板尺寸变化
pane.addEventListener('update:size', (e) => {
  console.log('面板尺寸更新:', e.detail.size);
});
```

### 编程式控制

```javascript
const splitter = document.querySelector('ew-splitter');
const pane = document.querySelector('ew-splitter-pane');

// 设置布局
splitter.setLayout('vertical');

// 设置面板尺寸
pane.setSize('40%');

// 设置尺寸限制
pane.setMin('20%');
pane.setMax('60%');

// 设置是否可调整大小
pane.setResizable(false);

// 设置是否可折叠
pane.setCollapsible(true);
```

## 注意事项

1. **尺寸单位**: 支持百分比（%）和像素（px）单位，建议使用百分比以获得更好的响应式效果。

2. **最小面板数量**: 至少需要两个 `ew-splitter-pane` 子元素才能正常工作。

3. **尺寸限制**: 设置 `min` 和 `max` 属性可以防止面板被调整得过小或过大。

4. **可折叠功能**: 当 `collapsible` 为 `true` 时，可以通过 `start-collapsible` 和 `end-collapsible` 插槽自定义折叠按钮。

5. **事件处理**: 在拖拽过程中会触发多个事件，建议在 `resize` 事件中进行实时更新，在 `resize-end` 事件中进行最终处理。

6. **样式定制**: 可以通过 CSS 变量自定义分割条的样式：
   ```css
   :root {
     --ew-splitter-divider-bg-color: #e4e7ed;
     --ew-splitter-divider-hover-bg-color: #c0c4cc;
     --ew-splitter-divider-active-bg-color: #909399;
   }
   ```

## 浏览器兼容性

- Chrome 67+
- Firefox 63+
- Safari 11.1+
- Edge 79+

支持现代浏览器的 Web Components 标准。 
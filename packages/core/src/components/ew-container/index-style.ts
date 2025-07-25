export const containerStyles = `
  /* 容器基础样式 */
  .ew-container {
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-basis: auto;
    box-sizing: border-box;
    min-width: 0;
  }

  .ew-container--vertical {
    flex-direction: column;
  }

  /* 头部组件样式 */
  .ew-header {
    padding: var(--ew-header-padding, 0 20px);
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: var(--ew-header-bg-color, #ffffff);
    border-bottom: 1px solid var(--ew-border-color, #e4e7ed);
    height: var(--ew-header-height, 60px);
    line-height: var(--ew-header-height, 60px);
    font-size: var(--ew-header-font-size, 14px);
    color: var(--ew-text-color, #303133);
  }

  /* 侧边栏组件样式 */
  .ew-aside {
    overflow: auto;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: var(--ew-aside-bg-color, #ffffff);
    border-right: 1px solid var(--ew-border-color, #e4e7ed);
    width: var(--ew-aside-width, 200px);
  }

  /* 主内容区组件样式 */
  .ew-main {
    display: block;
    flex: 1;
    flex-basis: auto;
    overflow: auto;
    box-sizing: border-box;
    padding: var(--ew-main-padding, 20px);
    background-color: var(--ew-main-bg-color, #ffffff);
  }

  /* 底部组件样式 */
  .ew-footer {
    padding: var(--ew-footer-padding, 0 20px);
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: var(--ew-footer-bg-color, #ffffff);
    border-top: 1px solid var(--ew-border-color, #e4e7ed);
    height: var(--ew-footer-height, 60px);
    line-height: var(--ew-footer-height, 60px);
    font-size: var(--ew-footer-font-size, 14px);
    color: var(--ew-text-color, #303133);
  }

  /* 暗色主题支持 */
  @media (prefers-color-scheme: dark) {
    .ew-header {
      background-color: var(--ew-header-bg-color-dark, #1f2937);
      border-bottom-color: var(--ew-border-color-dark, #374151);
      color: var(--ew-text-color-dark, #f9fafb);
    }

    .ew-aside {
      background-color: var(--ew-aside-bg-color-dark, #1f2937);
      border-right-color: var(--ew-border-color-dark, #374151);
    }

    .ew-main {
      background-color: var(--ew-main-bg-color-dark, #1f2937);
      color: var(--ew-text-color-dark, #f9fafb);
    }

    .ew-footer {
      background-color: var(--ew-footer-bg-color-dark, #1f2937);
      border-top-color: var(--ew-border-color-dark, #374151);
      color: var(--ew-text-color-dark, #f9fafb);
    }
  }

  /* 响应式设计 */
  @media (max-width: 768px) {
    .ew-container {
      flex-direction: column;
    }

    .ew-aside {
      width: 100%;
      border-right: none;
      border-bottom: 1px solid var(--ew-border-color, #e4e7ed);
    }

    .ew-header,
    .ew-footer {
      padding: 0 15px;
    }

    .ew-main {
      padding: 15px;
    }
  }
`; 
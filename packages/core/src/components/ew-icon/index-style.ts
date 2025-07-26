export const iconStyles = `
  /* Icon 基础样式 */
  .ew-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1em;
    height: 1em;
    font-size: inherit;
    color: inherit;
    fill: currentColor;
    stroke: currentColor;
    stroke-width: 0;
    vertical-align: middle;
  }

  /* 图标尺寸变体 */
  .ew-icon--small {
    font-size: var(--ew-font-size-small);
  }

  .ew-icon--large {
    font-size: var(--ew-font-size-large);
  }

  /* 图标颜色变体 */
  .ew-icon--primary {
    color: var(--ew-color-primary);
  }

  .ew-icon--success {
    color: var(--ew-color-success);
  }

  .ew-icon--warning {
    color: var(--ew-color-warning);
  }

  .ew-icon--danger {
    color: var(--ew-color-danger);
  }

  .ew-icon--info {
    color: var(--ew-color-info);
  }

  /* 图标动画 */
  .ew-icon--loading {
    animation: ew-icon-spin 1s linear infinite;
  }

  @keyframes ew-icon-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  /* 插槽内容样式 */
  ::slotted(*) {
    width: 1em;
    height: 1em;
    fill: currentColor;
    stroke: currentColor;
    stroke-width: 0;
    vertical-align: middle;
  }

  ::slotted(svg) {
    width: 1em;
    height: 1em;
    fill: currentColor;
    stroke: currentColor;
    stroke-width: 0;
    vertical-align: middle;
  }

  /* 暗色主题支持 */
  @media (prefers-color-scheme: dark) {
    .ew-icon {
      color: var(--ew-text-color-dark, var(--ew-text-color));
    }
  }
`; 
export const spaceItemStyles = `
  /* SpaceItem 基础样式 */
  :host {
    display: inline-block;
    box-sizing: border-box;
  }

  .ew-space-item {
    display: inline-block;
    box-sizing: border-box;
  }

  /* 方向样式 */
  .ew-space-item--horizontal {
    margin-right: var(--ew-space-gap, 12px);
  }

  .ew-space-item--horizontal:last-child {
    margin-right: 0;
  }

  .ew-space-item--vertical {
    margin-bottom: var(--ew-space-gap, 12px);
  }

  .ew-space-item--vertical:last-child {
    margin-bottom: 0;
  }

  /* 自定义间距 */
  .ew-space-item--custom {
    margin-right: var(--ew-space-gap-x, 12px);
    margin-bottom: var(--ew-space-gap-y, 12px);
  }

  .ew-space-item--custom:last-child {
    margin-right: 0;
    margin-bottom: 0;
  }

  /* 填充样式 */
  .ew-space-item--fill {
    flex: 1;
  }

  /* 响应式间距 */
  @media (max-width: 767px) {
    .ew-space-item--horizontal {
      margin-right: var(--ew-space-gap-mobile, 8px);
    }
    
    .ew-space-item--vertical {
      margin-bottom: var(--ew-space-gap-mobile, 8px);
    }
  }

  /* 暗色主题 */
  :host([data-theme="dark"]) .ew-space-item {
    color: var(--ew-color-text-primary-dark, #e5e7eb);
  }
`; 
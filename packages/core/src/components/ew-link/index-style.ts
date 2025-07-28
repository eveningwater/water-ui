export const linkStyles = `
  /* Link 基础样式 */
  .ew-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    font-size: var(--ew-font-size-base);
    font-weight: 500;
    color: var(--ew-link-color, var(--ew-color-primary));
    background: transparent;
    border: none;
    transition: var(--ew-transition);
    text-decoration: none;
  }

  .ew-link:hover {
    color: var(--ew-link-hover-color, var(--ew-color-primary-hover));
  }

  .ew-link:active {
    color: var(--ew-link-active-color, var(--ew-color-primary-active));
  }

  .ew-link:focus {
    outline: 2px solid var(--ew-color-primary);
    outline-offset: 2px;
    border-radius: var(--ew-border-radius-small);
  }

  /* 链接类型样式 */
  .ew-link--primary {
    color: var(--ew-color-primary);
  }

  .ew-link--primary:hover {
    color: var(--ew-color-primary-hover);
  }

  .ew-link--primary:active {
    color: var(--ew-color-primary-active);
  }

  .ew-link--success {
    color: var(--ew-color-success);
  }

  .ew-link--success:hover {
    color: var(--ew-color-success-hover);
  }

  .ew-link--success:active {
    color: var(--ew-color-success-active);
  }

  .ew-link--warning {
    color: var(--ew-color-warning);
  }

  .ew-link--warning:hover {
    color: var(--ew-color-warning-hover);
  }

  .ew-link--warning:active {
    color: var(--ew-color-warning-active);
  }

  .ew-link--danger {
    color: var(--ew-color-danger);
  }

  .ew-link--danger:hover {
    color: var(--ew-color-danger-hover);
  }

  .ew-link--danger:active {
    color: var(--ew-color-danger-active);
  }

  .ew-link--info {
    color: var(--ew-color-info);
  }

  .ew-link--info:hover {
    color: var(--ew-color-info-hover);
  }

  .ew-link--info:active {
    color: var(--ew-color-info-active);
  }

  /* 下划线样式 */
  .ew-link--underline {
    text-decoration: underline;
  }

  .ew-link--underline:hover {
    text-decoration: none;
  }

  /* 禁用状态 */
  .ew-link--disabled {
    color: var(--ew-text-color-disabled);
    cursor: not-allowed;
    pointer-events: none;
  }

  .ew-link--disabled:hover {
    color: var(--ew-text-color-disabled);
  }

  .ew-link--disabled:active {
    color: var(--ew-text-color-disabled);
  }

  .ew-link--disabled:focus {
    outline: none;
  }

  /* 插槽内容样式 */
  ::slotted(*) {
    display: inline-flex;
    align-items: center;
    vertical-align: baseline;
  }

  ::slotted(ew-icon) {
    margin-right: var(--ew-spacing-1);
    flex-shrink: 0;
  }

  ::slotted(ew-icon:last-child) {
    margin-right: 0;
    margin-left: var(--ew-spacing-1);
  }

  /* 外部链接图标 */
  .ew-link__external {
    margin-left: var(--ew-spacing-1);
    font-size: var(--ew-font-size-small);
  }

  /* 尺寸变体 */
  .ew-link--small {
    font-size: var(--ew-font-size-small);
  }

  .ew-link--large {
    font-size: var(--ew-font-size-large);
  }

  /* 按钮样式变体 */
  .ew-link--button {
    padding: var(--ew-button-padding-y) var(--ew-button-padding-x);
    border-radius: var(--ew-button-border-radius);
    background: transparent;
    border: 1px solid transparent;
  }

  .ew-link--button:hover {
    background: var(--ew-bg-color-hover);
    border-color: var(--ew-border-color);
  }

  .ew-link--button:active {
    background: var(--ew-bg-color-active);
  }

  /* 暗色主题支持 */
  @media (prefers-color-scheme: dark) {
    .ew-link {
      color: var(--ew-link-color-dark, var(--ew-color-primary));
    }

    .ew-link:hover {
      color: var(--ew-link-hover-color-dark, var(--ew-color-primary-hover));
    }

    .ew-link:active {
      color: var(--ew-link-active-color-dark, var(--ew-color-primary-active));
    }

    .ew-link--disabled {
      color: var(--ew-text-color-disabled-dark, var(--ew-text-color-disabled));
    }

    .ew-link--button:hover {
      background: var(--ew-bg-color-hover-dark, var(--ew-bg-color-hover));
      border-color: var(--ew-border-color-dark, var(--ew-border-color));
    }

    .ew-link--button:active {
      background: var(--ew-bg-color-active-dark, var(--ew-bg-color-active));
    }
  }
`; 
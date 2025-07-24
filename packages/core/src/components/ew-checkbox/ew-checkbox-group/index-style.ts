export const checkboxGroupStyles = `
  .ew-checkbox-group {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 12px;
    font-family: var(--ew-font-family, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif);
    font-size: var(--ew-font-size-base, 14px);
    line-height: var(--ew-line-height-normal, 1.5);
    position: relative;
    padding: 4px;
    border-radius: var(--ew-border-radius, 8px);
    background: linear-gradient(135deg, rgba(14, 165, 233, 0.02) 0%, rgba(56, 189, 248, 0.02) 100%);
  }

  .ew-checkbox-group::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: var(--ew-border-radius, 8px);
    background: linear-gradient(135deg, rgba(14, 165, 233, 0.05) 0%, rgba(56, 189, 248, 0.05) 100%);
    opacity: 0;
    transition: opacity var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
    pointer-events: none;
  }

  .ew-checkbox-group:hover::before {
    opacity: 1;
  }

  .ew-checkbox-group--vertical {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .ew-checkbox-group--disabled {
    opacity: 0.6;
    pointer-events: none;
  }

  .ew-checkbox-group--disabled::before {
    display: none;
  }

  .ew-checkbox-group--small {
    gap: 8px;
    padding: 2px;
  }

  .ew-checkbox-group--large {
    gap: 16px;
    padding: 6px;
  }

  /* 按钮组样式 */
  .ew-checkbox-group--button {
    gap: 0;
    padding: 0;
    background: none;
  }

  .ew-checkbox-group--button::before {
    display: none;
  }

  .ew-checkbox-group--button .ew-checkbox,
  .ew-checkbox-group--button .ew-checkbox-button {
    margin: 0;
  }

  .ew-checkbox-group--button .ew-checkbox:not(:last-child) .ew-checkbox__label,
  .ew-checkbox-group--button .ew-checkbox-button:not(:last-child) .ew-checkbox-button__inner {
    border-right: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .ew-checkbox-group--button .ew-checkbox:not(:first-child) .ew-checkbox__label,
  .ew-checkbox-group--button .ew-checkbox-button:not(:first-child) .ew-checkbox-button__inner {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .ew-checkbox-group--button .ew-checkbox:first-child .ew-checkbox__label,
  .ew-checkbox-group--button .ew-checkbox-button:first-child .ew-checkbox-button__inner {
    border-top-left-radius: var(--ew-border-radius, 8px);
    border-bottom-left-radius: var(--ew-border-radius, 8px);
  }

  .ew-checkbox-group--button .ew-checkbox:last-child .ew-checkbox__label,
  .ew-checkbox-group--button .ew-checkbox-button:last-child .ew-checkbox-button__inner {
    border-top-right-radius: var(--ew-border-radius, 8px);
    border-bottom-right-radius: var(--ew-border-radius, 8px);
  }

  /* 流水波纹效果 */
  .ew-checkbox-group::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1), height 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
    z-index: -1;
  }

  .ew-checkbox-group:focus-within::after {
    width: 200px;
    height: 200px;
  }

  /* 暗色主题 */
  [data-theme="dark"] .ew-checkbox-group,
  .dark .ew-checkbox-group {
    color: var(--ew-text-color-dark, #e2e8f0);
    background: linear-gradient(135deg, rgba(56, 189, 248, 0.05) 0%, rgba(125, 211, 252, 0.05) 100%);
  }

  [data-theme="dark"] .ew-checkbox-group::before,
  .dark .ew-checkbox-group::before {
    background: linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(125, 211, 252, 0.1) 100%);
  }

  [data-theme="dark"] .ew-checkbox-group::after,
  .dark .ew-checkbox-group::after {
    background: radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%);
  }
`; 
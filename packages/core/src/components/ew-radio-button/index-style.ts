export const radioButtonStyles = `
  .ew-radio-button {
    position: relative;
    display: inline-block;
    font-family: var(--ew-font-family, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
    font-size: var(--ew-font-size-base, 14px);
    line-height: var(--ew-line-height-base, 1.5);
  }

  .ew-radio-button__input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  .ew-radio-button__inner {
    display: inline-block;
    padding: 8px 16px;
    border: 1px solid var(--ew-border-color, #d1d5db);
    border-radius: var(--ew-border-radius, 6px);
    background: var(--ew-bg-color, #ffffff);
    color: var(--ew-text-color, #374151);
    cursor: pointer;
    transition: all var(--ew-transition, 200ms ease-in-out);
    user-select: none;
    text-align: center;
    white-space: nowrap;
    box-sizing: border-box;
  }

  .ew-radio-button__input:checked + .ew-radio-button__inner {
    background: var(--ew-color-primary, #3b82f6);
    border-color: var(--ew-color-primary, #3b82f6);
    color: var(--ew-bg-color, #ffffff);
    box-shadow: 0 2px 4px rgba(59, 130, 246, 0.2);
  }

  .ew-radio-button__input:focus + .ew-radio-button__inner {
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  .ew-radio-button__inner:hover {
    border-color: var(--ew-color-primary-light, #60a5fa);
  }

  .ew-radio-button--disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  .ew-radio-button--disabled .ew-radio-button__inner {
    cursor: not-allowed;
    background: var(--ew-bg-color-disabled, #f3f4f6);
    border-color: var(--ew-border-color-disabled, #e5e7eb);
    color: var(--ew-text-color-disabled, #9ca3af);
  }

  .ew-radio-button--disabled .ew-radio-button__input:checked + .ew-radio-button__inner {
    background: var(--ew-color-primary-disabled, #93c5fd);
    border-color: var(--ew-color-primary-disabled, #93c5fd);
    color: var(--ew-bg-color, #ffffff);
  }

  /* 尺寸变体 */
  .ew-radio-button--small .ew-radio-button__inner {
    padding: 6px 12px;
    font-size: 12px;
  }

  .ew-radio-button--large .ew-radio-button__inner {
    padding: 12px 20px;
    font-size: 16px;
  }

  /* 边框样式 */
  .ew-radio-button--border .ew-radio-button__inner {
    border-width: 2px;
  }

  /* 按钮组样式 */
  .ew-radio-button-group {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 0;
  }

  .ew-radio-button-group .ew-radio-button:not(:last-child) .ew-radio-button__inner {
    border-right: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .ew-radio-button-group .ew-radio-button:not(:first-child) .ew-radio-button__inner {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .ew-radio-button-group .ew-radio-button:first-child .ew-radio-button__inner {
    border-top-left-radius: var(--ew-border-radius, 6px);
    border-bottom-left-radius: var(--ew-border-radius, 6px);
  }

  .ew-radio-button-group .ew-radio-button:last-child .ew-radio-button__inner {
    border-top-right-radius: var(--ew-border-radius, 6px);
    border-bottom-right-radius: var(--ew-border-radius, 6px);
  }

  /* 暗色主题 */
  [data-theme="dark"] .ew-radio-button__inner,
  .dark .ew-radio-button__inner {
    border-color: var(--ew-border-color-dark, #4b5563);
    background: var(--ew-bg-color-dark, #374151);
    color: var(--ew-text-color-dark, #e5e7eb);
  }

  [data-theme="dark"] .ew-radio-button__input:checked + .ew-radio-button__inner,
  .dark .ew-radio-button__input:checked + .ew-radio-button__inner {
    background: var(--ew-color-primary, #3b82f6);
    border-color: var(--ew-color-primary, #3b82f6);
    color: var(--ew-bg-color-dark, #374151);
  }

  [data-theme="dark"] .ew-radio-button--disabled .ew-radio-button__inner,
  .dark .ew-radio-button--disabled .ew-radio-button__inner {
    background: var(--ew-bg-color-disabled-dark, #1f2937);
    border-color: var(--ew-border-color-disabled-dark, #374151);
    color: var(--ew-text-color-disabled-dark, #6b7280);
  }
`; 
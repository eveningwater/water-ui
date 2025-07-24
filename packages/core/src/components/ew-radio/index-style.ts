export const radioStyles = `
  .ew-radio {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    font-family: var(--ew-font-family, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
    font-size: var(--ew-font-size-base, 14px);
    line-height: var(--ew-line-height-base, 1.5);
    color: var(--ew-text-color, #374151);
    user-select: none;
    transition: all var(--ew-transition, 200ms ease-in-out);
  }

  .ew-radio:hover {
    color: var(--ew-color-primary, #3b82f6);
  }

  .ew-radio--disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  .ew-radio--disabled:hover {
    color: var(--ew-text-color, #374151);
  }

  .ew-radio__input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  .ew-radio__inner {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    border: 2px solid var(--ew-border-color, #d1d5db);
    border-radius: 50%;
    background: var(--ew-bg-color, #ffffff);
    transition: all var(--ew-transition, 200ms ease-in-out);
    margin-right: 8px;
    flex-shrink: 0;
  }

  .ew-radio__inner::before {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--ew-color-primary, #3b82f6);
    transform: scale(0);
    transition: transform var(--ew-transition, 200ms ease-in-out);
  }

  .ew-radio__input:checked + .ew-radio__inner {
    border-color: var(--ew-color-primary, #3b82f6);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  .ew-radio__input:checked + .ew-radio__inner::before {
    transform: scale(1);
  }

  .ew-radio__input:focus + .ew-radio__inner {
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }

  .ew-radio__label {
    line-height: 1;
    font-size: inherit;
    color: inherit;
  }

  /* 尺寸变体 */
  .ew-radio--small .ew-radio__inner {
    width: 14px;
    height: 14px;
    border-width: 1.5px;
  }

  .ew-radio--small .ew-radio__inner::before {
    width: 5px;
    height: 5px;
  }

  .ew-radio--large .ew-radio__inner {
    width: 18px;
    height: 18px;
    border-width: 2.5px;
  }

  .ew-radio--large .ew-radio__inner::before {
    width: 7px;
    height: 7px;
  }

  /* 按钮样式 */
  .ew-radio--button {
    position: relative;
  }

  .ew-radio--button .ew-radio__inner {
    display: none;
  }

  .ew-radio--button .ew-radio__label {
    display: inline-block;
    padding: 8px 16px;
    border: 1px solid var(--ew-border-color, #d1d5db);
    border-radius: var(--ew-border-radius, 6px);
    background: var(--ew-bg-color, #ffffff);
    color: var(--ew-text-color, #374151);
    transition: all var(--ew-transition, 200ms ease-in-out);
    cursor: pointer;
    margin-right: 8px;
    margin-bottom: 8px;
  }

  .ew-radio--button .ew-radio__input:checked + .ew-radio__label {
    background: var(--ew-color-primary, #3b82f6);
    border-color: var(--ew-color-primary, #3b82f6);
    color: var(--ew-bg-color, #ffffff);
    box-shadow: 0 2px 4px rgba(59, 130, 246, 0.2);
  }

  .ew-radio--button .ew-radio__input:focus + .ew-radio__label {
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  .ew-radio--button.ew-radio--disabled .ew-radio__label {
    cursor: not-allowed;
    opacity: 0.6;
  }

  /* 边框样式 */
  .ew-radio--border {
    border: 1px solid var(--ew-border-color, #d1d5db);
    border-radius: var(--ew-border-radius, 6px);
    padding: 8px 12px;
    transition: all var(--ew-transition, 200ms ease-in-out);
  }

  .ew-radio--border:hover {
    border-color: var(--ew-color-primary, #3b82f6);
  }

  .ew-radio--border .ew-radio__input:checked + .ew-radio__inner {
    border-color: var(--ew-color-primary, #3b82f6);
  }

  .ew-radio--border.ew-radio--disabled {
    border-color: var(--ew-border-color-disabled, #e5e7eb);
    background: var(--ew-bg-color-disabled, #f3f4f6);
  }

  .ew-radio--border.ew-radio--disabled:hover {
    border-color: var(--ew-border-color-disabled, #e5e7eb);
  }

  /* 暗色主题 */
  [data-theme="dark"] .ew-radio,
  .dark .ew-radio {
    color: var(--ew-text-color-dark, #e5e7eb);
  }

  [data-theme="dark"] .ew-radio__inner,
  .dark .ew-radio__inner {
    border-color: var(--ew-border-color-dark, #4b5563);
    background: var(--ew-bg-color-dark, #374151);
  }

  [data-theme="dark"] .ew-radio__input:checked + .ew-radio__inner,
  .dark .ew-radio__input:checked + .ew-radio__inner {
    border-color: var(--ew-color-primary, #3b82f6);
  }

  [data-theme="dark"] .ew-radio__input:checked + .ew-radio__inner::before,
  .dark .ew-radio__input:checked + .ew-radio__inner::before {
    background: var(--ew-color-primary, #3b82f6);
  }

  [data-theme="dark"] .ew-radio--button .ew-radio__label,
  .dark .ew-radio--button .ew-radio__label {
    border-color: var(--ew-border-color-dark, #4b5563);
    background: var(--ew-bg-color-dark, #374151);
    color: var(--ew-text-color-dark, #e5e7eb);
  }

  [data-theme="dark"] .ew-radio--border,
  .dark .ew-radio--border {
    border-color: var(--ew-border-color-dark, #4b5563);
    background: var(--ew-bg-color-dark, #374151);
  }

  [data-theme="dark"] .ew-radio--border:hover,
  .dark .ew-radio--border:hover {
    border-color: var(--ew-color-primary, #3b82f6);
  }
`; 
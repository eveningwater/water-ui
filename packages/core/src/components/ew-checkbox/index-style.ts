export const checkboxStyles = `
  .ew-checkbox {
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

  .ew-checkbox:hover {
    color: var(--ew-color-primary, #3b82f6);
  }

  .ew-checkbox--disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  .ew-checkbox--disabled:hover {
    color: var(--ew-text-color, #374151);
  }

  .ew-checkbox__input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  .ew-checkbox__inner {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border: 2px solid var(--ew-border-color, #d1d5db);
    border-radius: 4px;
    background: var(--ew-bg-color, #ffffff);
    transition: all var(--ew-transition, 200ms ease-in-out);
    margin-right: 8px;
    flex-shrink: 0;
  }

  .ew-checkbox__inner::before {
    content: '';
    position: absolute;
    width: 6px;
    height: 10px;
    border: 2px solid transparent;
    border-left: 0;
    border-top: 0;
    transform: rotate(45deg) scale(0);
    transition: transform var(--ew-transition, 200ms ease-in-out);
    top: 1px;
    left: 5px;
  }

  .ew-checkbox__input:checked + .ew-checkbox__inner {
    background: var(--ew-color-primary, #3b82f6);
    border-color: var(--ew-color-primary, #3b82f6);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  .ew-checkbox__input:checked + .ew-checkbox__inner::before {
    border-color: var(--ew-bg-color, #ffffff);
    transform: rotate(45deg) scale(1);
  }

  .ew-checkbox__input:indeterminate + .ew-checkbox__inner {
    background: var(--ew-color-primary, #3b82f6);
    border-color: var(--ew-color-primary, #3b82f6);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  .ew-checkbox__input:indeterminate + .ew-checkbox__inner::before {
    content: '';
    width: 8px;
    height: 2px;
    background: var(--ew-bg-color, #ffffff);
    border: none;
    transform: scale(1);
    top: 7px;
    left: 3px;
  }

  .ew-checkbox__input:focus + .ew-checkbox__inner {
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }

  .ew-checkbox__label {
    line-height: 1;
    font-size: inherit;
    color: inherit;
  }

  /* 尺寸变体 */
  .ew-checkbox--small .ew-checkbox__inner {
    width: 14px;
    height: 14px;
    border-width: 1.5px;
  }

  .ew-checkbox--small .ew-checkbox__inner::before {
    width: 4px;
    height: 8px;
    top: 1px;
    left: 4px;
  }

  .ew-checkbox--small .ew-checkbox__input:indeterminate + .ew-checkbox__inner::before {
    width: 6px;
    height: 1.5px;
    top: 5.5px;
    left: 2.5px;
  }

  .ew-checkbox--large .ew-checkbox__inner {
    width: 22px;
    height: 22px;
    border-width: 2.5px;
  }

  .ew-checkbox--large .ew-checkbox__inner::before {
    width: 8px;
    height: 12px;
    top: 1px;
    left: 6px;
  }

  .ew-checkbox--large .ew-checkbox__input:indeterminate + .ew-checkbox__inner::before {
    width: 10px;
    height: 2.5px;
    top: 9px;
    left: 4px;
  }

  /* 按钮样式 */
  .ew-checkbox--button {
    position: relative;
  }

  .ew-checkbox--button .ew-checkbox__inner {
    display: none;
  }

  .ew-checkbox--button .ew-checkbox__label {
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

  .ew-checkbox--button .ew-checkbox__input:checked + .ew-checkbox__label {
    background: var(--ew-color-primary, #3b82f6);
    border-color: var(--ew-color-primary, #3b82f6);
    color: var(--ew-bg-color, #ffffff);
    box-shadow: 0 2px 4px rgba(59, 130, 246, 0.2);
  }

  .ew-checkbox--button .ew-checkbox__input:focus + .ew-checkbox__label {
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  .ew-checkbox--button.ew-checkbox--disabled .ew-checkbox__label {
    cursor: not-allowed;
    opacity: 0.6;
  }

  /* 暗色主题 */
  [data-theme="dark"] .ew-checkbox,
  .dark .ew-checkbox {
    color: var(--ew-text-color-dark, #e5e7eb);
  }

  [data-theme="dark"] .ew-checkbox__inner,
  .dark .ew-checkbox__inner {
    border-color: var(--ew-border-color-dark, #4b5563);
    background: var(--ew-bg-color-dark, #374151);
  }

  [data-theme="dark"] .ew-checkbox__input:checked + .ew-checkbox__inner,
  .dark .ew-checkbox__input:checked + .ew-checkbox__inner {
    background: var(--ew-color-primary, #3b82f6);
    border-color: var(--ew-color-primary, #3b82f6);
  }

  [data-theme="dark"] .ew-checkbox--button .ew-checkbox__label,
  .dark .ew-checkbox--button .ew-checkbox__label {
    border-color: var(--ew-border-color-dark, #4b5563);
    background: var(--ew-bg-color-dark, #374151);
    color: var(--ew-text-color-dark, #e5e7eb);
  }
`; 
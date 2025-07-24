export const inputStyles = `
  .ew-input {
    position: relative;
    display: inline-block;
    width: 100%;
    font-family: var(--ew-font-family);
    font-size: var(--ew-font-size-sm, 14px);
    line-height: 1.5;
  }

  .ew-input__wrapper {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    border: 1px solid var(--ew-border-color, #e5e7eb);
    border-radius: var(--ew-border-radius, 6px);
    background: var(--ew-bg-color, #ffffff);
    transition: all var(--ew-transition, 200ms ease-in-out);
    overflow: hidden;
  }

  .ew-input__wrapper:hover {
    border-color: var(--ew-color-primary-light, #60a5fa);
  }

  .ew-input__wrapper:focus-within {
    border-color: var(--ew-color-primary, #3b82f6);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  .ew-input__inner {
    flex: 1;
    width: 100%;
    padding: var(--ew-spacing-2, 8px) var(--ew-spacing-3, 12px);
    border: none;
    background: transparent;
    color: var(--ew-text-color-regular, #4b5563);
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    outline: none;
    box-sizing: border-box;
    min-height: 36px;
  }

  .ew-input__inner::placeholder {
    color: var(--ew-text-color-placeholder, #9ca3af);
  }

  .ew-input__inner:disabled {
    background: var(--ew-color-gray-50, #f9fafb);
    color: var(--ew-text-color-disabled, #d1d5db);
    cursor: not-allowed;
  }

  /* 前缀和后缀 */
  .ew-input__prefix,
  .ew-input__suffix {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 var(--ew-spacing-2, 8px);
    color: var(--ew-text-color-secondary, #6b7280);
    font-size: var(--ew-font-size-sm, 14px);
    flex-shrink: 0;
  }

  .ew-input__prefix {
    border-right: 1px solid var(--ew-border-color-light, #f3f4f6);
  }

  .ew-input__suffix {
    border-left: 1px solid var(--ew-border-color-light, #f3f4f6);
  }

  /* 清除按钮 */
  .ew-input__clear {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    margin-right: var(--ew-spacing-2, 8px);
    color: var(--ew-text-color-secondary, #6b7280);
    cursor: pointer;
    border-radius: var(--ew-border-radius-sm, 4px);
    transition: all var(--ew-transition-fast, 150ms ease-in-out);
  }

  .ew-input__clear:hover {
    color: var(--ew-text-color-regular, #4b5563);
    background: var(--ew-color-gray-100, #f3f4f6);
  }

  /* 密码切换按钮 */
  .ew-input__password-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    margin-right: var(--ew-spacing-2, 8px);
    color: var(--ew-text-color-secondary, #6b7280);
    cursor: pointer;
    border-radius: var(--ew-border-radius-sm, 4px);
    transition: all var(--ew-transition-fast, 150ms ease-in-out);
  }

  .ew-input__password-toggle:hover {
    color: var(--ew-text-color-regular, #4b5563);
    background: var(--ew-color-gray-100, #f3f4f6);
  }

  /* 禁用状态 */
  .ew-input--disabled .ew-input__wrapper {
    background: var(--ew-color-gray-50, #f9fafb);
    border-color: var(--ew-border-color-light, #f3f4f6);
    cursor: not-allowed;
  }

  .ew-input--disabled .ew-input__wrapper:hover {
    border-color: var(--ew-border-color-light, #f3f4f6);
  }

  .ew-input--disabled .ew-input__clear,
  .ew-input--disabled .ew-input__password-toggle {
    cursor: not-allowed;
    color: var(--ew-text-color-disabled, #d1d5db);
  }

  /* 只读状态 */
  .ew-input--readonly .ew-input__wrapper {
    background: var(--ew-color-gray-50, #f9fafb);
  }

  /* 尺寸变体 */
  .ew-input--small .ew-input__inner {
    padding: var(--ew-spacing-1, 4px) var(--ew-spacing-2, 8px);
    font-size: var(--ew-font-size-xs, 12px);
    min-height: 28px;
  }

  .ew-input--small .ew-input__prefix,
  .ew-input--small .ew-input__suffix {
    font-size: var(--ew-font-size-xs, 12px);
  }

  .ew-input--large .ew-input__inner {
    padding: var(--ew-spacing-3, 12px) var(--ew-spacing-4, 16px);
    font-size: var(--ew-font-size-base, 16px);
    min-height: 44px;
  }

  .ew-input--large .ew-input__prefix,
  .ew-input--large .ew-input__suffix {
    font-size: var(--ew-font-size-base, 16px);
  }

  /* 错误状态 */
  .ew-input--error .ew-input__wrapper {
    border-color: var(--ew-color-danger, #ef4444);
  }

  .ew-input--error .ew-input__wrapper:hover {
    border-color: var(--ew-color-danger, #ef4444);
  }

  .ew-input--error .ew-input__wrapper:focus-within {
    border-color: var(--ew-color-danger, #ef4444);
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
  }

  /* 成功状态 */
  .ew-input--success .ew-input__wrapper {
    border-color: var(--ew-color-success, #10b981);
  }

  .ew-input--success .ew-input__wrapper:hover {
    border-color: var(--ew-color-success, #10b981);
  }

  .ew-input--success .ew-input__wrapper:focus-within {
    border-color: var(--ew-color-success, #10b981);
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
  }

  /* 警告状态 */
  .ew-input--warning .ew-input__wrapper {
    border-color: var(--ew-color-warning, #f59e0b);
  }

  .ew-input--warning .ew-input__wrapper:hover {
    border-color: var(--ew-color-warning, #f59e0b);
  }

  .ew-input--warning .ew-input__wrapper:focus-within {
    border-color: var(--ew-color-warning, #f59e0b);
    box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
  }

  /* 图标样式 */
  .ew-input__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
  }

  .ew-input--small .ew-input__icon {
    width: 14px;
    height: 14px;
  }

  .ew-input--large .ew-input__icon {
    width: 18px;
    height: 18px;
  }

  /* 计数器 */
  .ew-input__count {
    position: absolute;
    bottom: -20px;
    right: 0;
    font-size: var(--ew-font-size-xs, 12px);
    color: var(--ew-text-color-secondary, #6b7280);
    line-height: 1;
  }

  /* 输入框组 */
  .ew-input-group {
    display: flex;
    align-items: stretch;
  }

  .ew-input-group .ew-input__wrapper {
    border-radius: 0;
  }

  .ew-input-group .ew-input__wrapper:first-child {
    border-top-left-radius: var(--ew-border-radius, 6px);
    border-bottom-left-radius: var(--ew-border-radius, 6px);
  }

  .ew-input-group .ew-input__wrapper:last-child {
    border-top-right-radius: var(--ew-border-radius, 6px);
    border-bottom-right-radius: var(--ew-border-radius, 6px);
  }

  .ew-input-group .ew-input__wrapper:not(:last-child) {
    border-right: none;
  }

  .ew-input-group .ew-input__wrapper:not(:last-child):focus-within {
    border-right: 1px solid var(--ew-color-primary, #3b82f6);
  }
`; 
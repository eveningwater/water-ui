export const inputStyles = `
  .ew-input {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 100%;
    font-family: var(--ew-font-family, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif);
    font-size: var(--ew-font-size-base, 14px);
    line-height: var(--ew-line-height-normal, 1.5);
  }

  .ew-input__wrapper {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    min-height: var(--ew-input-height, 36px);
    padding: 0 var(--ew-input-padding-x, 12px);
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    border: 2px solid var(--ew-border-color, #e2e8f0);
    border-radius: var(--ew-input-border-radius, 8px);
    transition: all var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    overflow: hidden;
  }

  .ew-input__wrapper::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.05), transparent);
    transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
  }

  .ew-input__wrapper:hover::before {
    left: 100%;
  }

  .ew-input__wrapper:hover {
    border-color: var(--ew-color-primary-light, #38bdf8);
    box-shadow: 0 4px 8px rgba(14, 165, 233, 0.1);
  }

  .ew-input__wrapper:focus-within {
    border-color: var(--ew-color-primary, #0ea5e9);
    box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1), 0 4px 12px rgba(14, 165, 233, 0.15);
    transform: translateY(-1px);
  }

  .ew-input__wrapper:focus-within::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, var(--ew-color-primary, #0ea5e9) 0%, var(--ew-color-primary-light, #38bdf8) 100%);
    animation: ew-input-focus-line 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @keyframes ew-input-focus-line {
    0% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(1);
    }
  }

  .ew-input__inner {
    flex: 1;
    width: 100%;
    min-height: var(--ew-input-height, 36px);
    padding: var(--ew-input-padding-y, 8px) 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: var(--ew-text-color, #334155);
    background: transparent;
    border: none;
    outline: none;
    resize: none;
  }

  .ew-input__inner::placeholder {
    color: var(--ew-text-color-placeholder, #94a3b8);
    transition: color var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
  }

  .ew-input__wrapper:focus-within .ew-input__inner::placeholder {
    color: var(--ew-text-color-secondary, #64748b);
  }

  .ew-input__prefix,
  .ew-input__suffix {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: var(--ew-text-color-secondary, #64748b);
    transition: color var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
  }

  .ew-input__prefix {
    margin-right: 8px;
  }

  .ew-input__suffix {
    margin-left: 8px;
  }

  .ew-input__wrapper:focus-within .ew-input__prefix,
  .ew-input__wrapper:focus-within .ew-input__suffix {
    color: var(--ew-color-primary, #0ea5e9);
  }

  .ew-input__clear,
  .ew-input__password-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    padding: 2px;
    margin-left: 4px;
    color: var(--ew-text-color-secondary, #64748b);
    background: transparent;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: all var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
    opacity: 0;
  }

  .ew-input__wrapper:hover .ew-input__clear,
  .ew-input__wrapper:hover .ew-input__password-toggle,
  .ew-input__wrapper:focus-within .ew-input__clear,
  .ew-input__wrapper:focus-within .ew-input__password-toggle {
    opacity: 1;
  }

  .ew-input__clear:hover,
  .ew-input__password-toggle:hover {
    color: var(--ew-color-primary, #0ea5e9);
    background: rgba(14, 165, 233, 0.1);
    transform: scale(1.1);
  }

  .ew-input__clear:active,
  .ew-input__password-toggle:active {
    transform: scale(0.95);
  }

  /* 禁用状态 */
  .ew-input--disabled .ew-input__wrapper {
    background: var(--ew-bg-color-disabled, #f1f5f9);
    border-color: var(--ew-border-color-disabled, #e2e8f0);
    cursor: not-allowed;
    opacity: 0.6;
    pointer-events: none;
  }

  .ew-input--disabled .ew-input__wrapper::before {
    display: none;
  }

  .ew-input--disabled .ew-input__inner {
    color: var(--ew-text-color-disabled, #cbd5e1);
    cursor: not-allowed;
  }

  .ew-input--disabled .ew-input__prefix,
  .ew-input--disabled .ew-input__suffix {
    color: var(--ew-text-color-disabled, #cbd5e1);
  }

  /* 只读状态 */
  .ew-input--readonly .ew-input__wrapper {
    background: var(--ew-bg-color-disabled, #f1f5f9);
    border-color: var(--ew-border-color-disabled, #e2e8f0);
  }

  .ew-input--readonly .ew-input__inner {
    color: var(--ew-text-color-secondary, #64748b);
  }

  /* 尺寸变体 */
  .ew-input--small .ew-input__wrapper {
    min-height: 28px;
    padding: 0 8px;
  }

  .ew-input--small .ew-input__inner {
    min-height: 28px;
    padding: 4px 0;
    font-size: 12px;
  }

  .ew-input--large .ew-input__wrapper {
    min-height: 44px;
    padding: 0 16px;
  }

  .ew-input--large .ew-input__inner {
    min-height: 44px;
    padding: 12px 0;
    font-size: 16px;
  }

  /* 状态样式 */
  .ew-input--error .ew-input__wrapper {
    border-color: var(--ew-color-danger, #ef4444);
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
  }

  .ew-input--error .ew-input__wrapper:focus-within {
    border-color: var(--ew-color-danger, #ef4444);
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);
  }

  .ew-input--success .ew-input__wrapper {
    border-color: var(--ew-color-success, #10b981);
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
  }

  .ew-input--success .ew-input__wrapper:focus-within {
    border-color: var(--ew-color-success, #10b981);
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
  }

  .ew-input--warning .ew-input__wrapper {
    border-color: var(--ew-color-warning, #f59e0b);
    box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
  }

  .ew-input--warning .ew-input__wrapper:focus-within {
    border-color: var(--ew-color-warning, #f59e0b);
    box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.2);
  }

  /* 输入组 */
  .ew-input-group {
    display: flex;
    align-items: stretch;
  }

  .ew-input-group .ew-input {
    flex: 1;
  }

  .ew-input-group .ew-input:not(:first-child) .ew-input__wrapper {
    border-left: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .ew-input-group .ew-input:not(:last-child) .ew-input__wrapper {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .ew-input-group .ew-input:first-child .ew-input__wrapper {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .ew-input-group .ew-input:last-child .ew-input__wrapper {
    border-left: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  /* 计数器 */
  .ew-input__counter {
    position: absolute;
    bottom: -20px;
    right: 0;
    font-size: 12px;
    color: var(--ew-text-color-secondary, #64748b);
    transition: color var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
  }

  .ew-input__wrapper:focus-within + .ew-input__counter {
    color: var(--ew-color-primary, #0ea5e9);
  }

  /* 暗色主题 */
  [data-theme="dark"] .ew-input__wrapper,
  .dark .ew-input__wrapper {
    background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
    border-color: #475569;
  }

  [data-theme="dark"] .ew-input__wrapper:hover,
  .dark .ew-input__wrapper:hover {
    border-color: #64748b;
    box-shadow: 0 4px 8px rgba(56, 189, 248, 0.1);
  }

  [data-theme="dark"] .ew-input__wrapper:focus-within,
  .dark .ew-input__wrapper:focus-within {
    border-color: var(--ew-color-primary, #38bdf8);
    box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.1), 0 4px 12px rgba(56, 189, 248, 0.15);
  }

  [data-theme="dark"] .ew-input__inner,
  .dark .ew-input__inner {
    color: #e2e8f0;
  }

  [data-theme="dark"] .ew-input__inner::placeholder,
  .dark .ew-input__inner::placeholder {
    color: #64748b;
  }

  [data-theme="dark"] .ew-input__prefix,
  [data-theme="dark"] .ew-input__suffix,
  .dark .ew-input__prefix,
  .dark .ew-input__suffix {
    color: #94a3b8;
  }

  [data-theme="dark"] .ew-input__wrapper:focus-within .ew-input__prefix,
  [data-theme="dark"] .ew-input__wrapper:focus-within .ew-input__suffix,
  .dark .ew-input__wrapper:focus-within .ew-input__prefix,
  .dark .ew-input__wrapper:focus-within .ew-input__suffix {
    color: var(--ew-color-primary, #38bdf8);
  }
`; 
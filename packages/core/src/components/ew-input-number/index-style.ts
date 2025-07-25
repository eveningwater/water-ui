export const inputNumberStyles = `
  .ew-input-number {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 100%;
    font-family: var(--ew-font-family, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif);
    font-size: var(--ew-font-size-base, 14px);
    line-height: var(--ew-line-height-normal, 1.5);
  }

  .ew-input-number__wrapper {
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

  .ew-input-number__wrapper::before {
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

  .ew-input-number__wrapper:hover::before {
    left: 100%;
  }

  .ew-input-number__wrapper:hover {
    border-color: var(--ew-color-primary-light, #38bdf8);
    box-shadow: 0 4px 8px rgba(14, 165, 233, 0.1);
  }

  .ew-input-number__wrapper:focus-within {
    border-color: var(--ew-color-primary, #0ea5e9);
    box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1), 0 4px 12px rgba(14, 165, 233, 0.15);
    transform: translateY(-1px);
  }

  .ew-input-number__wrapper:focus-within::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, var(--ew-color-primary, #0ea5e9) 0%, var(--ew-color-primary-light, #38bdf8) 100%);
    animation: ew-input-number-focus-line 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @keyframes ew-input-number-focus-line {
    0% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(1);
    }
  }

  .ew-input-number__inner {
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
    text-align: center;
    /* 隐藏浏览器默认的数字输入框上下箭头 */
    -webkit-appearance: none;
    -moz-appearance: textfield;
  }

  /* Webkit 浏览器隐藏上下箭头 */
  .ew-input-number__inner::-webkit-outer-spin-button,
  .ew-input-number__inner::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox 浏览器隐藏上下箭头 */
  .ew-input-number__inner[type="number"] {
    -moz-appearance: textfield;
  }

  .ew-input-number__inner::placeholder {
    color: var(--ew-text-color-placeholder, #94a3b8);
    transition: color var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
  }

  .ew-input-number__wrapper:focus-within .ew-input-number__inner::placeholder {
    color: var(--ew-text-color-secondary, #64748b);
  }

  /* 控制按钮样式 */
  .ew-input-number__controls {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
    border-left: 1px solid var(--ew-border-color, #e2e8f0);
  }

  .ew-input-number__decrease,
  .ew-input-number__increase {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 20px;
    color: var(--ew-text-color-secondary, #64748b);
    background: transparent;
    border: none;
    cursor: pointer;
    transition: all var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
    position: relative;
  }

  .ew-input-number__decrease:hover,
  .ew-input-number__increase:hover {
    color: var(--ew-color-primary, #0ea5e9);
    background: rgba(14, 165, 233, 0.1);
  }

  .ew-input-number__decrease:active,
  .ew-input-number__increase:active {
    transform: scale(0.95);
  }

  .ew-input-number__decrease--disabled,
  .ew-input-number__increase--disabled {
    color: var(--ew-text-color-disabled, #cbd5e1);
    cursor: not-allowed;
    opacity: 0.5;
  }

  .ew-input-number__decrease--disabled:hover,
  .ew-input-number__increase--disabled:hover {
    color: var(--ew-text-color-disabled, #cbd5e1);
    background: transparent;
  }

  /* 清除按钮样式 */
  .ew-input-number__clear {
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

  .ew-input-number__wrapper:hover .ew-input-number__clear,
  .ew-input-number__wrapper:focus-within .ew-input-number__clear {
    opacity: 1;
  }

  .ew-input-number__clear:hover {
    color: var(--ew-color-primary, #0ea5e9);
    background: rgba(14, 165, 233, 0.1);
    transform: scale(1.1);
  }

  .ew-input-number__clear:active {
    transform: scale(0.95);
  }

  /* 禁用状态 */
  .ew-input-number--disabled .ew-input-number__wrapper {
    background: var(--ew-bg-color-disabled, #f1f5f9);
    border-color: var(--ew-border-color-disabled, #e2e8f0);
    cursor: not-allowed;
    opacity: 0.6;
    pointer-events: none;
  }

  .ew-input-number--disabled .ew-input-number__wrapper::before {
    display: none;
  }

  .ew-input-number--disabled .ew-input-number__inner {
    color: var(--ew-text-color-disabled, #cbd5e1);
    cursor: not-allowed;
  }

  /* 只读状态 */
  .ew-input-number--readonly .ew-input-number__wrapper {
    background: var(--ew-bg-color-disabled, #f1f5f9);
    border-color: var(--ew-border-color-disabled, #e2e8f0);
  }

  .ew-input-number--readonly .ew-input-number__inner {
    color: var(--ew-text-color-secondary, #64748b);
  }

  /* 尺寸变体 */
  .ew-input-number--small .ew-input-number__wrapper {
    min-height: 28px;
    padding: 0 8px;
  }

  .ew-input-number--small .ew-input-number__inner {
    min-height: 28px;
    padding: 4px 0;
    font-size: 12px;
  }

  .ew-input-number--small .ew-input-number__controls {
    margin-left: 6px;
  }

  .ew-input-number--small .ew-input-number__decrease,
  .ew-input-number--small .ew-input-number__increase {
    width: 20px;
    height: 16px;
  }

  .ew-input-number--large .ew-input-number__wrapper {
    min-height: 44px;
    padding: 0 16px;
  }

  .ew-input-number--large .ew-input-number__inner {
    min-height: 44px;
    padding: 12px 0;
    font-size: 16px;
  }

  .ew-input-number--large .ew-input-number__controls {
    margin-left: 12px;
  }

  .ew-input-number--large .ew-input-number__decrease,
  .ew-input-number--large .ew-input-number__increase {
    width: 28px;
    height: 24px;
  }

  /* 状态样式 */
  .ew-input-number--error .ew-input-number__wrapper {
    border-color: var(--ew-color-danger, #ef4444);
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
  }

  .ew-input-number--error .ew-input-number__wrapper:focus-within {
    border-color: var(--ew-color-danger, #ef4444);
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);
  }

  .ew-input-number--success .ew-input-number__wrapper {
    border-color: var(--ew-color-success, #10b981);
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
  }

  .ew-input-number--success .ew-input-number__wrapper:focus-within {
    border-color: var(--ew-color-success, #10b981);
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
  }

  .ew-input-number--warning .ew-input-number__wrapper {
    border-color: var(--ew-color-warning, #f59e0b);
    box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
  }

  .ew-input-number--warning .ew-input-number__wrapper:focus-within {
    border-color: var(--ew-color-warning, #f59e0b);
    box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.2);
  }

  /* 暗色主题 */
  [data-theme="dark"] .ew-input-number__wrapper,
  .dark .ew-input-number__wrapper {
    background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
    border-color: #475569;
  }

  [data-theme="dark"] .ew-input-number__wrapper:hover,
  .dark .ew-input-number__wrapper:hover {
    border-color: #64748b;
    box-shadow: 0 4px 8px rgba(56, 189, 248, 0.1);
  }

  [data-theme="dark"] .ew-input-number__wrapper:focus-within,
  .dark .ew-input-number__wrapper:focus-within {
    border-color: var(--ew-color-primary, #38bdf8);
    box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.1), 0 4px 12px rgba(56, 189, 248, 0.15);
  }

  [data-theme="dark"] .ew-input-number__inner,
  .dark .ew-input-number__inner {
    color: #e2e8f0;
  }

  [data-theme="dark"] .ew-input-number__inner::placeholder,
  .dark .ew-input-number__inner::placeholder {
    color: #64748b;
  }

  [data-theme="dark"] .ew-input-number__decrease,
  [data-theme="dark"] .ew-input-number__increase,
  .dark .ew-input-number__decrease,
  .dark .ew-input-number__increase {
    color: #94a3b8;
    border-left-color: #475569;
  }

  [data-theme="dark"] .ew-input-number__decrease:hover,
  [data-theme="dark"] .ew-input-number__increase:hover,
  .dark .ew-input-number__decrease:hover,
  .dark .ew-input-number__increase:hover {
    color: var(--ew-color-primary, #38bdf8);
  }

  [data-theme="dark"] .ew-input-number__clear,
  .dark .ew-input-number__clear {
    color: #94a3b8;
  }

  [data-theme="dark"] .ew-input-number__clear:hover,
  .dark .ew-input-number__clear:hover {
    color: var(--ew-color-primary, #38bdf8);
  }
`; 
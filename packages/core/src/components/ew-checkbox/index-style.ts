export const checkboxStyles = `
  .ew-checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    font-family: var(--ew-font-family, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif);
    font-size: var(--ew-font-size-base, 14px);
    line-height: var(--ew-line-height-normal, 1.5);
    color: var(--ew-text-color, #334155);
    user-select: none;
    transition: all var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
    position: relative;
    overflow: hidden;
  }

  .ew-checkbox::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: radial-gradient(circle, var(--ew-ripple-color, rgba(14, 165, 233, 0.2)) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1), height 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
  }

  .ew-checkbox:hover::before {
    width: 40px;
    height: 40px;
  }

  .ew-checkbox:hover {
    color: var(--ew-color-primary, #0ea5e9);
    transform: translateY(-1px);
  }

  .ew-checkbox--disabled {
    cursor: not-allowed;
    opacity: 0.6;
    pointer-events: none;
  }

  .ew-checkbox--disabled:hover {
    color: var(--ew-text-color, #334155);
    transform: none;
  }

  .ew-checkbox--disabled::before {
    display: none;
  }

  .ew-checkbox__input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    pointer-events: none;
  }

  .ew-checkbox__inner {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border: 2px solid var(--ew-border-color, #e2e8f0);
    border-radius: 4px;
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    transition: all var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
    margin-right: 10px;
    flex-shrink: 0;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  }

  .ew-checkbox__inner::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background: linear-gradient(135deg, var(--ew-color-primary, #0ea5e9) 0%, var(--ew-color-primary-light, #38bdf8) 100%);
    border-radius: 2px;
    transform: scale(0);
    transition: transform var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
    box-shadow: 0 2px 4px rgba(14, 165, 233, 0.3);
  }

  .ew-checkbox__inner::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 6px;
    width: 4px;
    height: 8px;
    border: 2px solid transparent;
    border-left: none;
    border-top: none;
    border-color: var(--ew-color-white, #ffffff);
    transform: rotate(45deg) scale(0);
    transition: transform var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
  }

  .ew-checkbox__input:checked + .ew-checkbox__inner {
    border-color: var(--ew-color-primary, #0ea5e9);
    background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%);
    box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1), 0 4px 8px rgba(14, 165, 233, 0.15);
    transform: scale(1.05);
  }

  .ew-checkbox__input:checked + .ew-checkbox__inner::before {
    transform: scale(1);
    animation: ew-checkbox-pulse 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .ew-checkbox__input:checked + .ew-checkbox__inner::after {
    transform: rotate(45deg) scale(1);
    animation: ew-checkbox-check 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both;
  }

  .ew-checkbox__input:indeterminate + .ew-checkbox__inner {
    border-color: var(--ew-color-primary, #0ea5e9);
    background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%);
    box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1), 0 4px 8px rgba(14, 165, 233, 0.15);
  }

  .ew-checkbox__input:indeterminate + .ew-checkbox__inner::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 2px;
    background: linear-gradient(135deg, var(--ew-color-primary, #0ea5e9) 0%, var(--ew-color-primary-light, #38bdf8) 100%);
    border-radius: 1px;
    transform: scale(1);
    animation: ew-checkbox-pulse 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .ew-checkbox__input:focus + .ew-checkbox__inner {
    box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.2), 0 4px 8px rgba(14, 165, 233, 0.15);
  }

  .ew-checkbox__label {
    line-height: 1;
    font-size: inherit;
    color: inherit;
    font-weight: 500;
    transition: color var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
  }

  /* 尺寸变体 */
  .ew-checkbox--small .ew-checkbox__inner {
    width: 16px;
    height: 16px;
    border-width: 1.5px;
  }

  .ew-checkbox--small .ew-checkbox__inner::before {
    width: 6px;
    height: 6px;
  }

  .ew-checkbox--small .ew-checkbox__inner::after {
    top: 1px;
    left: 5px;
    width: 3px;
    height: 6px;
  }

  .ew-checkbox--large .ew-checkbox__inner {
    width: 20px;
    height: 20px;
    border-width: 2.5px;
  }

  .ew-checkbox--large .ew-checkbox__inner::before {
    width: 10px;
    height: 10px;
  }

  .ew-checkbox--large .ew-checkbox__inner::after {
    top: 3px;
    left: 7px;
    width: 5px;
    height: 10px;
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
    padding: 10px 18px;
    border: 2px solid var(--ew-border-color, #e2e8f0);
    border-radius: var(--ew-border-radius, 8px);
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    color: var(--ew-text-color, #334155);
    transition: all var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
    cursor: pointer;
    margin-right: 8px;
    margin-bottom: 8px;
    font-weight: 500;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    position: relative;
    overflow: hidden;
  }

  .ew-checkbox--button .ew-checkbox__label::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.1), transparent);
    transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .ew-checkbox--button .ew-checkbox__label:hover::before {
    left: 100%;
  }

  .ew-checkbox--button .ew-checkbox__input:checked + .ew-checkbox__label {
    background: linear-gradient(135deg, var(--ew-color-primary, #0ea5e9) 0%, var(--ew-color-primary-light, #38bdf8) 100%);
    border-color: var(--ew-color-primary, #0ea5e9);
    color: var(--ew-color-white, #ffffff);
    box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3), 0 2px 4px rgba(14, 165, 233, 0.2);
    transform: translateY(-1px);
  }

  .ew-checkbox--button .ew-checkbox__input:focus + .ew-checkbox__label {
    box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1), 0 4px 12px rgba(14, 165, 233, 0.3);
  }

  .ew-checkbox--button.ew-checkbox--disabled .ew-checkbox__label {
    cursor: not-allowed;
    opacity: 0.6;
    background: var(--ew-bg-color-disabled, #f1f5f9);
    border-color: var(--ew-border-color-disabled, #e2e8f0);
    color: var(--ew-text-color-disabled, #cbd5e1);
  }

  /* 边框样式 */
  .ew-checkbox--border {
    border: 2px solid var(--ew-border-color, #e2e8f0);
    border-radius: var(--ew-border-radius, 8px);
    padding: 12px 16px;
    transition: all var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  .ew-checkbox--border::before {
    border-radius: var(--ew-border-radius, 8px);
  }

  .ew-checkbox--border:hover {
    border-color: var(--ew-color-primary, #0ea5e9);
    box-shadow: 0 4px 12px rgba(14, 165, 233, 0.15), 0 2px 4px rgba(14, 165, 233, 0.1);
    transform: translateY(-1px);
  }

  .ew-checkbox--border .ew-checkbox__input:checked + .ew-checkbox__inner {
    border-color: var(--ew-color-primary, #0ea5e9);
  }

  .ew-checkbox--border.ew-checkbox--disabled {
    border-color: var(--ew-border-color-disabled, #e2e8f0);
    background: var(--ew-bg-color-disabled, #f1f5f9);
  }

  .ew-checkbox--border.ew-checkbox--disabled:hover {
    border-color: var(--ew-border-color-disabled, #e2e8f0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    transform: none;
  }

  /* 动画效果 */
  @keyframes ew-checkbox-pulse {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes ew-checkbox-check {
    0% {
      transform: rotate(45deg) scale(0);
    }
    50% {
      transform: rotate(45deg) scale(1.2);
    }
    100% {
      transform: rotate(45deg) scale(1);
    }
  }

  /* 暗色主题 */
  [data-theme="dark"] .ew-checkbox,
  .dark .ew-checkbox {
    color: var(--ew-text-color-dark, #e2e8f0);
  }

  [data-theme="dark"] .ew-checkbox__inner,
  .dark .ew-checkbox__inner {
    border-color: var(--ew-border-color-dark, #334155);
    background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  }

  [data-theme="dark"] .ew-checkbox__input:checked + .ew-checkbox__inner,
  .dark .ew-checkbox__input:checked + .ew-checkbox__inner {
    border-color: var(--ew-color-primary, #38bdf8);
    background: linear-gradient(135deg, #1e293b 0%, #0c4a6e 100%);
  }

  [data-theme="dark"] .ew-checkbox__input:checked + .ew-checkbox__inner::before,
  .dark .ew-checkbox__input:checked + .ew-checkbox__inner::before {
    background: linear-gradient(135deg, var(--ew-color-primary, #38bdf8) 0%, var(--ew-color-primary-light, #7dd3fc) 100%);
  }

  [data-theme="dark"] .ew-checkbox--button .ew-checkbox__label,
  .dark .ew-checkbox--button .ew-checkbox__label {
    border-color: var(--ew-border-color-dark, #334155);
    background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
    color: var(--ew-text-color-dark, #e2e8f0);
  }

  [data-theme="dark"] .ew-checkbox--border,
  .dark .ew-checkbox--border {
    border-color: var(--ew-border-color-dark, #334155);
    background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  }

  [data-theme="dark"] .ew-checkbox--border:hover,
  .dark .ew-checkbox--border:hover {
    border-color: var(--ew-color-primary, #38bdf8);
  }
`; 
export const radioStyles = `
  .ew-radio {
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

  .ew-radio::before {
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

  .ew-radio:hover::before {
    width: 40px;
    height: 40px;
  }

  .ew-radio:hover {
    color: var(--ew-color-primary, #0ea5e9);
    transform: translateY(-1px);
  }

  .ew-radio--disabled {
    cursor: not-allowed;
    opacity: 0.6;
    pointer-events: none;
  }

  .ew-radio--disabled:hover {
    color: var(--ew-text-color, #334155);
    transform: none;
  }

  .ew-radio--disabled::before {
    display: none;
  }

  .ew-radio__input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    pointer-events: none;
  }

  .ew-radio__inner {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border: 2px solid var(--ew-border-color, #e2e8f0);
    border-radius: 50%;
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    transition: all var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
    margin-right: 10px;
    flex-shrink: 0;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  }

  .ew-radio__inner::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--ew-color-primary, #0ea5e9) 0%, var(--ew-color-primary-light, #38bdf8) 100%);
    transform: scale(0);
    transition: transform var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
    box-shadow: 0 2px 4px rgba(14, 165, 233, 0.3);
  }

  .ew-radio__inner::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--ew-color-primary, #0ea5e9) 0%, var(--ew-color-primary-light, #38bdf8) 100%);
    opacity: 0;
    transition: opacity var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
    z-index: -1;
  }

  .ew-radio__input:checked + .ew-radio__inner {
    border-color: var(--ew-color-primary, #0ea5e9);
    background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%);
    box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1), 0 4px 8px rgba(14, 165, 233, 0.15);
    transform: scale(1.05);
  }

  .ew-radio__input:checked + .ew-radio__inner::before {
    transform: scale(1);
    animation: ew-radio-pulse 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .ew-radio__input:checked + .ew-radio__inner::after {
    opacity: 0.1;
  }

  .ew-radio__input:focus + .ew-radio__inner {
    box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.2), 0 4px 8px rgba(14, 165, 233, 0.15);
  }

  .ew-radio__label {
    line-height: 1;
    font-size: inherit;
    color: inherit;
    font-weight: 500;
    transition: color var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
  }

  /* 尺寸变体 */
  .ew-radio--small .ew-radio__inner {
    width: 16px;
    height: 16px;
    border-width: 1.5px;
  }

  .ew-radio--small .ew-radio__inner::before {
    width: 6px;
    height: 6px;
  }

  .ew-radio--large .ew-radio__inner {
    width: 20px;
    height: 20px;
    border-width: 2.5px;
  }

  .ew-radio--large .ew-radio__inner::before {
    width: 10px;
    height: 10px;
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

  .ew-radio--button .ew-radio__label::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.1), transparent);
    transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .ew-radio--button .ew-radio__label:hover::before {
    left: 100%;
  }

  .ew-radio--button .ew-radio__input:checked + .ew-radio__label {
    background: linear-gradient(135deg, var(--ew-color-primary, #0ea5e9) 0%, var(--ew-color-primary-light, #38bdf8) 100%);
    border-color: var(--ew-color-primary, #0ea5e9);
    color: var(--ew-color-white, #ffffff);
    box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3), 0 2px 4px rgba(14, 165, 233, 0.2);
    transform: translateY(-1px);
  }

  .ew-radio--button .ew-radio__input:focus + .ew-radio__label {
    box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1), 0 4px 12px rgba(14, 165, 233, 0.3);
  }

  .ew-radio--button.ew-radio--disabled .ew-radio__label {
    cursor: not-allowed;
    opacity: 0.6;
    background: var(--ew-bg-color-disabled, #f1f5f9);
    border-color: var(--ew-border-color-disabled, #e2e8f0);
    color: var(--ew-text-color-disabled, #cbd5e1);
  }

  /* 边框样式 */
  .ew-radio--border {
    border: 2px solid var(--ew-border-color, #e2e8f0);
    border-radius: var(--ew-border-radius, 8px);
    padding: 12px 16px;
    transition: all var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  .ew-radio--border::before {
    border-radius: var(--ew-border-radius, 8px);
  }

  .ew-radio--border:hover {
    border-color: var(--ew-color-primary, #0ea5e9);
    box-shadow: 0 4px 12px rgba(14, 165, 233, 0.15), 0 2px 4px rgba(14, 165, 233, 0.1);
    transform: translateY(-1px);
  }

  .ew-radio--border .ew-radio__input:checked + .ew-radio__inner {
    border-color: var(--ew-color-primary, #0ea5e9);
  }

  .ew-radio--border.ew-radio--disabled {
    border-color: var(--ew-border-color-disabled, #e2e8f0);
    background: var(--ew-bg-color-disabled, #f1f5f9);
  }

  .ew-radio--border.ew-radio--disabled:hover {
    border-color: var(--ew-border-color-disabled, #e2e8f0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    transform: none;
  }

  /* 动画效果 */
  @keyframes ew-radio-pulse {
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

  /* 暗色主题 */
  [data-theme="dark"] .ew-radio,
  .dark .ew-radio {
    color: var(--ew-text-color-dark, #e2e8f0);
  }

  [data-theme="dark"] .ew-radio__inner,
  .dark .ew-radio__inner {
    border-color: var(--ew-border-color-dark, #334155);
    background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  }

  [data-theme="dark"] .ew-radio__input:checked + .ew-radio__inner,
  .dark .ew-radio__input:checked + .ew-radio__inner {
    border-color: var(--ew-color-primary, #38bdf8);
    background: linear-gradient(135deg, #1e293b 0%, #0c4a6e 100%);
  }

  [data-theme="dark"] .ew-radio__input:checked + .ew-radio__inner::before,
  .dark .ew-radio__input:checked + .ew-radio__inner::before {
    background: linear-gradient(135deg, var(--ew-color-primary, #38bdf8) 0%, var(--ew-color-primary-light, #7dd3fc) 100%);
  }

  [data-theme="dark"] .ew-radio--button .ew-radio__label,
  .dark .ew-radio--button .ew-radio__label {
    border-color: var(--ew-border-color-dark, #334155);
    background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
    color: var(--ew-text-color-dark, #e2e8f0);
  }

  [data-theme="dark"] .ew-radio--border,
  .dark .ew-radio--border {
    border-color: var(--ew-border-color-dark, #334155);
    background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  }

  [data-theme="dark"] .ew-radio--border:hover,
  .dark .ew-radio--border:hover {
    border-color: var(--ew-color-primary, #38bdf8);
  }
`; 
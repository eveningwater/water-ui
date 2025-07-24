export const radioButtonStyles = `
  .ew-radio-button {
    position: relative;
    display: inline-block;
    font-family: var(--ew-font-family, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif);
    font-size: var(--ew-font-size-base, 14px);
    line-height: var(--ew-line-height-normal, 1.5);
    overflow: hidden;
  }

  .ew-radio-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.1), transparent);
    transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
    z-index: 1;
  }

  .ew-radio-button:hover::before {
    left: 100%;
  }

  .ew-radio-button__input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    pointer-events: none;
  }

  .ew-radio-button__inner {
    display: inline-block;
    padding: 12px 20px;
    border: 2px solid var(--ew-border-color, #e2e8f0);
    border-radius: var(--ew-border-radius, 8px);
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    color: var(--ew-text-color, #334155);
    cursor: pointer;
    transition: all var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
    user-select: none;
    text-align: center;
    white-space: nowrap;
    box-sizing: border-box;
    font-weight: 500;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    position: relative;
    overflow: hidden;
  }

  .ew-radio-button__inner::before {
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

  .ew-radio-button__inner:hover::before {
    width: 60px;
    height: 60px;
  }

  .ew-radio-button__input:checked + .ew-radio-button__inner {
    background: linear-gradient(135deg, var(--ew-color-primary, #0ea5e9) 0%, var(--ew-color-primary-light, #38bdf8) 100%);
    border-color: var(--ew-color-primary, #0ea5e9);
    color: var(--ew-color-white, #ffffff);
    box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3), 0 2px 4px rgba(14, 165, 233, 0.2);
    transform: translateY(-1px);
  }

  .ew-radio-button__input:checked + .ew-radio-button__inner::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: var(--ew-border-radius, 8px);
    background: linear-gradient(135deg, var(--ew-color-primary, #0ea5e9) 0%, var(--ew-color-primary-light, #38bdf8) 100%);
    opacity: 0.1;
    z-index: -1;
    animation: ew-radio-button-glow 2s ease-in-out infinite alternate;
  }

  .ew-radio-button__input:focus + .ew-radio-button__inner {
    box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1), 0 4px 12px rgba(14, 165, 233, 0.3);
  }

  .ew-radio-button__inner:hover {
    border-color: var(--ew-color-primary-light, #38bdf8);
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(14, 165, 233, 0.15);
  }

  .ew-radio-button--disabled {
    cursor: not-allowed;
    opacity: 0.6;
    pointer-events: none;
  }

  .ew-radio-button--disabled .ew-radio-button__inner {
    cursor: not-allowed;
    background: var(--ew-bg-color-disabled, #f1f5f9);
    border-color: var(--ew-border-color-disabled, #e2e8f0);
    color: var(--ew-text-color-disabled, #cbd5e1);
    transform: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  .ew-radio-button--disabled .ew-radio-button__input:checked + .ew-radio-button__inner {
    background: var(--ew-color-primary-disabled, #93c5fd);
    border-color: var(--ew-color-primary-disabled, #93c5fd);
    color: var(--ew-color-white, #ffffff);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  .ew-radio-button--disabled::before {
    display: none;
  }

  /* 尺寸变体 */
  .ew-radio-button--small .ew-radio-button__inner {
    padding: 8px 16px;
    font-size: 12px;
  }

  .ew-radio-button--large .ew-radio-button__inner {
    padding: 16px 24px;
    font-size: 16px;
  }

  /* 边框样式 */
  .ew-radio-button--border .ew-radio-button__inner {
    border-width: 3px;
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
    border-top-left-radius: var(--ew-border-radius, 8px);
    border-bottom-left-radius: var(--ew-border-radius, 8px);
  }

  .ew-radio-button-group .ew-radio-button:last-child .ew-radio-button__inner {
    border-top-right-radius: var(--ew-border-radius, 8px);
    border-bottom-right-radius: var(--ew-border-radius, 8px);
  }

  /* 动画效果 */
  @keyframes ew-radio-button-glow {
    0% {
      opacity: 0.1;
      transform: scale(1);
    }
    100% {
      opacity: 0.2;
      transform: scale(1.02);
    }
  }

  /* 暗色主题 */
  [data-theme="dark"] .ew-radio-button__inner,
  .dark .ew-radio-button__inner {
    border-color: var(--ew-border-color-dark, #334155);
    background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
    color: var(--ew-text-color-dark, #e2e8f0);
  }

  [data-theme="dark"] .ew-radio-button__input:checked + .ew-radio-button__inner,
  .dark .ew-radio-button__input:checked + .ew-radio-button__inner {
    background: linear-gradient(135deg, var(--ew-color-primary, #38bdf8) 0%, var(--ew-color-primary-light, #7dd3fc) 100%);
    border-color: var(--ew-color-primary, #38bdf8);
    color: var(--ew-color-white, #ffffff);
  }

  [data-theme="dark"] .ew-radio-button--disabled .ew-radio-button__inner,
  .dark .ew-radio-button--disabled .ew-radio-button__inner {
    background: var(--ew-bg-color-disabled-dark, #1f2937);
    border-color: var(--ew-border-color-disabled-dark, #374151);
    color: var(--ew-text-color-disabled-dark, #6b7280);
  }
`; 
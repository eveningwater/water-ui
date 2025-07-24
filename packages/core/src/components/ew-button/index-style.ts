export const buttonStyles = `
  .ew-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: var(--ew-button-padding-y, 8px) var(--ew-button-padding-x, 16px);
    min-height: var(--ew-button-min-height, 36px);
    font-family: var(--ew-font-family, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif);
    font-size: var(--ew-button-font-size, 14px);
    font-weight: 500;
    line-height: 1.5;
    color: var(--ew-text-color, #334155);
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    border: 2px solid var(--ew-border-color, #e2e8f0);
    border-radius: var(--ew-button-border-radius, 8px);
    cursor: pointer;
    transition: all var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
    user-select: none;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  .ew-button::before {
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

  .ew-button:hover::before {
    width: 60px;
    height: 60px;
  }

  .ew-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(14, 165, 233, 0.15), 0 4px 8px rgba(14, 165, 233, 0.1);
    border-color: var(--ew-color-primary-light, #38bdf8);
  }

  .ew-button:active {
    transform: translateY(0);
    box-shadow: 0 4px 8px rgba(14, 165, 233, 0.1);
  }

  .ew-button:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.2), 0 8px 16px rgba(14, 165, 233, 0.15);
  }

  /* 主要按钮样式 */
  .ew-button--primary {
    background: linear-gradient(135deg, var(--ew-color-primary, #0ea5e9) 0%, var(--ew-color-primary-light, #38bdf8) 100%);
    border-color: var(--ew-color-primary, #0ea5e9);
    color: var(--ew-color-white, #ffffff);
    box-shadow: 0 4px 8px rgba(14, 165, 233, 0.2);
  }

  .ew-button--primary:hover {
    background: linear-gradient(135deg, var(--ew-color-primary-light, #38bdf8) 0%, var(--ew-color-primary, #0ea5e9) 100%);
    box-shadow: 0 8px 20px rgba(14, 165, 233, 0.3), 0 4px 8px rgba(14, 165, 233, 0.2);
  }

  .ew-button--primary:active {
    background: linear-gradient(135deg, var(--ew-color-primary-dark, #0284c7) 0%, var(--ew-color-primary, #0ea5e9) 100%);
  }

  /* 成功按钮样式 */
  .ew-button--success {
    background: linear-gradient(135deg, var(--ew-color-success, #10b981) 0%, var(--ew-color-success-light, #34d399) 100%);
    border-color: var(--ew-color-success, #10b981);
    color: var(--ew-color-white, #ffffff);
    box-shadow: 0 4px 8px rgba(16, 185, 129, 0.2);
  }

  .ew-button--success:hover {
    background: linear-gradient(135deg, var(--ew-color-success-light, #34d399) 0%, var(--ew-color-success, #10b981) 100%);
    box-shadow: 0 8px 20px rgba(16, 185, 129, 0.3), 0 4px 8px rgba(16, 185, 129, 0.2);
  }

  .ew-button--success:active {
    background: linear-gradient(135deg, var(--ew-color-success-dark, #059669) 0%, var(--ew-color-success, #10b981) 100%);
  }

  /* 警告按钮样式 */
  .ew-button--warning {
    background: linear-gradient(135deg, var(--ew-color-warning, #f59e0b) 0%, var(--ew-color-warning-light, #fbbf24) 100%);
    border-color: var(--ew-color-warning, #f59e0b);
    color: var(--ew-color-white, #ffffff);
    box-shadow: 0 4px 8px rgba(245, 158, 11, 0.2);
  }

  .ew-button--warning:hover {
    background: linear-gradient(135deg, var(--ew-color-warning-light, #fbbf24) 0%, var(--ew-color-warning, #f59e0b) 100%);
    box-shadow: 0 8px 20px rgba(245, 158, 11, 0.3), 0 4px 8px rgba(245, 158, 11, 0.2);
  }

  .ew-button--warning:active {
    background: linear-gradient(135deg, var(--ew-color-warning-dark, #d97706) 0%, var(--ew-color-warning, #f59e0b) 100%);
  }

  /* 危险按钮样式 */
  .ew-button--danger {
    background: linear-gradient(135deg, var(--ew-color-danger, #ef4444) 0%, var(--ew-color-danger-light, #f87171) 100%);
    border-color: var(--ew-color-danger, #ef4444);
    color: var(--ew-color-white, #ffffff);
    box-shadow: 0 4px 8px rgba(239, 68, 68, 0.2);
  }

  .ew-button--danger:hover {
    background: linear-gradient(135deg, var(--ew-color-danger-light, #f87171) 0%, var(--ew-color-danger, #ef4444) 100%);
    box-shadow: 0 8px 20px rgba(239, 68, 68, 0.3), 0 4px 8px rgba(239, 68, 68, 0.2);
  }

  .ew-button--danger:active {
    background: linear-gradient(135deg, var(--ew-color-danger-dark, #dc2626) 0%, var(--ew-color-danger, #ef4444) 100%);
  }

  /* 信息按钮样式 */
  .ew-button--info {
    background: linear-gradient(135deg, var(--ew-color-info, #06b6d4) 0%, var(--ew-color-info-light, #22d3ee) 100%);
    border-color: var(--ew-color-info, #06b6d4);
    color: var(--ew-color-white, #ffffff);
    box-shadow: 0 4px 8px rgba(6, 182, 212, 0.2);
  }

  .ew-button--info:hover {
    background: linear-gradient(135deg, var(--ew-color-info-light, #22d3ee) 0%, var(--ew-color-info, #06b6d4) 100%);
    box-shadow: 0 8px 20px rgba(6, 182, 212, 0.3), 0 4px 8px rgba(6, 182, 212, 0.2);
  }

  .ew-button--info:active {
    background: linear-gradient(135deg, var(--ew-color-info-dark, #0891b2) 0%, var(--ew-color-info, #06b6d4) 100%);
  }

  /* 朴素按钮样式 */
  .ew-button--plain {
    background: transparent;
    border-color: var(--ew-color-primary, #0ea5e9);
    color: var(--ew-color-primary, #0ea5e9);
  }

  .ew-button--plain:hover {
    background: linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(56, 189, 248, 0.1) 100%);
    color: var(--ew-color-primary-light, #38bdf8);
    border-color: var(--ew-color-primary-light, #38bdf8);
  }

  /* 圆角按钮样式 */
  .ew-button--round {
    border-radius: 50px;
  }

  /* 圆形按钮样式 */
  .ew-button--circle {
    border-radius: 50%;
    width: var(--ew-button-min-height, 36px);
    height: var(--ew-button-min-height, 36px);
    padding: 0;
  }

  /* 文本按钮样式 */
  .ew-button--text {
    background: transparent;
    border-color: transparent;
    color: var(--ew-color-primary, #0ea5e9);
    box-shadow: none;
  }

  .ew-button--text:hover {
    background: linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(56, 189, 248, 0.1) 100%);
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(14, 165, 233, 0.1);
  }

  /* 链接按钮样式 */
  .ew-button--link {
    background: transparent;
    border-color: transparent;
    color: var(--ew-color-primary, #0ea5e9);
    text-decoration: underline;
    box-shadow: none;
  }

  .ew-button--link:hover {
    color: var(--ew-color-primary-light, #38bdf8);
    text-decoration: none;
  }

  /* 禁用状态 */
  .ew-button--disabled,
  .ew-button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    pointer-events: none;
    transform: none !important;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05) !important;
  }

  .ew-button--disabled::before,
  .ew-button:disabled::before {
    display: none;
  }

  /* 加载状态 */
  .ew-button--loading {
    cursor: wait;
    pointer-events: none;
  }

  .ew-button--loading .ew-button__content {
    opacity: 0;
  }

  .ew-button__loading-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    border: 2px solid transparent;
    border-top: 2px solid currentColor;
    border-radius: 50%;
    animation: ew-spin 1s linear infinite;
  }

  @keyframes ew-spin {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
  }

  /* 尺寸变体 */
  .ew-button--small {
    padding: 6px 12px;
    min-height: 28px;
    font-size: 12px;
  }

  .ew-button--small.ew-button--circle {
    width: 28px;
    height: 28px;
  }

  .ew-button--large {
    padding: 12px 24px;
    min-height: 44px;
    font-size: 16px;
  }

  .ew-button--large.ew-button--circle {
    width: 44px;
    height: 44px;
  }

  /* 图标样式 */
  .ew-button__icon {
    width: 16px;
    height: 16px;
    transition: transform var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
  }

  .ew-button:hover .ew-button__icon {
    transform: scale(1.1);
  }

  /* 暗色主题 */
  [data-theme="dark"] .ew-button,
  .dark .ew-button {
    background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
    border-color: #475569;
    color: #e2e8f0;
  }

  [data-theme="dark"] .ew-button:hover,
  .dark .ew-button:hover {
    border-color: #64748b;
    box-shadow: 0 8px 16px rgba(56, 189, 248, 0.2), 0 4px 8px rgba(56, 189, 248, 0.1);
  }

  [data-theme="dark"] .ew-button--primary,
  .dark .ew-button--primary {
    background: linear-gradient(135deg, var(--ew-color-primary, #38bdf8) 0%, var(--ew-color-primary-light, #7dd3fc) 100%);
    border-color: var(--ew-color-primary, #38bdf8);
    color: #0f172a;
  }

  [data-theme="dark"] .ew-button--plain,
  .dark .ew-button--plain {
    background: transparent;
    border-color: var(--ew-color-primary, #38bdf8);
    color: var(--ew-color-primary, #38bdf8);
  }

  [data-theme="dark"] .ew-button--text,
  .dark .ew-button--text {
    background: transparent;
    border-color: transparent;
    color: var(--ew-color-primary, #38bdf8);
  }
`; 
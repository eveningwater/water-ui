export const buttonStyles = `
  .ew-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--ew-spacing-2, 8px);
    padding: var(--ew-spacing-2, 8px) var(--ew-spacing-4, 16px);
    border: 1px solid var(--ew-border-color, #e5e7eb);
    border-radius: var(--ew-border-radius, 6px);
    background: var(--ew-bg-color, #ffffff);
    color: var(--ew-text-color-regular, #4b5563);
    font-family: var(--ew-font-family);
    font-size: var(--ew-font-size-sm, 14px);
    font-weight: 500;
    line-height: 1.5;
    cursor: pointer;
    transition: all var(--ew-transition, 200ms ease-in-out);
    user-select: none;
    outline: none;
    text-decoration: none;
    box-sizing: border-box;
    min-height: 36px;
    min-width: 80px;
    position: relative;
    overflow: hidden;
  }

  .ew-button:hover {
    border-color: var(--ew-color-primary, #3b82f6);
    color: var(--ew-color-primary, #3b82f6);
    transform: translateY(-1px);
    box-shadow: var(--ew-shadow, 0 1px 3px 0 rgba(0, 0, 0, 0.1));
  }

  .ew-button:active {
    transform: translateY(0);
    box-shadow: var(--ew-shadow-sm, 0 1px 2px 0 rgba(0, 0, 0, 0.05));
  }

  .ew-button:focus-visible {
    outline: 2px solid var(--ew-color-primary, #3b82f6);
    outline-offset: 2px;
  }

  /* 主要按钮 */
  .ew-button--primary {
    background: var(--ew-color-primary, #3b82f6);
    border-color: var(--ew-color-primary, #3b82f6);
    color: var(--ew-color-white, #ffffff);
  }

  .ew-button--primary:hover {
    background: var(--ew-color-primary-dark, #2563eb);
    border-color: var(--ew-color-primary-dark, #2563eb);
    color: var(--ew-color-white, #ffffff);
  }

  /* 成功按钮 */
  .ew-button--success {
    background: var(--ew-color-success, #10b981);
    border-color: var(--ew-color-success, #10b981);
    color: var(--ew-color-white, #ffffff);
  }

  .ew-button--success:hover {
    background: #059669;
    border-color: #059669;
    color: var(--ew-color-white, #ffffff);
  }

  /* 警告按钮 */
  .ew-button--warning {
    background: var(--ew-color-warning, #f59e0b);
    border-color: var(--ew-color-warning, #f59e0b);
    color: var(--ew-color-white, #ffffff);
  }

  .ew-button--warning:hover {
    background: #d97706;
    border-color: #d97706;
    color: var(--ew-color-white, #ffffff);
  }

  /* 危险按钮 */
  .ew-button--danger {
    background: var(--ew-color-danger, #ef4444);
    border-color: var(--ew-color-danger, #ef4444);
    color: var(--ew-color-white, #ffffff);
  }

  .ew-button--danger:hover {
    background: #dc2626;
    border-color: #dc2626;
    color: var(--ew-color-white, #ffffff);
  }

  /* 信息按钮 */
  .ew-button--info {
    background: var(--ew-color-info, #6b7280);
    border-color: var(--ew-color-info, #6b7280);
    color: var(--ew-color-white, #ffffff);
  }

  .ew-button--info:hover {
    background: #4b5563;
    border-color: #4b5563;
    color: var(--ew-color-white, #ffffff);
  }

  /* 朴素按钮 */
  .ew-button--plain {
    background: transparent;
  }

  .ew-button--plain.ew-button--primary {
    color: var(--ew-color-primary, #3b82f6);
  }

  .ew-button--plain.ew-button--success {
    color: var(--ew-color-success, #10b981);
  }

  .ew-button--plain.ew-button--warning {
    color: var(--ew-color-warning, #f59e0b);
  }

  .ew-button--plain.ew-button--danger {
    color: var(--ew-color-danger, #ef4444);
  }

  .ew-button--plain.ew-button--info {
    color: var(--ew-color-info, #6b7280);
  }

  /* 圆角按钮 */
  .ew-button--round {
    border-radius: var(--ew-border-radius-full, 9999px);
  }

  /* 圆形按钮 */
  .ew-button--circle {
    border-radius: var(--ew-border-radius-full, 9999px);
    padding: var(--ew-spacing-2, 8px);
    min-width: 36px;
    min-height: 36px;
    width: 36px;
    height: 36px;
  }

  /* 文本按钮 */
  .ew-button--text {
    background: transparent;
    border: none;
    padding: 0;
    color: var(--ew-color-primary, #3b82f6);
  }

  .ew-button--text:hover {
    background: rgba(59, 130, 246, 0.1);
    border: none;
  }

  /* 链接按钮 */
  .ew-button--link {
    background: transparent;
    border: none;
    padding: 0;
    color: var(--ew-color-primary, #3b82f6);
    text-decoration: underline;
  }

  .ew-button--link:hover {
    color: var(--ew-color-primary-dark, #2563eb);
    background: transparent;
    border: none;
  }

  /* 禁用和加载状态 */
  .ew-button--disabled,
  .ew-button--loading {
    cursor: not-allowed;
    opacity: 0.6;
    transform: none !important;
  }

  .ew-button--disabled:hover,
  .ew-button--loading:hover {
    border-color: var(--ew-border-color, #e5e7eb);
    color: var(--ew-text-color-regular, #4b5563);
    background: var(--ew-bg-color, #ffffff);
    transform: none;
    box-shadow: none;
  }

  /* 尺寸变体 */
  .ew-button--small {
    padding: var(--ew-spacing-1, 4px) var(--ew-spacing-3, 12px);
    font-size: var(--ew-font-size-xs, 12px);
    min-height: 28px;
  }

  .ew-button--small.ew-button--circle {
    min-width: 28px;
    min-height: 28px;
    width: 28px;
    height: 28px;
  }

  .ew-button--large {
    padding: var(--ew-spacing-3, 12px) var(--ew-spacing-5, 20px);
    font-size: var(--ew-font-size-base, 16px);
    min-height: 44px;
  }

  .ew-button--large.ew-button--circle {
    min-width: 44px;
    min-height: 44px;
    width: 44px;
    height: 44px;
  }

  /* 图标 */
  .ew-button__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
  }

  .ew-button--small .ew-button__icon {
    width: 14px;
    height: 14px;
  }

  .ew-button--large .ew-button__icon {
    width: 18px;
    height: 18px;
  }

  /* 加载状态 */
  .ew-button__loading {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
  }

  .ew-button--small .ew-button__loading {
    width: 14px;
    height: 14px;
  }

  .ew-button--large .ew-button__loading {
    width: 18px;
    height: 18px;
  }

  .ew-loading-spinner {
    width: 100%;
    height: 100%;
    animation: ew-spin 1s linear infinite;
  }

  @keyframes ew-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* 波纹效果 */
  .ew-button::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.3s ease, height 0.3s ease;
  }

  .ew-button:active::before {
    width: 100px;
    height: 100px;
  }
`; 
export const buttonStyles = `
  .ew-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px 16px;
    border: 1px solid var(--ew-border-color-base, #dcdfe6);
    border-radius: 4px;
    background: var(--ew-button-bg, #ffffff);
    color: var(--ew-text-color-regular, #606266);
    font-size: 14px;
    font-weight: 500;
    line-height: 1.4;
    cursor: pointer;
    transition: all 0.2s ease;
    user-select: none;
    outline: none;
    text-decoration: none;
    box-sizing: border-box;
    min-height: 32px;
    min-width: 80px;
  }

  .ew-button:hover {
    border-color: var(--ew-primary-color, #409eff);
    color: var(--ew-primary-color, #409eff);
  }

  .ew-button:active {
    transform: translateY(1px);
  }

  .ew-button:focus {
    box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.2);
  }

  .ew-button--primary {
    background: var(--ew-primary-color, #409eff);
    border-color: var(--ew-primary-color, #409eff);
    color: #ffffff;
  }

  .ew-button--primary:hover {
    background: var(--ew-primary-hover, #66b1ff);
    border-color: var(--ew-primary-hover, #66b1ff);
    color: #ffffff;
  }

  .ew-button--success {
    background: var(--ew-success-color, #67c23a);
    border-color: var(--ew-success-color, #67c23a);
    color: #ffffff;
  }

  .ew-button--success:hover {
    background: var(--ew-success-hover, #85ce61);
    border-color: var(--ew-success-hover, #85ce61);
    color: #ffffff;
  }

  .ew-button--warning {
    background: var(--ew-warning-color, #e6a23c);
    border-color: var(--ew-warning-color, #e6a23c);
    color: #ffffff;
  }

  .ew-button--warning:hover {
    background: var(--ew-warning-hover, #ebb563);
    border-color: var(--ew-warning-hover, #ebb563);
    color: #ffffff;
  }

  .ew-button--danger {
    background: var(--ew-danger-color, #f56c6c);
    border-color: var(--ew-danger-color, #f56c6c);
    color: #ffffff;
  }

  .ew-button--danger:hover {
    background: var(--ew-danger-hover, #f78989);
    border-color: var(--ew-danger-hover, #f78989);
    color: #ffffff;
  }

  .ew-button--info {
    background: var(--ew-info-color, #909399);
    border-color: var(--ew-info-color, #909399);
    color: #ffffff;
  }

  .ew-button--info:hover {
    background: var(--ew-info-hover, #a6a9ad);
    border-color: var(--ew-info-hover, #a6a9ad);
    color: #ffffff;
  }

  .ew-button--plain {
    background: transparent;
  }

  .ew-button--plain.ew-button--primary {
    color: var(--ew-primary-color, #409eff);
  }

  .ew-button--plain.ew-button--success {
    color: var(--ew-success-color, #67c23a);
  }

  .ew-button--plain.ew-button--warning {
    color: var(--ew-warning-color, #e6a23c);
  }

  .ew-button--plain.ew-button--danger {
    color: var(--ew-danger-color, #f56c6c);
  }

  .ew-button--plain.ew-button--info {
    color: var(--ew-info-color, #909399);
  }

  .ew-button--round {
    border-radius: 20px;
  }

  .ew-button--circle {
    border-radius: 50%;
    padding: 8px;
    min-width: 32px;
    min-height: 32px;
    width: 32px;
    height: 32px;
  }

  .ew-button--text {
    background: transparent;
    border: none;
    padding: 0;
    color: var(--ew-primary-color, #409eff);
  }

  .ew-button--text:hover {
    background: rgba(64, 158, 255, 0.1);
    border: none;
  }

  .ew-button--link {
    background: transparent;
    border: none;
    padding: 0;
    color: var(--ew-primary-color, #409eff);
    text-decoration: underline;
  }

  .ew-button--link:hover {
    color: var(--ew-primary-hover, #66b1ff);
    background: transparent;
    border: none;
  }

  .ew-button--disabled,
  .ew-button--loading {
    cursor: not-allowed;
    opacity: 0.6;
  }

  .ew-button--disabled:hover,
  .ew-button--loading:hover {
    border-color: var(--ew-border-color-base, #dcdfe6);
    color: var(--ew-text-color-regular, #606266);
    background: var(--ew-button-bg, #ffffff);
  }

  .ew-button--small {
    padding: 6px 12px;
    font-size: 12px;
    min-height: 28px;
  }

  .ew-button--large {
    padding: 12px 20px;
    font-size: 16px;
    min-height: 40px;
  }

  .ew-button__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .ew-button__loading {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .ew-loading-spinner {
    width: 14px;
    height: 14px;
    animation: ew-spin 1s linear infinite;
  }

  @keyframes ew-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`; 
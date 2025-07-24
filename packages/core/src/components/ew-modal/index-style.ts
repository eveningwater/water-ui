export const modalStyles = `
  .ew-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: var(--ew-z-index-modal, 1050);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: all var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
  }

  .ew-modal--visible {
    opacity: 1;
    visibility: visible;
  }

  .ew-modal__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--ew-bg-color-overlay, rgba(15, 23, 42, 0.6));
    backdrop-filter: blur(var(--ew-modal-backdrop-blur, 8px));
    transition: all var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
  }

  .ew-modal__overlay--visible {
    opacity: 1;
  }

  .ew-modal__content {
    position: relative;
    width: 90%;
    max-width: 500px;
    max-height: 90vh;
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    border-radius: var(--ew-modal-border-radius, 12px);
    box-shadow: 0 25px 50px -12px rgba(14, 165, 233, 0.25), 0 10px 20px -5px rgba(14, 165, 233, 0.1);
    transform: scale(0.9) translateY(20px);
    transition: all var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
    overflow: hidden;
  }

  .ew-modal--visible .ew-modal__content {
    transform: scale(1) translateY(0);
  }

  .ew-modal__content::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--ew-color-primary, #0ea5e9) 0%, var(--ew-color-primary-light, #38bdf8) 100%);
    z-index: 1;
  }

  /* 尺寸变体 */
  .ew-modal--small .ew-modal__content {
    max-width: 400px;
  }

  .ew-modal--large .ew-modal__content {
    max-width: 800px;
  }

  .ew-modal--full .ew-modal__content {
    width: 95%;
    max-width: none;
    height: 95vh;
  }

  .ew-modal__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px;
    border-bottom: 1px solid var(--ew-border-color-light, #f1f5f9);
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    position: relative;
  }

  .ew-modal__header::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--ew-border-color-light, #f1f5f9), transparent);
  }

  .ew-modal__title {
    font-size: 18px;
    font-weight: 600;
    color: var(--ew-text-color-primary, #1e293b);
    margin: 0;
    line-height: 1.4;
  }

  .ew-modal__close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border: none;
    background: transparent;
    border-radius: 50%;
    color: var(--ew-text-color-secondary, #64748b);
    cursor: pointer;
    transition: all var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
    position: relative;
    overflow: hidden;
  }

  .ew-modal__close::before {
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

  .ew-modal__close:hover::before {
    width: 40px;
    height: 40px;
  }

  .ew-modal__close:hover {
    background: rgba(14, 165, 233, 0.1);
    color: var(--ew-color-primary, #0ea5e9);
    transform: scale(1.1);
  }

  .ew-modal__close:active {
    transform: scale(0.95);
  }

  .ew-modal__body {
    padding: 24px;
    color: var(--ew-text-color, #334155);
    line-height: var(--ew-line-height-normal, 1.5);
    overflow-y: auto;
    max-height: calc(90vh - 140px);
  }

  .ew-modal__body::-webkit-scrollbar {
    width: 6px;
  }

  .ew-modal__body::-webkit-scrollbar-track {
    background: var(--ew-border-color-light, #f1f5f9);
    border-radius: 3px;
  }

  .ew-modal__body::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, var(--ew-color-primary, #0ea5e9) 0%, var(--ew-color-primary-light, #38bdf8) 100%);
    border-radius: 3px;
  }

  .ew-modal__body::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, var(--ew-color-primary-light, #38bdf8) 0%, var(--ew-color-primary, #0ea5e9) 100%);
  }

  .ew-modal__footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
    padding: 20px 24px;
    border-top: 1px solid var(--ew-border-color-light, #f1f5f9);
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    position: relative;
  }

  .ew-modal__footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--ew-border-color-light, #f1f5f9), transparent);
  }

  .ew-modal__footer--center {
    justify-content: center;
  }

  .ew-modal__footer--left {
    justify-content: flex-start;
  }

  .ew-modal__footer--space-between {
    justify-content: space-between;
  }

  /* 按钮样式 */
  .ew-modal__btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 20px;
    min-height: 40px;
    font-family: var(--ew-font-family, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif);
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    color: var(--ew-text-color, #334155);
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    border: 2px solid var(--ew-border-color, #e2e8f0);
    border-radius: var(--ew-border-radius, 8px);
    cursor: pointer;
    transition: all var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
    user-select: none;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  .ew-modal__btn::before {
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

  .ew-modal__btn:hover::before {
    width: 60px;
    height: 60px;
  }

  .ew-modal__btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(14, 165, 233, 0.1);
  }

  .ew-modal__btn:active {
    transform: translateY(0);
  }

  .ew-modal__btn--primary {
    background: linear-gradient(135deg, var(--ew-color-primary, #0ea5e9) 0%, var(--ew-color-primary-light, #38bdf8) 100%);
    border-color: var(--ew-color-primary, #0ea5e9);
    color: var(--ew-color-white, #ffffff);
    box-shadow: 0 4px 8px rgba(14, 165, 233, 0.2);
  }

  .ew-modal__btn--primary:hover {
    background: linear-gradient(135deg, var(--ew-color-primary-light, #38bdf8) 0%, var(--ew-color-primary, #0ea5e9) 100%);
    box-shadow: 0 6px 12px rgba(14, 165, 233, 0.3);
  }

  .ew-modal__btn--success {
    background: linear-gradient(135deg, var(--ew-color-success, #10b981) 0%, var(--ew-color-success-light, #34d399) 100%);
    border-color: var(--ew-color-success, #10b981);
    color: var(--ew-color-white, #ffffff);
    box-shadow: 0 4px 8px rgba(16, 185, 129, 0.2);
  }

  .ew-modal__btn--success:hover {
    background: linear-gradient(135deg, var(--ew-color-success-light, #34d399) 0%, var(--ew-color-success, #10b981) 100%);
    box-shadow: 0 6px 12px rgba(16, 185, 129, 0.3);
  }

  .ew-modal__btn--danger {
    background: linear-gradient(135deg, var(--ew-color-danger, #ef4444) 0%, var(--ew-color-danger-light, #f87171) 100%);
    border-color: var(--ew-color-danger, #ef4444);
    color: var(--ew-color-white, #ffffff);
    box-shadow: 0 4px 8px rgba(239, 68, 68, 0.2);
  }

  .ew-modal__btn--danger:hover {
    background: linear-gradient(135deg, var(--ew-color-danger-light, #f87171) 0%, var(--ew-color-danger, #ef4444) 100%);
    box-shadow: 0 6px 12px rgba(239, 68, 68, 0.3);
  }

  .ew-modal__btn--warning {
    background: linear-gradient(135deg, var(--ew-color-warning, #f59e0b) 0%, var(--ew-color-warning-light, #fbbf24) 100%);
    border-color: var(--ew-color-warning, #f59e0b);
    color: var(--ew-color-white, #ffffff);
    box-shadow: 0 4px 8px rgba(245, 158, 11, 0.2);
  }

  .ew-modal__btn--warning:hover {
    background: linear-gradient(135deg, var(--ew-color-warning-light, #fbbf24) 0%, var(--ew-color-warning, #f59e0b) 100%);
    box-shadow: 0 6px 12px rgba(245, 158, 11, 0.3);
  }

  /* 加载状态 */
  .ew-modal--loading .ew-modal__content {
    pointer-events: none;
  }

  .ew-modal__loading-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    border: 4px solid var(--ew-border-color-light, #f1f5f9);
    border-top: 4px solid var(--ew-color-primary, #0ea5e9);
    border-radius: 50%;
    animation: ew-spin 1s linear infinite;
    z-index: 10;
  }

  @keyframes ew-spin {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
  }

  /* 动画效果 */
  .ew-modal--fade-in {
    animation: ew-modal-fade-in 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .ew-modal--fade-out {
    animation: ew-modal-fade-out 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @keyframes ew-modal-fade-in {
    0% {
      opacity: 0;
      transform: scale(0.9) translateY(20px);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  @keyframes ew-modal-fade-out {
    0% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
    100% {
      opacity: 0;
      transform: scale(0.9) translateY(20px);
    }
  }

  /* 响应式 */
  @media (max-width: 768px) {
    .ew-modal__content {
      width: 95%;
      margin: 20px;
    }

    .ew-modal__header,
    .ew-modal__body,
    .ew-modal__footer {
      padding: 16px;
    }

    .ew-modal__footer {
      flex-direction: column;
      gap: 8px;
    }

    .ew-modal__btn {
      width: 100%;
    }
  }

  /* 暗色主题 */
  [data-theme="dark"] .ew-modal__overlay,
  .dark .ew-modal__overlay {
    background: var(--ew-bg-color-overlay-dark, rgba(2, 6, 23, 0.8));
  }

  [data-theme="dark"] .ew-modal__content,
  .dark .ew-modal__content {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    box-shadow: 0 25px 50px -12px rgba(56, 189, 248, 0.25), 0 10px 20px -5px rgba(56, 189, 248, 0.1);
  }

  [data-theme="dark"] .ew-modal__content::before,
  .dark .ew-modal__content::before {
    background: linear-gradient(90deg, var(--ew-color-primary, #38bdf8) 0%, var(--ew-color-primary-light, #7dd3fc) 100%);
  }

  [data-theme="dark"] .ew-modal__header,
  .dark .ew-modal__header {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    border-bottom-color: #334155;
  }

  [data-theme="dark"] .ew-modal__header::after,
  .dark .ew-modal__header::after {
    background: linear-gradient(90deg, transparent, #334155, transparent);
  }

  [data-theme="dark"] .ew-modal__title,
  .dark .ew-modal__title {
    color: var(--ew-text-color-primary-dark, #f8fafc);
  }

  [data-theme="dark"] .ew-modal__close,
  .dark .ew-modal__close {
    color: #94a3b8;
  }

  [data-theme="dark"] .ew-modal__close:hover,
  .dark .ew-modal__close:hover {
    background: rgba(56, 189, 248, 0.1);
    color: var(--ew-color-primary, #38bdf8);
  }

  [data-theme="dark"] .ew-modal__body,
  .dark .ew-modal__body {
    color: var(--ew-text-color-dark, #e2e8f0);
  }

  [data-theme="dark"] .ew-modal__body::-webkit-scrollbar-track,
  .dark .ew-modal__body::-webkit-scrollbar-track {
    background: #334155;
  }

  [data-theme="dark"] .ew-modal__body::-webkit-scrollbar-thumb,
  .dark .ew-modal__body::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, var(--ew-color-primary, #38bdf8) 0%, var(--ew-color-primary-light, #7dd3fc) 100%);
  }

  [data-theme="dark"] .ew-modal__footer,
  .dark .ew-modal__footer {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    border-top-color: #334155;
  }

  [data-theme="dark"] .ew-modal__footer::before,
  .dark .ew-modal__footer::before {
    background: linear-gradient(90deg, transparent, #334155, transparent);
  }

  [data-theme="dark"] .ew-modal__btn,
  .dark .ew-modal__btn {
    background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
    border-color: #475569;
    color: #e2e8f0;
  }

  [data-theme="dark"] .ew-modal__btn:hover,
  .dark .ew-modal__btn:hover {
    border-color: #64748b;
    box-shadow: 0 4px 8px rgba(56, 189, 248, 0.1);
  }
`; 
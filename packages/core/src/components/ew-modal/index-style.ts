export const modalStyles = `
  .ew-modal__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--ew-bg-color-overlay, rgba(0, 0, 0, 0.5));
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: var(--ew-z-index-modal-backdrop, 1040);
    opacity: 0;
    visibility: hidden;
    transition: all var(--ew-transition-slow, 300ms ease-in-out);
    backdrop-filter: blur(4px);
  }

  .ew-modal__overlay--visible {
    opacity: 1;
    visibility: visible;
  }

  .ew-modal {
    background: var(--ew-bg-color, #ffffff);
    border-radius: var(--ew-border-radius-lg, 12px);
    box-shadow: var(--ew-shadow-xl, 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04));
    position: relative;
    margin: var(--ew-spacing-4, 16px);
    max-width: 90vw;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    transform: scale(0.95) translateY(20px);
    transition: all var(--ew-transition-slow, 300ms ease-in-out);
    overflow: hidden;
  }

  .ew-modal__overlay--visible .ew-modal {
    transform: scale(1) translateY(0);
  }

  /* 模态框尺寸 */
  .ew-modal--small {
    max-width: 400px;
  }

  .ew-modal--medium {
    max-width: 600px;
  }

  .ew-modal--large {
    max-width: 800px;
  }

  .ew-modal--full {
    max-width: 95vw;
    max-height: 95vh;
  }

  /* 模态框头部 */
  .ew-modal__header {
    padding: var(--ew-spacing-5, 20px) var(--ew-spacing-6, 24px) 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
  }

  .ew-modal__title {
    margin: 0;
    font-family: var(--ew-font-family);
    font-size: var(--ew-font-size-lg, 18px);
    font-weight: 600;
    color: var(--ew-text-color-primary, #1f2937);
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
    color: var(--ew-text-color-secondary, #6b7280);
    cursor: pointer;
    border-radius: var(--ew-border-radius, 6px);
    transition: all var(--ew-transition-fast, 150ms ease-in-out);
    flex-shrink: 0;
  }

  .ew-modal__close:hover {
    background: var(--ew-color-gray-100, #f3f4f6);
    color: var(--ew-text-color-primary, #1f2937);
  }

  .ew-modal__close:focus-visible {
    outline: 2px solid var(--ew-color-primary, #3b82f6);
    outline-offset: 2px;
  }

  /* 模态框内容 */
  .ew-modal__body {
    padding: var(--ew-spacing-5, 20px) var(--ew-spacing-6, 24px);
    flex: 1;
    overflow-y: auto;
    color: var(--ew-text-color-regular, #4b5563);
    line-height: 1.6;
    font-family: var(--ew-font-family);
    font-size: var(--ew-font-size-sm, 14px);
  }

  .ew-modal__body::-webkit-scrollbar {
    width: 6px;
  }

  .ew-modal__body::-webkit-scrollbar-track {
    background: var(--ew-color-gray-100, #f3f4f6);
    border-radius: var(--ew-border-radius-sm, 4px);
  }

  .ew-modal__body::-webkit-scrollbar-thumb {
    background: var(--ew-color-gray-300, #d1d5db);
    border-radius: var(--ew-border-radius-sm, 4px);
  }

  .ew-modal__body::-webkit-scrollbar-thumb:hover {
    background: var(--ew-color-gray-400, #9ca3af);
  }

  /* 模态框底部 */
  .ew-modal__footer {
    padding: 0 var(--ew-spacing-6, 24px) var(--ew-spacing-5, 20px);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--ew-spacing-3, 12px);
    flex-shrink: 0;
    border-top: 1px solid var(--ew-border-color-light, #f3f4f6);
    margin-top: var(--ew-spacing-5, 20px);
    padding-top: var(--ew-spacing-5, 20px);
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

  /* 模态框按钮 */
  .ew-modal__btn {
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
    outline: none;
    min-height: 36px;
    min-width: 80px;
  }

  .ew-modal__btn:hover {
    border-color: var(--ew-color-primary, #3b82f6);
    color: var(--ew-color-primary, #3b82f6);
    transform: translateY(-1px);
    box-shadow: var(--ew-shadow, 0 1px 3px 0 rgba(0, 0, 0, 0.1));
  }

  .ew-modal__btn:active {
    transform: translateY(0);
    box-shadow: var(--ew-shadow-sm, 0 1px 2px 0 rgba(0, 0, 0, 0.05));
  }

  .ew-modal__btn:focus-visible {
    outline: 2px solid var(--ew-color-primary, #3b82f6);
    outline-offset: 2px;
  }

  .ew-modal__btn--confirm {
    background: var(--ew-color-primary, #3b82f6);
    border-color: var(--ew-color-primary, #3b82f6);
    color: var(--ew-color-white, #ffffff);
  }

  .ew-modal__btn--confirm:hover {
    background: var(--ew-color-primary-dark, #2563eb);
    border-color: var(--ew-color-primary-dark, #2563eb);
    color: var(--ew-color-white, #ffffff);
  }

  .ew-modal__btn--danger {
    background: var(--ew-color-danger, #ef4444);
    border-color: var(--ew-color-danger, #ef4444);
    color: var(--ew-color-white, #ffffff);
  }

  .ew-modal__btn--danger:hover {
    background: #dc2626;
    border-color: #dc2626;
    color: var(--ew-color-white, #ffffff);
  }

  .ew-modal__btn--success {
    background: var(--ew-color-success, #10b981);
    border-color: var(--ew-color-success, #10b981);
    color: var(--ew-color-white, #ffffff);
  }

  .ew-modal__btn--success:hover {
    background: #059669;
    border-color: #059669;
    color: var(--ew-color-white, #ffffff);
  }

  .ew-modal__btn--warning {
    background: var(--ew-color-warning, #f59e0b);
    border-color: var(--ew-color-warning, #f59e0b);
    color: var(--ew-color-white, #ffffff);
  }

  .ew-modal__btn--warning:hover {
    background: #d97706;
    border-color: #d97706;
    color: var(--ew-color-white, #ffffff);
  }

  /* 模态框尺寸变体 */
  .ew-modal--small .ew-modal__btn {
    padding: var(--ew-spacing-1, 4px) var(--ew-spacing-3, 12px);
    font-size: var(--ew-font-size-xs, 12px);
    min-height: 28px;
  }

  .ew-modal--large .ew-modal__btn {
    padding: var(--ew-spacing-3, 12px) var(--ew-spacing-5, 20px);
    font-size: var(--ew-font-size-base, 16px);
    min-height: 44px;
  }

  /* 模态框插槽 */
  .ew-modal slot {
    display: block;
  }

  /* 模态框动画 */
  @keyframes ew-modal-fade-in {
    from {
      opacity: 0;
      transform: scale(0.95) translateY(20px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  @keyframes ew-modal-fade-out {
    from {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
    to {
      opacity: 0;
      transform: scale(0.95) translateY(20px);
    }
  }

  /* 响应式模态框 */
  @media (max-width: 768px) {
    .ew-modal {
      margin: var(--ew-spacing-2, 8px);
      max-width: calc(100vw - 16px);
      max-height: calc(100vh - 16px);
    }

    .ew-modal__header {
      padding: var(--ew-spacing-4, 16px) var(--ew-spacing-4, 16px) 0;
    }

    .ew-modal__body {
      padding: var(--ew-spacing-4, 16px);
    }

    .ew-modal__footer {
      padding: 0 var(--ew-spacing-4, 16px) var(--ew-spacing-4, 16px);
      flex-direction: column;
      gap: var(--ew-spacing-2, 8px);
    }

    .ew-modal__btn {
      width: 100%;
    }
  }

  /* 模态框变体 */
  .ew-modal--centered {
    align-items: center;
    justify-content: center;
  }

  .ew-modal--top {
    align-items: flex-start;
    justify-content: center;
    padding-top: var(--ew-spacing-6, 24px);
  }

  .ew-modal--bottom {
    align-items: flex-end;
    justify-content: center;
    padding-bottom: var(--ew-spacing-6, 24px);
  }

  /* 模态框状态 */
  .ew-modal--loading {
    pointer-events: none;
  }

  .ew-modal--loading::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .ew-modal__loading-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
`; 
export const modalStyles = `
  .ew-modal__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .ew-modal__overlay--visible {
    opacity: 1;
  }

  .ew-modal {
    background: var(--ew-modal-bg, #ffffff);
    border-radius: 4px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    position: relative;
    margin: 0 auto;
    max-width: 90%;
    max-height: 90%;
    display: flex;
    flex-direction: column;
    transform: scale(0.8);
    transition: transform 0.3s ease;
  }

  .ew-modal__overlay--visible .ew-modal {
    transform: scale(1);
  }

  .ew-modal--center {
    margin: auto;
  }

  .ew-modal__header {
    padding: 20px 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .ew-modal__title {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    color: var(--ew-text-color-primary, #303133);
    line-height: 1.4;
  }

  .ew-modal__close {
    background: none;
    border: none;
    font-size: 18px;
    color: var(--ew-text-color-secondary, #909399);
    cursor: pointer;
    padding: 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    transition: all 0.2s ease;
  }

  .ew-modal__close:hover {
    background: var(--ew-fill-color-light, #f5f7fa);
    color: var(--ew-text-color-primary, #303133);
  }

  .ew-modal__body {
    padding: 20px;
    flex: 1;
    overflow-y: auto;
    color: var(--ew-text-color-regular, #606266);
    line-height: 1.6;
  }

  .ew-modal__footer {
    padding: 0 20px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
  }

  .ew-modal__btn {
    padding: 8px 16px;
    border: 1px solid var(--ew-border-color-base, #dcdfe6);
    border-radius: 4px;
    background: var(--ew-button-bg, #ffffff);
    color: var(--ew-text-color-regular, #606266);
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease;
    outline: none;
  }

  .ew-modal__btn:hover {
    border-color: var(--ew-primary-color, #409eff);
    color: var(--ew-primary-color, #409eff);
  }

  .ew-modal__btn--confirm {
    background: var(--ew-primary-color, #409eff);
    border-color: var(--ew-primary-color, #409eff);
    color: #ffffff;
  }

  .ew-modal__btn--confirm:hover {
    background: var(--ew-primary-hover, #66b1ff);
    border-color: var(--ew-primary-hover, #66b1ff);
    color: #ffffff;
  }
`; 
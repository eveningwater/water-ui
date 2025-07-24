export const inputStyles = `
  .ew-input {
    position: relative;
    display: inline-block;
    width: 100%;
    font-size: 14px;
    line-height: 1.4;
  }

  .ew-input__inner {
    display: inline-block;
    width: 100%;
    padding: 8px 12px;
    border: 1px solid var(--ew-border-color-base, #dcdfe6);
    border-radius: 4px;
    background: var(--ew-input-bg, #ffffff);
    color: var(--ew-text-color-regular, #606266);
    font-size: 14px;
    line-height: 1.4;
    transition: all 0.2s ease;
    outline: none;
    box-sizing: border-box;
    min-height: 32px;
  }

  .ew-input__inner:focus {
    border-color: var(--ew-primary-color, #409eff);
    box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.2);
  }

  .ew-input__inner:hover {
    border-color: var(--ew-border-color-light, #c0c4cc);
  }

  .ew-input__inner::placeholder {
    color: var(--ew-text-color-placeholder, #c0c4cc);
  }

  .ew-input--disabled .ew-input__inner {
    background: var(--ew-fill-color-light, #f5f7fa);
    border-color: var(--ew-border-color-light, #e4e7ed);
    color: var(--ew-text-color-disabled, #c0c4cc);
    cursor: not-allowed;
  }

  .ew-input--small .ew-input__inner {
    padding: 6px 10px;
    font-size: 12px;
    min-height: 28px;
  }

  .ew-input--large .ew-input__inner {
    padding: 12px 16px;
    font-size: 16px;
    min-height: 40px;
  }

  .ew-input__clear,
  .ew-input__password-toggle {
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    cursor: pointer;
    color: var(--ew-text-color-secondary, #c0c4cc);
    transition: color 0.2s ease;
    user-select: none;
  }

  .ew-input__clear:hover,
  .ew-input__password-toggle:hover {
    color: var(--ew-text-color-regular, #606266);
  }

  .ew-input--disabled .ew-input__clear,
  .ew-input--disabled .ew-input__password-toggle {
    cursor: not-allowed;
    color: var(--ew-text-color-disabled, #c0c4cc);
  }
`; 
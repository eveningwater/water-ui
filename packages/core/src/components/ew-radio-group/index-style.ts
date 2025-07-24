export const radioGroupStyles = `
  .ew-radio-group {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 12px;
    font-family: var(--ew-font-family, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
    font-size: var(--ew-font-size-base, 14px);
    line-height: var(--ew-line-height-base, 1.5);
  }

  .ew-radio-group--vertical {
    flex-direction: column;
    align-items: flex-start;
  }

  .ew-radio-group--disabled {
    opacity: 0.6;
    pointer-events: none;
  }

  .ew-radio-group--small {
    gap: 8px;
  }

  .ew-radio-group--large {
    gap: 16px;
  }

  /* 按钮组样式 */
  .ew-radio-group--button {
    gap: 0;
  }

  .ew-radio-group--button .ew-radio,
  .ew-radio-group--button .ew-radio-button {
    margin: 0;
  }

  .ew-radio-group--button .ew-radio:not(:last-child) .ew-radio__label,
  .ew-radio-group--button .ew-radio-button:not(:last-child) .ew-radio-button__inner {
    border-right: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .ew-radio-group--button .ew-radio:not(:first-child) .ew-radio__label,
  .ew-radio-group--button .ew-radio-button:not(:first-child) .ew-radio-button__inner {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .ew-radio-group--button .ew-radio:first-child .ew-radio__label,
  .ew-radio-group--button .ew-radio-button:first-child .ew-radio-button__inner {
    border-top-left-radius: var(--ew-border-radius, 6px);
    border-bottom-left-radius: var(--ew-border-radius, 6px);
  }

  .ew-radio-group--button .ew-radio:last-child .ew-radio__label,
  .ew-radio-group--button .ew-radio-button:last-child .ew-radio-button__inner {
    border-top-right-radius: var(--ew-border-radius, 6px);
    border-bottom-right-radius: var(--ew-border-radius, 6px);
  }

  /* 暗色主题 */
  [data-theme="dark"] .ew-radio-group,
  .dark .ew-radio-group {
    color: var(--ew-text-color-dark, #e5e7eb);
  }
`; 
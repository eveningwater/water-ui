export const checkboxGroupStyles = `
  .ew-checkbox-group {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 12px;
    font-family: var(--ew-font-family, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
    font-size: var(--ew-font-size-base, 14px);
    line-height: var(--ew-line-height-base, 1.5);
  }

  .ew-checkbox-group--vertical {
    flex-direction: column;
    align-items: flex-start;
  }

  .ew-checkbox-group--disabled {
    opacity: 0.6;
    pointer-events: none;
  }

  .ew-checkbox-group--small {
    gap: 8px;
  }

  .ew-checkbox-group--large {
    gap: 16px;
  }

  /* 按钮组样式 */
  .ew-checkbox-group--button {
    gap: 0;
  }

  .ew-checkbox-group--button .ew-checkbox {
    margin: 0;
  }

  .ew-checkbox-group--button .ew-checkbox:not(:last-child) .ew-checkbox__label {
    border-right: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .ew-checkbox-group--button .ew-checkbox:not(:first-child) .ew-checkbox__label {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .ew-checkbox-group--button .ew-checkbox:first-child .ew-checkbox__label {
    border-top-left-radius: var(--ew-border-radius, 6px);
    border-bottom-left-radius: var(--ew-border-radius, 6px);
  }

  .ew-checkbox-group--button .ew-checkbox:last-child .ew-checkbox__label {
    border-top-right-radius: var(--ew-border-radius, 6px);
    border-bottom-right-radius: var(--ew-border-radius, 6px);
  }

  /* 暗色主题 */
  [data-theme="dark"] .ew-checkbox-group,
  .dark .ew-checkbox-group {
    color: var(--ew-text-color-dark, #e5e7eb);
  }
`; 
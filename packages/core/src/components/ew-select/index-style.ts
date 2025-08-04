export const selectStyles = `
  .ew-select {
    position: relative;
    display: inline-block;
    width: 100%;
    font-family: var(--ew-font-family, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif);
    font-size: var(--ew-font-size-base, 14px);
    line-height: var(--ew-line-height-normal, 1.5);
  }

  .ew-select__wrapper {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    min-height: var(--ew-input-height, 36px);
    padding: 0 var(--ew-input-padding-x, 12px);
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    border: 2px solid var(--ew-border-color, #e2e8f0);
    border-radius: var(--ew-input-border-radius, 8px);
    transition: all var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    user-select: none;
  }

  .ew-select__wrapper::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.05), transparent);
    transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
  }

  .ew-select__wrapper:hover::before {
    left: 100%;
  }

  .ew-select__wrapper:hover {
    border-color: var(--ew-color-primary-light, #38bdf8);
    box-shadow: 0 4px 8px rgba(14, 165, 233, 0.1);
  }

  .ew-select__wrapper.ew-select__wrapper--focused {
    border-color: var(--ew-color-primary, #0ea5e9);
    box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1), 0 4px 12px rgba(14, 165, 233, 0.15);
    transform: translateY(-1px);
  }

  .ew-select__wrapper.ew-select__wrapper--focused::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, var(--ew-color-primary, #0ea5e9) 0%, var(--ew-color-primary-light, #38bdf8) 100%);
    animation: ew-select-focus-line 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @keyframes ew-select-focus-line {
    0% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(1);
    }
  }

  .ew-select__input {
    flex: 1;
    width: 100%;
    min-height: var(--ew-input-height, 36px);
    padding: var(--ew-input-padding-y, 8px) 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: var(--ew-text-color, #334155);
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    pointer-events: none;
  }

  .ew-select__input::placeholder {
    color: var(--ew-text-color-placeholder, #94a3b8);
    transition: color var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
  }

  .ew-select__wrapper.ew-select__wrapper--focused .ew-select__input::placeholder {
    color: var(--ew-text-color-secondary, #64748b);
  }

  .ew-select__suffix {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-left: 8px;
    color: var(--ew-text-color-secondary, #64748b);
    transition: all var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
  }

  .ew-select__wrapper.ew-select__wrapper--focused .ew-select__suffix {
    color: var(--ew-color-primary, #0ea5e9);
    transform: rotate(180deg);
  }

  .ew-select__clear {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    padding: 2px;
    margin-left: 4px;
    color: var(--ew-text-color-secondary, #64748b);
    background: transparent;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: all var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
    opacity: 0;
  }

  .ew-select__wrapper:hover .ew-select__clear,
  .ew-select__wrapper.ew-select__wrapper--focused .ew-select__clear {
    opacity: 1;
  }

  .ew-select__clear:hover {
    color: var(--ew-color-primary, #0ea5e9);
    background: rgba(14, 165, 233, 0.1);
    transform: scale(1.1);
  }

  .ew-select__clear:active {
    transform: scale(0.95);
  }

  .ew-select__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    flex: 1;
    min-height: var(--ew-input-height, 36px);
    padding: var(--ew-input-padding-y, 8px) 0;
  }

  .ew-select__tag {
    display: inline-flex;
    align-items: center;
    padding: 2px 8px;
    font-size: 12px;
    color: var(--ew-color-primary, #0ea5e9);
    background: rgba(14, 165, 233, 0.1);
    border: 1px solid rgba(14, 165, 233, 0.2);
    border-radius: 4px;
    transition: all var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
  }

  .ew-select__tag:hover {
    background: rgba(14, 165, 233, 0.15);
    border-color: rgba(14, 165, 233, 0.3);
  }

  .ew-select__tag--collapse {
    background: rgba(14, 165, 233, 0.2);
    border-color: rgba(14, 165, 233, 0.3);
    cursor: default;
  }

  .ew-select__tag--collapse:hover {
    background: rgba(14, 165, 233, 0.25);
  }

  .ew-select__tag-close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12px;
    height: 12px;
    margin-left: 4px;
    color: inherit;
    background: transparent;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: all var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
  }

  .ew-select__tag-close:hover {
    background: rgba(14, 165, 233, 0.2);
    transform: scale(1.1);
  }

  .ew-select__dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 1000;
    margin-top: 4px;
    background: #ffffff;
    border: 2px solid var(--ew-border-color, #e2e8f0);
    border-radius: var(--ew-input-border-radius, 8px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
    max-height: 300px;
    overflow: hidden;
  }

  .ew-select__dropdown.ew-select__dropdown--visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .ew-select__dropdown-header {
    padding: 8px 12px;
    font-size: 12px;
    color: var(--ew-text-color-secondary, #64748b);
    background: var(--ew-bg-color-page, #f8fafc);
    border-bottom: 1px solid var(--ew-border-color, #e2e8f0);
  }

  .ew-select__dropdown-body {
    max-height: 250px;
    overflow-y: auto;
  }

  .ew-select__dropdown-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .ew-select__option {
    display: flex;
    align-items: center;
    padding: 8px 12px;
    font-size: inherit;
    color: var(--ew-text-color, #334155);
    background: transparent;
    border: none;
    cursor: pointer;
    transition: all var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
  }

  .ew-select__option:hover {
    background: var(--ew-color-primary-light, #38bdf8);
    color: #ffffff;
  }

  .ew-select__option.ew-select__option--selected {
    background: var(--ew-color-primary, #0ea5e9);
    color: #ffffff;
  }

  .ew-select__option.ew-select__option--disabled {
    color: var(--ew-text-color-disabled, #cbd5e1);
    cursor: not-allowed;
    background: transparent;
  }

  .ew-select__option.ew-select__option--disabled:hover {
    background: transparent;
    color: var(--ew-text-color-disabled, #cbd5e1);
  }

  .ew-select__option.ew-select__option--highlighted {
    background: var(--ew-color-primary-light, #38bdf8);
    color: #ffffff;
  }

  .ew-select__option-check {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    margin-right: 8px;
    color: inherit;
  }

  .ew-select__option-label {
    flex: 1;
    text-align: left;
  }

  .ew-select__dropdown-footer {
    padding: 8px 12px;
    font-size: 12px;
    color: var(--ew-text-color-secondary, #64748b);
    background: var(--ew-bg-color-page, #f8fafc);
    border-top: 1px solid var(--ew-border-color, #e2e8f0);
    text-align: center;
  }

  .ew-select__option-group {
    margin: 0;
    padding: 0;
  }

  .ew-select__option-group-header {
    padding: 8px 12px;
    font-size: 12px;
    color: var(--ew-text-color-secondary, #64748b);
    background: var(--ew-bg-color-page, #f8fafc);
    border-bottom: 1px solid var(--ew-border-color, #e2e8f0);
    font-weight: 500;
    cursor: default;
  }

  .ew-select__option-group-body {
    margin: 0;
    padding: 0;
  }

  .ew-select__option-group-body .ew-select__option {
    padding-left: 20px;
  }

  .ew-select__loading {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    color: var(--ew-text-color-secondary, #64748b);
  }

  .ew-select__empty {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    color: var(--ew-text-color-secondary, #64748b);
  }

  /* 禁用状态 */
  .ew-select--disabled .ew-select__wrapper {
    background: var(--ew-bg-color-disabled, #f1f5f9);
    border-color: var(--ew-border-color-disabled, #e2e8f0);
    cursor: not-allowed;
    opacity: 0.6;
    pointer-events: none;
  }

  .ew-select--disabled .ew-select__wrapper.ew-select__wrapper--disabled {
    background: var(--ew-bg-color-disabled, #f1f5f9);
    border-color: var(--ew-border-color-disabled, #e2e8f0);
    cursor: not-allowed;
    opacity: 0.6;
    pointer-events: none;
  }

  .ew-select--disabled .ew-select__wrapper::before {
    display: none;
  }

  .ew-select--disabled .ew-select__input {
    color: var(--ew-text-color-disabled, #cbd5e1);
    cursor: not-allowed;
  }

  .ew-select--disabled .ew-select__suffix {
    color: var(--ew-text-color-disabled, #cbd5e1);
  }

  /* 尺寸变体 */
  .ew-select--small .ew-select__wrapper {
    min-height: 28px;
    padding: 0 8px;
  }

  .ew-select--small .ew-select__input {
    min-height: 28px;
    padding: 4px 0;
    font-size: 12px;
  }

  .ew-select--small .ew-select__tags {
    min-height: 28px;
    padding: 4px 0;
  }

  .ew-select--large .ew-select__wrapper {
    min-height: 44px;
    padding: 0 16px;
  }

  .ew-select--large .ew-select__input {
    min-height: 44px;
    padding: 12px 0;
    font-size: 16px;
  }

  .ew-select--large .ew-select__tags {
    min-height: 44px;
    padding: 12px 0;
  }

  /* 状态样式 */
  .ew-select--error .ew-select__wrapper {
    border-color: var(--ew-color-danger, #ef4444);
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
  }

  .ew-select--error .ew-select__wrapper.ew-select__wrapper--focused {
    border-color: var(--ew-color-danger, #ef4444);
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);
  }

  .ew-select--success .ew-select__wrapper {
    border-color: var(--ew-color-success, #10b981);
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
  }

  .ew-select--success .ew-select__wrapper.ew-select__wrapper--focused {
    border-color: var(--ew-color-success, #10b981);
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
  }

  .ew-select--warning .ew-select__wrapper {
    border-color: var(--ew-color-warning, #f59e0b);
    box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
  }

  .ew-select--warning .ew-select__wrapper.ew-select__wrapper--focused {
    border-color: var(--ew-color-warning, #f59e0b);
    box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.2);
  }

  /* 暗色主题 */
  [data-theme="dark"] .ew-select__wrapper,
  .dark .ew-select__wrapper {
    background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
    border-color: #475569;
  }

  [data-theme="dark"] .ew-select__wrapper:hover,
  .dark .ew-select__wrapper:hover {
    border-color: #64748b;
    box-shadow: 0 4px 8px rgba(56, 189, 248, 0.1);
  }

  [data-theme="dark"] .ew-select__wrapper.ew-select__wrapper--focused,
  .dark .ew-select__wrapper.ew-select__wrapper--focused {
    border-color: var(--ew-color-primary, #38bdf8);
    box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.1), 0 4px 12px rgba(56, 189, 248, 0.15);
  }

  [data-theme="dark"] .ew-select__input,
  .dark .ew-select__input {
    color: #e2e8f0;
  }

  [data-theme="dark"] .ew-select__input::placeholder,
  .dark .ew-select__input::placeholder {
    color: #64748b;
  }

  [data-theme="dark"] .ew-select__suffix,
  .dark .ew-select__suffix {
    color: #94a3b8;
  }

  [data-theme="dark"] .ew-select__wrapper.ew-select__wrapper--focused .ew-select__suffix,
  .dark .ew-select__wrapper.ew-select__wrapper--focused .ew-select__suffix {
    color: var(--ew-color-primary, #38bdf8);
  }

  [data-theme="dark"] .ew-select__dropdown,
  .dark .ew-select__dropdown {
    background: #1e293b;
    border-color: #475569;
  }

  [data-theme="dark"] .ew-select__option,
  .dark .ew-select__option {
    color: #e2e8f0;
  }

  [data-theme="dark"] .ew-select__option:hover,
  .dark .ew-select__option:hover {
    background: #334155;
    color: #ffffff;
  }

  [data-theme="dark"] .ew-select__option.ew-select__option--selected,
  .dark .ew-select__option.ew-select__option--selected {
    background: var(--ew-color-primary, #38bdf8);
    color: #ffffff;
  }

  [data-theme="dark"] .ew-select__dropdown-header,
  [data-theme="dark"] .ew-select__dropdown-footer,
  .dark .ew-select__dropdown-header,
  .dark .ew-select__dropdown-footer {
    background: #334155;
    border-color: #475569;
    color: #94a3b8;
  }
`; 
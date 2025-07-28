export const spaceStyles = `
  /* Space 基础样式 */
  :host {
    display: inline-flex;
    box-sizing: border-box;
  }

  .ew-space {
    display: inline-flex;
    box-sizing: border-box;
  }

  /* 方向样式 */
  .ew-space--horizontal {
    flex-direction: row;
  }

  .ew-space--vertical {
    flex-direction: column;
  }

  /* 对齐样式 */
  .ew-space--start {
    align-items: flex-start;
  }

  .ew-space--end {
    align-items: flex-end;
  }

  .ew-space--center {
    align-items: center;
  }

  .ew-space--baseline {
    align-items: baseline;
  }

  .ew-space--stretch {
    align-items: stretch;
  }

  /* 换行样式 */
  .ew-space--wrap {
    flex-wrap: wrap;
  }

  /* 填充样式 */
  .ew-space--fill {
    width: 100%;
  }

  /* 间距样式 */
  .ew-space--small {
    gap: 8px;
  }

  .ew-space--default {
    gap: 12px;
  }

  .ew-space--large {
    gap: 16px;
  }

  /* 自定义间距 */
  .ew-space--custom {
    gap: var(--ew-space-gap, 12px);
  }

  /* 响应式间距 */
  @media (max-width: 767px) {
    .ew-space--small {
      gap: 6px;
    }
    
    .ew-space--default {
      gap: 8px;
    }
    
    .ew-space--large {
      gap: 12px;
    }
  }

  /* 暗色主题 */
  :host([data-theme="dark"]) .ew-space {
    color: var(--ew-color-text-primary-dark, #e5e7eb);
  }
`; 
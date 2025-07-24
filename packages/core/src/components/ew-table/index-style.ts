export const tableStyles = `
  .ew-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    font-family: var(--ew-font-family);
    font-size: var(--ew-font-size-sm, 14px);
    line-height: 1.5;
    color: var(--ew-text-color-regular, #4b5563);
    background: var(--ew-bg-color, #ffffff);
    border-radius: var(--ew-border-radius, 6px);
    overflow: hidden;
    box-shadow: var(--ew-shadow-sm, 0 1px 2px 0 rgba(0, 0, 0, 0.05));
  }

  .ew-table--border {
    border: 1px solid var(--ew-border-color, #e5e7eb);
  }

  .ew-table--small {
    font-size: var(--ew-font-size-xs, 12px);
  }

  .ew-table--large {
    font-size: var(--ew-font-size-base, 16px);
  }

  .ew-table--fit {
    table-layout: fixed;
  }

  /* 表头 */
  .ew-table thead {
    background: var(--ew-color-gray-50, #f9fafb);
  }

  .ew-table th {
    padding: var(--ew-spacing-3, 12px) var(--ew-spacing-4, 16px);
    text-align: left;
    font-weight: 600;
    color: var(--ew-text-color-primary, #1f2937);
    background: var(--ew-color-gray-50, #f9fafb);
    border-bottom: 1px solid var(--ew-border-color, #e5e7eb);
    white-space: nowrap;
    position: relative;
  }

  .ew-table th:first-child {
    border-top-left-radius: var(--ew-border-radius, 6px);
  }

  .ew-table th:last-child {
    border-top-right-radius: var(--ew-border-radius, 6px);
  }

  /* 表格行 */
  .ew-table tr {
    transition: background-color var(--ew-transition-fast, 150ms ease-in-out);
  }

  .ew-table tr:hover {
    background: var(--ew-color-gray-50, #f9fafb);
  }

  .ew-table tr:last-child td:first-child {
    border-bottom-left-radius: var(--ew-border-radius, 6px);
  }

  .ew-table tr:last-child td:last-child {
    border-bottom-right-radius: var(--ew-border-radius, 6px);
  }

  /* 表格单元格 */
  .ew-table td {
    padding: var(--ew-spacing-3, 12px) var(--ew-spacing-4, 16px);
    text-align: left;
    border-bottom: 1px solid var(--ew-border-color-light, #f3f4f6);
    vertical-align: middle;
  }

  .ew-table tbody tr:last-child td {
    border-bottom: none;
  }

  /* 边框表格 */
  .ew-table--border th,
  .ew-table--border td {
    border-right: 1px solid var(--ew-border-color, #e5e7eb);
  }

  .ew-table--border th:last-child,
  .ew-table--border td:last-child {
    border-right: none;
  }

  /* 条纹表格 */
  .ew-table--stripe tbody tr:nth-child(even) {
    background: var(--ew-color-gray-50, #f9fafb);
  }

  .ew-table--stripe tbody tr:nth-child(even):hover {
    background: var(--ew-color-gray-100, #f3f4f6);
  }

  /* 紧凑表格 */
  .ew-table--compact th,
  .ew-table--compact td {
    padding: var(--ew-spacing-2, 8px) var(--ew-spacing-3, 12px);
  }

  /* 宽松表格 */
  .ew-table--relaxed th,
  .ew-table--relaxed td {
    padding: var(--ew-spacing-4, 16px) var(--ew-spacing-5, 20px);
  }

  /* 表格容器 */
  .ew-table__container {
    width: 100%;
    overflow-x: auto;
    border-radius: var(--ew-border-radius, 6px);
    box-shadow: var(--ew-shadow-sm, 0 1px 2px 0 rgba(0, 0, 0, 0.05));
  }

  /* 表格头部 */
  .ew-table__header {
    padding: var(--ew-spacing-4, 16px);
    border-bottom: 1px solid var(--ew-border-color, #e5e7eb);
    background: var(--ew-bg-color, #ffffff);
  }

  .ew-table__title {
    margin: 0;
    font-size: var(--ew-font-size-lg, 18px);
    font-weight: 600;
    color: var(--ew-text-color-primary, #1f2937);
  }

  /* 表格底部 */
  .ew-table__footer {
    padding: var(--ew-spacing-4, 16px);
    border-top: 1px solid var(--ew-border-color, #e5e7eb);
    background: var(--ew-bg-color, #ffffff);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* 分页 */
  .ew-table__pagination {
    display: flex;
    align-items: center;
    gap: var(--ew-spacing-2, 8px);
  }

  .ew-table__pagination-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border: 1px solid var(--ew-border-color, #e5e7eb);
    border-radius: var(--ew-border-radius-sm, 4px);
    background: var(--ew-bg-color, #ffffff);
    color: var(--ew-text-color-regular, #4b5563);
    cursor: pointer;
    transition: all var(--ew-transition-fast, 150ms ease-in-out);
  }

  .ew-table__pagination-button:hover {
    border-color: var(--ew-color-primary, #3b82f6);
    color: var(--ew-color-primary, #3b82f6);
  }

  .ew-table__pagination-button--active {
    background: var(--ew-color-primary, #3b82f6);
    border-color: var(--ew-color-primary, #3b82f6);
    color: var(--ew-color-white, #ffffff);
  }

  .ew-table__pagination-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .ew-table__pagination-button--disabled:hover {
    border-color: var(--ew-border-color, #e5e7eb);
    color: var(--ew-text-color-regular, #4b5563);
  }

  /* 排序图标 */
  .ew-table__sort-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    margin-left: var(--ew-spacing-1, 4px);
    color: var(--ew-text-color-secondary, #6b7280);
    transition: color var(--ew-transition-fast, 150ms ease-in-out);
  }

  .ew-table__sort-icon--asc,
  .ew-table__sort-icon--desc {
    color: var(--ew-color-primary, #3b82f6);
  }

  /* 选择框 */
  .ew-table__checkbox {
    width: 16px;
    height: 16px;
    border: 1px solid var(--ew-border-color, #e5e7eb);
    border-radius: var(--ew-border-radius-sm, 4px);
    background: var(--ew-bg-color, #ffffff);
    cursor: pointer;
    transition: all var(--ew-transition-fast, 150ms ease-in-out);
  }

  .ew-table__checkbox:checked {
    background: var(--ew-color-primary, #3b82f6);
    border-color: var(--ew-color-primary, #3b82f6);
  }

  .ew-table__checkbox:focus {
    outline: 2px solid var(--ew-color-primary, #3b82f6);
    outline-offset: 2px;
  }

  /* 展开行 */
  .ew-table__expand-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    margin-right: var(--ew-spacing-2, 8px);
    color: var(--ew-text-color-secondary, #6b7280);
    cursor: pointer;
    transition: transform var(--ew-transition-fast, 150ms ease-in-out);
  }

  .ew-table__expand-icon--expanded {
    transform: rotate(90deg);
  }

  /* 加载状态 */
  .ew-table--loading {
    position: relative;
  }

  .ew-table--loading::after {
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

  .ew-table__loading-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }

  /* 空状态 */
  .ew-table__empty {
    padding: var(--ew-spacing-8, 32px);
    text-align: center;
    color: var(--ew-text-color-secondary, #6b7280);
  }

  .ew-table__empty-icon {
    width: 48px;
    height: 48px;
    margin: 0 auto var(--ew-spacing-3, 12px);
    color: var(--ew-text-color-placeholder, #9ca3af);
  }

  .ew-table__empty-text {
    margin: 0;
    font-size: var(--ew-font-size-sm, 14px);
  }

  /* 响应式表格 */
  @media (max-width: 768px) {
    .ew-table {
      font-size: var(--ew-font-size-xs, 12px);
    }

    .ew-table th,
    .ew-table td {
      padding: var(--ew-spacing-2, 8px) var(--ew-spacing-3, 12px);
    }
  }

  /* 表格中的checkbox样式 */
  .ew-table__checkbox {
    margin: 0;
  }

  .ew-table__checkbox .ew-checkbox__inner {
    margin-right: 0;
  }

  .ew-table__checkbox .ew-checkbox__label {
    display: none;
  }
`; 
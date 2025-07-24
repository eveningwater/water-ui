export const tableStyles = `
  .ew-table {
    width: 100%;
    border-collapse: collapse;
    font-family: var(--ew-font-family, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif);
    font-size: var(--ew-font-size-base, 14px);
    line-height: var(--ew-line-height-normal, 1.5);
    color: var(--ew-text-color, #334155);
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    border-radius: var(--ew-table-border-radius, 8px);
    box-shadow: 0 4px 12px rgba(14, 165, 233, 0.1), 0 2px 4px rgba(14, 165, 233, 0.05);
    overflow: hidden;
    position: relative;
  }

  .ew-table::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(14, 165, 233, 0.02) 0%, rgba(56, 189, 248, 0.02) 100%);
    pointer-events: none;
    z-index: -1;
  }

  .ew-table thead {
    background: linear-gradient(135deg, var(--ew-table-header-bg, #f8fafc) 0%, #f1f5f9 100%);
    position: relative;
  }

  .ew-table thead::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--ew-color-primary, #0ea5e9) 0%, var(--ew-color-primary-light, #38bdf8) 100%);
    opacity: 0.3;
  }

  .ew-table th {
    padding: 16px 12px;
    font-weight: 600;
    color: var(--ew-text-color-primary, #1e293b);
    background: transparent;
    border-bottom: 1px solid var(--ew-border-color-light, #f1f5f9);
    text-align: left;
    white-space: nowrap;
    position: relative;
    transition: all var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
  }

  .ew-table th:hover {
    background: linear-gradient(135deg, rgba(14, 165, 233, 0.05) 0%, rgba(56, 189, 248, 0.05) 100%);
  }

  .ew-table th:first-child {
    border-top-left-radius: var(--ew-table-border-radius, 8px);
  }

  .ew-table th:last-child {
    border-top-right-radius: var(--ew-table-border-radius, 8px);
  }

  .ew-table tbody tr {
    transition: all var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
    position: relative;
  }

  .ew-table tbody tr::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(14, 165, 233, 0.02) 0%, rgba(56, 189, 248, 0.02) 100%);
    opacity: 0;
    transition: opacity var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
    pointer-events: none;
  }

  .ew-table tbody tr:hover::before {
    opacity: 1;
  }

  .ew-table tbody tr:hover {
    background: linear-gradient(135deg, var(--ew-table-row-hover-bg, #f1f5f9) 0%, #e2e8f0 100%);
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(14, 165, 233, 0.1);
  }

  .ew-table tbody tr:last-child td:first-child {
    border-bottom-left-radius: var(--ew-table-border-radius, 8px);
  }

  .ew-table tbody tr:last-child td:last-child {
    border-bottom-right-radius: var(--ew-table-border-radius, 8px);
  }

  .ew-table td {
    padding: 16px 12px;
    border-bottom: 1px solid var(--ew-border-color-light, #f1f5f9);
    vertical-align: middle;
    transition: all var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
  }

  .ew-table tbody tr:last-child td {
    border-bottom: none;
  }

  /* 条纹样式 */
  .ew-table--stripe tbody tr:nth-child(even) {
    background: linear-gradient(135deg, rgba(14, 165, 233, 0.02) 0%, rgba(56, 189, 248, 0.02) 100%);
  }

  .ew-table--stripe tbody tr:nth-child(even):hover {
    background: linear-gradient(135deg, rgba(14, 165, 233, 0.05) 0%, rgba(56, 189, 248, 0.05) 100%);
  }

  /* 紧凑样式 */
  .ew-table--compact th,
  .ew-table--compact td {
    padding: 8px 12px;
  }

  /* 宽松样式 */
  .ew-table--relaxed th,
  .ew-table--relaxed td {
    padding: 24px 12px;
  }

  /* 表格容器 */
  .ew-table__container {
    overflow-x: auto;
    border-radius: var(--ew-table-border-radius, 8px);
    box-shadow: 0 4px 12px rgba(14, 165, 233, 0.1);
  }

  /* 表格头部 */
  .ew-table__header {
    padding: 16px;
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    border-bottom: 1px solid var(--ew-border-color-light, #f1f5f9);
    border-top-left-radius: var(--ew-table-border-radius, 8px);
    border-top-right-radius: var(--ew-table-border-radius, 8px);
  }

  .ew-table__title {
    font-size: 18px;
    font-weight: 600;
    color: var(--ew-text-color-primary, #1e293b);
    margin: 0;
  }

  /* 表格底部 */
  .ew-table__footer {
    padding: 16px;
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    border-top: 1px solid var(--ew-border-color-light, #f1f5f9);
    border-bottom-left-radius: var(--ew-table-border-radius, 8px);
    border-bottom-right-radius: var(--ew-table-border-radius, 8px);
  }

  /* 分页 */
  .ew-table__pagination {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    border-top: 1px solid var(--ew-border-color-light, #f1f5f9);
  }

  /* 排序图标 */
  .ew-table__sort-icon {
    display: inline-flex;
    flex-direction: column;
    margin-left: 4px;
    color: var(--ew-text-color-secondary, #64748b);
    transition: color var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
  }

  .ew-table th:hover .ew-table__sort-icon {
    color: var(--ew-color-primary, #0ea5e9);
  }

  .ew-table__sort-icon--asc,
  .ew-table__sort-icon--desc {
    color: var(--ew-color-primary, #0ea5e9);
  }

  /* 复选框样式 */
  .ew-table__checkbox {
    margin: 0;
  }

  .ew-table__checkbox .ew-checkbox__inner {
    margin-right: 0;
  }

  .ew-table__checkbox .ew-checkbox__label {
    display: none;
  }

  /* 展开图标 */
  .ew-table__expand-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    color: var(--ew-text-color-secondary, #64748b);
    cursor: pointer;
    transition: all var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
  }

  .ew-table__expand-icon:hover {
    color: var(--ew-color-primary, #0ea5e9);
    transform: scale(1.1);
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
    backdrop-filter: blur(2px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  .ew-table__loading-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 32px;
    height: 32px;
    border: 3px solid var(--ew-border-color-light, #f1f5f9);
    border-top: 3px solid var(--ew-color-primary, #0ea5e9);
    border-radius: 50%;
    animation: ew-spin 1s linear infinite;
    z-index: 11;
  }

  @keyframes ew-spin {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
  }

  /* 空状态 */
  .ew-table__empty {
    padding: 48px 16px;
    text-align: center;
    color: var(--ew-text-color-secondary, #64748b);
  }

  .ew-table__empty-icon {
    width: 48px;
    height: 48px;
    margin: 0 auto 16px;
    color: var(--ew-text-color-placeholder, #94a3b8);
  }

  /* 响应式 */
  @media (max-width: 768px) {
    .ew-table {
      font-size: 12px;
    }

    .ew-table th,
    .ew-table td {
      padding: 8px 6px;
    }

    .ew-table__header,
    .ew-table__footer {
      padding: 12px;
    }
  }

  /* 暗色主题 */
  [data-theme="dark"] .ew-table,
  .dark .ew-table {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    color: var(--ew-text-color-dark, #e2e8f0);
    box-shadow: 0 4px 12px rgba(56, 189, 248, 0.1), 0 2px 4px rgba(56, 189, 248, 0.05);
  }

  [data-theme="dark"] .ew-table::before,
  .dark .ew-table::before {
    background: linear-gradient(135deg, rgba(56, 189, 248, 0.02) 0%, rgba(125, 211, 252, 0.02) 100%);
  }

  [data-theme="dark"] .ew-table thead,
  .dark .ew-table thead {
    background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  }

  [data-theme="dark"] .ew-table thead::after,
  .dark .ew-table thead::after {
    background: linear-gradient(90deg, var(--ew-color-primary, #38bdf8) 0%, var(--ew-color-primary-light, #7dd3fc) 100%);
  }

  [data-theme="dark"] .ew-table th,
  .dark .ew-table th {
    color: var(--ew-text-color-primary-dark, #f8fafc);
    border-bottom-color: #334155;
  }

  [data-theme="dark"] .ew-table th:hover,
  .dark .ew-table th:hover {
    background: linear-gradient(135deg, rgba(56, 189, 248, 0.05) 0%, rgba(125, 211, 252, 0.05) 100%);
  }

  [data-theme="dark"] .ew-table tbody tr:hover,
  .dark .ew-table tbody tr:hover {
    background: linear-gradient(135deg, #334155 0%, #475569 100%);
    box-shadow: 0 4px 8px rgba(56, 189, 248, 0.1);
  }

  [data-theme="dark"] .ew-table tbody tr::before,
  .dark .ew-table tbody tr::before {
    background: linear-gradient(135deg, rgba(56, 189, 248, 0.02) 0%, rgba(125, 211, 252, 0.02) 100%);
  }

  [data-theme="dark"] .ew-table td,
  .dark .ew-table td {
    border-bottom-color: #334155;
  }

  [data-theme="dark"] .ew-table--stripe tbody tr:nth-child(even),
  .dark .ew-table--stripe tbody tr:nth-child(even) {
    background: linear-gradient(135deg, rgba(56, 189, 248, 0.02) 0%, rgba(125, 211, 252, 0.02) 100%);
  }

  [data-theme="dark"] .ew-table--stripe tbody tr:nth-child(even):hover,
  .dark .ew-table--stripe tbody tr:nth-child(even):hover {
    background: linear-gradient(135deg, rgba(56, 189, 248, 0.05) 0%, rgba(125, 211, 252, 0.05) 100%);
  }
`; 
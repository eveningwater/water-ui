export const tableStyles = `
  .ew-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    font-size: 14px;
    color: var(--ew-text-color-regular, #606266);
    background: var(--ew-table-bg, #ffffff);
  }

  .ew-table--border {
    border: 1px solid var(--ew-table-border-color, #ebeef5);
    border-radius: 4px;
    overflow: hidden;
  }

  .ew-table--small {
    font-size: 12px;
  }

  .ew-table--large {
    font-size: 16px;
  }

  .ew-table--fit {
    table-layout: fixed;
  }

  .ew-table th {
    padding: 12px 8px;
    text-align: left;
    font-weight: 500;
    color: var(--ew-table-header-color, #606266);
    background: var(--ew-table-header-bg, #fafafa);
    border-bottom: 1px solid var(--ew-table-border-color, #ebeef5);
  }

  .ew-table td {
    padding: 12px 8px;
    text-align: left;
    border-bottom: 1px solid var(--ew-table-border-color, #ebeef5);
  }

  .ew-table tr:hover {
    background: var(--ew-table-row-hover-bg, #f5f7fa);
  }

  .ew-table--border th,
  .ew-table--border td {
    border-right: 1px solid var(--ew-table-border-color, #ebeef5);
  }

  .ew-table--border th:last-child,
  .ew-table--border td:last-child {
    border-right: none;
  }
`; 
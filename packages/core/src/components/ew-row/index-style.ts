export const rowStyles = `
  /* Row 基础样式 */
  .ew-row {
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    margin-left: calc(var(--ew-row-gutter, 0) / -2);
    margin-right: calc(var(--ew-row-gutter, 0) / -2);
  }

  /* Row 类型样式 */
  .ew-row--flex {
    display: flex;
  }

  .ew-row--flex:before,
  .ew-row--flex:after {
    display: none;
  }

  .ew-row--flex .ew-col {
    display: flex;
    flex-direction: column;
  }

  .ew-row--flex .ew-col > * {
    flex: 1;
  }

  /* 水平对齐样式 */
  .ew-row--justify-start {
    justify-content: flex-start;
  }

  .ew-row--justify-end {
    justify-content: flex-end;
  }

  .ew-row--justify-center {
    justify-content: center;
  }

  .ew-row--justify-space-around {
    justify-content: space-around;
  }

  .ew-row--justify-space-between {
    justify-content: space-between;
  }

  /* 垂直对齐样式 */
  .ew-row--align-top {
    align-items: flex-start;
  }

  .ew-row--align-middle {
    align-items: center;
  }

  .ew-row--align-bottom {
    align-items: flex-end;
  }

  /* 响应式断点 */
  @media (max-width: 767px) {
    .ew-row {
      margin-left: calc(var(--ew-row-gutter-xs, var(--ew-row-gutter, 0)) / -2);
      margin-right: calc(var(--ew-row-gutter-xs, var(--ew-row-gutter, 0)) / -2);
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    .ew-row {
      margin-left: calc(var(--ew-row-gutter-sm, var(--ew-row-gutter, 0)) / -2);
      margin-right: calc(var(--ew-row-gutter-sm, var(--ew-row-gutter, 0)) / -2);
    }
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    .ew-row {
      margin-left: calc(var(--ew-row-gutter-md, var(--ew-row-gutter, 0)) / -2);
      margin-right: calc(var(--ew-row-gutter-md, var(--ew-row-gutter, 0)) / -2);
    }
  }

  @media (min-width: 1200px) and (max-width: 1919px) {
    .ew-row {
      margin-left: calc(var(--ew-row-gutter-lg, var(--ew-row-gutter, 0)) / -2);
      margin-right: calc(var(--ew-row-gutter-lg, var(--ew-row-gutter, 0)) / -2);
    }
  }

  @media (min-width: 1920px) {
    .ew-row {
      margin-left: calc(var(--ew-row-gutter-xl, var(--ew-row-gutter, 0)) / -2);
      margin-right: calc(var(--ew-row-gutter-xl, var(--ew-row-gutter, 0)) / -2);
    }
  }
`; 
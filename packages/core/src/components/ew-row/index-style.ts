export const rowStyles = `
  /* Row 基础样式 */
  :host {
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    margin-left: calc(var(--ew-row-gutter, 0) / -2);
    margin-right: calc(var(--ew-row-gutter, 0) / -2);
  }

  .ew-row {
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-left: calc(var(--ew-row-gutter, 0) / -2);
    margin-right: calc(var(--ew-row-gutter, 0) / -2);
  }

  /* Row 类型样式 */
  :host(.ew-row--flex) {
    display: flex;
  }

  :host(.ew-row--flex):before,
  :host(.ew-row--flex):after {
    display: none;
  }

  /* 水平对齐样式 */
  :host(.ew-row--justify-start) {
    justify-content: flex-start;
  }

  :host(.ew-row--justify-end) {
    justify-content: flex-end;
  }

  :host(.ew-row--justify-center) {
    justify-content: center;
  }

  :host(.ew-row--justify-space-around) {
    justify-content: space-around;
  }

  :host(.ew-row--justify-space-between) {
    justify-content: space-between;
  }

  /* 垂直对齐样式 */
  :host(.ew-row--align-top) {
    align-items: flex-start;
  }

  :host(.ew-row--align-middle) {
    align-items: center;
  }

  :host(.ew-row--align-bottom) {
    align-items: flex-end;
  }

  /* 响应式断点 */
  @media (max-width: 767px) {
    :host {
      margin-left: calc(var(--ew-row-gutter-xs, var(--ew-row-gutter, 0)) / -2);
      margin-right: calc(var(--ew-row-gutter-xs, var(--ew-row-gutter, 0)) / -2);
    }
    .ew-row {
      margin-left: calc(var(--ew-row-gutter-xs, var(--ew-row-gutter, 0)) / -2);
      margin-right: calc(var(--ew-row-gutter-xs, var(--ew-row-gutter, 0)) / -2);
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    :host {
      margin-left: calc(var(--ew-row-gutter-sm, var(--ew-row-gutter, 0)) / -2);
      margin-right: calc(var(--ew-row-gutter-sm, var(--ew-row-gutter, 0)) / -2);
    }
    .ew-row {
      margin-left: calc(var(--ew-row-gutter-sm, var(--ew-row-gutter, 0)) / -2);
      margin-right: calc(var(--ew-row-gutter-sm, var(--ew-row-gutter, 0)) / -2);
    }
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    :host {
      margin-left: calc(var(--ew-row-gutter-md, var(--ew-row-gutter, 0)) / -2);
      margin-right: calc(var(--ew-row-gutter-md, var(--ew-row-gutter, 0)) / -2);
    }
    .ew-row {
      margin-left: calc(var(--ew-row-gutter-md, var(--ew-row-gutter, 0)) / -2);
      margin-right: calc(var(--ew-row-gutter-md, var(--ew-row-gutter, 0)) / -2);
    }
  }

  @media (min-width: 1200px) and (max-width: 1919px) {
    :host {
      margin-left: calc(var(--ew-row-gutter-lg, var(--ew-row-gutter, 0)) / -2);
      margin-right: calc(var(--ew-row-gutter-lg, var(--ew-row-gutter, 0)) / -2);
    }
    .ew-row {
      margin-left: calc(var(--ew-row-gutter-lg, var(--ew-row-gutter, 0)) / -2);
      margin-right: calc(var(--ew-row-gutter-lg, var(--ew-row-gutter, 0)) / -2);
    }
  }

  @media (min-width: 1920px) {
    :host {
      margin-left: calc(var(--ew-row-gutter-xl, var(--ew-row-gutter, 0)) / -2);
      margin-right: calc(var(--ew-row-gutter-xl, var(--ew-row-gutter, 0)) / -2);
    }
    .ew-row {
      margin-left: calc(var(--ew-row-gutter-xl, var(--ew-row-gutter, 0)) / -2);
      margin-right: calc(var(--ew-row-gutter-xl, var(--ew-row-gutter, 0)) / -2);
    }
  }
`; 
// 生成栅格样式的辅助函数
function generateGridStyles(prefix: string = ''): string {
  const styles: string[] = [];
  
  // 生成基础栅格类 (0-24)
  for (let i = 0; i <= 24; i++) {
    const percentage = (i / 24) * 100;
    const className = prefix ? `ew-col-${prefix}-${i}` : `ew-col-${i}`;
    
    if (i === 0) {
      styles.push(`:host(.${className}) { display: none; }`);
    } else {
      styles.push(`:host(.${className}) { flex: 0 0 ${percentage}%; max-width: ${percentage}%; }`);
    }
  }
  
  return styles.join('\n  ');
}

// 生成偏移样式的辅助函数
function generateOffsetStyles(prefix: string = ''): string {
  const styles: string[] = [];
  
  for (let i = 0; i <= 24; i++) {
    const percentage = (i / 24) * 100;
    const className = prefix ? `ew-col-${prefix}-offset-${i}` : `ew-col-offset-${i}`;
    styles.push(`:host(.${className}) { margin-left: ${percentage}%; }`);
  }
  
  return styles.join('\n  ');
}

// 生成推拉样式的辅助函数
function generatePushPullStyles(prefix: string = ''): string {
  const styles: string[] = [];
  
  for (let i = 0; i <= 24; i++) {
    const percentage = (i / 24) * 100;
    const pushClassName = prefix ? `ew-col-${prefix}-push-${i}` : `ew-col-push-${i}`;
    const pullClassName = prefix ? `ew-col-${prefix}-pull-${i}` : `ew-col-pull-${i}`;
    
    styles.push(`:host(.${pushClassName}) { position: relative; left: ${percentage}%; }`);
    styles.push(`:host(.${pullClassName}) { position: relative; right: ${percentage}%; }`);
  }
  
  return styles.join('\n  ');
}

// 生成响应式样式的辅助函数
function generateResponsiveStyles(): string {
  const breakpoints = [
    { name: 'xs', media: '@media (max-width: 767px)' },
    { name: 'sm', media: '@media (min-width: 768px) and (max-width: 991px)' },
    { name: 'md', media: '@media (min-width: 992px) and (max-width: 1199px)' },
    { name: 'lg', media: '@media (min-width: 1200px) and (max-width: 1919px)' },
    { name: 'xl', media: '@media (min-width: 1920px)' }
  ];
  
  return breakpoints.map(({ name, media }) => `
  ${media} {
    ${generateGridStyles(name)}
  }`).join('\n');
}

// 预生成所有样式
const baseGridStyles = generateGridStyles();
const baseOffsetStyles = generateOffsetStyles();
const basePushPullStyles = generatePushPullStyles();
const responsiveStyles = generateResponsiveStyles();

export const colStyles = `
  /* Col 基础样式 */
  :host {
    display: flex;
    position: relative;
    max-width: 100%;
    min-height: 1px;
    padding-left: calc(var(--ew-row-gutter, 0) / 2);
    padding-right: calc(var(--ew-row-gutter, 0) / 2);
  }

  .ew-col {
    position: relative;
    max-width: 100%;
    min-height: 1px;
    width: 100%;
    padding-left: calc(var(--ew-row-gutter, 0) / 2);
    padding-right: calc(var(--ew-row-gutter, 0) / 2);
  }

  /* 基础栅格类 */
  ${baseGridStyles}

  /* 偏移类 */
  ${baseOffsetStyles}

  /* 推拉类 */
  ${basePushPullStyles}

  /* 响应式断点 */
  ${responsiveStyles}

  /* 响应式间距 */
  @media (max-width: 767px) {
    :host {
      padding-left: calc(var(--ew-row-gutter-xs, var(--ew-row-gutter, 0)) / 2);
      padding-right: calc(var(--ew-row-gutter-xs, var(--ew-row-gutter, 0)) / 2);
    }
    .ew-col {
      padding-left: calc(var(--ew-row-gutter-xs, var(--ew-row-gutter, 0)) / 2);
      padding-right: calc(var(--ew-row-gutter-xs, var(--ew-row-gutter, 0)) / 2);
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    :host {
      padding-left: calc(var(--ew-row-gutter-sm, var(--ew-row-gutter, 0)) / 2);
      padding-right: calc(var(--ew-row-gutter-sm, var(--ew-row-gutter, 0)) / 2);
    }
    .ew-col {
      padding-left: calc(var(--ew-row-gutter-sm, var(--ew-row-gutter, 0)) / 2);
      padding-right: calc(var(--ew-row-gutter-sm, var(--ew-row-gutter, 0)) / 2);
    }
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    :host {
      padding-left: calc(var(--ew-row-gutter-md, var(--ew-row-gutter, 0)) / 2);
      padding-right: calc(var(--ew-row-gutter-md, var(--ew-row-gutter, 0)) / 2);
    }
    .ew-col {
      padding-left: calc(var(--ew-row-gutter-md, var(--ew-row-gutter, 0)) / 2);
      padding-right: calc(var(--ew-row-gutter-md, var(--ew-row-gutter, 0)) / 2);
    }
  }

  @media (min-width: 1200px) and (max-width: 1919px) {
    :host {
      padding-left: calc(var(--ew-row-gutter-lg, var(--ew-row-gutter, 0)) / 2);
      padding-right: calc(var(--ew-row-gutter-lg, var(--ew-row-gutter, 0)) / 2);
    }
    .ew-col {
      padding-left: calc(var(--ew-row-gutter-lg, var(--ew-row-gutter, 0)) / 2);
      padding-right: calc(var(--ew-row-gutter-lg, var(--ew-row-gutter, 0)) / 2);
    }
  }

  @media (min-width: 1920px) {
    :host {
      padding-left: calc(var(--ew-row-gutter-xl, var(--ew-row-gutter, 0)) / 2);
      padding-right: calc(var(--ew-row-gutter-xl, var(--ew-row-gutter, 0)) / 2);
    }
    .ew-col {
      padding-left: calc(var(--ew-row-gutter-xl, var(--ew-row-gutter, 0)) / 2);
      padding-right: calc(var(--ew-row-gutter-xl, var(--ew-row-gutter, 0)) / 2);
    }
  }
`; 
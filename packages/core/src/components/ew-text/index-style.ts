export const textStyles = `
  /* Text 基础样式 */
  :host {
    display: inline-block;
    font-size: 14px;
    line-height: 1.5;
    color: var(--ew-text-color-primary, #303133);
    box-sizing: border-box;
  }

  .ew-text {
    display: inline-block;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    box-sizing: border-box;
  }

  /* 文本类型 */
  :host(.ew-text--primary) {
    color: var(--ew-text-color-primary, #303133);
  }

  :host(.ew-text--success) {
    color: var(--ew-text-color-success, #67c23a);
  }

  :host(.ew-text--warning) {
    color: var(--ew-text-color-warning, #e6a23c);
  }

  :host(.ew-text--danger) {
    color: var(--ew-text-color-danger, #f56c6c);
  }

  :host(.ew-text--info) {
    color: var(--ew-text-color-info, #909399);
  }

  /* 文本大小 */
  :host(.ew-text--large) {
    font-size: 16px;
  }

  :host(.ew-text--default) {
    font-size: 14px;
  }

  :host(.ew-text--small) {
    font-size: 13px;
  }

  /* 文本装饰 */
  :host(.ew-text--truncate) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .ew-text.ew-text--truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  :host(.ew-text--line-clamp-1) {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .ew-text.ew-text--line-clamp-1 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  :host(.ew-text--line-clamp-2) {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .ew-text.ew-text--line-clamp-2 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  :host(.ew-text--line-clamp-3) {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  .ew-text.ew-text--line-clamp-3 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  /* 文本对齐 */
  :host(.ew-text--left) {
    text-align: left;
  }

  .ew-text.ew-text--left {
    text-align: left;
  }

  :host(.ew-text--center) {
    text-align: center;
  }

  .ew-text.ew-text--center {
    text-align: center;
  }

  :host(.ew-text--right) {
    text-align: right;
  }

  .ew-text.ew-text--right {
    text-align: right;
  }

  /* 文本粗细 */
  :host(.ew-text--bold) {
    font-weight: bold;
  }

  .ew-text.ew-text--bold {
    font-weight: bold;
  }

  :host(.ew-text--normal) {
    font-weight: normal;
  }

  .ew-text.ew-text--normal {
    font-weight: normal;
  }

  :host(.ew-text--light) {
    font-weight: 300;
  }

  .ew-text.ew-text--light {
    font-weight: 300;
  }

  /* 文本样式 */
  :host(.ew-text--italic) {
    font-style: italic;
  }

  .ew-text.ew-text--italic {
    font-style: italic;
  }

  :host(.ew-text--underline) {
    text-decoration: underline;
  }

  .ew-text.ew-text--underline {
    text-decoration: underline;
  }

  :host(.ew-text--line-through) {
    text-decoration: line-through;
  }

  .ew-text.ew-text--line-through {
    text-decoration: line-through;
  }

  /* 禁用状态 */
  :host(.ew-text--disabled) {
    color: var(--ew-text-color-disabled, #c0c4cc);
    cursor: not-allowed;
  }

  /* 可点击状态 */
  :host(.ew-text--clickable) {
    cursor: pointer;
    transition: color 0.2s ease-in-out;
  }

  :host(.ew-text--clickable:hover) {
    color: var(--ew-text-color-primary-hover, #409eff);
  }

  /* 响应式文本大小 */
  @media (max-width: 767px) {
    :host(.ew-text--responsive) {
      font-size: 12px;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    :host(.ew-text--responsive) {
      font-size: 13px;
    }
  }

  @media (min-width: 992px) {
    :host(.ew-text--responsive) {
      font-size: 14px;
    }
  }
`; 
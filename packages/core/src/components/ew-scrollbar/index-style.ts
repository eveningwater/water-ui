export const scrollbarStyles = `
  /* Scrollbar 基础样式 */
  :host {
    display: block;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
  }

  .ew-scrollbar {
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
  }

  .ew-scrollbar__wrap {
    overflow: auto;
    box-sizing: border-box;
  }

  .ew-scrollbar__wrap--hidden-default {
    scrollbar-width: none;
  }

  .ew-scrollbar__wrap--hidden-default::-webkit-scrollbar {
    display: none;
  }

  .ew-scrollbar__view {
    box-sizing: border-box;
  }

  .ew-scrollbar__bar {
    position: absolute;
    right: 2px;
    bottom: 2px;
    z-index: 1;
    border-radius: inherit;
    opacity: 0;
    transition: opacity 0.12s ease-out;
  }

  .ew-scrollbar__bar.is-vertical {
    width: 6px;
    top: 2px;
  }

  .ew-scrollbar__bar.is-vertical > div {
    width: 100%;
  }

  .ew-scrollbar__bar.is-horizontal {
    height: 6px;
    left: 2px;
  }

  .ew-scrollbar__bar.is-horizontal > div {
    height: 100%;
  }

  .ew-scrollbar__thumb {
    position: relative;
    display: block;
    width: 0;
    height: 0;
    cursor: pointer;
    border-radius: inherit;
    background-color: var(--ew-scrollbar-color, rgba(144, 147, 153, 0.3));
    transition: background-color 0.3s;
  }

  .ew-scrollbar__thumb:hover {
    background-color: var(--ew-scrollbar-color-hover, rgba(144, 147, 153, 0.5));
  }

  /* 滚动条显示状态 */
  .ew-scrollbar__bar.is-vertical.is-visible {
    opacity: 1;
  }

  .ew-scrollbar__bar.is-horizontal.is-visible {
    opacity: 1;
  }

  /* 滚动条大小调整 */
  .ew-scrollbar__bar.is-vertical .ew-scrollbar__thumb {
    width: 100%;
  }

  .ew-scrollbar__bar.is-horizontal .ew-scrollbar__thumb {
    height: 100%;
  }

  /* 滚动条最小尺寸 */
  .ew-scrollbar__bar.is-vertical .ew-scrollbar__thumb {
    min-height: 20px;
  }

  .ew-scrollbar__bar.is-horizontal .ew-scrollbar__thumb {
    min-width: 20px;
  }

  /* 滚动条始终显示 */
  .ew-scrollbar__bar.is-vertical.is-always {
    opacity: 1;
  }

  .ew-scrollbar__bar.is-horizontal.is-always {
    opacity: 1;
  }

  /* 滚动条禁用状态 */
  .ew-scrollbar__bar.is-disabled {
    pointer-events: none;
  }

  .ew-scrollbar__bar.is-disabled .ew-scrollbar__thumb {
    background-color: var(--ew-scrollbar-color-disabled, rgba(144, 147, 153, 0.1));
  }

  /* 响应式滚动条 */
  @media (max-width: 767px) {
    .ew-scrollbar__bar {
      width: 4px;
      height: 4px;
    }
  }

  /* 暗色主题 */
  :host([data-theme="dark"]) .ew-scrollbar__thumb {
    background-color: var(--ew-scrollbar-color-dark, rgba(255, 255, 255, 0.2));
  }

  :host([data-theme="dark"]) .ew-scrollbar__thumb:hover {
    background-color: var(--ew-scrollbar-color-dark-hover, rgba(255, 255, 255, 0.3));
  }
`; 
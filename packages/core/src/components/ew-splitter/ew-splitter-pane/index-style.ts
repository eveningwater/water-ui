export const splitterPaneStyles = `
  .ew-splitter-pane {
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: var(--ew-bg-color, #ffffff);
    border-radius: var(--ew-border-radius, 8px);
    transition: all var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
    min-width: 0;
    min-height: 0;
  }

  .ew-splitter-pane--collapsible {
    position: relative;
  }

  .ew-splitter-pane--collapsed {
    flex: 0 0 0% !important;
    overflow: hidden;
  }

  .ew-splitter-pane--collapsed .ew-splitter-pane__collapse-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 20;
  }

  /* 折叠按钮样式 */
  .ew-splitter-pane__collapse-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 24px;
    height: 24px;
    border: none;
    background: var(--ew-color-primary, #0ea5e9);
    color: var(--ew-color-white, #ffffff);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    line-height: 1;
    transition: all var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
    z-index: 10;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .ew-splitter-pane__collapse-btn:hover {
    background: var(--ew-color-primary-light, #38bdf8);
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(14, 165, 233, 0.2);
  }

  .ew-splitter-pane__collapse-btn:active {
    transform: scale(0.95);
  }

  .ew-splitter-pane__collapse-btn:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px rgba(14, 165, 233, 0.3);
  }

  /* 折叠图标样式 */
  .ew-splitter-pane__collapse-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 10px;
    font-weight: bold;
    transition: transform var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
  }

  .ew-splitter-pane--collapsed .ew-splitter-pane__collapse-icon {
    transform: rotate(180deg);
  }

  /* 面板内容样式 */
  .ew-splitter-pane > slot {
    display: block;
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  /* 折叠状态下的内容隐藏 */
  .ew-splitter-pane--collapsed > slot {
    opacity: 0;
    pointer-events: none;
  }

  /* 暗色主题 */
  [data-theme="dark"] .ew-splitter-pane,
  .dark .ew-splitter-pane {
    background: var(--ew-bg-color-dark, #1e293b);
  }

  [data-theme="dark"] .ew-splitter-pane__collapse-btn,
  .dark .ew-splitter-pane__collapse-btn {
    background: var(--ew-color-primary, #38bdf8);
    color: var(--ew-color-white, #0f172a);
  }

  [data-theme="dark"] .ew-splitter-pane__collapse-btn:hover,
  .dark .ew-splitter-pane__collapse-btn:hover {
    background: var(--ew-color-primary-light, #7dd3fc);
  }

  /* 响应式设计 */
  @media (max-width: 768px) {
    .ew-splitter-pane__collapse-btn {
      width: 28px;
      height: 28px;
      font-size: 14px;
    }

    .ew-splitter-pane__collapse-icon {
      font-size: 12px;
    }
  }

  /* 动画效果 */
  @keyframes ew-splitter-pane-collapse {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0.95);
    }
  }

  @keyframes ew-splitter-pane-expand {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .ew-splitter-pane--collapsed {
    animation: ew-splitter-pane-collapse 0.2s ease-in-out;
  }

  .ew-splitter-pane:not(.ew-splitter-pane--collapsed) {
    animation: ew-splitter-pane-expand 0.2s ease-in-out;
  }
`; 
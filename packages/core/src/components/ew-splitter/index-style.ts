export const splitterStyles = `
  .ew-splitter {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 200px;
    position: relative;
    overflow: hidden;
    background: var(--ew-bg-color, #ffffff);
    border: 1px solid var(--ew-border-color, #e2e8f0);
    border-radius: var(--ew-border-radius, 8px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  .ew-splitter--vertical {
    flex-direction: column;
  }

  .ew-splitter--disabled {
    pointer-events: none;
    opacity: 0.6;
  }

  .ew-splitter--disabled .ew-splitter__resizer {
    cursor: default;
  }

  /* 调整器样式 */
  .ew-splitter__resizer {
    position: absolute;
    background: var(--ew-border-color, #e2e8f0);
    transition: background-color var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ew-splitter__resizer:hover {
    background: var(--ew-color-primary, #0ea5e9);
  }

  .ew-splitter__resizer--dragging {
    background: var(--ew-color-primary, #0ea5e9);
  }

  /* 水平分割的调整器 */
  .ew-splitter:not(.ew-splitter--vertical) .ew-splitter__resizer {
    width: 4px;
    cursor: col-resize;
    top: 0;
    bottom: 0;
  }

  /* 垂直分割的调整器 */
  .ew-splitter--vertical .ew-splitter__resizer {
    height: 4px;
    cursor: row-resize;
    left: 0;
    right: 0;
  }

  /* 拖拽手柄 */
  .ew-splitter__resizer-handle {
    position: relative;
    background: var(--ew-color-primary, #0ea5e9);
    border-radius: 2px;
    transition: all var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
  }

  /* 水平分割的手柄 */
  .ew-splitter:not(.ew-splitter--vertical) .ew-splitter__resizer-handle {
    width: 2px;
    height: 20px;
  }

  /* 垂直分割的手柄 */
  .ew-splitter--vertical .ew-splitter__resizer-handle {
    width: 20px;
    height: 2px;
  }

  .ew-splitter__resizer:hover .ew-splitter__resizer-handle {
    background: var(--ew-color-primary-light, #38bdf8);
    transform: scale(1.2);
  }

  .ew-splitter__resizer--dragging .ew-splitter__resizer-handle {
    background: var(--ew-color-primary-light, #38bdf8);
    transform: scale(1.3);
  }

  /* 面板样式 */
  ::slotted(ew-splitter-pane) {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: var(--ew-bg-color, #ffffff);
    border-radius: var(--ew-border-radius, 8px);
    transition: all var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
  }

  ::slotted(ew-splitter-pane:first-child) {
    border-top-left-radius: var(--ew-border-radius, 8px);
    border-bottom-left-radius: var(--ew-border-radius, 8px);
  }

  ::slotted(ew-splitter-pane:last-child) {
    border-top-right-radius: var(--ew-border-radius, 8px);
    border-bottom-right-radius: var(--ew-border-radius, 8px);
  }

  .ew-splitter--vertical ::slotted(ew-splitter-pane:first-child) {
    border-top-left-radius: var(--ew-border-radius, 8px);
    border-top-right-radius: var(--ew-border-radius, 8px);
    border-bottom-left-radius: 0;
  }

  .ew-splitter--vertical ::slotted(ew-splitter-pane:last-child) {
    border-bottom-left-radius: var(--ew-border-radius, 8px);
    border-bottom-right-radius: var(--ew-border-radius, 8px);
    border-top-right-radius: 0;
  }

  /* 尺寸变体 */
  .ew-splitter--small .ew-splitter__resizer {
    width: 2px;
  }

  .ew-splitter--small.ew-splitter--vertical .ew-splitter__resizer {
    height: 2px;
  }

  .ew-splitter--small .ew-splitter__resizer-handle {
    width: 1px;
    height: 16px;
  }

  .ew-splitter--small.ew-splitter--vertical .ew-splitter__resizer-handle {
    width: 16px;
    height: 1px;
  }

  .ew-splitter--large .ew-splitter__resizer {
    width: 6px;
  }

  .ew-splitter--large.ew-splitter--vertical .ew-splitter__resizer {
    height: 6px;
  }

  .ew-splitter--large .ew-splitter__resizer-handle {
    width: 3px;
    height: 24px;
  }

  .ew-splitter--large.ew-splitter--vertical .ew-splitter__resizer-handle {
    width: 24px;
    height: 3px;
  }

  /* 拖拽时的视觉反馈 */
  .ew-splitter__resizer--dragging::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(14, 165, 233, 0.1);
    z-index: -1;
  }

  /* 暗色主题 */
  [data-theme="dark"] .ew-splitter,
  .dark .ew-splitter {
    background: var(--ew-bg-color-dark, #1e293b);
    border-color: var(--ew-border-color-dark, #475569);
  }

  [data-theme="dark"] .ew-splitter__resizer,
  .dark .ew-splitter__resizer {
    background: var(--ew-border-color-dark, #475569);
  }

  [data-theme="dark"] .ew-splitter__resizer:hover,
  .dark .ew-splitter__resizer:hover {
    background: var(--ew-color-primary, #38bdf8);
  }

  [data-theme="dark"] .ew-splitter__resizer-handle,
  .dark .ew-splitter__resizer-handle {
    background: var(--ew-color-primary, #38bdf8);
  }

  [data-theme="dark"] .ew-splitter__resizer:hover .ew-splitter__resizer-handle,
  .dark .ew-splitter__resizer:hover .ew-splitter__resizer-handle {
    background: var(--ew-color-primary-light, #7dd3fc);
  }

  [data-theme="dark"] ::slotted(ew-splitter-pane),
  .dark ::slotted(ew-splitter-pane) {
    background: var(--ew-bg-color-dark, #1e293b);
  }

  /* 响应式设计 */
  @media (max-width: 768px) {
    .ew-splitter {
      flex-direction: column;
    }

    .ew-splitter:not(.ew-splitter--vertical) .ew-splitter__resizer {
      width: 100%;
      height: 4px;
      cursor: row-resize;
      margin: -2px 0;
    }

    .ew-splitter:not(.ew-splitter--vertical) .ew-splitter__resizer-handle {
      width: 20px;
      height: 2px;
    }

    ::slotted(ew-splitter-pane:first-child) {
      border-radius: var(--ew-border-radius, 8px) var(--ew-border-radius, 8px) 0 0;
    }

    ::slotted(ew-splitter-pane:last-child) {
      border-radius: 0 0 var(--ew-border-radius, 8px) var(--ew-border-radius, 8px);
    }
  }

  /* 动画效果 */
  @keyframes ew-splitter-resize {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  .ew-splitter__resizer--dragging {
    animation: ew-splitter-resize 0.2s ease-in-out;
  }
`; 
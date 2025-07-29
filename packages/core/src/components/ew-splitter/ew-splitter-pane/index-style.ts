export function createSplitterPaneStyles(): string {
  return `
    .ew-splitter-pane {
      position: relative;
      overflow: hidden;
      box-sizing: border-box;
    }

    .ew-splitter-bar {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 6px;
      background-color: var(--ew-splitter-divider-bg-color, #e4e7ed);
      transition: background-color var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .ew-splitter-bar:hover {
      background-color: var(--ew-splitter-divider-hover-bg-color, #c0c4cc);
    }

    .ew-splitter-dragger {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      cursor: col-resize;
      touch-action: none;
    }

    .ew-splitter-dragger--disable {
      cursor: not-allowed;
      opacity: 0.6;
    }

    .ew-splitter-collapse-icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 20;
      background-color: var(--ew-splitter-collapse-button-bg-color, #ffffff);
      border: 1px solid var(--ew-splitter-collapse-button-border-color, #e4e7ed);
      border-radius: 4px;
      padding: 4px;
      cursor: pointer;
      transition: all var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      opacity: 0;
      visibility: hidden;
    }

    .ew-splitter-bar:hover .ew-splitter-collapse-icon {
      opacity: 1;
      visibility: visible;
    }

    .ew-splitter-horizontal-collapse-icon-start {
      left: -30px;
    }

    .ew-splitter-horizontal-collapse-icon-end {
      right: -30px;
    }

    .ew-splitter-vertical-collapse-icon-start {
      top: -30px;
      left: 50%;
      transform: translateX(-50%);
    }

    .ew-splitter-vertical-collapse-icon-end {
      bottom: -30px;
      left: 50%;
      transform: translateX(-50%);
    }

    .ew-splitter-collapse-icon:hover {
      background-color: var(--ew-splitter-collapse-button-hover-bg-color, #f5f7fa);
      border-color: var(--ew-splitter-collapse-button-hover-border-color, #c0c4cc);
    }

    .ew-splitter-collapse-icon:active {
      background-color: var(--ew-splitter-collapse-button-active-bg-color, #e4e7ed);
    }

    @media (prefers-color-scheme: dark) {
      .ew-splitter-bar {
        background-color: var(--ew-splitter-divider-bg-color-dark, #4b5563);
      }

      .ew-splitter-bar:hover {
        background-color: var(--ew-splitter-divider-hover-bg-color-dark, #6b7280);
      }

      .ew-splitter-collapse-icon {
        background-color: var(--ew-splitter-collapse-button-bg-color-dark, #1f2937);
        border-color: var(--ew-splitter-collapse-button-border-color-dark, #374151);
      }

      .ew-splitter-collapse-icon:hover {
        background-color: var(--ew-splitter-collapse-button-hover-bg-color-dark, #374151);
        border-color: var(--ew-splitter-collapse-button-hover-border-color-dark, #4b5563);
      }

      .ew-splitter-collapse-icon:active {
        background-color: var(--ew-splitter-collapse-button-active-bg-color-dark, #4b5563);
      }
    }
  `;
} 
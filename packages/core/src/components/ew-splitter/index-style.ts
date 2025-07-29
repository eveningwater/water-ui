export const splitterStyles = `
  .ew-splitter {
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  .ew-splitter--horizontal {
    flex-direction: row;
  }

  .ew-splitter--vertical {
    flex-direction: column;
  }

  .ew-splitter-panel {
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
  }

  .ew-splitter-pane {
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
  }

  .ew-splitter-divider {
    position: relative;
    background-color: var(--ew-splitter-divider-bg-color, #e4e7ed);
    transition: background-color var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
    box-sizing: border-box;
    z-index: 10;
    flex-shrink: 0;
  }

  .ew-splitter-divider--horizontal {
    width: 6px;
    height: 100%;
    cursor: col-resize;
  }

  .ew-splitter-divider--vertical {
    width: 100%;
    height: 6px;
    cursor: row-resize;
  }

  .ew-splitter-divider:hover {
    background-color: var(--ew-splitter-divider-hover-bg-color, #c0c4cc);
  }

  .ew-splitter-divider:active {
    background-color: var(--ew-splitter-divider-active-bg-color, #909399);
  }

  .ew-splitter-collapse-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 20;
    background-color: var(--ew-splitter-collapse-button-bg-color, #ffffff);
    border: 1px solid var(--ew-splitter-collapse-button-border-color, #e4e7ed);
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;
    transition: all var(--ew-transition, 200ms cubic-bezier(0.4, 0, 0.2, 1));
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-size: 12px;
    line-height: 1;
    opacity: 0;
    visibility: hidden;
  }

  .ew-splitter-divider:hover .ew-splitter-collapse-button {
    opacity: 1;
    visibility: visible;
  }

  .ew-splitter-collapse-button--left {
    left: -30px;
  }

  .ew-splitter-collapse-button--right {
    right: -30px;
  }

  .ew-splitter-collapse-button:hover {
    background-color: var(--ew-splitter-collapse-button-hover-bg-color, #f5f7fa);
    border-color: var(--ew-splitter-collapse-button-hover-border-color, #c0c4cc);
  }

  .ew-splitter-collapse-button:active {
    background-color: var(--ew-splitter-collapse-button-active-bg-color, #e4e7ed);
  }

  .ew-splitter-divider[data-collapsed] {
    display: none;
  }

  .ew-splitter--disabled .ew-splitter-divider {
    cursor: not-allowed;
    opacity: 0.6;
  }

  .ew-splitter--small .ew-splitter-divider--horizontal {
    width: 4px;
  }

  .ew-splitter--small .ew-splitter-divider--vertical {
    height: 4px;
  }

  .ew-splitter--medium .ew-splitter-divider--horizontal {
    width: 6px;
  }

  .ew-splitter--medium .ew-splitter-divider--vertical {
    height: 6px;
  }

  .ew-splitter--large .ew-splitter-divider--horizontal {
    width: 8px;
  }

  .ew-splitter--large .ew-splitter-divider--vertical {
    height: 8px;
  }

  @media (prefers-color-scheme: dark) {
    .ew-splitter-divider {
      background-color: var(--ew-splitter-divider-bg-color-dark, #4b5563);
    }

    .ew-splitter-divider:hover {
      background-color: var(--ew-splitter-divider-hover-bg-color-dark, #6b7280);
    }

    .ew-splitter-divider:active {
      background-color: var(--ew-splitter-divider-active-bg-color-dark, #9ca3af);
    }

    .ew-splitter-collapse-button {
      background-color: var(--ew-splitter-collapse-button-bg-color-dark, #1f2937);
      border-color: var(--ew-splitter-collapse-button-border-color-dark, #374151);
    }

    .ew-splitter-collapse-button:hover {
      background-color: var(--ew-splitter-collapse-button-hover-bg-color-dark, #374151);
      border-color: var(--ew-splitter-collapse-button-hover-border-color-dark, #4b5563);
    }

    .ew-splitter-collapse-button:active {
      background-color: var(--ew-splitter-collapse-button-active-bg-color-dark, #4b5563);
    }
  }

  @media (max-width: 768px) {
    .ew-splitter--horizontal {
      flex-direction: column;
    }

    .ew-splitter-divider--horizontal {
      width: 100%;
      height: 6px;
      cursor: row-resize;
    }
  }
`; 
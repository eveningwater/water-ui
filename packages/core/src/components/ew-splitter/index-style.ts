export function createSplitterStyles(): string {
  return `
    .ew-splitter {
      display: flex;
      width: 100%;
      height: 100%;
    }

    .ew-splitter--horizontal {
      flex-direction: row;
    }

    .ew-splitter--vertical {
      flex-direction: column;
    }
  `;
} 
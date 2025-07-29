import { BaseComponent } from '../../../utils/base-component';
import { SplitterPaneProps } from '../../../types';

export class EwSplitterPane extends BaseComponent {
  private paneProps: SplitterPaneProps = {};

  protected initProps(): void {
    super.initProps();
    this.paneProps = {
      size: this.getAttribute('size') ? 
        (this.getAttribute('size')!.includes('%') ? this.getAttribute('size')! : `${this.getAttribute('size')}%`) : undefined,
      min: this.getAttribute('min') ? 
        (this.getAttribute('min')!.includes('%') ? this.getAttribute('min')! : `${this.getAttribute('min')}%`) : undefined,
      max: this.getAttribute('max') ? 
        (this.getAttribute('max')!.includes('%') ? this.getAttribute('max')! : `${this.getAttribute('max')}%`) : undefined,
      resizable: this.getAttribute('resizable') !== 'false',
      collapsible: this.hasAttribute('collapsible')
    };
  }

  protected render(): void {
    this.shadow.innerHTML = '';
    const pane = this.createElement('div', { class: this.getPaneClasses() });
    this.applyPaneStyles(pane);
    const slot = this.createElement('slot');
    pane.appendChild(slot);
    if (this.paneProps.collapsible) {
      this.addCollapseSlots(pane);
    }
    this.shadow.appendChild(pane);
  }

  private addCollapseSlots(pane: HTMLElement): void {
    const startSlot = this.createElement('slot', { name: 'start-collapsible' });
    const endSlot = this.createElement('slot', { name: 'end-collapsible' });
    pane.appendChild(startSlot);
    pane.appendChild(endSlot);
  }

  private applyPaneStyles(pane: HTMLElement): void {
    const { size, min, max } = this.paneProps;
    if (size) {
      pane.style.flex = `0 0 ${size}`;
    }
    if (min) {
      if (this.isHorizontal()) {
        pane.style.minWidth = min.toString();
      } else {
        pane.style.minHeight = min.toString();
      }
    }
    if (max) {
      if (this.isHorizontal()) {
        pane.style.maxWidth = max.toString();
      } else {
        pane.style.maxHeight = max.toString();
      }
    }
  }

  private isHorizontal(): boolean {
    const splitter = this.closest('ew-splitter');
    return splitter ? splitter.getAttribute('layout') !== 'vertical' : true;
  }

  private getPaneClasses(): string {
    return 'ew-splitter-pane';
  }

  public setSize(size: string | number): void {
    this.paneProps.size = size.toString();
    this.setAttribute('size', size.toString());
    this.render();
    this.dispatchCustomEvent('update:size', { size: this.parseSize(size) });
  }

  public getSize(): string | number | undefined {
    return this.paneProps.size;
  }

  public setMin(min: string | number): void {
    this.paneProps.min = min.toString();
    this.setAttribute('min', min.toString());
    this.render();
  }

  public getMin(): string | number | undefined {
    return this.paneProps.min;
  }

  public setMax(max: string | number): void {
    this.paneProps.max = max.toString();
    this.setAttribute('max', max.toString());
    this.render();
  }

  public getMax(): string | number | undefined {
    return this.paneProps.max;
  }

  public setResizable(resizable: boolean): void {
    this.paneProps.resizable = resizable;
    if (resizable) {
      this.removeAttribute('resizable');
    } else {
      this.setAttribute('resizable', 'false');
    }
  }

  public isResizable(): boolean {
    return this.paneProps.resizable || false;
  }

  public setCollapsible(collapsible: boolean): void {
    this.paneProps.collapsible = collapsible;
    if (collapsible) {
      this.setAttribute('collapsible', '');
    } else {
      this.removeAttribute('collapsible');
    }
    this.render();
  }

  public isCollapsible(): boolean {
    return this.paneProps.collapsible || false;
  }

  private parseSize(size: string | number): number {
    if (typeof size === 'number') {
      return size;
    }
    if (size.includes('%')) {
      return parseFloat(size) / 100;
    }
    return parseFloat(size);
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.render();
  }

  static get observedAttributes(): string[] {
    return ['size', 'min', 'max', 'resizable', 'collapsible'];
  }

  attributeChangedCallback(_name: string, oldValue: string | null, newValue: string | null): void {
    if (oldValue !== newValue) {
      this.initProps();
      this.render();
    }
  }
}

customElements.define('ew-splitter-pane', EwSplitterPane); 
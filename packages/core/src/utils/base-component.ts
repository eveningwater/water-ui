export abstract class BaseComponent extends HTMLElement {
  protected shadow: ShadowRoot;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  // 注入组件样式
  protected injectStyles(styles: string): void {
    // 检查是否已经有样式
    if (this.shadow.querySelector('style')) {
      return;
    }

    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    this.shadow.appendChild(styleElement);
  }

  protected createElement(tag: string, attributes: Record<string, string> = {}): HTMLElement {
    const element = document.createElement(tag);
    Object.entries(attributes).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        element.setAttribute(key, value);
      }
    });
    return element;
  }

  protected dispatchCustomEvent(name: string, detail?: any): void {
    const event = new CustomEvent(name, {
      detail,
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  protected initProps(): void {
    // 子类可以重写此方法
  }

  protected abstract render(): void;

  connectedCallback(): void {
    this.initProps();
    this.render();
  }

  attributeChangedCallback(_name: string, oldValue: string | null, newValue: string | null): void {
    if (oldValue !== newValue) {
      this.initProps();
      this.render();
    }
  }
} 
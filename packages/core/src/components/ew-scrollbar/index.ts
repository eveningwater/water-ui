import { BaseComponent } from '../../utils/base-component';
import { ScrollbarProps } from '../../types';
import { scrollbarStyles } from './index-style';

export class EwScrollbar extends BaseComponent {
  private scrollbarProps: ScrollbarProps = {};
  private verticalBar: HTMLElement | null = null;
  private horizontalBar: HTMLElement | null = null;
  private verticalThumb: HTMLElement | null = null;
  private horizontalThumb: HTMLElement | null = null;
  private wrap: HTMLElement | null = null;
  private view: HTMLElement | null = null;
  private isDragging = false;
  private startY = 0;
  private startX = 0;
  private startScrollTop = 0;
  private startScrollLeft = 0;

  protected initProps(): void {
    super.initProps();
    
    this.scrollbarProps = {
      height: this.getAttribute('height') || undefined,
      maxHeight: this.getAttribute('max-height') || undefined,
      wrapStyle: this.getAttribute('wrap-style') || undefined,
      wrapClass: this.getAttribute('wrap-class') || undefined,
      viewClass: this.getAttribute('view-class') || undefined,
      viewStyle: this.getAttribute('view-style') || undefined,
      noresize: this.hasAttribute('noresize'),
      tag: this.getAttribute('tag') || 'div',
      always: this.hasAttribute('always'),
      minSize: this.getAttribute('min-size') ? parseInt(this.getAttribute('min-size')!) : 20
    };
  }

  protected render(): void {
    const { tag, height, maxHeight, wrapStyle, wrapClass, viewClass, viewStyle } = this.scrollbarProps;

    // 清空并重新渲染
    this.shadow.innerHTML = '';

    // 注入样式
    this.injectStyles(scrollbarStyles);

    // 创建滚动条容器
    const scrollbar = this.createElement('div', {
      class: 'ew-scrollbar'
    });

    // 创建包装器
    this.wrap = this.createElement('div', {
      class: `ew-scrollbar__wrap ${wrapClass || ''} ew-scrollbar__wrap--hidden-default`,
      style: wrapStyle || ''
    });

    // 创建视图容器
    this.view = this.createElement(tag || 'div', {
      class: `ew-scrollbar__view ${viewClass || ''}`,
      style: viewStyle || ''
    });

    // 添加插槽内容
    const slot = this.createElement('slot');
    this.view.appendChild(slot);

    // 创建垂直滚动条
    this.verticalBar = this.createElement('div', {
      class: 'ew-scrollbar__bar is-vertical'
    });

    this.verticalThumb = this.createElement('div', {
      class: 'ew-scrollbar__thumb'
    });

    this.verticalBar.appendChild(this.verticalThumb);

    // 创建水平滚动条
    this.horizontalBar = this.createElement('div', {
      class: 'ew-scrollbar__bar is-horizontal'
    });

    this.horizontalThumb = this.createElement('div', {
      class: 'ew-scrollbar__thumb'
    });

    this.horizontalBar.appendChild(this.horizontalThumb);

    // 组装组件
    this.wrap.appendChild(this.view);
    scrollbar.appendChild(this.wrap);
    scrollbar.appendChild(this.verticalBar);
    scrollbar.appendChild(this.horizontalBar);

    // 设置高度
    if (height) {
      const heightValue = this.getAttribute('height');
      const heightStr = heightValue && !isNaN(Number(heightValue)) ? `${heightValue}px` : heightValue || String(height);
      scrollbar.style.height = heightStr;
      this.wrap!.style.height = heightStr;
    }
    if (maxHeight) {
      const maxHeightValue = this.getAttribute('max-height');
      const maxHeightStr = maxHeightValue && !isNaN(Number(maxHeightValue)) ? `${maxHeightValue}px` : maxHeightValue || String(maxHeight);
      scrollbar.style.maxHeight = maxHeightStr;
      this.wrap!.style.maxHeight = maxHeightStr;
    }

    // 添加到 Shadow DOM
    this.shadow.appendChild(scrollbar);

    // 绑定事件
    this.bindEvents();
    
    // 延迟更新滚动条，确保内容已渲染
    setTimeout(() => {
      this.updateScrollbar();
    }, 100);
  }

  private bindEvents(): void {
    if (!this.wrap || !this.verticalThumb || !this.horizontalThumb) return;

    // 滚动事件
    this.wrap.addEventListener('scroll', this.handleScroll.bind(this));
    
    // 鼠标事件
    this.verticalThumb.addEventListener('mousedown', this.handleVerticalMouseDown.bind(this));
    this.horizontalThumb.addEventListener('mousedown', this.handleHorizontalMouseDown.bind(this));
    
    // 窗口事件
    document.addEventListener('mousemove', this.handleMouseMove.bind(this));
    document.addEventListener('mouseup', this.handleMouseUp.bind(this));

    // 初始化滚动条
    this.updateScrollbar();
  }

  private handleScroll(): void {
    this.updateScrollbar();
  }

  private handleVerticalMouseDown(e: MouseEvent): void {
    e.preventDefault();
    this.isDragging = true;
    this.startY = e.clientY;
    this.startScrollTop = this.wrap?.scrollTop || 0;
    
    document.body.style.cursor = 'grabbing';
    this.verticalThumb?.classList.add('is-dragging');
  }

  private handleHorizontalMouseDown(e: MouseEvent): void {
    e.preventDefault();
    this.isDragging = true;
    this.startX = e.clientX;
    this.startScrollLeft = this.wrap?.scrollLeft || 0;
    
    document.body.style.cursor = 'grabbing';
    this.horizontalThumb?.classList.add('is-dragging');
  }

  private handleMouseMove(e: MouseEvent): void {
    if (!this.isDragging || !this.wrap) return;

    if (this.verticalThumb?.classList.contains('is-dragging')) {
      const deltaY = e.clientY - this.startY;
      const scrollHeight = this.wrap.scrollHeight - this.wrap.clientHeight;
      const thumbHeight = this.verticalBar?.clientHeight || 0;
      const thumbTrackHeight = thumbHeight - this.verticalThumb.clientHeight;
      
      if (thumbTrackHeight > 0) {
        const scrollRatio = deltaY / thumbTrackHeight;
        this.wrap.scrollTop = this.startScrollTop + scrollRatio * scrollHeight;
      }
    }

    if (this.horizontalThumb?.classList.contains('is-dragging')) {
      const deltaX = e.clientX - this.startX;
      const scrollWidth = this.wrap.scrollWidth - this.wrap.clientWidth;
      const thumbWidth = this.horizontalBar?.clientWidth || 0;
      const thumbTrackWidth = thumbWidth - this.horizontalThumb.clientWidth;
      
      if (thumbTrackWidth > 0) {
        const scrollRatio = deltaX / thumbTrackWidth;
        this.wrap.scrollLeft = this.startScrollLeft + scrollRatio * scrollWidth;
      }
    }
  }

  private handleMouseUp(): void {
    this.isDragging = false;
    document.body.style.cursor = '';
    this.verticalThumb?.classList.remove('is-dragging');
    this.horizontalThumb?.classList.remove('is-dragging');
  }

  private updateScrollbar(): void {
    if (!this.wrap || !this.verticalBar || !this.horizontalBar || !this.verticalThumb || !this.horizontalThumb) return;

    const { scrollTop, scrollHeight, clientHeight, scrollLeft, scrollWidth, clientWidth } = this.wrap;
    const { always } = this.scrollbarProps;

    // 获取滚动条轨道的高度和宽度
    const verticalTrackHeight = this.verticalBar.clientHeight;
    const horizontalTrackWidth = this.horizontalBar.clientWidth;

    // 更新垂直滚动条
    const verticalRatio = clientHeight / scrollHeight;
    const verticalThumbHeight = Math.max(verticalRatio * verticalTrackHeight, this.scrollbarProps.minSize || 20);
    const verticalMaxScroll = scrollHeight - clientHeight;
    const verticalThumbTop = verticalMaxScroll > 0 ? (scrollTop / verticalMaxScroll) * (verticalTrackHeight - verticalThumbHeight) : 0;

    this.verticalThumb.style.height = `${verticalThumbHeight}px`;
    this.verticalThumb.style.transform = `translateY(${verticalThumbTop}px)`;

    // 更新水平滚动条
    const horizontalRatio = clientWidth / scrollWidth;
    const horizontalThumbWidth = Math.max(horizontalRatio * horizontalTrackWidth, this.scrollbarProps.minSize || 20);
    const horizontalMaxScroll = scrollWidth - clientWidth;
    const horizontalThumbLeft = horizontalMaxScroll > 0 ? (scrollLeft / horizontalMaxScroll) * (horizontalTrackWidth - horizontalThumbWidth) : 0;

    this.horizontalThumb.style.width = `${horizontalThumbWidth}px`;
    this.horizontalThumb.style.transform = `translateX(${horizontalThumbLeft}px)`;

    // 显示/隐藏滚动条
    const showVertical = scrollHeight > clientHeight;
    const showHorizontal = scrollWidth > clientWidth;


    if (always || showVertical) {
      this.verticalBar.classList.add('is-visible');
    } else {
      this.verticalBar.classList.remove('is-visible');
    }

    if (always || showHorizontal) {
      this.horizontalBar.classList.add('is-visible');
    } else {
      this.horizontalBar.classList.remove('is-visible');
    }
  }

  // 公共方法
  public setHeight(height: string | number): void {
    this.scrollbarProps.height = height;
    this.render();
  }

  public setMaxHeight(maxHeight: string | number): void {
    this.scrollbarProps.maxHeight = maxHeight;
    this.render();
  }

  public setAlways(always: boolean): void {
    this.scrollbarProps.always = always;
    this.render();
  }

  public setMinSize(minSize: number): void {
    this.scrollbarProps.minSize = minSize;
    this.setAttribute('min-size', String(minSize));
    this.render();
  }

  public scrollTo(options?: ScrollToOptions): void;
  public scrollTo(x: number, y: number): void;
  public scrollTo(optionsOrX?: ScrollToOptions | number, y?: number): void {
    if (!this.wrap) return;
    
    if (typeof optionsOrX === 'number' && typeof y === 'number') {
      this.wrap.scrollTop = optionsOrX;
      this.wrap.scrollLeft = y;
    } else {
      const options = optionsOrX as ScrollToOptions || {};
      if (options.top !== undefined) this.wrap.scrollTop = options.top;
      if (options.left !== undefined) this.wrap.scrollLeft = options.left;
    }
  }

  public scrollToTop(): void {
    this.scrollTo({ top: 0 });
  }

  public scrollToBottom(): void {
    if (!this.wrap) return;
    this.scrollTo({ top: this.wrap.scrollHeight });
  }

  public scrollToLeft(): void {
    this.scrollTo({ left: 0 });
  }

  public scrollToRight(): void {
    if (!this.wrap) return;
    this.scrollTo({ left: this.wrap.scrollWidth });
  }

  public getScrollTop(): number {
    return this.wrap?.scrollTop || 0;
  }

  public getScrollLeft(): number {
    return this.wrap?.scrollLeft || 0;
  }

  public getScrollHeight(): number {
    return this.wrap?.scrollHeight || 0;
  }

  public getScrollWidth(): number {
    return this.wrap?.scrollWidth || 0;
  }

  public getClientHeight(): number {
    return this.wrap?.clientHeight || 0;
  }

  public getClientWidth(): number {
    return this.wrap?.clientWidth || 0;
  }

  public forceUpdateScrollbar(): void {
    this.updateScrollbar();
  }

  static get observedAttributes(): string[] {
    return ['height', 'max-height', 'wrap-style', 'wrap-class', 'view-class', 'view-style', 'noresize', 'tag', 'always', 'min-size'];
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    super.attributeChangedCallback(name, oldValue, newValue);
    
    // 重新初始化属性并渲染
    this.initProps();
    this.render();
  }
}

// 注册组件
customElements.define('ew-scrollbar', EwScrollbar); 
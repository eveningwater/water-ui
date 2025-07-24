/**
 * DOM 操作工具函数
 */

/**
 * 获取元素
 * @param selector 选择器
 * @param parent 父元素，默认为document
 * @returns 元素或null
 */
export function $(selector: string, parent: Document | Element = document): Element | null {
  return parent.querySelector(selector);
}

/**
 * 获取所有匹配的元素
 * @param selector 选择器
 * @param parent 父元素，默认为document
 * @returns 元素数组
 */
export function $$(selector: string, parent: Document | Element = document): Element[] {
  return Array.from(parent.querySelectorAll(selector));
}

/**
 * 创建元素
 * @param tagName 标签名
 * @param attributes 属性对象
 * @returns 创建的元素
 */
export function createElement<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  attributes: Record<string, string> = {}
): HTMLElementTagNameMap[K] {
  const element = document.createElement(tagName);
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
  return element;
}

/**
 * 添加类名
 * @param element 元素
 * @param className 类名
 */
export function addClass(element: Element, className: string): void {
  element.classList.add(className);
}

/**
 * 移除类名
 * @param element 元素
 * @param className 类名
 */
export function removeClass(element: Element, className: string): void {
  element.classList.remove(className);
}

/**
 * 切换类名
 * @param element 元素
 * @param className 类名
 */
export function toggleClass(element: Element, className: string): void {
  element.classList.toggle(className);
}

/**
 * 检查是否有类名
 * @param element 元素
 * @param className 类名
 * @returns 是否有该类名
 */
export function hasClass(element: Element, className: string): boolean {
  return element.classList.contains(className);
}

/**
 * 设置样式
 * @param element 元素
 * @param styles 样式对象
 */
export function setStyles(element: HTMLElement, styles: Record<string, string>): void {
  Object.entries(styles).forEach(([property, value]) => {
    element.style.setProperty(property, value);
  });
}

/**
 * 获取样式值
 * @param element 元素
 * @param property 样式属性
 * @returns 样式值
 */
export function getStyle(element: HTMLElement, property: string): string {
  return getComputedStyle(element).getPropertyValue(property);
}

/**
 * 设置属性
 * @param element 元素
 * @param attributes 属性对象
 */
export function setAttributes(element: Element, attributes: Record<string, string>): void {
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

/**
 * 获取属性值
 * @param element 元素
 * @param attribute 属性名
 * @returns 属性值
 */
export function getAttribute(element: Element, attribute: string): string | null {
  return element.getAttribute(attribute);
}

/**
 * 移除属性
 * @param element 元素
 * @param attribute 属性名
 */
export function removeAttribute(element: Element, attribute: string): void {
  element.removeAttribute(attribute);
}

/**
 * 添加事件监听器
 * @param element 元素
 * @param event 事件名
 * @param handler 处理函数
 * @param options 选项
 */
export function addEventListener(
  element: EventTarget,
  event: string,
  handler: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions
): void {
  element.addEventListener(event, handler, options);
}

/**
 * 移除事件监听器
 * @param element 元素
 * @param event 事件名
 * @param handler 处理函数
 * @param options 选项
 */
export function removeEventListener(
  element: EventTarget,
  event: string,
  handler: EventListenerOrEventListenerObject,
  options?: boolean | EventListenerOptions
): void {
  element.removeEventListener(event, handler, options);
}

/**
 * 获取元素位置和尺寸
 * @param element 元素
 * @returns 位置和尺寸信息
 */
export function getBoundingClientRect(element: Element): DOMRect {
  return element.getBoundingClientRect();
}

/**
 * 滚动到元素
 * @param element 元素
 * @param options 滚动选项
 */
export function scrollIntoView(element: Element, options?: ScrollIntoViewOptions): void {
  element.scrollIntoView(options);
}

/**
 * 检查元素是否在视口中
 * @param element 元素
 * @returns 是否在视口中
 */
export function isInViewport(element: Element): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * 获取元素的父元素
 * @param element 元素
 * @param selector 选择器（可选）
 * @returns 父元素或null
 */
export function getParent(element: Element, selector?: string): Element | null {
  if (!selector) {
    return element.parentElement;
  }
  
  let parent = element.parentElement;
  while (parent) {
    if (parent.matches(selector)) {
      return parent;
    }
    parent = parent.parentElement;
  }
  return null;
}

/**
 * 获取元素的子元素
 * @param element 元素
 * @param selector 选择器（可选）
 * @returns 子元素数组
 */
export function getChildren(element: Element, selector?: string): Element[] {
  const children = Array.from(element.children);
  if (!selector) {
    return children;
  }
  return children.filter(child => child.matches(selector));
}

/**
 * 获取下一个兄弟元素
 * @param element 元素
 * @param selector 选择器（可选）
 * @returns 下一个兄弟元素或null
 */
export function getNextSibling(element: Element, selector?: string): Element | null {
  let next = element.nextElementSibling;
  if (!selector) {
    return next;
  }
  
  while (next) {
    if (next.matches(selector)) {
      return next;
    }
    next = next.nextElementSibling;
  }
  return null;
}

/**
 * 获取上一个兄弟元素
 * @param element 元素
 * @param selector 选择器（可选）
 * @returns 上一个兄弟元素或null
 */
export function getPreviousSibling(element: Element, selector?: string): Element | null {
  let prev = element.previousElementSibling;
  if (!selector) {
    return prev;
  }
  
  while (prev) {
    if (prev.matches(selector)) {
      return prev;
    }
    prev = prev.previousElementSibling;
  }
  return null;
} 
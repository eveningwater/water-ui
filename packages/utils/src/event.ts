/**
 * 事件工具函数
 */

/**
 * 防抖函数
 * @param func 要防抖的函数
 * @param wait 等待时间（毫秒）
 * @param immediate 是否立即执行
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate = false
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    
    const callNow = immediate && !timeout;
    
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    
    if (callNow) func(...args);
  };
}

/**
 * 节流函数
 * @param func 要节流的函数
 * @param limit 限制时间（毫秒）
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * 事件委托
 * @param element 父元素
 * @param selector 子元素选择器
 * @param event 事件类型
 * @param handler 事件处理函数
 */
export function delegate(
  element: Element,
  selector: string,
  event: string,
  handler: (event: Event, target: Element) => void
): void {
  element.addEventListener(event, (e) => {
    const target = e.target as Element;
    if (target.matches(selector)) {
      handler(e, target);
    }
  });
}

/**
 * 执行内联JavaScript代码
 * @param code JavaScript代码字符串
 * @param context 执行上下文（默认为window）
 * @param event 事件对象（可选）
 * @returns 执行结果
 */
export function executeInlineCode(
  code: string,
  context: any = window,
  event?: Event
): any {
  try {
    const func = new Function('event', code);
    return func.call(context, event);
  } catch (error) {
    console.error('Error executing inline code:', error);
    console.error('Code:', code);
    return null;
  }
}

/**
 * 安全地执行内联JavaScript代码（带错误处理）
 * @param code JavaScript代码字符串
 * @param context 执行上下文（默认为window）
 * @param event 事件对象（可选）
 * @param errorHandler 错误处理函数（可选）
 * @returns 执行结果
 */
export function safeExecuteInlineCode(
  code: string,
  context: any = window,
  event?: Event,
  errorHandler?: (error: Error, code: string) => void
): any {
  try {
    const func = new Function('event', code);
    return func.call(context, event);
  } catch (error) {
    const errorObj = error instanceof Error ? error : new Error(String(error));
    if (errorHandler) {
      errorHandler(errorObj, code);
    } else {
      console.error('Error executing inline code:', errorObj);
      console.error('Code:', code);
    }
    return null;
  }
} 
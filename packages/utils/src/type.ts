/**
 * 类型检查工具函数
 */

/**
 * 检查是否为字符串
 */
export function isString(value: any): value is string {
  return typeof value === 'string';
}

/**
 * 检查是否为数字
 */
export function isNumber(value: any): value is number {
  return typeof value === 'number' && !isNaN(value);
}

/**
 * 检查是否为布尔值
 */
export function isBoolean(value: any): value is boolean {
  return typeof value === 'boolean';
}

/**
 * 检查是否为函数
 */
export function isFunction(value: any): value is Function {
  return typeof value === 'function';
}

/**
 * 检查是否为对象
 */
export function isObject(value: any): value is object {
  return value !== null && typeof value === 'object';
}

/**
 * 检查是否为数组
 */
export function isArray(value: any): value is any[] {
  return Array.isArray(value);
}

/**
 * 检查是否为 null
 */
export function isNull(value: any): value is null {
  return value === null;
}

/**
 * 检查是否为 undefined
 */
export function isUndefined(value: any): value is undefined {
  return value === undefined;
}

/**
 * 检查是否为空值
 */
export function isEmpty(value: any): boolean {
  return isNull(value) || isUndefined(value);
}

/**
 * 检查是否为有效值
 */
export function isValid(value: any): boolean {
  return !isEmpty(value);
} 
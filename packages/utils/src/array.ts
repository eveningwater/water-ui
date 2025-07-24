/**
 * 数组工具函数
 */

/**
 * 数组去重
 */
export function unique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

/**
 * 数组扁平化
 */
export function flatten<T>(arr: any[], depth: number = Infinity): T[] {
  return arr.flat(depth);
}

/**
 * 数组分组
 */
export function groupBy<T>(arr: T[], key: keyof T | ((item: T) => string)): Record<string, T[]> {
  return arr.reduce((groups, item) => {
    const groupKey = typeof key === 'function' ? key(item) : String(item[key]);
    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }
    const group = groups[groupKey];
    if (group) {
      group.push(item);
    }
    return groups;
  }, {} as Record<string, T[]>);
}

/**
 * 数组排序
 */
export function sortBy<T>(arr: T[], key: keyof T | ((item: T) => any), order: 'asc' | 'desc' = 'asc'): T[] {
  return [...arr].sort((a, b) => {
    const aVal = typeof key === 'function' ? key(a) : a[key];
    const bVal = typeof key === 'function' ? key(b) : b[key];
    
    if (aVal < bVal) return order === 'asc' ? -1 : 1;
    if (aVal > bVal) return order === 'asc' ? 1 : -1;
    return 0;
  });
}

/**
 * 数组分块
 */
export function chunk<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

/**
 * 数组交集
 */
export function intersection<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, arr) => acc.filter(item => arr.includes(item)));
}

/**
 * 数组并集
 */
export function union<T>(...arrays: T[][]): T[] {
  return unique(flatten(arrays));
}

/**
 * 数组差集
 */
export function difference<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.filter(item => !arr2.includes(item));
} 
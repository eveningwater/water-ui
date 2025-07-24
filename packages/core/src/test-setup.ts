// 测试设置文件
import { beforeAll } from 'vitest';

// 模拟浏览器环境
beforeAll(() => {
  // 设置全局变量
  global.CustomEvent = class CustomEvent extends Event {
    detail: any;
    constructor(type: string, options?: any) {
      super(type, options);
      this.detail = options?.detail;
    }
  } as any;
}); 
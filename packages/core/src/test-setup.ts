// 测试设置文件
import { beforeAll } from 'vitest';

// 导入所有组件以确保它们被注册
import './components/ew-button';
import './components/ew-checkbox';
import './components/ew-checkbox-button';
import './components/ew-input';
import './components/ew-input-number';
import './components/ew-modal';
import './components/ew-radio';
import './components/ew-radio-button';
import './components/ew-radio-group';
import './components/ew-table';
import './components/ew-checkbox/ew-checkbox-group';
import './components/ew-container';
import './components/ew-container/ew-header';
import './components/ew-container/ew-aside';
import './components/ew-container/ew-main';
import './components/ew-container/ew-footer';
import './components/ew-row';
import './components/ew-col';
import './components/ew-link';
import './components/ew-icon';

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
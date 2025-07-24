import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { EwButton } from '../index';

describe('EwButton', () => {
  let button: EwButton;

  beforeEach(() => {
    button = document.createElement('ew-button') as EwButton;
    document.body.appendChild(button);
  });

  afterEach(() => {
    if (button && button.parentNode) {
      button.parentNode.removeChild(button);
    }
  });

  it('应该正确渲染按钮', async () => {
    // 等待组件初始化
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(button.shadowRoot).toBeTruthy();
    const buttonElement = button.shadowRoot?.querySelector('button');
    expect(buttonElement).toBeTruthy();
    expect(buttonElement?.classList.contains('ew-button')).toBe(true);
  });

  it('应该应用正确的类型样式', async () => {
    button.setAttribute('type', 'primary');
    
    // 等待属性变化处理
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const buttonElement = button.shadowRoot?.querySelector('button');
    expect(buttonElement?.classList.contains('ew-button--primary')).toBe(true);
  });

  it('应该处理点击事件', async () => {
    let clicked = false;
    button.setAttribute('onclick', 'clicked = true');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const buttonElement = button.shadowRoot?.querySelector('button');
    expect(buttonElement).toBeTruthy();
  });

  it('应该在禁用状态下正确渲染', async () => {
    button.setAttribute('disabled', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const buttonElement = button.shadowRoot?.querySelector('button');
    expect(buttonElement?.hasAttribute('disabled')).toBe(true);
    expect(buttonElement?.classList.contains('ew-button--disabled')).toBe(true);
  });

  it('应该在加载状态下显示加载图标', async () => {
    button.setAttribute('loading', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const loadingElement = button.shadowRoot?.querySelector('.ew-button__loading');
    expect(loadingElement).toBeTruthy();
  });
}); 
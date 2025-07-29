import { describe, it, expect, beforeEach, vi } from 'vitest';
import { EwSplitter } from '../index';

describe('EwSplitter', () => {
  let splitter: EwSplitter;

  beforeEach(() => {
    splitter = new EwSplitter();
    document.body.appendChild(splitter);
  });

  it('应该正确初始化', () => {
    expect(splitter).toBeTruthy();
    expect(splitter.getLayout()).toBe('horizontal');
  });

  it('应该设置和获取布局', () => {
    splitter.setLayout('vertical');
    expect(splitter.getLayout()).toBe('vertical');
    expect(splitter.getAttribute('layout')).toBe('vertical');
  });

  it('应该获取面板列表', async () => {
    const pane1 = document.createElement('ew-splitter-pane');
    const pane2 = document.createElement('ew-splitter-pane');
    splitter.appendChild(pane1);
    splitter.appendChild(pane2);
    
    // 等待 MutationObserver 触发
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const panels = splitter.getPanels();
    expect(panels).toHaveLength(2);
    expect(panels[0]).toBe(pane1);
    expect(panels[1]).toBe(pane2);
  });

  it('应该监听属性变化', () => {
    splitter.setAttribute('layout', 'vertical');
    expect(splitter.getLayout()).toBe('vertical');
  });

  it('应该渲染正确的 CSS 类', () => {
    const shadowRoot = splitter.shadowRoot;
    expect(shadowRoot).toBeTruthy();
    
    const splitterElement = shadowRoot?.querySelector('.ew-splitter');
    expect(splitterElement).toBeTruthy();
    expect(splitterElement?.classList.contains('ew-splitter--horizontal')).toBe(true);
  });
}); 
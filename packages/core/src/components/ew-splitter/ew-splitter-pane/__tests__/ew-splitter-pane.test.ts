import { describe, it, expect, beforeEach } from 'vitest';
import { EwSplitterPane } from '../index';

describe('EwSplitterPane', () => {
  let pane: EwSplitterPane;

  beforeEach(() => {
    pane = new EwSplitterPane();
    document.body.appendChild(pane);
  });

  it('应该正确初始化', () => {
    expect(pane).toBeTruthy();
    expect(pane.getSize()).toBe('0%');
  });

  it('应该设置和获取尺寸', () => {
    pane.setSize('50%');
    expect(pane.getSize()).toBe('50%');
  });

  it('应该设置索引', () => {
    pane.setIndex(1);
    expect((pane as any).index).toBe(1);
  });

  it('应该监听属性变化', () => {
    pane.setAttribute('size', '30%');
    expect(pane.getSize()).toBe('30%');
  });

  it('应该渲染正确的结构', () => {
    const shadowRoot = pane.shadowRoot;
    expect(shadowRoot).toBeTruthy();
    
    const paneElement = shadowRoot?.querySelector('.ew-splitter-pane');
    expect(paneElement).toBeTruthy();
  });

  it('应该支持 collapsible 属性', () => {
    pane.setAttribute('collapsible', '');
    expect((pane as any).collapsible).toBe(true);
  });

  it('应该支持 resizable 属性', () => {
    pane.setAttribute('resizable', 'false');
    expect((pane as any).resizable).toBe(false);
  });
}); 
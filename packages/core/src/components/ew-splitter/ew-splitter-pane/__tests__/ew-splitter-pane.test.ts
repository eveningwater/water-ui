import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { EwSplitterPane } from '../index';

describe('EwSplitterPane', () => {
  let pane: EwSplitterPane;

  beforeEach(() => {
    pane = document.createElement('ew-splitter-pane') as EwSplitterPane;
    pane.innerHTML = '<div>面板内容</div>';
    document.body.appendChild(pane);
  });

  afterEach(() => {
    if (pane && pane.parentNode) {
      pane.parentNode.removeChild(pane);
    }
  });

  it('应该正确渲染面板', async () => {
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(pane.shadowRoot).toBeTruthy();
    const paneElement = pane.shadowRoot?.querySelector('.ew-splitter-pane');
    expect(paneElement).toBeTruthy();
  });

  it('应该应用正确的大小属性', async () => {
    pane.setAttribute('size', '30%');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(pane.getAttribute('size')).toBe('30%');
  });

  it('应该支持折叠功能', async () => {
    pane.setAttribute('collapsible', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const collapseButton = pane.shadowRoot?.querySelector('.ew-splitter-pane__collapse-btn');
    expect(collapseButton).toBeTruthy();
    expect(pane.shadowRoot?.querySelector('.ew-splitter-pane--collapsible')).toBeTruthy();
  });

  it('应该正确处理折叠状态', async () => {
    pane.setAttribute('collapsible', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(pane.isCollapsedState()).toBe(false);
    
    pane.collapsePane();
    expect(pane.isCollapsedState()).toBe(true);
    expect(pane.shadowRoot?.querySelector('.ew-splitter-pane--collapsed')).toBeTruthy();
    
    pane.expandPane();
    expect(pane.isCollapsedState()).toBe(false);
    expect(pane.shadowRoot?.querySelector('.ew-splitter-pane--collapsed')).toBeFalsy();
  });

  it('应该触发折叠事件', async () => {
    pane.setAttribute('collapsible', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    let collapseEventTriggered = false;
    let eventDetail: any = null;
    
    pane.addEventListener('collapse', (e: any) => {
      collapseEventTriggered = true;
      eventDetail = e.detail;
    });

    pane.collapsePane();
    
    expect(collapseEventTriggered).toBe(true);
    expect(eventDetail).toEqual({ collapsed: true });
  });

  it('应该触发展开事件', async () => {
    pane.setAttribute('collapsible', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    let expandEventTriggered = false;
    let eventDetail: any = null;
    
    pane.addEventListener('expand', (e: any) => {
      expandEventTriggered = true;
      eventDetail = e.detail;
    });

    pane.collapsePane();
    pane.expandPane();
    
    expect(expandEventTriggered).toBe(true);
    expect(eventDetail).toEqual({ collapsed: false });
  });

  it('应该设置最小和最大尺寸', async () => {
    pane.setAttribute('min', '100px');
    pane.setAttribute('max', '500px');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(pane.getAttribute('min')).toBe('100px');
    expect(pane.getAttribute('max')).toBe('500px');
  });

  it('应该支持禁用调整大小', async () => {
    pane.setAttribute('resizable', 'false');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(pane.getAttribute('resizable')).toBe('false');
  });

  it('应该正确设置和获取大小', async () => {
    await new Promise(resolve => setTimeout(resolve, 10));
    
    pane.setSize('25%');
    expect(pane.getSize()).toBe('0 0 25%');
  });

  it('应该在折叠状态下不设置大小', async () => {
    pane.setAttribute('collapsible', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    pane.collapsePane();
    const originalSize = pane.getSize();
    
    pane.setSize('50%');
    expect(pane.getSize()).toBe(originalSize);
  });

  it('应该更新折叠按钮的图标', async () => {
    pane.setAttribute('collapsible', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const icon = pane.shadowRoot?.querySelector('.ew-splitter-pane__collapse-icon');
    expect(icon?.innerHTML).toBe('▶');
    
    pane.collapsePane();
    expect(icon?.innerHTML).toBe('◀');
    
    pane.expandPane();
    expect(icon?.innerHTML).toBe('▶');
  });

  it('应该更新折叠按钮的aria-label', async () => {
    pane.setAttribute('collapsible', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const button = pane.shadowRoot?.querySelector('.ew-splitter-pane__collapse-btn') as HTMLElement;
    expect(button?.getAttribute('aria-label')).toBe('折叠面板');
    
    pane.collapsePane();
    await new Promise(resolve => setTimeout(resolve, 10));
    expect(button?.getAttribute('aria-label')).toBe('展开面板');
    
    pane.expandPane();
    await new Promise(resolve => setTimeout(resolve, 10));
    expect(button?.getAttribute('aria-label')).toBe('折叠面板');
  });

  it('应该处理折叠按钮点击事件', async () => {
    pane.setAttribute('collapsible', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const button = pane.shadowRoot?.querySelector('.ew-splitter-pane__collapse-btn') as HTMLElement;
    expect(button).toBeTruthy();
    
    let clicked = false;
    pane.addEventListener('collapse', () => {
      clicked = true;
    });
    
    button.click();
    expect(clicked).toBe(true);
  });
}); 
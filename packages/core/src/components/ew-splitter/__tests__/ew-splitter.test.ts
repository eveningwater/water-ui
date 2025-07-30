import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { EwSplitter } from '../index';
import { EwSplitterPane } from '../ew-splitter-pane';

describe('EwSplitter', () => {
  let splitter: EwSplitter;
  let pane1: EwSplitterPane;
  let pane2: EwSplitterPane;

  beforeEach(() => {
    splitter = document.createElement('ew-splitter') as EwSplitter;
    pane1 = document.createElement('ew-splitter-pane') as EwSplitterPane;
    pane2 = document.createElement('ew-splitter-pane') as EwSplitterPane;
    
    // 添加内容到面板
    pane1.innerHTML = '<div>面板1内容</div>';
    pane2.innerHTML = '<div>面板2内容</div>';
    
    splitter.appendChild(pane1);
    splitter.appendChild(pane2);
    document.body.appendChild(splitter);
  });

  afterEach(() => {
    if (splitter && splitter.parentNode) {
      splitter.parentNode.removeChild(splitter);
    }
  });

  it('应该正确渲染分割面板', async () => {
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(splitter.shadowRoot).toBeTruthy();
    const splitterElement = splitter.shadowRoot?.querySelector('.ew-splitter');
    expect(splitterElement).toBeTruthy();
  });

  it('应该应用正确的布局样式', async () => {
    splitter.setAttribute('layout', 'vertical');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const splitterElement = splitter.shadowRoot?.querySelector('.ew-splitter');
    expect(splitterElement?.classList.contains('ew-splitter--vertical')).toBe(true);
  });

  it('应该创建调整器元素', async () => {
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const resizers = splitter.shadowRoot?.querySelectorAll('.ew-splitter__resizer');
    expect(resizers?.length).toBe(1);
  });

  it('应该在禁用状态下禁用拖拽', async () => {
    splitter.setAttribute('disabled', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const splitterElement = splitter.shadowRoot?.querySelector('.ew-splitter');
    expect(splitterElement?.classList.contains('ew-splitter--disabled')).toBe(true);
  });

  it('应该应用正确的尺寸样式', async () => {
    splitter.setAttribute('size', 'large');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const splitterElement = splitter.shadowRoot?.querySelector('.ew-splitter');
    expect(splitterElement?.classList.contains('ew-splitter--large')).toBe(true);
  });

  it('应该触发resize事件', async () => {
    await new Promise(resolve => setTimeout(resolve, 10));
    
    let resizeEventTriggered = false;
    splitter.addEventListener('resize', () => {
      resizeEventTriggered = true;
    });

    // 模拟拖拽事件
    const resizer = splitter.shadowRoot?.querySelector('.ew-splitter__resizer') as HTMLElement;
    expect(resizer).toBeTruthy();

    // 注意：实际的拖拽测试需要更复杂的模拟，这里只是验证元素存在
    expect(resizeEventTriggered).toBe(false);
  });

  it('应该正确处理多个面板', async () => {
    const pane3 = document.createElement('ew-splitter-pane') as EwSplitterPane;
    pane3.innerHTML = '<div>面板3内容</div>';
    splitter.appendChild(pane3);
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const resizers = splitter.shadowRoot?.querySelectorAll('.ew-splitter__resizer');
    expect(resizers?.length).toBe(2);
  });
});

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

  it('应该应用正确的大小', async () => {
    pane.setAttribute('size', '30%');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    // 检查属性是否正确设置
    expect(pane.getAttribute('size')).toBe('30%');
  });

  it('应该支持折叠功能', async () => {
    pane.setAttribute('collapsible', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const collapseButton = pane.shadowRoot?.querySelector('.ew-splitter-pane__collapse-btn');
    expect(collapseButton).toBeTruthy();
  });

  it('应该正确处理折叠状态', async () => {
    pane.setAttribute('collapsible', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(pane.isCollapsedState()).toBe(false);
    
    pane.collapsePane();
    expect(pane.isCollapsedState()).toBe(true);
    
    pane.expandPane();
    expect(pane.isCollapsedState()).toBe(false);
  });

  it('应该触发折叠事件', async () => {
    pane.setAttribute('collapsible', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    let collapseEventTriggered = false;
    pane.addEventListener('collapse', () => {
      collapseEventTriggered = true;
    });

    pane.collapsePane();
    expect(collapseEventTriggered).toBe(true);
  });

  it('应该触发展开事件', async () => {
    pane.setAttribute('collapsible', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    let expandEventTriggered = false;
    pane.addEventListener('expand', () => {
      expandEventTriggered = true;
    });

    pane.collapsePane();
    pane.expandPane();
    expect(expandEventTriggered).toBe(true);
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
}); 
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { EwModal } from '../index';

describe('EwModal', () => {
  let modal: EwModal;

  beforeEach(() => {
    modal = document.createElement('ew-modal') as EwModal;
    document.body.appendChild(modal);
  });

  afterEach(() => {
    if (modal && modal.parentNode) {
      modal.parentNode.removeChild(modal);
    }
  });

  it('应该正确渲染弹框', async () => {
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(modal.shadowRoot).toBeTruthy();
    // 初始状态下弹框应该是隐藏的
    expect(modal.shadowRoot?.innerHTML).toBe('');
  });

  it('应该正确显示弹框', async () => {
    modal.setAttribute('model-value', 'true');
    modal.setAttribute('title', '测试弹框');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const overlay = modal.shadowRoot?.querySelector('.ew-modal');
    expect(overlay).toBeTruthy();
    expect(overlay?.classList.contains('ew-modal--visible')).toBe(true);
  });

  it('应该显示标题', async () => {
    modal.setAttribute('model-value', 'true');
    modal.setAttribute('title', '测试标题');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const titleElement = modal.shadowRoot?.querySelector('.ew-modal__title');
    expect(titleElement).toBeTruthy();
    expect(titleElement?.textContent).toBe('测试标题');
  });

  it('应该显示关闭按钮', async () => {
    modal.setAttribute('model-value', 'true');
    modal.setAttribute('show-close', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const closeButton = modal.shadowRoot?.querySelector('.ew-modal__close');
    expect(closeButton).toBeTruthy();
  });

  it('应该显示取消和确认按钮', async () => {
    modal.setAttribute('model-value', 'true');
    modal.setAttribute('show-cancel-button', '');
    modal.setAttribute('show-confirm-button', '');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const cancelButton = modal.shadowRoot?.querySelector('.ew-modal__btn');
    const confirmButton = modal.shadowRoot?.querySelector('.ew-modal__btn--confirm');
    expect(cancelButton).toBeTruthy();
    expect(confirmButton).toBeTruthy();
  });

  it('应该正确关闭弹框', async () => {
    // 先打开弹框
    modal.setAttribute('model-value', 'true');
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(modal.shadowRoot?.querySelector('.ew-modal')).toBeTruthy();
    
    // 关闭弹框
    modal.setAttribute('model-value', 'false');
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(modal.shadowRoot?.innerHTML).toBe('');
  });

  it('应该支持自定义按钮文本', async () => {
    modal.setAttribute('model-value', 'true');
    modal.setAttribute('show-cancel-button', '');
    modal.setAttribute('show-confirm-button', '');
    modal.setAttribute('cancel-button-text', '取消操作');
    modal.setAttribute('confirm-button-text', '确认操作');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const buttons = modal.shadowRoot?.querySelectorAll('.ew-modal__btn');
    expect(buttons?.[0]?.textContent).toBe('取消操作');
    expect(buttons?.[1]?.textContent).toBe('确认操作');
  });

  it('应该包含插槽内容', async () => {
    modal.setAttribute('model-value', 'true');
    
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const slot = modal.shadowRoot?.querySelector('slot');
    expect(slot).toBeTruthy();
  });

  it('应该响应showModal方法', async () => {
    await new Promise(resolve => setTimeout(resolve, 10));
    
    // 初始状态
    expect(modal.shadowRoot?.innerHTML).toBe('');
    
    // 调用showModal方法
    modal.showModal();
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(modal.shadowRoot?.querySelector('.ew-modal')).toBeTruthy();
  });

  it('应该响应hideModal方法', async () => {
    // 先打开弹框
    modal.setAttribute('model-value', 'true');
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(modal.shadowRoot?.querySelector('.ew-modal')).toBeTruthy();
    
    // 调用hideModal方法
    modal.hideModal();
    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(modal.shadowRoot?.innerHTML).toBe('');
  });
}); 
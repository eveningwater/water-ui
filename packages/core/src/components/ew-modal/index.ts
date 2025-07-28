import { BaseComponent } from '../../utils/base-component';
import { CloseIcon } from '@water-ui/icons';
import { ModalProps } from '../../types';
import { modalStyles } from './index-style';

export class EwModal extends BaseComponent {
  private modalProps: ModalProps = {};

  protected initProps(): void {
    super.initProps();
    this.modalProps = {
      modelValue: this.getAttribute('model-value') === 'true',
      title: this.getAttribute('title') || '',
      width: this.getAttribute('width') || '500px',
      fullscreen: this.hasAttribute('fullscreen'),
      top: this.getAttribute('top') || '15vh',
      center: this.hasAttribute('center'),
      showClose: this.getAttribute('show-close') !== 'false',
      showCancelButton: this.hasAttribute('show-cancel-button'),
      showConfirmButton: this.hasAttribute('show-confirm-button'),
      cancelButtonText: this.getAttribute('cancel-button-text') || '取消',
      confirmButtonText: this.getAttribute('confirm-button-text') || '确定',
      closeOnClickModal: this.getAttribute('close-on-click-modal') !== 'false',
      closeOnPressEscape: this.getAttribute('close-on-press-escape') !== 'false',
      lockScroll: this.getAttribute('lock-scroll') !== 'false',
      appendToBody: this.hasAttribute('append-to-body')
    };
    

  }

  protected render(): void {
    const { modelValue, title } = this.modalProps;
    

    if (!modelValue) {
      this.shadow.innerHTML = '';
      return;
    }

    // 清空并重新渲染
    this.shadow.innerHTML = '';
    
    // 注入样式
    this.injectStyles(modalStyles);

    // 遮罩层
    const overlay = this.createElement('div', { class: 'ew-modal ew-modal--visible' });
    overlay.addEventListener('click', this.handleOverlayClick.bind(this));

    // 弹窗内容
    const modal = this.createElement('div', { class: 'ew-modal__content' });
    modal.style.cssText = this.getModalStyles();
    
    // 弹窗头部
    const header = this.createElement('div', { class: 'ew-modal__header' });
    const titleElement = this.createElement('h3', { class: 'ew-modal__title' });
    titleElement.textContent = title || '';
    header.appendChild(titleElement);

    // 关闭按钮
    if (this.modalProps.showClose) {
      const closeButton = this.createElement('button', { class: 'ew-modal__close' });
      closeButton.innerHTML = CloseIcon({ size: '18px' });
      closeButton.addEventListener('click', this.handleClose.bind(this));
      header.appendChild(closeButton);
    }

    modal.appendChild(header);

    // 弹窗主体
    const body = this.createElement('div', { class: 'ew-modal__body' });
    const slot = this.createElement('slot');
    body.appendChild(slot);
    modal.appendChild(body);

    // 弹窗底部
    if (this.modalProps.showCancelButton || this.modalProps.showConfirmButton) {
      const footer = this.createElement('div', { class: 'ew-modal__footer' });
      
      if (this.modalProps.showCancelButton) {
        const cancelButton = this.createElement('button', { class: 'ew-modal__btn' });
        cancelButton.textContent = this.modalProps.cancelButtonText || '取消';
        cancelButton.addEventListener('click', this.handleCancel.bind(this));
        footer.appendChild(cancelButton);
      }
      
      if (this.modalProps.showConfirmButton) {
        const confirmButton = this.createElement('button', { class: 'ew-modal__btn ew-modal__btn--confirm' });
        confirmButton.textContent = this.modalProps.confirmButtonText || '确定';
        confirmButton.addEventListener('click', this.handleConfirm.bind(this));
        footer.appendChild(confirmButton);
      }
      
      modal.appendChild(footer);
    }

    overlay.appendChild(modal);
    
    // 添加遮罩层
    this.shadow.appendChild(overlay);

    // 添加键盘事件监听
    document.addEventListener('keydown', this.handleKeydown.bind(this));
  }

  private getModalStyles(): string {
    return '';
  }

  private handleClose(): void {
    this.modalProps.modelValue = false;
    // 同步更新DOM属性
    this.setAttribute('model-value', 'false');
    this.dispatchCustomEvent('close');
    this.dispatchCustomEvent('update:model-value', false);
    this.render();
  }

  private handleCancel(): void {
    this.dispatchCustomEvent('cancel');
    this.handleClose();
  }

  private handleConfirm(): void {
    this.dispatchCustomEvent('confirm');
    this.handleClose();
  }

  private handleOverlayClick(event: Event): void {
    if (event.target === event.currentTarget && this.modalProps.closeOnClickModal) {
      this.handleClose();
    }
  }

  private handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.modalProps.closeOnPressEscape) {
      this.handleClose();
    }
  }

  public showModal(): void {
    this.modalProps.modelValue = true;
    // 同步更新DOM属性
    this.setAttribute('model-value', 'true');
    this.render();
  }

  public hideModal(): void {
    this.modalProps.modelValue = false;
    // 同步更新DOM属性
    this.setAttribute('model-value', 'false');
    this.render();
  }

  static get observedAttributes(): string[] {
    return [
      'model-value',
      'title',
      'width',
      'fullscreen',
      'top',
      'center',
      'show-close',
      'show-cancel-button',
      'show-confirm-button',
      'cancel-button-text',
      'confirm-button-text',
      'close-on-click-modal',
      'close-on-press-escape',
      'lock-scroll',
      'append-to-body'
    ];
  }

  attributeChangedCallback(_name: string, oldValue: string | null, newValue: string | null): void {
    if (oldValue !== newValue) {
      this.initProps();
      this.render();
    }
  }
}

// 注册组件
customElements.define('ew-modal', EwModal); 
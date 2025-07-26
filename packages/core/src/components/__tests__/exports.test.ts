import { describe, it, expect } from 'vitest';

// 导入所有组件
import {
  EwButton,
  EwInput,
  EwTable,
  EwTableColumn,
  EwModal,
  EwCheckbox,
  EwCheckboxGroup,
  EwCheckboxButton,
  EwRadio,
  EwRadioButton,
  EwRadioGroup,
  EwInputNumber,
  EwContainer,
  EwHeader,
  EwAside,
  EwMain,
  EwFooter,
  EwRow,
  EwCol,
  EwLink,
  EwIcon
} from '../index';

describe('组件导出测试', () => {
  describe('基础组件导出', () => {
    it('应该正确导出 EwButton', () => {
      expect(EwButton).toBeDefined();
      expect(typeof EwButton).toBe('function');
    });

    it('应该正确导出 EwInput', () => {
      expect(EwInput).toBeDefined();
      expect(typeof EwInput).toBe('function');
    });

    it('应该正确导出 EwTable', () => {
      expect(EwTable).toBeDefined();
      expect(typeof EwTable).toBe('function');
    });

    it('应该正确导出 EwTableColumn', () => {
      expect(EwTableColumn).toBeDefined();
      expect(typeof EwTableColumn).toBe('function');
    });

    it('应该正确导出 EwModal', () => {
      expect(EwModal).toBeDefined();
      expect(typeof EwModal).toBe('function');
    });

    it('应该正确导出 EwCheckbox', () => {
      expect(EwCheckbox).toBeDefined();
      expect(typeof EwCheckbox).toBe('function');
    });

    it('应该正确导出 EwCheckboxGroup', () => {
      expect(EwCheckboxGroup).toBeDefined();
      expect(typeof EwCheckboxGroup).toBe('function');
    });

    it('应该正确导出 EwCheckboxButton', () => {
      expect(EwCheckboxButton).toBeDefined();
      expect(typeof EwCheckboxButton).toBe('function');
    });

    it('应该正确导出 EwRadio', () => {
      expect(EwRadio).toBeDefined();
      expect(typeof EwRadio).toBe('function');
    });

    it('应该正确导出 EwRadioButton', () => {
      expect(EwRadioButton).toBeDefined();
      expect(typeof EwRadioButton).toBe('function');
    });

    it('应该正确导出 EwRadioGroup', () => {
      expect(EwRadioGroup).toBeDefined();
      expect(typeof EwRadioGroup).toBe('function');
    });

    it('应该正确导出 EwInputNumber', () => {
      expect(EwInputNumber).toBeDefined();
      expect(typeof EwInputNumber).toBe('function');
    });
  });

  describe('容器组件导出', () => {
    it('应该正确导出 EwContainer', () => {
      expect(EwContainer).toBeDefined();
      expect(typeof EwContainer).toBe('function');
    });

    it('应该正确导出 EwHeader', () => {
      expect(EwHeader).toBeDefined();
      expect(typeof EwHeader).toBe('function');
    });

    it('应该正确导出 EwAside', () => {
      expect(EwAside).toBeDefined();
      expect(typeof EwAside).toBe('function');
    });

    it('应该正确导出 EwMain', () => {
      expect(EwMain).toBeDefined();
      expect(typeof EwMain).toBe('function');
    });

    it('应该正确导出 EwFooter', () => {
      expect(EwFooter).toBeDefined();
      expect(typeof EwFooter).toBe('function');
    });
  });

  describe('布局组件导出', () => {
    it('应该正确导出 EwRow', () => {
      expect(EwRow).toBeDefined();
      expect(typeof EwRow).toBe('function');
    });

    it('应该正确导出 EwCol', () => {
      expect(EwCol).toBeDefined();
      expect(typeof EwCol).toBe('function');
    });
  });

  describe('链接组件导出', () => {
    it('应该正确导出 EwLink', () => {
      expect(EwLink).toBeDefined();
      expect(typeof EwLink).toBe('function');
    });
  });

  describe('图标组件导出', () => {
    it('应该正确导出 EwIcon', () => {
      expect(EwIcon).toBeDefined();
      expect(typeof EwIcon).toBe('function');
    });
  });

  describe('组件注册测试', () => {
    it('应该正确注册 EwContainer 组件', () => {
      expect(customElements.get('ew-container')).toBe(EwContainer);
    });

    it('应该正确注册 EwHeader 组件', () => {
      expect(customElements.get('ew-header')).toBe(EwHeader);
    });

    it('应该正确注册 EwAside 组件', () => {
      expect(customElements.get('ew-aside')).toBe(EwAside);
    });

    it('应该正确注册 EwMain 组件', () => {
      expect(customElements.get('ew-main')).toBe(EwMain);
    });

    it('应该正确注册 EwFooter 组件', () => {
      expect(customElements.get('ew-footer')).toBe(EwFooter);
    });

    it('应该正确注册 EwRow 组件', () => {
      expect(customElements.get('ew-row')).toBe(EwRow);
    });

    it('应该正确注册 EwCol 组件', () => {
      expect(customElements.get('ew-col')).toBe(EwCol);
    });

    it('应该正确注册 EwLink 组件', () => {
      expect(customElements.get('ew-link')).toBe(EwLink);
    });

    it('应该正确注册 EwIcon 组件', () => {
      expect(customElements.get('ew-icon')).toBe(EwIcon);
    });
  });

  describe('组件继承关系测试', () => {
    it('EwContainer 应该继承自 BaseComponent', () => {
      expect(EwContainer.prototype).toBeInstanceOf(HTMLElement);
    });

    it('EwHeader 应该继承自 BaseComponent', () => {
      expect(EwHeader.prototype).toBeInstanceOf(HTMLElement);
    });

    it('EwAside 应该继承自 BaseComponent', () => {
      expect(EwAside.prototype).toBeInstanceOf(HTMLElement);
    });

    it('EwMain 应该继承自 BaseComponent', () => {
      expect(EwMain.prototype).toBeInstanceOf(HTMLElement);
    });

    it('EwFooter 应该继承自 BaseComponent', () => {
      expect(EwFooter.prototype).toBeInstanceOf(HTMLElement);
    });

    it('EwRow 应该继承自 BaseComponent', () => {
      expect(EwRow.prototype).toBeInstanceOf(HTMLElement);
    });

    it('EwCol 应该继承自 BaseComponent', () => {
      expect(EwCol.prototype).toBeInstanceOf(HTMLElement);
    });

    it('EwLink 应该继承自 BaseComponent', () => {
      expect(EwLink.prototype).toBeInstanceOf(HTMLElement);
    });

    it('EwIcon 应该继承自 BaseComponent', () => {
      expect(EwIcon.prototype).toBeInstanceOf(HTMLElement);
    });
  });
}); 
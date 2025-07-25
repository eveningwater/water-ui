import { BaseComponent } from '../../utils/base-component';
import { ColProps } from '../../types';
import { colStyles } from './index-style';

export class EwCol extends BaseComponent {
  private colProps: ColProps = {};

  protected initProps(): void {
    super.initProps();
    const spanAttr = this.getAttribute('span');
    const offsetAttr = this.getAttribute('offset');
    const pushAttr = this.getAttribute('push');
    const pullAttr = this.getAttribute('pull');
    const xsAttr = this.getAttribute('xs');
    const smAttr = this.getAttribute('sm');
    const mdAttr = this.getAttribute('md');
    const lgAttr = this.getAttribute('lg');
    const xlAttr = this.getAttribute('xl');
    
    this.colProps = {
      span: spanAttr ? parseInt(spanAttr) : undefined,
      offset: offsetAttr ? parseInt(offsetAttr) : undefined,
      push: pushAttr ? parseInt(pushAttr) : undefined,
      pull: pullAttr ? parseInt(pullAttr) : undefined,
      xs: xsAttr ? this.parseResponsiveValue(xsAttr) : undefined,
      sm: smAttr ? this.parseResponsiveValue(smAttr) : undefined,
      md: mdAttr ? this.parseResponsiveValue(mdAttr) : undefined,
      lg: lgAttr ? this.parseResponsiveValue(lgAttr) : undefined,
      xl: xlAttr ? this.parseResponsiveValue(xlAttr) : undefined,
      tag: this.getAttribute('tag') || 'div'
    };
  }

  protected render(): void {
    const { tag } = this.colProps;

    // 创建列元素
    const col = this.createElement(tag || 'div', {
      class: this.getColClasses()
    });

    // 添加插槽内容
    const slot = this.createElement('slot');
    col.appendChild(slot);

    // 清空并重新渲染
    this.shadow.innerHTML = '';

    // 注入样式
    this.injectStyles(colStyles);

    // 添加列元素
    this.shadow.appendChild(col);
  }

  private parseResponsiveValue(value: string): number | object {
    // 如果是纯数字，直接返回数字
    if (/^\d+$/.test(value)) {
      return parseInt(value);
    }
    
    // 如果是对象格式，尝试解析
    try {
      return JSON.parse(value);
    } catch {
      // 如果解析失败，返回数字 0
      return 0;
    }
  }

  private getColClasses(): string {
    const { span, offset, push, pull, xs, sm, md, lg, xl } = this.colProps;
    const classes = ['ew-col'];

    // 基础栅格类
    if (span !== undefined) {
      classes.push(`ew-col-${span}`);
    }

    // 偏移类
    if (offset !== undefined) {
      classes.push(`ew-col-offset-${offset}`);
    }

    // 推拉类
    if (push !== undefined) {
      classes.push(`ew-col-push-${push}`);
    }

    if (pull !== undefined) {
      classes.push(`ew-col-pull-${pull}`);
    }

    // 响应式类
    if (xs !== undefined) {
      if (typeof xs === 'number') {
        classes.push(`ew-col-xs-${xs}`);
      } else if (typeof xs === 'object') {
        // 处理对象格式的响应式配置
        Object.entries(xs).forEach(([key, value]) => {
          if (typeof value === 'number') {
            classes.push(`ew-col-xs-${key}-${value}`);
          }
        });
      }
    }

    if (sm !== undefined) {
      if (typeof sm === 'number') {
        classes.push(`ew-col-sm-${sm}`);
      } else if (typeof sm === 'object') {
        Object.entries(sm).forEach(([key, value]) => {
          if (typeof value === 'number') {
            classes.push(`ew-col-sm-${key}-${value}`);
          }
        });
      }
    }

    if (md !== undefined) {
      if (typeof md === 'number') {
        classes.push(`ew-col-md-${md}`);
      } else if (typeof md === 'object') {
        Object.entries(md).forEach(([key, value]) => {
          if (typeof value === 'number') {
            classes.push(`ew-col-md-${key}-${value}`);
          }
        });
      }
    }

    if (lg !== undefined) {
      if (typeof lg === 'number') {
        classes.push(`ew-col-lg-${lg}`);
      } else if (typeof lg === 'object') {
        Object.entries(lg).forEach(([key, value]) => {
          if (typeof value === 'number') {
            classes.push(`ew-col-lg-${key}-${value}`);
          }
        });
      }
    }

    if (xl !== undefined) {
      if (typeof xl === 'number') {
        classes.push(`ew-col-xl-${xl}`);
      } else if (typeof xl === 'object') {
        Object.entries(xl).forEach(([key, value]) => {
          if (typeof value === 'number') {
            classes.push(`ew-col-xl-${key}-${value}`);
          }
        });
      }
    }

    return classes.join(' ');
  }

  static get observedAttributes(): string[] {
    return ['span', 'offset', 'push', 'pull', 'xs', 'sm', 'md', 'lg', 'xl', 'tag'];
  }
}

// 注册组件
customElements.define('ew-col', EwCol); 
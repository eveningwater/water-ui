import { BaseComponent } from '../../utils/base-component';
import { ArrowIcon, ClearIcon, LoadingIcon } from '@water-ui/icons';
import { SelectProps } from '../../types';
import { selectStyles } from './index-style';

interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
  created?: boolean;
}

export class EwSelect extends BaseComponent {
  private selectProps: SelectProps = {};
  private options: SelectOption[] = [];
  private selectedValues: (string | number)[] = [];
  private isOpen: boolean = false;
  private filteredOptions: SelectOption[] = [];
  private searchQuery: string = '';
  private loading: boolean = false;
  private dropdownElement: HTMLElement | null = null;
  private wrapperElement: HTMLElement | null = null;
  private inputElement: HTMLInputElement | null = null;
  private clearButton: HTMLElement | null = null;
  private suffixElement: HTMLElement | null = null;

  protected initProps(): void {
    super.initProps();
    this.selectProps = {
      modelValue: this.getAttribute('model-value') || this.getAttribute('value') || '',
      multiple: this.hasAttribute('multiple'),
      disabled: this.hasAttribute('disabled'),
      clearable: this.hasAttribute('clearable'),
      filterable: this.hasAttribute('filterable'),
      loading: this.hasAttribute('loading'),
      placeholder: this.getAttribute('placeholder') || '请选择',
      size: (this.getAttribute('size') as SelectProps['size']) || 'medium',
      noDataText: this.getAttribute('no-data-text') || '暂无数据',
      loadingText: this.getAttribute('loading-text') || '加载中...',
      noMatchText: this.getAttribute('no-match-text') || '无匹配数据',
      multipleLimit: this.getAttribute('multiple-limit') ? parseInt(this.getAttribute('multiple-limit')!) : undefined,
      collapseTags: this.hasAttribute('collapse-tags'),
      collapseTagsTooltip: this.hasAttribute('collapse-tags-tooltip'),
      maxCollapseTags: this.getAttribute('max-collapse-tags') ? parseInt(this.getAttribute('max-collapse-tags')!) : 1,
      allowCreate: this.hasAttribute('allow-create'),
      remote: this.hasAttribute('remote'),
      reserveKeyword: this.hasAttribute('reserve-keyword'),
      defaultFirstOption: this.hasAttribute('default-first-option'),
      teleported: this.hasAttribute('teleported'),
      persistentPlaceholder: this.hasAttribute('persistent-placeholder'),
      placement: (this.getAttribute('placement') as SelectProps['placement']) || 'bottom',
      tagType: (this.getAttribute('tag-type') as SelectProps['tagType']) || 'info'
    };

    // 初始化选中值
    if (this.selectProps.multiple) {
      this.selectedValues = Array.isArray(this.selectProps.modelValue) 
        ? this.selectProps.modelValue as (string | number)[]
        : this.selectProps.modelValue ? [this.selectProps.modelValue as string | number] : [];
    } else {
      this.selectedValues = this.selectProps.modelValue ? [this.selectProps.modelValue as string | number] : [];
    }

    this.filteredOptions = [...this.options];
  }

  protected render(): void {
    const { multiple, disabled, clearable, loading, placeholder, filterable } = this.selectProps;
    
    // 只有在没有通过 setOptions 设置选项时才更新选项数据
    if (this.options.length === 0) {
      this.updateOptionsFromChildren();
    }
    
    // 创建选择器容器
    const selectContainer = this.createElement('div', { class: this.getSelectClasses() });

    // 创建选择器包装器
    this.wrapperElement = this.createElement('div', { class: 'ew-select__wrapper' });
    
    // 添加焦点状态类
    if (this.isOpen) {
      this.wrapperElement.classList.add('ew-select__wrapper--focused');
    }
    
    // 添加禁用状态类
    if (disabled) {
      this.wrapperElement.classList.add('ew-select__wrapper--disabled');
    }

    // 创建标签容器（多选模式）
    if (multiple) {
      const tagsContainer = this.createElement('div', { class: 'ew-select__tags' });
      
      // 渲染已选中的标签
      if (this.selectProps.collapseTags && this.selectedValues.length > (this.selectProps.maxCollapseTags || 1)) {
        // 显示前几个标签
        for (let i = 0; i < (this.selectProps.maxCollapseTags || 1); i++) {
          const value = this.selectedValues[i];
          const option = this.options.find(opt => opt.value === value);
          if (option) {
            const tag = this.createTag(option, i);
            tagsContainer.appendChild(tag);
          }
        }
        
        // 显示折叠提示
        const collapseTag = this.createElement('span', { class: 'ew-select__tag ew-select__tag--collapse' });
        const collapseLabel = this.createElement('span', { class: 'ew-select__tag-label' });
        collapseLabel.textContent = `+${this.selectedValues.length - (this.selectProps.maxCollapseTags || 1)}`;
        collapseTag.appendChild(collapseLabel);
        
        if (this.selectProps.collapseTagsTooltip) {
          const hiddenLabels = this.selectedValues
            .slice(this.selectProps.maxCollapseTags)
            .map(value => this.options.find(opt => opt.value === value)?.label)
            .filter(Boolean)
            .join(', ');
          collapseTag.title = hiddenLabels;
        }
        
        tagsContainer.appendChild(collapseTag);
      } else {
        // 显示所有标签
        this.selectedValues.forEach((value, index) => {
          const option = this.options.find(opt => opt.value === value);
          if (option) {
            const tag = this.createTag(option, index);
            tagsContainer.appendChild(tag);
          }
        });
      }

      // 创建输入框（用于搜索）
      if (filterable) {
        this.inputElement = this.createElement('input', {
          type: 'text',
          class: 'ew-select__input',
          placeholder: this.selectedValues.length === 0 ? (placeholder || '') : '',
          value: this.searchQuery
        }) as HTMLInputElement;
        
        this.inputElement.addEventListener('input', this.handleSearchInput.bind(this));
        this.inputElement.addEventListener('keydown', this.handleKeydown.bind(this));
        this.inputElement.addEventListener('focus', this.handleFocus.bind(this));
        this.inputElement.addEventListener('blur', this.handleBlur.bind(this));
        
        tagsContainer.appendChild(this.inputElement);
      }

      this.wrapperElement.appendChild(tagsContainer);
    } else {
      // 单选模式
      this.inputElement = this.createElement('input', {
        type: 'text',
        class: 'ew-select__input',
        placeholder: placeholder || '',
        value: this.getDisplayValue(),
        ...(filterable ? {} : { readonly: '' })
      }) as HTMLInputElement;
      
      if (filterable) {
        this.inputElement.addEventListener('input', this.handleSearchInput.bind(this));
        this.inputElement.addEventListener('keydown', this.handleKeydown.bind(this));
        this.inputElement.addEventListener('focus', this.handleFocus.bind(this));
        this.inputElement.addEventListener('blur', this.handleBlur.bind(this));
      } else {
        this.inputElement.addEventListener('click', this.handleWrapperClick.bind(this));
        this.inputElement.addEventListener('focus', this.handleFocus.bind(this));
        this.inputElement.addEventListener('blur', this.handleBlur.bind(this));
      }
      
      this.wrapperElement.appendChild(this.inputElement);
    }

    // 添加清除按钮
    if (clearable && !disabled && this.selectedValues.length > 0) {
      this.clearButton = this.createElement('span', { class: 'ew-select__clear' });
      this.clearButton.innerHTML = ClearIcon({ size: '16px' });
      this.clearButton.addEventListener('click', this.handleClear.bind(this));
      this.wrapperElement.appendChild(this.clearButton);
    }

    // 添加后缀图标
    this.suffixElement = this.createElement('span', { class: 'ew-select__suffix' });
    if (loading) {
      this.suffixElement.innerHTML = LoadingIcon({ size: '16px' });
    } else {
      this.suffixElement.innerHTML = ArrowIcon({ size: '16px', direction: this.isOpen ? 'up' : 'down' });
    }
    this.wrapperElement.appendChild(this.suffixElement);

    // 添加点击事件
    this.wrapperElement.addEventListener('click', this.handleWrapperClick.bind(this));

    selectContainer.appendChild(this.wrapperElement);

    // 创建下拉菜单
    this.dropdownElement = this.createElement('div', { class: 'ew-select__dropdown' });
    this.renderDropdown();
    selectContainer.appendChild(this.dropdownElement);

    // 清空并重新渲染
    this.shadow.innerHTML = '';
    
    // 注入样式
    this.injectStyles(selectStyles);
    
    // 添加容器元素
    this.shadow.appendChild(selectContainer);

    // 添加全局点击事件监听器
    this.addGlobalEventListeners();
  }

  private getSelectClasses(): string {
    const { size, disabled } = this.selectProps;
    
    const classes = ['ew-select'];
    
    if (size && size !== 'medium') {
      classes.push(`ew-select--${size}`);
    }
    if (disabled) {
      classes.push('ew-select--disabled');
      if (this.wrapperElement) {
        this.wrapperElement.classList.add('ew-select__wrapper--disabled');
      }
    }

    return classes.join(' ');
  }

  private getDisplayValue(): string {
    if (this.selectedValues.length === 0) return '';
    
    const selectedOption = this.options.find(opt => opt.value === this.selectedValues[0]);
    return selectedOption ? selectedOption.label : String(this.selectedValues[0]);
  }

  private createTag(option: SelectOption, _index: number): HTMLElement {
    const tag = this.createElement('span', { class: 'ew-select__tag' });
    
    const label = this.createElement('span', { class: 'ew-select__tag-label' });
    label.textContent = option.label;
    tag.appendChild(label);

    const closeButton = this.createElement('span', { class: 'ew-select__tag-close' });
    closeButton.innerHTML = '×';
    closeButton.addEventListener('click', (e) => {
      e.stopPropagation();
      this.removeValue(option.value);
    });
    tag.appendChild(closeButton);

    // 添加 tooltip
    if (this.selectProps.collapseTagsTooltip) {
      tag.title = option.label;
    }

    return tag;
  }

  private renderDropdown(): void {
    if (!this.dropdownElement) return;

    this.dropdownElement.innerHTML = '';

    // 添加下拉菜单头部（如果有）
    if (this.selectProps.remote && this.searchQuery) {
      const header = this.createElement('div', { class: 'ew-select__dropdown-header' });
      header.textContent = `搜索: ${this.searchQuery}`;
      this.dropdownElement.appendChild(header);
    }

    // 创建下拉菜单主体
    const body = this.createElement('div', { class: 'ew-select__dropdown-body' });
    const list = this.createElement('ul', { class: 'ew-select__dropdown-list' });

    if (this.loading) {
      const loadingItem = this.createElement('div', { class: 'ew-select__loading' });
      loadingItem.textContent = this.selectProps.loadingText || '加载中...';
      list.appendChild(loadingItem);
    } else if (this.filteredOptions.length === 0) {
      const emptyItem = this.createElement('div', { class: 'ew-select__empty' });
      emptyItem.textContent = this.searchQuery ? (this.selectProps.noMatchText || '无匹配数据') : (this.selectProps.noDataText || '暂无数据');
      list.appendChild(emptyItem);
    } else {
      // 渲染分组选项
      this.renderGroupedOptions(list);
    }

    body.appendChild(list);
    this.dropdownElement.appendChild(body);

    // 添加下拉菜单底部（如果有）
    if (this.selectProps.multiple && this.selectedValues.length > 0) {
      const footer = this.createElement('div', { class: 'ew-select__dropdown-footer' });
      footer.textContent = `已选择 ${this.selectedValues.length} 项`;
      this.dropdownElement.appendChild(footer);
    }
  }

  private renderGroupedOptions(list: HTMLElement): void {
    // 获取所有子元素
    const children = Array.from(this.children);
    const groups: HTMLElement[] = [];
    const standaloneOptions: HTMLElement[] = [];

    // 分离分组和独立选项
    children.forEach(child => {
      if (child.tagName.toLowerCase() === 'ew-select-option-group') {
        groups.push(child as HTMLElement);
      } else if (child.tagName.toLowerCase() === 'ew-select-option') {
        standaloneOptions.push(child as HTMLElement);
      }
    });

    // 渲染独立选项
    standaloneOptions.forEach(optionElement => {
      if (optionElement instanceof HTMLElement && 'getOptionData' in optionElement) {
        const optionData = (optionElement as any).getOptionData();
        if (this.isOptionVisible(optionData)) {
          const optionEl = this.createOptionElement(optionData);
          list.appendChild(optionEl);
        }
      }
    });

    // 渲染分组选项
    groups.forEach(groupElement => {
      if (groupElement instanceof HTMLElement && 'getGroupData' in groupElement) {
        const groupData = (groupElement as any).getGroupData();
        if (!groupData.disabled) {
          const groupEl = this.createGroupElement(groupData);
          list.appendChild(groupEl);
        }
      }
    });
  }

  private createGroupElement(groupData: any): HTMLElement {
    const groupContainer = this.createElement('li', { class: 'ew-select__option-group' });
    
    // 创建分组头部
    const groupHeader = this.createElement('div', { class: 'ew-select__option-group-header' });
    groupHeader.textContent = groupData.label;
    groupContainer.appendChild(groupHeader);

    // 创建分组主体
    const groupBody = this.createElement('ul', { class: 'ew-select__option-group-body' });
    
    // 渲染分组内的选项
    groupData.options.forEach((option: any) => {
      if (this.isOptionVisible(option)) {
        const optionEl = this.createOptionElement(option);
        groupBody.appendChild(optionEl);
      }
    });

    groupContainer.appendChild(groupBody);
    return groupContainer;
  }

  private isOptionVisible(option: any): boolean {
    // 检查选项是否在过滤结果中
    return this.filteredOptions.some(filteredOption => 
      filteredOption.value === option.value && filteredOption.label === option.label
    );
  }

  private createOptionElement(option: SelectOption & { slotContent?: string }): HTMLElement {
    const li = this.createElement('li', { class: 'ew-select__option' });
    
    if (option.disabled) {
      li.classList.add('ew-select__option--disabled');
    }
    
    if (this.selectedValues.includes(option.value)) {
      li.classList.add('ew-select__option--selected');
    }

    // 添加选中图标
    if (this.selectProps.multiple) {
      const check = this.createElement('span', { class: 'ew-select__option-check' });
      if (this.selectedValues.includes(option.value)) {
        check.innerHTML = '✓';
      }
      li.appendChild(check);
    }

    const label = this.createElement('span', { class: 'ew-select__option-label' });
    
    // 如果有插槽内容，使用插槽内容；否则使用 label
    if (option.slotContent) {
      label.innerHTML = option.slotContent;
    } else {
      label.textContent = option.label;
    }
    
    li.appendChild(label);

    if (!option.disabled) {
      li.addEventListener('click', () => this.handleOptionClick(option));
    }

    return li;
  }

  private handleWrapperClick(event: Event): void {
    if (this.selectProps.disabled) return;
    
    event.stopPropagation();
    this.toggleDropdown();
  }

  private handleOptionClick(option: SelectOption): void {
    if (option.disabled) return;

    if (this.selectProps.multiple) {
      this.toggleValue(option.value);
    } else {
      this.setValue(option.value);
      this.closeDropdown();
    }
  }



  private handleSearchInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchQuery = target.value;
    
    if (this.selectProps.remote && this.selectProps.remoteMethod) {
      // 远程搜索模式
      this.loading = true;
      this.renderDropdown();
      
      // 调用远程搜索方法
      if (this.selectProps.remoteMethod) {
        this.selectProps.remoteMethod(this.searchQuery);
      }
    } else {
      // 本地过滤模式
      this.filterOptions();
    }
    
    this.openDropdown();
    this.renderDropdown();
  }

  private handleKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Enter':
        event.preventDefault();
        if (this.filteredOptions.length > 0) {
          const firstOption = this.filteredOptions[0];
          if (!firstOption.disabled) {
            this.handleOptionClick(firstOption);
          }
        } else if (this.selectProps.allowCreate && this.searchQuery.trim()) {
          // 允许创建新选项
          this.createNewOption(this.searchQuery.trim());
        }
        break;
      case 'Escape':
        event.preventDefault();
        this.closeDropdown();
        break;
      case 'ArrowDown':
        event.preventDefault();
        this.navigateOptions(1);
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.navigateOptions(-1);
        break;
      case 'Tab':
        event.preventDefault();
        this.closeDropdown();
        break;
    }
  }

  private createNewOption(label: string): void {
    const newOption: SelectOption = {
      value: label,
      label: label,
      created: true
    };
    
    this.options.push(newOption);
    this.setValue(newOption.value);
    this.closeDropdown();
    
    // 触发创建事件
    this.dispatchCustomEvent('create', newOption);
  }

  private navigateOptions(direction: number): void {
    // 获取所有可点击的选项元素
    const optionElements = this.dropdownElement?.querySelectorAll('.ew-select__option:not(.ew-select__option--disabled)') as NodeListOf<HTMLElement>;
    if (!optionElements || optionElements.length === 0) return;

    // 找到当前高亮的选项
    let currentIndex = -1;
    for (let i = 0; i < optionElements.length; i++) {
      if (optionElements[i].classList.contains('ew-select__option--highlighted')) {
        currentIndex = i;
        break;
      }
    }

    // 计算下一个索引
    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) nextIndex = optionElements.length - 1;
    if (nextIndex >= optionElements.length) nextIndex = 0;

    // 移除之前的高亮
    optionElements.forEach(el => el.classList.remove('ew-select__option--highlighted'));

    // 添加新的高亮
    if (optionElements[nextIndex]) {
      optionElements[nextIndex].classList.add('ew-select__option--highlighted');
      
      // 滚动到可见区域
      optionElements[nextIndex].scrollIntoView({ 
        block: 'nearest',
        behavior: 'smooth'
      });
    }
  }

  private handleFocus(event: Event): void {
    this.dispatchCustomEvent('focus', event);
  }

  private handleBlur(event: Event): void {
    this.dispatchCustomEvent('blur', event);
  }

  private handleClear(event: Event): void {
    event.stopPropagation();
    this.clearValue();
  }

  private toggleDropdown(): void {
    if (this.isOpen) {
      this.closeDropdown();
    } else {
      this.openDropdown();
    }
  }

  private openDropdown(): void {
    if (this.selectProps.disabled) return;
    
    this.isOpen = true;
    if (this.wrapperElement) {
      this.wrapperElement.classList.add('ew-select__wrapper--focused');
    }
    if (this.dropdownElement) {
      this.dropdownElement.classList.add('ew-select__dropdown--visible');
    }
    if (this.suffixElement) {
      this.suffixElement.innerHTML = ArrowIcon({ size: '16px', direction: 'up' });
    }
    
    this.dispatchCustomEvent('visible-change', true);
  }

  private closeDropdown(): void {
    this.isOpen = false;
    if (this.wrapperElement) {
      this.wrapperElement.classList.remove('ew-select__wrapper--focused');
    }
    if (this.dropdownElement) {
      this.dropdownElement.classList.remove('ew-select__dropdown--visible');
    }
    if (this.suffixElement) {
      this.suffixElement.innerHTML = ArrowIcon({ size: '16px', direction: 'down' });
    }
    
    this.dispatchCustomEvent('visible-change', false);
  }



  private toggleValue(value: string | number): void {
    const index = this.selectedValues.indexOf(value);
    if (index > -1) {
      this.selectedValues.splice(index, 1);
    } else {
      if (this.selectProps.multipleLimit && this.selectedValues.length >= this.selectProps.multipleLimit) {
        return;
      }
      this.selectedValues.push(value);
    }
    this.updateModelValue();
    this.render();
  }

  private removeValue(value: string | number): void {
    const index = this.selectedValues.indexOf(value);
    if (index > -1) {
      this.selectedValues.splice(index, 1);
      this.updateModelValue();
      this.render();
      
      // 触发移除标签事件
      this.dispatchCustomEvent('remove-tag', value);
    }
  }

  private clearValue(): void {
    this.selectedValues = [];
    this.searchQuery = '';
    this.updateModelValue();
    this.render();
    
    // 触发清除事件
    this.dispatchCustomEvent('clear');
    
    // 清除后自动聚焦
    if (this.inputElement) {
      this.inputElement.focus();
    }
  }

  private updateModelValue(): void {
    const value = this.selectProps.multiple ? this.selectedValues : this.selectedValues[0] || '';
    this.dispatchCustomEvent('update:modelValue', value);
    this.dispatchCustomEvent('change', value);
  }

  private filterOptions(): void {
    if (!this.searchQuery) {
      this.filteredOptions = [...this.options];
      return;
    }

    this.filteredOptions = this.options.filter(option => 
      option.label.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  private updateOptionsFromChildren(): void {
    this.options = [];
    
    // 处理直接的 option 子元素
    const optionElements = this.querySelectorAll('ew-select-option');
    optionElements.forEach(optionElement => {
      if (optionElement instanceof HTMLElement && 'getOptionData' in optionElement) {
        const optionData = (optionElement as any).getOptionData();
        this.options.push(optionData);
      }
    });
    
    // 处理 option-group 子元素
    const groupElements = this.querySelectorAll('ew-select-option-group');
    groupElements.forEach(groupElement => {
      if (groupElement instanceof HTMLElement && 'getGroupData' in groupElement) {
        const groupData = (groupElement as any).getGroupData();
        if (!groupData.disabled) {
          this.options.push(...groupData.options);
        }
      }
    });
    
    this.filterOptions();
  }

  private addGlobalEventListeners(): void {
    // 点击外部关闭下拉菜单
    document.addEventListener('click', this.handleGlobalClick.bind(this));
    
    // ESC 键关闭下拉菜单
    document.addEventListener('keydown', this.handleGlobalKeydown.bind(this));
  }

  private handleGlobalClick(event: Event): void {
    if (!this.shadow.contains(event.target as Node)) {
      this.closeDropdown();
    }
  }

  private handleGlobalKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.isOpen) {
      this.closeDropdown();
    }
  }

  // 公共方法
  public addOption(option: SelectOption): void {
    this.options.push(option);
    this.filterOptions();
    this.render();
  }

  public removeOption(value: string | number): void {
    const index = this.options.findIndex(opt => opt.value === value);
    if (index > -1) {
      this.options.splice(index, 1);
      this.filterOptions();
      this.render();
    }
  }

  public setOptions(options: SelectOption[]): void {
    this.options = options;
    this.filterOptions();
    this.render();
  }

  public getValue(): string | number | (string | number)[] {
    return this.selectProps.multiple ? this.selectedValues : this.selectedValues[0] || '';
  }

  public setValue(value: string | number | (string | number)[]): void {
    if (this.selectProps.multiple) {
      const values = Array.isArray(value) ? value as (string | number)[] : value ? [value as string | number] : [];
      // 过滤掉禁用的选项
      const validValues = values.filter(v => {
        const option = this.options.find(opt => opt.value === v);
        return !option || !option.disabled;
      });
      // 应用多选限制
      if (this.selectProps.multipleLimit && validValues.length > this.selectProps.multipleLimit) {
        this.selectedValues = validValues.slice(0, this.selectProps.multipleLimit);
      } else {
        this.selectedValues = validValues;
      }
    } else {
      // 检查选项是否被禁用
      const option = this.options.find(opt => opt.value === value);
      if (option && option.disabled) {
        // 如果选项被禁用，不改变当前选择
        return;
      } else {
        this.selectedValues = value ? [value as string | number] : [];
      }
    }
    this.updateModelValue();
    this.render();
  }

  public clear(): void {
    this.clearValue();
  }

  public focus(): void {
    if (this.inputElement) {
      this.inputElement.focus();
    }
  }

  public blur(): void {
    if (this.inputElement) {
      this.inputElement.blur();
    }
  }

  // 远程搜索相关方法
  public setRemoteLoading(loading: boolean): void {
    this.loading = loading;
    this.renderDropdown();
  }

  public setRemoteOptions(options: SelectOption[]): void {
    this.options = options;
    this.filteredOptions = options;
    this.loading = false;
    this.renderDropdown();
  }

  static get observedAttributes(): string[] {
    return [
      'model-value',
      'value',
      'multiple',
      'disabled',
      'clearable',
      'filterable',
      'loading',
      'placeholder',
      'size',
      'no-data-text',
      'loading-text',
      'no-match-text',
      'multiple-limit',
      'collapse-tags',
      'collapse-tags-tooltip',
      'max-collapse-tags',
      'allow-create',
      'remote',
      'reserve-keyword',
      'default-first-option',
      'teleported',
      'persistent-placeholder',
      'placement',
      'tag-type'
    ];
  }
}

// 注册组件
customElements.define('ew-select', EwSelect); 
// 图标定义
export interface IconProps {
  size?: string | number;
  color?: string;
  class?: string;
}

// Loading 图标
export const LoadingIcon = (props: IconProps = {}): string => {
  const { size = '14px', color = 'currentColor', class: className = '' } = props;
  return `
    <svg class="ew-loading-spinner ${className}" style="width: ${size}; height: ${size}; color: ${color};" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none" stroke-dasharray="31.416" stroke-dashoffset="31.416">
        <animate attributeName="stroke-dasharray" dur="2s" values="0 31.416;15.708 15.708;0 31.416" repeatCount="indefinite"/>
        <animate attributeName="stroke-dashoffset" dur="2s" values="0;-15.708;-31.416" repeatCount="indefinite"/>
      </circle>
    </svg>
  `;
};

// 关闭图标
export const CloseIcon = (props: IconProps = {}): string => {
  const { size = '16px', color = 'currentColor', class: className = '' } = props;
  return `
    <svg class="${className}" style="width: ${size}; height: ${size}; color: ${color};" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  `;
};

// 眼睛图标（显示密码）
export const EyeIcon = (props: IconProps = {}): string => {
  const { size = '16px', color = 'currentColor', class: className = '' } = props;
  return `
    <svg class="${className}" style="width: ${size}; height: ${size}; color: ${color};" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  `;
};

// 眼睛关闭图标（隐藏密码）
export const EyeOffIcon = (props: IconProps = {}): string => {
  const { size = '16px', color = 'currentColor', class: className = '' } = props;
  return `
    <svg class="${className}" style="width: ${size}; height: ${size}; color: ${color};" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
  `;
};

// 清除图标
export const ClearIcon = (props: IconProps = {}): string => {
  const { size = '16px', color = 'currentColor', class: className = '' } = props;
  return `
    <svg class="${className}" style="width: ${size}; height: ${size}; color: ${color};" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="15" y1="9" x2="9" y2="15"></line>
      <line x1="9" y1="9" x2="15" y2="15"></line>
    </svg>
  `;
};

// 箭头图标
export const ArrowIcon = (props: IconProps & { direction?: 'up' | 'down' | 'left' | 'right' } = {}): string => {
  const { size = '16px', color = 'currentColor', class: className = '', direction = 'down' } = props;
  
  const rotations = {
    up: 'rotate(180deg)',
    down: 'rotate(0deg)',
    left: 'rotate(90deg)',
    right: 'rotate(-90deg)'
  };
  
  return `
    <svg class="${className}" style="width: ${size}; height: ${size}; color: ${color}; transform: ${rotations[direction]};" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="6,9 12,15 18,9"></polyline>
    </svg>
  `;
};

// 搜索图标
export const SearchIcon = (props: IconProps = {}): string => {
  const { size = '16px', color = 'currentColor', class: className = '' } = props;
  return `
    <svg class="${className}" style="width: ${size}; height: ${size}; color: ${color};" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.35-4.35"></path>
    </svg>
  `;
};

// 日历图标
export const CalendarIcon = (props: IconProps = {}): string => {
  const { size = '16px', color = 'currentColor', class: className = '' } = props;
  return `
    <svg class="${className}" style="width: ${size}; height: ${size}; color: ${color};" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  `;
};

// 时钟图标
export const ClockIcon = (props: IconProps = {}): string => {
  const { size = '16px', color = 'currentColor', class: className = '' } = props;
  return `
    <svg class="${className}" style="width: ${size}; height: ${size}; color: ${color};" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12,6 12,12 16,14"></polyline>
    </svg>
  `;
};

// 导出所有图标
export const Icons = {
  Loading: LoadingIcon,
  Close: CloseIcon,
  Eye: EyeIcon,
  EyeOff: EyeOffIcon,
  Clear: ClearIcon,
  Arrow: ArrowIcon,
  Search: SearchIcon,
  Calendar: CalendarIcon,
  Clock: ClockIcon
}; 
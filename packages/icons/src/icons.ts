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
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none" stroke-dasharray="31.416" stroke-dashoffset="31.416" stroke-linecap="round">
        <animate attributeName="stroke-dasharray" dur="1.5s" values="0 31.416;15.708 15.708;0 31.416" repeatCount="indefinite"/>
        <animate attributeName="stroke-dashoffset" dur="1.5s" values="0;-15.708;-31.416" repeatCount="indefinite"/>
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
    <svg class="${className}" style="width: ${size}; height: ${size}; color: ${color};" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
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
    <svg class="${className}" style="width: ${size}; height: ${size}; color: ${color};" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
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
    <svg class="${className}" style="width: ${size}; height: ${size}; color: ${color};" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12,6 12,12 16,14"></polyline>
    </svg>
  `;
};

// 增加图标（加号）
export const PlusIcon = (props: IconProps = {}): string => {
  const { size = '16px', color = 'currentColor', class: className = '' } = props;
  return `
    <svg class="${className}" style="width: ${size}; height: ${size}; color: ${color};" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  `;
};

// 减少图标（减号）
export const MinusIcon = (props: IconProps = {}): string => {
  const { size = '16px', color = 'currentColor', class: className = '' } = props;
  return `
    <svg class="${className}" style="width: ${size}; height: ${size}; color: ${color};" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  `;
};

// 链接图标
export const LinkIcon = (props: IconProps = {}): string => {
  const { size = '16px', color = 'currentColor', class: className = '' } = props;
  return `
    <svg class="${className}" style="width: ${size}; height: ${size}; color: ${color};" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  `;
};

// 外部链接图标
export const ExternalLinkIcon = (props: IconProps = {}): string => {
  const { size = '16px', color = 'currentColor', class: className = '' } = props;
  return `
    <svg class="${className}" style="width: ${size}; height: ${size}; color: ${color};" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15,3 21,3 21,9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  `;
};

// 邮件图标
export const MailIcon = (props: IconProps = {}): string => {
  const { size = '16px', color = 'currentColor', class: className = '' } = props;
  return `
    <svg class="${className}" style="width: ${size}; height: ${size}; color: ${color};" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  `;
};

// 设置图标
export const SettingsIcon = (props: IconProps = {}): string => {
  const { size = '16px', color = 'currentColor', class: className = '' } = props;
  return `
    <svg class="${className}" style="width: ${size}; height: ${size}; color: ${color};" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
  `;
};

// 主页图标
export const HomeIcon = (props: IconProps = {}): string => {
  const { size = '16px', color = 'currentColor', class: className = '' } = props;
  return `
    <svg class="${className}" style="width: ${size}; height: ${size}; color: ${color};" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9,22 9,12 15,12 15,22"></polyline>
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
  Clock: ClockIcon,
  Plus: PlusIcon,
  Minus: MinusIcon,
  Link: LinkIcon,
  ExternalLink: ExternalLinkIcon,
  Mail: MailIcon,
  Settings: SettingsIcon,
  Home: HomeIcon
}; 
declare module '@water-ui/icons' {
  export function LoadingIcon(props: { size?: string }): string;
  export function ClearIcon(props: { size?: string }): string;
  export function EyeIcon(props: { size?: string }): string;
  export function EyeOffIcon(props: { size?: string }): string;
  export function CloseIcon(props: { size?: string }): string;
  export function PlusIcon(props: { size?: string }): string;
  export function MinusIcon(props: { size?: string }): string;
  export function ArrowIcon(props: { direction?: 'left' | 'right', size?: string }): string;
}

declare module '@water-ui/utils' {
  export function executeInlineCode(code: string, context?: any, event?: Event): any;
} 
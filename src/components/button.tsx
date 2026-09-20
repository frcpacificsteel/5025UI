import * as React from 'react';
import { Button as BaseButton } from '@base-ui/react/button';

type Variant = 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost';
type Size = 'sm' | 'md' | 'lg';
export type ButtonProps = React.ComponentProps<typeof BaseButton> & { variant?: Variant; size?: Size };

export const Button = React.forwardRef<HTMLElement, ButtonProps>(function Button({ className = '', variant = 'primary', size = 'md', ...props }, ref) {
  return <BaseButton ref={ref} className={`ps-button ps-button--${variant} ps-button--${size} ${className}`} {...props} />;
});

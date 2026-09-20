import * as React from 'react';
export type BadgeProps = React.ComponentPropsWithoutRef<'span'> & { tone?: 'blue' | 'gold' | 'red' | 'slate' };
export function Badge({ className = '', tone = 'blue', ...props }: BadgeProps) {
  return <span className={`ps-badge ps-badge--${tone} ${className}`} {...props} />;
}

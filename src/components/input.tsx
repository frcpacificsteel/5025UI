import * as React from 'react';
export type InputProps = React.ComponentPropsWithoutRef<'input'>;
export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input({ className = '', ...props }, ref) {
  return <input ref={ref} className={`ps-input ${className}`} {...props} />;
});

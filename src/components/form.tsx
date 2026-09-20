import * as React from 'react';

export const Label = React.forwardRef<HTMLLabelElement, React.ComponentPropsWithoutRef<'label'>>(function Label({ className = '', ...props }, ref) {
  return <label ref={ref} className={`ps-label ${className}`} {...props} />;
});
export const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentPropsWithoutRef<'textarea'>>(function Textarea({ className = '', ...props }, ref) {
  return <textarea ref={ref} className={`ps-textarea ${className}`} {...props} />;
});
export function Field({ className = '', ...props }: React.ComponentPropsWithoutRef<'div'>) { return <div className={`ps-field ${className}`} {...props} />; }
export function FieldHint({ className = '', ...props }: React.ComponentPropsWithoutRef<'p'>) { return <p className={`ps-field__hint ${className}`} {...props} />; }
export function FieldError({ className = '', ...props }: React.ComponentPropsWithoutRef<'p'>) { return <p className={`ps-field__error ${className}`} role="alert" {...props} />; }

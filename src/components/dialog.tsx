import * as React from 'react';
import { Dialog as BaseDialog } from '@base-ui/react/dialog';
export const Dialog = BaseDialog.Root;
export const DialogTrigger = BaseDialog.Trigger;
export const DialogTitle = BaseDialog.Title;
export const DialogDescription = BaseDialog.Description;
export const DialogClose = BaseDialog.Close;
export function DialogContent({ className = '', children, ...props }: React.ComponentProps<typeof BaseDialog.Popup>) {
  return <BaseDialog.Portal><BaseDialog.Backdrop className="ps-overlay" /><BaseDialog.Viewport className="ps-overlay__viewport"><BaseDialog.Popup className={`ps-dialog ${className}`} {...props}>{children}</BaseDialog.Popup></BaseDialog.Viewport></BaseDialog.Portal>;
}

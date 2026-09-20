import * as React from 'react';
import { AlertDialog as BaseAlertDialog } from '@base-ui/react/alert-dialog';
import { Dialog as BaseDialog } from '@base-ui/react/dialog';
import { Drawer as BaseDrawer } from '@base-ui/react/drawer';
import { Popover as BasePopover } from '@base-ui/react/popover';
import { PreviewCard as BasePreviewCard } from '@base-ui/react/preview-card';
import { Tooltip as BaseTooltip } from '@base-ui/react/tooltip';
import { CloseIcon, cx } from '../utils';

export const AlertDialog = BaseAlertDialog.Root;
export const AlertDialogTrigger = BaseAlertDialog.Trigger;
export const AlertDialogTitle = BaseAlertDialog.Title;
export const AlertDialogDescription = BaseAlertDialog.Description;
export const AlertDialogClose = BaseAlertDialog.Close;
export function AlertDialogContent({ className = '', children, ...props }: React.ComponentProps<typeof BaseAlertDialog.Popup>) {
  return <BaseAlertDialog.Portal><BaseAlertDialog.Backdrop className="ps-overlay" /><BaseAlertDialog.Viewport className="ps-overlay__viewport"><BaseAlertDialog.Popup className={cx('ps-dialog ps-alert-dialog', className)} {...props}>{children}</BaseAlertDialog.Popup></BaseAlertDialog.Viewport></BaseAlertDialog.Portal>;
}

export const Popover = BasePopover.Root;
export const PopoverTrigger = BasePopover.Trigger;
export const PopoverTitle = BasePopover.Title;
export const PopoverDescription = BasePopover.Description;
export const PopoverClose = BasePopover.Close;
export function PopoverContent({ className = '', sideOffset = 8, children, ...props }: React.ComponentProps<typeof BasePopover.Popup> & { sideOffset?: number }) {
  return <BasePopover.Portal><BasePopover.Positioner sideOffset={sideOffset} className="ps-positioner"><BasePopover.Popup className={cx('ps-popover', className)} {...props}>{children}<BasePopover.Arrow className="ps-floating-arrow" /></BasePopover.Popup></BasePopover.Positioner></BasePopover.Portal>;
}

export const TooltipProvider = BaseTooltip.Provider;
export const Tooltip = BaseTooltip.Root;
export const TooltipTrigger = BaseTooltip.Trigger;
export function TooltipContent({ className = '', sideOffset = 7, children, ...props }: React.ComponentProps<typeof BaseTooltip.Popup> & { sideOffset?: number }) {
  return <BaseTooltip.Portal><BaseTooltip.Positioner sideOffset={sideOffset}><BaseTooltip.Popup className={cx('ps-tooltip', className)} {...props}>{children}<BaseTooltip.Arrow className="ps-floating-arrow" /></BaseTooltip.Popup></BaseTooltip.Positioner></BaseTooltip.Portal>;
}

export const HoverCard = BasePreviewCard.Root;
export const HoverCardTrigger = BasePreviewCard.Trigger;
export function HoverCardContent({ className = '', sideOffset = 8, children, ...props }: React.ComponentProps<typeof BasePreviewCard.Popup> & { sideOffset?: number }) {
  return <BasePreviewCard.Portal><BasePreviewCard.Positioner sideOffset={sideOffset}><BasePreviewCard.Popup className={cx('ps-hover-card', className)} {...props}>{children}<BasePreviewCard.Arrow className="ps-floating-arrow" /></BasePreviewCard.Popup></BasePreviewCard.Positioner></BasePreviewCard.Portal>;
}

export const Drawer = BaseDrawer.Root;
export const DrawerTrigger = BaseDrawer.Trigger;
export const DrawerClose = BaseDrawer.Close;
export const DrawerTitle = BaseDrawer.Title;
export const DrawerDescription = BaseDrawer.Description;
export function DrawerContent({ className = '', children, ...props }: React.ComponentProps<typeof BaseDrawer.Popup>) {
  return <BaseDrawer.Portal><BaseDrawer.Backdrop className="ps-overlay" /><BaseDrawer.Viewport className="ps-drawer__viewport"><BaseDrawer.Popup className={cx('ps-drawer', className)} {...props}><div className="ps-drawer__handle" aria-hidden="true" />{children}</BaseDrawer.Popup></BaseDrawer.Viewport></BaseDrawer.Portal>;
}

export const Sheet = BaseDialog.Root;
export const SheetTrigger = BaseDialog.Trigger;
export const SheetClose = BaseDialog.Close;
export const SheetTitle = BaseDialog.Title;
export const SheetDescription = BaseDialog.Description;
export function SheetContent({ className = '', children, side = 'right', ...props }: React.ComponentProps<typeof BaseDialog.Popup> & { side?: 'left' | 'right' }) {
  return <BaseDialog.Portal><BaseDialog.Backdrop className="ps-overlay" /><BaseDialog.Viewport className={cx('ps-sheet__viewport', `ps-sheet__viewport--${side}`)}><BaseDialog.Popup className={cx('ps-sheet', className)} {...props}><BaseDialog.Close className="ps-icon-button ps-sheet__close" aria-label="Close"><CloseIcon /></BaseDialog.Close>{children}</BaseDialog.Popup></BaseDialog.Viewport></BaseDialog.Portal>;
}

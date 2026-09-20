import * as React from 'react';
import { ContextMenu as BaseContextMenu } from '@base-ui/react/context-menu';
import { Menu as BaseMenu } from '@base-ui/react/menu';
import { Menubar as BaseMenubar } from '@base-ui/react/menubar';
import { Toolbar as BaseToolbar } from '@base-ui/react/toolbar';
import { CheckIcon, ChevronIcon, cx } from '../utils';

export const DropdownMenu = BaseMenu.Root;
export const DropdownMenuTrigger = BaseMenu.Trigger;
export const DropdownMenuGroup = BaseMenu.Group;
export const DropdownMenuRadioGroup = BaseMenu.RadioGroup;
export const DropdownMenuSub = BaseMenu.SubmenuRoot;
export function DropdownMenuContent({ className = '', sideOffset = 7, children, ...props }: React.ComponentProps<typeof BaseMenu.Popup> & { sideOffset?: number }) { return <BaseMenu.Portal><BaseMenu.Positioner sideOffset={sideOffset}><BaseMenu.Popup className={cx('ps-menu', className)} {...props}>{children}</BaseMenu.Popup></BaseMenu.Positioner></BaseMenu.Portal>; }
export function DropdownMenuItem({ className = '', ...props }: React.ComponentProps<typeof BaseMenu.Item>) { return <BaseMenu.Item className={cx('ps-menu__item', className)} {...props} />; }
export function DropdownMenuCheckboxItem({ className = '', children, ...props }: React.ComponentProps<typeof BaseMenu.CheckboxItem>) { return <BaseMenu.CheckboxItem className={cx('ps-menu__item ps-menu__item--choice', className)} {...props}><BaseMenu.CheckboxItemIndicator className="ps-menu__indicator"><CheckIcon /></BaseMenu.CheckboxItemIndicator>{children}</BaseMenu.CheckboxItem>; }
export function DropdownMenuRadioItem({ className = '', children, ...props }: React.ComponentProps<typeof BaseMenu.RadioItem>) { return <BaseMenu.RadioItem className={cx('ps-menu__item ps-menu__item--choice', className)} {...props}><BaseMenu.RadioItemIndicator className="ps-menu__indicator"><span /></BaseMenu.RadioItemIndicator>{children}</BaseMenu.RadioItem>; }
export function DropdownMenuLabel({ className = '', ...props }: React.ComponentProps<typeof BaseMenu.GroupLabel>) { return <BaseMenu.GroupLabel className={cx('ps-menu__label', className)} {...props} />; }
export function DropdownMenuSeparator({ className = '', ...props }: React.ComponentProps<typeof BaseMenu.Separator>) { return <BaseMenu.Separator className={cx('ps-menu__separator', className)} {...props} />; }
export function DropdownMenuSubTrigger({ className = '', children, ...props }: React.ComponentProps<typeof BaseMenu.SubmenuTrigger>) { return <BaseMenu.SubmenuTrigger className={cx('ps-menu__item', className)} {...props}>{children}<ChevronIcon className="ps-menu__chevron" /></BaseMenu.SubmenuTrigger>; }
export const DropdownMenuShortcut = ({ className = '', ...props }: React.ComponentPropsWithoutRef<'span'>) => <span className={cx('ps-menu__shortcut', className)} {...props} />;

export const ContextMenu = BaseContextMenu.Root;
export const ContextMenuTrigger = BaseContextMenu.Trigger;
export function ContextMenuContent({ className = '', children, ...props }: React.ComponentProps<typeof BaseContextMenu.Popup>) { return <BaseContextMenu.Portal><BaseContextMenu.Positioner><BaseContextMenu.Popup className={cx('ps-menu', className)} {...props}>{children}</BaseContextMenu.Popup></BaseContextMenu.Positioner></BaseContextMenu.Portal>; }
export function ContextMenuItem({ className = '', ...props }: React.ComponentProps<typeof BaseContextMenu.Item>) { return <BaseContextMenu.Item className={cx('ps-menu__item', className)} {...props} />; }

export function Menubar({ className = '', ...props }: React.ComponentProps<typeof BaseMenubar>) { return <BaseMenubar className={cx('ps-menubar', className)} {...props} />; }
export const MenubarMenu = BaseMenu.Root;
export function MenubarTrigger({ className = '', ...props }: React.ComponentProps<typeof BaseMenu.Trigger>) { return <BaseMenu.Trigger className={cx('ps-menubar__trigger', className)} {...props} />; }
export const MenubarContent = DropdownMenuContent;
export const MenubarItem = DropdownMenuItem;
export const MenubarSeparator = DropdownMenuSeparator;
export const MenubarShortcut = DropdownMenuShortcut;

export function Toolbar({ className = '', ...props }: React.ComponentProps<typeof BaseToolbar.Root>) { return <BaseToolbar.Root className={cx('ps-toolbar', className)} {...props} />; }
export function ToolbarGroup({ className = '', ...props }: React.ComponentProps<typeof BaseToolbar.Group>) { return <BaseToolbar.Group className={cx('ps-toolbar__group', className)} {...props} />; }
export function ToolbarButton({ className = '', ...props }: React.ComponentProps<typeof BaseToolbar.Button>) { return <BaseToolbar.Button className={cx('ps-toolbar__button', className)} {...props} />; }
export function ToolbarSeparator({ className = '', ...props }: React.ComponentProps<typeof BaseToolbar.Separator>) { return <BaseToolbar.Separator className={cx('ps-toolbar__separator', className)} {...props} />; }

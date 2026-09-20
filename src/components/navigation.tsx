import * as React from 'react';
import { NavigationMenu as BaseNavigationMenu } from '@base-ui/react/navigation-menu';
import { ChevronIcon, cx } from '../utils';

export function NavigationMenu({ className = '', ...props }: React.ComponentProps<typeof BaseNavigationMenu.Root>) { return <BaseNavigationMenu.Root className={cx('ps-navigation-menu', className)} {...props} />; }
export function NavigationMenuList({ className = '', ...props }: React.ComponentProps<typeof BaseNavigationMenu.List>) { return <BaseNavigationMenu.List className={cx('ps-navigation-menu__list', className)} {...props} />; }
export const NavigationMenuItem = BaseNavigationMenu.Item;
export function NavigationMenuTrigger({ className = '', children, ...props }: React.ComponentProps<typeof BaseNavigationMenu.Trigger>) { return <BaseNavigationMenu.Trigger className={cx('ps-navigation-menu__trigger', className)} {...props}>{children}<BaseNavigationMenu.Icon className="ps-navigation-menu__icon"><ChevronIcon /></BaseNavigationMenu.Icon></BaseNavigationMenu.Trigger>; }
export function NavigationMenuContent({ className = '', ...props }: React.ComponentProps<typeof BaseNavigationMenu.Content>) { return <BaseNavigationMenu.Content className={cx('ps-navigation-menu__content', className)} {...props} />; }
export function NavigationMenuLink({ className = '', ...props }: React.ComponentProps<typeof BaseNavigationMenu.Link>) { return <BaseNavigationMenu.Link className={cx('ps-navigation-menu__link', className)} {...props} />; }
export function NavigationMenuViewport({ className = '', ...props }: React.ComponentProps<typeof BaseNavigationMenu.Popup>) { return <BaseNavigationMenu.Portal><BaseNavigationMenu.Positioner sideOffset={8} className="ps-navigation-menu__positioner"><BaseNavigationMenu.Popup className={cx('ps-navigation-menu__popup', className)} {...props}><BaseNavigationMenu.Arrow className="ps-floating-arrow" /><BaseNavigationMenu.Viewport className="ps-navigation-menu__viewport" /></BaseNavigationMenu.Popup></BaseNavigationMenu.Positioner></BaseNavigationMenu.Portal>; }

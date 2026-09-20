import * as React from 'react';
import { Avatar as BaseAvatar } from '@base-ui/react/avatar';
import { ScrollArea as BaseScrollArea } from '@base-ui/react/scroll-area';
import { Separator as BaseSeparator } from '@base-ui/react/separator';
import { ChevronIcon, cx } from '../utils';

export function AspectRatio({ ratio = 16 / 9, className = '', style, ...props }: React.ComponentPropsWithoutRef<'div'> & { ratio?: number }) { return <div className={cx('ps-aspect-ratio', className)} style={{ ...style, aspectRatio: ratio }} {...props} />; }

export function Avatar({ className = '', name, src, ...props }: React.ComponentProps<typeof BaseAvatar.Root> & { name: string; src?: string }) {
  const initials = name.split(/\s+/).map((word) => word[0]).slice(0, 2).join('').toUpperCase();
  return <BaseAvatar.Root className={cx('ps-avatar', className)} aria-label={name} {...props}>{src && <BaseAvatar.Image className="ps-avatar__image" src={src} alt="" />}<BaseAvatar.Fallback className="ps-avatar__fallback">{initials}</BaseAvatar.Fallback></BaseAvatar.Root>;
}

export function Separator({ className = '', ...props }: React.ComponentProps<typeof BaseSeparator>) { return <BaseSeparator className={cx('ps-separator', className)} {...props} />; }
export const Skeleton = ({ className = '', ...props }: React.ComponentPropsWithoutRef<'div'>) => <div className={cx('ps-skeleton', className)} aria-hidden="true" {...props} />;
export const Spinner = ({ className = '', label = 'Loading', ...props }: React.ComponentPropsWithoutRef<'span'> & { label?: string }) => <span className={cx('ps-spinner', className)} role="status" aria-label={label} {...props} />;

export function Alert({ title, children, tone = 'info', className = '' }: { title: string; children: React.ReactNode; tone?: 'info' | 'success' | 'warning' | 'danger'; className?: string }) { return <div className={cx('ps-alert', `ps-alert--${tone}`, className)} role={tone === 'danger' ? 'alert' : 'status'}><span className="ps-alert__signal" aria-hidden="true" /><div><strong>{title}</strong><p>{children}</p></div></div>; }
export function EmptyState({ title, children, action, icon, className = '' }: { title: string; children: React.ReactNode; action?: React.ReactNode; icon?: React.ReactNode; className?: string }) { return <div className={cx('ps-empty', className)}>{icon && <div className="ps-empty__icon" aria-hidden="true">{icon}</div>}<h3>{title}</h3><p>{children}</p>{action && <div className="ps-empty__action">{action}</div>}</div>; }

export const Kbd = ({ className = '', ...props }: React.ComponentPropsWithoutRef<'kbd'>) => <kbd className={cx('ps-kbd', className)} {...props} />;
export const Code = ({ className = '', ...props }: React.ComponentPropsWithoutRef<'code'>) => <code className={cx('ps-code', className)} {...props} />;
export const Muted = ({ className = '', ...props }: React.ComponentPropsWithoutRef<'p'>) => <p className={cx('ps-muted', className)} {...props} />;
export const Lead = ({ className = '', ...props }: React.ComponentPropsWithoutRef<'p'>) => <p className={cx('ps-lead', className)} {...props} />;
export const Heading = ({ level = 2, className = '', ...props }: React.HTMLAttributes<HTMLHeadingElement> & { level?: 1 | 2 | 3 | 4 }) => React.createElement(`h${level}`, { className: cx(`ps-heading ps-heading--${level}`, className), ...props });

export const Breadcrumb = ({ className = '', ...props }: React.ComponentPropsWithoutRef<'nav'>) => <nav aria-label="Breadcrumb" className={cx('ps-breadcrumb', className)} {...props} />;
export const BreadcrumbList = ({ className = '', ...props }: React.ComponentPropsWithoutRef<'ol'>) => <ol className={cx('ps-breadcrumb__list', className)} {...props} />;
export const BreadcrumbItem = ({ className = '', ...props }: React.ComponentPropsWithoutRef<'li'>) => <li className={cx('ps-breadcrumb__item', className)} {...props} />;
export const BreadcrumbLink = ({ className = '', ...props }: React.ComponentPropsWithoutRef<'a'>) => <a className={cx('ps-breadcrumb__link', className)} {...props} />;
export const BreadcrumbPage = ({ className = '', ...props }: React.ComponentPropsWithoutRef<'span'>) => <span className={cx('ps-breadcrumb__page', className)} aria-current="page" {...props} />;
export const BreadcrumbSeparator = ({ className = '', children = <ChevronIcon />, ...props }: React.ComponentPropsWithoutRef<'li'>) => <li className={cx('ps-breadcrumb__separator', className)} aria-hidden="true" {...props}>{children}</li>;

export const Pagination = ({ className = '', ...props }: React.ComponentPropsWithoutRef<'nav'>) => <nav aria-label="Pagination" className={cx('ps-pagination', className)} {...props} />;
export const PaginationList = ({ className = '', ...props }: React.ComponentPropsWithoutRef<'ul'>) => <ul className={cx('ps-pagination__list', className)} {...props} />;
export const PaginationItem = ({ className = '', ...props }: React.ComponentPropsWithoutRef<'li'>) => <li className={cx('ps-pagination__item', className)} {...props} />;
export const PaginationLink = ({ active, className = '', ...props }: React.ComponentPropsWithoutRef<'a'> & { active?: boolean }) => <a className={cx('ps-pagination__link', active && 'is-active', className)} aria-current={active ? 'page' : undefined} {...props} />;
export const PaginationEllipsis = () => <span className="ps-pagination__ellipsis" aria-hidden="true">•••</span>;

export const Table = ({ className = '', ...props }: React.ComponentPropsWithoutRef<'table'>) => <div className="ps-table-wrap"><table className={cx('ps-table', className)} {...props} /></div>;
export const TableHeader = (props: React.ComponentPropsWithoutRef<'thead'>) => <thead {...props} />;
export const TableBody = (props: React.ComponentPropsWithoutRef<'tbody'>) => <tbody {...props} />;
export const TableFooter = (props: React.ComponentPropsWithoutRef<'tfoot'>) => <tfoot {...props} />;
export const TableRow = (props: React.ComponentPropsWithoutRef<'tr'>) => <tr {...props} />;
export const TableHead = (props: React.ComponentPropsWithoutRef<'th'>) => <th {...props} />;
export const TableCell = (props: React.ComponentPropsWithoutRef<'td'>) => <td {...props} />;
export const TableCaption = (props: React.ComponentPropsWithoutRef<'caption'>) => <caption {...props} />;

export function ScrollArea({ className = '', children, ...props }: React.ComponentProps<typeof BaseScrollArea.Root>) { return <BaseScrollArea.Root className={cx('ps-scroll-area', className)} {...props}><BaseScrollArea.Viewport className="ps-scroll-area__viewport"><BaseScrollArea.Content>{children}</BaseScrollArea.Content></BaseScrollArea.Viewport><BaseScrollArea.Scrollbar className="ps-scroll-area__scrollbar"><BaseScrollArea.Thumb className="ps-scroll-area__thumb" /></BaseScrollArea.Scrollbar><BaseScrollArea.Corner /></BaseScrollArea.Root>; }

export const Item = ({ className = '', ...props }: React.ComponentPropsWithoutRef<'div'>) => <div className={cx('ps-item', className)} {...props} />;
export const ItemMedia = ({ className = '', ...props }: React.ComponentPropsWithoutRef<'div'>) => <div className={cx('ps-item__media', className)} {...props} />;
export const ItemContent = ({ className = '', ...props }: React.ComponentPropsWithoutRef<'div'>) => <div className={cx('ps-item__content', className)} {...props} />;
export const ItemTitle = ({ className = '', ...props }: React.ComponentPropsWithoutRef<'h3'>) => <h3 className={cx('ps-item__title', className)} {...props} />;
export const ItemDescription = ({ className = '', ...props }: React.ComponentPropsWithoutRef<'p'>) => <p className={cx('ps-item__description', className)} {...props} />;
export const ItemActions = ({ className = '', ...props }: React.ComponentPropsWithoutRef<'div'>) => <div className={cx('ps-item__actions', className)} {...props} />;

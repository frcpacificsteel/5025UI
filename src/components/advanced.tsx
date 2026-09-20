import * as React from 'react';
import { IconChevronLeft, IconChevronRight, IconMenu2 } from '@tabler/icons-react';
import { Button } from './button';
import { Popover, PopoverContent, PopoverTrigger } from './overlays';
import { ChevronIcon, CloseIcon, cx } from '../utils';

const sameDay = (a: Date, b: Date) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
const monthLabel = new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' });
const dateLabel = new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric' });

export function Calendar({ value, defaultValue, onValueChange, className = '' }: { value?: Date; defaultValue?: Date; onValueChange?: (date: Date) => void; className?: string }) {
  const [internal, setInternal] = React.useState(defaultValue);
  const selected = value ?? internal;
  const [view, setView] = React.useState(() => selected ? new Date(selected.getFullYear(), selected.getMonth(), 1) : new Date(new Date().getFullYear(), new Date().getMonth(), 1));
  const firstOffset = new Date(view.getFullYear(), view.getMonth(), 1).getDay();
  const days = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const previousDays = new Date(view.getFullYear(), view.getMonth(), 0).getDate();
  const cells = Array.from({ length: 42 }, (_, index) => {
    const day = index - firstOffset + 1;
    return day < 1 ? new Date(view.getFullYear(), view.getMonth() - 1, previousDays + day) : day > days ? new Date(view.getFullYear(), view.getMonth() + 1, day - days) : new Date(view.getFullYear(), view.getMonth(), day);
  });
  const choose = (date: Date) => { setInternal(date); onValueChange?.(date); if (date.getMonth() !== view.getMonth()) setView(new Date(date.getFullYear(), date.getMonth(), 1)); };
  return <div className={cx('ps-calendar', className)}><div className="ps-calendar__header"><button type="button" aria-label="Previous month" onClick={() => setView(new Date(view.getFullYear(), view.getMonth() - 1, 1))}><IconChevronLeft /></button><strong aria-live="polite">{monthLabel.format(view)}</strong><button type="button" aria-label="Next month" onClick={() => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1))}><IconChevronRight /></button></div><div className="ps-calendar__grid">{['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => <span className="ps-calendar__weekday" key={day}>{day}</span>)}{cells.map((date) => <button type="button" key={date.toISOString()} className={cx(date.getMonth() !== view.getMonth() && 'is-outside', selected && sameDay(date, selected) && 'is-selected', sameDay(date, new Date()) && 'is-today')} aria-pressed={selected ? sameDay(date, selected) : false} onClick={() => choose(date)}>{date.getDate()}</button>)}</div></div>;
}

export function DatePicker({ value, onValueChange, placeholder = 'Choose date' }: { value?: Date; onValueChange?: (date: Date) => void; placeholder?: string }) {
  const [open, setOpen] = React.useState(false);
  return <Popover open={open} onOpenChange={setOpen}><PopoverTrigger render={<Button variant="outline" className="ps-date-picker" />}>{value ? dateLabel.format(value) : placeholder}<ChevronIcon /></PopoverTrigger><PopoverContent><Calendar value={value} onValueChange={(date) => { onValueChange?.(date); setOpen(false); }} /></PopoverContent></Popover>;
}

export function Carousel({ children, className = '', label = 'Carousel' }: { children: React.ReactNode; className?: string; label?: string }) {
  const viewport = React.useRef<HTMLDivElement>(null);
  const move = (direction: number) => viewport.current?.scrollBy({ left: direction * viewport.current.clientWidth * 0.86, behavior: 'smooth' });
  return <section className={cx('ps-carousel', className)} aria-label={label}><div className="ps-carousel__viewport" ref={viewport}><div className="ps-carousel__track">{React.Children.map(children, (child) => <div className="ps-carousel__slide">{child}</div>)}</div></div><div className="ps-carousel__controls"><button type="button" onClick={() => move(-1)} aria-label="Previous slide"><IconChevronLeft /></button><button type="button" onClick={() => move(1)} aria-label="Next slide"><IconChevronRight /></button></div></section>;
}

export type DataTableColumn<Row> = { key: keyof Row | string; header: React.ReactNode; cell?: (row: Row) => React.ReactNode; align?: 'left' | 'right' };
export function DataTable<Row extends { id?: React.Key }>({ columns, rows, caption, empty = 'No results.' }: { columns: Array<DataTableColumn<Row>>; rows: Row[]; caption?: string; empty?: string }) {
  return <div className="ps-table-wrap"><table className="ps-table ps-data-table">{caption && <caption>{caption}</caption>}<thead><tr>{columns.map((column) => <th key={String(column.key)} style={{ textAlign: column.align }}>{column.header}</th>)}</tr></thead><tbody>{rows.length ? rows.map((row, rowIndex) => <tr key={row.id ?? rowIndex}>{columns.map((column) => <td key={String(column.key)} style={{ textAlign: column.align }}>{column.cell ? column.cell(row) : String((row as Record<string, unknown>)[String(column.key)] ?? '')}</td>)}</tr>) : <tr><td colSpan={columns.length} className="ps-data-table__empty">{empty}</td></tr>}</tbody></table></div>;
}

export function ResizablePanels({ first, second, defaultSplit = 44, min = 24, className = '' }: { first: React.ReactNode; second: React.ReactNode; defaultSplit?: number; min?: number; className?: string }) {
  const [split, setSplit] = React.useState(defaultSplit);
  const root = React.useRef<HTMLDivElement>(null);
  const start = (event: React.PointerEvent) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    const move = (next: PointerEvent) => { const rect = root.current?.getBoundingClientRect(); if (!rect) return; setSplit(Math.max(min, Math.min(100 - min, ((next.clientX - rect.left) / rect.width) * 100))); };
    const stop = () => { window.removeEventListener('pointermove', move); window.removeEventListener('pointerup', stop); };
    window.addEventListener('pointermove', move); window.addEventListener('pointerup', stop);
  };
  const nudge = (amount: number) => setSplit((current) => Math.max(min, Math.min(100 - min, current + amount)));
  return <div ref={root} className={cx('ps-resizable', className)}><div style={{ flexBasis: `${split}%` }}>{first}</div><div className="ps-resizable__handle" role="separator" aria-orientation="vertical" aria-valuemin={min} aria-valuemax={100 - min} aria-valuenow={Math.round(split)} tabIndex={0} onPointerDown={start} onKeyDown={(event) => { if (event.key === 'ArrowLeft') nudge(-2); if (event.key === 'ArrowRight') nudge(2); }}><span /></div><div style={{ flexBasis: `${100 - split}%` }}>{second}</div></div>;
}

export const ChartContainer = ({ className = '', ...props }: React.ComponentPropsWithoutRef<'div'>) => <div className={cx('ps-chart', className)} {...props} />;
export const ChartLegend = ({ className = '', ...props }: React.ComponentPropsWithoutRef<'ul'>) => <ul className={cx('ps-chart__legend', className)} {...props} />;
export const ChartLegendItem = ({ color, className = '', style, ...props }: React.ComponentPropsWithoutRef<'li'> & { color: string }) => <li className={cx('ps-chart__legend-item', className)} style={{ ...style, '--ps-chart-series': color } as React.CSSProperties} {...props} />;

type ToastTone = 'default' | 'success' | 'danger';
type ToastRecord = { id: number; title: string; description?: string; tone?: ToastTone };
type ToastContextValue = { toast: (toast: Omit<ToastRecord, 'id'>) => void };
const ToastContext = React.createContext<ToastContextValue | null>(null);
export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastRecord[]>([]);
  const sequence = React.useRef(0);
  const remove = React.useCallback((id: number) => setToasts((current) => current.filter((item) => item.id !== id)), []);
  const toast = React.useCallback((next: Omit<ToastRecord, 'id'>) => { const id = ++sequence.current; setToasts((current) => [...current, { ...next, id }]); window.setTimeout(() => remove(id), 5000); }, [remove]);
  return <ToastContext.Provider value={{ toast }}>{children}<div className="ps-toaster" role="region" aria-label="Notifications">{toasts.map((item) => <div className={cx('ps-toast', `ps-toast--${item.tone ?? 'default'}`)} role="status" key={item.id}><div><strong>{item.title}</strong>{item.description && <p>{item.description}</p>}</div><button type="button" onClick={() => remove(item.id)} aria-label="Dismiss"><CloseIcon /></button></div>)}</div></ToastContext.Provider>;
}
export function useToast() { const value = React.useContext(ToastContext); if (!value) throw new Error('useToast must be used inside ToastProvider'); return value; }

type SidebarContextValue = { open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> };
const SidebarContext = React.createContext<SidebarContextValue | null>(null);
export function SidebarProvider({ defaultOpen = true, children }: { defaultOpen?: boolean; children: React.ReactNode }) { const [open, setOpen] = React.useState(defaultOpen); return <SidebarContext.Provider value={{ open, setOpen }}><div className={cx('ps-sidebar-layout', !open && 'is-collapsed')}>{children}</div></SidebarContext.Provider>; }
export function Sidebar({ className = '', ...props }: React.ComponentPropsWithoutRef<'aside'>) { return <aside className={cx('ps-sidebar', className)} {...props} />; }
export const SidebarHeader = ({ className = '', ...props }: React.ComponentPropsWithoutRef<'div'>) => <div className={cx('ps-sidebar__header', className)} {...props} />;
export const SidebarContent = ({ className = '', ...props }: React.ComponentPropsWithoutRef<'div'>) => <div className={cx('ps-sidebar__content', className)} {...props} />;
export const SidebarFooter = ({ className = '', ...props }: React.ComponentPropsWithoutRef<'div'>) => <div className={cx('ps-sidebar__footer', className)} {...props} />;
export const SidebarGroup = ({ className = '', ...props }: React.ComponentPropsWithoutRef<'section'>) => <section className={cx('ps-sidebar__group', className)} {...props} />;
export const SidebarGroupLabel = ({ className = '', ...props }: React.ComponentPropsWithoutRef<'h3'>) => <h3 className={cx('ps-sidebar__label', className)} {...props} />;
export const SidebarMenu = ({ className = '', ...props }: React.ComponentPropsWithoutRef<'ul'>) => <ul className={cx('ps-sidebar__menu', className)} {...props} />;
export const SidebarMenuItem = ({ className = '', ...props }: React.ComponentPropsWithoutRef<'li'>) => <li className={cx('ps-sidebar__menu-item', className)} {...props} />;
export const SidebarMenuButton = ({ active, className = '', ...props }: React.ComponentPropsWithoutRef<'button'> & { active?: boolean }) => <button className={cx('ps-sidebar__menu-button', active && 'is-active', className)} {...props} />;
export function SidebarTrigger({ className = '', ...props }: React.ComponentPropsWithoutRef<'button'>) { const context = React.useContext(SidebarContext); if (!context) throw new Error('SidebarTrigger must be used inside SidebarProvider'); return <button type="button" className={cx('ps-sidebar__trigger', className)} aria-label="Toggle sidebar" onClick={() => context.setOpen((open) => !open)} {...props}><IconMenu2 /></button>; }
export const SidebarInset = ({ className = '', ...props }: React.ComponentPropsWithoutRef<'main'>) => <main className={cx('ps-sidebar__inset', className)} {...props} />;

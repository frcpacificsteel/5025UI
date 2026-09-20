import * as React from 'react';
import { Combobox as BaseCombobox } from '@base-ui/react/combobox';
import { Select as BaseSelect } from '@base-ui/react/select';
import { CheckIcon, ChevronIcon, CloseIcon, SearchIcon, cx } from '../utils';

export const Select = BaseSelect.Root;
export function SelectTrigger({ className = '', children, ...props }: React.ComponentProps<typeof BaseSelect.Trigger>) { return <BaseSelect.Trigger className={cx('ps-select__trigger', className)} {...props}>{children}<BaseSelect.Icon className="ps-select__icon"><ChevronIcon /></BaseSelect.Icon></BaseSelect.Trigger>; }
export function SelectValue({ className = '', ...props }: React.ComponentProps<typeof BaseSelect.Value>) { return <BaseSelect.Value className={cx('ps-select__value', className)} {...props} />; }
export function SelectContent({ className = '', sideOffset = 7, children, ...props }: React.ComponentProps<typeof BaseSelect.Popup> & { sideOffset?: number }) { return <BaseSelect.Portal><BaseSelect.Positioner sideOffset={sideOffset}><BaseSelect.Popup className={cx('ps-select__popup', className)} {...props}><BaseSelect.List>{children}</BaseSelect.List></BaseSelect.Popup></BaseSelect.Positioner></BaseSelect.Portal>; }
export function SelectItem({ className = '', children, ...props }: React.ComponentProps<typeof BaseSelect.Item>) { return <BaseSelect.Item className={cx('ps-select__item', className)} {...props}><BaseSelect.ItemIndicator className="ps-select__indicator"><CheckIcon /></BaseSelect.ItemIndicator><BaseSelect.ItemText>{children}</BaseSelect.ItemText></BaseSelect.Item>; }
export function SelectGroup({ className = '', ...props }: React.ComponentProps<typeof BaseSelect.Group>) { return <BaseSelect.Group className={cx('ps-select__group', className)} {...props} />; }
export function SelectLabel({ className = '', ...props }: React.ComponentProps<typeof BaseSelect.GroupLabel>) { return <BaseSelect.GroupLabel className={cx('ps-select__label', className)} {...props} />; }
export function SelectSeparator({ className = '', ...props }: React.ComponentProps<typeof BaseSelect.Separator>) { return <BaseSelect.Separator className={cx('ps-select__separator', className)} {...props} />; }

export const Combobox = BaseCombobox.Root;
export function ComboboxInput({ className = '', ...props }: React.ComponentProps<typeof BaseCombobox.Input>) { return <BaseCombobox.InputGroup className="ps-combobox__input-group"><SearchIcon className="ps-combobox__search" /><BaseCombobox.Input className={cx('ps-combobox__input', className)} {...props} /><BaseCombobox.Clear className="ps-combobox__clear" aria-label="Clear"><CloseIcon /></BaseCombobox.Clear><BaseCombobox.Trigger className="ps-combobox__trigger" aria-label="Show options"><ChevronIcon /></BaseCombobox.Trigger></BaseCombobox.InputGroup>; }
export function ComboboxContent({ className = '', sideOffset = 7, children, ...props }: React.ComponentProps<typeof BaseCombobox.Popup> & { sideOffset?: number }) { return <BaseCombobox.Portal><BaseCombobox.Positioner sideOffset={sideOffset}><BaseCombobox.Popup className={cx('ps-combobox__popup', className)} {...props}><BaseCombobox.Empty className="ps-combobox__empty">No matches.</BaseCombobox.Empty><BaseCombobox.List>{children}</BaseCombobox.List></BaseCombobox.Popup></BaseCombobox.Positioner></BaseCombobox.Portal>; }
export function ComboboxItem({ className = '', children, ...props }: React.ComponentProps<typeof BaseCombobox.Item>) { return <BaseCombobox.Item className={cx('ps-combobox__item', className)} {...props}><BaseCombobox.ItemIndicator className="ps-combobox__indicator"><CheckIcon /></BaseCombobox.ItemIndicator>{children}</BaseCombobox.Item>; }
export function ComboboxGroup({ className = '', ...props }: React.ComponentProps<typeof BaseCombobox.Group>) { return <BaseCombobox.Group className={cx('ps-combobox__group', className)} {...props} />; }
export function ComboboxLabel({ className = '', ...props }: React.ComponentProps<typeof BaseCombobox.GroupLabel>) { return <BaseCombobox.GroupLabel className={cx('ps-combobox__label', className)} {...props} />; }

export type CommandItem = { value: string; label: string; keywords?: string; group?: string };
export function Command({ items, onSelect, placeholder = 'Search commands…', empty = 'No commands found.', className = '' }: { items: CommandItem[]; onSelect?: (value: string) => void; placeholder?: string; empty?: string; className?: string }) {
  const [query, setQuery] = React.useState('');
  const filtered = items.filter((item) => `${item.label} ${item.keywords ?? ''}`.toLowerCase().includes(query.toLowerCase()));
  return <div className={cx('ps-command', className)}><div className="ps-command__search"><SearchIcon /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={placeholder} aria-label={placeholder} /></div><div className="ps-command__list" role="listbox">{filtered.length ? filtered.map((item) => <button type="button" role="option" aria-selected="false" key={item.value} onClick={() => onSelect?.(item.value)}><span>{item.label}</span>{item.group && <small>{item.group}</small>}</button>) : <p>{empty}</p>}</div></div>;
}

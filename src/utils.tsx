import * as React from 'react';
import { IconCheck, IconChevronDown, IconSearch, IconX } from '@tabler/icons-react';

type StaticClass = string | false | null | undefined;
type StateClass<State> = (state: State) => string | undefined;

/** Merges static classes and Base UI state-driven class callbacks. */
export function cx(...values: StaticClass[]): string;
export function cx<State>(...values: Array<StaticClass | StateClass<State>>): string | StateClass<State>;
export function cx(...values: Array<StaticClass | StateClass<any>>): string | StateClass<any> {
  if (values.some((value) => typeof value === 'function')) {
    return (state: any) => values.map((value) => typeof value === 'function' ? value(state) : value).filter(Boolean).join(' ');
  }
  return values.filter(Boolean).join(' ');
}

export function CheckIcon({ className = '' }: { className?: string }) {
  return <IconCheck className={className} aria-hidden="true" />;
}

export function ChevronIcon({ className = '' }: { className?: string }) {
  return <IconChevronDown className={className} aria-hidden="true" />;
}

export function CloseIcon({ className = '' }: { className?: string }) {
  return <IconX className={className} aria-hidden="true" />;
}

export function SearchIcon({ className = '' }: { className?: string }) {
  return <IconSearch className={className} aria-hidden="true" />;
}

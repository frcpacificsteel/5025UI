import * as React from 'react';
import { Accordion as BaseAccordion } from '@base-ui/react/accordion';
import { Collapsible as BaseCollapsible } from '@base-ui/react/collapsible';
import { Tabs as BaseTabs } from '@base-ui/react/tabs';
import { ChevronIcon, cx } from '../utils';

export const Accordion = BaseAccordion.Root;
export function AccordionItem({ className = '', ...props }: React.ComponentProps<typeof BaseAccordion.Item>) { return <BaseAccordion.Item className={cx('ps-accordion__item', className)} {...props} />; }
export function AccordionTrigger({ className = '', children, ...props }: React.ComponentProps<typeof BaseAccordion.Trigger>) { return <BaseAccordion.Header className="ps-accordion__header"><BaseAccordion.Trigger className={cx('ps-accordion__trigger', className)} {...props}><span>{children}</span><ChevronIcon className="ps-accordion__chevron" /></BaseAccordion.Trigger></BaseAccordion.Header>; }
export function AccordionContent({ className = '', ...props }: React.ComponentProps<typeof BaseAccordion.Panel>) { return <BaseAccordion.Panel className={cx('ps-accordion__panel', className)} {...props} />; }

export const Collapsible = BaseCollapsible.Root;
export function CollapsibleTrigger({ className = '', ...props }: React.ComponentProps<typeof BaseCollapsible.Trigger>) { return <BaseCollapsible.Trigger className={cx('ps-collapsible__trigger', className)} {...props} />; }
export function CollapsibleContent({ className = '', ...props }: React.ComponentProps<typeof BaseCollapsible.Panel>) { return <BaseCollapsible.Panel className={cx('ps-collapsible__panel', className)} {...props} />; }

export const Tabs = BaseTabs.Root;
export function TabsList({ className = '', children, ...props }: React.ComponentProps<typeof BaseTabs.List>) { return <BaseTabs.List className={cx('ps-tabs__list', className)} {...props}>{children}<BaseTabs.Indicator className="ps-tabs__indicator" /></BaseTabs.List>; }
export function TabsTrigger({ className = '', ...props }: React.ComponentProps<typeof BaseTabs.Tab>) { return <BaseTabs.Tab className={cx('ps-tabs__trigger', className)} {...props} />; }
export function TabsContent({ className = '', ...props }: React.ComponentProps<typeof BaseTabs.Panel>) { return <BaseTabs.Panel className={cx('ps-tabs__panel', className)} {...props} />; }

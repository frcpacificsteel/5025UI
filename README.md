# 5025UI

Pacific Steel 5025's React component system for scouting, field operations, outreach, dashboards, and team tools. It pairs accessible [Base UI](https://base-ui.com/) behavior with the typography, motion, color, and surface language of the 5025 Wiki.

## Install

```bash
npm install @pacific-steel-5025/ui @base-ui/react react react-dom tailwindcss
```

Import the component styles once in a Next.js root layout or global stylesheet.

```tsx
// app/layout.tsx
import '@pacific-steel-5025/ui/styles.css';
```

For the matching Tailwind v4 utilities, add the token entry to your global CSS.

```css
@import "tailwindcss";
@import "@pacific-steel-5025/ui/tailwind.css";
```

The package includes Encode Sans and Encode Sans Semi Expanded, so applications do not need a separate font loader.

## Use

```tsx
'use client';

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@pacific-steel-5025/ui';

export function ScoutReport() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Scout report</CardTitle>
        <CardDescription>Match 42 · Blue 1</CardDescription>
      </CardHeader>
      <CardContent>
        <Dialog>
          <DialogTrigger render={<Button />}>Open report</DialogTrigger>
          <DialogContent>
            <DialogTitle>Ready to submit?</DialogTitle>
            <DialogDescription>The scouting lead will receive this immediately.</DialogDescription>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
```

Interactive components that use state or browser APIs belong below a Next.js `"use client"` boundary. Static components such as cards, badges, tables, typography, alerts, and layout primitives can render in server components.

## Component families

- Foundations: typography, badge, avatar, separator, skeleton, spinner, aspect ratio, loader
- Actions: button, button group, toggle, toggle group, toolbar
- Forms: input, textarea, native select, select, combobox, checkbox, switch, radio group, slider, number field, OTP field, input group, field helpers, date picker, calendar
- Navigation: breadcrumb, tabs, pagination, menubar, navigation menu, sidebar
- Data display: card, table, data table, item, scroll area, progress, meter, chart container, empty state
- Disclosure: accordion and collapsible
- Overlays: dialog, alert dialog, popover, tooltip, hover card, dropdown menu, context menu, drawer, sheet, toast
- Composition: command menu, carousel, resizable panels

## Theme variables

Every meaningful visual decision resolves through `--ps-*` custom properties. Override semantic properties at an application root instead of editing component CSS.

```css
.competition-app {
  --ps-canvas: #f5f7f8;
  --ps-surface: #ffffff;
  --ps-primary: #013a5b;
  --ps-focus: #0283c2;
  --ps-radius-sm: 0.25rem;
  --ps-duration: 180ms;
}
```

Add `.dark` or `data-theme="dark"` to an ancestor to use the built-in dark semantic palette. Reduced-motion preferences are respected automatically.

## Local development

```bash
npm install
npm run preview
```

The preview at `http://localhost:5173` is the canonical visual inventory. It showcases every component family and includes the exact wiki logo-shine loader.

```bash
npm run typecheck
npm run build
npm run preview:build
```

---
name: Pacific Steel 5025 UI
description: A quiet, systems-first React interface foundation for the team.
colors:
  steel: "#013A5B"
  pacific: "#0283C2"
  red: "#C90109"
  gold: "#F8AD15"
  ink: "#17232C"
  muted: "#5E6D77"
  canvas: "#FFFFFF"
  surface: "#F8F9FA"
  line: "#E5E9EC"
  success: "#2F6B45"
  warning: "#8A5B00"
typography:
  heading:
    fontFamily: "Encode Sans Semi Expanded, Encode Sans, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: 1.16
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Encode Sans, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "-0.006em"
  label:
    fontFamily: "Encode Sans, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0"
rounded:
  sm: "4px"
  md: "6px"
  lg: "10px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.steel}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "10px 16px"
    height: "40px"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.steel}"
    rounded: "{rounded.md}"
    padding: "10px 16px"
    height: "40px"
  input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "9px 12px"
    height: "40px"
  card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: Pacific Steel 5025 UI

## Overview

**Creative North Star: "The Living Engineering Manual"**

5025UI turns the wiki's calm engineering workspace into reusable React infrastructure. It is flat, legible, and disciplined: quiet enough to disappear during real work, specific enough that every team product is recognizably related.

This is a product system, not a marketing kit. Familiar affordances, predictable state behavior, and clear hierarchy take priority over decorative novelty. Visual interest comes from technical content, precise typography, useful density, and earned uses of the team palette.

**Key Characteristics:**

- Quiet, task-first hierarchy
- One technical humanist type family
- Restrained Pacific Steel identity
- Flat surfaces separated by tone and fine rules
- Magnetic motion used only for state feedback
- Complete, accessible interaction states

## Colors

The palette uses neutral working surfaces with team colors assigned to specific jobs.

### Primary

- **Pacific Steel Blue** (`steel`): primary actions, active navigation, focus emphasis, and high-value headings.
- **Pacific Blue** (`pacific`): links, secondary interaction feedback, and informational state.

### Secondary

- **Safety Red** (`red`): destructive actions and errors only.
- **Signal Gold** (`gold`): warnings and exceptional team emphasis; never a generic decoration.

### Neutral

- **Engineering Ink** (`ink`): primary text.
- **Service Gray** (`muted`): secondary text that still meets contrast requirements.
- **Canvas** (`canvas`): primary working surface.
- **Sidebar Surface** (`surface`): secondary navigation and grouped-control surface.
- **Fine Rule** (`line`): borders and dividers.

**The Earned Color Rule.** Team colors identify interaction, maintenance, status, or danger. They never fill large areas merely to look branded.

**The Semantic State Rule.** Status always combines text or iconography with color; color alone never carries meaning.

## Typography

**Display Font:** Encode Sans Semi Expanded, with Encode Sans and system-ui fallback.

**Body Font:** Encode Sans, with system-ui fallback.

**Label/Mono Font:** Encode Sans for labels; ui-monospace, SFMono-Regular, and Consolas for code and key hints.

**Character:** One technical humanist family creates continuity. Width, weight, size, and spacing establish hierarchy without introducing an unrelated serif or display face.

### Hierarchy

- **Display** (600, 2.25rem, 1.16): documentation and showcase titles only.
- **Headline** (600, 1.5rem, 1.25): major product sections and modal titles.
- **Title** (600, 1rem, 1.35): component and panel titles.
- **Body** (400, 0.875rem, 1.6): interface copy with prose capped near 70 characters.
- **Label** (600, 0.8125rem, normal tracking): controls, metadata, and compact navigation.

**The One-Family Rule.** Serif typography is prohibited. Hierarchy must come from the Encode family's width and weight range.

## Elevation

The system is flat by default. Canvas, secondary surfaces, whitespace, and one-pixel rules establish structure. Shadows are reserved for temporary overlays—menus, popovers, command palettes, tooltips, and dialogs—where separation from the current task is functional.

**The Flat Workspace Rule.** If a permanent surface needs a shadow to feel organized, its hierarchy is unfinished.

## Components

### Buttons

- **Shape:** compact engineering radius (6px), minimum 40px default height.
- **Primary:** Steel background with white text; reserved for the dominant action in a region.
- **Hover / Focus:** tonal shift plus a high-contrast focus ring; no decorative lift.
- **Secondary / Ghost:** borders or tonal surfaces, never competing with the primary action.
- **States:** loading preserves width; disabled remains legible; destructive uses Safety Red.

### Chips

- **Style:** pill shape only because the component is compact; muted semantic surfaces with readable text.
- **State:** selected and removable variants include non-color cues.

### Cards / Containers

- **Corner Style:** restrained 10px maximum.
- **Background:** Canvas or Sidebar Surface.
- **Shadow Strategy:** none at rest.
- **Border:** one-pixel Fine Rule when grouping is necessary.
- **Internal Padding:** 16px compact, 24px default, 32px spacious.

### Inputs / Fields

- **Style:** Canvas background, Fine Rule stroke, 6px radius, clear labels and descriptions.
- **Focus:** Pacific Blue ring and Steel border.
- **Error / Disabled:** semantic text accompanies color; disabled controls preserve readable values.

### Navigation

Navigation uses the body family at medium weight, quiet neutral default states, and Steel for the current destination. Sidebars use the secondary surface; mobile navigation collapses structurally rather than shrinking typography.

### Loader

The loader exactly follows the wiki mark treatment: 62px grayscale logo, magnetic entrance, masked white shine, quiet fade, and a reduced-motion static state. It is reserved for true application initialization, not routine content loading; skeletons handle content latency.

## Do's and Don'ts

### Do:

- **Do** expose every reusable visual decision through semantic `--ps-*` CSS variables.
- **Do** implement default, hover, focus-visible, active, selected, disabled, loading, error, and success states.
- **Do** keep headings in Encode Sans Semi Expanded and all UI copy in Encode Sans.
- **Do** use the wiki's magnetic easing only when motion communicates state.
- **Do** keep permanent surfaces flat and separate them with spacing, tone, and one-pixel rules.

### Don't:

- **Don't** resemble a SaaS dashboard, marketing landing page, generic AI-generated interface, disconnected shadcn copy, or season-specific robot UI.
- **Don't** use repetitive card grids, oversized promotional heroes, decorative gradients, glass effects, excessive rounding, vague copy, or gratuitous robotics imagery.
- **Don't** introduce serif typography, mixed icon styles, decorative shadows, or color-only status.
- **Don't** animate every component or make users wait for choreography.
- **Don't** ship native stand-ins where the package promises a composed, accessible component.

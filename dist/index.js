// src/components/button.tsx
import * as React from "react";
import { Button as BaseButton } from "@base-ui/react/button";
import { jsx } from "react/jsx-runtime";
var Button = React.forwardRef(function Button2({ className = "", variant = "primary", size = "md", ...props }, ref) {
  return /* @__PURE__ */ jsx(BaseButton, { ref, className: `ps-button ps-button--${variant} ps-button--${size} ${className}`, ...props });
});

// src/components/input.tsx
import * as React2 from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var Input = React2.forwardRef(function Input2({ className = "", ...props }, ref) {
  return /* @__PURE__ */ jsx2("input", { ref, className: `ps-input ${className}`, ...props });
});

// src/components/badge.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
function Badge({ className = "", tone = "blue", ...props }) {
  return /* @__PURE__ */ jsx3("span", { className: `ps-badge ps-badge--${tone} ${className}`, ...props });
}

// src/components/card.tsx
import * as React3 from "react";
var part = (name, tag = "div") => ({ className = "", ...props }) => React3.createElement(tag, { className: `${name} ${className}`, ...props });
var Card = part("ps-card");
var CardHeader = part("ps-card__header");
var CardTitle = part("ps-card__title", "h3");
var CardDescription = part("ps-card__description", "p");
var CardContent = part("ps-card__content");
var CardFooter = part("ps-card__footer");

// src/components/dialog.tsx
import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { jsx as jsx4, jsxs } from "react/jsx-runtime";
var Dialog = BaseDialog.Root;
var DialogTrigger = BaseDialog.Trigger;
var DialogTitle = BaseDialog.Title;
var DialogDescription = BaseDialog.Description;
var DialogClose = BaseDialog.Close;
function DialogContent({ className = "", children, ...props }) {
  return /* @__PURE__ */ jsxs(BaseDialog.Portal, { children: [
    /* @__PURE__ */ jsx4(BaseDialog.Backdrop, { className: "ps-overlay" }),
    /* @__PURE__ */ jsx4(BaseDialog.Viewport, { className: "ps-overlay__viewport", children: /* @__PURE__ */ jsx4(BaseDialog.Popup, { className: `ps-dialog ${className}`, ...props, children }) })
  ] });
}

// src/components/loader.tsx
import * as React4 from "react";
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
function Loader({ markSrc, label = "Loading the Pacific Steel 5025 Wiki", open, duration, onComplete }) {
  const controlled = open !== void 0;
  const [phase, setPhase] = React4.useState(open === false ? "hidden" : "visible");
  React4.useEffect(() => {
    const root = document.documentElement;
    let timer;
    let revealTimer;
    let removeTimer;
    let revealCleanupTimer;
    let loadHandler;
    const reveal = () => {
      setPhase("leaving");
      revealTimer = window.setTimeout(() => {
        root.classList.remove("ps-initial-loading");
        root.classList.add("ps-initial-reveal");
        window.dispatchEvent(new CustomEvent("ps-loader-complete"));
        window.dispatchEvent(new CustomEvent("wiki-loader-complete"));
        onComplete?.();
        revealCleanupTimer = window.setTimeout(() => root.classList.remove("ps-initial-reveal"), 1200);
      }, 260);
      removeTimer = window.setTimeout(() => setPhase("hidden"), 420);
    };
    if (controlled) {
      if (open) {
        root.classList.add("ps-initial-loading");
        setPhase("visible");
      } else if (phase !== "hidden") {
        reveal();
      }
    } else {
      root.classList.add("ps-initial-loading");
      const finish = () => {
        const delay = duration ?? 1750 + Math.random() * 830;
        timer = window.setTimeout(reveal, delay);
      };
      loadHandler = finish;
      if (document.readyState === "complete") finish();
      else window.addEventListener("load", finish, { once: true });
    }
    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(revealTimer);
      window.clearTimeout(removeTimer);
      window.clearTimeout(revealCleanupTimer);
      if (loadHandler) window.removeEventListener("load", loadHandler);
      root.classList.remove("ps-initial-loading", "ps-initial-reveal");
    };
  }, [controlled, duration, onComplete, open]);
  if (phase === "hidden") return null;
  const leaving = phase === "leaving";
  return /* @__PURE__ */ jsxs2("div", { className: `ps-loader${leaving ? " is-leaving" : ""}`, role: "status", "aria-live": "polite", children: [
    /* @__PURE__ */ jsxs2("span", { className: "ps-loader__mark-shell", "aria-hidden": "true", children: [
      /* @__PURE__ */ jsx5("img", { className: "ps-loader__mark", src: markSrc, alt: "" }),
      /* @__PURE__ */ jsx5("span", { className: "ps-loader__shine", style: { "--ps-loader-mark": `url("${markSrc}")` } })
    ] }),
    /* @__PURE__ */ jsx5("span", { className: "ps-sr-only", children: label })
  ] });
}

// src/components/form.tsx
import * as React5 from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
var Label = React5.forwardRef(function Label2({ className = "", ...props }, ref) {
  return /* @__PURE__ */ jsx6("label", { ref, className: `ps-label ${className}`, ...props });
});
var Textarea = React5.forwardRef(function Textarea2({ className = "", ...props }, ref) {
  return /* @__PURE__ */ jsx6("textarea", { ref, className: `ps-textarea ${className}`, ...props });
});
function Field({ className = "", ...props }) {
  return /* @__PURE__ */ jsx6("div", { className: `ps-field ${className}`, ...props });
}
function FieldHint({ className = "", ...props }) {
  return /* @__PURE__ */ jsx6("p", { className: `ps-field__hint ${className}`, ...props });
}
function FieldError({ className = "", ...props }) {
  return /* @__PURE__ */ jsx6("p", { className: `ps-field__error ${className}`, role: "alert", ...props });
}

// src/components/controls.tsx
import * as React6 from "react";
import { IconChevronDown as IconChevronDown2 } from "@tabler/icons-react";
import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import { Meter as BaseMeter } from "@base-ui/react/meter";
import { NumberField as BaseNumberField } from "@base-ui/react/number-field";
import { OTPField as BaseOTPField } from "@base-ui/react/otp-field";
import { Progress as BaseProgress } from "@base-ui/react/progress";
import { Radio as BaseRadio } from "@base-ui/react/radio";
import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";
import { Slider as BaseSlider } from "@base-ui/react/slider";
import { Switch as BaseSwitch } from "@base-ui/react/switch";
import { Toggle as BaseToggle } from "@base-ui/react/toggle";
import { ToggleGroup as BaseToggleGroup } from "@base-ui/react/toggle-group";

// src/utils.tsx
import { IconCheck, IconChevronDown, IconSearch, IconX } from "@tabler/icons-react";
import { jsx as jsx7 } from "react/jsx-runtime";
function cx(...values) {
  if (values.some((value) => typeof value === "function")) {
    return (state) => values.map((value) => typeof value === "function" ? value(state) : value).filter(Boolean).join(" ");
  }
  return values.filter(Boolean).join(" ");
}
function CheckIcon({ className = "" }) {
  return /* @__PURE__ */ jsx7(IconCheck, { className, "aria-hidden": "true" });
}
function ChevronIcon({ className = "" }) {
  return /* @__PURE__ */ jsx7(IconChevronDown, { className, "aria-hidden": "true" });
}
function CloseIcon({ className = "" }) {
  return /* @__PURE__ */ jsx7(IconX, { className, "aria-hidden": "true" });
}
function SearchIcon({ className = "" }) {
  return /* @__PURE__ */ jsx7(IconSearch, { className, "aria-hidden": "true" });
}

// src/components/controls.tsx
import { jsx as jsx8, jsxs as jsxs3 } from "react/jsx-runtime";
var Label3 = ({ className = "", ...props }) => /* @__PURE__ */ jsx8("label", { className: cx("ps-label", className), ...props });
var Textarea3 = React6.forwardRef(function Textarea4({ className = "", ...props }, ref) {
  return /* @__PURE__ */ jsx8("textarea", { ref, className: cx("ps-textarea", className), ...props });
});
var NativeSelect = React6.forwardRef(function NativeSelect2({ className = "", children, ...props }, ref) {
  return /* @__PURE__ */ jsxs3("span", { className: "ps-native-select", children: [
    /* @__PURE__ */ jsx8("select", { ref, className: cx("ps-native-select__control", className), ...props, children }),
    /* @__PURE__ */ jsx8(IconChevronDown2, { "aria-hidden": "true" })
  ] });
});
function Checkbox({ className = "", children, ...props }) {
  return /* @__PURE__ */ jsxs3(BaseCheckbox.Root, { className: cx("ps-checkbox", className), ...props, children: [
    /* @__PURE__ */ jsx8(BaseCheckbox.Indicator, { className: "ps-checkbox__indicator", children: /* @__PURE__ */ jsx8(CheckIcon, {}) }),
    children
  ] });
}
function Switch({ className = "", ...props }) {
  return /* @__PURE__ */ jsx8(BaseSwitch.Root, { className: cx("ps-switch", className), ...props, children: /* @__PURE__ */ jsx8(BaseSwitch.Thumb, { className: "ps-switch__thumb" }) });
}
function RadioGroup({ className = "", ...props }) {
  return /* @__PURE__ */ jsx8(BaseRadioGroup, { className: cx("ps-radio-group", className), ...props });
}
function RadioGroupItem({ className = "", ...props }) {
  return /* @__PURE__ */ jsx8(BaseRadio.Root, { className: cx("ps-radio", className), ...props, children: /* @__PURE__ */ jsx8(BaseRadio.Indicator, { className: "ps-radio__indicator" }) });
}
function Slider({ className = "", ...props }) {
  const values = Array.isArray(props.defaultValue) ? props.defaultValue : Array.isArray(props.value) ? props.value : [0];
  return /* @__PURE__ */ jsx8(BaseSlider.Root, { className: cx("ps-slider", className), ...props, children: /* @__PURE__ */ jsxs3(BaseSlider.Control, { className: "ps-slider__control", children: [
    /* @__PURE__ */ jsx8(BaseSlider.Track, { className: "ps-slider__track", children: /* @__PURE__ */ jsx8(BaseSlider.Indicator, { className: "ps-slider__indicator" }) }),
    values.map((_, index) => /* @__PURE__ */ jsx8(BaseSlider.Thumb, { className: "ps-slider__thumb" }, index))
  ] }) });
}
function Progress({ className = "", ...props }) {
  return /* @__PURE__ */ jsx8(BaseProgress.Root, { className: cx("ps-progress", className), ...props, children: /* @__PURE__ */ jsx8(BaseProgress.Track, { className: "ps-progress__track", children: /* @__PURE__ */ jsx8(BaseProgress.Indicator, { className: "ps-progress__indicator" }) }) });
}
function Meter({ className = "", children, ...props }) {
  return /* @__PURE__ */ jsxs3(BaseMeter.Root, { className: cx("ps-meter", className), ...props, children: [
    /* @__PURE__ */ jsxs3("div", { className: "ps-meter__meta", children: [
      /* @__PURE__ */ jsx8(BaseMeter.Label, { children }),
      /* @__PURE__ */ jsx8(BaseMeter.Value, {})
    ] }),
    /* @__PURE__ */ jsx8(BaseMeter.Track, { className: "ps-meter__track", children: /* @__PURE__ */ jsx8(BaseMeter.Indicator, { className: "ps-meter__indicator" }) })
  ] });
}
function Toggle({ className = "", ...props }) {
  return /* @__PURE__ */ jsx8(BaseToggle, { className: cx("ps-toggle", className), ...props });
}
function ToggleGroup({ className = "", ...props }) {
  return /* @__PURE__ */ jsx8(BaseToggleGroup, { className: cx("ps-toggle-group", className), ...props });
}
function ToggleGroupItem({ className = "", ...props }) {
  return /* @__PURE__ */ jsx8(BaseToggle, { className: cx("ps-toggle ps-toggle-group__item", className), ...props });
}
var InputGroup = ({ className = "", ...props }) => /* @__PURE__ */ jsx8("div", { className: cx("ps-input-group", className), ...props });
var InputGroupAddon = ({ className = "", ...props }) => /* @__PURE__ */ jsx8("span", { className: cx("ps-input-group__addon", className), ...props });
var ButtonGroup = ({ className = "", ...props }) => /* @__PURE__ */ jsx8("div", { className: cx("ps-button-group", className), role: "group", ...props });
var NumberField = BaseNumberField.Root;
function NumberFieldGroup({ className = "", ...props }) {
  return /* @__PURE__ */ jsx8(BaseNumberField.Group, { className: cx("ps-number-field", className), ...props });
}
function NumberFieldInput({ className = "", ...props }) {
  return /* @__PURE__ */ jsx8(BaseNumberField.Input, { className: cx("ps-number-field__input", className), ...props });
}
function NumberFieldIncrement({ className = "", children = "+", ...props }) {
  return /* @__PURE__ */ jsx8(BaseNumberField.Increment, { className: cx("ps-number-field__step", className), ...props, children });
}
function NumberFieldDecrement({ className = "", children = "\u2212", ...props }) {
  return /* @__PURE__ */ jsx8(BaseNumberField.Decrement, { className: cx("ps-number-field__step", className), ...props, children });
}
function InputOTP({ className = "", length, ...props }) {
  return /* @__PURE__ */ jsx8(BaseOTPField.Root, { className: cx("ps-otp", className), length, ...props, children: Array.from({ length }, (_, index) => /* @__PURE__ */ jsx8(BaseOTPField.Input, { className: "ps-otp__input" }, index)) });
}

// src/components/disclosure.tsx
import { Accordion as BaseAccordion } from "@base-ui/react/accordion";
import { Collapsible as BaseCollapsible } from "@base-ui/react/collapsible";
import { Tabs as BaseTabs } from "@base-ui/react/tabs";
import { jsx as jsx9, jsxs as jsxs4 } from "react/jsx-runtime";
var Accordion = BaseAccordion.Root;
function AccordionItem({ className = "", ...props }) {
  return /* @__PURE__ */ jsx9(BaseAccordion.Item, { className: cx("ps-accordion__item", className), ...props });
}
function AccordionTrigger({ className = "", children, ...props }) {
  return /* @__PURE__ */ jsx9(BaseAccordion.Header, { className: "ps-accordion__header", children: /* @__PURE__ */ jsxs4(BaseAccordion.Trigger, { className: cx("ps-accordion__trigger", className), ...props, children: [
    /* @__PURE__ */ jsx9("span", { children }),
    /* @__PURE__ */ jsx9(ChevronIcon, { className: "ps-accordion__chevron" })
  ] }) });
}
function AccordionContent({ className = "", ...props }) {
  return /* @__PURE__ */ jsx9(BaseAccordion.Panel, { className: cx("ps-accordion__panel", className), ...props });
}
var Collapsible = BaseCollapsible.Root;
function CollapsibleTrigger({ className = "", ...props }) {
  return /* @__PURE__ */ jsx9(BaseCollapsible.Trigger, { className: cx("ps-collapsible__trigger", className), ...props });
}
function CollapsibleContent({ className = "", ...props }) {
  return /* @__PURE__ */ jsx9(BaseCollapsible.Panel, { className: cx("ps-collapsible__panel", className), ...props });
}
var Tabs = BaseTabs.Root;
function TabsList({ className = "", children, ...props }) {
  return /* @__PURE__ */ jsxs4(BaseTabs.List, { className: cx("ps-tabs__list", className), ...props, children: [
    children,
    /* @__PURE__ */ jsx9(BaseTabs.Indicator, { className: "ps-tabs__indicator" })
  ] });
}
function TabsTrigger({ className = "", ...props }) {
  return /* @__PURE__ */ jsx9(BaseTabs.Tab, { className: cx("ps-tabs__trigger", className), ...props });
}
function TabsContent({ className = "", ...props }) {
  return /* @__PURE__ */ jsx9(BaseTabs.Panel, { className: cx("ps-tabs__panel", className), ...props });
}

// src/components/overlays.tsx
import { AlertDialog as BaseAlertDialog } from "@base-ui/react/alert-dialog";
import { Dialog as BaseDialog2 } from "@base-ui/react/dialog";
import { Drawer as BaseDrawer } from "@base-ui/react/drawer";
import { Popover as BasePopover } from "@base-ui/react/popover";
import { PreviewCard as BasePreviewCard } from "@base-ui/react/preview-card";
import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import { jsx as jsx10, jsxs as jsxs5 } from "react/jsx-runtime";
var AlertDialog = BaseAlertDialog.Root;
var AlertDialogTrigger = BaseAlertDialog.Trigger;
var AlertDialogTitle = BaseAlertDialog.Title;
var AlertDialogDescription = BaseAlertDialog.Description;
var AlertDialogClose = BaseAlertDialog.Close;
function AlertDialogContent({ className = "", children, ...props }) {
  return /* @__PURE__ */ jsxs5(BaseAlertDialog.Portal, { children: [
    /* @__PURE__ */ jsx10(BaseAlertDialog.Backdrop, { className: "ps-overlay" }),
    /* @__PURE__ */ jsx10(BaseAlertDialog.Viewport, { className: "ps-overlay__viewport", children: /* @__PURE__ */ jsx10(BaseAlertDialog.Popup, { className: cx("ps-dialog ps-alert-dialog", className), ...props, children }) })
  ] });
}
var Popover = BasePopover.Root;
var PopoverTrigger = BasePopover.Trigger;
var PopoverTitle = BasePopover.Title;
var PopoverDescription = BasePopover.Description;
var PopoverClose = BasePopover.Close;
function PopoverContent({ className = "", sideOffset = 8, children, ...props }) {
  return /* @__PURE__ */ jsx10(BasePopover.Portal, { children: /* @__PURE__ */ jsx10(BasePopover.Positioner, { sideOffset, className: "ps-positioner", children: /* @__PURE__ */ jsxs5(BasePopover.Popup, { className: cx("ps-popover", className), ...props, children: [
    children,
    /* @__PURE__ */ jsx10(BasePopover.Arrow, { className: "ps-floating-arrow" })
  ] }) }) });
}
var TooltipProvider = BaseTooltip.Provider;
var Tooltip = BaseTooltip.Root;
var TooltipTrigger = BaseTooltip.Trigger;
function TooltipContent({ className = "", sideOffset = 7, children, ...props }) {
  return /* @__PURE__ */ jsx10(BaseTooltip.Portal, { children: /* @__PURE__ */ jsx10(BaseTooltip.Positioner, { sideOffset, children: /* @__PURE__ */ jsxs5(BaseTooltip.Popup, { className: cx("ps-tooltip", className), ...props, children: [
    children,
    /* @__PURE__ */ jsx10(BaseTooltip.Arrow, { className: "ps-floating-arrow" })
  ] }) }) });
}
var HoverCard = BasePreviewCard.Root;
var HoverCardTrigger = BasePreviewCard.Trigger;
function HoverCardContent({ className = "", sideOffset = 8, children, ...props }) {
  return /* @__PURE__ */ jsx10(BasePreviewCard.Portal, { children: /* @__PURE__ */ jsx10(BasePreviewCard.Positioner, { sideOffset, children: /* @__PURE__ */ jsxs5(BasePreviewCard.Popup, { className: cx("ps-hover-card", className), ...props, children: [
    children,
    /* @__PURE__ */ jsx10(BasePreviewCard.Arrow, { className: "ps-floating-arrow" })
  ] }) }) });
}
var Drawer = BaseDrawer.Root;
var DrawerTrigger = BaseDrawer.Trigger;
var DrawerClose = BaseDrawer.Close;
var DrawerTitle = BaseDrawer.Title;
var DrawerDescription = BaseDrawer.Description;
function DrawerContent({ className = "", children, ...props }) {
  return /* @__PURE__ */ jsxs5(BaseDrawer.Portal, { children: [
    /* @__PURE__ */ jsx10(BaseDrawer.Backdrop, { className: "ps-overlay" }),
    /* @__PURE__ */ jsx10(BaseDrawer.Viewport, { className: "ps-drawer__viewport", children: /* @__PURE__ */ jsxs5(BaseDrawer.Popup, { className: cx("ps-drawer", className), ...props, children: [
      /* @__PURE__ */ jsx10("div", { className: "ps-drawer__handle", "aria-hidden": "true" }),
      children
    ] }) })
  ] });
}
var Sheet = BaseDialog2.Root;
var SheetTrigger = BaseDialog2.Trigger;
var SheetClose = BaseDialog2.Close;
var SheetTitle = BaseDialog2.Title;
var SheetDescription = BaseDialog2.Description;
function SheetContent({ className = "", children, side = "right", ...props }) {
  return /* @__PURE__ */ jsxs5(BaseDialog2.Portal, { children: [
    /* @__PURE__ */ jsx10(BaseDialog2.Backdrop, { className: "ps-overlay" }),
    /* @__PURE__ */ jsx10(BaseDialog2.Viewport, { className: cx("ps-sheet__viewport", `ps-sheet__viewport--${side}`), children: /* @__PURE__ */ jsxs5(BaseDialog2.Popup, { className: cx("ps-sheet", className), ...props, children: [
      /* @__PURE__ */ jsx10(BaseDialog2.Close, { className: "ps-icon-button ps-sheet__close", "aria-label": "Close", children: /* @__PURE__ */ jsx10(CloseIcon, {}) }),
      children
    ] }) })
  ] });
}

// src/components/menus.tsx
import { ContextMenu as BaseContextMenu } from "@base-ui/react/context-menu";
import { Menu as BaseMenu } from "@base-ui/react/menu";
import { Menubar as BaseMenubar } from "@base-ui/react/menubar";
import { Toolbar as BaseToolbar } from "@base-ui/react/toolbar";
import { jsx as jsx11, jsxs as jsxs6 } from "react/jsx-runtime";
var DropdownMenu = BaseMenu.Root;
var DropdownMenuTrigger = BaseMenu.Trigger;
var DropdownMenuGroup = BaseMenu.Group;
var DropdownMenuRadioGroup = BaseMenu.RadioGroup;
var DropdownMenuSub = BaseMenu.SubmenuRoot;
function DropdownMenuContent({ className = "", sideOffset = 7, children, ...props }) {
  return /* @__PURE__ */ jsx11(BaseMenu.Portal, { children: /* @__PURE__ */ jsx11(BaseMenu.Positioner, { sideOffset, children: /* @__PURE__ */ jsx11(BaseMenu.Popup, { className: cx("ps-menu", className), ...props, children }) }) });
}
function DropdownMenuItem({ className = "", ...props }) {
  return /* @__PURE__ */ jsx11(BaseMenu.Item, { className: cx("ps-menu__item", className), ...props });
}
function DropdownMenuCheckboxItem({ className = "", children, ...props }) {
  return /* @__PURE__ */ jsxs6(BaseMenu.CheckboxItem, { className: cx("ps-menu__item ps-menu__item--choice", className), ...props, children: [
    /* @__PURE__ */ jsx11(BaseMenu.CheckboxItemIndicator, { className: "ps-menu__indicator", children: /* @__PURE__ */ jsx11(CheckIcon, {}) }),
    children
  ] });
}
function DropdownMenuRadioItem({ className = "", children, ...props }) {
  return /* @__PURE__ */ jsxs6(BaseMenu.RadioItem, { className: cx("ps-menu__item ps-menu__item--choice", className), ...props, children: [
    /* @__PURE__ */ jsx11(BaseMenu.RadioItemIndicator, { className: "ps-menu__indicator", children: /* @__PURE__ */ jsx11("span", {}) }),
    children
  ] });
}
function DropdownMenuLabel({ className = "", ...props }) {
  return /* @__PURE__ */ jsx11(BaseMenu.GroupLabel, { className: cx("ps-menu__label", className), ...props });
}
function DropdownMenuSeparator({ className = "", ...props }) {
  return /* @__PURE__ */ jsx11(BaseMenu.Separator, { className: cx("ps-menu__separator", className), ...props });
}
function DropdownMenuSubTrigger({ className = "", children, ...props }) {
  return /* @__PURE__ */ jsxs6(BaseMenu.SubmenuTrigger, { className: cx("ps-menu__item", className), ...props, children: [
    children,
    /* @__PURE__ */ jsx11(ChevronIcon, { className: "ps-menu__chevron" })
  ] });
}
var DropdownMenuShortcut = ({ className = "", ...props }) => /* @__PURE__ */ jsx11("span", { className: cx("ps-menu__shortcut", className), ...props });
var ContextMenu = BaseContextMenu.Root;
var ContextMenuTrigger = BaseContextMenu.Trigger;
function ContextMenuContent({ className = "", children, ...props }) {
  return /* @__PURE__ */ jsx11(BaseContextMenu.Portal, { children: /* @__PURE__ */ jsx11(BaseContextMenu.Positioner, { children: /* @__PURE__ */ jsx11(BaseContextMenu.Popup, { className: cx("ps-menu", className), ...props, children }) }) });
}
function ContextMenuItem({ className = "", ...props }) {
  return /* @__PURE__ */ jsx11(BaseContextMenu.Item, { className: cx("ps-menu__item", className), ...props });
}
function Menubar({ className = "", ...props }) {
  return /* @__PURE__ */ jsx11(BaseMenubar, { className: cx("ps-menubar", className), ...props });
}
var MenubarMenu = BaseMenu.Root;
function MenubarTrigger({ className = "", ...props }) {
  return /* @__PURE__ */ jsx11(BaseMenu.Trigger, { className: cx("ps-menubar__trigger", className), ...props });
}
var MenubarContent = DropdownMenuContent;
var MenubarItem = DropdownMenuItem;
var MenubarSeparator = DropdownMenuSeparator;
var MenubarShortcut = DropdownMenuShortcut;
function Toolbar({ className = "", ...props }) {
  return /* @__PURE__ */ jsx11(BaseToolbar.Root, { className: cx("ps-toolbar", className), ...props });
}
function ToolbarGroup({ className = "", ...props }) {
  return /* @__PURE__ */ jsx11(BaseToolbar.Group, { className: cx("ps-toolbar__group", className), ...props });
}
function ToolbarButton({ className = "", ...props }) {
  return /* @__PURE__ */ jsx11(BaseToolbar.Button, { className: cx("ps-toolbar__button", className), ...props });
}
function ToolbarSeparator({ className = "", ...props }) {
  return /* @__PURE__ */ jsx11(BaseToolbar.Separator, { className: cx("ps-toolbar__separator", className), ...props });
}

// src/components/selection.tsx
import * as React7 from "react";
import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { Select as BaseSelect } from "@base-ui/react/select";
import { jsx as jsx12, jsxs as jsxs7 } from "react/jsx-runtime";
var Select = BaseSelect.Root;
function SelectTrigger({ className = "", children, ...props }) {
  return /* @__PURE__ */ jsxs7(BaseSelect.Trigger, { className: cx("ps-select__trigger", className), ...props, children: [
    children,
    /* @__PURE__ */ jsx12(BaseSelect.Icon, { className: "ps-select__icon", children: /* @__PURE__ */ jsx12(ChevronIcon, {}) })
  ] });
}
function SelectValue({ className = "", ...props }) {
  return /* @__PURE__ */ jsx12(BaseSelect.Value, { className: cx("ps-select__value", className), ...props });
}
function SelectContent({ className = "", sideOffset = 7, children, ...props }) {
  return /* @__PURE__ */ jsx12(BaseSelect.Portal, { children: /* @__PURE__ */ jsx12(BaseSelect.Positioner, { sideOffset, children: /* @__PURE__ */ jsx12(BaseSelect.Popup, { className: cx("ps-select__popup", className), ...props, children: /* @__PURE__ */ jsx12(BaseSelect.List, { children }) }) }) });
}
function SelectItem({ className = "", children, ...props }) {
  return /* @__PURE__ */ jsxs7(BaseSelect.Item, { className: cx("ps-select__item", className), ...props, children: [
    /* @__PURE__ */ jsx12(BaseSelect.ItemIndicator, { className: "ps-select__indicator", children: /* @__PURE__ */ jsx12(CheckIcon, {}) }),
    /* @__PURE__ */ jsx12(BaseSelect.ItemText, { children })
  ] });
}
function SelectGroup({ className = "", ...props }) {
  return /* @__PURE__ */ jsx12(BaseSelect.Group, { className: cx("ps-select__group", className), ...props });
}
function SelectLabel({ className = "", ...props }) {
  return /* @__PURE__ */ jsx12(BaseSelect.GroupLabel, { className: cx("ps-select__label", className), ...props });
}
function SelectSeparator({ className = "", ...props }) {
  return /* @__PURE__ */ jsx12(BaseSelect.Separator, { className: cx("ps-select__separator", className), ...props });
}
var Combobox = BaseCombobox.Root;
function ComboboxInput({ className = "", ...props }) {
  return /* @__PURE__ */ jsxs7(BaseCombobox.InputGroup, { className: "ps-combobox__input-group", children: [
    /* @__PURE__ */ jsx12(SearchIcon, { className: "ps-combobox__search" }),
    /* @__PURE__ */ jsx12(BaseCombobox.Input, { className: cx("ps-combobox__input", className), ...props }),
    /* @__PURE__ */ jsx12(BaseCombobox.Clear, { className: "ps-combobox__clear", "aria-label": "Clear", children: /* @__PURE__ */ jsx12(CloseIcon, {}) }),
    /* @__PURE__ */ jsx12(BaseCombobox.Trigger, { className: "ps-combobox__trigger", "aria-label": "Show options", children: /* @__PURE__ */ jsx12(ChevronIcon, {}) })
  ] });
}
function ComboboxContent({ className = "", sideOffset = 7, children, ...props }) {
  return /* @__PURE__ */ jsx12(BaseCombobox.Portal, { children: /* @__PURE__ */ jsx12(BaseCombobox.Positioner, { sideOffset, children: /* @__PURE__ */ jsxs7(BaseCombobox.Popup, { className: cx("ps-combobox__popup", className), ...props, children: [
    /* @__PURE__ */ jsx12(BaseCombobox.Empty, { className: "ps-combobox__empty", children: "No matches." }),
    /* @__PURE__ */ jsx12(BaseCombobox.List, { children })
  ] }) }) });
}
function ComboboxItem({ className = "", children, ...props }) {
  return /* @__PURE__ */ jsxs7(BaseCombobox.Item, { className: cx("ps-combobox__item", className), ...props, children: [
    /* @__PURE__ */ jsx12(BaseCombobox.ItemIndicator, { className: "ps-combobox__indicator", children: /* @__PURE__ */ jsx12(CheckIcon, {}) }),
    children
  ] });
}
function ComboboxGroup({ className = "", ...props }) {
  return /* @__PURE__ */ jsx12(BaseCombobox.Group, { className: cx("ps-combobox__group", className), ...props });
}
function ComboboxLabel({ className = "", ...props }) {
  return /* @__PURE__ */ jsx12(BaseCombobox.GroupLabel, { className: cx("ps-combobox__label", className), ...props });
}
function Command({ items, onSelect, placeholder = "Search commands\u2026", empty = "No commands found.", className = "" }) {
  const [query, setQuery] = React7.useState("");
  const filtered = items.filter((item) => `${item.label} ${item.keywords ?? ""}`.toLowerCase().includes(query.toLowerCase()));
  return /* @__PURE__ */ jsxs7("div", { className: cx("ps-command", className), children: [
    /* @__PURE__ */ jsxs7("div", { className: "ps-command__search", children: [
      /* @__PURE__ */ jsx12(SearchIcon, {}),
      /* @__PURE__ */ jsx12("input", { value: query, onChange: (event) => setQuery(event.target.value), placeholder, "aria-label": placeholder })
    ] }),
    /* @__PURE__ */ jsx12("div", { className: "ps-command__list", role: "listbox", children: filtered.length ? filtered.map((item) => /* @__PURE__ */ jsxs7("button", { type: "button", role: "option", "aria-selected": "false", onClick: () => onSelect?.(item.value), children: [
      /* @__PURE__ */ jsx12("span", { children: item.label }),
      item.group && /* @__PURE__ */ jsx12("small", { children: item.group })
    ] }, item.value)) : /* @__PURE__ */ jsx12("p", { children: empty }) })
  ] });
}

// src/components/structure.tsx
import * as React8 from "react";
import { Avatar as BaseAvatar } from "@base-ui/react/avatar";
import { ScrollArea as BaseScrollArea } from "@base-ui/react/scroll-area";
import { Separator as BaseSeparator } from "@base-ui/react/separator";
import { jsx as jsx13, jsxs as jsxs8 } from "react/jsx-runtime";
function AspectRatio({ ratio = 16 / 9, className = "", style, ...props }) {
  return /* @__PURE__ */ jsx13("div", { className: cx("ps-aspect-ratio", className), style: { ...style, aspectRatio: ratio }, ...props });
}
function Avatar({ className = "", name, src, ...props }) {
  const initials = name.split(/\s+/).map((word) => word[0]).slice(0, 2).join("").toUpperCase();
  return /* @__PURE__ */ jsxs8(BaseAvatar.Root, { className: cx("ps-avatar", className), "aria-label": name, ...props, children: [
    src && /* @__PURE__ */ jsx13(BaseAvatar.Image, { className: "ps-avatar__image", src, alt: "" }),
    /* @__PURE__ */ jsx13(BaseAvatar.Fallback, { className: "ps-avatar__fallback", children: initials })
  ] });
}
function Separator({ className = "", ...props }) {
  return /* @__PURE__ */ jsx13(BaseSeparator, { className: cx("ps-separator", className), ...props });
}
var Skeleton = ({ className = "", ...props }) => /* @__PURE__ */ jsx13("div", { className: cx("ps-skeleton", className), "aria-hidden": "true", ...props });
var Spinner = ({ className = "", label = "Loading", ...props }) => /* @__PURE__ */ jsx13("span", { className: cx("ps-spinner", className), role: "status", "aria-label": label, ...props });
function Alert({ title, children, tone = "info", className = "" }) {
  return /* @__PURE__ */ jsxs8("div", { className: cx("ps-alert", `ps-alert--${tone}`, className), role: tone === "danger" ? "alert" : "status", children: [
    /* @__PURE__ */ jsx13("span", { className: "ps-alert__signal", "aria-hidden": "true" }),
    /* @__PURE__ */ jsxs8("div", { children: [
      /* @__PURE__ */ jsx13("strong", { children: title }),
      /* @__PURE__ */ jsx13("p", { children })
    ] })
  ] });
}
function EmptyState({ title, children, action, icon, className = "" }) {
  return /* @__PURE__ */ jsxs8("div", { className: cx("ps-empty", className), children: [
    icon && /* @__PURE__ */ jsx13("div", { className: "ps-empty__icon", "aria-hidden": "true", children: icon }),
    /* @__PURE__ */ jsx13("h3", { children: title }),
    /* @__PURE__ */ jsx13("p", { children }),
    action && /* @__PURE__ */ jsx13("div", { className: "ps-empty__action", children: action })
  ] });
}
var Kbd = ({ className = "", ...props }) => /* @__PURE__ */ jsx13("kbd", { className: cx("ps-kbd", className), ...props });
var Code = ({ className = "", ...props }) => /* @__PURE__ */ jsx13("code", { className: cx("ps-code", className), ...props });
var Muted = ({ className = "", ...props }) => /* @__PURE__ */ jsx13("p", { className: cx("ps-muted", className), ...props });
var Lead = ({ className = "", ...props }) => /* @__PURE__ */ jsx13("p", { className: cx("ps-lead", className), ...props });
var Heading = ({ level = 2, className = "", ...props }) => React8.createElement(`h${level}`, { className: cx(`ps-heading ps-heading--${level}`, className), ...props });
var Breadcrumb = ({ className = "", ...props }) => /* @__PURE__ */ jsx13("nav", { "aria-label": "Breadcrumb", className: cx("ps-breadcrumb", className), ...props });
var BreadcrumbList = ({ className = "", ...props }) => /* @__PURE__ */ jsx13("ol", { className: cx("ps-breadcrumb__list", className), ...props });
var BreadcrumbItem = ({ className = "", ...props }) => /* @__PURE__ */ jsx13("li", { className: cx("ps-breadcrumb__item", className), ...props });
var BreadcrumbLink = ({ className = "", ...props }) => /* @__PURE__ */ jsx13("a", { className: cx("ps-breadcrumb__link", className), ...props });
var BreadcrumbPage = ({ className = "", ...props }) => /* @__PURE__ */ jsx13("span", { className: cx("ps-breadcrumb__page", className), "aria-current": "page", ...props });
var BreadcrumbSeparator = ({ className = "", children = /* @__PURE__ */ jsx13(ChevronIcon, {}), ...props }) => /* @__PURE__ */ jsx13("li", { className: cx("ps-breadcrumb__separator", className), "aria-hidden": "true", ...props, children });
var Pagination = ({ className = "", ...props }) => /* @__PURE__ */ jsx13("nav", { "aria-label": "Pagination", className: cx("ps-pagination", className), ...props });
var PaginationList = ({ className = "", ...props }) => /* @__PURE__ */ jsx13("ul", { className: cx("ps-pagination__list", className), ...props });
var PaginationItem = ({ className = "", ...props }) => /* @__PURE__ */ jsx13("li", { className: cx("ps-pagination__item", className), ...props });
var PaginationLink = ({ active, className = "", ...props }) => /* @__PURE__ */ jsx13("a", { className: cx("ps-pagination__link", active && "is-active", className), "aria-current": active ? "page" : void 0, ...props });
var PaginationEllipsis = () => /* @__PURE__ */ jsx13("span", { className: "ps-pagination__ellipsis", "aria-hidden": "true", children: "\u2022\u2022\u2022" });
var Table = ({ className = "", ...props }) => /* @__PURE__ */ jsx13("div", { className: "ps-table-wrap", children: /* @__PURE__ */ jsx13("table", { className: cx("ps-table", className), ...props }) });
var TableHeader = (props) => /* @__PURE__ */ jsx13("thead", { ...props });
var TableBody = (props) => /* @__PURE__ */ jsx13("tbody", { ...props });
var TableFooter = (props) => /* @__PURE__ */ jsx13("tfoot", { ...props });
var TableRow = (props) => /* @__PURE__ */ jsx13("tr", { ...props });
var TableHead = (props) => /* @__PURE__ */ jsx13("th", { ...props });
var TableCell = (props) => /* @__PURE__ */ jsx13("td", { ...props });
var TableCaption = (props) => /* @__PURE__ */ jsx13("caption", { ...props });
function ScrollArea({ className = "", children, ...props }) {
  return /* @__PURE__ */ jsxs8(BaseScrollArea.Root, { className: cx("ps-scroll-area", className), ...props, children: [
    /* @__PURE__ */ jsx13(BaseScrollArea.Viewport, { className: "ps-scroll-area__viewport", children: /* @__PURE__ */ jsx13(BaseScrollArea.Content, { children }) }),
    /* @__PURE__ */ jsx13(BaseScrollArea.Scrollbar, { className: "ps-scroll-area__scrollbar", children: /* @__PURE__ */ jsx13(BaseScrollArea.Thumb, { className: "ps-scroll-area__thumb" }) }),
    /* @__PURE__ */ jsx13(BaseScrollArea.Corner, {})
  ] });
}
var Item = ({ className = "", ...props }) => /* @__PURE__ */ jsx13("div", { className: cx("ps-item", className), ...props });
var ItemMedia = ({ className = "", ...props }) => /* @__PURE__ */ jsx13("div", { className: cx("ps-item__media", className), ...props });
var ItemContent = ({ className = "", ...props }) => /* @__PURE__ */ jsx13("div", { className: cx("ps-item__content", className), ...props });
var ItemTitle = ({ className = "", ...props }) => /* @__PURE__ */ jsx13("h3", { className: cx("ps-item__title", className), ...props });
var ItemDescription = ({ className = "", ...props }) => /* @__PURE__ */ jsx13("p", { className: cx("ps-item__description", className), ...props });
var ItemActions = ({ className = "", ...props }) => /* @__PURE__ */ jsx13("div", { className: cx("ps-item__actions", className), ...props });

// src/components/advanced.tsx
import * as React9 from "react";
import { IconChevronLeft, IconChevronRight, IconMenu2 } from "@tabler/icons-react";
import { jsx as jsx14, jsxs as jsxs9 } from "react/jsx-runtime";
var sameDay = (a, b) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
var monthLabel = new Intl.DateTimeFormat("en", { month: "long", year: "numeric" });
var dateLabel = new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" });
function Calendar({ value, defaultValue, onValueChange, className = "" }) {
  const [internal, setInternal] = React9.useState(defaultValue);
  const selected = value ?? internal;
  const [view, setView] = React9.useState(() => selected ? new Date(selected.getFullYear(), selected.getMonth(), 1) : new Date((/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getMonth(), 1));
  const firstOffset = new Date(view.getFullYear(), view.getMonth(), 1).getDay();
  const days = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const previousDays = new Date(view.getFullYear(), view.getMonth(), 0).getDate();
  const cells = Array.from({ length: 42 }, (_, index) => {
    const day = index - firstOffset + 1;
    return day < 1 ? new Date(view.getFullYear(), view.getMonth() - 1, previousDays + day) : day > days ? new Date(view.getFullYear(), view.getMonth() + 1, day - days) : new Date(view.getFullYear(), view.getMonth(), day);
  });
  const choose = (date) => {
    setInternal(date);
    onValueChange?.(date);
    if (date.getMonth() !== view.getMonth()) setView(new Date(date.getFullYear(), date.getMonth(), 1));
  };
  return /* @__PURE__ */ jsxs9("div", { className: cx("ps-calendar", className), children: [
    /* @__PURE__ */ jsxs9("div", { className: "ps-calendar__header", children: [
      /* @__PURE__ */ jsx14("button", { type: "button", "aria-label": "Previous month", onClick: () => setView(new Date(view.getFullYear(), view.getMonth() - 1, 1)), children: /* @__PURE__ */ jsx14(IconChevronLeft, {}) }),
      /* @__PURE__ */ jsx14("strong", { "aria-live": "polite", children: monthLabel.format(view) }),
      /* @__PURE__ */ jsx14("button", { type: "button", "aria-label": "Next month", onClick: () => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1)), children: /* @__PURE__ */ jsx14(IconChevronRight, {}) })
    ] }),
    /* @__PURE__ */ jsxs9("div", { className: "ps-calendar__grid", children: [
      ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => /* @__PURE__ */ jsx14("span", { className: "ps-calendar__weekday", children: day }, day)),
      cells.map((date) => /* @__PURE__ */ jsx14("button", { type: "button", className: cx(date.getMonth() !== view.getMonth() && "is-outside", selected && sameDay(date, selected) && "is-selected", sameDay(date, /* @__PURE__ */ new Date()) && "is-today"), "aria-pressed": selected ? sameDay(date, selected) : false, onClick: () => choose(date), children: date.getDate() }, date.toISOString()))
    ] })
  ] });
}
function DatePicker({ value, onValueChange, placeholder = "Choose date" }) {
  const [open, setOpen] = React9.useState(false);
  return /* @__PURE__ */ jsxs9(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxs9(PopoverTrigger, { render: /* @__PURE__ */ jsx14(Button, { variant: "outline", className: "ps-date-picker" }), children: [
      value ? dateLabel.format(value) : placeholder,
      /* @__PURE__ */ jsx14(ChevronIcon, {})
    ] }),
    /* @__PURE__ */ jsx14(PopoverContent, { children: /* @__PURE__ */ jsx14(Calendar, { value, onValueChange: (date) => {
      onValueChange?.(date);
      setOpen(false);
    } }) })
  ] });
}
function Carousel({ children, className = "", label = "Carousel" }) {
  const viewport = React9.useRef(null);
  const move = (direction) => viewport.current?.scrollBy({ left: direction * viewport.current.clientWidth * 0.86, behavior: "smooth" });
  return /* @__PURE__ */ jsxs9("section", { className: cx("ps-carousel", className), "aria-label": label, children: [
    /* @__PURE__ */ jsx14("div", { className: "ps-carousel__viewport", ref: viewport, children: /* @__PURE__ */ jsx14("div", { className: "ps-carousel__track", children: React9.Children.map(children, (child) => /* @__PURE__ */ jsx14("div", { className: "ps-carousel__slide", children: child })) }) }),
    /* @__PURE__ */ jsxs9("div", { className: "ps-carousel__controls", children: [
      /* @__PURE__ */ jsx14("button", { type: "button", onClick: () => move(-1), "aria-label": "Previous slide", children: /* @__PURE__ */ jsx14(IconChevronLeft, {}) }),
      /* @__PURE__ */ jsx14("button", { type: "button", onClick: () => move(1), "aria-label": "Next slide", children: /* @__PURE__ */ jsx14(IconChevronRight, {}) })
    ] })
  ] });
}
function DataTable({ columns, rows, caption, empty = "No results." }) {
  return /* @__PURE__ */ jsx14("div", { className: "ps-table-wrap", children: /* @__PURE__ */ jsxs9("table", { className: "ps-table ps-data-table", children: [
    caption && /* @__PURE__ */ jsx14("caption", { children: caption }),
    /* @__PURE__ */ jsx14("thead", { children: /* @__PURE__ */ jsx14("tr", { children: columns.map((column) => /* @__PURE__ */ jsx14("th", { style: { textAlign: column.align }, children: column.header }, String(column.key))) }) }),
    /* @__PURE__ */ jsx14("tbody", { children: rows.length ? rows.map((row, rowIndex) => /* @__PURE__ */ jsx14("tr", { children: columns.map((column) => /* @__PURE__ */ jsx14("td", { style: { textAlign: column.align }, children: column.cell ? column.cell(row) : String(row[String(column.key)] ?? "") }, String(column.key))) }, row.id ?? rowIndex)) : /* @__PURE__ */ jsx14("tr", { children: /* @__PURE__ */ jsx14("td", { colSpan: columns.length, className: "ps-data-table__empty", children: empty }) }) })
  ] }) });
}
function ResizablePanels({ first, second, defaultSplit = 44, min = 24, className = "" }) {
  const [split, setSplit] = React9.useState(defaultSplit);
  const root = React9.useRef(null);
  const start = (event) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    const move = (next) => {
      const rect = root.current?.getBoundingClientRect();
      if (!rect) return;
      setSplit(Math.max(min, Math.min(100 - min, (next.clientX - rect.left) / rect.width * 100)));
    };
    const stop = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", stop);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", stop);
  };
  const nudge = (amount) => setSplit((current) => Math.max(min, Math.min(100 - min, current + amount)));
  return /* @__PURE__ */ jsxs9("div", { ref: root, className: cx("ps-resizable", className), children: [
    /* @__PURE__ */ jsx14("div", { style: { flexBasis: `${split}%` }, children: first }),
    /* @__PURE__ */ jsx14("div", { className: "ps-resizable__handle", role: "separator", "aria-orientation": "vertical", "aria-valuemin": min, "aria-valuemax": 100 - min, "aria-valuenow": Math.round(split), tabIndex: 0, onPointerDown: start, onKeyDown: (event) => {
      if (event.key === "ArrowLeft") nudge(-2);
      if (event.key === "ArrowRight") nudge(2);
    }, children: /* @__PURE__ */ jsx14("span", {}) }),
    /* @__PURE__ */ jsx14("div", { style: { flexBasis: `${100 - split}%` }, children: second })
  ] });
}
var ChartContainer = ({ className = "", ...props }) => /* @__PURE__ */ jsx14("div", { className: cx("ps-chart", className), ...props });
var ChartLegend = ({ className = "", ...props }) => /* @__PURE__ */ jsx14("ul", { className: cx("ps-chart__legend", className), ...props });
var ChartLegendItem = ({ color, className = "", style, ...props }) => /* @__PURE__ */ jsx14("li", { className: cx("ps-chart__legend-item", className), style: { ...style, "--ps-chart-series": color }, ...props });
var ToastContext = React9.createContext(null);
function ToastProvider({ children }) {
  const [toasts, setToasts] = React9.useState([]);
  const sequence = React9.useRef(0);
  const remove = React9.useCallback((id) => setToasts((current) => current.filter((item) => item.id !== id)), []);
  const toast = React9.useCallback((next) => {
    const id = ++sequence.current;
    setToasts((current) => [...current, { ...next, id }]);
    window.setTimeout(() => remove(id), 5e3);
  }, [remove]);
  return /* @__PURE__ */ jsxs9(ToastContext.Provider, { value: { toast }, children: [
    children,
    /* @__PURE__ */ jsx14("div", { className: "ps-toaster", role: "region", "aria-label": "Notifications", children: toasts.map((item) => /* @__PURE__ */ jsxs9("div", { className: cx("ps-toast", `ps-toast--${item.tone ?? "default"}`), role: "status", children: [
      /* @__PURE__ */ jsxs9("div", { children: [
        /* @__PURE__ */ jsx14("strong", { children: item.title }),
        item.description && /* @__PURE__ */ jsx14("p", { children: item.description })
      ] }),
      /* @__PURE__ */ jsx14("button", { type: "button", onClick: () => remove(item.id), "aria-label": "Dismiss", children: /* @__PURE__ */ jsx14(CloseIcon, {}) })
    ] }, item.id)) })
  ] });
}
function useToast() {
  const value = React9.useContext(ToastContext);
  if (!value) throw new Error("useToast must be used inside ToastProvider");
  return value;
}
var SidebarContext = React9.createContext(null);
function SidebarProvider({ defaultOpen = true, children }) {
  const [open, setOpen] = React9.useState(defaultOpen);
  return /* @__PURE__ */ jsx14(SidebarContext.Provider, { value: { open, setOpen }, children: /* @__PURE__ */ jsx14("div", { className: cx("ps-sidebar-layout", !open && "is-collapsed"), children }) });
}
function Sidebar({ className = "", ...props }) {
  return /* @__PURE__ */ jsx14("aside", { className: cx("ps-sidebar", className), ...props });
}
var SidebarHeader = ({ className = "", ...props }) => /* @__PURE__ */ jsx14("div", { className: cx("ps-sidebar__header", className), ...props });
var SidebarContent = ({ className = "", ...props }) => /* @__PURE__ */ jsx14("div", { className: cx("ps-sidebar__content", className), ...props });
var SidebarFooter = ({ className = "", ...props }) => /* @__PURE__ */ jsx14("div", { className: cx("ps-sidebar__footer", className), ...props });
var SidebarGroup = ({ className = "", ...props }) => /* @__PURE__ */ jsx14("section", { className: cx("ps-sidebar__group", className), ...props });
var SidebarGroupLabel = ({ className = "", ...props }) => /* @__PURE__ */ jsx14("h3", { className: cx("ps-sidebar__label", className), ...props });
var SidebarMenu = ({ className = "", ...props }) => /* @__PURE__ */ jsx14("ul", { className: cx("ps-sidebar__menu", className), ...props });
var SidebarMenuItem = ({ className = "", ...props }) => /* @__PURE__ */ jsx14("li", { className: cx("ps-sidebar__menu-item", className), ...props });
var SidebarMenuButton = ({ active, className = "", ...props }) => /* @__PURE__ */ jsx14("button", { className: cx("ps-sidebar__menu-button", active && "is-active", className), ...props });
function SidebarTrigger({ className = "", ...props }) {
  const context = React9.useContext(SidebarContext);
  if (!context) throw new Error("SidebarTrigger must be used inside SidebarProvider");
  return /* @__PURE__ */ jsx14("button", { type: "button", className: cx("ps-sidebar__trigger", className), "aria-label": "Toggle sidebar", onClick: () => context.setOpen((open) => !open), ...props, children: /* @__PURE__ */ jsx14(IconMenu2, {}) });
}
var SidebarInset = ({ className = "", ...props }) => /* @__PURE__ */ jsx14("main", { className: cx("ps-sidebar__inset", className), ...props });

// src/components/navigation.tsx
import { NavigationMenu as BaseNavigationMenu } from "@base-ui/react/navigation-menu";
import { jsx as jsx15, jsxs as jsxs10 } from "react/jsx-runtime";
function NavigationMenu({ className = "", ...props }) {
  return /* @__PURE__ */ jsx15(BaseNavigationMenu.Root, { className: cx("ps-navigation-menu", className), ...props });
}
function NavigationMenuList({ className = "", ...props }) {
  return /* @__PURE__ */ jsx15(BaseNavigationMenu.List, { className: cx("ps-navigation-menu__list", className), ...props });
}
var NavigationMenuItem = BaseNavigationMenu.Item;
function NavigationMenuTrigger({ className = "", children, ...props }) {
  return /* @__PURE__ */ jsxs10(BaseNavigationMenu.Trigger, { className: cx("ps-navigation-menu__trigger", className), ...props, children: [
    children,
    /* @__PURE__ */ jsx15(BaseNavigationMenu.Icon, { className: "ps-navigation-menu__icon", children: /* @__PURE__ */ jsx15(ChevronIcon, {}) })
  ] });
}
function NavigationMenuContent({ className = "", ...props }) {
  return /* @__PURE__ */ jsx15(BaseNavigationMenu.Content, { className: cx("ps-navigation-menu__content", className), ...props });
}
function NavigationMenuLink({ className = "", ...props }) {
  return /* @__PURE__ */ jsx15(BaseNavigationMenu.Link, { className: cx("ps-navigation-menu__link", className), ...props });
}
function NavigationMenuViewport({ className = "", ...props }) {
  return /* @__PURE__ */ jsx15(BaseNavigationMenu.Portal, { children: /* @__PURE__ */ jsx15(BaseNavigationMenu.Positioner, { sideOffset: 8, className: "ps-navigation-menu__positioner", children: /* @__PURE__ */ jsxs10(BaseNavigationMenu.Popup, { className: cx("ps-navigation-menu__popup", className), ...props, children: [
    /* @__PURE__ */ jsx15(BaseNavigationMenu.Arrow, { className: "ps-floating-arrow" }),
    /* @__PURE__ */ jsx15(BaseNavigationMenu.Viewport, { className: "ps-navigation-menu__viewport" })
  ] }) }) });
}
export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDialog,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
  AspectRatio,
  Avatar,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  ButtonGroup,
  Calendar,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Carousel,
  ChartContainer,
  ChartLegend,
  ChartLegendItem,
  Checkbox,
  Code,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Combobox,
  ComboboxContent,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  Command,
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  DataTable,
  DatePicker,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  EmptyState,
  Field,
  FieldError,
  FieldHint,
  Heading,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Input,
  InputGroup,
  InputGroupAddon,
  InputOTP,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
  Kbd,
  Label3 as Label,
  Lead,
  Loader,
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  Meter,
  Muted,
  NativeSelect,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  Pagination,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationList,
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
  Progress,
  RadioGroup,
  RadioGroupItem,
  ResizablePanels,
  ScrollArea,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  Separator,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  Skeleton,
  Slider,
  Spinner,
  Switch,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea3 as Textarea,
  ToastProvider,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarSeparator,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  useToast
};
//# sourceMappingURL=index.js.map
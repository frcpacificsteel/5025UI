"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Accordion: () => Accordion,
  AccordionContent: () => AccordionContent,
  AccordionItem: () => AccordionItem,
  AccordionTrigger: () => AccordionTrigger,
  Alert: () => Alert,
  AlertDialog: () => AlertDialog,
  AlertDialogClose: () => AlertDialogClose,
  AlertDialogContent: () => AlertDialogContent,
  AlertDialogDescription: () => AlertDialogDescription,
  AlertDialogTitle: () => AlertDialogTitle,
  AlertDialogTrigger: () => AlertDialogTrigger,
  AspectRatio: () => AspectRatio,
  Avatar: () => Avatar,
  Badge: () => Badge,
  Breadcrumb: () => Breadcrumb,
  BreadcrumbItem: () => BreadcrumbItem,
  BreadcrumbLink: () => BreadcrumbLink,
  BreadcrumbList: () => BreadcrumbList,
  BreadcrumbPage: () => BreadcrumbPage,
  BreadcrumbSeparator: () => BreadcrumbSeparator,
  Button: () => Button,
  ButtonGroup: () => ButtonGroup,
  Calendar: () => Calendar,
  Card: () => Card,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  Carousel: () => Carousel,
  ChartContainer: () => ChartContainer,
  ChartLegend: () => ChartLegend,
  ChartLegendItem: () => ChartLegendItem,
  Checkbox: () => Checkbox,
  Code: () => Code,
  Collapsible: () => Collapsible,
  CollapsibleContent: () => CollapsibleContent,
  CollapsibleTrigger: () => CollapsibleTrigger,
  Combobox: () => Combobox,
  ComboboxContent: () => ComboboxContent,
  ComboboxGroup: () => ComboboxGroup,
  ComboboxInput: () => ComboboxInput,
  ComboboxItem: () => ComboboxItem,
  ComboboxLabel: () => ComboboxLabel,
  Command: () => Command,
  ContextMenu: () => ContextMenu,
  ContextMenuContent: () => ContextMenuContent,
  ContextMenuItem: () => ContextMenuItem,
  ContextMenuTrigger: () => ContextMenuTrigger,
  DataTable: () => DataTable,
  DatePicker: () => DatePicker,
  Dialog: () => Dialog,
  DialogClose: () => DialogClose,
  DialogContent: () => DialogContent,
  DialogDescription: () => DialogDescription,
  DialogTitle: () => DialogTitle,
  DialogTrigger: () => DialogTrigger,
  Drawer: () => Drawer,
  DrawerClose: () => DrawerClose,
  DrawerContent: () => DrawerContent,
  DrawerDescription: () => DrawerDescription,
  DrawerTitle: () => DrawerTitle,
  DrawerTrigger: () => DrawerTrigger,
  DropdownMenu: () => DropdownMenu,
  DropdownMenuCheckboxItem: () => DropdownMenuCheckboxItem,
  DropdownMenuContent: () => DropdownMenuContent,
  DropdownMenuGroup: () => DropdownMenuGroup,
  DropdownMenuItem: () => DropdownMenuItem,
  DropdownMenuLabel: () => DropdownMenuLabel,
  DropdownMenuRadioGroup: () => DropdownMenuRadioGroup,
  DropdownMenuRadioItem: () => DropdownMenuRadioItem,
  DropdownMenuSeparator: () => DropdownMenuSeparator,
  DropdownMenuShortcut: () => DropdownMenuShortcut,
  DropdownMenuSub: () => DropdownMenuSub,
  DropdownMenuSubTrigger: () => DropdownMenuSubTrigger,
  DropdownMenuTrigger: () => DropdownMenuTrigger,
  EmptyState: () => EmptyState,
  Field: () => Field,
  FieldError: () => FieldError,
  FieldHint: () => FieldHint,
  Heading: () => Heading,
  HoverCard: () => HoverCard,
  HoverCardContent: () => HoverCardContent,
  HoverCardTrigger: () => HoverCardTrigger,
  Input: () => Input,
  InputGroup: () => InputGroup,
  InputGroupAddon: () => InputGroupAddon,
  InputOTP: () => InputOTP,
  Item: () => Item,
  ItemActions: () => ItemActions,
  ItemContent: () => ItemContent,
  ItemDescription: () => ItemDescription,
  ItemMedia: () => ItemMedia,
  ItemTitle: () => ItemTitle,
  Kbd: () => Kbd,
  Label: () => Label3,
  Lead: () => Lead,
  Loader: () => Loader,
  Menubar: () => Menubar,
  MenubarContent: () => MenubarContent,
  MenubarItem: () => MenubarItem,
  MenubarMenu: () => MenubarMenu,
  MenubarSeparator: () => MenubarSeparator,
  MenubarShortcut: () => MenubarShortcut,
  MenubarTrigger: () => MenubarTrigger,
  Meter: () => Meter,
  Muted: () => Muted,
  NativeSelect: () => NativeSelect,
  NavigationMenu: () => NavigationMenu,
  NavigationMenuContent: () => NavigationMenuContent,
  NavigationMenuItem: () => NavigationMenuItem,
  NavigationMenuLink: () => NavigationMenuLink,
  NavigationMenuList: () => NavigationMenuList,
  NavigationMenuTrigger: () => NavigationMenuTrigger,
  NavigationMenuViewport: () => NavigationMenuViewport,
  NumberField: () => NumberField,
  NumberFieldDecrement: () => NumberFieldDecrement,
  NumberFieldGroup: () => NumberFieldGroup,
  NumberFieldIncrement: () => NumberFieldIncrement,
  NumberFieldInput: () => NumberFieldInput,
  Pagination: () => Pagination,
  PaginationEllipsis: () => PaginationEllipsis,
  PaginationItem: () => PaginationItem,
  PaginationLink: () => PaginationLink,
  PaginationList: () => PaginationList,
  Popover: () => Popover,
  PopoverClose: () => PopoverClose,
  PopoverContent: () => PopoverContent,
  PopoverDescription: () => PopoverDescription,
  PopoverTitle: () => PopoverTitle,
  PopoverTrigger: () => PopoverTrigger,
  Progress: () => Progress,
  RadioGroup: () => RadioGroup,
  RadioGroupItem: () => RadioGroupItem,
  ResizablePanels: () => ResizablePanels,
  ScrollArea: () => ScrollArea,
  Select: () => Select,
  SelectContent: () => SelectContent,
  SelectGroup: () => SelectGroup,
  SelectItem: () => SelectItem,
  SelectLabel: () => SelectLabel,
  SelectSeparator: () => SelectSeparator,
  SelectTrigger: () => SelectTrigger,
  SelectValue: () => SelectValue,
  Separator: () => Separator,
  Sheet: () => Sheet,
  SheetClose: () => SheetClose,
  SheetContent: () => SheetContent,
  SheetDescription: () => SheetDescription,
  SheetTitle: () => SheetTitle,
  SheetTrigger: () => SheetTrigger,
  Sidebar: () => Sidebar,
  SidebarContent: () => SidebarContent,
  SidebarFooter: () => SidebarFooter,
  SidebarGroup: () => SidebarGroup,
  SidebarGroupLabel: () => SidebarGroupLabel,
  SidebarHeader: () => SidebarHeader,
  SidebarInset: () => SidebarInset,
  SidebarMenu: () => SidebarMenu,
  SidebarMenuButton: () => SidebarMenuButton,
  SidebarMenuItem: () => SidebarMenuItem,
  SidebarProvider: () => SidebarProvider,
  SidebarTrigger: () => SidebarTrigger,
  Skeleton: () => Skeleton,
  Slider: () => Slider,
  Spinner: () => Spinner,
  Switch: () => Switch,
  Table: () => Table,
  TableBody: () => TableBody,
  TableCaption: () => TableCaption,
  TableCell: () => TableCell,
  TableFooter: () => TableFooter,
  TableHead: () => TableHead,
  TableHeader: () => TableHeader,
  TableRow: () => TableRow,
  Tabs: () => Tabs,
  TabsContent: () => TabsContent,
  TabsList: () => TabsList,
  TabsTrigger: () => TabsTrigger,
  Textarea: () => Textarea3,
  ToastProvider: () => ToastProvider,
  Toggle: () => Toggle,
  ToggleGroup: () => ToggleGroup,
  ToggleGroupItem: () => ToggleGroupItem,
  Toolbar: () => Toolbar,
  ToolbarButton: () => ToolbarButton,
  ToolbarGroup: () => ToolbarGroup,
  ToolbarSeparator: () => ToolbarSeparator,
  Tooltip: () => Tooltip,
  TooltipContent: () => TooltipContent,
  TooltipProvider: () => TooltipProvider,
  TooltipTrigger: () => TooltipTrigger,
  useToast: () => useToast
});
module.exports = __toCommonJS(index_exports);

// src/components/button.tsx
var React = __toESM(require("react"), 1);
var import_button = require("@base-ui/react/button");
var import_jsx_runtime = require("react/jsx-runtime");
var Button = React.forwardRef(function Button2({ className = "", variant = "primary", size = "md", ...props }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_button.Button, { ref, className: `ps-button ps-button--${variant} ps-button--${size} ${className}`, ...props });
});

// src/components/input.tsx
var React2 = __toESM(require("react"), 1);
var import_jsx_runtime2 = require("react/jsx-runtime");
var Input = React2.forwardRef(function Input2({ className = "", ...props }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("input", { ref, className: `ps-input ${className}`, ...props });
});

// src/components/badge.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function Badge({ className = "", tone = "blue", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: `ps-badge ps-badge--${tone} ${className}`, ...props });
}

// src/components/card.tsx
var React3 = __toESM(require("react"), 1);
var part = (name, tag = "div") => ({ className = "", ...props }) => React3.createElement(tag, { className: `${name} ${className}`, ...props });
var Card = part("ps-card");
var CardHeader = part("ps-card__header");
var CardTitle = part("ps-card__title", "h3");
var CardDescription = part("ps-card__description", "p");
var CardContent = part("ps-card__content");
var CardFooter = part("ps-card__footer");

// src/components/dialog.tsx
var import_dialog = require("@base-ui/react/dialog");
var import_jsx_runtime4 = require("react/jsx-runtime");
var Dialog = import_dialog.Dialog.Root;
var DialogTrigger = import_dialog.Dialog.Trigger;
var DialogTitle = import_dialog.Dialog.Title;
var DialogDescription = import_dialog.Dialog.Description;
var DialogClose = import_dialog.Dialog.Close;
function DialogContent({ className = "", children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_dialog.Dialog.Portal, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dialog.Dialog.Backdrop, { className: "ps-overlay" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dialog.Dialog.Viewport, { className: "ps-overlay__viewport", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dialog.Dialog.Popup, { className: `ps-dialog ${className}`, ...props, children }) })
  ] });
}

// src/components/loader.tsx
var React4 = __toESM(require("react"), 1);
var import_jsx_runtime5 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: `ps-loader${leaving ? " is-leaving" : ""}`, role: "status", "aria-live": "polite", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("span", { className: "ps-loader__mark-shell", "aria-hidden": "true", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("img", { className: "ps-loader__mark", src: markSrc, alt: "" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "ps-loader__shine", style: { "--ps-loader-mark": `url("${markSrc}")` } })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "ps-sr-only", children: label })
  ] });
}

// src/components/form.tsx
var React5 = __toESM(require("react"), 1);
var import_jsx_runtime6 = require("react/jsx-runtime");
var Label = React5.forwardRef(function Label2({ className = "", ...props }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("label", { ref, className: `ps-label ${className}`, ...props });
});
var Textarea = React5.forwardRef(function Textarea2({ className = "", ...props }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("textarea", { ref, className: `ps-textarea ${className}`, ...props });
});
function Field({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: `ps-field ${className}`, ...props });
}
function FieldHint({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: `ps-field__hint ${className}`, ...props });
}
function FieldError({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: `ps-field__error ${className}`, role: "alert", ...props });
}

// src/components/controls.tsx
var React6 = __toESM(require("react"), 1);
var import_icons_react2 = require("@tabler/icons-react");
var import_checkbox = require("@base-ui/react/checkbox");
var import_meter = require("@base-ui/react/meter");
var import_number_field = require("@base-ui/react/number-field");
var import_otp_field = require("@base-ui/react/otp-field");
var import_progress = require("@base-ui/react/progress");
var import_radio = require("@base-ui/react/radio");
var import_radio_group = require("@base-ui/react/radio-group");
var import_slider = require("@base-ui/react/slider");
var import_switch = require("@base-ui/react/switch");
var import_toggle = require("@base-ui/react/toggle");
var import_toggle_group = require("@base-ui/react/toggle-group");

// src/utils.tsx
var import_icons_react = require("@tabler/icons-react");
var import_jsx_runtime7 = require("react/jsx-runtime");
function cx(...values) {
  if (values.some((value) => typeof value === "function")) {
    return (state) => values.map((value) => typeof value === "function" ? value(state) : value).filter(Boolean).join(" ");
  }
  return values.filter(Boolean).join(" ");
}
function CheckIcon({ className = "" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_icons_react.IconCheck, { className, "aria-hidden": "true" });
}
function ChevronIcon({ className = "" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_icons_react.IconChevronDown, { className, "aria-hidden": "true" });
}
function CloseIcon({ className = "" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_icons_react.IconX, { className, "aria-hidden": "true" });
}
function SearchIcon({ className = "" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_icons_react.IconSearch, { className, "aria-hidden": "true" });
}

// src/components/controls.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var Label3 = ({ className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("label", { className: cx("ps-label", className), ...props });
var Textarea3 = React6.forwardRef(function Textarea4({ className = "", ...props }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("textarea", { ref, className: cx("ps-textarea", className), ...props });
});
var NativeSelect = React6.forwardRef(function NativeSelect2({ className = "", children, ...props }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { className: "ps-native-select", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("select", { ref, className: cx("ps-native-select__control", className), ...props, children }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_icons_react2.IconChevronDown, { "aria-hidden": "true" })
  ] });
});
function Checkbox({ className = "", children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_checkbox.Checkbox.Root, { className: cx("ps-checkbox", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_checkbox.Checkbox.Indicator, { className: "ps-checkbox__indicator", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(CheckIcon, {}) }),
    children
  ] });
}
function Switch({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_switch.Switch.Root, { className: cx("ps-switch", className), ...props, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_switch.Switch.Thumb, { className: "ps-switch__thumb" }) });
}
function RadioGroup({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_radio_group.RadioGroup, { className: cx("ps-radio-group", className), ...props });
}
function RadioGroupItem({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_radio.Radio.Root, { className: cx("ps-radio", className), ...props, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_radio.Radio.Indicator, { className: "ps-radio__indicator" }) });
}
function Slider({ className = "", ...props }) {
  const values = Array.isArray(props.defaultValue) ? props.defaultValue : Array.isArray(props.value) ? props.value : [0];
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_slider.Slider.Root, { className: cx("ps-slider", className), ...props, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_slider.Slider.Control, { className: "ps-slider__control", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_slider.Slider.Track, { className: "ps-slider__track", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_slider.Slider.Indicator, { className: "ps-slider__indicator" }) }),
    values.map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_slider.Slider.Thumb, { className: "ps-slider__thumb" }, index))
  ] }) });
}
function Progress({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_progress.Progress.Root, { className: cx("ps-progress", className), ...props, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_progress.Progress.Track, { className: "ps-progress__track", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_progress.Progress.Indicator, { className: "ps-progress__indicator" }) }) });
}
function Meter({ className = "", children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_meter.Meter.Root, { className: cx("ps-meter", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "ps-meter__meta", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_meter.Meter.Label, { children }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_meter.Meter.Value, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_meter.Meter.Track, { className: "ps-meter__track", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_meter.Meter.Indicator, { className: "ps-meter__indicator" }) })
  ] });
}
function Toggle({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_toggle.Toggle, { className: cx("ps-toggle", className), ...props });
}
function ToggleGroup({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_toggle_group.ToggleGroup, { className: cx("ps-toggle-group", className), ...props });
}
function ToggleGroupItem({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_toggle.Toggle, { className: cx("ps-toggle ps-toggle-group__item", className), ...props });
}
var InputGroup = ({ className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: cx("ps-input-group", className), ...props });
var InputGroupAddon = ({ className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: cx("ps-input-group__addon", className), ...props });
var ButtonGroup = ({ className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: cx("ps-button-group", className), role: "group", ...props });
var NumberField = import_number_field.NumberField.Root;
function NumberFieldGroup({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_number_field.NumberField.Group, { className: cx("ps-number-field", className), ...props });
}
function NumberFieldInput({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_number_field.NumberField.Input, { className: cx("ps-number-field__input", className), ...props });
}
function NumberFieldIncrement({ className = "", children = "+", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_number_field.NumberField.Increment, { className: cx("ps-number-field__step", className), ...props, children });
}
function NumberFieldDecrement({ className = "", children = "\u2212", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_number_field.NumberField.Decrement, { className: cx("ps-number-field__step", className), ...props, children });
}
function InputOTP({ className = "", length, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_otp_field.OTPField.Root, { className: cx("ps-otp", className), length, ...props, children: Array.from({ length }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_otp_field.OTPField.Input, { className: "ps-otp__input" }, index)) });
}

// src/components/disclosure.tsx
var import_accordion = require("@base-ui/react/accordion");
var import_collapsible = require("@base-ui/react/collapsible");
var import_tabs = require("@base-ui/react/tabs");
var import_jsx_runtime9 = require("react/jsx-runtime");
var Accordion = import_accordion.Accordion.Root;
function AccordionItem({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_accordion.Accordion.Item, { className: cx("ps-accordion__item", className), ...props });
}
function AccordionTrigger({ className = "", children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_accordion.Accordion.Header, { className: "ps-accordion__header", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_accordion.Accordion.Trigger, { className: cx("ps-accordion__trigger", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ChevronIcon, { className: "ps-accordion__chevron" })
  ] }) });
}
function AccordionContent({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_accordion.Accordion.Panel, { className: cx("ps-accordion__panel", className), ...props });
}
var Collapsible = import_collapsible.Collapsible.Root;
function CollapsibleTrigger({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_collapsible.Collapsible.Trigger, { className: cx("ps-collapsible__trigger", className), ...props });
}
function CollapsibleContent({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_collapsible.Collapsible.Panel, { className: cx("ps-collapsible__panel", className), ...props });
}
var Tabs = import_tabs.Tabs.Root;
function TabsList({ className = "", children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_tabs.Tabs.List, { className: cx("ps-tabs__list", className), ...props, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_tabs.Tabs.Indicator, { className: "ps-tabs__indicator" })
  ] });
}
function TabsTrigger({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_tabs.Tabs.Tab, { className: cx("ps-tabs__trigger", className), ...props });
}
function TabsContent({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_tabs.Tabs.Panel, { className: cx("ps-tabs__panel", className), ...props });
}

// src/components/overlays.tsx
var import_alert_dialog = require("@base-ui/react/alert-dialog");
var import_dialog2 = require("@base-ui/react/dialog");
var import_drawer = require("@base-ui/react/drawer");
var import_popover = require("@base-ui/react/popover");
var import_preview_card = require("@base-ui/react/preview-card");
var import_tooltip = require("@base-ui/react/tooltip");
var import_jsx_runtime10 = require("react/jsx-runtime");
var AlertDialog = import_alert_dialog.AlertDialog.Root;
var AlertDialogTrigger = import_alert_dialog.AlertDialog.Trigger;
var AlertDialogTitle = import_alert_dialog.AlertDialog.Title;
var AlertDialogDescription = import_alert_dialog.AlertDialog.Description;
var AlertDialogClose = import_alert_dialog.AlertDialog.Close;
function AlertDialogContent({ className = "", children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_alert_dialog.AlertDialog.Portal, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_alert_dialog.AlertDialog.Backdrop, { className: "ps-overlay" }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_alert_dialog.AlertDialog.Viewport, { className: "ps-overlay__viewport", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_alert_dialog.AlertDialog.Popup, { className: cx("ps-dialog ps-alert-dialog", className), ...props, children }) })
  ] });
}
var Popover = import_popover.Popover.Root;
var PopoverTrigger = import_popover.Popover.Trigger;
var PopoverTitle = import_popover.Popover.Title;
var PopoverDescription = import_popover.Popover.Description;
var PopoverClose = import_popover.Popover.Close;
function PopoverContent({ className = "", sideOffset = 8, children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_popover.Popover.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_popover.Popover.Positioner, { sideOffset, className: "ps-positioner", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_popover.Popover.Popup, { className: cx("ps-popover", className), ...props, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_popover.Popover.Arrow, { className: "ps-floating-arrow" })
  ] }) }) });
}
var TooltipProvider = import_tooltip.Tooltip.Provider;
var Tooltip = import_tooltip.Tooltip.Root;
var TooltipTrigger = import_tooltip.Tooltip.Trigger;
function TooltipContent({ className = "", sideOffset = 7, children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_tooltip.Tooltip.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_tooltip.Tooltip.Positioner, { sideOffset, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_tooltip.Tooltip.Popup, { className: cx("ps-tooltip", className), ...props, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_tooltip.Tooltip.Arrow, { className: "ps-floating-arrow" })
  ] }) }) });
}
var HoverCard = import_preview_card.PreviewCard.Root;
var HoverCardTrigger = import_preview_card.PreviewCard.Trigger;
function HoverCardContent({ className = "", sideOffset = 8, children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_preview_card.PreviewCard.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_preview_card.PreviewCard.Positioner, { sideOffset, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_preview_card.PreviewCard.Popup, { className: cx("ps-hover-card", className), ...props, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_preview_card.PreviewCard.Arrow, { className: "ps-floating-arrow" })
  ] }) }) });
}
var Drawer = import_drawer.Drawer.Root;
var DrawerTrigger = import_drawer.Drawer.Trigger;
var DrawerClose = import_drawer.Drawer.Close;
var DrawerTitle = import_drawer.Drawer.Title;
var DrawerDescription = import_drawer.Drawer.Description;
function DrawerContent({ className = "", children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_drawer.Drawer.Portal, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_drawer.Drawer.Backdrop, { className: "ps-overlay" }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_drawer.Drawer.Viewport, { className: "ps-drawer__viewport", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_drawer.Drawer.Popup, { className: cx("ps-drawer", className), ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "ps-drawer__handle", "aria-hidden": "true" }),
      children
    ] }) })
  ] });
}
var Sheet = import_dialog2.Dialog.Root;
var SheetTrigger = import_dialog2.Dialog.Trigger;
var SheetClose = import_dialog2.Dialog.Close;
var SheetTitle = import_dialog2.Dialog.Title;
var SheetDescription = import_dialog2.Dialog.Description;
function SheetContent({ className = "", children, side = "right", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_dialog2.Dialog.Portal, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_dialog2.Dialog.Backdrop, { className: "ps-overlay" }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_dialog2.Dialog.Viewport, { className: cx("ps-sheet__viewport", `ps-sheet__viewport--${side}`), children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_dialog2.Dialog.Popup, { className: cx("ps-sheet", className), ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_dialog2.Dialog.Close, { className: "ps-icon-button ps-sheet__close", "aria-label": "Close", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(CloseIcon, {}) }),
      children
    ] }) })
  ] });
}

// src/components/menus.tsx
var import_context_menu = require("@base-ui/react/context-menu");
var import_menu = require("@base-ui/react/menu");
var import_menubar = require("@base-ui/react/menubar");
var import_toolbar = require("@base-ui/react/toolbar");
var import_jsx_runtime11 = require("react/jsx-runtime");
var DropdownMenu = import_menu.Menu.Root;
var DropdownMenuTrigger = import_menu.Menu.Trigger;
var DropdownMenuGroup = import_menu.Menu.Group;
var DropdownMenuRadioGroup = import_menu.Menu.RadioGroup;
var DropdownMenuSub = import_menu.Menu.SubmenuRoot;
function DropdownMenuContent({ className = "", sideOffset = 7, children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_menu.Menu.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_menu.Menu.Positioner, { sideOffset, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_menu.Menu.Popup, { className: cx("ps-menu", className), ...props, children }) }) });
}
function DropdownMenuItem({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_menu.Menu.Item, { className: cx("ps-menu__item", className), ...props });
}
function DropdownMenuCheckboxItem({ className = "", children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_menu.Menu.CheckboxItem, { className: cx("ps-menu__item ps-menu__item--choice", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_menu.Menu.CheckboxItemIndicator, { className: "ps-menu__indicator", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(CheckIcon, {}) }),
    children
  ] });
}
function DropdownMenuRadioItem({ className = "", children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_menu.Menu.RadioItem, { className: cx("ps-menu__item ps-menu__item--choice", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_menu.Menu.RadioItemIndicator, { className: "ps-menu__indicator", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", {}) }),
    children
  ] });
}
function DropdownMenuLabel({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_menu.Menu.GroupLabel, { className: cx("ps-menu__label", className), ...props });
}
function DropdownMenuSeparator({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_menu.Menu.Separator, { className: cx("ps-menu__separator", className), ...props });
}
function DropdownMenuSubTrigger({ className = "", children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_menu.Menu.SubmenuTrigger, { className: cx("ps-menu__item", className), ...props, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(ChevronIcon, { className: "ps-menu__chevron" })
  ] });
}
var DropdownMenuShortcut = ({ className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: cx("ps-menu__shortcut", className), ...props });
var ContextMenu = import_context_menu.ContextMenu.Root;
var ContextMenuTrigger = import_context_menu.ContextMenu.Trigger;
function ContextMenuContent({ className = "", children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_context_menu.ContextMenu.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_context_menu.ContextMenu.Positioner, { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_context_menu.ContextMenu.Popup, { className: cx("ps-menu", className), ...props, children }) }) });
}
function ContextMenuItem({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_context_menu.ContextMenu.Item, { className: cx("ps-menu__item", className), ...props });
}
function Menubar({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_menubar.Menubar, { className: cx("ps-menubar", className), ...props });
}
var MenubarMenu = import_menu.Menu.Root;
function MenubarTrigger({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_menu.Menu.Trigger, { className: cx("ps-menubar__trigger", className), ...props });
}
var MenubarContent = DropdownMenuContent;
var MenubarItem = DropdownMenuItem;
var MenubarSeparator = DropdownMenuSeparator;
var MenubarShortcut = DropdownMenuShortcut;
function Toolbar({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_toolbar.Toolbar.Root, { className: cx("ps-toolbar", className), ...props });
}
function ToolbarGroup({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_toolbar.Toolbar.Group, { className: cx("ps-toolbar__group", className), ...props });
}
function ToolbarButton({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_toolbar.Toolbar.Button, { className: cx("ps-toolbar__button", className), ...props });
}
function ToolbarSeparator({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_toolbar.Toolbar.Separator, { className: cx("ps-toolbar__separator", className), ...props });
}

// src/components/selection.tsx
var React7 = __toESM(require("react"), 1);
var import_combobox = require("@base-ui/react/combobox");
var import_select = require("@base-ui/react/select");
var import_jsx_runtime12 = require("react/jsx-runtime");
var Select = import_select.Select.Root;
function SelectTrigger({ className = "", children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_select.Select.Trigger, { className: cx("ps-select__trigger", className), ...props, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_select.Select.Icon, { className: "ps-select__icon", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ChevronIcon, {}) })
  ] });
}
function SelectValue({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_select.Select.Value, { className: cx("ps-select__value", className), ...props });
}
function SelectContent({ className = "", sideOffset = 7, children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_select.Select.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_select.Select.Positioner, { sideOffset, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_select.Select.Popup, { className: cx("ps-select__popup", className), ...props, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_select.Select.List, { children }) }) }) });
}
function SelectItem({ className = "", children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_select.Select.Item, { className: cx("ps-select__item", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_select.Select.ItemIndicator, { className: "ps-select__indicator", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(CheckIcon, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_select.Select.ItemText, { children })
  ] });
}
function SelectGroup({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_select.Select.Group, { className: cx("ps-select__group", className), ...props });
}
function SelectLabel({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_select.Select.GroupLabel, { className: cx("ps-select__label", className), ...props });
}
function SelectSeparator({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_select.Select.Separator, { className: cx("ps-select__separator", className), ...props });
}
var Combobox = import_combobox.Combobox.Root;
function ComboboxInput({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_combobox.Combobox.InputGroup, { className: "ps-combobox__input-group", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SearchIcon, { className: "ps-combobox__search" }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_combobox.Combobox.Input, { className: cx("ps-combobox__input", className), ...props }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_combobox.Combobox.Clear, { className: "ps-combobox__clear", "aria-label": "Clear", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(CloseIcon, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_combobox.Combobox.Trigger, { className: "ps-combobox__trigger", "aria-label": "Show options", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ChevronIcon, {}) })
  ] });
}
function ComboboxContent({ className = "", sideOffset = 7, children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_combobox.Combobox.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_combobox.Combobox.Positioner, { sideOffset, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_combobox.Combobox.Popup, { className: cx("ps-combobox__popup", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_combobox.Combobox.Empty, { className: "ps-combobox__empty", children: "No matches." }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_combobox.Combobox.List, { children })
  ] }) }) });
}
function ComboboxItem({ className = "", children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_combobox.Combobox.Item, { className: cx("ps-combobox__item", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_combobox.Combobox.ItemIndicator, { className: "ps-combobox__indicator", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(CheckIcon, {}) }),
    children
  ] });
}
function ComboboxGroup({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_combobox.Combobox.Group, { className: cx("ps-combobox__group", className), ...props });
}
function ComboboxLabel({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_combobox.Combobox.GroupLabel, { className: cx("ps-combobox__label", className), ...props });
}
function Command({ items, onSelect, placeholder = "Search commands\u2026", empty = "No commands found.", className = "" }) {
  const [query, setQuery] = React7.useState("");
  const filtered = items.filter((item) => `${item.label} ${item.keywords ?? ""}`.toLowerCase().includes(query.toLowerCase()));
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: cx("ps-command", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "ps-command__search", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SearchIcon, {}),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("input", { value: query, onChange: (event) => setQuery(event.target.value), placeholder, "aria-label": placeholder })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "ps-command__list", role: "listbox", children: filtered.length ? filtered.map((item) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("button", { type: "button", role: "option", "aria-selected": "false", onClick: () => onSelect?.(item.value), children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { children: item.label }),
      item.group && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("small", { children: item.group })
    ] }, item.value)) : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { children: empty }) })
  ] });
}

// src/components/structure.tsx
var React8 = __toESM(require("react"), 1);
var import_avatar = require("@base-ui/react/avatar");
var import_scroll_area = require("@base-ui/react/scroll-area");
var import_separator = require("@base-ui/react/separator");
var import_jsx_runtime13 = require("react/jsx-runtime");
function AspectRatio({ ratio = 16 / 9, className = "", style, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: cx("ps-aspect-ratio", className), style: { ...style, aspectRatio: ratio }, ...props });
}
function Avatar({ className = "", name, src, ...props }) {
  const initials = name.split(/\s+/).map((word) => word[0]).slice(0, 2).join("").toUpperCase();
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_avatar.Avatar.Root, { className: cx("ps-avatar", className), "aria-label": name, ...props, children: [
    src && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_avatar.Avatar.Image, { className: "ps-avatar__image", src, alt: "" }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_avatar.Avatar.Fallback, { className: "ps-avatar__fallback", children: initials })
  ] });
}
function Separator({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_separator.Separator, { className: cx("ps-separator", className), ...props });
}
var Skeleton = ({ className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: cx("ps-skeleton", className), "aria-hidden": "true", ...props });
var Spinner = ({ className = "", label = "Loading", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: cx("ps-spinner", className), role: "status", "aria-label": label, ...props });
function Alert({ title, children, tone = "info", className = "" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: cx("ps-alert", `ps-alert--${tone}`, className), role: tone === "danger" ? "alert" : "status", children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "ps-alert__signal", "aria-hidden": "true" }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("strong", { children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { children })
    ] })
  ] });
}
function EmptyState({ title, children, action, icon, className = "" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: cx("ps-empty", className), children: [
    icon && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "ps-empty__icon", "aria-hidden": "true", children: icon }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h3", { children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { children }),
    action && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "ps-empty__action", children: action })
  ] });
}
var Kbd = ({ className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("kbd", { className: cx("ps-kbd", className), ...props });
var Code = ({ className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("code", { className: cx("ps-code", className), ...props });
var Muted = ({ className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: cx("ps-muted", className), ...props });
var Lead = ({ className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: cx("ps-lead", className), ...props });
var Heading = ({ level = 2, className = "", ...props }) => React8.createElement(`h${level}`, { className: cx(`ps-heading ps-heading--${level}`, className), ...props });
var Breadcrumb = ({ className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("nav", { "aria-label": "Breadcrumb", className: cx("ps-breadcrumb", className), ...props });
var BreadcrumbList = ({ className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("ol", { className: cx("ps-breadcrumb__list", className), ...props });
var BreadcrumbItem = ({ className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("li", { className: cx("ps-breadcrumb__item", className), ...props });
var BreadcrumbLink = ({ className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("a", { className: cx("ps-breadcrumb__link", className), ...props });
var BreadcrumbPage = ({ className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: cx("ps-breadcrumb__page", className), "aria-current": "page", ...props });
var BreadcrumbSeparator = ({ className = "", children = /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ChevronIcon, {}), ...props }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("li", { className: cx("ps-breadcrumb__separator", className), "aria-hidden": "true", ...props, children });
var Pagination = ({ className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("nav", { "aria-label": "Pagination", className: cx("ps-pagination", className), ...props });
var PaginationList = ({ className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("ul", { className: cx("ps-pagination__list", className), ...props });
var PaginationItem = ({ className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("li", { className: cx("ps-pagination__item", className), ...props });
var PaginationLink = ({ active, className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("a", { className: cx("ps-pagination__link", active && "is-active", className), "aria-current": active ? "page" : void 0, ...props });
var PaginationEllipsis = () => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "ps-pagination__ellipsis", "aria-hidden": "true", children: "\u2022\u2022\u2022" });
var Table = ({ className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "ps-table-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("table", { className: cx("ps-table", className), ...props }) });
var TableHeader = (props) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("thead", { ...props });
var TableBody = (props) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("tbody", { ...props });
var TableFooter = (props) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("tfoot", { ...props });
var TableRow = (props) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("tr", { ...props });
var TableHead = (props) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("th", { ...props });
var TableCell = (props) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("td", { ...props });
var TableCaption = (props) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("caption", { ...props });
function ScrollArea({ className = "", children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_scroll_area.ScrollArea.Root, { className: cx("ps-scroll-area", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_scroll_area.ScrollArea.Viewport, { className: "ps-scroll-area__viewport", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_scroll_area.ScrollArea.Content, { children }) }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_scroll_area.ScrollArea.Scrollbar, { className: "ps-scroll-area__scrollbar", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_scroll_area.ScrollArea.Thumb, { className: "ps-scroll-area__thumb" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_scroll_area.ScrollArea.Corner, {})
  ] });
}
var Item = ({ className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: cx("ps-item", className), ...props });
var ItemMedia = ({ className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: cx("ps-item__media", className), ...props });
var ItemContent = ({ className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: cx("ps-item__content", className), ...props });
var ItemTitle = ({ className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h3", { className: cx("ps-item__title", className), ...props });
var ItemDescription = ({ className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: cx("ps-item__description", className), ...props });
var ItemActions = ({ className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: cx("ps-item__actions", className), ...props });

// src/components/advanced.tsx
var React9 = __toESM(require("react"), 1);
var import_icons_react3 = require("@tabler/icons-react");
var import_jsx_runtime14 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: cx("ps-calendar", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "ps-calendar__header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("button", { type: "button", "aria-label": "Previous month", onClick: () => setView(new Date(view.getFullYear(), view.getMonth() - 1, 1)), children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_icons_react3.IconChevronLeft, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("strong", { "aria-live": "polite", children: monthLabel.format(view) }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("button", { type: "button", "aria-label": "Next month", onClick: () => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1)), children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_icons_react3.IconChevronRight, {}) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "ps-calendar__grid", children: [
      ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "ps-calendar__weekday", children: day }, day)),
      cells.map((date) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("button", { type: "button", className: cx(date.getMonth() !== view.getMonth() && "is-outside", selected && sameDay(date, selected) && "is-selected", sameDay(date, /* @__PURE__ */ new Date()) && "is-today"), "aria-pressed": selected ? sameDay(date, selected) : false, onClick: () => choose(date), children: date.getDate() }, date.toISOString()))
    ] })
  ] });
}
function DatePicker({ value, onValueChange, placeholder = "Choose date" }) {
  const [open, setOpen] = React9.useState(false);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(PopoverTrigger, { render: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Button, { variant: "outline", className: "ps-date-picker" }), children: [
      value ? dateLabel.format(value) : placeholder,
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(ChevronIcon, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(PopoverContent, { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Calendar, { value, onValueChange: (date) => {
      onValueChange?.(date);
      setOpen(false);
    } }) })
  ] });
}
function Carousel({ children, className = "", label = "Carousel" }) {
  const viewport = React9.useRef(null);
  const move = (direction) => viewport.current?.scrollBy({ left: direction * viewport.current.clientWidth * 0.86, behavior: "smooth" });
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("section", { className: cx("ps-carousel", className), "aria-label": label, children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "ps-carousel__viewport", ref: viewport, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "ps-carousel__track", children: React9.Children.map(children, (child) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "ps-carousel__slide", children: child })) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "ps-carousel__controls", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("button", { type: "button", onClick: () => move(-1), "aria-label": "Previous slide", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_icons_react3.IconChevronLeft, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("button", { type: "button", onClick: () => move(1), "aria-label": "Next slide", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_icons_react3.IconChevronRight, {}) })
    ] })
  ] });
}
function DataTable({ columns, rows, caption, empty = "No results." }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "ps-table-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("table", { className: "ps-table ps-data-table", children: [
    caption && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("caption", { children: caption }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("tr", { children: columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("th", { style: { textAlign: column.align }, children: column.header }, String(column.key))) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("tbody", { children: rows.length ? rows.map((row, rowIndex) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("tr", { children: columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("td", { style: { textAlign: column.align }, children: column.cell ? column.cell(row) : String(row[String(column.key)] ?? "") }, String(column.key))) }, row.id ?? rowIndex)) : /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("td", { colSpan: columns.length, className: "ps-data-table__empty", children: empty }) }) })
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
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { ref: root, className: cx("ps-resizable", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { style: { flexBasis: `${split}%` }, children: first }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "ps-resizable__handle", role: "separator", "aria-orientation": "vertical", "aria-valuemin": min, "aria-valuemax": 100 - min, "aria-valuenow": Math.round(split), tabIndex: 0, onPointerDown: start, onKeyDown: (event) => {
      if (event.key === "ArrowLeft") nudge(-2);
      if (event.key === "ArrowRight") nudge(2);
    }, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { style: { flexBasis: `${100 - split}%` }, children: second })
  ] });
}
var ChartContainer = ({ className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: cx("ps-chart", className), ...props });
var ChartLegend = ({ className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("ul", { className: cx("ps-chart__legend", className), ...props });
var ChartLegendItem = ({ color, className = "", style, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("li", { className: cx("ps-chart__legend-item", className), style: { ...style, "--ps-chart-series": color }, ...props });
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
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(ToastContext.Provider, { value: { toast }, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "ps-toaster", role: "region", "aria-label": "Notifications", children: toasts.map((item) => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: cx("ps-toast", `ps-toast--${item.tone ?? "default"}`), role: "status", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("strong", { children: item.title }),
        item.description && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { children: item.description })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("button", { type: "button", onClick: () => remove(item.id), "aria-label": "Dismiss", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CloseIcon, {}) })
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
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(SidebarContext.Provider, { value: { open, setOpen }, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: cx("ps-sidebar-layout", !open && "is-collapsed"), children }) });
}
function Sidebar({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("aside", { className: cx("ps-sidebar", className), ...props });
}
var SidebarHeader = ({ className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: cx("ps-sidebar__header", className), ...props });
var SidebarContent = ({ className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: cx("ps-sidebar__content", className), ...props });
var SidebarFooter = ({ className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: cx("ps-sidebar__footer", className), ...props });
var SidebarGroup = ({ className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("section", { className: cx("ps-sidebar__group", className), ...props });
var SidebarGroupLabel = ({ className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h3", { className: cx("ps-sidebar__label", className), ...props });
var SidebarMenu = ({ className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("ul", { className: cx("ps-sidebar__menu", className), ...props });
var SidebarMenuItem = ({ className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("li", { className: cx("ps-sidebar__menu-item", className), ...props });
var SidebarMenuButton = ({ active, className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("button", { className: cx("ps-sidebar__menu-button", active && "is-active", className), ...props });
function SidebarTrigger({ className = "", ...props }) {
  const context = React9.useContext(SidebarContext);
  if (!context) throw new Error("SidebarTrigger must be used inside SidebarProvider");
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("button", { type: "button", className: cx("ps-sidebar__trigger", className), "aria-label": "Toggle sidebar", onClick: () => context.setOpen((open) => !open), ...props, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_icons_react3.IconMenu2, {}) });
}
var SidebarInset = ({ className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("main", { className: cx("ps-sidebar__inset", className), ...props });

// src/components/navigation.tsx
var import_navigation_menu = require("@base-ui/react/navigation-menu");
var import_jsx_runtime15 = require("react/jsx-runtime");
function NavigationMenu({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_navigation_menu.NavigationMenu.Root, { className: cx("ps-navigation-menu", className), ...props });
}
function NavigationMenuList({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_navigation_menu.NavigationMenu.List, { className: cx("ps-navigation-menu__list", className), ...props });
}
var NavigationMenuItem = import_navigation_menu.NavigationMenu.Item;
function NavigationMenuTrigger({ className = "", children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_navigation_menu.NavigationMenu.Trigger, { className: cx("ps-navigation-menu__trigger", className), ...props, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_navigation_menu.NavigationMenu.Icon, { className: "ps-navigation-menu__icon", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ChevronIcon, {}) })
  ] });
}
function NavigationMenuContent({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_navigation_menu.NavigationMenu.Content, { className: cx("ps-navigation-menu__content", className), ...props });
}
function NavigationMenuLink({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_navigation_menu.NavigationMenu.Link, { className: cx("ps-navigation-menu__link", className), ...props });
}
function NavigationMenuViewport({ className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_navigation_menu.NavigationMenu.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_navigation_menu.NavigationMenu.Positioner, { sideOffset: 8, className: "ps-navigation-menu__positioner", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_navigation_menu.NavigationMenu.Popup, { className: cx("ps-navigation-menu__popup", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_navigation_menu.NavigationMenu.Arrow, { className: "ps-floating-arrow" }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_navigation_menu.NavigationMenu.Viewport, { className: "ps-navigation-menu__viewport" })
  ] }) }) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
  Label,
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
  Textarea,
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
});
//# sourceMappingURL=index.cjs.map
import * as React from 'react';
import { IconArrowLeft, IconArrowRight, IconCheck, IconCopy } from '@tabler/icons-react';
import * as UI from '@pacific-steel-5025/ui';
import logo from '../Logo-H-Dark.svg';
import logoLight from '../Logo-H-Light.svg';
import logoIcon from '../Logo-Icon.svg';
import './showcase.css';

const robotOptions = ['Alpha', 'Beta', 'Practice bot'];
const commandItems: UI.CommandItem[] = [
  { value: 'scouting', label: 'Open scouting dashboard', group: 'Navigate', keywords: 'match data' },
  { value: 'pit', label: 'Create pit checklist', group: 'Create', keywords: 'inspection' },
  { value: 'schedule', label: 'View event schedule', group: 'Navigate', keywords: 'matches' },
  { value: 'settings', label: 'Team settings', group: 'System', keywords: 'preferences' },
];

const nav = [
  ['foundations', 'Foundations'], ['actions', 'Actions'], ['forms', 'Forms'],
  ['navigation', 'Navigation'], ['data', 'Data display'], ['feedback', 'Feedback'],
  ['overlays', 'Overlays'], ['layout', 'Layout'],
];

function Icon({ children }: { children: React.ReactNode }) { return <span className="demo-icon" aria-hidden="true">{children}</span>; }
function Demo({ title, note, children, wide = false }: { title: string; note?: string; children: React.ReactNode; wide?: boolean }) { return <article className={`demo${wide ? ' demo--wide' : ''}`}><div className="demo__head"><div><h3>{title}</h3>{note && <p>{note}</p>}</div><span>5025UI</span></div><div className="demo__stage">{children}</div></article>; }
function Section({ id, title, description, children }: { id: string; eyebrow?: string; title: string; description: string; children: React.ReactNode }) { return <section id={id} className="catalog-section"><header className="catalog-section__head"><h2>{title}</h2><p>{description}</p></header><div className="catalog-grid">{children}</div></section>; }

function ToastDemo() { const { toast } = UI.useToast(); return <UI.Button variant="outline" onClick={() => toast({ title: 'Checklist saved', description: 'Robot readiness is synced for match 42.', tone: 'success' })}>Send notification</UI.Button>; }

function ShowcaseBody() {
  const [loaderRun, setLoaderRun] = React.useState(0);
  const [date, setDate] = React.useState<Date | undefined>(new Date(2026, 2, 14));
  const [advancedOpen, setAdvancedOpen] = React.useState(false);
  const [dark, setDark] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('foundations');
  const [copied, setCopied] = React.useState(false);
  React.useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    return () => { delete document.documentElement.dataset.theme; };
  }, [dark]);
  React.useEffect(() => {
    const sectionIds = nav.map(([id]) => id);
    const updateFromHash = () => {
      const hash = window.location.hash.slice(1);
      if (sectionIds.includes(hash)) setActiveSection(hash);
    };
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActiveSection(visible[0].target.id);
    }, { rootMargin: '-18% 0px -68%', threshold: 0 });
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    updateFromHash();
    window.addEventListener('hashchange', updateFromHash);
    return () => { observer.disconnect(); window.removeEventListener('hashchange', updateFromHash); };
  }, []);
  const copyInstall = async () => {
    await navigator.clipboard?.writeText('npm install @pacific-steel-5025/ui');
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };
  return <>
    <UI.Loader key={loaderRun} markSrc={logoIcon} />
    <div className="catalog-shell" id="top">
      <aside className="catalog-rail">
        <a className="catalog-brand" href="#top"><img src={dark ? logoLight : logo} alt="Pacific Steel 5025" /><span>UI Library</span></a>
        <nav aria-label="Component sections">{nav.map(([href, label]) => <a key={href} href={`#${href}`} aria-current={activeSection === href ? 'location' : undefined} onClick={() => setActiveSection(href)}>{label}</a>)}</nav>
        <label className="catalog-section-picker"><span>Browse components</span><select value={activeSection} onChange={(event) => { const section = event.target.value; setActiveSection(section); window.location.hash = section; }}>{nav.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label>
        <div className="catalog-rail__meta"><b>React · Base UI</b><span>Tailwind v4 ready</span><code>v0.1.0</code></div>
      </aside>

      <main className="catalog-main">
        <header className="catalog-topbar"><div><span className="status-dot" />System ready</div><div className="catalog-topbar__actions"><UI.Button variant="ghost" size="sm" aria-pressed={dark} onClick={() => setDark((value) => !value)}>{dark ? 'Light' : 'Dark'}</UI.Button><a href="#foundations">Token reference</a></div></header>

        <section className="catalog-hero">
          <div className="catalog-hero__copy"><h1>A shared interface system for team software.</h1><p>React components, CSS variables, and Base UI behavior for scouting, field operations, outreach, and robot software.</p></div>
          <aside className="catalog-quickstart" aria-label="Get started"><span>GET STARTED</span><h2>Use it in a project</h2><p>Install the package, import the styles once, then compose the shared primitives.</p><code>npm install @pacific-steel-5025/ui</code><UI.Button size="sm" variant="outline" onClick={copyInstall}>{copied ? <IconCheck /> : <IconCopy />}{copied ? 'Copied' : 'Copy install command'}</UI.Button><a href="#foundations">View tokens and foundations</a></aside>
        </section>

        <Section id="foundations" eyebrow="01 / SYSTEM" title="Foundations" description="The same restrained type, color, spacing, and status language used across the wiki.">
          <Demo title="Typography" wide><div className="type-spec"><UI.Heading level={1}>Drive with intent.</UI.Heading><UI.Heading level={2}>System overview</UI.Heading><UI.Lead>Clear hierarchy without decorative noise. Headers use Encode Sans Semi Expanded; interface copy stays in Encode Sans.</UI.Lead><p>Body text remains compact and readable for dense operational tools. Use <UI.Code>--ps-ink-muted</UI.Code> for secondary context and <UI.Kbd>⌘ K</UI.Kbd> for shortcuts.</p></div></Demo>
          <Demo title="Brand palette"><div className="token-swatches">{[['Red','var(--ps-red-100)'],['Del Mar','var(--ps-del-mar-blue-100)'],['Pacific','var(--ps-pacific-blue-100)'],['Gold','var(--ps-gold-100)'],['Slate','var(--ps-slate-100)']].map(([name,color]) => <div key={name}><i style={{background:color}}/><span>{name}</span></div>)}</div></Demo>
          <Demo title="Status & identity"><div className="stack"><div className="row"><UI.Badge>Ready</UI.Badge><UI.Badge tone="gold">Queued</UI.Badge><UI.Badge tone="red">Blocked</UI.Badge><UI.Badge tone="slate">Draft</UI.Badge></div><div className="row"><UI.Avatar name="Amelia Rivera"/><UI.Avatar name="Diego Martinez"/><UI.Avatar name="Pacific Steel"/></div></div></Demo>
          <Demo title="Application loader"><div className="stack"><UI.Muted>Use the logo treatment for application startup—not routine content loading.</UI.Muted><UI.Button variant="outline" size="sm" onClick={() => setLoaderRun((run) => run + 1)}>Replay startup loader</UI.Button></div></Demo>
        </Section>

        <Section id="actions" eyebrow="02 / INPUT" title="Actions" description="Buttons and compact controls communicate priority without oversized treatments or excessive decoration.">
          <Demo title="Buttons" wide><div className="stack"><div className="row"><UI.Button>Save match</UI.Button><UI.Button variant="secondary">Deploy</UI.Button><UI.Button variant="outline">Preview</UI.Button><UI.Button variant="ghost">Cancel</UI.Button><UI.Button variant="danger">Remove</UI.Button></div><div className="row"><UI.Button size="sm">Small</UI.Button><UI.Button>Default</UI.Button><UI.Button size="lg">Large control</UI.Button><UI.Button disabled>Unavailable</UI.Button></div></div></Demo>
          <Demo title="Grouped controls"><div className="stack"><UI.ButtonGroup><UI.Button variant="outline">Week</UI.Button><UI.Button variant="outline">Event</UI.Button><UI.Button variant="outline">Season</UI.Button></UI.ButtonGroup><UI.ToggleGroup defaultValue={['bold']}><UI.ToggleGroupItem value="bold">B</UI.ToggleGroupItem><UI.ToggleGroupItem value="italic"><i>I</i></UI.ToggleGroupItem><UI.ToggleGroupItem value="code">{'</>'}</UI.ToggleGroupItem></UI.ToggleGroup></div></Demo>
          <Demo title="Toolbar"><UI.Toolbar aria-label="Editor"><UI.ToolbarGroup><UI.ToolbarButton>Undo</UI.ToolbarButton><UI.ToolbarButton>Redo</UI.ToolbarButton></UI.ToolbarGroup><UI.ToolbarSeparator/><UI.ToolbarGroup><UI.ToolbarButton>Share</UI.ToolbarButton><UI.ToolbarButton>Export</UI.ToolbarButton></UI.ToolbarGroup></UI.Toolbar></Demo>
        </Section>

        <Section id="forms" eyebrow="03 / CONTROL" title="Forms" description="Accessible Base UI primitives with deliberate states for real team workflows.">
          <Demo title="Text fields"><div className="form-stack"><UI.Field><UI.Label htmlFor="team-email">Team email</UI.Label><UI.Input id="team-email" placeholder="mentor@team5025.com"/><UI.FieldHint>Used for event notifications.</UI.FieldHint></UI.Field><UI.Field><UI.Label htmlFor="notes">Match notes</UI.Label><UI.Textarea id="notes" placeholder="Record what changed between cycles…"/></UI.Field><UI.Field><UI.Label htmlFor="team-key">Team key</UI.Label><UI.Input id="team-key" aria-invalid="true" defaultValue="PS-"/><UI.FieldError>Enter the full six-character key.</UI.FieldError></UI.Field><UI.InputGroup><UI.InputGroupAddon>#</UI.InputGroupAddon><UI.Input aria-label="Team number" defaultValue="5025"/><UI.Button>Find</UI.Button></UI.InputGroup></div></Demo>
          <Demo title="Selection"><div className="form-stack"><UI.Field><UI.Label>Robot</UI.Label><UI.Select defaultValue="alpha"><UI.SelectTrigger><UI.SelectValue /></UI.SelectTrigger><UI.SelectContent><UI.SelectGroup><UI.SelectLabel>Competition robots</UI.SelectLabel>{robotOptions.slice(0,2).map((option) => <UI.SelectItem key={option} value={option.toLowerCase()}>{option}</UI.SelectItem>)}</UI.SelectGroup><UI.SelectSeparator/><UI.SelectItem value="practice-bot">Practice bot</UI.SelectItem></UI.SelectContent></UI.Select></UI.Field><UI.Field><UI.Label>Quick find</UI.Label><UI.Combobox items={robotOptions}><UI.ComboboxInput placeholder="Search robots"/><UI.ComboboxContent><UI.ComboboxGroup><UI.ComboboxLabel>Available robots</UI.ComboboxLabel>{robotOptions.map((option) => <UI.ComboboxItem key={option} value={option}>{option}</UI.ComboboxItem>)}</UI.ComboboxGroup></UI.ComboboxContent></UI.Combobox></UI.Field><UI.NativeSelect aria-label="Alliance station" defaultValue="red-2"><option value="red-1">Red 1</option><option value="red-2">Red 2</option><option value="blue-1">Blue 1</option></UI.NativeSelect></div></Demo>
          <Demo title="Choice controls"><div className="form-stack"><label className="control-line"><UI.Checkbox defaultChecked/> Include practice matches</label><label className="control-line"><UI.Switch defaultChecked/> Sync after each match</label><UI.RadioGroup defaultValue="auto"><label className="control-line"><UI.RadioGroupItem value="auto"/> Automatic upload</label><label className="control-line"><UI.RadioGroupItem value="manual"/> Manual review</label></UI.RadioGroup><UI.Toggle defaultPressed>Pin dashboard</UI.Toggle></div></Demo>
          <Demo title="Numeric & range"><div className="form-stack"><div><UI.Label>Drive speed</UI.Label><UI.Slider defaultValue={[72]} aria-label="Drive speed"/></div><UI.NumberField defaultValue={4} min={0} max={12}><UI.NumberFieldGroup><UI.NumberFieldDecrement/><UI.NumberFieldInput/><UI.NumberFieldIncrement/></UI.NumberFieldGroup></UI.NumberField><UI.InputOTP length={6} aria-label="Pairing code"/></div></Demo>
          <Demo title="Date & progress"><div className="form-stack"><UI.DatePicker value={date} onValueChange={setDate}/><UI.Calendar value={date} onValueChange={setDate}/><div><UI.Label>Checklist progress</UI.Label><UI.Progress value={68}/></div><UI.Meter value={82} min={0} max={100}><span>Battery health</span></UI.Meter></div></Demo>
          <Demo title="Command menu"><UI.Command items={commandItems} onSelect={() => undefined}/></Demo>
        </Section>

        <Section id="navigation" eyebrow="04 / WAYFINDING" title="Navigation" description="Compact orientation patterns for documentation, dashboards, and multi-surface team tools.">
          <Demo title="Breadcrumb & pagination" wide><div className="stack"><UI.Breadcrumb><UI.BreadcrumbList><UI.BreadcrumbItem><UI.BreadcrumbLink href="#">Wiki</UI.BreadcrumbLink></UI.BreadcrumbItem><UI.BreadcrumbSeparator/><UI.BreadcrumbItem><UI.BreadcrumbLink href="#">Robot</UI.BreadcrumbLink></UI.BreadcrumbItem><UI.BreadcrumbSeparator/><UI.BreadcrumbItem><UI.BreadcrumbPage>Electrical</UI.BreadcrumbPage></UI.BreadcrumbItem></UI.BreadcrumbList></UI.Breadcrumb><UI.Pagination><UI.PaginationList><UI.PaginationItem><UI.PaginationLink href="#" aria-label="Previous page"><IconArrowLeft /></UI.PaginationLink></UI.PaginationItem><UI.PaginationItem><UI.PaginationLink href="#">1</UI.PaginationLink></UI.PaginationItem><UI.PaginationItem><UI.PaginationLink active href="#">2</UI.PaginationLink></UI.PaginationItem><UI.PaginationItem><UI.PaginationEllipsis/></UI.PaginationItem><UI.PaginationItem><UI.PaginationLink href="#">8</UI.PaginationLink></UI.PaginationItem><UI.PaginationItem><UI.PaginationLink href="#" aria-label="Next page"><IconArrowRight /></UI.PaginationLink></UI.PaginationItem></UI.PaginationList></UI.Pagination></div></Demo>
          <Demo title="Tabs"><UI.Tabs defaultValue="overview"><UI.TabsList><UI.TabsTrigger value="overview">Overview</UI.TabsTrigger><UI.TabsTrigger value="teleop">Teleop</UI.TabsTrigger><UI.TabsTrigger value="endgame">Endgame</UI.TabsTrigger></UI.TabsList><UI.TabsContent value="overview"><UI.Muted>Match-level summary and readiness signals.</UI.Muted></UI.TabsContent><UI.TabsContent value="teleop"><UI.Muted>Cycle data and driver observations.</UI.Muted></UI.TabsContent><UI.TabsContent value="endgame"><UI.Muted>Climb and final-state analysis.</UI.Muted></UI.TabsContent></UI.Tabs></Demo>
          <Demo title="Menubar"><UI.Menubar><UI.MenubarMenu><UI.MenubarTrigger>File</UI.MenubarTrigger><UI.MenubarContent><UI.MenubarItem>New report <UI.MenubarShortcut>⌘N</UI.MenubarShortcut></UI.MenubarItem><UI.MenubarSeparator/><UI.MenubarItem>Export CSV <UI.MenubarShortcut>⇧⌘E</UI.MenubarShortcut></UI.MenubarItem></UI.MenubarContent></UI.MenubarMenu><UI.MenubarMenu><UI.MenubarTrigger>View</UI.MenubarTrigger><UI.MenubarContent><UI.MenubarItem>Compact mode</UI.MenubarItem><UI.MenubarItem>Full screen</UI.MenubarItem></UI.MenubarContent></UI.MenubarMenu></UI.Menubar></Demo>
          <Demo title="Navigation menu" wide><UI.NavigationMenu><UI.NavigationMenuList><UI.NavigationMenuItem><UI.NavigationMenuTrigger>Systems</UI.NavigationMenuTrigger><UI.NavigationMenuContent><ul><li><UI.NavigationMenuLink href="#"><b>Electrical</b><small>Power, CAN, and wiring references.</small></UI.NavigationMenuLink></li><li><UI.NavigationMenuLink href="#"><b>Software</b><small>Robot code and dashboard guides.</small></UI.NavigationMenuLink></li></ul></UI.NavigationMenuContent></UI.NavigationMenuItem><UI.NavigationMenuItem><UI.NavigationMenuLink href="#">Team handbook</UI.NavigationMenuLink></UI.NavigationMenuItem></UI.NavigationMenuList><UI.NavigationMenuViewport/></UI.NavigationMenu></Demo>
        </Section>

        <Section id="data" eyebrow="05 / INFORMATION" title="Data display" description="Operational information stays dense, legible, and calm under pressure.">
          <Demo title="Cards & items"><UI.Card><UI.CardHeader><UI.CardTitle>Robot readiness</UI.CardTitle><UI.CardDescription>Last checked 12 minutes ago.</UI.CardDescription></UI.CardHeader><UI.CardContent><UI.Item><UI.ItemMedia><UI.Avatar name="Drive Team"/></UI.ItemMedia><UI.ItemContent><UI.ItemTitle>Match 42 checklist</UI.ItemTitle><UI.ItemDescription>8 of 10 items confirmed</UI.ItemDescription></UI.ItemContent><UI.ItemActions><UI.Badge tone="gold">Review</UI.Badge></UI.ItemActions></UI.Item></UI.CardContent><UI.CardFooter><UI.Button variant="ghost">Dismiss</UI.Button><UI.Button>Open checklist</UI.Button></UI.CardFooter></UI.Card></Demo>
          <Demo title="Table" wide><div className="stack"><UI.DataTable caption="Qualification match performance" columns={[{key:'match',header:'Match'},{key:'alliance',header:'Alliance'},{key:'cycles',header:'Cycles',align:'right'},{key:'status',header:'Status',cell:(row: {status:string}) => <UI.Badge tone={row.status === 'Ready' ? 'blue' : 'gold'}>{row.status}</UI.Badge>}]} rows={[{id:1,match:'Q38',alliance:'Red 2',cycles:7,status:'Ready'},{id:2,match:'Q42',alliance:'Blue 1',cycles:8,status:'Review'},{id:3,match:'Q51',alliance:'Red 3',cycles:9,status:'Ready'}]}/><UI.Table><UI.TableCaption>Semantic table primitives with footer totals.</UI.TableCaption><UI.TableHeader><UI.TableRow><UI.TableHead>Battery</UI.TableHead><UI.TableHead>Cycles</UI.TableHead><UI.TableHead>State</UI.TableHead></UI.TableRow></UI.TableHeader><UI.TableBody><UI.TableRow><UI.TableCell>07</UI.TableCell><UI.TableCell>18</UI.TableCell><UI.TableCell>Charging</UI.TableCell></UI.TableRow><UI.TableRow><UI.TableCell>12</UI.TableCell><UI.TableCell>11</UI.TableCell><UI.TableCell>Ready</UI.TableCell></UI.TableRow></UI.TableBody><UI.TableFooter><UI.TableRow><UI.TableCell>Total</UI.TableCell><UI.TableCell>29</UI.TableCell><UI.TableCell>2 batteries</UI.TableCell></UI.TableRow></UI.TableFooter></UI.Table></div></Demo>
          <Demo title="Alerts"><div className="stack"><UI.Alert title="Scouting is synced">All 18 devices reported in the last minute.</UI.Alert><UI.Alert tone="warning" title="Battery rotation">Battery 07 has reached its cycle limit.</UI.Alert><UI.Alert tone="danger" title="Radio offline">The practice robot has not checked in.</UI.Alert></div></Demo>
          <Demo title="Loading & empty"><div className="stack"><div className="row"><UI.Spinner/><span>Fetching match data</span></div><UI.Skeleton style={{height:'0.75rem',width:'80%'}}/><UI.Skeleton style={{height:'0.75rem',width:'58%'}}/><UI.EmptyState title="No reports yet" action={<UI.Button size="sm">Create report</UI.Button>}>Reports from this event will appear here.</UI.EmptyState></div></Demo>
          <Demo title="Chart" wide><UI.ChartContainer><svg viewBox="0 0 520 180" role="img" aria-label="Cycle time trend"><g className="chart-grid"><path d="M40 20v130M40 150h455M40 105h455M40 60h455"/></g><path className="chart-area" d="M40 130C90 118 112 86 160 94s72 34 115 14 80-64 120-49 66 32 100 8v83H40Z"/><path className="chart-line" d="M40 130C90 118 112 86 160 94s72 34 115 14 80-64 120-49 66 32 100 8"/><g className="chart-points"><circle cx="40" cy="130" r="4"/><circle cx="160" cy="94" r="4"/><circle cx="275" cy="108" r="4"/><circle cx="395" cy="59" r="4"/><circle cx="495" cy="67" r="4"/></g></svg><UI.ChartLegend><UI.ChartLegendItem color="var(--ps-pacific-blue-100)">Average cycle time</UI.ChartLegendItem></UI.ChartLegend></UI.ChartContainer></Demo>
        </Section>

        <Section id="feedback" eyebrow="06 / STATE" title="Feedback & disclosure" description="Progressive disclosure keeps dense interfaces understandable without hiding critical state.">
          <Demo title="Accordion"><UI.Accordion defaultValue={['power']}><UI.AccordionItem value="power"><UI.AccordionTrigger>Power distribution</UI.AccordionTrigger><UI.AccordionContent><p>Breaker layout, channel map, and current limits for the competition robot.</p></UI.AccordionContent></UI.AccordionItem><UI.AccordionItem value="network"><UI.AccordionTrigger>Network topology</UI.AccordionTrigger><UI.AccordionContent><p>Radio, roboRIO, coprocessor, and dashboard connections.</p></UI.AccordionContent></UI.AccordionItem></UI.Accordion></Demo>
          <Demo title="Collapsible"><div className="stack"><UI.Collapsible open={advancedOpen} onOpenChange={setAdvancedOpen}><UI.CollapsibleTrigger>{advancedOpen ? 'Hide' : 'Show'} advanced telemetry</UI.CollapsibleTrigger><UI.CollapsibleContent><div className="telemetry-grid"><span>CAN utilization <b>42%</b></span><span>Loop time <b>18 ms</b></span><span>RIO CPU <b>37%</b></span></div></UI.CollapsibleContent></UI.Collapsible></div></Demo>
          <Demo title="Scroll area"><UI.ScrollArea style={{height:'13rem'}}><div className="event-log">{Array.from({length:14},(_,i)=><p key={i}><time>10:{String(12+i).padStart(2,'0')}</time><span>{i%3===0?'Configuration published':i%3===1?'Scout device connected':'Checklist item confirmed'}</span></p>)}</div></UI.ScrollArea></Demo>
          <Demo title="Toast"><div className="stack"><ToastDemo/><UI.Muted>Notifications enter from the lower edge and clear automatically.</UI.Muted></div></Demo>
        </Section>

        <Section id="overlays" eyebrow="07 / LAYERS" title="Overlays" description="Layered interactions share one motion curve, one elevation model, and predictable dismissal behavior.">
          <Demo title="Dialogs"><div className="row"><UI.Dialog><UI.DialogTrigger render={<UI.Button/>}>Open dialog</UI.DialogTrigger><UI.DialogContent><UI.DialogTitle>Publish pit checklist?</UI.DialogTitle><UI.DialogDescription>This makes the latest checklist available to every signed-in device.</UI.DialogDescription><div className="dialog-actions"><UI.DialogClose render={<UI.Button variant="ghost"/>}>Cancel</UI.DialogClose><UI.DialogClose render={<UI.Button/>}>Publish</UI.DialogClose></div></UI.DialogContent></UI.Dialog><UI.AlertDialog><UI.AlertDialogTrigger render={<UI.Button variant="danger"/>}>Reset data</UI.AlertDialogTrigger><UI.AlertDialogContent><UI.AlertDialogTitle>Reset local match data?</UI.AlertDialogTitle><UI.AlertDialogDescription>This cannot be undone on this device.</UI.AlertDialogDescription><div className="dialog-actions"><UI.AlertDialogClose render={<UI.Button variant="ghost"/>}>Cancel</UI.AlertDialogClose><UI.AlertDialogClose render={<UI.Button variant="danger"/>}>Reset</UI.AlertDialogClose></div></UI.AlertDialogContent></UI.AlertDialog></div></Demo>
          <Demo title="Popover & hover card"><div className="row"><UI.Popover><UI.PopoverTrigger render={<UI.Button variant="outline"/>}>Filter</UI.PopoverTrigger><UI.PopoverContent><UI.PopoverTitle>Match filters</UI.PopoverTitle><UI.PopoverDescription>Show only reports that need review.</UI.PopoverDescription><label className="control-line"><UI.Switch/> Needs review</label><UI.PopoverClose render={<UI.Button size="sm" variant="ghost"/>}>Done</UI.PopoverClose></UI.PopoverContent></UI.Popover><UI.HoverCard><UI.HoverCardTrigger render={<a className="demo-link" href="#overlays">Drive team</a>}/><UI.HoverCardContent><UI.Item><UI.ItemMedia><UI.Avatar name="Drive Team"/></UI.ItemMedia><UI.ItemContent><UI.ItemTitle>Drive team</UI.ItemTitle><UI.ItemDescription>4 members · next match Q42</UI.ItemDescription></UI.ItemContent></UI.Item></UI.HoverCardContent></UI.HoverCard></div></Demo>
          <Demo title="Menus"><div className="row"><UI.DropdownMenu><UI.DropdownMenuTrigger render={<UI.Button variant="outline"/>}>Actions</UI.DropdownMenuTrigger><UI.DropdownMenuContent><UI.DropdownMenuGroup><UI.DropdownMenuLabel>Match report</UI.DropdownMenuLabel><UI.DropdownMenuItem>Edit <UI.DropdownMenuShortcut>⌘E</UI.DropdownMenuShortcut></UI.DropdownMenuItem><UI.DropdownMenuCheckboxItem defaultChecked>Include notes</UI.DropdownMenuCheckboxItem></UI.DropdownMenuGroup><UI.DropdownMenuSeparator/><UI.DropdownMenuRadioGroup defaultValue="compact"><UI.DropdownMenuRadioItem value="compact">Compact view</UI.DropdownMenuRadioItem><UI.DropdownMenuRadioItem value="detailed">Detailed view</UI.DropdownMenuRadioItem></UI.DropdownMenuRadioGroup><UI.DropdownMenuSeparator/><UI.DropdownMenuSub><UI.DropdownMenuSubTrigger>Export</UI.DropdownMenuSubTrigger><UI.DropdownMenuContent><UI.DropdownMenuItem>CSV</UI.DropdownMenuItem><UI.DropdownMenuItem>JSON</UI.DropdownMenuItem></UI.DropdownMenuContent></UI.DropdownMenuSub></UI.DropdownMenuContent></UI.DropdownMenu><UI.ContextMenu><UI.ContextMenuTrigger className="context-target">Right-click</UI.ContextMenuTrigger><UI.ContextMenuContent><UI.ContextMenuItem>Open report</UI.ContextMenuItem><UI.ContextMenuItem>Copy link</UI.ContextMenuItem><UI.ContextMenuItem>Pin to dashboard</UI.ContextMenuItem></UI.ContextMenuContent></UI.ContextMenu></div></Demo>
          <Demo title="Drawer & sheet"><div className="row"><UI.Drawer><UI.DrawerTrigger render={<UI.Button variant="outline"/>}>Open drawer</UI.DrawerTrigger><UI.DrawerContent><UI.DrawerTitle>Quick actions</UI.DrawerTitle><UI.DrawerDescription>Common field operations, always within reach.</UI.DrawerDescription><div className="drawer-grid"><UI.Button>Start checklist</UI.Button><UI.Button variant="outline">Open scouting</UI.Button><UI.DrawerClose render={<UI.Button variant="ghost"/>}>Done</UI.DrawerClose></div></UI.DrawerContent></UI.Drawer><UI.Sheet><UI.SheetTrigger render={<UI.Button variant="outline"/>}>Open sheet</UI.SheetTrigger><UI.SheetContent><UI.SheetTitle>Match 42</UI.SheetTitle><UI.SheetDescription>Pre-match operational summary.</UI.SheetDescription><UI.Separator/><UI.Item><UI.ItemContent><UI.ItemTitle>Alliance station</UI.ItemTitle><UI.ItemDescription>Blue 1</UI.ItemDescription></UI.ItemContent></UI.Item><UI.Item><UI.ItemContent><UI.ItemTitle>Queue time</UI.ItemTitle><UI.ItemDescription>10:48 AM</UI.ItemDescription></UI.ItemContent></UI.Item><UI.SheetClose render={<UI.Button variant="outline"/>}>Close summary</UI.SheetClose></UI.SheetContent></UI.Sheet></div></Demo>
        </Section>

        <Section id="layout" eyebrow="08 / COMPOSITION" title="Layout" description="Composable shells for applications and responsive workspaces—not just isolated controls.">
          <Demo title="Resizable workspace" wide><UI.ResizablePanels first={<div className="panel-copy"><b>System map</b><p>Drag the divider or use arrow keys.</p></div>} second={<div className="panel-copy panel-copy--blue"><b>Inspector</b><p>Selected subsystem details appear here.</p></div>}/></Demo>
          <Demo title="Carousel" wide><UI.Carousel label="Team workflows">{['Scouting','Pit operations','Outreach','Robot telemetry'].map((name,index)=><UI.Card key={name}><UI.CardHeader><UI.CardTitle>{name}</UI.CardTitle><UI.CardDescription>{index+1 < 10 ? `0${index+1}` : index+1} · Workflow template</UI.CardDescription></UI.CardHeader><UI.CardContent><UI.Muted>Purpose-built patterns with shared states and tokens.</UI.Muted></UI.CardContent></UI.Card>)}</UI.Carousel></Demo>
          <Demo title="Sidebar shell" wide><UI.SidebarProvider><UI.Sidebar><UI.SidebarHeader><b>Operations</b></UI.SidebarHeader><UI.SidebarContent><UI.SidebarGroup><UI.SidebarGroupLabel>Workspace</UI.SidebarGroupLabel><UI.SidebarMenu><UI.SidebarMenuItem><UI.SidebarMenuButton active><Icon>◫</Icon>Overview</UI.SidebarMenuButton></UI.SidebarMenuItem><UI.SidebarMenuItem><UI.SidebarMenuButton><Icon>⌁</Icon>Scouting</UI.SidebarMenuButton></UI.SidebarMenuItem><UI.SidebarMenuItem><UI.SidebarMenuButton><Icon>✓</Icon>Checklists</UI.SidebarMenuButton></UI.SidebarMenuItem></UI.SidebarMenu></UI.SidebarGroup></UI.SidebarContent><UI.SidebarFooter>Team 5025</UI.SidebarFooter></UI.Sidebar><UI.SidebarInset><UI.SidebarTrigger/><div className="sidebar-demo-copy"><UI.Heading level={3}>Field operations</UI.Heading><UI.Muted>Application shells retain the same compact rhythm as individual components.</UI.Muted></div></UI.SidebarInset></UI.SidebarProvider></Demo>
          <Demo title="Aspect ratio"><UI.AspectRatio ratio={16/9} className="aspect-demo"><img src={logoIcon} alt="Pacific Steel wave mark"/><span>16:9 media frame</span></UI.AspectRatio></Demo>
        </Section>

        <footer className="catalog-footer"><img src={logoIcon} alt=""/><div><b>Built for Pacific Steel 5025.</b><span>React 18/19 · Base UI · Tailwind CSS v4</span></div><a href="#top">Back to top ↑</a></footer>
      </main>
    </div>
  </>;
}

export function Showcase() { return <UI.TooltipProvider><UI.ToastProvider><ShowcaseBody/></UI.ToastProvider></UI.TooltipProvider>; }

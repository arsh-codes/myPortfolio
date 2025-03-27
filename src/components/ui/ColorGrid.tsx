const colors = [
  "card",
  "card-foreground",
  "popover",
  "popover-foreground",
  "primary",
  "primary-foreground",
  "secondary",
  "secondary-foreground",
  "muted",
  "muted-foreground",
  "accent",
  "accent-foreground",
  "destructive",
  "border",
  "input",
  "ring",
  "chart-1",
  "chart-2",
  "chart-3",
  "chart-4",
  "chart-5",
  "sidebar",
  "sidebar-foreground",
  "sidebar-primary",
  "sidebar-primary-foreground",
  "sidebar-accent",
  "sidebar-accent-foreground",
  "sidebar-border",
  "sidebar-ring",
  "background",
  "foreground",
  "color-background",
  "color-foreground",
  "color-card",
  "color-card-foreground",
  "color-popover",
  "color-popover-foreground",
  "color-primary",
  "color-primary-foreground",
  "color-secondary",
  "color-secondary-foreground",
  "color-muted",
  "color-muted-foreground",
  "color-accent",
  "color-accent-foreground",
  "color-destructive",
  "color-border",
  "color-input",
  "color-ring",
  "color-chart-1",
  "color-chart-2",
  "color-chart-3",
  "color-chart-4",
  "color-chart-5",
  "color-sidebar",
  "color-sidebar-foreground",
  "color-sidebar-primary",
  "color-sidebar-primary-foreground",
  "color-sidebar-accent",
  "color-sidebar-accent-foreground",
  "color-sidebar-border",
  "color-sidebar-ring",
];

export default function ColorGrid() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {colors.map((color) => (
        <div
          key={color}
          className="flex h-24 w-24 items-center justify-center rounded-xl border p-4 text-center shadow-md"
          style={{
            backgroundColor: `var(--${color})`,
            color: `var(--${color}-foreground, black)`,
          }}
        >
          {color}
        </div>
      ))}
    </div>
  );
}

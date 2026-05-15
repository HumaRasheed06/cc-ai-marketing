import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/cn";

type Kpi = {
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down";
};

const kpis: Kpi[] = [
  { label: "Estimate", value: "$24,318", delta: "+8.2%", trend: "up" },
  { label: "Cost", value: "$9,420", delta: "+2.1%", trend: "up" },
  { label: "Profit", value: "$14,898", delta: "+12.4%", trend: "up" },
  { label: "Qty", value: "1,284", delta: "-3.0%", trend: "down" },
];

const rows = [
  { name: "2024 Topps Chrome — Patrick Mahomes", price: "$148", status: "Listed" },
  { name: "2003 Topps Chrome — LeBron James", price: "$2,140", status: "Listed" },
  { name: "2018 Bowman Chrome — Juan Soto", price: "$92", status: "Ready" },
  { name: "1986 Fleer — Michael Jordan", price: "$3,820", status: "Listed" },
];

const statusColors: Record<string, string> = {
  Listed: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Ready: "bg-amber-50 text-amber-700 border-amber-200",
};

const chartPath =
  "M0,80 L40,72 L80,76 L120,60 L160,58 L200,42 L240,46 L280,30 L320,22 L360,28 L400,12";

export function DashboardPreview() {
  return (
    <div className="relative rounded-2xl bg-card shadow-2xl ring-1 ring-border/60 overflow-hidden">
      <div className="flex items-center gap-2 border-b border-border bg-background/60 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
        <span className="ml-3 text-xs text-muted-foreground">
          app.cc-ai.example / dashboard
        </span>
      </div>

      <div className="p-5">
        <div className="grid grid-cols-4 gap-3">
          {kpis.map((k) => (
            <div
              key={k.label}
              className="rounded-lg border border-border bg-background/60 p-3"
            >
              <p className="text-xs font-medium text-muted-foreground">
                {k.label}
              </p>
              <p className="mt-1 text-base font-bold tracking-tight">
                {k.value}
              </p>
              <p
                className={cn(
                  "mt-1 inline-flex items-center gap-1 text-xs font-medium",
                  k.trend === "up" ? "text-emerald-600" : "text-red-500"
                )}
              >
                {k.trend === "up" ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                {k.delta}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-lg border border-border bg-background/60 p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium text-muted-foreground">
              Profit · last 30 days
            </p>
            <p className="text-xs font-semibold text-emerald-600">+12.4%</p>
          </div>
          <svg
            viewBox="0 0 400 100"
            className="mt-2 w-full h-16"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="dpFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.281 0.031 253)" stopOpacity="0.25" />
                <stop offset="100%" stopColor="oklch(0.281 0.031 253)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d={`${chartPath} L400,100 L0,100 Z`}
              fill="url(#dpFill)"
            />
            <path
              d={chartPath}
              fill="none"
              stroke="oklch(0.281 0.031 253)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="mt-4 rounded-lg border border-border bg-background/60 overflow-hidden">
          <div className="grid grid-cols-12 gap-3 border-b border-border px-4 py-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            <span className="col-span-7">Card</span>
            <span className="col-span-3 text-right">Est. price</span>
            <span className="col-span-2 text-right">Status</span>
          </div>
          {rows.map((r) => (
            <div
              key={r.name}
              className="grid grid-cols-12 gap-3 border-b border-border last:border-b-0 px-4 py-2.5 text-xs"
            >
              <span className="col-span-7 truncate text-foreground">
                {r.name}
              </span>
              <span className="col-span-3 text-right font-medium">
                {r.price}
              </span>
              <span className="col-span-2 flex justify-end">
                <span
                  className={cn(
                    "inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium",
                    statusColors[r.status]
                  )}
                >
                  {r.status}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

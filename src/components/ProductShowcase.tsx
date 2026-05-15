import { Check } from "lucide-react";
import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

/* ---------- mockups ---------- */

function ScanMockup() {
  return (
    <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-[oklch(0.97_0.01_260)] to-[oklch(0.93_0.03_270)] p-6 ring-1 ring-border/60 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.281 0.031 253) 1px, transparent 1px), linear-gradient(90deg, oklch(0.281 0.031 253) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* phone */}
      <div className="relative mx-auto flex h-full max-w-[200px] flex-col rounded-[28px] bg-foreground p-2 shadow-2xl">
        <div className="relative flex-1 overflow-hidden rounded-[22px] bg-white">
          {/* notch */}
          <div className="absolute left-1/2 top-1.5 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-foreground" />

          {/* card image area */}
          <div className="absolute inset-x-4 top-10 bottom-24 rounded-lg bg-gradient-to-br from-amber-100 via-orange-200 to-rose-200">
            {/* card frame */}
            <div className="absolute inset-2 rounded border-2 border-white/70">
              <div className="absolute top-2 left-2 right-2 h-1.5 rounded bg-white/70" />
              <div className="absolute bottom-3 left-2 right-2 space-y-1">
                <div className="h-1 w-2/3 rounded bg-white/70" />
                <div className="h-1 w-1/2 rounded bg-white/70" />
              </div>
            </div>
            {/* scan corners */}
            <span className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary" />
            <span className="absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary" />
            <span className="absolute left-0 bottom-0 h-3 w-3 border-l-2 border-b-2 border-primary" />
            <span className="absolute right-0 bottom-0 h-3 w-3 border-r-2 border-b-2 border-primary" />
            {/* scan line */}
            <div className="absolute inset-x-0 top-1/2 h-0.5 bg-emerald-500 shadow-[0_0_12px_2px_oklch(0.7_0.15_150)]" />
          </div>

          {/* identity chip */}
          <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-foreground/95 p-2 text-white text-[9px] leading-tight">
            <div className="flex items-center justify-between">
              <span className="font-semibold">2024 Topps Chrome</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-1.5 py-0.5 text-[8px] font-medium text-emerald-300">
                Gem Mint
              </span>
            </div>
            <p className="mt-0.5 text-white/60">#220 · Patrick Mahomes</p>
          </div>
        </div>
      </div>

      {/* floating detected chip */}
      <div className="absolute right-6 top-8 hidden md:flex items-center gap-2 rounded-lg border border-border bg-card px-2.5 py-1.5 shadow-md">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        <span className="text-[10px] font-medium">Match found · 99.2%</span>
      </div>
    </div>
  );
}

function PriceMockup() {
  const comps = [
    { date: "Apr 28", price: "$162", channel: "eBay" },
    { date: "Apr 22", price: "$155", channel: "eBay" },
    { date: "Apr 19", price: "$148", channel: "Amazon" },
    { date: "Apr 12", price: "$170", channel: "eBay" },
  ];
  return (
    <div className="relative aspect-[4/3] rounded-2xl bg-card p-5 ring-1 ring-border/60 overflow-hidden">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Suggested price
          </p>
          <p className="mt-1 font-heading text-3xl font-bold tracking-tight">
            $158
          </p>
          <p className="mt-0.5 text-[11px] text-muted-foreground">
            range $148 – $170
          </p>
        </div>
        <div className="text-right">
          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
            High confidence
          </span>
          <p className="mt-2 text-[10px] text-muted-foreground">12 comps · 30d</p>
        </div>
      </div>

      {/* sparkline */}
      <svg
        viewBox="0 0 200 50"
        className="mt-3 h-12 w-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="psFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.281 0.031 253)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="oklch(0.281 0.031 253)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,38 L20,35 L40,30 L60,32 L80,24 L100,26 L120,18 L140,22 L160,14 L180,16 L200,8 L200,50 L0,50 Z"
          fill="url(#psFill)"
        />
        <path
          d="M0,38 L20,35 L40,30 L60,32 L80,24 L100,26 L120,18 L140,22 L160,14 L180,16 L200,8"
          fill="none"
          stroke="oklch(0.281 0.031 253)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <div className="mt-3">
        <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          Recent comps
        </p>
        <div className="mt-1.5 divide-y divide-border rounded-lg border border-border bg-background/60">
          {comps.map((c) => (
            <div
              key={c.date}
              className="flex items-center justify-between px-3 py-1.5 text-[11px]"
            >
              <span className="text-muted-foreground">{c.date}</span>
              <span className="font-semibold">{c.price}</span>
              <span className="text-muted-foreground">{c.channel}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ListMockup() {
  const channels = [
    { name: "eBay", on: true, color: "bg-blue-500" },
    { name: "Amazon", on: true, color: "bg-amber-500" },
    { name: "Walmart", on: true, color: "bg-sky-500" },
    { name: "TikTok Shop", on: false, color: "bg-rose-500" },
    { name: "Shopify", on: true, color: "bg-emerald-500" },
  ];
  return (
    <div className="relative aspect-[4/3] rounded-2xl bg-card p-5 ring-1 ring-border/60 overflow-hidden">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Push to channels
          </p>
          <p className="mt-1 font-heading text-base font-semibold">
            2024 Topps · Mahomes
          </p>
        </div>
        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
          Ready to list
        </span>
      </div>

      <div className="mt-3 space-y-1.5">
        {channels.map((c) => (
          <div
            key={c.name}
            className="flex items-center justify-between rounded-lg border border-border bg-background/60 px-3 py-1.5"
          >
            <span className="flex items-center gap-2 text-[11px] font-medium">
              <span className={cn("h-2 w-2 rounded-full", c.color)} />
              {c.name}
            </span>
            <span
              className={cn(
                "flex h-4 w-7 items-center rounded-full p-0.5 transition-colors",
                c.on ? "bg-primary" : "bg-border"
              )}
            >
              <span
                className={cn(
                  "h-3 w-3 rounded-full bg-white shadow transition-transform",
                  c.on && "translate-x-3"
                )}
              />
            </span>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary py-2 text-[11px] font-semibold text-primary-foreground"
      >
        Push to 4 channels
        <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6"/>
        </svg>
      </button>
    </div>
  );
}

const previewMap: Record<string, () => React.ReactElement> = {
  scan: ScanMockup,
  price: PriceMockup,
  list: ListMockup,
};

/* ---------- main ---------- */

export function ProductShowcase() {
  return (
    <Section
      eyebrow={site.showcase.eyebrow}
      title={site.showcase.title}
      subtitle={site.showcase.subtitle}
      className="bg-card/40"
    >
      <Container>
        <div className="space-y-12 md:space-y-16">
          {site.showcase.items.map((item, i) => {
            const Preview = previewMap[item.preview] ?? ScanMockup;
            const reversed = i % 2 === 1;
            return (
              <div
                key={item.title}
                className={cn(
                  "grid grid-cols-1 gap-8 items-center lg:grid-cols-2 lg:gap-14",
                  reversed && "lg:[&>*:first-child]:order-2"
                )}
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {item.kicker}
                  </p>
                  <h3 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight text-balance">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base text-muted-foreground text-pretty">
                    {item.body}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {item.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-foreground/90"
                      >
                        <Check className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary/15 via-[oklch(0.55_0.16_320)]/10 to-transparent blur-2xl"
                  />
                  <Preview />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

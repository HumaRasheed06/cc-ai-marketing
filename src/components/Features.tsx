import {
  ScanLine,
  Sparkles,
  Boxes,
  Inbox,
  LineChart,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { site } from "@/content/site";

const iconMap: Record<string, LucideIcon> = {
  ScanLine,
  Sparkles,
  Boxes,
  Inbox,
  LineChart,
  Layers,
};

const accentMap: Record<string, { bg: string; ring: string; text: string }> = {
  indigo: {
    bg: "bg-indigo-50",
    ring: "ring-indigo-100",
    text: "text-indigo-600",
  },
  violet: {
    bg: "bg-violet-50",
    ring: "ring-violet-100",
    text: "text-violet-600",
  },
  sky: { bg: "bg-sky-50", ring: "ring-sky-100", text: "text-sky-600" },
  emerald: {
    bg: "bg-emerald-50",
    ring: "ring-emerald-100",
    text: "text-emerald-600",
  },
  amber: { bg: "bg-amber-50", ring: "ring-amber-100", text: "text-amber-600" },
  rose: { bg: "bg-rose-50", ring: "ring-rose-100", text: "text-rose-600" },
};

export function Features() {
  return (
    <Section
      id="features"
      eyebrow={site.features.eyebrow}
      title={site.features.title}
      subtitle={site.features.subtitle}
    >
      <Container>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {site.features.items.map((item) => {
            const Icon = iconMap[item.icon] ?? Sparkles;
            const accent = accentMap[item.accent] ?? accentMap.indigo;
            return (
              <div
                key={item.title}
                className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg overflow-hidden"
              >
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full ${accent.bg} opacity-0 group-hover:opacity-80 blur-2xl transition-opacity`}
                />
                <div
                  className={`relative flex h-11 w-11 items-center justify-center rounded-xl ring-1 ${accent.bg} ${accent.ring}`}
                >
                  <Icon className={`h-5 w-5 ${accent.text}`} />
                </div>
                <h3 className="relative mt-5 text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

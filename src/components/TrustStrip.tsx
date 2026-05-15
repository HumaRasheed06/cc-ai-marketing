import { Container } from "./ui/Container";
import { site } from "@/content/site";

const dotColors = [
  "bg-blue-500",
  "bg-amber-500",
  "bg-sky-500",
  "bg-rose-500",
  "bg-emerald-500",
];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-card/50 py-8">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {site.trustStrip.caption}
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          {site.trustStrip.marketplaces.map((m, i) => (
            <span
              key={m}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-semibold text-foreground/80 shadow-sm transition-colors hover:text-foreground hover:bg-accent"
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  dotColors[i] ?? "bg-primary"
                }`}
              />
              {m}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

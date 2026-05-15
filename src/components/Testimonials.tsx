import { Quote } from "lucide-react";
import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { site } from "@/content/site";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Testimonials() {
  return (
    <Section
      eyebrow={site.testimonials.eyebrow}
      title={site.testimonials.title}
      className="bg-card/40"
    >
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {site.testimonials.items.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 md:p-7"
            >
              <Quote className="h-6 w-6 text-primary/40" />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {initials(t.name)}
                </span>
                <span>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}

import { ChevronDown } from "lucide-react";
import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { site } from "@/content/site";

export function FAQ() {
  return (
    <Section
      id="faq"
      eyebrow={site.faq.eyebrow}
      title={site.faq.title}
    >
      <Container>
        <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card">
          {site.faq.items.map((item, i) => (
            <details
              key={i}
              className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-foreground">
                <span>{item.q}</span>
                <ChevronDown className="h-5 w-5 flex-none text-muted-foreground transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}

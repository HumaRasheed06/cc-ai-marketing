"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <Section
      id="pricing"
      eyebrow={site.pricing.eyebrow}
      title={site.pricing.title}
      subtitle={site.pricing.subtitle}
    >
      <Container>
        <div className="flex justify-center">
          <div
            role="tablist"
            aria-label="Billing period"
            className="inline-flex rounded-full border border-border bg-card p-1"
          >
            <button
              type="button"
              role="tab"
              aria-selected={!annual}
              onClick={() => setAnnual(false)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                !annual
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Monthly
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={annual}
              onClick={() => setAnnual(true)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                annual
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Annual
              <span className="ml-1.5 rounded-full bg-emerald-100 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">
                -20%
              </span>
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {site.pricing.tiers.map((tier) => {
            const price = annual ? tier.annual : tier.monthly;
            return (
              <div
                key={tier.name}
                className={cn(
                  "relative flex flex-col rounded-2xl border bg-card p-6 md:p-8 transition-all",
                  tier.highlighted
                    ? "border-transparent shadow-xl md:scale-[1.03] bg-gradient-to-b from-primary to-[oklch(0.36_0.08_270)] text-primary-foreground"
                    : "border-border hover:shadow-md hover:-translate-y-1"
                )}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary shadow-sm">
                    Most popular
                  </span>
                )}

                <h3 className="text-xl font-semibold">{tier.name}</h3>
                <p
                  className={cn(
                    "mt-1 text-sm",
                    tier.highlighted
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  )}
                >
                  {tier.headline}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight font-heading">
                    ${price}
                  </span>
                  <span
                    className={cn(
                      "text-sm",
                      tier.highlighted
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground"
                    )}
                  >
                    / month
                  </span>
                </div>
                <p
                  className={cn(
                    "mt-1 text-xs",
                    tier.highlighted
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  )}
                >
                  {annual ? "Billed annually" : "Billed monthly"}
                </p>

                <Button
                  variant={tier.highlighted ? "white" : "outline"}
                  size="md"
                  href={tier.href}
                  className="mt-6 w-full"
                >
                  {tier.cta}
                </Button>

                <ul className="mt-6 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check
                        className={cn(
                          "mt-0.5 h-4 w-4 flex-none",
                          tier.highlighted
                            ? "text-emerald-300"
                            : "text-emerald-600"
                        )}
                      />
                      <span
                        className={cn(
                          tier.highlighted
                            ? "text-primary-foreground/95"
                            : "text-foreground/90"
                        )}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          {site.pricing.annualNote}
        </p>
      </Container>
    </Section>
  );
}

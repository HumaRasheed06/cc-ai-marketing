import { Camera, Sparkles, Send } from "lucide-react";
import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { site } from "@/content/site";

const stepIcons = [Camera, Sparkles, Send];
const stepColors = [
  "from-indigo-500 to-violet-500",
  "from-violet-500 to-fuchsia-500",
  "from-sky-500 to-cyan-500",
];

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      eyebrow={site.howItWorks.eyebrow}
      title={site.howItWorks.title}
      subtitle={site.howItWorks.subtitle}
    >
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {site.howItWorks.steps.map((step, i) => {
            const Icon = stepIcons[i] ?? Camera;
            const gradient = stepColors[i] ?? stepColors[0];
            return (
              <div
                key={step.number}
                className="relative rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
              >
                <span className="absolute right-5 top-5 font-heading text-3xl font-bold text-foreground/5">
                  {step.number}
                </span>

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {step.body}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

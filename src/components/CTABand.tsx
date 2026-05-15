import { ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { site } from "@/content/site";

export function CTABand() {
  return (
    <section className="relative overflow-hidden bg-primary py-14 md:py-18">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, oklch(0.55 0.18 320 / 0.45), transparent 70%)",
          }}
        />
        <div
          className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, oklch(0.55 0.18 220 / 0.4), transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(closest-side, black 40%, transparent 90%)",
          }}
        />
      </div>

      <Container>
        <div className="relative flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl text-white text-balance">
            {site.ctaBand.title}
          </h2>
          <p className="mt-4 max-w-xl text-white/80 text-base md:text-lg text-pretty">
            {site.ctaBand.subtitle}
          </p>
          <Button
            variant="white"
            size="lg"
            href={site.ctaBand.cta.href}
            className="mt-8"
          >
            {site.ctaBand.cta.label}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}

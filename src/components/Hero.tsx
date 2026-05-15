"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { DashboardPreview } from "./DashboardPreview";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 pb-14 md:pt-32 md:pb-20"
    >
      {/* gradient orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-[640px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,oklch(0.92_0.04_260)_0%,transparent_70%)]" />
        <div className="absolute -left-32 top-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,oklch(0.88_0.08_280)_0%,transparent_70%)] opacity-60" />
        <div className="absolute -right-32 top-48 h-[380px] w-[380px] rounded-full bg-[radial-gradient(closest-side,oklch(0.90_0.06_200)_0%,transparent_70%)] opacity-60" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.281 0.031 253) 1px, transparent 1px), linear-gradient(90deg, oklch(0.281 0.031 253) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(closest-side, black 30%, transparent 80%)",
          }}
        />
      </div>

      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur px-3 py-1 text-xs font-medium shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-foreground/80">{site.hero.badge}</span>
            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
              {site.hero.headlineLead}{" "}
              <span className="bg-gradient-to-r from-primary via-[oklch(0.42_0.12_270)] to-[oklch(0.55_0.16_320)] bg-clip-text text-transparent">
                {site.hero.headlineEmphasis}
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg text-pretty">
              {site.hero.sub}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                variant="primary"
                size="lg"
                href={site.hero.primaryCta.href}
              >
                {site.hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                href={site.hero.secondaryCta.href}
              >
                {site.hero.secondaryCta.label}
              </Button>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              {site.hero.note}
            </p>

            <dl className="mt-10 grid grid-cols-3 gap-6 max-w-md border-t border-border pt-6">
              {site.hero.miniStats.map((s) => (
                <div key={s.label}>
                  <dt className="text-2xl md:text-3xl font-bold tracking-tight font-heading">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs text-muted-foreground">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 via-[oklch(0.55_0.16_320)]/15 to-transparent blur-2xl" />
            <DashboardPreview />

            {/* floating notification card */}
            <motion.div
              initial={{ opacity: 0, x: -10, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
              className="absolute -left-4 bottom-6 hidden md:flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-lg max-w-[240px]"
            >
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7"/></svg>
              </span>
              <div className="text-xs">
                <p className="font-semibold">Listed to eBay</p>
                <p className="text-muted-foreground">2024 Topps · $148</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

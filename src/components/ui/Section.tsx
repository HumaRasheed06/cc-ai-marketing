import * as React from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
};

export function Section({
  id,
  className,
  children,
  eyebrow,
  title,
  subtitle,
  centered = true,
}: SectionProps) {
  const hasHeader = eyebrow || title || subtitle;
  return (
    <section
      id={id}
      className={cn("py-14 md:py-20 scroll-mt-20", className)}
    >
      {hasHeader && (
        <div
          className={cn(
            "mx-auto mb-10 max-w-2xl md:mb-12",
            centered ? "text-center" : "text-left"
          )}
        >
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-3xl md:text-4xl text-balance">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-4 text-base md:text-lg text-muted-foreground text-pretty">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

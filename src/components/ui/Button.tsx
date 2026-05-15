import * as React from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "outline" | "white";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  href?: string;
};

type ButtonAttrs = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  keyof BaseProps
>;
type AnchorAttrs = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof BaseProps
>;

export type ButtonProps = BaseProps & ButtonAttrs & AnchorAttrs;

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-hover focus-visible:outline-primary",
  ghost:
    "bg-transparent text-foreground hover:bg-accent focus-visible:outline-foreground",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-accent",
  white: "bg-white text-primary hover:bg-white/90",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}

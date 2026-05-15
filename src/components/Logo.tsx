import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  variant?: "default" | "inverse";
};

export function Logo({ className, variant = "default" }: LogoProps) {
  const text = variant === "inverse" ? "text-white" : "text-foreground";

  return (
    <a
      href="#top"
      aria-label="CC AI home"
      className={cn("flex items-center gap-2.5 font-heading", className)}
    >
      <span
        className={cn(
          "relative flex h-9 w-9 items-center justify-center rounded-lg font-bold text-sm tracking-tight overflow-hidden",
          variant === "inverse"
            ? "bg-white text-primary"
            : "bg-gradient-to-br from-primary to-[oklch(0.36_0.08_270)] text-primary-foreground"
        )}
      >
        CC
        <span
          aria-hidden="true"
          className="absolute -bottom-2 -right-2 h-5 w-5 rounded-full bg-white/10 blur-sm"
        />
      </span>
      <span className={cn("text-lg font-semibold tracking-tight", text)}>
        AI
      </span>
    </a>
  );
}

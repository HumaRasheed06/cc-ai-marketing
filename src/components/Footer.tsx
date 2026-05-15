import { Logo } from "./Logo";
import { Container } from "./ui/Container";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-card/40 py-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[900px] rounded-full bg-[radial-gradient(closest-side,oklch(0.92_0.04_260)_0%,transparent_70%)]"
      />
      <Container>
        <div className="relative grid grid-cols-2 gap-8 md:grid-cols-6">
          <div className="col-span-2 md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              {site.brand.tagline}
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              {site.footer.copyright}
            </p>
          </div>

          {site.footer.columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

       
      </Container>
    </footer>
  );
}

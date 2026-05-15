import { Mail } from "lucide-react";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { site } from "@/content/site";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow={site.contact.eyebrow}
      title={site.contact.title}
      subtitle={site.contact.subtitle}
    >
      <Container>
        <div className="flex justify-center">
          <Button
            variant="primary"
            size="lg"
            href={`mailto:${site.contact.email}`}
          >
            <Mail className="h-4 w-4" />
            {site.contact.cta.label}
          </Button>
        </div>
      </Container>
    </Section>
  );
}

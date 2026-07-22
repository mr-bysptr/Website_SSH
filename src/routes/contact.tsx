import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { InquiryForm } from "@/components/site/inquiry-form";
import { PageHero, SectionHeading } from "@/components/site/page-hero";
import { buildWhatsAppUrl, buildEmailUrl, site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${site.name}` },
      { name: "description", content: `Request a quotation from ${site.name}. Nationwide H2S, confined space and gas detection services with 24-hour mobilisation.` },
      { property: "og:title", content: `Contact — ${site.name}` },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's scope your safety program."
        description="Tell us the site, scope and dates. A specialist will respond within one working day — sooner for emergencies."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr,1.3fr]">
          <div className="space-y-6">
            <SectionHeading eyebrow="Talk to us" title="Direct lines for enterprise buyers." />
            <ul className="space-y-4">
              <ContactItem Icon={Phone} label="Phone" value={site.phone} href={`tel:${site.phone.replace(/\s/g, "")}`} />
              <ContactItem Icon={Mail} label="Email" value={site.email} href={buildEmailUrl()} target="_blank" />
              <ContactItem Icon={MapPin} label="Office" value={site.address} />
              <ContactItem Icon={Clock} label="Hours" value={site.hours} />
            </ul>
            <a
              href={buildWhatsAppUrl(`Hello ${site.name}, I would like a quotation.`)}
              target="_blank"
              rel="noopener"
              className="inline-flex h-12 w-full items-center justify-center rounded-md bg-success px-6 text-sm font-semibold text-success-foreground shadow-card hover:opacity-90 sm:w-auto"
            >
              Chat on WhatsApp
            </a>
          </div>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}

function ContactItem({
  Icon,
  label,
  value,
  href,
  target,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
  target?: string;
}) {
  const inner = (
    <div className="flex items-start gap-4 rounded-xl border border-border bg-surface p-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="mt-0.5 font-heading text-sm font-bold text-foreground">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} target={target} rel={target === "_blank" ? "noopener" : undefined}>{inner}</a> : <li>{inner}</li>;
}

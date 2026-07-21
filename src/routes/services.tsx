import { createFileRoute } from "@tanstack/react-router";

import { CTABanner } from "@/components/site/cta-banner";
import { PageHero, SectionHeading } from "@/components/site/page-hero";
import { ServiceCard } from "@/components/site/service-card";
import { img } from "@/lib/assets";
import { services, site } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: `Industrial Safety Services — ${site.name}` },
      { name: "description", content: "H2S standby, confined space entry, gas detector rental, sales and calibration across Indonesia." },
      { property: "og:title", content: `Services — ${site.name}` },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Turnkey industrial safety, delivered end to end."
        description="Five specialist service lines designed for oil & gas, petrochemical, mining and marine operators — mobilised in 24 hours."
        breadcrumbs={[{ label: "Services" }]}
        image={img.h2sService}
      />
      <section className="container-page py-16 md:py-24">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} slug={s.slug} title={s.title} short={s.short} Icon={s.icon} />
          ))}
        </div>
        <SectionHeading
          eyebrow="Also available"
          title="Rental & retail gas detection."
          description="Explore our full portable and fixed detection catalogue — Dräger, MSA, Honeywell, RKI and more — available for rent or purchase, calibrated and ready to deploy."
          className="mt-16"
        />
      </section>
      <CTABanner />
    </>
  );
}

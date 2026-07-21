import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { CTABanner } from "@/components/site/cta-banner";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { InquiryForm } from "@/components/site/inquiry-form";
import { PageHero, SectionHeading } from "@/components/site/page-hero";
import { resolveImg } from "@/lib/assets";
import { services, site } from "@/lib/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }] };
    }
    const s = loaderData.service;
    return {
      meta: [
        { title: `${s.title} — ${site.name}` },
        { name: "description", content: s.short },
        { property: "og:title", content: `${s.title} — ${site.name}` },
        { property: "og:description", content: s.short },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/services/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.title,
            description: s.overview,
            provider: { "@type": "Organization", name: site.name },
            areaServed: "ID",
          }),
        },
      ],
    };
  },
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="font-heading text-3xl font-bold">Service not found</h1>
      <Link to="/services" className="mt-4 inline-block text-primary">View all services</Link>
    </div>
  ),
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.short}
        breadcrumbs={[{ label: "Services", to: "/services" }, { label: service.title }]}
        image={resolveImg(service.image)}
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr,1fr]">
          <div>
            <SectionHeading eyebrow="Overview" title={`${service.title.split(" ")[0]} — how we deliver it.`} />
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{service.overview}</p>

            <div className="mt-12">
              <SectionHeading eyebrow="Benefits" title="Why operators choose us for this scope." />
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 rounded-lg border border-border bg-surface p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-foreground/80">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <SectionHeading eyebrow="Scope of work" title="Included in a standard engagement." />
              <ul className="mt-6 divide-y divide-border rounded-xl border border-border bg-surface">
                {service.scope.map((item, i) => (
                  <li key={item} className="flex items-start gap-4 p-4">
                    <span className="font-heading text-sm font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-sm text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <SectionHeading eyebrow="Process" title="Five-step delivery." />
              <ol className="mt-6 grid gap-4 md:grid-cols-5">
                {service.process.map((p, i) => (
                  <li key={p.title} className="rounded-xl border border-border bg-surface p-4">
                    <div className="font-heading text-2xl font-bold text-primary">0{i + 1}</div>
                    <p className="mt-2 font-heading text-sm font-bold">{p.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{p.body}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-12">
              <SectionHeading eyebrow="Equipment & team" title="What we bring to site." />
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.equipment.map((e) => (
                  <li key={e} className="flex items-start gap-2 rounded-lg bg-muted/50 p-3 text-sm text-foreground/80">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <SectionHeading eyebrow="FAQ" title="Common questions." />
              <div className="mt-4">
                <FaqAccordion items={service.faqs} />
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <InquiryForm defaultService={service.title} />
            <div className="mt-6 rounded-xl border border-border bg-surface p-6">
              <p className="font-heading text-sm font-bold uppercase tracking-wider text-primary">Other services</p>
              <ul className="mt-3 space-y-2 text-sm">
                {services
                  .filter((s) => s.slug !== service.slug)
                  .map((s) => (
                    <li key={s.slug}>
                      <Link
                        to="/services/$slug"
                        params={{ slug: s.slug }}
                        className="flex items-center justify-between gap-2 text-foreground/80 hover:text-primary"
                      >
                        {s.title}
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

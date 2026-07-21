import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

import { CTABanner } from "@/components/site/cta-banner";
import { InquiryForm } from "@/components/site/inquiry-form";
import { PageHero, SectionHeading } from "@/components/site/page-hero";
import { img } from "@/lib/assets";
import { industries, services, site } from "@/lib/site";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const industry = industries.find((i) => i.slug === params.slug);
    if (!industry) throw notFound();
    return { industry };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Industry not found" }, { name: "robots", content: "noindex" }] };
    const i = loaderData.industry;
    return {
      meta: [
        { title: `${i.name} Safety Services — ${site.name}` },
        { name: "description", content: i.short },
        { property: "og:title", content: `${i.name} — ${site.name}` },
        { property: "og:description", content: i.short },
        { property: "og:url", content: `/industries/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/industries/${params.slug}` }],
    };
  },
  component: IndustryDetail,
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="font-heading text-3xl font-bold">Industry not found</h1>
      <Link to="/industries" className="mt-4 inline-block text-primary">All industries</Link>
    </div>
  ),
});

function IndustryDetail() {
  const { industry } = Route.useLoaderData();
  return (
    <>
      <PageHero
        eyebrow="Industry"
        title={`${industry.name} — safety programs that fit.`}
        description={industry.short}
        breadcrumbs={[{ label: "Industries", to: "/industries" }, { label: industry.name }]}
        image={img.hero}
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Challenges" title="What makes this sector different." />
            <ul className="mt-6 space-y-3">
              {industry.challenges.map((c) => (
                <li key={c} className="flex items-start gap-3 rounded-lg border border-border bg-surface p-4">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground/80">{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Solutions" title="How we support you." />
            <ul className="mt-6 space-y-3">
              {industry.solutions.map((s) => (
                <li key={s} className="flex items-start gap-3 rounded-lg border border-border bg-surface p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground/80">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/40 py-16 md:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="Relevant services" title="Common engagements in this sector." align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="rounded-2xl border border-border bg-surface p-6 shadow-card transition hover:-translate-y-1 hover:shadow-elevated"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-heading text-base font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr,1.2fr]">
          <SectionHeading
            eyebrow="Talk to us"
            title={`Scope a ${industry.name.toLowerCase()} safety program.`}
            description="Tell us your site, scope and dates. We'll come back within a working day."
          />
          <InquiryForm />
        </div>
      </section>

      <CTABanner />
    </>
  );
}

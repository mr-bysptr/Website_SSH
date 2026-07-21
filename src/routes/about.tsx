import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { CTABanner } from "@/components/site/cta-banner";
import { PageHero, SectionHeading } from "@/components/site/page-hero";
import { CertificationsGrid } from "@/components/site/industries-strip";
import { StatCounter } from "@/components/site/stat-counter";
import { img } from "@/lib/assets";
import { site } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${site.name}` },
      { name: "description", content: `Learn about ${site.name}, Indonesia's specialist industrial safety services partner since ${new Date().getFullYear() - site.years}.` },
      { property: "og:title", content: `About — ${site.name}` },
      { property: "og:description", content: `${site.years}+ years of H2S, confined space and gas detection services across Indonesia.` },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Fifteen years of keeping Indonesian crews safe."
        description={`${site.name} is an industrial safety support services company built for oil & gas, petrochemical, mining and marine operators. Certified people, calibrated equipment, disciplined process.`}
        breadcrumbs={[{ label: "About" }]}
        image={img.hero}
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr,1fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Our story" title="Built by HSE practitioners, for HSE leaders." />
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                Surya Segara Hana was founded to solve a stubborn problem: high-hazard Indonesian
                sites needed safety cover that could actually mobilise fast, document everything,
                and stay incident-free through the toughest turnarounds.
              </p>
              <p>
                Fifteen years on, we run standby H2S crews, confined space entry teams and a fully
                calibrated detection fleet across the archipelago — for national oil companies,
                international majors, mining houses and marine operators.
              </p>
              <p>
                Every job we take is measured on the same three metrics: zero incidents, complete
                documentation, on-time delivery.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: site.years, s: "+", l: "Years experience" },
              { v: site.projects, s: "+", l: "Projects delivered" },
              { v: site.clients, s: "+", l: "Enterprise clients" },
              { v: 2400000, s: "", l: "Safe man-hours" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-border bg-surface p-5 shadow-card">
                <StatCounter value={s.v} suffix={s.s} label={s.l} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/40 py-16 md:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="Our values" title="The four things we don't compromise on." align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Safety first", b: "Every decision is filtered through: does this bring the crew home?" },
              { t: "Discipline", b: "Documented process, calibrated equipment, certified people. No shortcuts." },
              { t: "Speed", b: "24-hour mobilisation is the standard, not the exception." },
              { t: "Partnership", b: "We work alongside your HSE team — never around them." },
            ].map((v) => (
              <div key={v.t} className="rounded-2xl border border-border bg-surface p-6">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-heading text-lg font-bold text-foreground">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <SectionHeading eyebrow="Certifications" title="Independently certified across every service line." align="center" />
        <div className="mt-10">
          <CertificationsGrid />
        </div>
        <div className="mt-10 text-center">
          <Link to="/certifications" className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
            View all certifications <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

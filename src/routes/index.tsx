import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

import { CTABanner } from "@/components/site/cta-banner";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { InquiryForm } from "@/components/site/inquiry-form";
import { CertificationsGrid, ClientLogos, IndustriesStrip } from "@/components/site/industries-strip";
import { ProductCard } from "@/components/site/product-card";
import { SectionHeading } from "@/components/site/page-hero";
import { ServiceCard } from "@/components/site/service-card";
import { StatCounter } from "@/components/site/stat-counter";
import { TestimonialSlider } from "@/components/site/testimonial-slider";
import { img } from "@/lib/assets";
import { faqs, products, services, site, trustBadges } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — H2S, Confined Space & Gas Detection Services` },
      {
        name: "description",
        content:
          "Indonesia's specialist industrial safety partner. H2S standby, confined space entry, gas detector rental, sales and calibration for oil & gas, petrochemical, mining and marine operators.",
      },
      { property: "og:title", content: `${site.name} — Industrial Safety Services` },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <CompanyOverview />
      <ServicesSection />
      <IndustriesSection />
      <WhyChooseUs />
      <FeaturedProducts />
      <ProjectHighlights />
      <ClientsSection />
      <CertsSection />
      <TestimonialsSection />
      <StatsCounters />
      <FaqSection />
      <CTABanner />
      <ContactSection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      {/* Background Sunset Refinery Plant Image - Ultra HD Quality & Clarity */}
      <img
        src={img.hero}
        alt="Industrial refinery plant at sunset with glowing lights"
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover object-[center_75%] md:object-[center_70%] opacity-90 md:opacity-95 brightness-[1.04] contrast-[1.08] saturate-[1.18] transition-all duration-700 [image-rendering:high-quality]"
        width={1920}
        height={1080}
      />
      {/* Clean gradient overlay balancing text legibility on the left while leaving the HD refinery 100% crisp on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/65 to-transparent md:from-slate-950/90 md:via-slate-950/45 md:to-transparent" />
      <div className="absolute inset-0 opacity-10 grid-pattern" aria-hidden />

      <div className="container-page relative py-20 md:py-28 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl lg:max-w-3xl"
        >
          <span className="eyebrow text-primary">Industrial Safety · Since {new Date().getFullYear() - site.years}</span>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-[1.08] md:text-5xl lg:text-6xl">
            End-to-end industrial safety solutions,{" "}
            <span className="text-primary">from detection to response</span>.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            Specialist H2S, confined space entry and gas detection services for Indonesia's most
            demanding operators — mobilised in under 24 hours, delivered with audit-ready
            documentation.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-elevated transition hover:bg-primary-hover"
            >
              Request Quotation <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="inline-flex h-12 items-center gap-2 rounded-md border border-white/25 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/80">
            {trustBadges.slice(0, 4).map((b) => (
              <li key={b} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="container-page grid grid-cols-2 gap-8 py-8 sm:grid-cols-4 lg:grid-cols-5">
        <Stat value={site.years} suffix="+" label="Years experience" />
        <Stat value={site.projects} suffix="+" label="Projects delivered" />
        <Stat value={site.clients} suffix="+" label="Enterprise clients" />
        <Stat value={24} suffix="/7" label="Emergency response" />
        <div className="col-span-2 hidden items-center gap-2 sm:col-span-4 lg:col-span-1 lg:flex">
          <span className="text-xs uppercase tracking-wider text-muted-foreground">Safe man-hours</span>
          <span className="font-heading text-2xl font-bold text-foreground">{site.manHours}</span>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  return (
    <div>
      <div className="font-heading text-3xl font-bold text-foreground md:text-4xl">
        {value.toLocaleString()}
        {suffix}
      </div>
      <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
    </div>
  );
}

function CompanyOverview() {
  return (
    <section className="container-page py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <img
            src={img.h2sService}
            alt="H2S safety technicians in full SCBA at an industrial site"
            width={1200}
            height={900}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-elevated"
          />
          <div className="absolute -bottom-6 -right-6 hidden rounded-xl border border-border bg-surface p-5 shadow-elevated md:block">
            <p className="font-heading text-2xl font-bold text-primary">{site.manHours}</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Recorded safe man-hours</p>
          </div>
        </div>
        <div>
          <SectionHeading
            eyebrow="Who we are"
            title="Indonesia's specialist industrial safety partner."
            description="For over 15 years, Surya Segara Hana has kept crews safe on the country's most demanding oil & gas, petrochemical and mining operations. We combine certified people, calibrated equipment and disciplined process."
          />
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Nationwide crews, mobilised in 24 hours",
              "Certified detection fleet — Dräger, MSA, Honeywell, RKI",
              "ISO 9001 / 45001 / 14001 management system",
              "Migas & Kemnaker registered equipment and personnel",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-foreground/80">{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/about"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary-hover"
            >
              About the company <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/certifications"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-border px-5 text-sm font-semibold text-foreground hover:bg-muted"
            >
              View certifications
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="border-y border-border bg-muted/40 py-16 md:py-24">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Our services"
            title="Turnkey safety, from atmosphere testing to full turnaround cover."
            description="Five specialist services — designed to sit alongside your HSE team, not replace it."
          />
          <Link to="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
            All services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} slug={s.slug} title={s.title} short={s.short} Icon={s.icon} />
          ))}
          <div className="flex flex-col justify-between rounded-2xl border border-dashed border-border bg-surface p-6 md:p-8">
            <div>
              <p className="font-heading text-lg font-bold">Also available</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>• Rental Gas Detector fleet</li>
                <li>• Retail Gas Detector sales</li>
                <li>• Fixed detection system design</li>
              </ul>
            </div>
            <Link to="/products" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
              Explore products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section className="container-page py-16 md:py-24">
      <SectionHeading
        eyebrow="Industries"
        title="Trusted across seven high-hazard sectors."
        description="From offshore rigs to underground mines, our teams work where atmosphere risk is highest."
        align="center"
      />
      <div className="mt-10">
        <IndustriesStrip />
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const pillars = [
    { title: "Rapid mobilisation", body: "24-hour standard mobilisation across Indonesia; 6-hour emergency response in Java and Kalimantan." },
    { title: "Certified people", body: "H2S, CSE and rescue certifications refreshed annually — with documentation shipped on every job." },
    { title: "Audit-ready records", body: "Digital calibration certificates, permit logs and post-job reports for every mobilisation." },
    { title: "Best-in-class fleet", body: "Dräger, MSA, Honeywell, RKI portable and fixed detection maintained to ISO 17025-aligned procedures." },
  ];
  return (
    <section className="border-y border-border bg-secondary py-16 text-secondary-foreground md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why choose us"
          title="Four things you can count on."
          description="Every enquiry gets the same discipline — whether it's a single tank entry or a refinery turnaround."
          className="text-white [&_h2]:text-white [&_p]:text-white/70"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="font-heading text-3xl font-bold text-primary">0{i + 1}</div>
              <h3 className="mt-3 font-heading text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProducts() {
  return (
    <section className="container-page py-16 md:py-24">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Featured products"
          title="Portable and fixed detection — rental or purchase."
          description="A curated selection from our full catalogue. Ask us for the complete list."
        />
        <Link to="/products" className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
          Browse catalogue <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.slice(0, 6).map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  );
}

function ProjectHighlights() {
  const items = [
    { title: "Refinery turnaround — East Kalimantan", meta: "Oil & Gas · 42 days · Zero LTI", slug: "kalimantan-turnaround", image: img.hero },
    { title: "Geothermal H2S monitoring — West Java", meta: "Energy · 36 detectors · 99.97% uptime", slug: "geothermal-h2s-monitoring", image: img.h2sService },
    { title: "Port tank-cleaning — Tanjung Priok", meta: "Marine · 18 vessels · 42 detectors on hire", slug: "port-tank-clean-marine", image: img.confinedSpace },
  ];
  return (
    <section className="border-y border-border bg-muted/40 py-16 md:py-24">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Project highlights"
            title="A track record of incident-free delivery."
          />
          <Link to="/projects" className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
            All projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 text-xs uppercase tracking-wider text-white/80">
                  {p.meta}
                </p>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-base font-bold text-foreground">{p.title}</h3>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Read case study <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientsSection() {
  return (
    <section className="container-page py-16 md:py-20">
      <SectionHeading
        eyebrow="Trusted by"
        title="Enterprise operators across Indonesia."
        align="center"
      />
      <div className="mt-8">
        <ClientLogos />
      </div>
    </section>
  );
}

function CertsSection() {
  return (
    <section className="border-y border-border bg-muted/40 py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Certifications"
          title="Independently certified. Nationally registered."
          align="center"
        />
        <div className="mt-10">
          <CertificationsGrid />
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="container-page py-16 md:py-24">
      <SectionHeading eyebrow="What clients say" title="Trusted by HSE leaders across Indonesia." />
      <div className="mt-10">
        <TestimonialSlider />
      </div>
    </section>
  );
}

function StatsCounters() {
  return (
    <section className="border-y border-border bg-secondary py-16 text-secondary-foreground md:py-20">
      <div className="container-page grid grid-cols-2 gap-8 text-center md:grid-cols-4 [&_p]:text-white/60 [&_div]:text-white">
        <StatCounter value={site.years} suffix="+" label="Years experience" />
        <StatCounter value={site.projects} suffix="+" label="Projects delivered" />
        <StatCounter value={site.clients} suffix="+" label="Enterprise clients" />
        <StatCounter value={2400000} label="Safe man-hours" />
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="container-page py-16 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[1fr,1.4fr]">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers to what buyers usually ask."
          description="Still curious? Send us a message and we'll respond within a working day."
        />
        <FaqAccordion items={faqs} />
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="container-page py-16 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[1fr,1.2fr]">
        <div>
          <SectionHeading
            eyebrow="Get in touch"
            title="Tell us about your site. We'll build the safety plan."
            description="Enterprise buyers reach a specialist within one working day. Enquiries for standing rental accounts are prioritised."
          />
          <div className="mt-6 space-y-3 text-sm">
            <p className="flex items-start gap-2 text-foreground/80"><Phone className="mt-0.5 h-4 w-4 text-primary" /> {site.phone}</p>
            <p className="flex items-start gap-2 text-foreground/80"><ShieldCheck className="mt-0.5 h-4 w-4 text-primary" /> {site.hours}</p>
          </div>
        </div>
        <InquiryForm />
      </div>
    </section>
  );
}

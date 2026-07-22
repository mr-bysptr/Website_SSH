import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { CTABanner } from "@/components/site/cta-banner";
import { PageHero } from "@/components/site/page-hero";
import { img } from "@/lib/assets";
import { industries, site, getLocalizedIndustries } from "@/lib/site";
import { useLanguage } from "@/lib/language-context";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: `Industries We Serve — ${site.name}` },
      { name: "description", content: "Industrial safety programs for oil & gas, petrochemical, mining, marine, manufacturing, construction and energy operators across Indonesia." },
      { property: "og:title", content: `Industries — ${site.name}` },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesIndex,
});

function IndustriesIndex() {
  const { t, language } = useLanguage();
  const localizedIndustries = getLocalizedIndustries(language);

  return (
    <>
      <PageHero
        eyebrow={t("Sektor Industri", "Industries")}
        title={t("Program keselamatan spesialis untuk tujuh sektor industri berrisiko tinggi.", "Specialist safety programs for seven high-hazard sectors.")}
        description={t(
          "Setiap industri memiliki profil atmosfer, ruang terbatas, dan regulasi tersendiri. Layanan kami disesuaikan untuk memenuhi kebutuhan tersebut.",
          "Every industry has its own atmosphere, entry and regulatory profile. Our services flex to match."
        )}
        breadcrumbs={[{ label: t("Sektor Industri", "Industries") }]}
        image={img.hero}
      />
      <section className="container-page py-16 md:py-24">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {localizedIndustries.map((i) => (
            <Link
              key={i.slug}
              to="/industries/$slug"
              params={{ slug: i.slug }}
              className="group flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 shadow-card transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated"
            >
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                <i.icon className="h-6 w-6" />
              </span>
              <h3 className="font-heading text-xl font-bold text-foreground">{i.name}</h3>
              <p className="text-sm text-muted-foreground">{i.short}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                {t("Jelajahi program", "Explore programs")} <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CTABanner />
    </>
  );
}

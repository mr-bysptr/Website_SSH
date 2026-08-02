import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { CTABanner } from "@/components/site/cta-banner";
import { PageHero } from "@/components/site/page-hero";
import { img } from "@/lib/assets";
import { industries, site, getLocalizedIndustries } from "@/lib/site";
import { useLanguage } from "@/lib/language-context";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
            <Dialog key={i.slug}>
              <DialogTrigger className="group flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 shadow-card transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated text-left outline-none">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <i.icon className="h-6 w-6" />
                </span>
                <h3 className="font-heading text-xl font-bold text-foreground">{i.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{i.short}</p>
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  {t("Jelajahi program", "Explore programs")} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </DialogTrigger>

              <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
                <DialogHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <i.icon className="h-6 w-6" />
                  </div>
                  <DialogTitle className="text-2xl font-bold">{i.name}</DialogTitle>
                  <DialogDescription className="text-base mt-2">
                    {i.short}
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="font-semibold text-foreground">{t("Tantangan", "Challenges")}</h4>
                    <ul className="mt-3 space-y-2">
                      {i.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{t("Solusi Kami", "Our Solutions")}</h4>
                    <ul className="mt-3 space-y-2">
                      {i.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </section>
      <CTABanner />
    </>
  );
}

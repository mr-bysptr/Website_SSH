import { createFileRoute } from "@tanstack/react-router";

import { CTABanner } from "@/components/site/cta-banner";
import { PageHero, SectionHeading } from "@/components/site/page-hero";
import { ServiceCard } from "@/components/site/service-card";
import { img } from "@/lib/assets";
import { services, site, getLocalizedServices } from "@/lib/site";
import { useLanguage } from "@/lib/language-context";

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
  const { t, language } = useLanguage();
  const localizedServices = getLocalizedServices(language);

  return (
    <>
      <PageHero
        eyebrow={t("Layanan Kami", "Services")}
        title={t("Keselamatan industri terpadu, disampaikan secara menyeluruh.", "Turnkey industrial safety, delivered end to end.")}
        description={t(
          "Layanan spesialis yang dirancang untuk operator minyak & gas, petrokimia, pertambangan, dan maritim — dimobilisasi dalam 24 jam.",
          "Five specialist service lines designed for oil & gas, petrochemical, mining and marine operators — mobilised in 24 hours."
        )}
        breadcrumbs={[{ label: t("Layanan", "Services") }]}
        image={img.h2sService}
      />
      <section className="container-page py-16 md:py-24">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {localizedServices.map((s) => (
            <ServiceCard key={s.slug} slug={s.slug} title={s.title} short={s.short} Icon={s.icon} />
          ))}
        </div>
        <SectionHeading
          eyebrow={t("Juga Tersedia", "Also available")}
          title={t("Sewa & Penjualan Deteksi Gas.", "Rental & retail gas detection.")}
          description={t(
            "Jelajahi katalog deteksi portabel dan tetap lengkap kami — Dräger, MSA, Honeywell, RKI, dan lainnya — tersedia untuk disewa atau dibeli, terkalibrasi dan siap digunakan.",
            "Explore our full portable and fixed detection catalogue — Dräger, MSA, Honeywell, RKI and more — available for rent or purchase, calibrated and ready to deploy."
          )}
          className="mt-16"
        />
      </section>
      <CTABanner />
    </>
  );
}

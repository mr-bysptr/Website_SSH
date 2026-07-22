import { createFileRoute } from "@tanstack/react-router";

import { CTABanner } from "@/components/site/cta-banner";
import { PageHero, SectionHeading } from "@/components/site/page-hero";
import { CertificationsGrid } from "@/components/site/industries-strip";
import { img } from "@/lib/assets";
import { site, trustBadges } from "@/lib/site";
import { useLanguage } from "@/lib/language-context";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: `Certifications & Compliance — ${site.name}` },
      { name: "description", content: "ISO 9001, ISO 45001, ISO 14001, Migas and Kemnaker certifications for industrial safety services across Indonesia." },
      { property: "og:title", content: `Certifications — ${site.name}` },
      { property: "og:url", content: "/certifications" },
    ],
    links: [{ rel: "canonical", href: "/certifications" }],
  }),
  component: Certifications,
});

function Certifications() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t("Sertifikasi", "Certifications")}
        title={t("Tersertifikasi secara independen. Terdaftar secara nasional.", "Independently certified. Nationally registered.")}
        description={t(
          "Sistem manajemen, peralatan, dan personel kami tersertifikasi sesuai standar internasional yang diakui — dan terdaftar resmi di regulator Indonesia.",
          "Our management system, equipment and personnel are certified against internationally recognised standards — and registered with Indonesian regulators."
        )}
        breadcrumbs={[{ label: t("Sertifikasi", "Certifications") }]}
        image={img.calibrationLab}
      />
      <section className="container-page py-16 md:py-24">
        <CertificationsGrid />

        <SectionHeading
          eyebrow={t("Penyelarasan Regulasi", "Regulatory alignment")}
          title={t("Kami bekerja sesuai standar audit yang Anda tetapkan.", "We work to the standards buyers audit against.")}
          className="mt-16"
        />
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {trustBadges.concat(["OSHA 1910.146 aligned", "IADC member", "IECEx / ATEX capable"]).map((b) => (
            <li key={b} className="rounded-lg border border-border bg-surface p-4 text-sm font-semibold text-foreground">
              {b}
            </li>
          ))}
        </ul>
      </section>
      <CTABanner />
    </>
  );
}

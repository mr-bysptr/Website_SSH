import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { CTABanner } from "@/components/site/cta-banner";
import { PageHero, SectionHeading } from "@/components/site/page-hero";
import { CertificationsGrid } from "@/components/site/industries-strip";
import { StatCounter } from "@/components/site/stat-counter";
import { img } from "@/lib/assets";
import { site } from "@/lib/site";
import { useLanguage } from "@/lib/language-context";

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
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t("Tentang Kami", "About us")}
        title={t("Sebelas tahun menjaga keselamatan tim kerja di Indonesia.", "Eleven years of keeping Indonesian crews safe.")}
        description={t(
          `${site.name} adalah perusahaan layanan dukungan keselamatan industri yang dibangun untuk operator minyak & gas, petrokimia, pertambangan, dan maritim. Personel tersertifikasi, peralatan terkalibrasi, dan proses terdisiplin.`,
          `${site.name} is an industrial safety support services company built for oil & gas, petrochemical, mining and marine operators. Certified people, calibrated equipment, disciplined process.`
        )}
        breadcrumbs={[{ label: t("Tentang Kami", "About") }]}
        image={img.hero}
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr,1fr] lg:items-center">
          <div>
            <SectionHeading eyebrow={t("Kisah Kami", "Our story")} title={t("Dibuat oleh praktisi HSE, untuk para pemimpin HSE.", "Built by HSE practitioners, for HSE leaders.")} />
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                {t(
                  "Surya Segara Hana didirikan untuk menyelesaikan masalah utama: situs berisiko tinggi di Indonesia membutuhkan perlindungan keselamatan yang dapat dimobilisasi dengan cepat, mendokumentasikan segalanya, dan tetap bebas dari insiden.",
                  "Surya Segara Hana was founded to solve a stubborn problem: high-hazard Indonesian sites needed safety cover that could actually mobilise fast, document everything, and stay incident-free through the toughest turnarounds."
                )}
              </p>
              <p>
                {t(
                  "Sebelas tahun berjalan, kami mengoperasikan tim siaga H2S, tim pekerjaan ruang terbatas (confined space), dan armada deteksi terkalibrasi penuh di seluruh nusantara.",
                  "Eleven years on, we run standby H2S crews, confined space entry teams and a fully calibrated detection fleet across the archipelago — for national oil companies, international majors, mining houses and marine operators."
                )}
              </p>
              <p>
                {t(
                  "Setiap pekerjaan yang kami ambil diukur berdasarkan tiga metrik utama: nol insiden, dokumentasi lengkap, dan penyampaian tepat waktu.",
                  "Every job we take is measured on the same three metrics: zero incidents, complete documentation, on-time delivery."
                )}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: site.years, s: "+", l: t("Tahun Pengalaman", "Years experience") },
              { v: site.projects, s: "+", l: t("Proyek Selesai", "Projects delivered") },
              { v: site.clients, s: "+", l: t("Klien Perusahaan", "Enterprise clients") },
              { v: 2400000, s: "", l: t("Jam Kerja Aman", "Safe man-hours") },
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
          <SectionHeading eyebrow={t("Nilai-Nilai Kami", "Our values")} title={t("Empat hal yang tidak pernah kami kompromikan.", "The four things we don't compromise on.")} align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { t: t("Utamakan Keselamatan", "Safety first"), b: t("Setiap keputusan disaring berdasarkan: apakah ini membawa pekerja pulang dengan selamat?", "Every decision is filtered through: does this bring the crew home?") },
              { t: t("Kedisiplinan", "Discipline"), b: t("Proses terdokumentasi, peralatan terkalibrasi, personel tersertifikasi. Tanpa jalan pintas.", "Documented process, calibrated equipment, certified people. No shortcuts.") },
              { t: t("Kecepatan", "Speed"), b: t("Mobilisasi 24 jam adalah standar utama kami.", "24-hour mobilisation is the standard, not the exception.") },
              { t: t("Kemitraan", "Partnership"), b: t("Kami bekerja berdampingan dengan tim HSE Anda.", "We work alongside your HSE team — never around them.") },
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
        <SectionHeading eyebrow={t("Sertifikasi", "Certifications")} title={t("Tersertifikasi secara independen di setiap lini layanan.", "Independently certified across every service line.")} align="center" />
        <div className="mt-10">
          <CertificationsGrid />
        </div>
        <div className="mt-10 text-center">
          <Link to="/certifications" className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
            {t("Lihat semua sertifikasi", "View all certifications")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

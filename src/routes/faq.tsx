import { createFileRoute } from "@tanstack/react-router";

import { CTABanner } from "@/components/site/cta-banner";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { PageHero } from "@/components/site/page-hero";
import { faqs, services, site, getLocalizedFaqs, getLocalizedServices } from "@/lib/site";
import { useLanguage } from "@/lib/language-context";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: `Frequently Asked Questions — ${site.name}` },
      { name: "description", content: "Answers to common questions about H2S standby, confined space entry, gas detector rental and calibration services in Indonesia." },
      { property: "og:title", content: `FAQ — ${site.name}` },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQ,
});

function FAQ() {
  const { t, language } = useLanguage();
  const localizedFaqs = getLocalizedFaqs(language);
  const localizedServices = getLocalizedServices(language);
  const combined = [...localizedFaqs, ...localizedServices.flatMap((s) => s.faqs)];

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={t("Jawaban atas pertanyaan yang paling sering diajukan.", "Answers to what buyers ask most.")}
        description={t("Masih memiliki pertanyaan? Kirimkan pesan dan spesialis kami akan merespons dalam 1 hari kerja.", "Still curious? Send us a message and a specialist will respond within one working day.")}
        breadcrumbs={[{ label: "FAQ" }]}
      />
      <section className="container-page max-w-4xl py-16 md:py-24">
        <FaqAccordion items={combined} />
      </section>
      <CTABanner />
    </>
  );
}

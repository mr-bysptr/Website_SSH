import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";

import { CTABanner } from "@/components/site/cta-banner";
import { PageHero } from "@/components/site/page-hero";
import { resolveImg } from "@/lib/assets";
import { posts, site } from "@/lib/site";
import { useLanguage } from "@/lib/language-context";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: `Insights & Safety Guides — ${site.name}` },
      { name: "description", content: "Field notes and practical guides on H2S monitoring, confined space entry and gas detector calibration for Indonesian operators." },
      { property: "og:title", content: `Insights — ${site.name}` },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t("Wawasan & Artikel", "Insights")}
        title={t("Catatan lapangan dari garda depan keselamatan industri.", "Field notes from Indonesia's safety front line.")}
        description={t(
          "Panduan praktis mengenai pemantauan H2S, ruang terbatas, dan kalibrasi detektor gas — ditulis oleh tim HSE kami.",
          "Practical guides on H2S monitoring, confined space entry and detector calibration — written by our HSE team."
        )}
        breadcrumbs={[{ label: t("Wawasan", "Insights") }]}
      />
      <section className="container-page py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img src={resolveImg(p.image)} alt={p.title} loading="lazy" className="h-full w-full object-cover transition group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground">
                  <span>{new Date(p.date).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {p.readMinutes} {t("menit baca", "min read")}</span>
                </p>
                <h3 className="mt-3 font-heading text-xl font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{p.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  {t("Baca artikel", "Read article")} <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CTABanner />
    </>
  );
}

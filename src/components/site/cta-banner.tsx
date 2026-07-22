import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { buildWhatsAppUrl, site } from "@/lib/site";
import { useLanguage } from "@/lib/language-context";

export function CTABanner({
  title,
  description,
  primaryLabel,
  primaryTo = "/contact",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryTo?: string;
}) {
  const { t } = useLanguage();

  const finalTitle = title || t("Dapatkan penawaran harga kurang dari 24 jam.", "Request a quotation in under 24 hours.");
  const finalDescription = description || t("Beritahu kami lokasi, ruang lingkup, dan tanggal pelaksanaan. Tim HSE kami akan menyiapkan program keselamatan dan memobilisasi tim dalam 1 hari kerja.", "Tell us the site, scope and dates. Our HSE team will scope the safety program and mobilise a crew within a working day.");
  const finalPrimaryLabel = primaryLabel || t("Minta Penawaran", "Request Quotation");

  return (
    <section className="container-page my-16 md:my-24">
      <div className="relative overflow-hidden rounded-2xl bg-secondary p-8 text-secondary-foreground shadow-elevated md:p-14">
        <div className="absolute inset-0 opacity-20 grid-pattern" aria-hidden />
        <div
          className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/40 blur-3xl"
          aria-hidden
        />
        <div className="relative grid gap-8 md:grid-cols-[1.4fr,1fr] md:items-center">
          <div>
            <span className="eyebrow text-primary">{t("Diskusi Dengan Kami", "Let's talk")}</span>
            <h2 className="mt-3 font-heading text-2xl font-bold leading-tight md:text-4xl">
              {finalTitle}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/75 md:text-base">
              {finalDescription}
            </p>
          </div>
          <div className="flex flex-col gap-3 md:justify-self-end">
            <Link
              to={primaryTo as never}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-card transition hover:bg-primary-hover"
            >
              {finalPrimaryLabel} <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/20 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
            <a
              href={buildWhatsAppUrl(t("Halo Surya Segara, saya ingin minta penawaran.", "Hello Surya Segara, I would like a quotation."))}
              target="_blank"
              rel="noopener"
              className="text-center text-xs text-white/60 hover:text-white"
            >
              {t("atau chat di WhatsApp", "or chat on WhatsApp")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { services, industries, site, buildEmailUrl } from "@/lib/site";
import { useLanguage } from "@/lib/language-context";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="mt-24 border-t border-border bg-secondary text-secondary-foreground">
      <div className="container-page grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-primary text-primary-foreground">
              <span className="font-heading text-lg font-bold leading-none">S</span>
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-heading text-sm font-bold uppercase tracking-wider">Surya Segara Hana</span>
              <span className="text-[10px] uppercase tracking-[0.2em] opacity-70">
                {t("Keselamatan Industri", "Industrial Safety")}
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed opacity-80">
            {t(
              "Layanan H2S spesialis, pekerjaan ruang terbatas (confined space), sewa, penjualan, dan kalibrasi detektor gas untuk minyak & gas, petrokimia, pertambangan, maritim, dan manufaktur di Indonesia.",
              site.description
            )}
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            <li className="flex items-start gap-2.5 opacity-90">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{site.address}</span>
            </li>
            <li>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="flex items-start gap-2.5 opacity-90 transition hover:text-primary"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{site.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={buildEmailUrl()}
                target="_blank"
                rel="noopener"
                className="flex items-start gap-2.5 opacity-90 transition hover:text-primary"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{site.email}</span>
              </a>
            </li>
          </ul>
        </div>

        <FooterCol title={t("Layanan", "Services")}>
          {services.map((s) => (
            <FooterLink key={s.slug} to="/services/$slug" params={{ slug: s.slug }}>
              {s.title}
            </FooterLink>
          ))}
          <FooterLink to="/services">{t("Semua layanan", "All services")}</FooterLink>
        </FooterCol>

        <FooterCol title={t("Industri", "Industries")}>
          {industries.slice(0, 6).map((i) => (
            <FooterLink key={i.slug} to="/industries/$slug" params={{ slug: i.slug }}>
              {i.name}
            </FooterLink>
          ))}
          <FooterLink to="/industries">{t("Semua industri", "All industries")}</FooterLink>
        </FooterCol>

        <FooterCol title={t("Perusahaan", "Company")}>
          <FooterLink to="/about">{t("Tentang Kami", "About")}</FooterLink>
          <FooterLink to="/projects">{t("Proyek", "Projects")}</FooterLink>
          <FooterLink to="/certifications">{t("Sertifikasi", "Certifications")}</FooterLink>
          <FooterLink to="/blog">{t("Wawasan", "Insights")}</FooterLink>
          <FooterLink to="/faq">FAQ</FooterLink>
          <FooterLink to="/contact">{t("Kontak", "Contact")}</FooterLink>
        </FooterCol>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs opacity-70 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. {t("Hak cipta dilindungi undang-undang.", "All rights reserved.")}</p>
          <p>{t("Tersertifikasi · Terdaftar Kemnaker · Berkemampuan IECEx / ATEX", "Certified · Kemnaker Registered · IECEx / ATEX capable")}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="lg:col-span-2">
      <h4 className="mb-4 font-heading text-xs font-bold uppercase tracking-[0.18em] text-primary">
        {title}
      </h4>
      <ul className="space-y-2 text-sm opacity-90">{children}</ul>
    </div>
  );
}

function FooterLink({
  to,
  params,
  children,
}: {
  to: string;
  params?: Record<string, string>;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link to={to as never} params={params as never} className="transition hover:text-primary">
        {children}
      </Link>
    </li>
  );
}

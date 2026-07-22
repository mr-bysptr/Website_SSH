import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  certifications,
  industries,
  getLocalizedIndustries,
  getLocalizedCertifications,
} from "@/lib/site";
import { useLanguage } from "@/lib/language-context";

export function IndustriesStrip() {
  const { language } = useLanguage();
  const localizedIndustries = getLocalizedIndustries(language);

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
      {localizedIndustries.map((i) => (
        <Link
          key={i.slug}
          to="/industries/$slug"
          params={{ slug: i.slug }}
          className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-surface p-4 text-center transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
        >
          <span className="grid h-11 w-11 place-items-center rounded-lg bg-muted text-secondary transition group-hover:bg-primary group-hover:text-primary-foreground">
            <i.icon className="h-5 w-5" />
          </span>
          <span className="text-xs font-semibold text-foreground">{i.name}</span>
          <ArrowRight className="h-3 w-3 text-muted-foreground opacity-0 transition group-hover:opacity-100" />
        </Link>
      ))}
    </div>
  );
}

export function ClientLogos() {
  const logos = [
    "PERTAMINA",
    "MEDCO",
    "CHEVRON",
    "TOTAL",
    "PGN",
    "ADARO",
    "BUKIT ASAM",
    "PLN",
    "PUPUK",
    "SLB",
  ];
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
      {logos.map((l) => (
        <div
          key={l}
          className="grid h-16 place-items-center rounded-lg border border-border bg-surface font-heading text-sm font-bold tracking-[0.2em] text-muted-foreground/60 transition hover:text-foreground"
        >
          {l}
        </div>
      ))}
    </div>
  );
}

export function CertificationsGrid() {
  const { language } = useLanguage();
  const localizedCerts = getLocalizedCertifications(language);

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {localizedCerts.map((c) => (
        <div key={c.name} className="flex items-start gap-4 rounded-xl border border-border bg-surface p-5 shadow-card">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
            <c.icon className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <h3 className="font-heading text-sm font-bold text-foreground">{c.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{c.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

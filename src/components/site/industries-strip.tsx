import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  certifications,
  industries,
  getLocalizedIndustries,
  getLocalizedCertifications,
} from "@/lib/site";
import { useLanguage } from "@/lib/language-context";

import logoCimory from "@/assets/logo perusahaan/Logo Cimory.png";
import logoEni from "@/assets/logo perusahaan/Logo Eni.png";
import logoExxon from "@/assets/logo perusahaan/Logo Exxon.webp";
import logoFergaco from "@/assets/logo perusahaan/Logo Fergaco.webp";
import logoGWDC from "@/assets/logo perusahaan/Logo GWDC.webp";
import logoHCML from "@/assets/logo perusahaan/Logo HCML rev.webp.png";
import logoMayora from "@/assets/logo perusahaan/Logo Mayora.webp";
import logoMubadala from "@/assets/logo perusahaan/Logo Mubadala.webp";
import logoPEPC from "@/assets/logo perusahaan/Logo PEPC.webp";
import logoPHR from "@/assets/logo perusahaan/Logo PHR.webp";
import logoPKPI from "@/assets/logo perusahaan/Logo PKPI.webp";
import logoPTC from "@/assets/logo perusahaan/Logo PTC.webp";
import logoPetrochina from "@/assets/logo perusahaan/Logo Petrochina.webp";
import logoTripatra from "@/assets/logo perusahaan/Logo Tripatra.webp";
import logoLemigas from "@/assets/logo perusahaan/logo lemigas.webp";
import logoBakerHughes from "@/assets/logo perusahaan/bh-logo-hrz-dark_0.webp.png";
import logoSEGS from "@/assets/logo perusahaan/Logo_SEGS.png";
import logoISC from "@/assets/logo perusahaan/logo_isc.png";
import logoGastron from "@/assets/logo perusahaan/Logo_gastron.png";

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
    { name: "Pertamina Hulu Rokan", image: logoPHR },
    { name: "ExxonMobil", image: logoExxon },
    { name: "PetroChina", image: logoPetrochina },
    { name: "Baker Hughes", image: logoBakerHughes },
    { name: "Mubadala Energy", image: logoMubadala },
    { name: "HCML", image: logoHCML },
    { name: "Eni", image: logoEni },
    { name: "PEPC", image: logoPEPC },
    { name: "Tripatra", image: logoTripatra },
    { name: "Lemigas", image: logoLemigas },
    { name: "GWDC", image: logoGWDC },
    { name: "PTC", image: logoPTC },
    { name: "PKPI", image: logoPKPI },
    { name: "Fergaco", image: logoFergaco },
    { name: "Cimory", image: logoCimory },
    { name: "Mayora", image: logoMayora },
    { name: "SEGS", image: logoSEGS },
  ];
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {logos.map((l) => (
        <div
          key={l.name}
          className="group flex h-24 w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.666rem)] md:w-[calc(25%-0.75rem)] lg:w-[calc(20%-0.8rem)] xl:w-[calc(16.666%-0.833rem)] items-center justify-center rounded-xl border border-border bg-surface p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
        >
          <img
            src={l.image}
            alt={`Logo ${l.name}`}
            className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
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

export function DistributorLogos() {
  const logos = [
    { name: "Industrial Scientific", image: logoISC },
    { name: "Gastron", image: logoGastron },
  ];
  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
      {logos.map((l) => (
        <div
          key={l.name}
          className="group flex h-40 w-[calc(50%-0.5rem)] sm:w-80 items-center justify-center rounded-xl border border-border bg-surface p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
        >
          <img 
            src={l.image} 
            alt={`Logo ${l.name}`} 
            className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}

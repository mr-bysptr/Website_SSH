import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { services, industries, site, buildWhatsAppUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("flex items-center gap-2.5", className)} aria-label={site.name}>
      <span className="grid h-10 w-10 place-items-center rounded-md bg-primary text-primary-foreground shadow-card">
        <span className="font-heading text-lg font-bold leading-none">S</span>
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-heading text-sm font-bold uppercase tracking-wider text-foreground">
          Surya Segara
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Hana · Safety
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<null | "services" | "industries" | "products">(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Announcement bar */}
      <div className="hidden bg-secondary text-secondary-foreground md:block">
        <div className="container-page flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-4 opacity-90">
            <span>24/7 emergency response · {site.hours}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex items-center gap-1.5 hover:text-primary-foreground">
              <Phone className="h-3 w-3" /> {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-primary-foreground">
              {site.email}
            </a>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b border-border/60 bg-surface/95 backdrop-blur transition-shadow",
          scrolled && "shadow-card",
        )}
        onMouseLeave={() => setMegaOpen(null)}
      >
        <div className="container-page flex h-16 items-center justify-between gap-6 lg:h-20">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            <Link to="/" className={navLink} activeProps={{ className: navLinkActive }} activeOptions={{ exact: true }}>
              Home
            </Link>
            <Link to="/about" className={navLink} activeProps={{ className: navLinkActive }}>
              About
            </Link>

            <MegaMenuTrigger
              label="Services"
              open={megaOpen === "services"}
              onOpen={() => setMegaOpen("services")}
              onClose={() => setMegaOpen(null)}
            >
              <MegaGrid
                heading="Safety services"
                description="Standby, monitoring and calibration crews mobilised across Indonesia."
                items={services.map((s) => ({
                  title: s.title,
                  body: s.short,
                  to: "/services/$slug",
                  params: { slug: s.slug },
                  Icon: s.icon,
                }))}
                footerCta={{ label: "View all services", to: "/services" }}
                onNavigate={() => setMegaOpen(null)}
              />
            </MegaMenuTrigger>

            <Link to="/products" className={navLink} activeProps={{ className: navLinkActive }}>
              Products
            </Link>

            <MegaMenuTrigger
              label="Industries"
              open={megaOpen === "industries"}
              onOpen={() => setMegaOpen("industries")}
              onClose={() => setMegaOpen(null)}
            >
              <MegaGrid
                heading="Industries we serve"
                description="Specialised programs across seven high-hazard sectors."
                items={industries.map((i) => ({
                  title: i.name,
                  body: i.short,
                  to: "/industries/$slug",
                  params: { slug: i.slug },
                  Icon: i.icon,
                }))}
                footerCta={{ label: "All industries", to: "/industries" }}
                onNavigate={() => setMegaOpen(null)}
                cols={2}
              />
            </MegaMenuTrigger>

            <Link to="/projects" className={navLink} activeProps={{ className: navLinkActive }}>
              Projects
            </Link>
            <Link to="/blog" className={navLink} activeProps={{ className: navLinkActive }}>
              Insights
            </Link>
            <Link to="/contact" className={navLink} activeProps={{ className: navLinkActive }}>
              Contact
            </Link>
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={buildWhatsAppUrl(`Hello ${site.name}, I would like a quotation.`)}
              target="_blank"
              rel="noopener"
              className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-transparent px-4 text-sm font-semibold text-foreground transition hover:border-foreground/40 hover:bg-muted"
            >
              WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-card transition hover:bg-primary-hover"
            >
              Request Quotation
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {mobileOpen && <MobileNav onClose={() => setMobileOpen(false)} />}
    </>
  );
}

const navLink =
  "inline-flex h-10 items-center gap-1 rounded-md px-3 text-sm font-medium text-foreground/80 transition hover:bg-muted hover:text-foreground";
const navLinkActive = "text-foreground bg-muted";

function MegaMenuTrigger({
  label,
  open,
  onOpen,
  onClose: _onClose,
  children,
}: {
  label: string;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="relative" onMouseEnter={onOpen}>
      <button
        type="button"
        className={cn(navLink, open && navLinkActive)}
        aria-expanded={open}
        onClick={onOpen}
      >
        {label}
        <ChevronDown className={cn("h-3.5 w-3.5 transition", open && "rotate-180")} />
      </button>
      {open && (
        <div className="absolute left-1/2 top-full z-40 w-[min(96vw,900px)] -translate-x-1/2 pt-3">
          <div className="rounded-xl border border-border bg-surface p-6 shadow-elevated">{children}</div>
        </div>
      )}
    </div>
  );
}

function MegaGrid({
  heading,
  description,
  items,
  footerCta,
  onNavigate,
  cols = 3,
}: {
  heading: string;
  description: string;
  items: Array<{ title: string; body: string; to: string; params?: Record<string, string>; Icon: React.ComponentType<{ className?: string }> }>;
  footerCta: { label: string; to: string };
  onNavigate: () => void;
  cols?: 2 | 3;
}) {
  return (
    <div>
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <h3 className="font-heading text-lg font-bold text-foreground">{heading}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className={cn("grid gap-2", cols === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2")}>
        {items.map((item) => (
          <Link
            key={item.title}
            to={item.to as never}
            params={item.params as never}
            onClick={onNavigate}
            className="group flex items-start gap-3 rounded-lg border border-transparent p-3 transition hover:border-border hover:bg-muted"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
              <item.Icon className="h-4 w-4" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold text-foreground">{item.title}</span>
              <span className="mt-0.5 line-clamp-2 block text-xs text-muted-foreground">{item.body}</span>
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
        <p className="text-xs text-muted-foreground">Need a bespoke package? Talk to our team.</p>
        <Link
          to={footerCta.to as never}
          onClick={onNavigate}
          className="text-sm font-semibold text-primary hover:text-primary-hover"
        >
          {footerCta.label} →
        </Link>
      </div>
    </div>
  );
}

function MobileNav({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 top-16 z-40 overflow-y-auto bg-background lg:hidden">
      <div className="container-page py-6">
        <nav className="flex flex-col gap-1 text-base font-medium" aria-label="Mobile">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/services", label: "Services" },
            { to: "/products", label: "Products" },
            { to: "/industries", label: "Industries" },
            { to: "/projects", label: "Projects" },
            { to: "/certifications", label: "Certifications" },
            { to: "/blog", label: "Insights" },
            { to: "/faq", label: "FAQ" },
            { to: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to as never}
              onClick={onClose}
              className="rounded-md border border-border bg-surface px-4 py-3 text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-6 flex flex-col gap-2">
          <Link
            to="/contact"
            onClick={onClose}
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-card"
          >
            Request Quotation
          </Link>
          <a
            href={buildWhatsAppUrl(`Hello ${site.name}, I would like a quotation.`)}
            target="_blank"
            rel="noopener"
            className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-surface px-5 text-sm font-semibold text-foreground"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

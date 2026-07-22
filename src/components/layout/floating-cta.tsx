import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { site, buildWhatsAppUrl } from "@/lib/site";
import { useLanguage } from "@/lib/language-context";

export function FloatingWhatsApp() {
  const { t } = useLanguage();
  return (
    <a
      href={buildWhatsAppUrl(t("Halo Surya Segara, saya ingin bertanya.", "Hello Surya Segara, I have an enquiry."))}
      target="_blank"
      rel="noopener"
      aria-label={t("Chat di WhatsApp", "Chat on WhatsApp")}
      className="fixed bottom-24 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-success text-success-foreground shadow-elevated transition hover:scale-105 md:bottom-6 md:right-6"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-success/40" aria-hidden />
    </a>
  );
}

export function MobileStickyCTA() {
  const { t } = useLanguage();
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex gap-2 border-t border-border bg-surface p-3 shadow-[0_-8px_24px_-16px_rgba(0,0,0,0.25)] md:hidden">
      <a
        href={buildWhatsAppUrl(t("Halo Surya Segara, saya ingin bertanya.", "Hello Surya Segara, I have an enquiry."))}
        target="_blank"
        rel="noopener"
        className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-md border border-border bg-transparent text-sm font-semibold text-foreground"
      >
        <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
        WhatsApp
      </a>
      <Link
        to="/contact"
        className="inline-flex h-11 flex-1 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground shadow-card"
      >
        {t("Minta Penawaran", "Request Quote")}
      </Link>
    </div>
  );
}

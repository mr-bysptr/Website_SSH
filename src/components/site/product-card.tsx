import { Link } from "@tanstack/react-router";
import { resolveImg } from "@/lib/assets";
import { site, buildWhatsAppUrl, type Product } from "@/lib/site";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

export function ProductCard({ product, className }: { product: Product; className?: string }) {
  const { t } = useLanguage();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={cn(
            "group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition hover:-translate-y-1 hover:shadow-elevated text-left w-full",
            className,
          )}
        >
      <div className="relative aspect-[4/3] overflow-hidden bg-white p-6">
        <img
          src={resolveImg(product.image)}
          alt={`${product.brand} ${product.name}`}
          loading="lazy"
          className={cn(
            "h-full w-full object-contain transition",
            product.slug === "radius-bz1" && "scale-125 group-hover:scale-[1.35]",
            product.slug === "mx6-ibrid" && "scale-110 group-hover:scale-[1.2]",
            !["radius-bz1", "mx6-ibrid"].includes(product.slug) && "group-hover:scale-105"
          )}
        />
        <span className="absolute left-3 top-3 rounded-full bg-secondary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-secondary-foreground">
          {product.type === "Portable" ? t("Portabel", "Portable") : t("Tetap", "Fixed")}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-primary">{product.brand}</p>
        <h3 className="font-heading text-base font-bold text-foreground">{product.name}</h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{product.short}</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {product.gases.slice(0, 4).map((g) => (
            <span
              key={g}
              className="rounded border border-border bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
            >
              {g}
            </span>
          ))}
          <span className="rounded border border-border bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
            {t("dll", "etc")}
          </span>
        </div>
      </div>
      </button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[700px] gap-0 p-0 overflow-hidden">
        <DialogTitle className="sr-only">{product.name}</DialogTitle>
        <DialogDescription className="sr-only">{product.short}</DialogDescription>
        <div className="grid md:grid-cols-2">
          {/* Left Side: Image */}
          <div className="bg-white p-8 border-b md:border-b-0 md:border-r border-border flex items-center justify-center min-h-[200px] md:min-h-[300px]">
            <img
              src={resolveImg(product.image)}
              alt={`${product.brand} ${product.name}`}
              className="h-48 md:h-64 w-full object-contain"
            />
          </div>
          
          {/* Right Side: Details */}
          <div className="p-6 flex flex-col">
            <DialogHeader className="text-left space-y-1">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-primary">{product.brand}</p>
              <h3 className="font-heading text-2xl font-bold text-foreground">{product.name}</h3>
            </DialogHeader>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{product.short}</p>
            
            <div className="mt-4 flex flex-wrap gap-1.5">
              {product.gases.slice(0, 4).map((g) => (
                <span key={g} className="rounded border border-border bg-muted px-2 py-1 text-[10px] font-medium text-muted-foreground">
                  {g}
                </span>
              ))}
              <span className="rounded border border-border bg-muted px-2 py-1 text-[10px] font-medium text-muted-foreground">
                {t("dll", "etc")}
              </span>
            </div>

            <div className="mt-6 flex-1 overflow-y-auto pr-2">
              <Tabs defaultValue="features">
                <TabsList className="mb-4 w-full">
                  <TabsTrigger value="features" className="flex-1">Fitur</TabsTrigger>
                  <TabsTrigger value="specs" className="flex-1">Spesifikasi</TabsTrigger>
                </TabsList>
                <TabsContent value="features" className="mt-0">
                  <ul className="space-y-2">
                    {product.features.map((f: string) => (
                      <li key={f} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                        <span className="text-xs text-foreground/80 leading-tight">{f}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="specs" className="mt-0">
                  <dl className="divide-y divide-border rounded-lg border border-border bg-surface">
                    {product.specs.map((s: { label: string; value: string }) => (
                      <div key={s.label} className="grid grid-cols-[120px,1fr] gap-3 p-2.5 text-xs">
                        <dt className="font-semibold text-muted-foreground">{s.label}</dt>
                        <dd className="text-foreground">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                </TabsContent>
              </Tabs>
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <a
                href={buildWhatsAppUrl(`Hello ${site.name}, I would like a quotation for the ${product.brand} ${product.name}.`)}
                target="_blank"
                rel="noopener"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#25D366]/90"
              >
                <WhatsAppIcon className="h-4 w-4" /> {t("Tanya via WhatsApp", "Ask via WhatsApp")}
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

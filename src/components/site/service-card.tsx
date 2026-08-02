import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";
import { getLocalizedServices } from "@/lib/site";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ServiceCard({
  slug,
  title,
  short,
  Icon,
  variant = "default",
  className,
}: {
  slug: string;
  title: string;
  short: string;
  Icon: LucideIcon;
  variant?: "default" | "feature";
  className?: string;
}) {
  const { t, language } = useLanguage();
  const service = getLocalizedServices(language).find((s) => s.slug === slug);

  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          "group relative flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 shadow-card transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated md:p-8 text-left outline-none",
          variant === "feature" && "bg-gradient-to-br from-surface to-muted",
          className,
        )}
      >
        <span className="grid h-12 w-12 place-items-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="h-6 w-6" />
        </span>
        <div className="flex-1">
          <h3 className="font-heading text-lg font-bold text-foreground md:text-xl">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{short}</p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          {t("Pelajari selengkapnya", "Learn more")}
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </span>
      </DialogTrigger>
      
      {service && (
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon className="h-6 w-6" />
            </div>
            <DialogTitle className="text-2xl font-bold">{service.title}</DialogTitle>
            <DialogDescription className="text-base mt-2">
              {service.short}
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-6 space-y-6">
            <div>
              <h4 className="font-semibold text-foreground">{t("Ikhtisar", "Overview")}</h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.overview}</p>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="font-semibold text-foreground">{t("Manfaat", "Benefits")}</h4>
                <ul className="mt-3 space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{t("Ruang Lingkup", "Scope of Work")}</h4>
                <ul className="mt-3 space-y-2">
                  {service.scope.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}

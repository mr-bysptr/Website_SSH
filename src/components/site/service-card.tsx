import { Link } from "@tanstack/react-router";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";

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
  const { t } = useLanguage();

  return (
    <Link
      to="/services/$slug"
      params={{ slug }}
      className={cn(
        "group relative flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 shadow-card transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated md:p-8",
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
    </Link>
  );
}

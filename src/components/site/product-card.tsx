import { Link } from "@tanstack/react-router";
import { resolveImg } from "@/lib/assets";
import type { Product } from "@/lib/site";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";

export function ProductCard({ product, className }: { product: Product; className?: string }) {
  const { t } = useLanguage();

  return (
    <Link
      to="/products/$slug"
      params={{ slug: product.slug }}
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition hover:-translate-y-1 hover:shadow-elevated",
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={resolveImg(product.image)}
          alt={`${product.brand} ${product.name}`}
          loading="lazy"
          className="h-full w-full object-cover transition group-hover:scale-105"
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
        </div>
      </div>
    </Link>
  );
}

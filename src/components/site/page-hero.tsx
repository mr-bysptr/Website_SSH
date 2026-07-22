import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export type Crumb = { label: string; to?: string; params?: Record<string, string> };

export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm", className)}>
      <ol className="flex flex-wrap items-center gap-1.5 text-muted-foreground">
        <li className="flex items-center gap-1.5">
          <Link to="/" className="inline-flex items-center gap-1 hover:text-foreground" aria-label="Home">
            <Home className="h-3.5 w-3.5" />
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 opacity-50" />
            {item.to && i < items.length - 1 ? (
              <Link to={item.to as never} params={item.params as never} className="hover:text-foreground">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  image,
  align = "left",
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: Crumb[];
  image?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
      {image && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-65 brightness-110 saturate-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-secondary/75 to-secondary/90" />
        </>
      )}
      <div
        className="absolute inset-0 opacity-30 grid-pattern"
        aria-hidden
      />
      <div className={cn("container-page relative py-14 md:py-20", align === "center" && "text-center")}>
        {breadcrumbs && (
          <Breadcrumbs
            items={breadcrumbs}
            className={cn("mb-6 [&_a]:text-white/60 [&_span]:text-white [&_svg]:text-white/50", align === "center" && "justify-center [&_ol]:justify-center")}
          />
        )}
        {eyebrow && (
          <span className="eyebrow text-primary">{eyebrow}</span>
        )}
        <h1 className="mt-3 max-w-4xl font-heading text-3xl font-bold leading-tight md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className={cn("mt-4 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg", align === "center" && "mx-auto")}>
            {description}
          </p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-3 font-heading text-2xl font-bold leading-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

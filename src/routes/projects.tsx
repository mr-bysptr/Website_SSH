import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { CTABanner } from "@/components/site/cta-banner";
import { PageHero } from "@/components/site/page-hero";
import { resolveImg } from "@/lib/assets";
import { projects, site } from "@/lib/site";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: `Projects — ${site.name}` },
      { name: "description", content: "Case studies of industrial safety programs delivered across Indonesia — refinery turnarounds, geothermal H2S monitoring and marine tank cleaning." },
      { property: "og:title", content: `Projects — ${site.name}` },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Track record — incident-free delivery."
        description="A selection of projects from our field record. Every engagement measured against zero incidents, complete documentation and on-time delivery."
        breadcrumbs={[{ label: "Projects" }]}
        image={resolveImg(projects[0].image)}
      />
      <section className="container-page py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={resolveImg(p.image)} alt={p.title} loading="lazy" className="h-full w-full object-cover transition group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase tracking-wider opacity-80">{p.industry} · {p.scope}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.summary}</p>
                <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border pt-4">
                  {p.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <p className="font-heading text-sm font-bold text-primary">{m.value}</p>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{m.label}</p>
                    </div>
                  ))}
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Read case study <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CTABanner />
    </>
  );
}

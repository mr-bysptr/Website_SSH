import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { CTABanner } from "@/components/site/cta-banner";
import { PageHero, SectionHeading } from "@/components/site/page-hero";
import { resolveImg } from "@/lib/assets";
import { projects, site } from "@/lib/site";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.project;
    return {
      meta: [
        { title: `${p.title} — ${site.name}` },
        { name: "description", content: p.summary },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projects/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
    };
  },
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="font-heading text-3xl font-bold">Project not found</h1>
      <Link to="/projects" className="mt-4 inline-block text-primary">All projects</Link>
    </div>
  ),
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  return (
    <>
      <PageHero
        eyebrow="Case study"
        title={project.title}
        description={project.summary}
        breadcrumbs={[{ label: "Projects", to: "/projects" }, { label: project.title }]}
        image={resolveImg(project.image)}
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-4 sm:grid-cols-3">
          <MetaCard label="Client" value={project.client} />
          <MetaCard label="Industry" value={project.industry} />
          <MetaCard label="Scope" value={project.scope} />
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {project.metrics.map((m) => (
            <div key={m.label} className="rounded-2xl border border-border bg-surface p-6 text-center shadow-card">
              <p className="font-heading text-3xl font-bold text-primary md:text-4xl">{m.value}</p>
              <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <SectionHeading eyebrow="Overview" title="What we delivered." />
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">{project.summary}</p>
        </div>

        <img
          src={resolveImg(project.image)}
          alt={project.title}
          loading="lazy"
          className="mt-12 aspect-[16/9] w-full rounded-2xl object-cover shadow-elevated"
        />
      </section>

      <CTABanner />
    </>
  );
}

function MetaCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-1 font-heading text-base font-bold text-foreground">{value}</p>
    </div>
  );
}

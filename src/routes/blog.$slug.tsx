import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { CTABanner } from "@/components/site/cta-banner";
import { PageHero } from "@/components/site/page-hero";
import { resolveImg } from "@/lib/assets";
import { posts, site } from "@/lib/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Article not found" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.post;
    return {
      meta: [
        { title: `${p.title} — ${site.name}` },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: p.title,
            datePublished: p.date,
            author: { "@type": "Organization", name: p.author },
          }),
        },
      ],
    };
  },
  component: PostDetail,
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="font-heading text-3xl font-bold">Article not found</h1>
      <Link to="/blog" className="mt-4 inline-block text-primary">All articles</Link>
    </div>
  ),
});

function PostDetail() {
  const { post } = Route.useLoaderData();
  return (
    <>
      <PageHero
        eyebrow="Insight"
        title={post.title}
        description={post.excerpt}
        breadcrumbs={[{ label: "Insights", to: "/blog" }, { label: post.title }]}
      />
      <article className="container-page max-w-3xl py-16 md:py-24">
        <img
          src={resolveImg(post.image)}
          alt={post.title}
          loading="eager"
          className="aspect-[16/9] w-full rounded-2xl object-cover shadow-elevated"
        />
        <p className="mt-6 text-xs uppercase tracking-wider text-muted-foreground">
          {post.author} · {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })} · {post.readMinutes} min read
        </p>
        <div className="prose prose-lg mt-6 max-w-none">
          {post.body.map((para, i) => (
            <p key={i} className="mt-4 text-base leading-relaxed text-foreground/80 md:text-lg">
              {para}
            </p>
          ))}
        </div>
      </article>
      <CTABanner />
    </>
  );
}

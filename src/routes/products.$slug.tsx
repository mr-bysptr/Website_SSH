import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2, Download, MessageSquare } from "lucide-react";

import { CTABanner } from "@/components/site/cta-banner";
import { InquiryForm } from "@/components/site/inquiry-form";
import { PageHero, SectionHeading } from "@/components/site/page-hero";
import { ProductCard } from "@/components/site/product-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { resolveImg } from "@/lib/assets";
import { products, site, buildWhatsAppUrl } from "@/lib/site";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Product not found" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.product;
    return {
      meta: [
        { title: `${p.brand} ${p.name} — ${site.name}` },
        { name: "description", content: p.short },
        { property: "og:title", content: `${p.brand} ${p.name}` },
        { property: "og:description", content: p.short },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/products/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/products/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: `${p.brand} ${p.name}`,
            brand: { "@type": "Brand", name: p.brand },
            description: p.short,
            category: p.detectorType,
          }),
        },
      ],
    };
  },
  component: ProductDetail,
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="font-heading text-3xl font-bold">Product not found</h1>
      <Link to="/products" className="mt-4 inline-block text-primary">Browse catalogue</Link>
    </div>
  ),
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const related = products.filter((p) => p.slug !== product.slug && p.type === product.type).slice(0, 3);
  const message = `Hello ${site.name}, I would like a quotation for the ${product.brand} ${product.name}.`;

  return (
    <>
      <PageHero
        eyebrow={product.brand}
        title={product.name}
        description={product.short}
        breadcrumbs={[
          { label: "Products", to: "/products" },
          { label: `${product.brand} ${product.name}` },
        ]}
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-card">
            <div className="aspect-square overflow-hidden rounded-xl bg-muted">
              <img
                src={resolveImg(product.image)}
                alt={`${product.brand} ${product.name}`}
                loading="eager"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {product.gases.map((g) => (
                <span key={g} className="rounded border border-border bg-muted px-2 py-1 text-[10px] font-medium">
                  {g}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">{product.brand} · {product.type} · {product.detectorType}</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl">{product.name}</h2>
            <p className="mt-4 text-base text-muted-foreground">{product.short}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-card hover:bg-primary-hover"
              >
                <MessageSquare className="h-4 w-4" /> Request quotation
              </Link>
              <a
                href={buildWhatsAppUrl(message)}
                target="_blank"
                rel="noopener"
                className="inline-flex h-12 items-center gap-2 rounded-md border border-border px-6 text-sm font-semibold text-foreground hover:bg-muted"
              >
                WhatsApp
              </a>
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex h-12 items-center gap-2 rounded-md border border-border px-6 text-sm font-semibold text-foreground hover:bg-muted"
              >
                <Download className="h-4 w-4" /> Datasheet
              </button>
            </div>

            <div className="mt-8">
              <Tabs defaultValue="features">
                <TabsList className="mb-4">
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="specs">Specifications</TabsTrigger>
                </TabsList>
                <TabsContent value="features">
                  <ul className="space-y-2">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-sm text-foreground/80">{f}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="specs">
                  <dl className="divide-y divide-border rounded-xl border border-border bg-surface">
                    {product.specs.map((s) => (
                      <div key={s.label} className="grid grid-cols-[160px,1fr] gap-4 p-3 text-sm">
                        <dt className="font-semibold text-muted-foreground">{s.label}</dt>
                        <dd className="text-foreground">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-border bg-muted/40 py-16">
          <div className="container-page">
            <SectionHeading eyebrow="Related products" title="You might also consider." />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr,1.2fr]">
          <SectionHeading
            eyebrow="Enquire"
            title="Ask about pricing, availability or calibration."
            description="Rental, purchase and managed calibration options — with courier delivery across Indonesia."
          />
          <InquiryForm defaultService="Retail Gas Detector" />
        </div>
      </section>

      <CTABanner />
    </>
  );
}

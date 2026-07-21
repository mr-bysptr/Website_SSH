import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

import { industries, posts, products, projects, services } from "@/lib/site";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths: string[] = ["/", "/about", "/services", "/products", "/industries", "/projects", "/certifications", "/blog", "/faq", "/contact"];
        services.forEach((s) => paths.push(`/services/${s.slug}`));
        products.forEach((p) => paths.push(`/products/${p.slug}`));
        industries.forEach((i) => paths.push(`/industries/${i.slug}`));
        projects.forEach((p) => paths.push(`/projects/${p.slug}`));
        posts.forEach((p) => paths.push(`/blog/${p.slug}`));

        const urls = paths
          .map(
            (p) =>
              `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq><priority>${p === "/" ? "1.0" : "0.7"}</priority></url>`,
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});

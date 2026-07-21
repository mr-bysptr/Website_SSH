
# Surya Segara Hana — Corporate Website Plan

A premium, conversion-focused B2B marketing site for an industrial safety services company, built on the existing TanStack Start + Tailwind v4 stack.

## Scope for this build

I'll deliver a production-ready multi-page site with the full homepage, all 10 top-level pages, shared conversion UI (sticky header, floating WhatsApp, sticky mobile CTA, inquiry forms), the design system, and SEO wiring. Product/service/blog/project detail pages will ship with a repeatable template and 2–3 seeded examples each; the rest are listed as "coming soon" cards that link to the inquiry form, so we don't spend a huge build generating dozens of near-identical detail pages before the client provides real content.

Backend (Lovable Cloud for the inquiry form + lead storage) is **not** in this plan — I'll ask before enabling it. For now forms will post to a client-side handler that opens WhatsApp / mailto with the structured message, which is a common pattern for Indonesian B2B and works with zero backend.

## Design system

- Colors mapped to semantic tokens in `src/styles.css` (oklch): primary `#C62828`, secondary `#333333`, background `#F7F7F7`, surface `#FFFFFF`, success `#2E7D32`, plus derived `primary-hover`, `border`, `muted`, `ring`.
- Typography: Poppins (headings) + Inter (body), loaded via `<link>` in `__root.tsx` head, wired as `--font-heading` / `--font-sans` in `@theme`.
- Radii tuned tighter (industrial feel), custom shadow tokens, subtle grid + diagonal accent motifs.
- Motion: restrained fade/slide on scroll (Motion for React), no bouncy easings.

## Information architecture / sitemap

```text
/                       Home
/about                  About (story, leadership, HSE policy, values)
/services               Services index
  /services/h2s
  /services/confined-space-entry
  /services/gas-detector-calibration
  (rental & retail live under Products)
/products               Products catalog (filter: brand, gas type, type, portable/fixed)
  /products/$slug       Product detail (spec, features, datasheet, inquiry)
/industries             Industries index
  /industries/$slug     Per-industry page (oil-gas, petrochemical, mining, marine, manufacturing, construction, energy)
/projects               Project highlights index
  /projects/$slug       Case study
/certifications         Certifications & compliance
/blog                   Insights index
  /blog/$slug           Article
/faq                    FAQ
/contact                Contact + inquiry form + map + WhatsApp
```

Global chrome: sticky header with mega menu (Services / Products / Industries), floating WhatsApp button, sticky mobile bottom bar ("Request Quote" + "WhatsApp"), footer with sitemap + certs + contact.

Navigation depth: any service or product reachable in ≤ 3 clicks (Home → Services → detail).

## Homepage sections (in order)

Hero → Trust bar (certs + stat chips) → Company overview → Services grid (5 cards) → Industries strip (7 icons) → Why choose us (4 pillars) → Featured products (carousel, 6) → Project highlights (3 case study cards) → Client logos → Certifications grid → Testimonials slider → Animated statistics counter → FAQ accordion (6 items) → Full-width CTA banner ("Request a quotation") → Contact section (form + info) → Footer.

## Page templates

- **Service template**: hero with breadcrumb → overview → benefits (icon grid) → scope of work (numbered list) → process (5-step horizontal stepper) → equipment (product cards) → team credentials → gallery → FAQ → CTA.
- **Product template**: gallery + spec sheet (tabs: Overview / Specifications / Features / Downloads) → datasheet button → inquiry button → related products.
- **Industry template**: hero → challenges → our solutions for this industry → relevant services & products → case study → CTA.
- **Project template**: hero image → client / industry / scope meta → challenge → solution → results (metrics) → gallery → related services.
- **Blog template**: hero → article body (prose) → author card → related posts → newsletter/CTA.

## Conversion & trust

- Two CTAs everywhere: primary "Request Quotation" (red), secondary "Chat on WhatsApp" (outline).
- Sticky header shrinks on scroll; mobile bottom action bar always visible.
- Inquiry form: name, company, role, email, phone, service of interest, message — Zod validated, submits by opening WhatsApp with a pre-filled structured message (fallback: mailto).
- Trust indicators repeat across pages: years of experience, projects delivered, safe man-hours, client count, certifications.
- Testimonials with client name + company + role + logo.
- Case-study metrics ("Zero LTI over 1.2M man-hours").

## SEO

- Per-route `head()` with unique title, description, `og:title`, `og:description`, `og:url`, `og:type`, canonical (relative — no domain assigned yet).
- JSON-LD: Organization on `__root`; Service on service pages; Product on product pages; Article on blog; BreadcrumbList on deep routes; FAQPage on FAQ.
- Breadcrumb component on every non-home page.
- `public/robots.txt` (Allow /) + dynamic `src/routes/sitemap[.]xml.ts` listing every static route with `BASE_URL = ""` placeholder.
- Semantic heading hierarchy, alt text on every image, `<main>` per route.

## Imagery

- Hero + section imagery generated with `imagegen`: industrial refinery / offshore rig / worker in PPE with gas detector / confined-space entry — desaturated, cinematic, red accent lighting. Saved to `src/assets/` as `.jpg`, imported as ES modules. WebP conversion via `vite-imagetools` if it drops in cleanly, otherwise `.jpg` at appropriate dimensions.
- Icons: `lucide-react` (already installed with shadcn) — shield, hard-hat, flame, wind, gauge, etc.
- Client logos: neutral grayscale placeholders labeled clearly as sample logos.

## Accessibility

- WCAG 2.1 AA: semantic landmarks, focus rings via `--ring`, `aria-label` on icon-only buttons, form labels, `h-dvh` where full-viewport, 44px tap targets on mobile.
- Contrast checked against red-on-white and white-on-red combos.

## Tech notes

- Stack unchanged: TanStack Start v1, React 19, Tailwind v4, shadcn/ui, TanStack Query, lucide-react, Motion for React (add), react-hook-form + zod (add), embla-carousel (add for testimonial/product sliders).
- Route files use flat dot convention already in the template.
- Placeholder home at `src/routes/index.tsx` is rewritten in place per the index-placeholder rule.
- No backend enabled in this build — inquiry form works via WhatsApp deep link.

## Explicit non-goals for this pass

- No Lovable Cloud / database (I'll offer it as a follow-up so leads persist server-side and you can send auto-reply emails).
- No blog CMS — blog posts are hard-coded MDX-style content in a `src/content/blog/` module; 2 sample posts.
- No i18n toggle yet (site copy in English; happy to add Bahasa Indonesia toggle after).
- Product catalog: template + 6 seeded products across brands; the rest surface via "Contact us for the full catalog".

## Delivery order

1. Design tokens + fonts + shared layout (header, mega menu, footer, sticky CTAs, floating WhatsApp).
2. Homepage (all 16 sections) with generated hero imagery.
3. Reusable page primitives: PageHero, Breadcrumb, SectionHeading, StatCounter, FAQAccordion, TestimonialSlider, ProductCard, ServiceCard, InquiryForm.
4. Services index + 3 service detail pages.
5. Products index (with filtering) + 6 product detail pages.
6. Industries index + 7 industry pages (short, template-driven).
7. Projects, Certifications, About, Blog (index + 2 posts), FAQ, Contact.
8. SEO wiring (head per route, JSON-LD, sitemap.xml, robots.txt).
9. Accessibility + responsive pass at 390 / 768 / 1366 / 1440+.

Approve and I'll build straight through. One quick question before I start (I can also just pick sensible defaults): do you want me to enable **Lovable Cloud** so inquiry submissions are stored and you get an email notification, or keep it WhatsApp-only for v1?

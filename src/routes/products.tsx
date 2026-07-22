import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { CTABanner } from "@/components/site/cta-banner";
import { PageHero } from "@/components/site/page-hero";
import { ProductCard } from "@/components/site/product-card";
import { img } from "@/lib/assets";
import { products, site, getLocalizedProducts } from "@/lib/site";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: `Gas Detector Rental & Sales — ${site.name}` },
      { name: "description", content: "Portable and fixed gas detectors from Dräger, MSA, Honeywell and RKI. Rent, buy or calibrate through Indonesia's specialist industrial safety partner." },
      { property: "og:title", content: `Products — ${site.name}` },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsIndex,
});

function ProductsIndex() {
  const { t, language } = useLanguage();
  const localizedProducts = getLocalizedProducts(language);

  const [brand, setBrand] = useState<string>("All");
  const [type, setType] = useState<string>("All");
  const [gas, setGas] = useState<string>("All");

  const brands = useMemo(() => ["All", ...Array.from(new Set(localizedProducts.map((p) => p.brand)))], [localizedProducts]);
  const types = useMemo(() => ["All", "Portable", "Fixed"], []);
  const gases = useMemo(
    () => ["All", ...Array.from(new Set(localizedProducts.flatMap((p) => p.gases)))],
    [localizedProducts],
  );

  const filtered = useMemo(
    () =>
      localizedProducts.filter(
        (p) =>
          (brand === "All" || p.brand === brand) &&
          (type === "All" || p.type === type) &&
          (gas === "All" || p.gases.includes(gas)),
      ),
    [brand, type, gas, localizedProducts],
  );

  return (
    <>
      <PageHero
        eyebrow={t("Produk Deteksi", "Products")}
        title={t("Deteksi gas yang dapat Anda sewa, beli, atau kalibrasi.", "Gas detection you can rent, buy or calibrate.")}
        description={t(
          "Katalog detektor portabel dan tetap yang terkurasi — disertai pengiriman kurir, kalibrasi, dan dokumentasi lengkap di seluruh Indonesia.",
          "A curated portable and fixed detector catalogue — plus courier delivery, calibration and full documentation across Indonesia."
        )}
        breadcrumbs={[{ label: t("Produk", "Products") }]}
        image={img.calibrationLab}
      />
      <section className="container-page py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[220px,1fr]">
          <aside className="space-y-6">
            <FilterGroup label={t("Merek", "Brand")} options={brands} value={brand} onChange={setBrand} />
            <FilterGroup label={t("Tipe", "Type")} options={types} value={type} onChange={setType} />
          </aside>
          <div>
            <p className="mb-4 text-sm text-muted-foreground">
              {t("Menampilkan", "Showing")}{" "}
              <span className="font-semibold text-foreground">{filtered.length}</span> {t("dari", "of")} {products.length} {t("produk", "products")}
            </p>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
            {filtered.length === 0 && (
              <p className="rounded-xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
                {t("Tidak ada produk yang cocok dengan filter tersebut. Coba perluas pilihan Anda.", "No products match those filters. Try widening the selection.")}
              </p>
            )}
          </div>
        </div>
      </section>
      <CTABanner
        title={t("Membutuhkan sesuatu yang tidak ada di katalog?", "Need something not in the catalogue?")}
        description={t(
          "Kami memasok portofolio deteksi penuh dari setiap OEM terkemuka. Beritahu kami jenis gas, lingkungan, dan jumlah yang Anda butuhkan.",
          "We supply full detection portfolios from every major OEM. Tell us the gas, environment and quantity and we'll come back with options."
        )}
        primaryLabel={t("Minta katalog lengkap", "Ask for a full catalogue")}
      />
    </>
  );
}

function FilterGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  const { t } = useLanguage();

  return (
    <div>
      <p className="mb-3 font-heading text-xs font-bold uppercase tracking-[0.16em] text-primary">{label}</p>
      <div className="flex flex-wrap gap-2 lg:flex-col">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            onClick={() => onChange(o)}
            className={cn(
              "inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium transition lg:justify-start lg:rounded-md",
              value === o
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-surface text-foreground/70 hover:border-foreground/30",
            )}
          >
            {o === "All" ? t("Semua", "All") : o === "Portable" ? t("Portabel", "Portable") : o === "Fixed" ? t("Tetap", "Fixed") : o}
          </button>
        ))}
      </div>
    </div>
  );
}

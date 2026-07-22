import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { testimonials, getLocalizedTestimonials } from "@/lib/site";
import { useLanguage } from "@/lib/language-context";

export function TestimonialSlider() {
  const { language } = useLanguage();
  const localizedTestimonials = getLocalizedTestimonials(language);
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });
  const [index, setIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {localizedTestimonials.map((t, i) => (
            <div key={i} className="min-w-0 shrink-0 basis-full px-2 md:basis-1/2 lg:basis-1/2">
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-8 shadow-card">
                <Quote className="h-8 w-8 text-primary/30" aria-hidden />
                <blockquote className="mt-4 text-lg font-medium leading-relaxed text-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="font-heading text-sm font-bold text-foreground">{t.author}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{t.company}</p>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-1.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition ${
                i === index ? "w-8 bg-primary" : "w-3 bg-border"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground hover:bg-muted"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground hover:bg-muted"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

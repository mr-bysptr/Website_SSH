import { useEffect, useRef, useState } from "react";

export function StatCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  duration = 1400,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !seen) {
          setSeen(true);
          const start = performance.now();
          const step = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(Math.round(value * eased));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [value, duration, seen]);

  return (
    <div ref={ref}>
      <div className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl">
        {prefix}
        {display.toLocaleString()}
        {suffix}
      </div>
      <p className="mt-1 text-sm uppercase tracking-wider text-muted-foreground">{label}</p>
    </div>
  );
}

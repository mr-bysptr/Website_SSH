import { useLanguage, type Language } from "@/lib/language-context";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  className?: string;
  showIcon?: boolean;
}

export function LanguageSwitcher({ className, showIcon = true }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-border/80 bg-muted/60 p-1 text-xs font-semibold shadow-inner transition-colors",
        className
      )}
      role="radiogroup"
      aria-label="Language selection"
    >
      {showIcon && (
        <Globe className="ml-1.5 h-3.5 w-3.5 text-muted-foreground transition-colors shrink-0" aria-hidden="true" />
      )}
      
      <button
        type="button"
        role="radio"
        aria-checked={language === "id"}
        onClick={() => setLanguage("id")}
        className={cn(
          "relative inline-flex items-center justify-center rounded-full px-2.5 py-1 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
          language === "id"
            ? "bg-primary text-primary-foreground font-bold shadow-sm"
            : "text-foreground/70 hover:text-foreground hover:bg-background/50"
        )}
      >
        <span className="flex items-center gap-1">
          <span className="text-[11px] leading-none" aria-hidden="true">🇮🇩</span>
          <span>ID</span>
        </span>
      </button>

      <span className="text-border text-xs select-none" aria-hidden="true">|</span>

      <button
        type="button"
        role="radio"
        aria-checked={language === "en"}
        onClick={() => setLanguage("en")}
        className={cn(
          "relative inline-flex items-center justify-center rounded-full px-2.5 py-1 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
          language === "en"
            ? "bg-primary text-primary-foreground font-bold shadow-sm"
            : "text-foreground/70 hover:text-foreground hover:bg-background/50"
        )}
      >
        <span className="flex items-center gap-1">
          <span className="text-[11px] leading-none" aria-hidden="true">🇬🇧</span>
          <span>EN</span>
        </span>
      </button>
    </div>
  );
}

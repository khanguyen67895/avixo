"use client";

/* eslint-disable @next/next/no-img-element */

import { useI18n } from "@/lib/i18n";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useI18n();
  const next = locale === "vi" ? "en" : "vi";
  const src = locale === "vi" ? "/images/ic_lang_vi.png" : "/images/ic_lang_en.png";

  return (
    <button
      type="button"
      onClick={() => setLocale(next)}
      aria-label={locale === "vi" ? "Switch to English" : "Chuyển sang tiếng Việt"}
      className={`inline-flex items-center justify-center transition-opacity hover:opacity-80 ${className}`}
    >
      <img src={src} alt={locale.toUpperCase()} width={28} height={28} className="w-6 h-6 object-contain" />
    </button>
  );
}

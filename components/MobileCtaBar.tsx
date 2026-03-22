"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MOBILE_CTA_BAR = {
  heading: "TIAM BENEFITSのお問い合わせ",
  ctaIntroduce: "導入はこちら",
  ctaContact: "LINEで導入相談",
  introduceHref: "/signup",
  contactHref: "https://page.line.me/718awdjv",
} as const;

/**
 * 画面下部に固定表示するCTAバー（SP・PC共通）。
 * /signup ページでは非表示。
 */
export function MobileCtaBar() {
  const pathname = usePathname();
  if (pathname === "/signup") return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50"
      style={{
        background:
          "linear-gradient(135deg, rgba(45,181,192,0.85) 0%, rgba(26,155,166,0.85) 50%, rgba(21,128,138,0.85) 100%)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
        borderTop: "1px solid rgba(255,255,255,0.2)",
      }}
    >
      <div className="mx-auto max-w-5xl px-4 pb-[env(safe-area-inset-bottom)] pt-4 md:flex md:items-center md:justify-between md:gap-6 md:py-3">
        <p className="mb-3 text-center text-lg font-bold text-white md:mb-0 md:shrink-0 md:text-base">
          {MOBILE_CTA_BAR.heading}
        </p>
        <div className="flex gap-3 md:w-full md:max-w-md">
          <Link
            href={MOBILE_CTA_BAR.introduceHref}
            className="flex flex-1 items-center justify-center rounded-2xl py-4 text-base font-bold text-[#1a9ba6] transition hover:opacity-90 active:opacity-90 md:py-3"
            style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.4)" }}
          >
            {MOBILE_CTA_BAR.ctaIntroduce}
          </Link>
          <a
            href={MOBILE_CTA_BAR.contactHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center rounded-2xl py-4 text-base font-bold text-white transition hover:opacity-90 active:opacity-90 md:py-3"
            style={{
              background: "#06C755",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            {MOBILE_CTA_BAR.ctaContact}
          </a>
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { mobileCtaBar } from "@/lib/copy";

/**
 * SP表示時のみ、画面下部に固定表示するCTAバー。
 * 「導入はこちら」「サービスのご相談」の2ボタンを横並びで表示。
 */
export function MobileCtaBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{
        background: "linear-gradient(135deg, #2db5c0 0%, #1a9ba6 50%, #15808a 100%)",
      }}
    >
      <div className="px-4 pb-[env(safe-area-inset-bottom)] pt-4">
        <p className="mb-3 text-center text-lg font-bold text-white">
          {mobileCtaBar.heading}
        </p>
        <div className="flex gap-3">
          <a
            href={mobileCtaBar.introduceHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center rounded-2xl bg-white py-4 text-base font-bold text-[#1a9ba6] transition active:opacity-90"
          >
            {mobileCtaBar.ctaIntroduce}
          </a>
          <a
            href={mobileCtaBar.contactHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center rounded-2xl py-4 text-base font-bold text-white transition active:opacity-90"
            style={{
              background: "linear-gradient(135deg, #f5a623 0%, #f7c94b 100%)",
            }}
          >
            {mobileCtaBar.ctaContact}
          </a>
        </div>
      </div>
    </div>
  );
}

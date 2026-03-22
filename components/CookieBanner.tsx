"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const STORAGE_KEY = "cookie-consent";

const COOKIE = {
  message:
    "当webサイトでは、お客様により良いサービスを提供するため、クッキーを利用しています。クッキーの使用に同意いただける場合は「同意する」ボタンをクリックし、クッキーに関する情報については",
  privacyLink: "プライバシーポリシーページ",
  privacySuffix: "をご覧ください。",
  accept: "同意する",
} as const;

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const consented = sessionStorage.getItem(STORAGE_KEY);
    if (!consented) queueMicrotask(() => setVisible(true));
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-[8.5rem] left-0 right-0 z-[60] flex items-center justify-between gap-4 px-4 py-4 text-white shadow-lg md:bottom-[5rem] md:px-8"
      style={{ background: "rgba(26,26,26,0.75)", backdropFilter: "blur(24px) saturate(180%)", WebkitBackdropFilter: "blur(24px) saturate(180%)", borderTop: "1px solid rgba(255,255,255,0.1)" }}
      role="dialog"
      aria-label="クッキーに関するお知らせ"
    >
      <p className="text-sm leading-relaxed text-gray-200 md:max-w-3xl">
        {COOKIE.message}
        <Link href="/privacy" className="underline hover:no-underline">
          {COOKIE.privacyLink}
        </Link>
        {COOKIE.privacySuffix}
      </p>
      <button
        type="button"
        onClick={handleAccept}
        className="shrink-0 rounded-lg bg-[var(--primary-dark)] px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90"
      >
        {COOKIE.accept}
      </button>
    </div>
  );
}

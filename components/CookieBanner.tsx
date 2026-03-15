"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cookie } from "@/lib/copy";

const STORAGE_KEY = "cookie-consent";

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
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between gap-4 bg-gray-800 px-4 py-4 text-white shadow-lg md:px-8"
      role="dialog"
      aria-label="クッキーに関するお知らせ"
    >
      <p className="text-sm leading-relaxed text-gray-200 md:max-w-3xl">
        当webサイトでは、お客様により良いサービスを提供するため、クッキーを利用しています。クッキーの使用に同意いただける場合は「同意する」ボタンをクリックし、クッキーに関する情報については
        <Link href="/privacy" className="underline hover:no-underline">
          {cookie.privacyLink}
        </Link>
        をご覧ください。
      </p>
      <button
        type="button"
        onClick={handleAccept}
        className="shrink-0 rounded-lg bg-[var(--primary-dark)] px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90"
      >
        {cookie.accept}
      </button>
    </div>
  );
}

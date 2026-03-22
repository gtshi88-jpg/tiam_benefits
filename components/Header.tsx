"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { site, nav, contact } from "@/lib/constants";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 表示中のコンテンツに合わせたナビ（page.tsx の表示順）
  const navLinks = [
    { href: "/#about", label: nav.about },
    { href: "/#menu", label: nav.menu },
    { href: "/#why", label: nav.why },
    { href: "/#voices", label: nav.voices },
    { href: "/#faq", label: nav.faq },
  ];

  return (
    <header
      id="top"
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "header-glass" : "bg-[var(--header-bg)]/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
        {/* 左上: TIAM / BENEFIT（2行ロゴ） */}
        <Link
          href="/#top"
          className="font-serif-en font-bold tracking-wide text-[var(--primary-dark)] hover:opacity-80"
          onClick={() => setMenuOpen(false)}
        >
          <span className="block text-2xl leading-tight md:text-3xl">
            {site.logoLine1}
          </span>
          <span className="block text-xl leading-tight md:text-2xl">
            {site.logoLine2}
          </span>
        </Link>

        {/* 右: リキッドグラスナビ */}
        <div className="hidden md:flex md:items-center md:gap-4">
          <nav aria-label="メインメニュー">
            <div className="liquid-glass-nav">
              <ul className="flex items-center gap-1 lg:gap-2">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="liquid-glass-nav-item text-sm font-medium text-[var(--primary-dark)] lg:text-base"
                    >
                      <span>{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        {/* SP: ハンバーガー */}
        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          <span
            className={`block h-0.5 w-6 bg-[var(--primary-dark)] transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-[var(--primary-dark)] transition ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-[var(--primary-dark)] transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* SP: ドロワー */}
      <div
        className={`fixed inset-x-0 top-20 bottom-0 z-40 bg-white/80 backdrop-blur-xl backdrop-saturate-150 transition md:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col gap-1 p-6" aria-label="モバイルメニュー">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block w-full rounded-2xl border border-white/70 bg-white/95 px-4 py-3 text-base font-medium text-[var(--primary-dark)] shadow-sm"
              onClick={() => setMenuOpen(false)}
            >
              <span>{label}</span>
            </Link>
          ))}
          <div className="mt-6 flex flex-col gap-3 border-t border-gray-200 pt-6">
            <a
              href={contact.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#06C755] py-3 text-center font-bold text-white"
              onClick={() => setMenuOpen(false)}
            >
              {nav.ctaIntroduce}
            </a>
            <a
              href={`tel:${contact.tel}`}
              className="rounded-full border-2 border-[var(--primary-dark)] bg-white py-3 text-center font-bold text-[var(--primary-dark)] shadow-sm"
              onClick={() => setMenuOpen(false)}
            >
              {nav.ctaContact}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

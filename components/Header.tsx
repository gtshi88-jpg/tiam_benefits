"use client";

import Link from "next/link";
import { useState } from "react";
import { site, nav, contact } from "@/lib/copy";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: nav.about },
    { href: "#reasons", label: nav.reasons },
    { href: "#benefits", label: nav.benefits },
    { href: "#flow", label: nav.flow },
    { href: "#faq", label: nav.faq },
    { href: "#contact", label: "お問い合わせ" },
  ];

  return (
    <header
      id="top"
      className="fixed left-0 right-0 top-0 z-50 bg-[var(--header-bg)]"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
        {/* 左上: TIAM / BENEFIT（2行ロゴ） */}
        <Link
          href="#top"
          className="font-bold tracking-wide text-[var(--primary-dark)] hover:opacity-80"
          onClick={() => setMenuOpen(false)}
        >
          <span className="block text-2xl leading-tight md:text-3xl">
            {site.logoLine1}
          </span>
          <span className="block text-xl leading-tight md:text-2xl">
            {site.logoLine2}
          </span>
        </Link>

        {/* 右: 白いピル型ナビ（角丸・影） */}
        <nav
          className="hidden md:block"
          aria-label="メインメニュー"
        >
          <div className="rounded-full bg-white px-6 py-3 shadow-sm">
            <ul className="flex items-center gap-6 lg:gap-8">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm font-medium text-[var(--primary-dark)] transition hover:opacity-70 lg:text-base"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

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
        className={`fixed inset-x-0 top-20 bottom-0 z-40 bg-white transition md:hidden ${menuOpen ? "visible opacity-100" : "invisible opacity-0"}`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col gap-1 p-6" aria-label="モバイルメニュー">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-lg px-4 py-3 text-base font-medium text-[var(--primary-dark)] hover:bg-[var(--header-bg)]"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="mt-6 flex flex-col gap-3 border-t border-gray-200 pt-6">
            <a
              href={contact.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--primary)] py-3 text-center font-bold text-white"
              onClick={() => setMenuOpen(false)}
            >
              {nav.ctaIntroduce}
            </a>
            <a
              href={`tel:${contact.tel}`}
              className="rounded-full border-2 border-[var(--primary-dark)] py-3 text-center font-bold text-[var(--primary-dark)]"
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

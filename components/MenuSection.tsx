"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MENU_CATEGORIES, CLINIC_MENU_URL } from "@/lib/menu";
import { ScrollAnimate, StaggerContainer, StaggerItem } from "./ScrollAnimate";

const MENU_SECTION = {
  sectionLabel: "Menu",
  heading: "施術メニュー",
  subLabel: "受けられる施術一覧",
  lead: "当院でご提供している施術を、福利厚生価格（40% OFF）でご利用いただけます。\n下記は一例です。詳細・料金は当院サイトでご確認ください。",
  ctaLabel: "全メニュー・料金は当院サイトで",
  ctaLink: "TIAM CLINIC メニューページへ",
} as const;

export function MenuSection() {
  const [activeId, setActiveId] = useState(MENU_CATEGORIES[0].id);
  const activeCategory = MENU_CATEGORIES.find((c) => c.id === activeId)!;

  return (
    <section
      id="menu"
      className="scroll-mt-20 section-mesh-warm py-16 md:py-24"
      aria-labelledby="menu-heading"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <ScrollAnimate direction="up" blur>
          <p className="text-sm font-bold text-[var(--primary)]">
            {MENU_SECTION.sectionLabel}
          </p>
          <h2
            id="menu-heading"
            className="font-serif-jp mt-1 text-2xl font-bold text-gray-900 md:text-3xl"
          >
            {MENU_SECTION.heading}
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            {MENU_SECTION.subLabel}
          </p>
          <p className="mt-6 whitespace-pre-line leading-relaxed text-gray-700">
            {MENU_SECTION.lead}
          </p>
        </ScrollAnimate>

        {/* カテゴリタブ */}
        <ScrollAnimate direction="up" blur delay={0.1}>
          <div
            className="mt-10 flex gap-2 overflow-x-auto pb-2 md:flex-wrap md:overflow-visible"
            role="tablist"
            aria-label="施術カテゴリ"
          >
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeId === cat.id}
                aria-controls={`menu-panel-${cat.id}`}
                id={`menu-tab-${cat.id}`}
                onClick={() => setActiveId(cat.id)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition md:px-6 ${
                  activeId === cat.id
                    ? "bg-[var(--primary-dark)] text-white shadow-md"
                    : "bg-white/80 text-gray-700 hover:bg-white border border-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollAnimate>

        {/* 施術一覧パネル */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              id={`menu-panel-${activeId}`}
              role="tabpanel"
              aria-labelledby={`menu-tab-${activeId}`}
            >
              <StaggerContainer
                className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4"
                stagger={0.03}
              >
                {activeCategory.treatments.map((t, i) => (
                  <StaggerItem key={t}>
                    <div className="rounded-lg border border-gray-200/80 bg-white/90 px-4 py-3 text-center text-sm text-gray-800 shadow-sm transition hover:border-[var(--primary)]/30 hover:shadow">
                      {t}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 当院サイトへのリンク */}
        <ScrollAnimate direction="up" blur delay={0.15}>
          <div className="mt-12 text-center">
            <a
              href={CLINIC_MENU_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-[var(--primary)] bg-white px-6 py-3 font-bold text-[var(--primary-dark)] shadow-sm transition hover:bg-[var(--primary)]/10"
            >
              <span>{MENU_SECTION.ctaLink}</span>
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
            <p className="mt-3 text-sm text-gray-600">
              {MENU_SECTION.ctaLabel}
            </p>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}

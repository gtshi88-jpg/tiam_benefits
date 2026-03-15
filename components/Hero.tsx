"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { hero, heroCards, nav } from "@/lib/copy";

const SLIDE_INTERVAL_MS = 5000;
const HERO_IMAGES = ["/images/dr-hero.jpg", "/images/ns-hero.jpg", "/images/nurse-guide-img3.jpg"];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section
        className="relative min-h-[85vh] md:min-h-[90vh] pt-20 overflow-hidden rounded-b-3xl"
        aria-label="メイン"
      >
        {/* 全面スライド写真（ブラック系オーバーレイで統一） */}
        <div className="absolute inset-0">
          {HERO_IMAGES.map((src, i) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                i === currentIndex ? "opacity-100 z-[1]" : "opacity-0 z-0"
              }`}
              aria-hidden={i !== currentIndex}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority={i === 0}
              />
              <div
                className="absolute inset-0 bg-[var(--primary-dark)]/40"
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-[var(--primary-dark)]/70 via-[var(--primary-dark)]/25 to-transparent"
                aria-hidden
              />
            </div>
          ))}
        </div>

        {/* コンテンツ: 左＝見出し、右端＝CTAパネル */}
        <div className="relative z-10 flex min-h-[calc(85vh-5rem)] md:min-h-[calc(90vh-5rem)] w-full flex-col px-4 md:flex-row md:items-center md:px-6 lg:px-8">
          {/* 左: 見出し（画像上オーバーレイ） */}
          <div className="flex flex-1 flex-col justify-center py-10 md:py-16 md:pr-4 lg:max-w-3xl">
            <p className="mb-3 text-sm font-medium tracking-wide text-white/95 md:text-base">
              {hero.subTitle}
            </p>
            <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl xl:text-6xl">
              <span className="block">{hero.titleLine1}</span>
              <span className="mt-2 flex flex-wrap items-center gap-2">
                <span className="inline-block rounded-xl bg-[var(--primary)] px-4 py-2 text-white shadow-lg shadow-black/20 md:px-5 md:py-2.5">
                  {hero.titleHighlight1}
                </span>
                <span className="text-white">{hero.titleMiddle}</span>
                <span className="inline-block rounded-xl bg-[var(--primary)] px-4 py-2 text-white shadow-lg shadow-black/20 md:px-5 md:py-2.5">
                  {hero.titleHighlight2}
                </span>
              </span>
              {hero.titleLine2 && <span className="mt-2 block">{hero.titleLine2}</span>}
            </h1>
          </div>

          {/* 右端: 浮きパネル（角丸・影・導入費用バナー＋診療科目ボタン） */}
          <div className="w-full shrink-0 md:ml-auto md:mr-0 md:w-[360px] lg:w-[400px] xl:mr-4">
            <div className="rounded-3xl bg-white/95 p-6 shadow-xl shadow-black/15 backdrop-blur-sm md:p-8">
              <p className="rounded-full bg-[var(--primary)] py-2 text-center text-sm font-bold text-white">
                {hero.panelNoFee}
              </p>
              <p className="mt-4 rounded-xl bg-[var(--primary)]/90 py-2.5 text-center text-base font-bold text-white md:text-lg">
                {hero.panelTitle}
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {hero.categories.map((cat) => {
                  const isExternal = cat.href.startsWith("http");
                  return isExternal ? (
                    <a
                      key={cat.label}
                      href={cat.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[var(--primary)] py-3 text-center text-sm font-bold text-white transition hover:opacity-90 md:py-3.5 md:text-base"
                    >
                      {cat.label}
                    </a>
                  ) : (
                    <Link
                      key={cat.label}
                      href={cat.href}
                      className="rounded-full bg-[var(--primary)] py-3 text-center text-sm font-bold text-white transition hover:opacity-90 md:py-3.5 md:text-base"
                    >
                      {cat.label}
                    </Link>
                  );
                })}
              </div>
              <div className="mt-5 flex justify-end">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary)]/20 text-[var(--primary-dark)]" aria-hidden>
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* スライドインジケーター */}
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === currentIndex ? "w-8 bg-[var(--primary)]" : "w-2 bg-white/60 hover:bg-white/80"
              }`}
              aria-label={`スライド ${i + 1} を表示`}
            />
          ))}
        </div>
      </section>

      {/* ヒーロー直下: 2行2列の4ブロック（従業員満足度向上など） */}
      <section className="bg-white px-4 py-6 md:px-6 md:py-8" aria-label="診療・福利厚生の特徴">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {heroCards.map((card, i) => (
              <Link
                key={i}
                href="#reasons"
                className="flex min-h-[100px] flex-col justify-center rounded-2xl px-5 py-6 text-center shadow-md transition hover:opacity-95 md:min-h-[120px] md:px-6 md:py-8"
                style={{ backgroundColor: "#4DD0E1" }}
              >
                <span className="text-sm font-medium leading-snug text-white md:text-base">
                  {card.line1}
                </span>
                <span className="mt-2 block text-lg font-bold leading-snug text-white md:text-xl">
                  {card.line2}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

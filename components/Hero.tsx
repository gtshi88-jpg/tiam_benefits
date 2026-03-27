// ヒーローセクションのコンポーネント

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SLIDE_INTERVAL_MS = 5000;

const HERO = {
  subTitle: "TIAM CLINICの福利厚生サービス",
  titleLine1: "社員の採用力と",
  titleHighlight1: "満足度",
  titleMiddle: "を高める",
  titleHighlight2: "美容福利厚生",
  titleLine2: "",
  panelNoFee: "導入費用0円",
  panelTitle: "社員全員が10〜45%OFFの優待価格で施術可能",
  categories: [] as { label: string; href: string }[],
} as const;

const HERO_CARDS = [
  { line1: "従業員満足度", line2: "向上・定着率UP" },
  { line1: "対象施術", line2: "10〜45%OFF" },
  { line1: "導入費用0円", line2: "社員全員が対象" },
  { line1: "給与UPより", line2: "コスト効率が高い" },
] as const;

const HERO_IMAGES = [
  "/hero/hero-1.png",
  "/hero/hero-2.png",
  "/hero/hero-3.png",
];

const cardIcons = [
  <svg key="satisfaction" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" /></svg>,
  <svg key="sns" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" /></svg>,
  <svg key="flat" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>,
  <svg key="cost" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>,
];


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
    {/* ヒーローセクション */}
      <section
        className="relative min-h-[85vh] md:min-h-[90vh] pt-20 overflow-hidden"
        aria-label="メイン"
      >
        {/* スライドエリア */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* スライド画像 */}
            <Image
              src={HERO_IMAGES[currentIndex]}
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
            {/* オーバーレイ */}
            <div className="absolute inset-0 bg-[var(--primary-dark)]/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-dark)]/80 via-[var(--primary-dark)]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/60 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* コンテンツエリア */}
          <div className="relative z-10 flex min-h-[calc(85vh-5rem)] md:min-h-[calc(90vh-5rem)] w-full flex-col px-4 md:flex-row md:items-center md:px-6 lg:px-8">
          {/* 左コンテンツ */}
          <div className="flex flex-1 flex-col justify-center py-10 md:py-16 md:pr-4 lg:max-w-3xl">
            {/* サブタイトル */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-serif-en mb-3 text-sm font-medium tracking-widest uppercase text-white/90 md:text-base"
            >
              {HERO.subTitle}
            </motion.p>
            {/* タイトル */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl xl:text-6xl"
            >
              <span className="block">{HERO.titleLine1}</span>
              <span className="mt-2 flex flex-wrap items-center gap-2">
                <span className="inline-block rounded-xl bg-[var(--primary)] px-4 py-2 text-white shadow-lg shadow-black/20 md:px-5 md:py-2.5">
                  {HERO.titleHighlight1}
                </span>
                <span className="text-white">{HERO.titleMiddle}</span>
                <span className="inline-block rounded-xl bg-[var(--primary)] px-4 py-2 text-white shadow-lg shadow-black/20 md:px-5 md:py-2.5">
                  {HERO.titleHighlight2}
                </span>
              </span>
              {HERO.titleLine2 && <span className="mt-2 block">{HERO.titleLine2}</span>}
            </motion.h1>
          </div>

          {/* 右コンテンツ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mb-10 w-full shrink-0 md:mb-0 md:ml-auto md:mr-0 md:w-[360px] lg:w-[400px] xl:mr-4"
          >
            {/* パネル */}
            <div className="glass-refraction rounded-3xl p-6 md:p-8" style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(32px) saturate(200%)", WebkitBackdropFilter: "blur(32px) saturate(200%)", border: "1px solid rgba(255,255,255,0.3)", boxShadow: "0 16px 64px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.35)" }}>
              <p className="rounded-full py-2 text-center text-sm font-bold text-white" style={{ background: "rgba(197,165,89,0.85)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}>
                {HERO.panelNoFee}
              </p>
              <p className="mt-4 rounded-xl py-2.5 text-center text-base font-bold text-white md:text-lg" style={{ background: "rgba(197,165,89,0.8)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}>
                {HERO.panelTitle}
              </p>
              {/* カテゴリ（必要な場合のみ表示） */}
              {HERO.categories.length > 0 && (
                <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3">
                  {HERO.categories.map((cat) => {
                    const isExternal = cat.href.startsWith("http");
                    const cls =
                      "rounded-full py-3 text-center text-sm font-bold text-white transition hover:brightness-110 hover:shadow-lg md:py-3.5 md:text-base" +
                      " " +
                      "bg-[var(--primary)]/85 backdrop-blur-sm";
                    return isExternal ? (
                      <a
                        key={cat.label}
                        href={cat.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cls}
                      >
                        {cat.label}
                      </a>
                    ) : (
                      <Link key={cat.label} href={cat.href} className={cls}>
                        {cat.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* スライドボタン */}
              <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {/* スライドボタン */}
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

      {/* 診療・福利厚生の特徴 */}
      <section className="section-mesh-warm px-4 py-8 md:px-6 md:py-10" aria-label="診療・福利厚生の特徴">
        {/* コンテナ */}
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {HERO_CARDS.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Link
                  href="#why"
                  className="card-shine glass-refraction group flex min-h-[110px] flex-col items-center justify-center rounded-2xl px-5 py-6 text-center shadow-lg transition hover:shadow-xl hover:-translate-y-1 md:min-h-[130px] md:px-6 md:py-8"
                  style={{ background: "linear-gradient(135deg, rgba(63,193,201,0.85) 0%, rgba(77,208,225,0.85) 50%, rgba(63,193,201,0.85) 100%)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.25)" }}
                >
                  <span className="mb-2 text-white/80">{cardIcons[i]}</span>
                  <span className="font-serif-en text-sm font-medium leading-snug text-white md:text-base">
                    {card.line1}
                  </span>
                  <span className="font-serif-en mt-1 block text-lg font-bold leading-snug text-white md:text-xl">
                    {card.line2}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

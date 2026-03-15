"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { aboutIntro, contact } from "@/lib/copy";

export function AboutIntroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setInView(true);
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const p1 = aboutIntro.point01;
  const p2 = aboutIntro.point02;
  const p3 = aboutIntro.point03;
  const p4 = aboutIntro.point04;

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`about-intro-section scroll-mt-20 bg-white py-16 md:py-24 ${inView ? "in-view" : ""}`}
      aria-labelledby="about-intro-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* セクション見出し */}
        <div className="mb-12 flex flex-wrap items-baseline gap-3 md:mb-14">
          <h2
            id="about-intro-heading"
            className="animate-on-scroll delay-1 text-3xl font-bold text-[var(--primary-dark)] md:text-4xl lg:text-5xl"
          >
            {aboutIntro.sectionLabel}
          </h2>
          <p className="animate-on-scroll delay-2 text-lg font-bold text-gray-900 md:text-xl">
            {aboutIntro.sectionSubLabel}
          </p>
        </div>

        {/* 4つの Point ブロック */}
        <div className="space-y-16 md:space-y-0">
          {/* ——— Point 01 ——— */}
          <PointRow pointNumber={p1.pointNumber} verticalLabel={p1.verticalLabel}>
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <div className="grid min-h-0 md:grid-cols-[1.1fr_1fr]">
                <div
                  className="flex flex-col justify-center p-8 md:p-10 lg:p-12"
                  style={{ background: "linear-gradient(135deg, var(--primary-dark) 0%, var(--accent-light) 50%, var(--primary-dark) 100%)" }}
                >
                  <p className="text-3xl font-bold tracking-wide text-white md:text-4xl lg:text-5xl">{p1.logoText}</p>
                  <p className="mt-6 leading-relaxed text-white/95 md:text-lg">{p1.leftDescription}</p>
                </div>
                <div className="flex flex-col justify-center bg-white p-8 md:p-10 lg:p-12">
                  <h3 className="whitespace-pre-line text-xl font-bold leading-tight text-gray-900 md:text-2xl">{p1.rightHeading}</h3>
                  <p className="mt-4 leading-relaxed text-gray-700">{p1.rightDescription}</p>
                  <ul className="mt-8 space-y-4" role="list">
                    {p1.challenges.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 rounded-xl bg-gray-100 px-4 py-3">
                        <CheckIcon />
                        <span className="text-sm font-medium text-gray-800 md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </PointRow>

          {/* ——— Point 02: Why Choose Us（左テキスト・右画像） ——— */}
          <PointRow pointNumber={p2.pointNumber} verticalLabel={p2.verticalLabel}>
            <div className="rounded-3xl border border-gray-200 bg-white shadow-lg overflow-hidden">
              <div className="grid min-h-0 md:grid-cols-[1fr_1fr] md:min-h-[320px]">
                {/* 左: テキスト */}
                <div className="flex flex-col justify-center p-8 md:p-10">
                  <h3 className="text-xl font-bold text-gray-900 md:text-2xl">{p2.title}</h3>
                  <p className="mt-4 leading-relaxed text-gray-700">{p2.description}</p>
                  <ul className="mt-6 space-y-3" role="list">
                    {p2.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3">
                        <CheckIcon />
                        <span className="text-gray-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={p2.linkHref} className="mt-8 inline-flex items-center gap-1 rounded-full bg-[var(--primary-dark)] px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90 w-fit">
                    {p2.linkLabel}<span aria-hidden>›</span>
                  </Link>
                </div>
                {/* 右: ダミー画像 */}
                <div className="relative min-h-[240px] md:min-h-0 bg-[var(--section-bg)] flex items-center justify-center border-t md:border-t-0 md:border-l border-gray-200">
                  <span className="text-gray-400 text-sm font-medium" aria-hidden>ダミー画像</span>
                </div>
              </div>
            </div>
          </PointRow>

          {/* ——— Point 03: Benefits（3カード・アイコン＋テキスト） ——— */}
          <PointRow pointNumber={p3.pointNumber} verticalLabel={p3.verticalLabel}>
            <div className="rounded-3xl border border-gray-200 bg-white shadow-lg overflow-hidden">
              {/* ティール帯：タイトル＋右に補足 */}
              <div className="flex flex-col gap-2 bg-[var(--primary-dark)] px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                <h3 className="text-lg font-bold text-white md:text-xl">{p3.title}</h3>
                <span className="flex items-center gap-2 text-sm text-white/95">
                  <span className="flex h-5 w-5 items-center justify-center rounded bg-white/20">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  </span>
                  {p3.subLine}
                </span>
              </div>
              {/* 3カード横並び */}
              <div className="grid gap-6 p-6 md:grid-cols-3 md:gap-4 md:p-8">
                {p3.cards.map((card, i) => (
                  <div key={i} className="flex flex-col rounded-2xl bg-white border border-gray-100 p-6 shadow-sm">
                    <div className="flex justify-center">
                      <div className="benefit-icon-wrap flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-light)]/20">
                        {i === 0 && <BenefitIcon40 />}
                        {i === 1 && <BenefitIcon365 />}
                        {i === 2 && <BenefitIconTicket />}
                      </div>
                    </div>
                    <h4 className="mt-5 text-base font-bold text-gray-900 md:text-lg">{card.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{card.description}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-100 px-6 pb-6 pt-4 md:px-8">
                <Link href={p3.linkHref} className="inline-flex items-center gap-1 rounded-full bg-[var(--primary-dark)] px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90">
                  {p3.linkLabel}<span aria-hidden>›</span>
                </Link>
              </div>
            </div>
          </PointRow>

          {/* ——— Point 04: ご利用のフロー（左テキスト・右動画） ——— */}
          <PointRow pointNumber={p4.pointNumber} verticalLabel={p4.verticalLabel}>
            <div className="rounded-3xl border border-gray-200 bg-white shadow-lg overflow-hidden">
              <div className="grid min-h-0 md:grid-cols-[1fr_1fr] md:min-h-[420px]">
                {/* 左: タイトル＋4ステップ */}
                <div className="flex flex-col p-6 md:p-8">
                  <h3 className="text-xl font-bold text-gray-900 md:text-2xl">{p4.sectionTitle}</h3>
                  <ol className="mt-6 space-y-5" role="list">
                    {p4.steps.map((item, i) => (
                      <li key={i}>
                        {i === 2 && (
                          <p className="mb-4 border-t border-dashed border-gray-300 pt-4 text-center text-xs text-gray-500">
                            {p4.corporateEndLabel}
                          </p>
                        )}
                        <div className="flex gap-3">
                          <span className="inline-flex shrink-0 items-center justify-center rounded-md bg-[var(--primary-dark)] px-3 py-2 text-xs font-bold leading-none text-white">
                            STEP {item.step}
                          </span>
                          <div className="min-w-0 flex-1">
                            <span
                              className={`inline-block rounded px-2 py-0.5 text-[10px] font-bold ${
                                item.role === "法人様"
                                  ? "bg-[var(--primary-dark)] text-white"
                                  : "bg-[var(--primary)] text-white"
                              }`}
                            >
                              {item.role}
                            </span>
                            <h4 className="mt-2 text-base font-bold text-gray-900 md:text-lg">{item.title}</h4>
                            <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>
                  <Link href={p4.linkHref} className="mt-6 inline-flex w-fit items-center gap-1 rounded-full bg-[var(--primary-dark)] px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90">
                    {p4.linkLabel}<span aria-hidden>›</span>
                  </Link>
                </div>
                {/* 右: 動画エリア */}
                <div className="flex min-h-[240px] items-center justify-center border-t bg-gray-100 md:min-h-0 md:border-t-0 md:border-l border-gray-200">
                  <div className="flex aspect-video w-full max-w-sm items-center justify-center rounded-lg bg-gray-200/80">
                    <span className="flex flex-col items-center gap-2 text-gray-500">
                      <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M8 5v14l11-7L8 5zM6 3v18h2V3H6z" />
                      </svg>
                      <span className="text-sm font-medium">動画</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </PointRow>
        </div>

        {/* 最下部 CTA バー */}
        <div className="animate-on-scroll delay-5 mt-12 flex flex-col gap-6 rounded-2xl bg-[var(--section-bg)] px-6 py-6 md:flex-row md:items-center md:justify-between md:px-8 md:py-6">
          <ul className="flex flex-col gap-2" role="list">
            {aboutIntro.ctaCheckLines.map((line, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-800">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-xs font-bold text-white">✓</span>
                {line}
              </li>
            ))}
          </ul>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a href={contact.lineUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary-dark)] px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:opacity-90">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
              {aboutIntro.ctaIntroduce}<span aria-hidden>›</span>
            </a>
            <a href={`tel:${contact.tel}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:opacity-90">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              {aboutIntro.ctaContact}<span aria-hidden>›</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/** 特典カード用アイコン：封筒＋40%バッジ */
function BenefitIcon40() {
  return (
    <div className="relative flex h-14 w-14 items-center justify-center" aria-hidden>
      {/* 封筒本体 */}
      <div className="absolute bottom-0 left-1/2 h-9 w-10 -translate-x-1/2 rounded border-2 border-white bg-white" />
      {/* 封筒フラップ（三角） */}
      <div className="absolute left-1/2 top-0.5 h-0 w-0 -translate-x-1/2 border-x-[13px] border-b-[11px] border-x-transparent border-b-white" />
      {/* 40% バッジ */}
      <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--primary)] text-[7px] font-bold leading-none text-white shadow">40%</span>
    </div>
  );
}

/** 特典カード用アイコン：チャットバブル（365日相談） */
function BenefitIcon365() {
  return (
    <div className="relative flex h-14 w-14 items-end justify-center gap-0.5 pb-2" aria-hidden>
      <div className="h-6 w-6 rounded-full border-2 border-white bg-white/95" />
      <div className="relative h-7 w-7 rounded-full border-2 border-white bg-white/95">
        <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-white/95" />
      </div>
      <div className="h-5 w-5 rounded-full border-2 border-white bg-white/95" />
    </div>
  );
}

/** 特典カード用アイコン：チケット・紹介 */
function BenefitIconTicket() {
  return (
    <div className="relative flex h-14 w-14 items-center justify-center" aria-hidden>
      {/* チケット外形（中央くびれ） */}
      <div className="flex h-12 w-11 items-center justify-center rounded border-2 border-white bg-white/95">
        <span className="text-[10px] font-bold text-[var(--primary-dark)]">¥</span>
        <span className="text-xs font-bold text-[var(--primary-dark)]">16,500</span>
      </div>
      <span className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border border-white bg-[var(--primary)]" />
      <span className="absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border border-white bg-[var(--primary)]" />
    </div>
  );
}

/**
 * 各 Point ブロック共通レイアウト
 * - 左: sticky の Point番号＋縦書きラベル（1つの要素に統合）
 * - 右: コンテンツ（スクロールで上に流れる）
 */
function PointRow({
  pointNumber,
  verticalLabel,
  children,
}: {
  pointNumber: string;
  verticalLabel: string;
  children: React.ReactNode;
}) {
  return (
    <div className="about-point-row flex gap-0 md:gap-6">
      {/* 左: sticky ポイントカラム（Point番号＋縦書きラベルが一体） */}
      <div className="about-point-sticky hidden shrink-0 md:block md:w-16" aria-hidden>
        <div className="sticky top-28 flex flex-col items-center gap-3">
          {/* Point番号（白ピル） */}
          <div className="flex h-20 w-12 flex-col items-center justify-center rounded-full bg-white shadow-md">
            <span className="flex items-center gap-1 text-[10px] font-bold text-gray-400">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
              Point.
            </span>
            <span className="text-xl font-bold text-gray-900">{pointNumber}</span>
          </div>
          {/* 縦書きラベル（青緑ピル） */}
          <div
            className="flex w-11 items-center justify-center rounded-full bg-[var(--primary-dark)] py-5 shadow-md"
            style={{ writingMode: "vertical-rl", minHeight: "160px" }}
          >
            <span className="text-xs font-bold tracking-[0.15em] text-white">
              {verticalLabel}
            </span>
          </div>
        </div>
      </div>

      {/* 右: コンテンツ（上に流れる）※SPでは固定部分は表示せずコンテンツのみ */}
      <div className="about-point-content min-w-0 flex-1 pb-16 md:pb-20">
        {children}
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--primary-dark)] text-white">
      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

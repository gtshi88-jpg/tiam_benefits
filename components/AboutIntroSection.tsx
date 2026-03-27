"use client";

import { useRef, useEffect, useState, Fragment } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { contact } from "@/lib/constants";

const ABOUT_INTRO = {
  sectionLabel: "About",
  sectionSubLabel: "TIAM BENEFITSとは",
  ctaCheckLines: [
    "TIAM CLINICがワンストップで予約サポート",
    "福利厚生価格で銀座のクリニックを利用可能",
  ],
  ctaIntroduce: "LINEで導入相談",
  ctaContact: "お電話でのご相談はこちら",
  point01: {
    pointNumber: "01",
    verticalLabel: "About TIAM benefits",
    logoText: "TIAM BENEFITS",
    leftDescription:
      "TIAM BENEFITSは、TIAM CLINICが法人向けに用意した、美容医療に特化した福利厚生です。採用や社内満足度の訴求に使える「銀座のクリニック」を、福利厚生価格で届けます。施術のご相談から予約まで、LINEと専任スタッフが一気通貫でサポートするので、初めての方でも手続きの負担を抑えられます。",
    rightHeading: "社員の満足度と、\n企業の採用力を、\n同じ制度で。",
    rightDescription:
      "対象施術を優待価格で利用できるほか、365日の相談やLINEでの予約で、従業員の負担を小さくします。給与を上げずに「働きがいの実感」や社内の話題づくりにつなげたい企業様の選択肢として、導入から運用まで伴走します。",
    challenges: [
      "福利厚生の魅力が弱く、採用・採用広報で差がつきにくい",
      "健康経営に加え、従業員のエンゲージメントを高める施策が欲しい",
      "離職防止・定着のために、給与以外の手を打ちたいが施策が足りない",
    ],
  },
  point02: {
    pointNumber: "02",
    verticalLabel: "Why Choose Us",
    title: "導入/運用コスト",
    description: "導入費用0円。人数無制限で定額。給与アップよりもコスト効率が高く、社員満足度・定着率の向上に寄与します。",
    items: [
      "人数無制限で定額・コスト一定",
      "代表者様のみのご契約でOK",
      "社員全員が優待価格（10〜45%OFF）で利用可能",
    ],
    linkHref: "#why",
    linkLabel: "選ばれる理由を見る",
  },
  point03: {
    pointNumber: "03",
    verticalLabel: "Benefits",
    title: "TIAM BENEFITSの特典",
    linkHref: "#why",
    linkLabel: "特典一覧を見る",
    cards: [
      {
        title: "社員全員が10〜45%OFFの優待価格で利用可能",
        description: "対象施術を社員優待価格（10〜45%OFF）でご利用いただけます。割引率は施術メニュー・時期・条件により異なります。",
      },
      {
        title: "美容相談 365日対応",
        description: "LINE・電話・診察にて365日いつでも相談可能。専任スタッフがサポートします。",
      },
      {
        title: "紹介で16,500円分の施術チケットをプレゼント",
        description: "社員様がご友人、ご家族を紹介することで16,500円分の施術チケットをお互いにプレゼントいたします。",
      },
      {
        title: "契約時に社員様5名様分の16,500円分の施術チケットをプレゼントいたします",
        description: "ご契約で社員様5名様分の16,500円分の施術チケットをプレゼントいたします。ぜひご活用ください。",
      },
    ],
  },
  point04: {
    pointNumber: "04",
    verticalLabel: "How To Use Our Service",
    sectionTitle: "ご利用のフロー",
    linkHref: "#about",
    linkLabel: "導入の流れを見る",
    corporateEndLabel: "法人様のお手続きはここまで",
    steps: [
      { step: "01", role: "法人様", title: "最短5分でお申込み", description: "お電話やLINEにて「福利厚生を導入したい」旨をお伝えください。法人契約の手続きを行います。" },
      { step: "02", role: "法人様", title: "従業員様へ周知", description: "社員様へ向けた「福利厚生案内資料」を当院がご用意します。社内で配布・周知をお願いします。" },
      { step: "03", role: "従業員様", title: "LINEで簡単予約", description: "希望の施術を選び、LINE上で日程確定＆質問受付。専任スタッフがサポートします。" },
      { step: "04", role: "従業員様", title: "ご来院いただき、優待価格で施術", description: "社員様が個別に予約・来院するだけ。お会計時に対象施術へ優待割引（10〜45%OFF）が適用されます。" },
    ],
  },
} as const;

const POINTS_META = [
  { number: ABOUT_INTRO.point01.pointNumber, label: ABOUT_INTRO.point01.verticalLabel },
  { number: ABOUT_INTRO.point02.pointNumber, label: ABOUT_INTRO.point02.verticalLabel },
  { number: ABOUT_INTRO.point03.pointNumber, label: ABOUT_INTRO.point03.verticalLabel },
  { number: ABOUT_INTRO.point04.pointNumber, label: ABOUT_INTRO.point04.verticalLabel },
];

const UNSPLASH_POINT02 = "/images/about/benefit_cost.png";
export function AboutIntroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [activePoint, setActivePoint] = useState(0);
  const pointRefs = useRef<(HTMLDivElement | null)[]>([null, null, null, null]);

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

  useEffect(() => {
    const els = pointRefs.current.filter(Boolean) as HTMLDivElement[];
    if (els.length === 0) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = pointRefs.current.indexOf(entry.target as HTMLDivElement);
            if (idx !== -1) setActivePoint(idx);
          }
        });
      },
      { rootMargin: "-10% 0px -60% 0px", threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const p1 = ABOUT_INTRO.point01;
  const p2 = ABOUT_INTRO.point02;
  const p3 = ABOUT_INTRO.point03;
  const p4 = ABOUT_INTRO.point04;
  const meta = POINTS_META[activePoint];

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`about-intro-section scroll-mt-20 section-mesh-warm py-16 md:py-24 ${inView ? "in-view" : ""}`}
      aria-labelledby="about-intro-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* セクション見出し */}
        <div className="mb-12 flex flex-wrap items-baseline gap-3 md:mb-14">
          <h2
            id="about-intro-heading"
            className="font-serif-en animate-on-scroll delay-1 text-3xl font-bold italic text-[var(--primary-dark)] md:text-4xl lg:text-5xl"
          >
            {ABOUT_INTRO.sectionLabel}
          </h2>
          <p className="animate-on-scroll delay-2 text-lg font-bold text-gray-900 md:text-xl">
            {ABOUT_INTRO.sectionSubLabel}
          </p>
        </div>

        {/* メイン: サイドバー + コンテンツ */}
        <div className="relative md:flex md:gap-6">
          {/* Liquid Glass Sticky Sidebar (デスクトップのみ) */}
          <div className="hidden shrink-0 md:block md:w-24" aria-hidden>
            <div className="sticky top-28 flex flex-col items-center">
              <div className="liquid-glass-sidebar flex w-20 flex-col items-center">
                {/* Point番号 */}
                <div className="flex flex-col items-center justify-center px-4 py-6">
                  <span className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                    Point.
                  </span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={meta.number}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="mt-1 block text-2xl font-bold text-gray-900"
                    >
                      {meta.number}
                    </motion.span>
                  </AnimatePresence>
                </div>

                {/* ステップドット */}
                <div className="flex flex-col items-center gap-1.5 pb-4">
                  {POINTS_META.map((_, i) => (
                    <span
                      key={i}
                      className={`rounded-full transition-all duration-300 ${
                        i === activePoint
                          ? "h-1.5 w-4 bg-[var(--primary)]"
                          : "h-1.5 w-1.5 bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* 縦書きラベル */}
                <div
                  className="flex w-full flex-1 items-center justify-center px-5 py-8"
                  style={{
                    writingMode: "vertical-rl",
                    minHeight: "280px",
                    background: "#c5a559",
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={meta.label}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="font-sans text-xs font-bold tracking-[0.15em] text-white"
                    >
                      {meta.label}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          {/* 右: 全 Point コンテンツ */}
          <div className="min-w-0 flex-1">
            {/* ——— Point 01 ——— */}
            <div ref={(el) => { pointRefs.current[0] = el; }} className="pb-16 md:pb-20">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="overflow-hidden rounded-3xl shadow-xl glass-refraction" style={{ border: "1px solid rgba(255,255,255,0.3)" }}>
                  <div className="grid min-h-0 md:grid-cols-[1.1fr_1fr]">
                    <div
                      className="glass-dark flex flex-col justify-center p-8 md:p-10 lg:p-12"
                      style={{ background: "linear-gradient(135deg, rgba(26,26,26,0.88) 0%, rgba(51,51,51,0.85) 50%, rgba(26,26,26,0.88) 100%)", border: "none", borderRadius: 0 }}
                    >
                      <p className="font-serif-en text-3xl font-bold tracking-wide text-white md:text-4xl lg:text-5xl">{p1.logoText}</p>
                      <p className="mt-6 leading-relaxed text-white/95 md:text-lg">{p1.leftDescription}</p>
                    </div>
                    <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12" style={{ background: "rgba(255,255,255,0.65)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}>
                      <h3 className="font-serif-jp whitespace-pre-line text-xl font-bold leading-tight text-gray-900 md:text-2xl">{p1.rightHeading}</h3>
                      <p className="mt-4 leading-relaxed text-gray-700">{p1.rightDescription}</p>
                      <ul className="mt-8 space-y-4" role="list">
                        {p1.challenges.map((item, i) => (
                          <li key={i} className="flex items-center gap-3 rounded-xl px-4 py-3 glass-tinted">
                            <CheckIcon />
                            <span className="text-sm font-medium text-gray-800 md:text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ——— Point 02 ——— */}
            <div ref={(el) => { pointRefs.current[1] = el; }} className="pb-16 md:pb-20">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="glass-card glass-refraction rounded-3xl overflow-hidden">
                  <div className="grid min-h-0 md:grid-cols-[1fr_1fr] md:min-h-[320px]">
                    <div className="flex flex-col justify-center p-8 md:p-10">
                      <h3 className="font-serif-en text-xl font-bold text-gray-900 md:text-2xl">{p2.title}</h3>
                      <p className="mt-4 leading-relaxed text-gray-700">{p2.description}</p>
                      <ul className="mt-6 space-y-3" role="list">
                        {p2.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-3 rounded-xl px-4 py-3 glass-tinted">
                            <CheckIcon />
                            <span className="text-gray-800">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative min-h-[240px] md:min-h-0 overflow-hidden border-t md:border-t-0 md:border-l border-gray-200">
                      <Image
                        src={UNSPLASH_POINT02}
                        alt="従来の福利厚生とTIAM福利厚生の比較（人数無制限・定額 vs 代表者様のみOK）"
                        fill
                        className="object-contain transition-transform duration-700 hover:scale-100"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ——— Point 03 ——— */}
            <div ref={(el) => { pointRefs.current[2] = el; }} className="pb-16 md:pb-20">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="glass-card glass-refraction rounded-3xl overflow-hidden">
                  <div className="flex flex-col gap-2 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8" style={{ background: "#c5a559", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
                    <h3 className="text-lg font-bold text-white md:text-xl">{p3.title}</h3>
                    <span className="flex items-center gap-2 text-sm text-white/95">
                      {/* <span className="flex h-5 w-5 items-center justify-center rounded bg-black/10">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                      </span> */}
                    </span>
                  </div>
                  <div className="grid gap-6 p-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-4 md:p-8">
                    {p3.cards.map((card, i) => (
                      <div
                        key={i}
                        className="flex flex-col rounded-2xl p-6 glass-tinted"
                        style={{ background: "#c5a559" }}
                      >
                        <div className="flex justify-center">
                          <div className="benefit-icon-wrap flex h-20 w-40 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-light)]/20">
                            {i === 0 && <BenefitIconDiscountRange />}
                            {i === 1 && <BenefitIcon365 />}
                            {i === 2 && <BenefitIconTicket />}
                            {i === 3 && <BenefitIconContractTicket />}
                          </div>
                        </div>
                        <h4 className="mt-5 text-base font-bold text-white md:text-lg">{card.title}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-white/90">{card.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ——— Point 04 ——— */}
            <div ref={(el) => { pointRefs.current[3] = el; }} className="pb-16 md:pb-20">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="glass-card glass-refraction rounded-3xl">
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl font-bold text-gray-900 md:text-2xl">{p4.sectionTitle}</h3>
                    <div
                      className="mt-6 flex w-full min-w-0 flex-col gap-4 md:mt-8 md:flex-row md:items-stretch md:gap-1"
                      role="list"
                      aria-label="ご利用の流れ"
                    >
                      {p4.steps.map((item, i) => (
                        <Fragment key={item.step}>
                          <div
                            role="listitem"
                            className={`flex min-h-0 w-full min-w-0 flex-1 flex-col rounded-2xl border p-5 shadow-sm transition-shadow hover:shadow-md md:basis-0 md:min-h-[220px] ${
                              i === p4.steps.length - 1
                                ? "border-[var(--primary)]/30 bg-[var(--primary)]/5"
                                : "border-gray-200/80 bg-white"
                            }`}
                          >
                            {i === 2 && (
                              <p className="mb-4 border-t border-dashed border-gray-300 pt-4 text-center text-xs text-gray-500 md:hidden">
                                {p4.corporateEndLabel}
                              </p>
                            )}
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="inline-flex shrink-0 items-center justify-center rounded-md bg-[var(--primary-dark)] px-3 py-2 text-xs font-bold leading-none text-white">
                                STEP {item.step}
                              </span>
                              <span
                                className={`inline-block rounded px-2 py-0.5 text-[10px] font-bold text-white ${
                                  item.role === "法人様"
                                    ? "bg-[var(--primary-dark)]"
                                    : "bg-[#1a9ba6]"
                                }`}
                              >
                                {item.role}
                              </span>
                            </div>
                            <h4 className="mt-4 text-base font-bold text-gray-900 md:text-lg">{item.title}</h4>
                            <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
                            <div className="mt-4 flex flex-1 items-end justify-center">
                              <FlowStepIcon step={item.step} />
                            </div>
                          </div>
                          {i < p4.steps.length - 1 && (
                            <div
                              className={`hidden shrink-0 flex-col items-center justify-center gap-1 self-center md:flex ${
                                i === 1 ? "w-[5.5rem] px-0.5" : "w-8"
                              }`}
                              aria-hidden
                            >
                              <svg
                                className="h-5 w-5 shrink-0 text-[var(--primary)]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                              </svg>
                              {i === 1 && (
                                <span className="text-center text-[10px] leading-tight text-gray-500">
                                  {p4.corporateEndLabel}
                                </span>
                              )}
                            </div>
                          )}
                        </Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* 最下部 CTA バー */}
        <div className="animate-on-scroll delay-5 mt-12 flex flex-col gap-6 rounded-2xl glass-light px-6 py-6 md:flex-row md:items-center md:justify-between md:px-8 md:py-6">
          <ul className="flex flex-col gap-2" role="list">
            {ABOUT_INTRO.ctaCheckLines.map((line, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-800">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-xs font-bold text-white">✓</span>
                {line}
              </li>
            ))}
          </ul>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a href={contact.lineUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#06C755] px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:opacity-90">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
              {ABOUT_INTRO.ctaIntroduce}<span aria-hidden>›</span>
            </a>
            <a href={`tel:${contact.tel}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:opacity-90">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              {ABOUT_INTRO.ctaContact}<span aria-hidden>›</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowStepIcon({ step }: { step: string }) {
  const base = "flex items-center justify-center";
  const color = "border-[var(--primary)]/50 bg-[var(--primary)]/10";
  if (step === "01") {
    return (
      <div className={`${base} h-14 w-14`} aria-hidden>
        <div className="relative h-10 w-10">
          <div className={`absolute bottom-0 left-1/2 h-6 w-4 -translate-x-1/2 rounded-md border-2 ${color}`} />
          <div className={`absolute top-0 left-1/2 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 ${color}`} />
        </div>
      </div>
    );
  }
  if (step === "02") {
    return (
      <div className={`${base} h-14 w-14`} aria-hidden>
        <div className={`flex flex-col gap-1 rounded-md border-2 px-2.5 py-2 ${color}`}>
          <div className="h-0.5 w-6 rounded-full bg-[var(--primary)]/50" />
          <div className="h-0.5 w-5 rounded-full bg-[var(--primary)]/40" />
          <div className="h-0.5 w-5 rounded-full bg-[var(--primary)]/40" />
        </div>
      </div>
    );
  }
  if (step === "03") {
    return (
      <div className={`${base} h-14 w-14`} aria-hidden>
        <div className="flex items-end gap-0.5">
          <div className={`h-6 w-6 rounded-lg rounded-bl-sm border-2 ${color}`} />
          <div className={`h-5 w-5 rounded-lg rounded-bl-sm border-2 ${color}`} style={{ opacity: 0.8 }} />
        </div>
      </div>
    );
  }
  if (step === "04") {
    return (
      <div className={`${base} h-14 w-14`} aria-hidden>
        <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${color}`}>
          <svg className="h-5 w-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
    );
  }
  return null;
}

function BenefitIconDiscountRange() {
  return (
    <div className="flex h-16 w-36 items-center justify-center px-2" aria-hidden>
      <div className="relative flex h-12 w-28 items-center justify-center gap-0.5 rounded-lg border-2 border-white bg-white/95 px-2 py-2">
        <span className="text-xs font-bold leading-tight text-[var(--primary-dark)]">10〜45%</span>
        <span className="rounded bg-[var(--primary)] px-1.5 py-0.5 text-[10px] font-bold text-white">OFF</span>
      </div>
    </div>
  );
}

function BenefitIcon365() {
  return (
    <div className="flex h-16 w-36 items-center justify-center gap-3 px-2" aria-hidden>
      <div className="flex shrink-0 items-end gap-0.5 pb-1">
        <div className="h-5 w-5 rounded-full border-2 border-white bg-white/95" />
        <div className="relative h-6 w-6 rounded-full border-2 border-white bg-white/95">
          <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full border-2 border-white bg-white/95" />
        </div>
        <div className="h-4 w-4 rounded-full border-2 border-white bg-white/95" />
      </div>
      <div className="flex h-10 w-16 items-center justify-center rounded border-2 border-white bg-white/95">
        <span className="text-base font-bold text-[var(--primary-dark)]">365</span>
        <span className="text-[9px] font-medium text-[var(--primary-dark)]/80">日</span>
      </div>
    </div>
  );
}

function BenefitIconTicket() {
  return (
    <div className="flex h-16 w-36 items-center justify-center px-2" aria-hidden>
      <div className="relative flex h-11 w-28 items-center justify-center gap-0.5 rounded border-2 border-white bg-white/95 px-3 py-2">
        <span className="text-[10px] font-bold text-[var(--primary-dark)]">¥</span>
        <span className="text-sm font-bold text-[var(--primary-dark)]">16,500</span>
        <span className="absolute -right-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full border border-white bg-[var(--primary)]" />
        <span className="absolute -left-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full border border-white bg-[var(--primary)]" />
      </div>
    </div>
  );
}

function BenefitIconContractTicket() {
  return (
    <div className="flex h-16 w-36 items-center justify-center gap-3 px-2" aria-hidden>
      {/* 契約書 */}
      <div className="flex h-12 w-8 shrink-0 flex-col gap-1 rounded border-2 border-white bg-white/95 px-2 py-2.5">
        <span className="h-0.5 w-full rounded bg-[var(--primary-dark)]/50" />
        <span className="h-0.5 w-full rounded bg-[var(--primary-dark)]/40" />
        <span className="h-0.5 w-4/5 rounded bg-[var(--primary-dark)]/30" />
      </div>
      {/* チケット束（横並びで重なりを避ける） */}
      <div className="flex shrink-0 items-center gap-1">
        <div className="flex h-9 w-6 items-center justify-center rounded border border-white bg-white/80" />
        <div className="flex h-11 w-8 items-center justify-center rounded border-2 border-white bg-white/95">
          <span className="text-[9px] font-bold text-[var(--primary-dark)]">¥16,500</span>
        </div>
        <div className="flex h-8 w-5 items-center justify-center rounded border border-white bg-white/80" />
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

// 診療・福利厚生の特徴セクションのコンポーネント
"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollAnimate, StaggerContainer, StaggerItem } from "./ScrollAnimate";

const WHY = {
  heading: "Why Choose Us",
  subLabel: "選ばれる理由",
  lead: "月額16,500円の定額で導入完了。\n銀座のクリニックを活かし、採用力・従業員満足度の向上に寄与します。",
  companyCard: {
    label: "企業側のメリット",
    items: [
      "社内の人材定着の施策の1つになる",
      "月額16,500円の定額なので社内決裁が通しやすい",
      "福利厚生が充実し採用ページで他社との差別化に役立つ",
    ],
  },
  employeeCard: {
    label: "従業員側のメリット",
    items: [
      "全施術を40% OFFの優待価格でご利用可能",
      "手軽なLINE予約で時短が可能",
      "ご家族も同じ優待価格でご利用可能",
    ],
  },
} as const;

const UNSPLASH_COMPANY = "/images/why/company.png";
const UNSPLASH_EMPLOYEE = "/images/why/employee.png";

export function WhySection() {
  const sectionRef = useRef<HTMLElement>(null);
  {/* スクロールY進捗 */}
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={sectionRef}
      id="why"
      className="relative scroll-mt-20 overflow-hidden py-16 md:py-24"
      aria-labelledby="why-heading"
    >
      <motion.div
        className="absolute inset-0"
        style={{
          y: bgY,
          background:
            "linear-gradient(135deg, var(--primary-dark) 0%, var(--accent-light) 50%, var(--primary-dark) 100%)",
          top: "-10%",
          bottom: "-10%",
        }}
      />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNnKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-50" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <ScrollAnimate direction="up" blur>
          <h2
            id="why-heading"
            className="font-serif-en text-3xl font-bold italic text-white md:text-4xl lg:text-5xl"
          >
            {WHY.heading}
          </h2>
          <p className="mt-2 text-sm font-bold text-white/80">{WHY.subLabel}</p>
          <p className="mt-6 whitespace-pre-line leading-relaxed text-white/95 md:text-lg">
            {WHY.lead}
          </p>
        </ScrollAnimate>

        <StaggerContainer className="mt-12 grid gap-8 md:grid-cols-2" stagger={0.2}>
          {/* 企業側のメリット */}
          <StaggerItem>
            <div className="card-shine glass-refraction group overflow-hidden rounded-2xl shadow-xl transition hover:shadow-2xl hover:-translate-y-1" style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(24px) saturate(180%)", WebkitBackdropFilter: "blur(24px) saturate(180%)", border: "1px solid rgba(255,255,255,0.18)" }}>
              <div className="relative flex h-64 items-end overflow-hidden px-6 pb-5 md:h-72">
                <Image
                  src={UNSPLASH_COMPANY}
                  alt=""
                  fill
                  className="object-cover object-top scale-75 transition-transform duration-700 group-hover:scale-80"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/90 via-[var(--primary-dark)]/40 to-transparent" />
                <p className="relative z-10 text-xl font-bold text-white md:text-2xl">
                  {WHY.companyCard.label}
                </p>
              </div>
              <ul className="divide-y divide-white/10 px-2 pb-2" role="list">
                {WHY.companyCard.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 px-4 py-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full" style={{ background: "rgba(255,255,255,0.15)" }}>
                      <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>

          {/* 従業員側のメリット */}
          <StaggerItem>
            <div className="card-shine glass-refraction group overflow-hidden rounded-2xl shadow-xl transition hover:shadow-2xl hover:-translate-y-1" style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(24px) saturate(180%)", WebkitBackdropFilter: "blur(24px) saturate(180%)", border: "1px solid rgba(255,255,255,0.18)" }}>
              <div className="relative flex h-64 items-end overflow-hidden px-6 pb-5 md:h-72">
                <Image
                  src={UNSPLASH_EMPLOYEE}
                  alt=""
                  fill
                  className="object-cover object-top scale-75 transition-transform duration-700 group-hover:scale-80"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#D4872E]/90 via-[#E8A040]/40 to-transparent" />
                <p className="relative z-10 text-xl font-bold text-white md:text-2xl">
                  {WHY.employeeCard.label}
                </p>
              </div>
              <ul className="divide-y divide-white/10 px-2 pb-2" role="list">
                {WHY.employeeCard.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 px-4 py-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full" style={{ background: "rgba(197,165,89,0.4)" }}>
                      <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}

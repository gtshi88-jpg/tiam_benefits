"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollAnimate, StaggerContainer, StaggerItem } from "./ScrollAnimate";

const FAQ = {
  title: "よくあるご質問",
  subtitle: "導入をご検討中の企業様から寄せられるご質問にお答えします。",
  items: [
    {
      q: "契約期間に縛りはありますか？",
      a: "原則として1年ごとの自動更新となりますが、解約をご希望の場合は更新月の1ヶ月前までにお申し出いただければスムーズに解約可能です。",
    },
    {
      q: "社員数が少ないのですが、導入できますか？",
      a: "はい、可能です。少人数の企業様でも導入いただけます。「月額16,500円」の固定コストで社員全員が割引対象となるため、数名の利用でも元が取れる設計です。",
    },
    {
      q: "男性社員も利用できますか？",
      a: "もちろんです。ヒゲ脱毛や毛穴洗浄（ハイドラフェイシャル）、ニキビ跡治療などで多くの男性にご来院いただいております。",
    },
    {
      q: "福利厚生費として計上できますか？",
      a: "はい、全社員を対象とした制度として導入いただくことで、原則として福利厚生費として計上可能です。詳細な税務処理については、顧問税理士様にご確認ください。",
    },
  ],
} as const;

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scroll-mt-20 section-mesh-warm py-16 md:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <ScrollAnimate direction="up" blur>
          <h2
            id="faq-heading"
            className="font-serif-jp text-2xl font-bold text-gray-900 md:text-3xl"
          >
            {FAQ.title}
          </h2>
          <p className="mt-2 text-gray-600">{FAQ.subtitle}</p>
        </ScrollAnimate>

        <StaggerContainer className="mt-10 space-y-2" stagger={0.08}>
          {FAQ.items.map((item, i) => (
            <StaggerItem key={i}>
              <div className="overflow-hidden rounded-lg glass-card transition">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-medium text-gray-900 transition hover:bg-white/30"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span>Q. {item.q}</span>
                  <motion.span
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 text-xl text-[var(--primary)]"
                    aria-hidden
                  >
                    ▼
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                      id={`faq-answer-${i}`}
                      role="region"
                      aria-labelledby={`faq-question-${i}`}
                    >
                      <div className="border-t border-white/30 px-6 py-4 text-gray-700">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

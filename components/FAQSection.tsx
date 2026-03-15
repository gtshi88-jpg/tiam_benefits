"use client";

import { useState } from "react";
import { faq } from "@/lib/copy";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scroll-mt-20 bg-[var(--section-bg)] py-16 md:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h2
          id="faq-heading"
          className="text-2xl font-bold text-gray-900 md:text-3xl"
        >
          {faq.title}
        </h2>
        <p className="mt-2 text-gray-600">{faq.subtitle}</p>
        <ul className="mt-10 space-y-2">
          {faq.items.map((item, i) => (
            <li key={i} className="rounded-lg bg-white shadow-sm">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-medium text-gray-900 transition hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                <span>Q. {item.q}</span>
                <span
                  className={`shrink-0 text-xl transition ${openIndex === i ? "rotate-180" : ""}`}
                  aria-hidden
                >
                  ▼
                </span>
              </button>
              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                className={`overflow-hidden transition-all ${openIndex === i ? "max-h-96" : "max-h-0"}`}
              >
                <div className="border-t border-gray-100 px-6 py-4 text-gray-700">
                  {item.a}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

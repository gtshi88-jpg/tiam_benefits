import { why } from "@/lib/copy";

export function WhySection() {
  return (
    <section
      id="why"
      className="scroll-mt-20 py-16 md:py-24"
      style={{
        background:
          "linear-gradient(135deg, var(--primary-dark) 0%, var(--accent-light) 50%, var(--primary-dark) 100%)",
      }}
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* 見出し */}
        <h2
          id="why-heading"
          className="text-3xl font-bold text-white md:text-4xl lg:text-5xl"
        >
          {why.heading}
        </h2>
        <p className="mt-2 text-sm font-bold text-white/80">{why.subLabel}</p>
        <p className="mt-6 whitespace-pre-line leading-relaxed text-white/95 md:text-lg">
          {why.lead}
        </p>

        {/* 2カード：企業側 / 従業員側 */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* 企業側のメリット */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <div className="relative flex h-44 items-end overflow-hidden px-6 pb-4 md:h-48">
              {/* CSSイラスト背景（ティール→白グラデ） */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, var(--accent-light) 0%, var(--primary-dark) 100%)",
                }}
              />
              {/* CSSイラスト：2人のビジネスパーソン */}
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-end gap-3" aria-hidden>
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full border-2 border-white/60 bg-white/30" />
                  <div className="mt-1 h-12 w-10 rounded-t-lg border-2 border-b-0 border-white/40 bg-white/20" />
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full border-2 border-white/60 bg-white/30" />
                  <div className="mt-1 h-14 w-10 rounded-t-lg border-2 border-b-0 border-white/40 bg-white/20" />
                </div>
              </div>
              <p className="relative z-10 text-xl font-bold text-white md:text-2xl">
                {why.companyCard.label}
              </p>
            </div>
            <ul className="divide-y divide-gray-100 px-2 pb-2" role="list">
              {why.companyCard.items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 px-4 py-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--primary-dark)]">
                    <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 従業員側のメリット */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <div className="relative flex h-44 items-end overflow-hidden px-6 pb-4 md:h-48">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, #E8A040 0%, #D4872E 100%)",
                }}
              />
              {/* CSSイラスト：従業員 */}
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-end gap-3" aria-hidden>
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full border-2 border-white/60 bg-white/30" />
                  <div className="mt-1 h-12 w-8 rounded-t-lg border-2 border-b-0 border-white/40 bg-white/20" />
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full border-2 border-white/60 bg-white/30" />
                  <div className="mt-1 h-14 w-10 rounded-t-lg border-2 border-b-0 border-white/40 bg-white/20" />
                </div>
              </div>
              <p className="relative z-10 text-xl font-bold text-white md:text-2xl">
                {why.employeeCard.label}
              </p>
            </div>
            <ul className="divide-y divide-gray-100 px-2 pb-2" role="list">
              {why.employeeCard.items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 px-4 py-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]">
                    <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { news, contact, intro } from "@/lib/copy";

export function NewsSection() {
  return (
    <section
      id="news"
      className="scroll-mt-20 bg-gradient-to-b from-[var(--section-bg)] to-[var(--section-bg)]/80 py-12 md:py-16"
      aria-labelledby="news-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* 導入実績ノート + パートナー風ロゴエリア（画像上部を模倣） */}
        <p className="text-center text-xs text-gray-500">
          {intro.statNote}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 overflow-x-auto py-2">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="flex h-12 w-24 shrink-0 items-center justify-center rounded-lg bg-white text-[10px] font-medium text-gray-400 shadow-sm"
              aria-hidden
            >
              ロゴ
            </div>
          ))}
        </div>

        {/* 白い角丸カード内に News（左：見出し+ボタン / 右：一覧） */}
        <div className="mt-8 rounded-3xl bg-white p-6 shadow-lg md:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            {/* 左：News 見出し + お知らせ + ピル型ボタン */}
            <div className="shrink-0 lg:w-56">
              <h2
                id="news-heading"
                className="text-2xl font-bold text-[var(--primary-dark)] md:text-3xl"
              >
                {news.listLabel}
              </h2>
              <p className="mt-1 text-sm text-gray-500">{news.title}</p>
              <Link
                href="#news"
                className="mt-6 inline-flex items-center gap-1 rounded-full bg-[var(--primary-dark)] px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90"
              >
                {news.listLinkText}
                <span className="ml-0.5" aria-hidden>
                  ›
                </span>
              </Link>
            </div>
            {/* 右：ニュース一覧（左にティールの縦線 + 日付 + タイトル） */}
            <ul className="min-w-0 flex-1 space-y-0">
              {news.list.map((item, i) => (
                <li key={i}>
                  <Link
                    href="#news"
                    className="flex items-baseline gap-4 border-l-4 border-[var(--primary-dark)] py-3 pl-4 transition hover:opacity-80 md:py-4"
                  >
                    <time
                      dateTime={item.date.replace(/\./g, "-")}
                      className="shrink-0 text-sm font-medium text-gray-500"
                    >
                      {item.date}
                    </time>
                    <span className="font-medium text-gray-900">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* カード下：チェック2行 + CTA2ボタン */}
        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-col gap-2" role="list">
            {news.checkLines.map((line, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-800">
                <span
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-xs font-bold text-white"
                  aria-hidden
                >
                  ✓
                </span>
                {line}
              </li>
            ))}
          </ul>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a
              href={contact.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary-dark)] px-6 py-3.5 text-sm font-bold text-white transition hover:opacity-90"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              {news.ctaIntroduce}
              <span aria-hidden>›</span>
            </a>
            <a
              href={`tel:${contact.tel}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3.5 text-sm font-bold text-white transition hover:opacity-90"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {news.ctaContact}
              <span aria-hidden>›</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

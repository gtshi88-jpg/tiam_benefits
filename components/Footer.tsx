import Link from "next/link";
import { site, nav, sns } from "@/lib/copy";

export function Footer() {
  const navLinks = [
    { href: "#top", label: nav.top },
    { href: "#about", label: nav.about },
    { href: "#news", label: nav.news },
    { href: "#why", label: nav.why },
    { href: "#director", label: nav.director },
    { href: "#voices", label: nav.voices },
    { href: "#faq", label: nav.faq },
  ];

  const snsLinks = [
    { href: sns.instagram, label: sns.instagramLabel },
    { href: sns.youtube, label: sns.youtubeLabel },
    { href: sns.tiktok, label: sns.tiktokLabel },
  ];

  return (
    <footer className="relative mt-0">
      {/* 丸みを帯びた上部 */}
      <div
        className="rounded-t-[2.5rem] md:rounded-t-[3.5rem] text-white"
        style={{
          background:
            "linear-gradient(135deg, var(--primary-dark) 0%, var(--accent-light) 50%, var(--primary-dark) 100%)",
        }}
      >
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-14 md:px-6 md:pt-16">
          {/* 上段：左ブランド / 右ナビ */}
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            {/* 左：ロゴ＋キャッチ＋SNS */}
            <div className="text-center md:text-left">
              <p className="text-lg font-bold tracking-wide md:text-xl">
                {site.nameEn}
              </p>
              <p className="mt-3 text-2xl font-bold leading-snug md:text-3xl">
                採用力と社員満足度を<br />最大化
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
                {snsLinks.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-white/70 underline transition hover:text-white"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* 右：ナビリンク（矢印付きリスト） */}
            <nav aria-label="フッターナビゲーション" className="min-w-[200px]">
              <ul className="divide-y divide-white/20">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="flex items-center justify-between py-3 text-sm text-white/90 transition hover:text-white"
                    >
                      {label}
                      <span className="text-white/50" aria-hidden>›</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* 下段：コピーライト＋利用規約等 */}
          <div className="mt-10 flex flex-col items-center gap-4 border-t border-white/20 pt-6 md:flex-row md:justify-between">
            <p className="text-sm text-white/60">
              {site.copyright}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/terms" className="text-white/70 transition hover:text-white">
                {nav.terms}
              </Link>
              <Link href="/privacy" className="text-white/70 transition hover:text-white">
                {nav.privacy}
              </Link>
              <Link href="/company" className="text-white/70 transition hover:text-white">
                {nav.company}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { intro, nav, contact, sns } from "@/lib/copy";

export function IntroSection() {
  const snsLinks = [
    { href: sns.instagram, label: sns.instagramLabel },
    { href: sns.youtube, label: sns.youtubeLabel },
    { href: sns.tiktok, label: sns.tiktokLabel },
  ];
  return (
    <section
      id="intro"
      className="scroll-mt-20 bg-[var(--section-bg)] py-16 md:py-20"
      aria-labelledby="intro-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-center text-lg font-bold leading-relaxed text-gray-800 md:text-xl">
          {intro.text}
        </p>
        <div className="mx-auto mt-8 max-w-2xl rounded-full border-2 border-[var(--primary)] bg-[var(--primary)]/5 px-8 py-6 text-center shadow-sm md:py-7">
          <p className="text-xl font-bold text-[var(--foreground)] md:text-2xl">
            {intro.statLabel}
            <span className="mx-1 text-3xl text-[var(--primary-dark)] md:text-4xl">{intro.statValue}</span>
            {intro.statUnit}
          </p>
          <p className="mt-2 text-xs text-gray-500">{intro.statNote}</p>
        </div>
        <p className="mt-10 text-center text-sm font-bold text-gray-600">OFFICIAL SNS ACCOUNT</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-6 overflow-x-auto py-4">
          {snsLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-lg bg-white px-5 py-3 text-sm font-medium text-[var(--primary-dark)] shadow-sm transition hover:bg-[var(--primary)]/10"
            >
              {label}
            </a>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={contact.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs rounded-full bg-[var(--primary)] px-8 py-4 text-center font-bold text-white transition hover:opacity-90 sm:w-auto"
          >
            {nav.ctaIntroduce}
          </a>
          <a
            href={`tel:${contact.tel}`}
            className="w-full max-w-xs rounded-full border-2 border-[var(--primary-dark)] bg-white px-8 py-4 text-center font-bold text-[var(--primary-dark)] transition hover:bg-[var(--primary-dark)] hover:text-white sm:w-auto"
          >
            {nav.ctaContact}
          </a>
        </div>
      </div>
    </section>
  );
}

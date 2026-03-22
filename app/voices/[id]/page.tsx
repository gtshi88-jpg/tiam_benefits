import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollAnimate } from "@/components/ScrollAnimate";
import { CookieBanner } from "@/components/CookieBanner";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { contact } from "@/lib/constants";
import { getVoiceById, getOtherVoices, VOICES_LIST } from "@/lib/voices";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return VOICES_LIST.map((v) => ({ id: v.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const voice = getVoiceById(id);
  if (!voice) {
    return { title: "導入企業の声 | TIAM BENEFITS" };
  }
  return {
    title: `${voice.fullTitle} | TIAM BENEFITS`,
    description: voice.quote,
  };
}

export default async function VoiceDetailPage({ params }: Props) {
  const { id } = await params;
  const voice = getVoiceById(id);

  if (!voice) {
    notFound();
  }

  const otherVoices = getOtherVoices(id);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--section-bg)] pt-20 pb-32">
        {/* ページヘッダー */}
        <section className="bg-[var(--primary-dark)] py-10 text-white md:py-14">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <ScrollAnimate>
              <Link
                href="/#voices"
                className="inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-white"
              >
                <span aria-hidden>‹</span>
                他の事例も見る
              </Link>
              <p className="mt-4 font-serif-en text-sm tracking-widest uppercase text-[var(--primary)]">
              Case Studies
              </p>
              <p className="mt-1 text-sm font-bold text-white/90">
                導入企業の声
              </p>
            </ScrollAnimate>
          </div>
        </section>

        {/* 記事本文 */}
        <article className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
          <ScrollAnimate>
            <h1 className="font-serif-jp text-2xl font-bold leading-tight text-[var(--primary-dark)] md:text-3xl">
              {voice.fullTitle}
            </h1>
            <p className="mt-4 text-sm text-gray-500">{voice.date}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <p className="font-bold text-gray-900">{voice.company}</p>
              <span className="text-gray-400">|</span>
              <p className="text-sm text-gray-600">{voice.industry}</p>
            </div>

            {/* 人事戦略の意識課題 */}
            <div className="mt-10 rounded-2xl border border-[var(--border)] bg-white/80 p-6 md:p-8">
              <h2 className="font-serif-jp text-lg font-bold text-[var(--primary-dark)]">
                人事戦略の意識課題
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {voice.strategyTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[var(--primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--primary-dark)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-5 leading-relaxed text-gray-700">
                {voice.strategySummary}
              </p>
            </div>

            {/* 本文 */}
            <div className="mt-10">
              <div className="prose prose-gray max-w-none">
                <p className="font-serif-jp leading-relaxed text-gray-700 whitespace-pre-line">
                  {voice.body}
                </p>
              </div>
            </div>
          </ScrollAnimate>

          {/* ヒーロー画像（モバイルでは上、デスクトップでは右サイドなどに配置も可） */}
          <ScrollAnimate delay={0.2}>
            <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-2xl bg-gray-100 md:mt-16">
              <Image
                src={voice.image}
                alt={`${voice.company} の事例`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </ScrollAnimate>

          {/* 他の記事も見る */}
          {otherVoices.length > 0 && (
            <div className="mt-16 border-t border-[var(--border)] pt-12">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="font-serif-jp text-xl font-bold text-[var(--primary-dark)]">
                  他の記事も見る
                </h2>
                <Link
                  href="/#voices"
                  className="text-sm font-bold text-[var(--primary-dark)] underline-offset-4 hover:underline"
                >
                  一覧を見る
                </Link>
              </div>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
                {otherVoices.map((v) => (
                  <li key={v.id}>
                    <Link
                      href={`/voices/${v.id}`}
                      className="group flex overflow-hidden rounded-xl border border-[var(--border)] bg-white transition hover:border-[var(--primary)]/30 hover:shadow-lg"
                    >
                      <div className="relative h-28 w-28 shrink-0 overflow-hidden bg-gray-200">
                        <Image
                          src={v.image}
                          alt=""
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="112px"
                        />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col justify-center p-4">
                        <p className="line-clamp-2 text-sm font-bold text-gray-900 group-hover:text-[var(--primary-dark)]">
                          {v.fullTitle}
                        </p>
                        <p className="mt-1 text-xs text-gray-500">{v.company}</p>
                        <p className="mt-1 text-xs text-gray-500">{v.industry}</p>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {v.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs text-[var(--primary-dark)]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 rounded-2xl glass-light border border-white/20 px-6 py-8 md:px-10 md:py-10">
            <p className="font-serif-en text-sm tracking-widest uppercase text-[var(--primary)]">
              Consultation
            </p>
            <h2 className="font-serif-jp mt-3 text-xl font-bold text-[var(--primary-dark)] md:text-2xl">
              福利厚生の導入相談は、いつでもお気軽に
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-gray-700">
              ご検討中の企業様向けに、料金や運用方法などを丁寧にご案内します。
              LINEまたはお電話からお気軽にお問い合わせください。
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={contact.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#06C755] px-8 py-4 text-sm font-bold text-white transition hover:opacity-90"
              >
                LINEで導入相談
                <span aria-hidden>›</span>
              </a>
              <a
                href={`tel:${contact.tel}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary-dark)] px-8 py-4 text-sm font-bold text-white transition hover:opacity-90"
              >
                {contact.telDisplay}
              </a>
            </div>
          </div>
        </article>
      </main>

      <Footer />
      <div aria-hidden className="h-32" />
      <CookieBanner />
      <MobileCtaBar />
    </>
  );
}

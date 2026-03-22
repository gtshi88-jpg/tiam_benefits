import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollAnimate } from "@/components/ScrollAnimate";
import { ParallaxBanner } from "@/components/ParallaxBanner";
import { CookieBanner } from "@/components/CookieBanner";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { contact, site } from "@/lib/constants";

const COMPANY = {
  clinicName: "TIAM CLINIC GINZA",
  pageKicker: "運営クリニック",
  credoHeading: "当院の信条（クレド）",
  credoQuote: "結果と満足の追求",
  credoBody:
    "患者様、スタッフ、企業様、社会に関わっていただいた全ての方にとって、施術の結果だけでなく未来まで考え、満足まで提供できることを心がけています。【銀座満足度1番】友人家族ぐるみで来ていただき全員が来てよかったと言っていただけるような町医者のようなクリニックを目指しています。",
  credoSub:
    "シックで、プライバシーに配慮した個室空間など、落ち着いて過ごせる環境づくりを大切にしています。",
  accessHeading: "施設情報 / アクセス",
  addressLines: [
    "〒104-0061 東京都中央区銀座7-3-7 ブランエスパビル 13階",
  ],
  hours: "10:00〜19:00",
  holiday: "年中無休（年末年始を除く）",
  accessLines: [
    "東京メトロ銀座線・丸の内線・日比谷線「銀座駅」C3出口より徒歩4分",
    "JR新橋駅「銀座口」より徒歩4分",
  ],
  director: {
    name: "谷口 弘樹",
    title: "院長 / 理事長",
    message:
      "最低限の痛みで最大限の結果を追求しています。患者様全員が満足いただけることをモットーに、友人同士やご家族でも気軽に通っていただける、アットホームなクリニックを目指しています。",
  },
  staff: [
    { name: "谷口 弘樹", role: "院長 / 理事長 / 麻酔科医 / 美容外科医" },
    { name: "森 紳之介", role: "副院長/整形外科専門医/美容外科医" },
    { name: "中原 まり", role: "技術指導医/形成外科専門医/美容外科医" },
    { name: "川田 康貴", role: "麻酔科医 / 美容外科医" },
  ],
  officialSite: {
    url: "https://tiamclinic.com/",
    label: "公式サイト",
    description:
      "施術メニュー、料金表、クリニック紹介、ブログ、採用情報など、詳しい情報は公式サイトでご確認いただけます。",
    links: [
      { label: "施術メニュー", path: "/menu" },
      { label: "クリニック紹介", path: "/clinic" },
      { label: "料金表", path: "/price" },
      { label: "ブログ", path: "/blog" },
      { label: "アクセス", path: "/blog/detail" },
    ],
  },
} as const;

export default function CompanyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--section-bg)] pt-20 pb-32">
        {/* ページヘッダー */}
        <section className="bg-[var(--primary-dark)] py-14 text-white md:py-20">
          <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
            <ScrollAnimate>
              <p className="font-serif-en text-sm tracking-widest uppercase text-[var(--primary)]">
                Company
              </p>
              <h1 className="font-serif-jp mt-3 text-3xl font-bold leading-tight md:text-4xl">
                {COMPANY.pageKicker}
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 whitespace-pre-line">
                {COMPANY.clinicName} の理念、アクセス、院長メッセージをご紹介します。
              </p>
            </ScrollAnimate>
          </div>
        </section>

        {/* ヒーロー / ビジュアル */}
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
          <ScrollAnimate>
            <ParallaxBanner src="/images/clinic/reception.png" height="360px" overlayOpacity={0.42}>
              <div className="glass-dark glass-refraction rounded-3xl px-8 py-8 text-center" style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.15)" }}>
                <p className="font-serif-en text-sm font-bold tracking-[0.2em] uppercase text-white/90">
                  {site.nameEn}
                </p>
                <h2 className="font-serif-jp mt-3 text-2xl font-bold text-white md:text-3xl">
                  {COMPANY.clinicName}
                </h2>
                <p className="mt-3 text-sm text-white/80 md:text-base">
                  採用力と社員満足度を最大化するために、運営クリニックとして一つひとつの価値を大切にしています。
                </p>
              </div>
            </ParallaxBanner>
          </ScrollAnimate>
        </div>

        {/* 本文コンテンツ */}
        <div className="mx-auto max-w-7xl px-4 pb-16 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            {/* クレド */}
            <ScrollAnimate direction="left">
              <div className="rounded-3xl overflow-hidden glass-card glass-refraction">
                <div className="relative h-44 md:h-52">
                  <Image
                    src="/images/clinic/corridor.png"
                    alt={`${COMPANY.clinicName} クレド画像`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="font-serif-en text-xs tracking-widest uppercase text-white/85">
                      Credo
                    </p>
                    <h2 className="font-serif-jp mt-2 text-2xl font-bold text-white">
                      {COMPANY.credoHeading}
                    </h2>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <p className="font-serif-jp text-lg font-bold text-[var(--primary-dark)]">
                    「{COMPANY.credoQuote}」
                  </p>
                  <p className="mt-3 leading-relaxed text-gray-700">
                    {COMPANY.credoBody}
                  </p>
                  <p className="mt-4 leading-relaxed text-gray-700">
                    {COMPANY.credoSub}
                  </p>
                </div>
              </div>
            </ScrollAnimate>

            {/* 施設情報 / アクセス */}
            <ScrollAnimate direction="right">
              <div className="rounded-3xl glass-card glass-refraction p-6 md:p-8">
                <div className="flex items-baseline justify-between gap-4 border-b border-[var(--border)] pb-5">
                  <h2 className="font-serif-jp text-2xl font-bold text-[var(--primary-dark)]">
                    {COMPANY.accessHeading}
                  </h2>
                  <div className="text-right">
                    <p className="font-serif-en text-xs tracking-widest uppercase text-[var(--primary)]">
                      Hours
                    </p>
                    <p className="font-bold text-gray-900">{COMPANY.hours}</p>
                  </div>
                </div>

                <div className="mt-6 space-y-6">
                  <div>
                    <p className="text-sm font-bold text-gray-900">所在地</p>
                    {COMPANY.addressLines.map((line) => (
                      <p key={line} className="mt-2 leading-relaxed text-gray-700">
                        {line}
                      </p>
                    ))}
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="text-sm font-bold text-gray-900">営業時間</p>
                      <p className="mt-2 leading-relaxed text-gray-700">
                        {COMPANY.hours}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">定休日</p>
                      <p className="mt-2 leading-relaxed text-gray-700">
                        {COMPANY.holiday}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-gray-900">アクセス</p>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-gray-700">
                      {COMPANY.accessLines.map((line) => (
                        <li key={line}>・{line}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3 rounded-2xl border border-[var(--border)] bg-white/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-bold text-gray-900">お電話</p>
                      <p className="mt-1 text-sm text-gray-700">
                        {contact.telDisplay}
                      </p>
                    </div>
                    <a
                      href={`tel:${contact.tel}`}
                      className="inline-flex items-center justify-center rounded-full bg-[var(--primary-dark)] px-6 py-3 text-sm font-bold text-white transition hover:opacity-90 active:opacity-90"
                    >
                      今すぐ相談
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>

          {/* 公式サイト */}
          <div className="mt-14">
            <ScrollAnimate>
              <div className="rounded-3xl glass-card glass-refraction overflow-hidden border border-[var(--border)]">
                <div className="grid gap-6 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
                  <div>
                    <p className="font-serif-en text-xs tracking-widest uppercase text-[var(--primary)]">
                      Official Site
                    </p>
                    <h2 className="font-serif-jp mt-2 text-2xl font-bold text-[var(--primary-dark)]">
                      {COMPANY.officialSite.label}
                    </h2>
                    <p className="mt-3 leading-relaxed text-gray-700">
                      {COMPANY.officialSite.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {COMPANY.officialSite.links.map((link) => (
                        <a
                          key={link.path}
                          href={`${COMPANY.officialSite.url}${link.path.replace(/^\//, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-[var(--border)] bg-white/70 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-[var(--primary)] hover:text-[var(--primary-dark)]"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                  <a
                    href={COMPANY.officialSite.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[var(--primary-dark)] px-8 py-4 text-sm font-bold text-white transition hover:opacity-90 active:opacity-90 md:self-center"
                  >
                    公式サイトを見る
                    <span aria-hidden>↗</span>
                  </a>
                </div>
              </div>
            </ScrollAnimate>
          </div>

          {/* 院長メッセージ */}
          <div className="mt-14">
            <ScrollAnimate direction="left">
              <h2 className="font-serif-en text-2xl font-bold italic text-[var(--primary-dark)]">
                Director
              </h2>
            </ScrollAnimate>
            <ScrollAnimate direction="right" delay={0.15}>
              <div className="mt-6 rounded-3xl glass-card glass-refraction overflow-hidden">
                <div className="grid gap-0 lg:grid-cols-[1fr_1.1fr]">
                  <div className="relative min-h-[320px] lg:min-h-[420px]">
                    <Image
                      src="/images/dr.taniguchi_LP_P.jpg"
                      alt={`${COMPANY.director.name} 院長`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  </div>
                  <div className="p-6 md:p-10">
                    <p className="font-serif-en text-xs tracking-[0.2em] uppercase text-[var(--primary)]">
                      {COMPANY.director.title}
                    </p>
                    <p className="mt-2 font-serif-jp text-2xl font-bold text-[var(--primary-dark)]">
                      {COMPANY.director.name}
                    </p>
                    <p className="mt-5 leading-relaxed text-gray-700">
                      {COMPANY.director.message}
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                      <a
                        href={contact.lineUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#06C755] px-6 py-3 text-sm font-bold text-white transition hover:opacity-90 active:opacity-90"
                      >
                        LINEで導入相談
                        <span aria-hidden>›</span>
                      </a>
                      <a
                        href={`tel:${contact.tel}`}
                        className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[var(--primary-dark)] px-6 py-3 text-sm font-bold text-[var(--primary-dark)] transition hover:opacity-90 active:opacity-90"
                      >
                        お電話で相談
                        <span aria-hidden>›</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>

          {/* スタッフ */}
          <div className="mt-14">
            <ScrollAnimate>
              <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
                <h2 className="font-serif-jp text-2xl font-bold text-[var(--primary-dark)]">
                  Staff
                </h2>
                <p className="text-sm leading-relaxed text-gray-600">
                  運営クリニックとして、安心してお任せいただける体制を整えています。
                </p>
              </div>
            </ScrollAnimate>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {COMPANY.staff.map((s, i) => (
                <ScrollAnimate key={s.name} direction={i % 2 === 0 ? "left" : "right"} delay={0.08 * i}>
                  <div className="rounded-2xl border border-[var(--border)] bg-white/70 p-5 shadow-sm">
                    <p className="font-serif-jp text-lg font-bold text-gray-900">
                      {s.name}
                    </p>
                    <p className="mt-2 text-sm font-bold text-gray-700">
                      {s.role}
                    </p>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          </div>

          {/* 相談CTA */}
          <div className="mt-14 rounded-3xl glass-light border border-white/20 px-6 py-8 md:px-10 md:py-10">
            <ScrollAnimate>
              <p className="font-serif-en text-sm tracking-widest uppercase text-[var(--primary)]">
                Consultation
              </p>
              <h2 className="font-serif-jp mt-3 text-2xl font-bold text-[var(--primary-dark)]">
                福利厚生の導入相談は、いつでもお気軽に
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-gray-700">
                ご検討中の企業様向けに、料金や運用方法などを丁寧にご案内します。
                LINEまたはお電話からお気軽にお問い合わせください。
              </p>
            </ScrollAnimate>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <a
                  href={contact.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#06C755] px-8 py-4 text-sm font-bold text-white transition hover:opacity-90 active:opacity-90"
                >
                  LINEで導入相談
                  <span aria-hidden>›</span>
                </a>
                <a
                  href={`tel:${contact.tel}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary-dark)] px-8 py-4 text-sm font-bold text-white transition hover:opacity-90 active:opacity-90"
                >
                  {contact.telDisplay}
                </a>
              </div>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white/70 px-6 py-4 text-sm font-bold text-[var(--primary-dark)] transition hover:opacity-90 active:opacity-90"
              >
                トップへ戻る
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <div aria-hidden className="h-32" />
      <CookieBanner />
      <MobileCtaBar />
    </>
  );
}

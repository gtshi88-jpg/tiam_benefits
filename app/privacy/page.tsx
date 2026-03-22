import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollAnimate } from "@/components/ScrollAnimate";
import { CookieBanner } from "@/components/CookieBanner";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { contact } from "@/lib/constants";

const PRIVACY = {
  pageKicker: "プライバシーポリシー",
  heroTitle: "Privacy Policy",
  updatedAt: "最終更新日：2026年3月20日",
  intro:
    "TIAM BENEFITS（以下「本サービス」）の運営において、当院はユーザーの個人情報を適切に取り扱い、その保護に努めます。本ポリシーは、本サービスにおける個人情報の取扱いについて説明するものです。",
  sections: [
    {
      title: "1. 適用範囲",
      body: "本ポリシーは、本サービスにおいて取得される個人情報および関連情報の取扱いに適用されます。",
    },
    {
      title: "2. 個人情報の取得",
      body: "当院は、ユーザーが本サービスの利用にあたって入力・送信した情報（例：会社名、従業員数、担当者名、メールアドレス、電話番号等）およびお問い合わせに関する情報を取得する場合があります。",
    },
    {
      title: "3. 利用目的",
      body: "当院は、取得した個人情報を以下の目的で利用します。\n・導入相談への対応\n・ご連絡および必要な情報の提供\n・利用状況の確認（サービス改善を含む）\n・お問い合わせ対応",
    },
    {
      title: "4. 第三者提供",
      body: "当院は、法令に定める場合を除き、ユーザーの個人情報を第三者に提供しません。ただし、業務の一部を外部に委託する場合は、必要な範囲で適切な委託先管理のもとで提供することがあります。",
    },
    {
      title: "5. 委託",
      body: "当院は、利用目的の達成に必要な範囲で個人情報の取扱いを外部に委託する場合があります。この場合、当院は委託先に対して適切な監督を行います。",
    },
    {
      title: "6. クッキー（Cookie）等について",
      body: "当院は、本サービスの利便性向上や改善のため、クッキー等の技術を使用することがあります。クッキーの利用については、ブラウザの設定により無効化できる場合があります。",
    },
    {
      title: "7. セキュリティ",
      body: "当院は、個人情報の漏えい、紛失または毀損を防止するため、適切な安全管理措置を講じます。",
    },
    {
      title: "8. お問い合わせ",
      body: "本ポリシーに関するお問い合わせは、LINEまたはお電話にて受け付けます。\n電話：{tel}",
      interpolate: { tel: contact.telDisplay },
    },
    {
      title: "9. 改定",
      body: "当院は、本ポリシーを必要に応じて改定できるものとします。改定後の本ポリシーは、本サイト上で掲載された時点で効力を生じるものとします。",
    },
  ] as const,
} as const;

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--section-bg)] pt-20 pb-32">
        <section className="bg-[var(--primary-dark)] py-14 text-white md:py-20">
          <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
            <ScrollAnimate>
              <p className="font-serif-en text-sm tracking-widest uppercase text-[var(--primary)]">
                {PRIVACY.pageKicker}
              </p>
              <h1 className="font-serif-jp mt-3 text-3xl font-bold leading-tight md:text-4xl">
                {PRIVACY.pageKicker}
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 whitespace-pre-line">
                {PRIVACY.heroTitle}
              </p>
            </ScrollAnimate>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 pb-16 md:px-6 pt-6">
          <div className="mx-auto max-w-3xl">
            <ScrollAnimate direction="left">
              <div className="rounded-3xl glass-card glass-refraction p-6 md:p-8">
                <p className="font-serif-en text-xs tracking-[0.22em] uppercase text-[var(--primary)]">
                  {PRIVACY.updatedAt}
                </p>
                <p className="mt-4 leading-relaxed text-gray-700 whitespace-pre-line">
                  {PRIVACY.intro}
                </p>
                
              </div>
            </ScrollAnimate>
          </div>

          <div className="mt-8 space-y-6">
            {PRIVACY.sections.map((sec, i) => {
              const body =
                "interpolate" in sec
                  ? (sec.body as string).replace(
                      "{tel}",
                      sec.interpolate.tel
                    )
                  : sec.body;

              return (
                <ScrollAnimate
                  key={sec.title}
                  direction={i % 2 === 0 ? "left" : "right"}
                  delay={0.05 * i}
                >
                  <article className="mx-auto max-w-3xl rounded-3xl glass-card glass-refraction p-6 md:p-8">
                    <h2 className="font-serif-jp text-xl font-bold text-[var(--primary-dark)]">
                      {sec.title}
                    </h2>
                    <div className="mt-4 whitespace-pre-line text-gray-700 leading-relaxed">
                      {body}
                    </div>
                  </article>
                </ScrollAnimate>
              );
            })}
          </div>

          <div className="mt-14 flex flex-col items-center justify-center gap-3 text-center md:flex-row md:gap-6">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-[var(--primary-dark)] px-8 py-4 text-sm font-bold text-white transition hover:opacity-90 active:opacity-90"
            >
              トップへ戻る
            </Link>
            <div className="text-sm leading-relaxed text-gray-500">
              LINE：
              <a href={contact.lineUrl} className="underline">
                {contact.lineUrl.replace("https://", "")}
              </a>
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

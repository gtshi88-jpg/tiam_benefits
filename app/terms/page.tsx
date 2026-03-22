import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollAnimate } from "@/components/ScrollAnimate";
import { CookieBanner } from "@/components/CookieBanner";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { contact } from "@/lib/constants";

const TERMS = {
  pageKicker: "利用規約",
  heroTitle: "Terms of Service",
  updatedAt: "最終更新日：2026年3月20日",
  intro:
    "本規約は、TIAM BENEFITS（以下「本サービス」）の利用に関する条件を定めるものです。ユーザーは、本サービスの利用にあたり本規約に同意するものとします。",
  sections: [
    {
      title: "1. 適用",
      body: "本規約は、本サービスの利用に関する一切の関係に適用されます。ユーザーが本サービスの利用を開始した時点で、本規約の内容に同意したものとみなします。",
    },
    {
      title: "2. 定義",
      body: "本規約において「ユーザー」とは、ユーザー情報を入力のうえ、本サービスの利用を希望する法人・団体、またはそれらに代わって本サービスを利用する担当者をいいます。",
    },
    {
      title: "3. 本サービスの内容",
      body: "本サービスは、TIAM BENEFITSを通じた美容医療の福利厚生に関する情報提供および導入相談の受付等を行うものです。本サービスに関連して実施される医療行為の内容・可否については、当院が別途定める基準および診察結果に従います。",
    },
    {
      title: "4. ユーザー情報の取扱い",
      body: "ユーザーが本サービスの利用にあたって提供する情報は、プライバシーポリシーに従って取り扱われます。ユーザーは、提供する情報が正確かつ最新であることを保証します。",
    },
    {
      title: "5. 禁止事項",
      body: "ユーザーは、本サービスの利用にあたり、以下の行為を行わないものとします。\n・法令または公序良俗に違反する行為\n・第三者の権利を侵害する行為\n・虚偽または不正確な情報を提供する行為\n・本サービスの運営を妨害する行為\n・その他、当院が不適切と判断する行為",
    },
    {
      title: "6. 免責",
      body: "当院は、本サービスに関してユーザーに生じた損害について、当院の故意または重過失によらない限り責任を負いません。また、本サービスの内容は予告なく変更または中止される場合があります。",
    },
    {
      title: "7. 規約の変更",
      body: "当院は、本規約を必要に応じて改定できるものとします。改定後の本規約は、本サイト上に掲載された時点で効力を生じるものとします。",
    },
    {
      title: "8. 準拠法・管轄",
      body: "本規約の準拠法は日本法とします。本規約に関して紛争が生じた場合、当院の所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。",
    },
    {
      title: "9. お問い合わせ",
      body: "本規約に関するお問い合わせは、LINEまたはお電話にて受け付けます。\n電話：{tel}\n（お問い合わせ窓口は運用により変更される場合があります）",
      interpolate: { tel: contact.telDisplay },
    },
  ] as const,
} as const;

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--section-bg)] pt-20 pb-32">
        <section className="bg-[var(--primary-dark)] py-14 text-white md:py-20">
          <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
            <ScrollAnimate>
              <p className="font-serif-en text-sm tracking-widest uppercase text-[var(--primary)]">
                {TERMS.pageKicker}
              </p>
              <h1 className="font-serif-jp mt-3 text-3xl font-bold leading-tight md:text-4xl">
                {TERMS.pageKicker}
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 whitespace-pre-line">
                {TERMS.heroTitle}
              </p>
            </ScrollAnimate>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 pb-16 md:px-6 pt-6">
          <div className="mx-auto max-w-3xl">
            <ScrollAnimate direction="left">
              <div className="rounded-3xl glass-card glass-refraction p-6 md:p-8">
                <p className="font-serif-en text-xs tracking-[0.22em] uppercase text-[var(--primary)]">
                  {TERMS.updatedAt}
                </p>
                <p className="mt-4 leading-relaxed text-gray-700 whitespace-pre-line">
                  {TERMS.intro}
                </p>
                
              </div>
            </ScrollAnimate>
          </div>

          <div className="mt-8 space-y-6">
            {TERMS.sections.map((sec, i) => {
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
              LINE：<a href={contact.lineUrl} className="underline">{contact.lineUrl.replace("https://", "")}</a>
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

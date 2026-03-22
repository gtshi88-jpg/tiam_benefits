"use client";

import Image from "next/image";
import { ScrollAnimate } from "./ScrollAnimate";

const DIRECTOR = {
  title: "10年後も通ってよかったと言っていただける「美容の町医者」を目指して",
  name: "谷口 弘樹",
  role: "TIAM CLINIC GINZA 理事長",
  credentials: ["福井大学医学部 卒業", "麻酔科標榜医 取得", "大手美容外科、大学病院整形外科を経て現職"],
  message1:
    "クリニック名のTIAM（ティアム）はペルシア語で「初めて出会った時の、目の輝き」という意味を持ちます。新たな自分に出会い目を輝かせる一瞬、そしてその輝きが自信となり、人生をより豊かにしていく。そんなお手伝いがしたいという想いで、このクリニックを開院しました。",
  message2:
    "私は元々麻酔科医としてキャリアをスタートさせました。「痛みが怖い」という患者様の不安を誰よりも理解しています。だからこそ、脂肪吸引や糸リフトといった施術においても、麻酔科医としての知識を活かし、痛みに最大限配慮した安全な医療を提供することをお約束します。福利厚生を通じて、働く皆様の「自信」と「笑顔」を引き出すことができれば幸いです。",
} as const;

export function DirectorSection() {
  return (
    <section
      id="director"
      className="scroll-mt-20 section-mesh-cool py-16 md:py-24"
      aria-labelledby="director-heading"
    >
      <div className="relative mx-auto max-w-4xl px-4 md:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-10">
          <div className="flex-1 min-w-0">
            <ScrollAnimate direction="left">
              <h2
                id="director-heading"
                className="font-serif-en text-2xl font-bold italic text-gray-900 md:text-3xl"
              >
                Director Message
              </h2>
            </ScrollAnimate>
            <ScrollAnimate delay={0.15}>
              <p className="font-serif-jp mt-6 text-lg font-bold text-gray-800 md:text-xl">
                {DIRECTOR.title}
              </p>
            </ScrollAnimate>
            <ScrollAnimate delay={0.25}>
              <p className="font-serif-jp mt-6 leading-relaxed text-gray-700">{DIRECTOR.message1}</p>
            </ScrollAnimate>
            <ScrollAnimate delay={0.35}>
              <p className="font-serif-jp mt-6 leading-relaxed text-gray-700">{DIRECTOR.message2}</p>
            </ScrollAnimate>
            <ScrollAnimate delay={0.45}>
              <div className="mt-10 flex flex-col items-start gap-2 border-t border-gray-200 pt-10">
                <p className="font-bold text-gray-900">{DIRECTOR.name}</p>
                <p className="text-sm text-gray-600">{DIRECTOR.role}</p>
                <ul className="mt-2 space-y-1 text-sm text-gray-600" role="list">
                  {DIRECTOR.credentials.map((c) => (
                    <li key={c}>・{c}</li>
                  ))}
                </ul>
              </div>
            </ScrollAnimate>
          </div>

          <ScrollAnimate direction="right" delay={0.3}>
            <div className="flex shrink-0 justify-center md:justify-end">
              <div className="relative h-56 w-44 overflow-hidden rounded-lg shadow-xl md:h-64 md:w-48" style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.1), inset 0 0 0 4px rgba(255,255,255,0.6)" }}>
                <Image
                  src="/images/dr.taniguchi_LP_P.jpg"
                  alt={`${DIRECTOR.name} 院長`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 176px, 192px"
                />
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import Image from "next/image";
import { voices } from "@/lib/copy";

const VOICE_IMAGES = [
  "/images/voice_image1.jpg",
  "/images/voice_image2.jpg",
  "/images/voice_image3.jpg",
  "/images/voice_image4.jpg",
] as const;

export function VoicesSection() {
  return (
    <section
      id="voices"
      className="scroll-mt-20 bg-white py-16 md:py-24"
      aria-labelledby="voices-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* 見出し（中央揃え） */}
        <h2
          id="voices-heading"
          className="text-center text-3xl font-bold text-[var(--primary-dark)] md:text-4xl lg:text-5xl"
        >
          {voices.heading}
        </h2>
        <p className="mt-2 text-center text-sm font-bold text-gray-600">
          {voices.title}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-center leading-relaxed text-gray-700">
          {voices.description}
        </p>

        {/* 4カード横並び */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {voices.items.map((item, i) => (
            <Link
              key={i}
              href="#voices"
              className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md"
            >
              {/* 声の画像 */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
                <Image
                  src={VOICE_IMAGES[i] ?? VOICE_IMAGES[0]}
                  alt=""
                  fill
                  className="object-cover transition group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              {/* テキスト */}
              <div className="flex flex-1 flex-col p-4">
                <p className="line-clamp-3 text-sm leading-relaxed text-gray-800">
                  {item.quote}
                </p>
                <div className="mt-auto pt-4">
                  <p className="text-sm font-bold text-gray-900">{item.company}</p>
                  <p className="text-xs text-gray-500">{item.industry}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-[var(--primary-dark)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* もっと見るボタン */}
        <p className="mt-10 text-center">
          <Link
            href="#voices"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--primary-dark)] px-6 py-3 font-bold text-white transition hover:opacity-90"
          >
            {voices.more}
            <span aria-hidden>›</span>
          </Link>
        </p>
      </div>
    </section>
  );
}

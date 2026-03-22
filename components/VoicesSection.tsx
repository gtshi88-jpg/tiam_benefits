"use client";

import Link from "next/link";
import Image from "next/image";
import { ScrollAnimate, StaggerContainer, StaggerItem } from "./ScrollAnimate";
import { VOICES_LIST } from "@/lib/voices";

const VOICES = {
  heading: "Case Studies",
  title: "導入企業の声",
  description:
    "当サービスを導入いただいた企業様が、どのような課題意識を持っていたか、また導入にあたっての期待を伺いました。",
  more: "導入企業の声をもっと見る",
} as const;

export function VoicesSection() {
  return (
    <section
      id="voices"
      className="scroll-mt-20 section-mesh-cool py-16 md:py-24"
      aria-labelledby="voices-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <ScrollAnimate direction="up" blur>
          <h2
            id="voices-heading"
            className="font-serif-en text-center text-3xl font-bold italic text-[var(--primary-dark)] md:text-4xl lg:text-5xl"
          >
            {VOICES.heading}
          </h2>
          <p className="mt-2 text-center text-sm font-bold text-gray-600">
            {VOICES.title}
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-center leading-relaxed text-gray-700">
            {VOICES.description}
          </p>
        </ScrollAnimate>

        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
          {VOICES_LIST.map((item) => (
            <StaggerItem key={item.id}>
              <Link
                href={`/voices/${item.id}`}
                className="card-shine glass-card glass-refraction group flex flex-col overflow-hidden rounded-xl transition hover:-translate-y-2"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
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
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollAnimate delay={0.3}>
          <p className="mt-10 text-center">
            <Link
              href="/voices"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--primary-dark)] px-6 py-3 font-bold text-white transition hover:opacity-90 hover:shadow-lg"
            >
              {VOICES.more}
              <span aria-hidden>›</span>
            </Link>
          </p>
        </ScrollAnimate>
      </div>
    </section>
  );
}

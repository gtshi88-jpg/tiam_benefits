"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ScrollAnimate, StaggerContainer, StaggerItem } from "@/components/ScrollAnimate";
import {
  VOICES_LIST,
  getIndustryCategories,
  getStrategyTagOptions,
} from "@/lib/voices";

export function VoicesListContent() {
  const [industryFilter, setIndustryFilter] = useState<string>("all");
  const [strategyFilter, setStrategyFilter] = useState<string | null>(null);

  const industries = useMemo(() => getIndustryCategories(), []);
  const strategyTags = useMemo(() => getStrategyTagOptions(), []);

  const filteredVoices = useMemo(() => {
    return VOICES_LIST.filter((v) => {
      const industryMatch =
        industryFilter === "all" ||
        v.industry.includes(industryFilter);
      const strategyMatch =
        !strategyFilter || v.strategyTags.includes(strategyFilter);
      return industryMatch && strategyMatch;
    });
  }, [industryFilter, strategyFilter]);

  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6">
      {/* ページヘッダー */}
      <section className="py-12 md:py-16">
        <ScrollAnimate direction="up" blur>
          <p className="font-serif-en text-center text-3xl font-bold italic text-[var(--primary-dark)] md:text-4xl lg:text-5xl">
          Case Studies
          </p>
          <p className="mt-2 text-center text-sm font-bold text-gray-600">
            導入企業の声
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-center leading-relaxed text-gray-700">
            TIAM BENEFITSを導入いただいた企業様が、どのような課題意識を持っていたか、またTIAM
            BENEFITS導入にあたっての想いを伺いました。
          </p>
        </ScrollAnimate>
      </section>

      {/* フィルター */}
      <div className="space-y-8">
        {/* 業界・業種で探す */}
        <ScrollAnimate>
          <div>
            <h3 className="font-serif-jp text-sm font-bold text-gray-900 md:text-base">
              業界・業種で探す
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setIndustryFilter("all")}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  industryFilter === "all"
                    ? "bg-[var(--primary-dark)] text-white"
                    : "bg-white/80 text-gray-700 ring-1 ring-[var(--border)] hover:ring-[var(--primary)]/50"
                }`}
              >
                すべて表示
              </button>
              {industries.map((ind) => (
                <button
                  key={ind}
                  type="button"
                  onClick={() => setIndustryFilter(ind)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    industryFilter === ind
                      ? "bg-[var(--primary-dark)] text-white"
                      : "bg-white/80 text-gray-700 ring-1 ring-[var(--border)] hover:ring-[var(--primary)]/50"
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>
        </ScrollAnimate>

        {/* 人事戦略の課題意識で探す */}
        <ScrollAnimate delay={0.05}>
          <div>
            <h3 className="font-serif-jp text-sm font-bold text-gray-900 md:text-base">
              人事戦略の課題意識で探す
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {strategyTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() =>
                    setStrategyFilter(strategyFilter === tag ? null : tag)
                  }
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    strategyFilter === tag
                      ? "bg-[var(--primary)] text-white"
                      : "bg-white/80 text-gray-700 ring-1 ring-[var(--border)] hover:ring-[var(--primary)]/50"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </ScrollAnimate>
      </div>

      {/* カード一覧 */}
      <div className="mt-12">
        <StaggerContainer
          key={`${industryFilter}-${strategyFilter ?? "none"}`}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {filteredVoices.map((item) => (
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
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="line-clamp-3 text-sm font-bold leading-relaxed text-gray-900">
                    {item.fullTitle}
                  </p>
                  <div className="mt-auto pt-4">
                    <p className="text-sm font-bold text-gray-900">
                      {item.company}
                    </p>
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

        {filteredVoices.length === 0 && (
          <p className="py-16 text-center text-gray-500">
            該当する事例がありません。フィルターを変更してお試しください。
          </p>
        )}
      </div>

      {/* トップへ戻る */}
      <div className="mt-14 text-center">
        <Link
          href="/#voices"
          className="inline-flex items-center gap-2 text-sm font-bold text-[var(--primary-dark)] transition hover:opacity-80"
        >
          <span aria-hidden>‹</span>
          トップページに戻る
        </Link>
      </div>
    </div>
  );
}

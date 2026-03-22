"use client";

import Link from "next/link";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollAnimate } from "@/components/ScrollAnimate";
import { contact } from "@/lib/constants";

const SIGNUP = {
  pageDescription:
    "必要な情報をご入力のうえ、送信してください。\n1営業日以内に担当者よりご返信いたします。",
  heroHeading: "TIAM BENEFITSで\n美容福利厚生を\n始めましょう！",
  heroSub: "導入のお申込みは最短 5 分で完了",
  benefitsHeading: "TIAM BENEFITSだけの特典",
  benefitItems: [
    {
      title: "全施術 40% OFF",
      description:
        "通常価格の40%オフで施術が受けられます。対象施術は当院までお問い合わせください。",
    },
    {
      title: "美容相談 365日対応",
      description:
        "LINE・電話・診察にて365日いつでも相談可能。専任スタッフがサポートします。",
    },
    {
      title: "紹介で16,500円分チケット",
      description:
        "ご友人紹介で16,500円分のチケットをお互いにプレゼント。",
    },
  ],
  contactNote: "ご利用に関するご相談は",
  contactNoteLink: "こちら",
  form: {
    companyName: "会社名",
    companyPlaceholder: "例：株式会社〇〇",
    groupToggle: "グループ会社/子会社も同時に加入する",
    employeeCount: "従業員数",
    employeeOptions: [
      "1〜10名",
      "11〜50名",
      "51〜100名",
      "101〜300名",
      "301〜500名",
      "501〜1000名",
      "1001名以上",
    ],
    contactName: "担当者様のお名前",
    contactNamePlaceholder: "例：山田 花子",
    department: "部署",
    departmentPlaceholder: "例：人事部",
    position: "役職",
    positionOptions: [
      "経営者・役員",
      "部長",
      "課長",
      "係長・主任",
      "一般社員",
      "その他",
    ],
    email: "メールアドレス",
    emailPlaceholder: "例：yamada@example.co.jp",
    phone: "電話番号",
    phonePlaceholder: "例：03-1234-5678",
    logoConsent:
      "サービスサイトや資料等、販促目的でのロゴ等の掲載を承諾します",
    pressConsent: "プレスリリースへの掲載を承諾します",
    termsAgree: "上記の",
    termsLink: "利用規約",
    privacyLink: "プライバシーポリシー",
    termsAgreeEnd: "に同意します",
    submit: "同意して次に進む",
  },
  afterNote:
    "※お申込みいただいたあと、担当者よりご連絡をいたします。",
} as const;

type FormData = {
  companyName: string;
  groupJoin: boolean;
  employeeCount: string;
  contactName: string;
  department: string;
  position: string;
  email: string;
  phone: string;
  logoConsent: boolean;
  pressConsent: boolean;
  termsAgree: boolean;
};

const initialForm: FormData = {
  companyName: "",
  groupJoin: false,
  employeeCount: "",
  contactName: "",
  department: "",
  position: "",
  email: "",
  phone: "",
  logoConsent: false,
  pressConsent: false,
  termsAgree: false,
};

const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/mkoqakvp";

export default function SignupPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const set = <K extends keyof FormData>(key: K, value: FormData[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const isValid =
    form.companyName.trim() !== "" &&
    form.employeeCount !== "" &&
    form.contactName.trim() !== "" &&
    form.email.trim() !== "" &&
    form.phone.trim() !== "" &&
    form.termsAgree;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid || submitting) return;

    setSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          companyName: form.companyName,
          groupJoin: form.groupJoin ? "はい" : "いいえ",
          employeeCount: form.employeeCount,
          contactName: form.contactName,
          department: form.department,
          position: form.position,
          email: form.email,
          phone: form.phone,
          logoConsent: form.logoConsent ? "承諾" : "非承諾",
          pressConsent: form.pressConsent ? "承諾" : "非承諾",
          termsAgree: form.termsAgree ? "同意" : "",
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        const message =
          data.errors?.map((e: { message?: string }) => e.message).join(", ") ||
          "送信に失敗しました。しばらく経ってから再度お試しください。";
        setSubmitError(message);
      }
    } catch {
      setSubmitError("送信に失敗しました。ネットワーク接続をご確認のうえ、再度お試しください。");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-[var(--section-bg)] pt-20">
          <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
            <div className="rounded-2xl bg-white px-8 py-16 shadow-sm">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary)]/10">
                <svg
                  className="h-8 w-8 text-[var(--primary)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="font-serif-jp text-2xl font-bold text-[var(--primary-dark)]">
                お申し込みありがとうございます
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                1営業日以内に担当者よりご連絡いたします。
                <br />
                しばらくお待ちください。
              </p>
              <Link
                href="/"
                className="mt-8 inline-block rounded-full bg-[var(--primary-dark)] px-8 py-3 text-sm font-bold text-white transition hover:opacity-80"
              >
                トップへ戻る
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--section-bg)] pt-20">
        {/* ページヘッダー */}
        <section className="bg-[var(--primary-dark)] py-14 text-white md:py-20">
          <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
            <ScrollAnimate>
              <p className="font-serif-en text-sm tracking-widest uppercase text-[var(--primary)]">
                Application
              </p>
              <h1 className="font-serif-jp mt-3 text-3xl font-bold leading-tight md:text-4xl">
                導入のお申し込み
              </h1>
              <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/70 whitespace-pre-line">
                {SIGNUP.pageDescription}
              </p>
            </ScrollAnimate>
          </div>
        </section>

        {/* メインコンテンツ: 2カラム */}
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-20">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-14">
            {/* 左カラム: 特典紹介 */}
            <div className="lg:w-[400px] lg:shrink-0">
              <ScrollAnimate direction="left">
                <div className="sticky top-28">
                  {/* ヒーロー文言 */}
                  <h2 className="font-serif-jp text-2xl font-bold leading-snug text-[var(--primary-dark)] md:text-3xl whitespace-pre-line">
                    {SIGNUP.heroHeading}
                  </h2>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--primary)] text-xs font-bold text-white">
                      ✓
                    </span>
                    <span className="text-sm font-medium text-[var(--primary-dark)]">
                      {SIGNUP.heroSub}
                    </span>
                  </div>

                  {/* 特典カード */}
                  <div className="mt-8">
                    <h3 className="font-serif-en text-lg font-bold tracking-wide text-[var(--primary)]">
                      {SIGNUP.benefitsHeading}
                    </h3>
                    <div className="mt-4 flex flex-col gap-4">
                      {SIGNUP.benefitItems.map((item, i) => (
                        <div
                          key={i}
                          className="rounded-xl border border-[var(--border)] bg-white p-5 shadow-sm"
                        >
                          <div className="flex items-start gap-3">
                            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10 text-sm font-bold text-[var(--primary)]">
                              {i + 1}
                            </span>
                            <div>
                              <p className="font-bold text-[var(--primary-dark)]">
                                {item.title}
                              </p>
                              <p className="mt-1 text-sm leading-relaxed text-gray-500">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* お問い合わせリンク */}
                  <div className="mt-8 rounded-xl border border-[var(--border)] bg-white p-5 text-center">
                    <p className="text-sm text-gray-500">
                      お問い合わせ
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      {SIGNUP.contactNote}
                      <a
                        href={contact.lineUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-1 font-bold text-[var(--primary)] underline transition hover:opacity-70"
                      >
                        {SIGNUP.contactNoteLink}
                      </a>
                    </p>
                  </div>

                  <p className="mt-4 text-xs text-gray-400">
                    {SIGNUP.afterNote}
                  </p>
                </div>
              </ScrollAnimate>
            </div>

            {/* 右カラム: フォーム */}
            <div className="flex-1">
              <ScrollAnimate direction="right">
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm md:p-10"
                >
                  {/* 会社名 */}
                  <FormField label={SIGNUP.form.companyName} required>
                    <input
                      type="text"
                      value={form.companyName}
                      onChange={(e) => set("companyName", e.target.value)}
                      placeholder={SIGNUP.form.companyPlaceholder}
                      className="form-input"
                    />
                  </FormField>

                  {/* グループ会社トグル */}
                  <div className="mt-4 flex items-center gap-3">
                    <button
                      type="button"
                      role="switch"
                      aria-checked={form.groupJoin}
                      onClick={() => set("groupJoin", !form.groupJoin)}
                      className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                        form.groupJoin
                          ? "bg-[var(--primary)]"
                          : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition ${
                          form.groupJoin ? "translate-x-5" : ""
                        }`}
                      />
                    </button>
                    <span className="text-sm text-gray-700">
                      {SIGNUP.form.groupToggle}
                    </span>
                  </div>

                  {/* 従業員数 */}
                  <FormField label={SIGNUP.form.employeeCount} required className="mt-6">
                    <select
                      value={form.employeeCount}
                      onChange={(e) => set("employeeCount", e.target.value)}
                      className={`form-input ${
                        form.employeeCount === "" ? "text-gray-400" : ""
                      }`}
                    >
                      <option value="">選択してください</option>
                      {SIGNUP.form.employeeOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  <hr className="my-8 border-[var(--border)]" />

                  {/* 担当者名 */}
                  <FormField label={SIGNUP.form.contactName} required>
                    <input
                      type="text"
                      value={form.contactName}
                      onChange={(e) => set("contactName", e.target.value)}
                      placeholder={SIGNUP.form.contactNamePlaceholder}
                      className="form-input"
                    />
                  </FormField>

                  {/* 部署 */}
                  <FormField label={SIGNUP.form.department} className="mt-6">
                    <input
                      type="text"
                      value={form.department}
                      onChange={(e) => set("department", e.target.value)}
                      placeholder={SIGNUP.form.departmentPlaceholder}
                      className="form-input"
                    />
                  </FormField>

                  {/* 役職 */}
                  <FormField label={SIGNUP.form.position} className="mt-6">
                    <select
                      value={form.position}
                      onChange={(e) => set("position", e.target.value)}
                      className={`form-input ${
                        form.position === "" ? "text-gray-400" : ""
                      }`}
                    >
                      <option value="">選択してください</option>
                      {SIGNUP.form.positionOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  <hr className="my-8 border-[var(--border)]" />

                  {/* メールアドレス */}
                  <FormField label={SIGNUP.form.email} required>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      placeholder={SIGNUP.form.emailPlaceholder}
                      className="form-input"
                    />
                  </FormField>

                  {/* 電話番号 */}
                  <FormField label={SIGNUP.form.phone} required className="mt-6">
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      placeholder={SIGNUP.form.phonePlaceholder}
                      className="form-input"
                    />
                  </FormField>

                  <hr className="my-8 border-[var(--border)]" />

                  {/* チェックボックス群 */}
                  <div className="flex flex-col gap-4">
                    <CheckboxField
                      checked={form.logoConsent}
                      onChange={(v) => set("logoConsent", v)}
                      label={SIGNUP.form.logoConsent}
                    />
                    <CheckboxField
                      checked={form.pressConsent}
                      onChange={(v) => set("pressConsent", v)}
                      label={SIGNUP.form.pressConsent}
                    />
                    <CheckboxField
                      checked={form.termsAgree}
                      onChange={(v) => set("termsAgree", v)}
                    >
                      <span className="text-sm text-gray-700">
                        {SIGNUP.form.termsAgree}
                        <Link
                          href="/terms"
                          className="mx-1 font-bold text-[var(--primary)] underline"
                          target="_blank"
                        >
                          {SIGNUP.form.termsLink}
                        </Link>
                        及び
                        <Link
                          href="/privacy"
                          className="mx-1 font-bold text-[var(--primary)] underline"
                          target="_blank"
                        >
                          {SIGNUP.form.privacyLink}
                        </Link>
                        {SIGNUP.form.termsAgreeEnd}
                      </span>
                    </CheckboxField>
                  </div>

                  {/* エラーメッセージ */}
                  {submitError && (
                    <div className="mt-6 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                      {submitError}
                    </div>
                  )}

                  {/* 送信ボタン */}
                  <button
                    type="submit"
                    disabled={!isValid || submitting}
                    className={`mt-10 w-full rounded-full py-4 text-center text-base font-bold transition ${
                      isValid && !submitting
                        ? "bg-[var(--primary-dark)] text-white shadow-lg hover:opacity-90 active:scale-[0.98]"
                        : "cursor-not-allowed bg-gray-300 text-gray-500"
                    }`}
                  >
                    {submitting ? "送信中..." : SIGNUP.form.submit}
                  </button>
                </form>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

/* ---------- Sub-components ---------- */

function FormField({
  label,
  required,
  className,
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label className="mb-2 flex items-center gap-2 text-sm font-bold text-[var(--primary-dark)]">
        {label}
        {required && (
          <span className="rounded bg-red-500 px-1.5 py-0.5 text-[10px] font-bold leading-none text-white">
            必須
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

function CheckboxField({
  checked,
  onChange,
  label,
  children,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label?: string;
  children?: React.ReactNode;
}) {
  return (
    <label className="flex cursor-pointer items-start gap-3">
      <span className="relative mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        />
        <span
          className={`pointer-events-none flex h-5 w-5 items-center justify-center rounded border-2 transition ${
            checked
              ? "border-[var(--primary)] bg-[var(--primary)]"
              : "border-gray-300 bg-white"
          }`}
        >
          {checked && (
            <svg
              className="h-3 w-3 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </span>
      </span>
      {children ?? <span className="text-sm text-gray-700">{label}</span>}
    </label>
  );
}

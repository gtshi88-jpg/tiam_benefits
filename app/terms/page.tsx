import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-2xl font-bold text-gray-900">利用規約</h1>
        <p className="mt-6 text-gray-600">
          ここに利用規約の内容を記載してください。（プレースホルダー）
        </p>
        <Link href="/" className="mt-8 inline-block text-[var(--primary-dark)] underline">
          トップへ戻る
        </Link>
      </div>
    </div>
  );
}

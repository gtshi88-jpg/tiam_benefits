import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TIAM CLINIC 福利厚生｜採用力と社員満足度を最大化",
  description:
    "美容医療の福利厚生サービス。導入費用0円で社員全員が優待価格（10〜45%OFF）で利用可能。人数無制限・代表者様のみのご契約で、従業員満足度と定着率の向上を支援します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${cormorantGaramond.variable} ${notoSerifJP.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

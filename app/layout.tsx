import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TIAM CLINIC 福利厚生｜採用力と社員満足度を最大化",
  description:
    "美容医療サブスク型福利厚生。月額16,500円の定額で社員全員が40%OFF。人数無制限・代表者様のみのご契約で、従業員満足度と定着率を高めます。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Proza+Libre:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

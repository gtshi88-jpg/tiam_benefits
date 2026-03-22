import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { VoicesListContent } from "@/app/voices/VoicesListContent";

export const metadata: Metadata = {
  title: "導入企業の声 | TIAM BENEFITS",
  description:
    "TIAM BENEFITSを導入いただいた企業様が、どのような課題意識を持っていたか、また導入にあたっての想いを伺いました。",
};

export default function VoicesListPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--section-bg)] pt-20 pb-32">
        <VoicesListContent />
      </main>
      <Footer />
      <div aria-hidden className="h-32" />
      <CookieBanner />
      <MobileCtaBar />
    </>
  );
}

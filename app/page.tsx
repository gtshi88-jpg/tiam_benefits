import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { WhySection } from "@/components/WhySection";
import { DirectorSection } from "@/components/DirectorSection";
import { AboutIntroSection } from "@/components/AboutIntroSection";
import { VoicesSection } from "@/components/VoicesSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { ParallaxBanner } from "@/components/ParallaxBanner";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-32">
        <Hero />
        {/* <NewsSection /> */}
        <AboutIntroSection />

        <ParallaxBanner
          src="/images/ns-hero.jpg"
          height="300px"
          overlayOpacity={0.4}
        >
          <div className="glass-dark glass-refraction rounded-3xl px-10 py-8 text-center" style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.15)" }}>
            <p className="font-serif-en text-3xl font-bold italic text-white md:text-4xl lg:text-5xl tracking-wide">
              Beauty × Welfare
            </p>
            <p className="font-serif-jp mt-3 text-base text-white/90 md:text-lg">
              美容医療で、働く人の自信と笑顔を引き出す
            </p>
          </div>
        </ParallaxBanner>

        <MenuSection />

        <WhySection />

        <ParallaxBanner
          src="/images/clinic/corridor.png"
          height="260px"
          overlayOpacity={0.45}
        >
          <div className="glass-dark glass-refraction rounded-2xl px-8 py-6 text-center" style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.15)" }}>
            <p className="font-serif-jp text-2xl font-bold text-white md:text-3xl">
              銀座のクリニックを、福利厚生価格で。
            </p>
          </div>
        </ParallaxBanner>

        <DirectorSection />
        <VoicesSection />

        <ParallaxBanner
          src="/images/clinic/reception.png"
          height="240px"
          overlayOpacity={0.4}
        >
          <div className="glass-dark glass-refraction rounded-2xl px-8 py-6 text-center" style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.15)" }}>
            <p className="font-serif-jp text-2xl font-bold text-white md:text-3xl">
              契約時、社員全員に16,500円分の
              <br />施術チケットをプレゼント
            </p>
          </div>
        </ParallaxBanner>

        <FAQSection />
      </main>
      <Footer />
      <div aria-hidden className="h-32" />
      <CookieBanner />
      <MobileCtaBar />
    </>
  );
}

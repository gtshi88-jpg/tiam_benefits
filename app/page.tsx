import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IntroSection } from "@/components/IntroSection";
import { ReasonsSection } from "@/components/ReasonsSection";
import { AboutSection } from "@/components/AboutSection";
import { WhySection } from "@/components/WhySection";
import { DirectorSection } from "@/components/DirectorSection";
import { QualitySection } from "@/components/QualitySection";
import { MenuSection } from "@/components/MenuSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { PriceSection } from "@/components/PriceSection";
import { FlowSection } from "@/components/FlowSection";
import { NewsSection } from "@/components/NewsSection";
import { AboutIntroSection } from "@/components/AboutIntroSection";
import { VoicesSection } from "@/components/VoicesSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <NewsSection />
        <AboutIntroSection />
        <WhySection />
        {/* <IntroSection /> */}
        {/* <ReasonsSection /> */}
        {/* <AboutSection /> */}
        <DirectorSection />
        {/* <QualitySection /> */}
        {/* <MenuSection /> */}
        {/* <BenefitsSection /> */}
        {/* <PriceSection /> */}
        {/* <FlowSection /> */}
        <VoicesSection />
        <FAQSection />
        {/* <ContactSection /> */}
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}

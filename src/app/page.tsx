import { AboutPreview } from "@/components/about-preview";
import { AboutSection } from "@/components/about-section";
import { BackgroundImage } from "@/components/background-image";
import { ContactInfo } from "@/components/contact-info";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ServicesGrid } from "@/components/services-grid";
import { SpecialOffers } from "@/components/special-offers";
import { Testimonials } from "@/components/testimonials";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="relative">
        <BackgroundImage />
        <Hero />
      </div>
      <AboutPreview />
      <Features />
      <ServicesGrid />
      <SpecialOffers />
      <Testimonials />
      <AboutSection />
      <ContactInfo />
      <Footer />
    </>
  );
}

import Hero from "@/components/homepage/Hero";
import Problem from "@/components/homepage/Problem";
import FeaturesGrid from "@/components/homepage/Features";
import PricingSection from "@/components/homepage/Pricing";
import FinalCTABanner from "@/components/homepage/CTA";
export default function Home() {
  return (
    <section className="min-h-screen ">
      <Hero />
      <Problem />
      <FeaturesGrid />
      <PricingSection />
      <FinalCTABanner />
    </section>
  );
}

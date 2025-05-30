import Hero from "@/components/homepage/Hero";
import Problem from "@/components/homepage/Problem";
import FeaturesGrid from "@/components/homepage/Features";
export default function Home() {
  return (
    <section className="min-h-screen">
      <Hero />
      <Problem />
      <FeaturesGrid />
    </section>
  );
}

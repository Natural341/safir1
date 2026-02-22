import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import QuoteCalculator from "@/components/QuoteCalculator";
import Reviews from "@/components/Reviews";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Regions from "@/components/Regions";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <Gallery />
      <QuoteCalculator />
      <Blog />
      <FAQ />
      <Regions />
      <ContactForm />
      <Reviews />
    </div>
  );
}

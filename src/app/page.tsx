import { Hero } from "@/components/Hero";
import { AboutSummary } from "@/components/AboutSummary";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { BentoLinks } from "@/components/BentoLinks";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSummary />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <BentoLinks />
      <ContactForm />
      <Footer />
    </main>
  );
}

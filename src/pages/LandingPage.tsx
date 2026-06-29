import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import Pricing from "../components/landing/Pricing";
import Testimonials from "../components/landing/Testimonials";
import FAQ from "../components/landing/FAQ";

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default LandingPage;

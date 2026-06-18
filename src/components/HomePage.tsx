import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import WhatWeDo from "@/components/WhatWeDo";
import WhyAndImpact from "@/components/WhyAndImpact";
import SelectedEngagements from "@/components/SelectedEngagements";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar transparentOnTop />
      <Hero />
      <WhoWeWorkWith />
      <WhatWeDo />
      <WhyAndImpact />
      <SelectedEngagements />
      <AboutUs />
      <Testimonials />
      <Footer />
    </main>
  );
}

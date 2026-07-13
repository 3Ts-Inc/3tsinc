import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import WhatWeDo from "@/components/WhatWeDo";
import WhyAndImpact from "@/components/WhyAndImpact";
import SelectedEngagements from "@/components/SelectedEngagements";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import type { ThreeTsContent } from "@/lib/siteContent";

export default function HomePage({ content }: { content: ThreeTsContent }) {
  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar transparentOnTop />
      <Hero content={content.home} />
      <WhoWeWorkWith />
      <WhatWeDo services={content.home.services} />
      <WhyAndImpact />
      <SelectedEngagements cases={content.home.engagements} />
      <AboutUs />
      <Testimonials backgroundImage={content.home.testimonialImage} />
      <Footer />
    </main>
  );
}

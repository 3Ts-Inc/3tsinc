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
      <Navbar content={content.global} transparentOnTop />
      <Hero content={content.home} />
      <WhoWeWorkWith content={content.home.audiences} />
      <WhatWeDo content={content.home} />
      <WhyAndImpact content={content.home} />
      <SelectedEngagements content={content.home} />
      <AboutUs content={content.home.aboutSection} />
      <Testimonials content={content.home.testimonials} backgroundImage={content.home.testimonialImage} />
      <Footer content={content.global} />
    </main>
  );
}

import { SiteFooter } from "@/components/SiteFooter";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { Marquee } from "@/components/home/Marquee";
import { SelectedWork } from "@/components/home/SelectedWork";
import { WhatIBuild } from "@/components/home/WhatIBuild";
import { NowSection } from "@/components/home/NowAndCapabilities";
import { Testimonials } from "@/components/home/Testimonials";
import { ContactCta } from "@/components/home/ContactCta";

export default function HomePage() {
  return (
    <>
      <main id="main">
        <Hero />
        <Marquee />
        <Intro />
        <SelectedWork />
        <WhatIBuild />
        <NowSection />
        <Testimonials />
        <ContactCta />
      </main>
      <SiteFooter invert />
    </>
  );
}

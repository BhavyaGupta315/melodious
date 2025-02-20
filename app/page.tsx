// import { ContactSection, HamperSection, HeroSection, HowItWorks, MusicServices, PromoBanner, SiteHeader } from "@/components";
import ContactSection from "@/components/sections/ContactSection";
import HamperSection from "@/components/sections/HamperSection";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorks from "@/components/sections/HowItWorks";
import MusicServices from "@/components/sections/MusicServices";
import PromoBanner from "@/components/sections/PromoBanner";
import SiteHeader from "@/components/sections/SiteHeader";

export default function Home() {
  return (
    <div>
      <PromoBanner/>
      <SiteHeader/>
      <main>
        <HeroSection/>
        <HamperSection/>
        <MusicServices/>
        <HowItWorks/>
        <ContactSection/>
      </main>
    </div>
  );
}

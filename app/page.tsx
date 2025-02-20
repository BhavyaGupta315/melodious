import { ContactSection, HamperSection, HeroSection, HowItWorks, MusicServices, PromoBanner, SiteHeader } from "@/components";


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

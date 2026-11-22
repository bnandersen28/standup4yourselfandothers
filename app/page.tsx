import AboutSection from "@/components/home/AboutSection";
import CommunityGallery from "@/components/home/CommunityGallery";
import ExploreSection from "@/components/home/ExploreSection";
import HeroSection from "@/components/home/HeroSection";
import RainbowLine from "@/components/ui/RainbowLine";
import SponsorSection from "@/components/home/SponsorSection";


export default function Home() {
  return (
    <>
    <RainbowLine />
    <HeroSection />
    
    <RainbowLine />
    <AboutSection />
    
    <RainbowLine />
    <CommunityGallery />
    <ExploreSection />
    <RainbowLine />
    <SponsorSection />
    <RainbowLine />
    </>
  );
}

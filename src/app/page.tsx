import Category from "@/Components/Sections/Category";
import Features from "@/Components/Sections/Features";
import GifSection from "@/Components/Sections/GifSection";
import Header from "@/Components/Sections/Header";
import HeroSection from "@/Components/Sections/HeroSection";
import MobileApp from "@/Components/Sections/MobileApp";
import Pricing from "@/Components/Sections/Pricing";
import Story from "@/Components/Sections/Story";
import VirtualSales from "@/Components/Sections/VirtualSales";
export default function Home() {
  return (
    <div className="relative bg-[#111927] w-full min-h-screen">
      {/* Sticky Header */}
      <Header />

      {/* Page Content */}
      <main className="px-4 lg:py-4 pt-4 lg:pt-0">
        <HeroSection />
        <GifSection />
        <Category/>
        <VirtualSales/>
        <Features/>
        <MobileApp/>
        <Story/>
        <Pricing/>
      </main>
    </div>
  );
}

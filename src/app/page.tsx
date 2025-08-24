import Header from "@/Components/Sections/Header";
import HeroSection from "@/Components/Sections/HeroSection";
import Image from "next/image";
import './globals.css';

export default function Home() {
  return (
   <div className="relative bg-[#111927] h-screen w-full ">
    <Header/>
    <div className="px-4 absolute top-0  w-full lg:py-4 pt-[75px]">
     
    <HeroSection/>
    </div>
   </div>
  );
}

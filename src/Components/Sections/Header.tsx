"use client";
import React from "react";
import Image from "next/image";
import logo from "../Assets/Images/Logo.png";

const navItems: { label: string; id: string }[] = [
  { label: "Home", id: "home" },
  { label: "Feature", id: "features" },
  { label: "How it works", id: "howitworks" },
  { label: "Who is it for?", id: "whoisitfor" },
  { label: "FAQ's", id: "faq" },
];
const Header = () => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className="lg:px-[40px] sticky lg:top-[30px] top-0 z-50 bg-[#0058FF] lg:bg-transparent 
     "
    >
      <header className=" w-full box-border lg:bg-[#FFFFFFF2] bg-white/90 backdrop-blur-sm lg:rounded-4xl py-[12px] lg:px-[24px] px-[16px] flex items-center justify-between ">
        <div>
          <Image src={logo} alt="Logo" className="w-[110px] h-[38px]  " />
        </div>
        {/* Navigation */}
        <nav>
          <ul className="lg:flex hidden space-x-[40px]">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleScroll(item.id)}
                  className="text-[#000] text-[16px] hover:text-[#0058FF] font-myFont font-medium cursor-pointer bg-transparent border-0"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-4 font-MyFont">
          <button className="lg:py-2 py-[6px] lg:px-6 px-[16px] lg:text-md text-[14px] border-2 border-[#0058FF] text-[#0058FF] rounded-full font-medium cursor-pointer">
            Login
          </button>
          <button className="lg:py-2 py-1.5 lg:px-6 px-[16px] lg:text-md text-[14px] bg-[#0058FF] hover:bg-blue-700 transition-colors rounded-full font-medium cursor-pointer text-white">
            Try Pro Free
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;

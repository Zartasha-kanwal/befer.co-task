"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import downarrow from "../Assets/Images/downarrow.png";

const TextReveal = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const revealTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top bottom",
        scrub: true,
      },
    });

    revealTl.to(".msg-text-scroll > div", {
      duration: 0.5,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
      stagger: 0.15,
    });

    return () => {
      revealTl.kill();
    };
  }, []);
  return (
    <>
      <section className="relative w-full flex flex-col justify-center items-center py-14 mb-12 sm:py-16 md:pb-[150px] md:pt-[90px] px-4 mt-0 md:mt-0 sm:px-6 md:px-8 lg:px-12  overflow-hidden shadow-2xl mx-auto">
       

        <div className="text-white text-2xl font-black pb-12">
          Unlock the advantages with
        </div>

        <div className="msg-text-scroll">
          <div
            className="relative bg-[#bccef1] px-3 sm:px-6 border-4 border-[#1D293C] rotate-3 z-[7]"
            style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
          >
            <h2 className="text-[#1D293C] text-4xl sm:text-6xl md:text-8xl font-bold text-center">
              AI
            </h2>
          </div>

          <div
            className="relative bg-yellow-100 px-3 sm:px-6 border-4 border-[#1D293C] rotate-[-3deg] z-[4]"
            style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
          >
            <h2 className="text-[#1D293C] text-4xl sm:text-6xl md:text-8xl font-bold text-center">
              Power
            </h2>
          </div>

          <div
            className="relative top-[-4px] sm:top-[-8px] bg-[#D1BEF8] px-3 sm:px-6 border-4 border-[#1D293C] rotate-1 z-[10]"
            style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
          >
            <h2 className="text-[#1D293C] text-4xl sm:text-6xl md:text-8xl font-bold text-center">
              Human
            </h2>
          </div>

          <div
            className="relative top-[-4px] sm:top-[-8px] bg-[#CDFDD8] px-3 sm:px-6 border-4 border-[#1D293C] rotate-[-5deg] z-[4]"
            style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
          >
            <h2 className="text-[#1D293C] text-4xl sm:text-6xl md:text-8xl font-bold text-center">
              Trust
            </h2>
          </div>
        </div>
      </section>

      
        <div>
        <Image
          src={downarrow}
          alt=""
          className="arrow mx-auto mb-8 w-28 h-32 select-none pointer-events-none"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </>
  );
};

export default TextReveal;

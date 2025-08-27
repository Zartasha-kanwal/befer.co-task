"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import ai_women from "../Assets/Images/ai-sales-optimized-1024w.jpg";

const VirtualSales = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const boxesRef = useRef<HTMLDivElement>(null);
  const bottomTextRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    // Image
    tl.from(imageRef.current, {
      x: -200,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // h2
    tl.from(
      h2Ref.current,
      { y: 50, opacity: 0, duration: 1, ease: "power3.out" },
      "-=0.5"
    );

    // Boxes
    tl.from(
      Array.from(boxesRef.current!.children) as HTMLElement[],
      {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      },
      "-=0.5"
    );

    // Bottom text
    tl.from(
      bottomTextRef.current,
      { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    );

    // Button animation
    tl.fromTo(
      buttonRef.current,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
      "-=0.4"
    );
  }, []);
  return (
    <>
      <section id="howitworks"
        ref={sectionRef}
        className="relative w-full flex justify-center items-center py-12 sm:py-16 md:py-[100px] px-4 mt-0 md:mt-0 sm:px-6 md:px-8 lg:px-12 bg-[#1D293C] overflow-hidden rounded-3xl shadow-2xl mx-auto"
      >
        <div
          className="absolute left-0 top-0 w-full h-[80%] z-0 pointer-events-none"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 70%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 70%, transparent 100%)",
          }}
        >
          <svg
            width="100%"
            height="100%"
            className="w-full h-full"
            style={{ opacity: 0.13 }}
          >
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 w-full flex flex-col justify-center items-center md:flex-row md:items-start gap-8 md:gap-12 max-w-7xl">
          <div
            ref={imageRef}
            className="flex-shrink-0 flex flex-col items-center justify-center w-full max-w-xs sm:max-w-sm md:w-[320px]"
          >
            <div className="rounded-3xl shadow-2xl overflow-hidden w-full h-[350px] sm:h-[400px] flex flex-col justify-end relative border-4 border-[#232F3E]">
              <Image
                src={ai_women}
                alt="Ai-women"
                className="w-[100%] h-[100%] object-cover object-center"
                style={{width:"auto", height:"auto" }}
              />
              <div className=" z-10 flex gap-2 p-0 pb-6 justify-center w-full absolute bottom-0 left-0">
                <span className="bg-[#F7FFD2] text-gray-900 text-xs font-semibold rounded-full px-3 py-1 shadow border border-green-200">
                  AI Agent
                </span>
                <span className="bg-[#FDD6B7] text-gray-900 text-xs font-semibold rounded-full px-3 py-1 shadow border border-yellow-200">
                  Automation
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center md:items-start w-full max-w-2xl px-2 sm:px-0">
            <span className="mb-6 px-3 py-1 rounded-full bg-[#15B270] text-white text-xs font-semibold">
              Enable AI Sales
            </span>
            <h2
              ref={h2Ref}
              className="text-white text-2xl sm:text-3xl md:text-5xl font-semibold mb-8 md:mb-10 max-w-xl text-left md:text-left leading-tight"
            >
              Build better virtual sales agent, powered by AI
            </h2>
            <div
              ref={boxesRef}
              className="flex flex-row sm:flex-row gap-4 sm:gap-6 mb-6 w-full max-w-xl"
            >
              <div className="flex-1 bg-[#D1BEF8] rounded-xl border border-[#B9A9E3] p-4 sm:p-6 flex flex-col justify-between shadow aspect-square min-w-[140px] sm:min-w-[160px] max-w-[210px] mx-auto sm:mx-0">
                <span className="w-fit text-xs font-semibold text-gray-800 mb-2 px-2 py-0.5 border border-gray-400 rounded-full bg-transparent">
                  Benefit
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xl sm:text-2xl font-semibold text-gray-900">
                    370%
                  </span>
                  <span className="text-gray-700 text-xs  font-medium">
                    Return on Investment
                  </span>
                </div>
              </div>

              <div className="flex-1 bg-[#CDFDD8] rounded-xl border border-[#B9A9E3] p-4 sm:p-6 flex flex-col justify-between shadow aspect-square min-w-[140px] sm:min-w-[160px] max-w-[210px] mx-auto sm:mx-0">
                <span className="w-fit text-xs font-semibold text-gray-800 mb-2 px-2 py-0.5 border border-gray-400 rounded-full bg-transparent">
                  Benefit
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xl sm:text-2xl font-semibold text-gray-900">
                    2x Orders
                  </span>
                  <span className="text-gray-700 text-xs  font-medium">
                    Never miss a lead again
                  </span>
                </div>
              </div>
            </div>

            <div
              ref={bottomTextRef}
              className="flex items-center gap-3 mb-6 w-full max-w-xl justify-center md:justify-start"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F5C9C7] flex-shrink-0">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="#181F2A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  className="rotate-[-35deg]"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
              <span className="text-white text-base sm:text-lg font-medium text-left md:text-left">
                Conversational AI or fast and friendly customer care
              </span>
            </div>

            <button
              ref={buttonRef}
              className="flex items-center bg-[#0058FF] text-white px-6 py-3 rounded-full font-semibold text-base shadow hover:bg-blue-700 transition mt-2 cursor-pointer"
            >
              Start your Business
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default VirtualSales;

"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import hero_person from "../Assets/Images/Hero-person.svg";

const HeroMobile = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<HTMLButtonElement[]>([]);
  const ctaButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!boxRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      boxRef.current,
      { x: -80, y: 80, opacity: 0 },
      { x: 0, y: 0, opacity: 1, duration: 1.2 }
    );

    if (buttonRefs.current.length) {
      tl.fromTo(
        buttonRefs.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.2 },
        "-=0.4"
      );
    }

    if (ctaButtonRef.current) {
      tl.fromTo(
        ctaButtonRef.current,
        { x: 80, y: 50, opacity: 0 },
        { x: 0, y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.2"
      );
    }
  }, []);

  return (
    <div className="relative flex items-center justify-center h-full pt-[30px]">
      <div className=" grid grid-cols-1 place-items-center overflow-hidden ">
        <div ref={boxRef} className="z-10 px-[16px]">
          <h1 className="text-white font-[900] text-4xl sm:text-5xl font-myFont tracking-tight text-center">
            Customers
          </h1>
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl tracking-tight pb-[8px] text-center">
            Growth
          </h1>
          <p className="text-white text-sm my-[16px]">
            Professional Tools for Trusted Service Providers.
          </p>

          <div className="flex gap-[6px] flex-wrap">
            {[
              {
                text: "Reliability",
                bg: "bg-white/90",
                textColor: "text-blue-700",
              },
              {
                text: "Customer Satisfaction",
                bg: "bg-yellow-100",
                textColor: "text-yellow-800",
              },
              {
                text: "Efficiency",
                bg: "bg-white/90",
                textColor: "text-blue-700",
              },
            ].map((btn, idx) => (
              <button
                key={btn.text}
                ref={(el) => {
                  if (el) buttonRefs.current[idx] = el;
                }}
                className={`py-[4px] px-[12px] ${btn.textColor} ${btn.bg} rounded-full text-xs font-medium cursor-pointer`}
              >
                {btn.text}
              </button>
            ))}
          </div>
        </div>

        <div className="h-full relative">
          <Image
            src={hero_person}
            className="overflow-hidden  h-full -z-0 transform -translate-y-12"
            alt="hero-person"
          />
          <div className="absolute top-[30%] left-[20%]">
            <button
              ref={ctaButtonRef}
              className="flex items-center py-[8px] px-[20px] text-blue-700 bg-white/90 rounded-full text-[16px] font-medium  cursor-pointer"
            >
              Start your Business
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="ml-2"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMobile;

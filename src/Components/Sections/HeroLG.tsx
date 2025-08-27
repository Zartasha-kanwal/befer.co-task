"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import Image from "next/image";
import hero_person from "../Assets/Images/Hero-person.svg";

const HeroLG = () => {
  const leftBoxRef = useRef<HTMLDivElement>(null);
  const rightBoxRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const leftSectionRef = useRef<HTMLDivElement>(null);
  const rightSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      { y: 80, opacity: 0, rotation: 10 },
      {
        y: 0,
        opacity: 1,
        rotation: 0,
        duration: 1,
        ease: "power3.out",
        transformOrigin: "50% 80%",
      }
    );

    const handleMove = (e: globalThis.MouseEvent) => {
      if (!imageRef.current) return;

      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 10;
      const y = (e.clientY / innerHeight - 0.5) * 5;

      gsap.to(imageRef.current, {
        y: y,
        rotation: x * 1,
        duration: 0.8,
        ease: "power3.out",
        transformOrigin: "50% 80%",
      });

      if (leftBoxRef.current) {
        gsap.to(leftBoxRef.current, {
          x: x * -1.5,
          y: y * -1.5,
          duration: 0.6,
          ease: "power3.out",
        });
      }

      if (rightBoxRef.current) {
        gsap.to(rightBoxRef.current, {
          x: x * 1.5,
          y: y * 1.5,
          duration: 0.6,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (leftSectionRef.current) {
      tl.fromTo(
        leftSectionRef.current,
        { x: -80, y: 80, opacity: 0, filter: "blur(10px)" },
        { x: 0, y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2 }
      );

      const leftButtons = leftSectionRef.current.querySelectorAll("button");
      if (leftButtons.length) {
        tl.fromTo(
          leftButtons,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.2 },
          "-=0.6"
        );
      }
    }

    if (rightSectionRef.current) {
      tl.fromTo(
        rightSectionRef.current,
        { x: 80, y: 80, opacity: 0, filter: "blur(10px)" },
        { x: 0, y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2 },
        "-=0.5"
      );

      // Animate button
      const rightButton = rightSectionRef.current.querySelector("button");
      if (rightButton) {
        tl.fromTo(
          rightButton,
          { scale: 0.5, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
          "-=0.4"
        );

        const handleMouseEnter = () => {
          gsap.to(rightButton, {
            scale: 1.1,
            duration: 0.2,
            ease: "power3.out",
          });
        };
        const handleMouseLeave = () => {
          gsap.to(rightButton, { scale: 1, duration: 0.2, ease: "power3.out" });
        };

        rightButton.addEventListener("mouseenter", handleMouseEnter);
        rightButton.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          rightButton.removeEventListener("mouseenter", handleMouseEnter);
          rightButton.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }

    // Animate center image
    if (imageRef.current) {
      tl.fromTo(
        imageRef.current,
        { y: 50, rotation: 10, opacity: 0 },
        {
          y: 0,
          x: 0,
          rotation: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6"
      );
    }
  }, []);

  return (
    <div className="relative  min-h-[700px]  flex items-center justify-center overflow-hidden">
      <div className=" flex justify-center items-end gap-16  w-full ">
        <div
          ref={leftSectionRef}
          className=" flex flex-col items-start justify-end px-4  "
        >
          <h1 className="text-white font-extrabold lg:text-6xl xl:text-6xl 2xl:text-7xl   tracking-tight text-start px-9  my-1">
            Customers
          </h1>

          <div
            ref={leftBoxRef}
            className="inline-block bg-green-200 text-black rounded-xl px-3  py-1 text-lg font-bold rotate-[-30deg] shadow-[0]"
          >
            %
          </div>

          <p className="text-white text-[18px] my-[16px] px-9 pt-9">
            Professional Tools for Trusted Service Providers.
          </p>

          <div className="flex gap-[6px] pl-8 flex-wrap">
            <button className="py-[4px] px-[12px] text-blue-700 bg-white/90 rounded-full text-[13px] font-medium cursor-pointer">
              Reliability
            </button>
            <button className="py-[4px] px-[12px] text-yellow-800 bg-yellow-100 rounded-full text-[13px] font-medium cursor-pointer">
              Customer Satisfaction
            </button>
            <button className="py-[4px] px-[12px] text-blue-700 bg-white/90 rounded-full text-[13px] font-medium cursor-pointer">
              Efficiency
            </button>
          </div>
        </div>
        <div className=" relative -bottom-20  xl:w-[300px] lg:w-[300px]  2xl:w-[400px] h-[240px]  lg:h-[453px] xl:h-[453px] 2xl:h-[533px]  ">
          <Image
            ref={imageRef}
            src={hero_person}
            className="overflow-hidden   "
            alt="hero-person"
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </div>
        <div
          ref={rightSectionRef}
          className=" relative w-fit flex flex-col items-end gap-[70px] justify-end  py-6 px-4 "
        >
          <h1 className="text-white font-extrabold text-6xl 2xl:text-7xl tracking-tight pb-[8px] text-center">
            Growth
          </h1>
          <div
            ref={rightBoxRef}
            className="absolute  right-[35%] top-0 hidden lg:block "
          >
            <span className="inline-block bg-yellow-200 text-black rounded-xl px-4 py-1 text-lg font-bold rotate-[27deg] ">
              $
            </span>
          </div>

          <button className="inline-flex items-center bg-white text-blue-600  px-8 py-3 rounded-full font-semibold text-xl shadow   cursor-pointer whitespace-nowrap ">
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
    </div>
  );
};

export default HeroLG;

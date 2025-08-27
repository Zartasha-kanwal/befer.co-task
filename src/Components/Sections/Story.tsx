"use client";
import Image from "next/image";
import React, {  useEffect, useRef } from "react";
import downarrow from "../Assets/Images/downarrow.png";
import Storycard from "./Storycard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Storycarousel from "./Storycarousel";


gsap.registerPlugin(ScrollTrigger);

const Story = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.6, 
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });
  }, []);
  return (
    <>
      <section className="py-16 px-2 sm:px-4 md:px-0 flex flex-col items-center">
        <span className="mb-6 px-4 py-1 rounded-full bg-[#15B270] text-white text-sm font-semibold">
          What Our Users Are Saying
        </span>
        <h2
          ref={headingRef}
          className="text-white text-[1.775rem] sm:text-4xl md:text-5xl font-semibold text-center mb-12  mx-auto text-balance"
        >
          Real stories from service pros who leveled up with Befer.
        </h2>

        <Storycard />
        <div className="flex items-center justify-center w-[60%]"> <Storycarousel/> </div>
        

        <div>
          <Image
            src={downarrow}
            alt=""
            className="arrow mx-auto mb-8 w-28 h-32 select-none pointer-events-none"
            style={{width:"auto", height:"auto" }}
          />
        </div>
        <div className="flex flex-col items-center">
          <span className="text-white text-[16px] mb-4">
            Ready to grow your service business?
          </span>
          <button className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-semibold text-base shadow hover:bg-gray-100 transition cursor-pointer">
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
      </section>
    </>
  );
};

export default Story;

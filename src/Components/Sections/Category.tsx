"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import downarrow from "../Assets/Images/downarrow.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ServiceItem {
  icon: React.ReactNode;
  label: string;
  bg: string;
  iconBg: string;
}

const services: ServiceItem[] = [
  {
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 576 512"
        className="w-8 h-8"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
      </svg>
    ),
    label: "Home Cleaners",
    bg: "bg-pink-100",
    iconBg: "bg-pink-200/70",
  },
  {
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 576 512"
        className="w-8 h-8 mx-auto mb-2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
      </svg>
    ),
    label: "Car Detailers",
    bg: "bg-yellow-100",
    iconBg: "bg-yellow-200/70",
  },
  {
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 576 512"
        className="w-8 h-8 mx-auto mb-2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
      </svg>
    ),
    label: "Pool Cleaners",
    bg: "bg-blue-100",
    iconBg: "bg-blue-200/70",
  },
  {
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 576 512"
        className="w-8 h-8 mx-auto mb-2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
      </svg>
    ),
    label: "Plumbers",
    bg: "bg-green-100",
    iconBg: "bg-green-200/70",
  },
  {
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 576 512"
        className="w-8 h-8 mx-auto mb-2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
      </svg>
    ),
    label: "Electricians",
    bg: "bg-purple-200",
    iconBg: "bg-purple-100/80",
  },
  {
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 576 512"
        className="w-8 h-8 mx-auto mb-2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
      </svg>
    ),
    label: "Carpet Cleaners",
    bg: "bg-cyan-100",
    iconBg: "bg-cyan-200/70",
  },
];

const Category = () => {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const arrowWrapperRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (headingRef.current && arrowWrapperRef.current && ctaRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        headingRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          arrowWrapperRef.current,
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.3"
        )
        .fromTo(
          ctaRef.current,
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.5"
        );
    }
  }, []);

  return (
    <section className="relative py-24 sm:py-24 flex flex-col items-center">
      <span className="mb-6 px-4 py-1 rounded-full bg-[#15B270] text-white text-sm font-semibold">
        Who is it for?
      </span>
      <h2
        ref={headingRef}
        className="heading text-white text-[26px] sm:text-4xl md:text-[40px] font-semibold text-center mb-12 lg:max-w-[750px] mx-auto text-balance"
      >
        Trusted by professionals across all major service categories.
      </h2>
      <div className="grid  max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-[64px]  mx-auto lg:[&>*:nth-last-child(2):nth-child(odd)]:col-start-2">
        {services.map((service) => (
          <div
            key={service.label}
            className={`${service.bg} w-[220px] lg:w-[245px] h-[240px] lg:h-[270px] rounded-2xl border-4 border-[#3C5070] flex flex-col items-center justify-center p-8  shadow-lg transition-transform duration-200 hover:border-blue-400 hover:scale-105 hover:shadow-2xl cursor-pointer card-gradient-home`}
          >
            <div
              className={`mb-3 w-16 h-16 flex items-center p-4 justify-center rounded-xl ${service.iconBg}`}
            >
              {service.icon}
            </div>
            <span className="text-base font-semibold text-gray-800 text-center">
              {service.label}
            </span>
          </div>
        ))}
      </div>
      <div ref={arrowWrapperRef}>
        <Image
          src={downarrow}
          alt=""
          className="arrow mx-auto mb-8 w-28 h-32 select-none pointer-events-none"
          style={{width:"auto", height:"auto" }}
        />
      </div>
      <div ref={ctaRef} className="flex flex-col items-center">
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
  );
};

export default Category;

"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import amanda from "../Assets/Images/Profile Pic (1).png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Storycard = () => {
     const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const card5Ref = useRef(null);
  const card6Ref = useRef(null);

  useEffect(() => {
    const cards = [card1Ref, card2Ref, card3Ref, card4Ref, card5Ref, card6Ref];

    cards.forEach((card, index) => {
      gsap.from(card.current, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        delay: index * 0.1, 
        scrollTrigger: {
          trigger: card.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);
  return (
    <div>
      <div className="hidden lg:grid grid-cols-3 gap-6 mb-16 w-full max-w-6xl">

        <div ref={card1Ref} className="relative bg-[#1D293C] rounded-2xl p-6 flex flex-col justify-between min-h-[320px] overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
            <svg width="100%" height="100%" className="w-full h-full">
              <defs>
                <pattern
                  id="card-grid-0"
                  width="30"
                  height="30"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 30 0 L 0 0 0 30"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="0.8"
                  ></path>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#card-grid-0)"></rect>
            </svg>
          </div>
          <p className="text-white text-base leading-relaxed mb-6 relative z-10">
            Befer completely transformed my business operations. I went from
            spending hours on paperwork to having everything automated. My
            revenue increased by 40% in just 3 months!
          </p>
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-12 h-12 rounded-full bg-gray-400 flex-shrink-0 overflow-hidden">
              <Image src={amanda} alt="amanda" />
            </div>
            <div className="flex flex-col">
              <div className="text-white font-semibold text-sm">
                Amanda Rodriguez
              </div>
              <div className="text-gray-400 text-xs">
                Home Cleaning Service Owner
              </div>
            </div>
          </div>
        </div>

        <div ref={card2Ref} className="relative bg-[#1D293C] rounded-2xl p-6 flex flex-col justify-between min-h-[320px] overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
            <svg width="100%" height="100%" className="w-full h-full">
              <defs>
                <pattern
                  id="card-grid-0"
                  width="30"
                  height="30"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 30 0 L 0 0 0 30"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="0.8"
                  ></path>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#card-grid-0)"></rect>
            </svg>
          </div>
          <p className="text-white text-base leading-relaxed mb-6 relative z-10">
            "The mobile app is a game-changer. I can accept payments, schedule
            jobs, and communicate with customers while I'm on-site. It's like
            having an office in my pocket."
          </p>
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-12 h-12 rounded-full bg-gray-400 flex-shrink-0 overflow-hidden">
              <Image src={amanda} alt="amanda" />
            </div>
            <div className="flex flex-col">
              <div className="text-white font-semibold text-sm">
                Jose Martinez
              </div>
              <div className="text-gray-400 text-xs">HVAC Technician</div>
            </div>
          </div>
        </div>

        <div ref={card3Ref} className="relative bg-[#1D293C] rounded-2xl p-6 flex flex-col justify-between min-h-[320px] overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
            <svg width="100%" height="100%" className="w-full h-full">
              <defs>
                <pattern
                  id="card-grid-0"
                  width="30"
                  height="30"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 30 0 L 0 0 0 30"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="0.8"
                  ></path>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#card-grid-0)"></rect>
            </svg>
          </div>
          <p className="text-white text-base leading-relaxed mb-6 relative z-10">
            "What impressed me most is how easy it was to get started. Within a
            day, I had my entire service business running through Befer. The
            customer support team was incredible too."
          </p>
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-12 h-12 rounded-full bg-gray-400 flex-shrink-0 overflow-hidden">
              <Image src={amanda} alt="amanda" />
            </div>
            <div className="flex flex-col">
              <div className="text-white font-semibold text-sm">
                Carlos Mitchell
              </div>
              <div className="text-gray-400 text-xs">Plumbing Contractor</div>
            </div>
          </div>
        </div>

        <div ref={card4Ref} className="relative bg-[#1D293C] rounded-2xl p-6 flex flex-col justify-between min-h-[320px] overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
            <svg width="100%" height="100%" className="w-full h-full">
              <defs>
                <pattern
                  id="card-grid-0"
                  width="30"
                  height="30"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 30 0 L 0 0 0 30"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="0.8"
                  ></path>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#card-grid-0)"></rect>
            </svg>
          </div>
          <p className="text-white text-base leading-relaxed mb-6 relative z-10">
            "I used to lose track of appointments and struggle with invoicing.
            Now everything is seamless. My customers love the professional
            quotes and booking system."
          </p>
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-12 h-12 rounded-full bg-gray-400 flex-shrink-0 overflow-hidden">
              <Image src={amanda} alt="amanda" />
            </div>
            <div className="flex flex-col">
              <div className="text-white font-semibold text-sm">Sarah Kim</div>
              <div className="text-gray-400 text-xs">
                Pool Maintenance Service
              </div>
            </div>
          </div>
        </div>

        <div ref={card5Ref} className="relative bg-[#1D293C] rounded-2xl p-6 flex flex-col justify-between min-h-[320px] overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
            <svg width="100%" height="100%" className="w-full h-full">
              <defs>
                <pattern
                  id="card-grid-0"
                  width="30"
                  height="30"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 30 0 L 0 0 0 30"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="0.8"
                  ></path>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#card-grid-0)"></rect>
            </svg>
          </div>
          <p className="text-white text-base leading-relaxed mb-6 relative z-10">
            "The automated scheduling and payment reminders have saved me
            countless hours. I can focus on the work I love instead of chasing
            payments and managing calendars."
          </p>
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-12 h-12 rounded-full bg-gray-400 flex-shrink-0 overflow-hidden">
              <Image src={amanda} alt="amanda" />
            </div>
            <div className="flex flex-col">
              <div className="text-white font-semibold text-sm">
                Michael Roberts
              </div>
              <div className="text-gray-400 text-xs">Electrical Contractor</div>
            </div>
          </div>
        </div>

        <div  ref={card6Ref} className="relative bg-[#1D293C] rounded-2xl p-6 flex flex-col justify-between min-h-[320px] overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
            <svg width="100%" height="100%" className="w-full h-full">
              <defs>
                <pattern
                  id="card-grid-0"
                  width="30"
                  height="30"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 30 0 L 0 0 0 30"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="0.8"
                  ></path>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#card-grid-0)"></rect>
            </svg>
          </div>
          <p className="text-white text-base leading-relaxed mb-6 relative z-10">
            "Befer helped me scale from a one-person operation to managing a
            team of 5. The job tracking and team communication features are
            exactly what I needed."
          </p>
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-12 h-12 rounded-full bg-gray-400 flex-shrink-0 overflow-hidden">
              <Image src={amanda} alt="amanda" />
            </div>
            <div className="flex flex-col">
              <div className="text-white font-semibold text-sm">
                Lisa Thompson
              </div>
              <div className="text-gray-400 text-xs">
                Carpet Cleaning Business
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Storycard;

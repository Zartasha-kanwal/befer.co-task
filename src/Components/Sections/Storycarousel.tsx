"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import amanda from "../Assets/Images/Profile Pic (1).png";
import Image from "next/image";

const Storycarousel: React.FC = () => {
  return (
    <div className="w-full px-4 lg:hidden mb-16">
      <Swiper
        modules={[Pagination]}
        spaceBetween={16} // spacing between slides
        slidesPerView={1} // one slide per view
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="relative bg-[#1D293C] rounded-2xl p-6 flex flex-col justify-between min-h-[320px] overflow-hidden">
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
                      strokeWidth="0.8"
                    ></path>
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#card-grid-0)"
                ></rect>
              </svg>
            </div>
            <p className="text-white text-xs leading-relaxed mb-6 relative z-10">
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
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative bg-[#1D293C] rounded-2xl p-6 flex flex-col justify-between min-h-[320px] overflow-hidden">
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
                      strokeWidth="0.8"
                    ></path>
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#card-grid-0)"
                ></rect>
              </svg>
            </div>
            <p className="text-white text-xs leading-relaxed mb-6 relative z-10">
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
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative bg-[#1D293C] rounded-2xl p-6 flex flex-col justify-between min-h-[320px] overflow-hidden">
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
                      strokeWidth="0.8"
                    ></path>
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#card-grid-0)"
                ></rect>
              </svg>
            </div>
            <p className="text-white text-xs leading-relaxed mb-6 relative z-10">
              "What impressed me most is how easy it was to get started. Within
              a day, I had my entire service business running through Befer. The
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
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative bg-[#1D293C] rounded-2xl p-6 flex flex-col justify-between min-h-[320px] overflow-hidden">
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
                      strokeWidth="0.8"
                    ></path>
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#card-grid-0)"
                ></rect>
              </svg>
            </div>
            <p className="text-white text-xs leading-relaxed mb-6 relative z-10">
              "I used to lose track of appointments and struggle with invoicing.
              Now everything is seamless. My customers love the professional
              quotes and booking system."
            </p>
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-12 h-12 rounded-full bg-gray-400 flex-shrink-0 overflow-hidden">
                <Image src={amanda} alt="amanda" />
              </div>
              <div className="flex flex-col">
                <div className="text-white font-semibold text-sm">
                  Sarah Kim
                </div>
                <div className="text-gray-400 text-xs">
                  Pool Maintenance Service
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative bg-[#1D293C] rounded-2xl p-6 flex flex-col justify-between min-h-[320px] overflow-hidden">
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
                      strokeWidth="0.8"
                    ></path>
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#card-grid-0)"
                ></rect>
              </svg>
            </div>
            <p className="text-white text-xs leading-relaxed mb-6 relative z-10">
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
                <div className="text-gray-400 text-xs">Michael Roberts</div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative bg-[#1D293C] rounded-2xl p-6 flex flex-col justify-between min-h-[320px] overflow-hidden">
            <div className="absolute inset-0  pointer-events-none">
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
                      strokeWidth="0.8"
                    ></path>
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#card-grid-0)"
                ></rect>
              </svg>
            </div>
            <p className="text-white text-xs leading-relaxed mb-6 relative z-10">
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
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Storycarousel;

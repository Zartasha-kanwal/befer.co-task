"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import amanda from "../Assets/Images/Profile Pic (1).png";

const testimonials = [
  {
    quote:
      "Befer completely transformed my business operations. I went from spending hours on paperwork to having everything automated. My revenue increased by 40% in just 3 months!",
    name: "Amanda Rodriguez",
    role: "Home Cleaning Service Owner",
    image: amanda,
  },
  {
    quote:
      "The mobile app is a game-changer. I can accept payments, schedule jobs, and communicate with customers while I'm on-site. It's like having an office in my pocket.",
    name: "Jose Martinez",
    role: "HVAC Technician",
    image: amanda,
  },
  {
    quote:
      "What impressed me most is how easy it was to get started. Within a day, I had my entire service business running through Befer. The customer support team was incredible too.",
    name: "Carlos Mitchell",
    role: "Plumbing Contractor",
    image: amanda,
  },
  {
    quote:
      "I used to lose track of appointments and struggle with invoicing. Now everything is seamless. My customers love the professional quotes and booking system.",
    name: "Sarah Kim",
    role: "Pool Maintenance Service",
    image: amanda,
  },
  {
    quote:
      "Befer helped me scale from a one-person operation to managing a team of 5. The job tracking and team communication features are exactly what I needed.",
    name: "Lisa Thompson",
    role: "Carpet Cleaning Business",
    image: amanda,
  },
];

export default function MobileTestimonialCarousel() {
  return (
    <div className="w-full px-4 lg:hidden mb-16">
      <Swiper
       modules={[Pagination, Autoplay]}
  spaceBetween={24}
  slidesPerView={1}
  pagination={{ el: ".custom-pagination", clickable: true }}
  autoplay={{ delay: 4000, disableOnInteraction: false }}
  loop={true}
  className="testimonial-swiper pb-10"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="relative bg-[#0D1526] rounded-2xl p-6 flex flex-col min-h-[350px] overflow-hidden ">
              {/* Quote */}
              <p className="text-white text-xs leading-relaxed flex-grow">
                "{t.quote}"
              </p>

              {/* Profile */}
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination under carousel */}
      <div className="custom-pagination flex justify-center mt-6"></div>
    </div>
  );
}

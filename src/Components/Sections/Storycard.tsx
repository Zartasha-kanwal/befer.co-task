"use client";
import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import amanda from "../Assets/Images/Profile Pic (1).png";

gsap.registerPlugin(ScrollTrigger);

type Testimonial = {
  quote: string;
  name: string;
  job: string;
  image: StaticImageData;
  alt: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Befer completely transformed my business operations. I went from spending hours on paperwork to having everything automated. My revenue increased by 40% in just 3 months!",
    name: "Amanda Rodriguez",
    job: "Home Cleaning Service Owner",
    image: amanda,
    alt: "Profile picture of Amanda Rodriguez",
  },
  {
    quote:
      "The mobile app is a game-changer. I can accept payments, schedule jobs, and communicate with customers while I'm on-site. It's like having an office in my pocket.",
    name: "Jose Martinez",
    job: "HVAC Technician",
    image: amanda,
    alt: "Profile picture of Jose Martinez",
  },
  {
    quote:
      "What impressed me most is how easy it was to get started. Within a day, I had my entire service business running through Befer. The customer support team was incredible too.",
    name: "Carlos Mitchell",
    job: "Plumbing Contractor",
    image: amanda,
    alt: "Profile picture of Carlos Mitchell",
  },
  {
    quote:
      "I used to lose track of appointments and struggle with invoicing. Now everything is seamless. My customers love the professional quotes and booking system.",
    name: "Sarah Kim",
    job: "Pool Maintenance Service",
    image: amanda,
    alt: "Profile picture of Sarah Kim",
  },
  {
    quote:
      "The automated scheduling and payment reminders have saved me countless hours. I can focus on the work I love instead of chasing payments and managing calendars.",
    name: "Michael Roberts",
    job: "Electrical Contractor",
    image: amanda,
    alt: "Profile picture of Michael Roberts",
  },
  {
    quote:
      "Befer helped me scale from a one-person operation to managing a team of 5. The job tracking and team communication features are exactly what I needed.",
    name: "Lisa Thompson",
    job: "Carpet Cleaning Business",
    image: amanda,
    alt: "Profile picture of Lisa Thompson",
  },
  {
    quote:
      "The automated scheduling and payment reminders have saved me countless hours. I can focus on the work I love instead of chasing payments and managing calendars.",
    name: "Michael Roberts",
    job: "Electrical Contractor",
    image: amanda,
    alt: "Profile picture of Michael Roberts",
  },
  {
    quote:
      "The automated scheduling and payment reminders have saved me countless hours. I can focus on the work I love instead of chasing payments and managing calendars.",
    name: "Michael Roberts",
    job: "Electrical Contractor",
    image: amanda,
    alt: "Profile picture of Michael Roberts",
  },
];

const Storycard: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const section = sectionRef.current;
    const track = trackRef.current;

    const scrollAmount = Math.max(
      0,
      track.scrollWidth - window.innerWidth + 50
    );

    if (scrollAmount > 0) {
      gsap.to(track, {
        x: -scrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${scrollAmount}`,
          scrub: true,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full overflow-hidden flex items-center bg-[#0f172a]"
    >
      <div ref={trackRef} className="flex flex-row gap-6 px-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative bg-[#1D293C] rounded-2xl p-6 flex flex-col justify-between min-h-[350px] max-w-[350px] 2xl:w-[400px]  shrink-0"
          >
            {/* SVG */}
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
              <svg width="100%" height="100%" className="w-full h-full">
                <defs>
                  <pattern
                    id={`card-grid-${index}`}
                    width="30"
                    height="30"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 30 0 L 0 0 0 30"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="0.8"
                    />
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  fill={`url(#card-grid-${index})`}
                />
              </svg>
            </div>

            {/* Content */}
            <p className="text-white text-base leading-relaxed mb-6 relative z-10">
              {testimonial.quote}
            </p>
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-12 h-12 rounded-full bg-gray-400 flex-shrink-0 overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={testimonial.alt}
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex flex-col">
                <div className="text-white font-semibold text-sm">
                  {testimonial.name}
                </div>
                <div className="text-gray-400 text-xs">{testimonial.job}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Storycard;

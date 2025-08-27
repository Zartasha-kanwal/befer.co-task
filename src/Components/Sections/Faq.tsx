"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface FAQ {
  question: string;
  answer: string;
}

export const faqData: FAQ[] = [
  {
    question: "What is Befer?",
    answer:
      "Befer is an all-in-one platform designed to help service providers grow and manage their business — from scheduling and payments to marketing and communication.",
  },
  {
    question: "Is Befer suitable for solo service providers?",
    answer:
      "Absolutely! Befer is designed to scale with your business, whether you're a solo service provider or managing a team. Our Basic plan is perfect for individuals just getting started.",
  },
  {
    question: "Does Befer offer a mobile app?",
    answer:
      "Yes! Befer offers mobile apps for both iOS and Android, allowing you to manage your business on the go. Accept payments, schedule jobs, and communicate with customers from anywhere.",
  },
  {
    question: "How does AI Calling and SMS help my business?",
    answer:
      "Our AI Calling Agent can handle customer inquiries, book appointments, and follow up on leads 24/7. SMS marketing helps you stay connected with customers and send automated reminders and updates.",
  },
  {
    question: "Do I need technical skills to use Befer?",
    answer:
      "Not at all! Befer is designed to be user-friendly and intuitive. We provide comprehensive onboarding and support to help you get started quickly, regardless of your technical background.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const faqRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "80% 80%",
          },
        }
      );
    }

    if (faqRefs.current.length > 0) {
      gsap.from(faqRefs.current, {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: faqRefs.current[0], // start when first FAQ item enters
          start: "top 80%",
        },
      });
    }
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index)); // close if clicked again, otherwise open
  };
  return (
    <>
      <section id="faq" className="py-6 md:py-16  sm:px-4 md:px-0 flex flex-col items-center">
        <span className="mb-6 px-4 py-1 rounded-full bg-[#15B270] text-white text-sm font-semibold">
          FAQ's
        </span>
        <h2
          ref={headingRef}
          className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-12 max-w-[700px] mx-auto text-balance"
        >
          Got questions? We've got answers.
        </h2>
        <div className="w-full max-w-4xl mb-16 md:mx-auto mx-2">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-gray-600 last:border-b-0"
                ref={(el) => {
                  if (el) faqRefs.current[index] = el;
                }}
              >
                <button
                  className="w-full py-6 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-white text-lg sm:text-xl font-medium pr-4">
                    {faq.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#1D293C]/50 flex items-center justify-center transition-all duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 5v14"></path>
                      <path d="M5 12h14"></path>
                    </svg>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-6 pr-10">
                    <p className="text-gray-300 text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>


        <div className="w-full max-w-4xl">
          <div className="bg-[#0058FF] rounded-3xl md:rounded-[72px] px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <span className="text-white text-lg sm:text-xl font-medium text-center sm:text-left">Ready to grow your service business?</span>
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
        </div>
      </section>
    </>
  );
};

export default Faq;

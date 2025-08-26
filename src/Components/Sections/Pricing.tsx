"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const titleRef = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 85%",
      },
    });

    //  title
    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // boxes 
    tl.fromTo(
      [box1Ref.current, box2Ref.current, box3Ref.current],
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.1 },
      "-=0.3" 
    );
  }, []);
  return (
    <>
      <section className='class="relative w-full flex flex-col justify-center items-center py-[100px] px-4 sm:px-4 md:px-0 bg-[#1D293C] overflow-hidden rounded-3xl shadow-2xl mx-auto mt-10'>
        <div className="relative z-10 flex flex-col items-center w-full">
          <span className="mb-6 px-4 py-1 rounded-full bg-[#15B270] text-white text-sm font-semibold">
            Pricing Plans
          </span>
          <h2
            ref={titleRef}
            className="text-white text-[1.775rem] sm:text-4xl md:text-5xl font-semibold text-center mb-12 max-w-[700px] mx-auto text-balance"
          >
            Befer helps teams of all sizes build better collaboration
          </h2>
        </div>

        <div className="grid grid-cols-1 px-4 md:px-4 md:grid-cols-3 gap-6 mb-16 w-full max-w-6xl">
          <div
            ref={box1Ref}
            className="relative bg-[#15B270] rounded-2xl p-[32px] flex flex-col justify-between min-h-[500px] shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer "
          >
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none ">
              <svg width="100%" height="100%" className="w-full h-full">
                <defs>
                  <pattern
                    id="pricing-card-grid-0"
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
                  fill="url(#pricing-card-grid-0)"
                ></rect>
              </svg>
            </div>
            <div className="mb-6 relative z-10">
              <h2 className="text-white text-2xl font-bold mb-2 ">Basic</h2>
              <p className="text-white/90 text-xs leading-relaxed ">
                For individuals and teams getting started
              </p>
            </div>
            <div className="mb-8 flex-grow relative z-10">
              <h4 className="text-white font-semibold mb-4 ">
                Features Included
              </h4>

              <ul className="space-y-3">
                <li className="flex items-center text-white/90 text-sm ">
                  <svg
                    className="w-4 h-4 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <circle cx="10" cy="10" r="3"></circle>
                  </svg>
                  Transactions
                </li>
                <li className="flex items-center text-white/90 text-sm ">
                  <svg
                    className="w-4 h-4 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <circle cx="10" cy="10" r="3"></circle>
                  </svg>
                  Invoice Generation
                </li>
                <li className="flex items-center text-white/90 text-sm ">
                  <svg
                    className="w-4 h-4 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <circle cx="10" cy="10" r="3"></circle>
                  </svg>
                  Orders Management
                </li>
                <li className="flex items-center text-white/90 text-sm ">
                  <svg
                    className="w-4 h-4 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <circle cx="10" cy="10" r="3"></circle>
                  </svg>
                  Workers Management
                </li>
                <li className="flex items-center text-white/90 text-sm ">
                  <svg
                    className="w-4 h-4 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <circle cx="10" cy="10" r="3"></circle>
                  </svg>
                  AI Image Creation
                </li>
              </ul>
            </div>
            <div className="mt-auto relative z-10">
              <div className="flex items-baseline mb-2">
                <span className="text-white text-3xl font-bold ">$79</span>
                <span className="text-white/90 text-lg ml-1 ">/month</span>
              </div>
              <p className="text-white/80 text-sm ">
                Per month Billed annually
              </p>
            </div>
          </div>

          <div
            ref={box2Ref}
            className="relative bg-[#6230C6] rounded-2xl p-[32px] flex flex-col justify-between min-h-[500px] shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer "
          >
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none ">
              <svg width="100%" height="100%" className="w-full h-full">
                <defs>
                  <pattern
                    id="pricing-card-grid-0"
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
                  fill="url(#pricing-card-grid-0)"
                ></rect>
              </svg>
            </div>
            <div className="mb-6 relative z-10">
              <h2 className="text-white text-2xl font-bold mb-2 ">Standard</h2>
              <p className="text-white/90 text-xs leading-relaxed ">
                For individuals and teams getting started
              </p>
            </div>
            <div className="mb-8 flex-grow relative z-10">
              <h4 className="text-white font-semibold mb-4 ">
                Features Included
              </h4>

              <ul className="space-y-3">
                <li className="flex items-center text-white/90 text-sm ">
                  <svg
                    className="w-4 h-4 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <circle cx="10" cy="10" r="3"></circle>
                  </svg>
                  Transactions
                </li>
                <li className="flex items-center text-white/90 text-sm ">
                  <svg
                    className="w-4 h-4 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <circle cx="10" cy="10" r="3"></circle>
                  </svg>
                  Invoice Generation
                </li>
                <li className="flex items-center text-white/90 text-sm ">
                  <svg
                    className="w-4 h-4 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <circle cx="10" cy="10" r="3"></circle>
                  </svg>
                  Orders Management
                </li>
                <li className="flex items-center text-white/90 text-sm ">
                  <svg
                    className="w-4 h-4 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <circle cx="10" cy="10" r="3"></circle>
                  </svg>
                  Workers Management
                </li>
                <li className="flex items-center text-white/90 text-sm ">
                  <svg
                    className="w-4 h-4 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <circle cx="10" cy="10" r="3"></circle>
                  </svg>
                  Leads Management
                </li>

                <li className="flex items-center text-white/90 text-sm ">
                  <svg
                    className="w-4 h-4 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <circle cx="10" cy="10" r="3"></circle>
                  </svg>
                  AI Calling Agent
                </li>
                <li className="flex items-center text-white/90 text-sm ">
                  <svg
                    className="w-4 h-4 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <circle cx="10" cy="10" r="3"></circle>
                  </svg>
                  SMS Marketing
                </li>
                <li className="flex items-center text-white/90 text-sm ">
                  <svg
                    className="w-4 h-4 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <circle cx="10" cy="10" r="3"></circle>
                  </svg>
                  AI Insights
                </li>
                <li className="flex items-center text-white/90 text-sm ">
                  <svg
                    className="w-4 h-4 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <circle cx="10" cy="10" r="3"></circle>
                  </svg>
                  Sign up for free
                </li>
                <li className="flex items-center text-white/90 text-sm ">
                  <svg
                    className="w-4 h-4 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <circle cx="10" cy="10" r="3"></circle>
                  </svg>
                  AI Image Creation
                </li>
              </ul>
            </div>
            <div className="mt-auto relative z-10">
              <div className="flex items-baseline mb-2">
                <span className="text-white text-3xl font-bold ">$159</span>
                <span className="text-white/90 text-lg ml-1 ">/month</span>
              </div>
              <p className="text-white/80 text-sm ">
                Per member, per month Billed annually
              </p>
            </div>
          </div>

          <div
            ref={box3Ref}
            className="relative  bg-[#AA792B] rounded-2xl p-[32px] flex flex-col justify-between min-h-[500px] shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer backdrop-blur-[1px] "
          >
            <div className="absolute inset-0 opacity-[0.2]  pointer-events-none ">
              <svg width="100%" height="100%" className="w-full h-full">
                <defs>
                  <pattern
                    id="pricing-card-grid-2"
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
                  fill="url(#pricing-card-grid-2)"
                ></rect>
              </svg>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/30 to-black/40 backdrop-blur-[1px] flex items-center justify-center z-20">
              <div className="text-center">
                <span className="inline-block bg-gradient-to-r from-white/20 to-white/30 text-white text-2xl font-bold px-8 py-3 rounded-full backdrop-blur-xs border border-white/30 shadow-lg">
                  Coming Soon
                </span>
                <div className="mt-4 text-white/80 text-sm font-medium">
                  Get ready for something amazing
                </div>
              </div>
            </div>

            <div className="mb-6 relative z-10">
              <h3 className="text-white text-2xl font-bold mb-2 drop-shadow-none">
                Premium
              </h3>
              <p className="text-white/90 text-sm leading-relaxed drop-shadow-none">
                Coming Soon
              </p>
            </div>

            <div className="mb-8 flex-grow relative z-10">
              <h4 className="text-white font-semibold mb-4 drop-shadow-none">
                Features Included
              </h4>

              <ul className="space-y-3">
                {" "}
                <li className="flex items-center text-white/90 text-sm drop-shadow-none ">
                  <svg
                    className="w-4 h-4 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <circle cx="10" cy="10" r="3"></circle>
                  </svg>
                  Advanced Analytics
                </li>
                <li className="flex items-center text-white/90 text-sm drop-shadow-none ">
                  <svg
                    className="w-4 h-4 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <circle cx="10" cy="10" r="3"></circle>
                  </svg>
                  Custom Integrations
                </li>
                <li className="flex items-center text-white/90 text-sm drop-shadow-none ">
                  <svg
                    className="w-4 h-4 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <circle cx="10" cy="10" r="3"></circle>
                  </svg>
                  Priority Support
                </li>
                <li className="flex items-center text-white/90 text-sm drop-shadow-none ">
                  <svg
                    className="w-4 h-4 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <circle cx="10" cy="10" r="3"></circle>
                  </svg>
                  Advanced AI Features
                </li>
                <li className="flex items-center text-white/90 text-sm drop-shadow-none ">
                  <svg
                    className="w-4 h-4 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <circle cx="10" cy="10" r="3"></circle>
                  </svg>
                  Enterprise Security
                </li>
              </ul>
            </div>

            <div className="mt-auto relative z-10">
              <div className="flex items-baseline mb-2">
                <span className="text-white text-3xl font-bold ">$600</span>
                <span className="text-white/90 text-lg ml-1 ">/month</span>
              </div>
              <p className="text-white/80 text-sm ">
                Stay tuned for our premium features
              </p>
            </div>
          </div>
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

export default Pricing;

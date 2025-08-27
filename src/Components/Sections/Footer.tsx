import Image from "next/image";
import React from "react";
import bg from "../Assets/Images/Star.svg";

const Footer = () => {
  return (
    <>
      <footer className="relative w-full mx-auto px-0 py-16 rounded-3xl bg-[#1D293C] overflow-hidden mx-4 flex items-center justify-center min-h-[420px]">
        <Image
          src={bg}
          alt="star-bg"
          className="absolute left-0 top-1/2 -translate-y-1/2 h-[394px] w-[376px] object-contain select-none pointer-events-none hidden md:block"
        />
        <Image
          src={bg}
          alt="star-bg"
          className="absolute right-0 top-1/2 -translate-y-1/2 h-[394px] w-[376px] object-contain select-none pointer-events-none hidden md:block"
        />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-12 justify-items-start">
          <div className="w-full">
            <h2 className="text-white text-2xl font-bold mb-6">Product</h2>
            <ul className="space-y-4 text-gray-300 cursor-pointer">
              <li className="text-white/80 hover:text-white transition-colors">
                Features
              </li>
              <li className="text-white/80 hover:text-white transition-colors">
                Pricing
              </li>
              <li className="text-white/80 hover:text-white transition-colors">
                Reviews
              </li>
              <li className="text-white/80 hover:text-white transition-colors">
                iOS App
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-2xl font-bold mb-6">Support</h3>

            <ul className="space-y-4 text-gray-300">
              <li className="cursor-not-allowed">Help Center</li>
              <li className="cursor-not-allowed">Server status</li>
              <li className="cursor-not-allowed">Updates</li>
              <li className="cursor-not-allowed">Report a Bug</li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Blog
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-2xl font-bold mb-6">Policies</h3>

            <ul className="space-y-4 text-gray-300">
              <li className="hover:text-white transition-colors cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Terms of Service
              </li>
            </ul>
          </div>

          <div className="col-span-2 w-full">
            <h3 className="text-white text-2xl font-bold mb-6">Subscribe</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="rounded-full px-5 py-2 bg-white text-gray-800 placeholder-gray-400 focus:outline-none flex-1 min-w-5"
                />
                <button className="rounded-full bg-blue-600 text-white px-6 py-2 font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="w-full py-6 flex flex-col max-w-6xl mx-auto px-0 md:flex-row items-center justify-between gap-4 md:px-0">
        <span className="text-gray-400 text-sm">
          Copyright © 2025 Befer | All Rights Reserved.
        </span>
        <div className="flex gap-4">
          <span className="rounded-full bg-[#232F3E] w-10 h-10 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 320 512"
              className="text-white text-lg"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
            </svg>
          </span>
          <span className="rounded-full bg-[#232F3E] w-10 h-10 flex items-center justify-center hover:bg-pink-500 transition-colors cursor-pointer">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              className="text-white text-lg"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
            </svg>
          </span>
          <span className="rounded-full bg-[#232F3E] w-10 h-10 flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              className="text-white text-lg"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
            </svg>
          </span>
          <span className="rounded-full bg-[#232F3E] w-10 h-10 flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 576 512"
              className="text-white text-lg"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
            </svg>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;

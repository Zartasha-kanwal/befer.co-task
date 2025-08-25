"use client";
import React, { useState } from "react";
import Image from "next/image";

type Tab = {
  id: number;
  label: string;
  img?: string;
  alt?: string;
};

const GifSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const tabs: Tab[] = [
    {
      id: 1,
      label: "1-Leads & Customers",
      img: "/gif/leadandcustomer.gif",
      alt: "Leads & Customers",
    },
    { id: 2, label: "2-AI Calling Agent" }, // Coming Soon
    {
      id: 3,
      label: "3-Orders & Tracking",
      img: "/gif/orderandtracking.gif",
      alt: "Orders & Tracking",
    },
    {
      id: 4,
      label: "4-Invoicing & Payments",
      img: "/gif/invoiceandpayment.gif",
      alt: "Invoicing & Payments",
    },
  ];

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="w-full flex flex-col items-center justify-center py-10 sm:py-14 md:py-16">
      {/* Tabs */}
      <div className="w-full max-w-4xl mx-auto mb-8 md:mb-12 overflow-x-auto scrollbar-hide">
        <div className="flex flex-wrap md:flex-nowrap w-full gap-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex flex-col items-center w-1/2 md:flex-1 px-2 sm:px-3 md:px-4 pb-3 sm:pb-4 transition-all duration-200 group whitespace-nowrap cursor-pointer"
            >
              <span
                className={` text-xs md:text-sm sm:text-base font-medium mb-1 ${
                  activeTab === tab.id ? "text-white" : "text-[#9CA3AF]"
                }`}
              >
                {tab.label}
              </span>
              <span
                className={`block h-[3px] w-full mt-2 rounded-full transition-all duration-200 ${
                  activeTab === tab.id ? "bg-[#C6F4BB]" : "bg-[#1D293C]"
                }`}
              ></span>
            </button>
          ))}
        </div>
      </div>

      {/* Content Display */}
      <div className="w-full max-w-4xl mx-auto flex justify-center">
        {activeTabData?.id === 2 ? (
          <div className="text-[#9CA3AF] text-lg  py-32  w-full h-auto max-h-[320px] sm:max-h-[400px] md:max-h-[500px] flex items-center justify-center">
            Coming Soon
          </div>
        ) : (
          activeTabData?.img && (
            <Image
              src={activeTabData.img}
              className={`object-contain rounded-2xl w-full h-auto max-h-[320px] sm:max-h-[400px] md:max-h-[500px] ${
                activeTabData.id === 4 ? "lg:px-[118px] rounded-2xl " : ""
              }`}
              width={800}
              height={600}
              alt={activeTabData.alt || ""}
              unoptimized
              priority
            />
          )
        )}
      </div>
    </section>
  );
};

export default GifSection;

import Image from "next/image";
import React from "react";
import googleplay from "../Assets/Images/googleplay.svg";
import mobile_app from "../Assets/Images/befer-mobile-app.png";

const MobileApp = () => {
  return (
    <>
      <section className="relative bg-[#0058FF] rounded-3xl overflow-hidden min-h-[600px] flex lg:flex-row flex-col lg:items-end justify-center px-4 sm:px-6 md:px-8 py-16 md:py-24 md:pb-0 pb-0  mb-16 md:mb-24">
        <div className="flex flex-col  gap-12 lg:gap-16 items-center lg:max-w-[80%]">
          <div className="text-white space-y-8 pb-0 lg:pb-16">
            <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 text-sm font-medium text-white">
              Befer Mobile App
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
                Your business,<br></br>always at hand.
              </h2>
              <p className="text-xl text-white leading-relaxed max-w-lg">
                Manage schedules, clients, and payments <br></br>—all from your
                phone.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-white">Real-time Notifications</span>
              <span className="text-white">Schedule & Reschedule Jobs</span>
              <span className="text-white">Create Invoices</span>
            </div>

            <div className="flex flex-row gap-3 pt-4 justify-start">
              <Image
                src={googleplay}
                alt="googleplay"
                className="h-10 sm:h-14 w-auto"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </div>
        </div>

        <div>
          <div className="  flex items-end justify-center h-full mt-[60px] lg:mt-[100px]  ">
            <div className=" h-full w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] ">
              <Image
                src={mobile_app}
                alt="Befer Mobile App Interface"
                className="w-full h-auto object-contain drop-shadow-xl "
                width={600}
                height={400}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileApp;

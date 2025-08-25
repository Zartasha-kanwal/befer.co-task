import React from "react";
import HeroLG from './HeroLG';
import HeroMobile from './HeroMobile';

const HeroSection = () => {
  return (
    <div className=" ">
      <div className="bg-[#0058FF] min-h-[600px]  xl:min-h-[700px] rounded-3xl  lg:-mt-12">
        {/* Mobile Hero */}
        <div className=" lg:hidden flex items-center justify-center pt-[64px] overflow-y-hidden ">
          <HeroMobile />
        </div>

        {/* Desktop Hero */}
        <div className="hidden lg:block">
          <HeroLG />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import React from "react";
import mobileImage from "../../Images/mobile1.png";

const HeroSection = () => {
  return (
    <div className=" w-full flex items-center justify-center bg-gradient-to-br from-[#f8f7f4] via-[#d9f3f3] to-[#e9d9f3]">
      <div className=" flex px-[50px] pt-[40px] h-[90vh]">
        <div className="left w-1/2 ">
          <div className="heading flex justify-items-end flex-col mt-[20%]">
            <h1 className=" text-[#383838] font-Ibrand text-[56px] leading-[60px] font-[600] ">
              Virtual Automated Assistant Who’ll Take Care Your To-Do List For a
              Fraction
            </h1>
            <div className="button mt-[20px]">
              <button className="px-6 py-2 rounded-full text-[#0090C4] text-sm font-semibold bg-[rgba(255, 255, 255, 0.5)] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2),inset_-2px_-2px_4px_rgba(0,0,0,0.05),0_4px_10px_rgba(0,0,0,0.3)] hover:brightness-70 transition cursor-pointer">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="right w-1/2 h-full">
          <div className="hero-image w-full h-full">
            <img
              src={mobileImage}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

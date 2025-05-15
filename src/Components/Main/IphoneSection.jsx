import React from "react";
import bg from "../../Images/IphoneSection/BG.png";
import Iphone from "../../Images/IphoneSection/iPhone.png";
import time from "../../Images/IphoneSection/time.png";
import plane from "../../Images/IphoneSection/plane.png";
import global from "../../Images/IphoneSection/global.png";

const IphoneSection = () => {
  return (
    <div className="w-full py-[30px]">
      <div className="body w-full p-[30px] flex flex-wrap items-center">
        {/* LEFT SIDE */}
        <div className="left w-full md:w-[60%]">
          <div className="left-content w-[90%] xl:w-[60%] md:py-[50px] m-auto">
            <h1 className="font-Ibrand font-[400] text-[30px] lg:text-[48px] lg:leading-[48px] leading-[30px] text-[#000000]">
              Welcome To Aide Automated Virtual Assistant
            </h1>
            <p className="font-poppins lg:text-[13px] text-[11px] font-[400] text-[#5A5A5A] mt-[10px]">
              Welcome to your new daily routine enhancer—the Automated Personal
              Assistant System! Designed to streamline your productivity and
              ensure you never miss a beat in your busy schedule, our system
              integrates seamlessly with your existing tools to bring you daily
              summaries of your tasks, appointments, and much more. Start each
              day informed and ready to take on the world!
            </p>
            <div className="button mt-[20px]">
              <button className="px-6 py-2 rounded-full text-[#0090C4] text-sm font-semibold bg-[rgba(255,255,255,0.5)] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2),inset_-2px_-2px_4px_rgba(0,0,0,0.05),0_4px_10px_rgba(0,0,0,0.3)] hover:brightness-70 transition cursor-pointer">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="right w-full md:w-[40%] relative flex justify-center items-center   md:mt-0 mt-[60px]">
          {/* Background Glow Image */}
          <img
            src={bg}
            alt="Glow"
            className="relative w-[90%] xl:max-w-[350px]  lg:max-w-[280px] md:max-w-[250px] object-contain"
          />

          {/* Phone Image */}
          <img
            src={Iphone}
            alt="iPhone"
            className="absolute z-10 xl:w-[60%] lg:w-[65%] md:w-[80%] w-[80%] lg:top-[-25px] md:top-[-20px] top-[-22px] left-0  object-contain drop-shadow-2xl"
          />
        </div>
      </div>
      <div className="iphone-Section-Bottom">
        <div className="iphone-botom-body">
          <div className="isbb-item">
            <img
              src={time}
              alt=""
              className=" w-[60px] h-[60px] object-cover"
            />
            <h4 className=" font-poppins font-[400] text-[38px] text-[#101621]">
              500+
            </h4>
            <p className="font-poppins font-[400] text-[24px] text-[#000000]">
              Users
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IphoneSection;

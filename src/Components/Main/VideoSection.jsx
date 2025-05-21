import React from "react";
import macbook from "../../Images/VideoSection/Macbook.png";
import videoSec from "../../Video/assistant.mp4";

const VideoSection = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#f6fbe4] via-[#e9d9f3] to-[#e5cafc]] ">
      <div className="video-section-body xl:w-[80%] w-[90%] m-auto ">
        <div className="laptop-text w-full relative flex md:flex-row flex-col py-[50px]">
          <div className="lt-left lg:w-[60%] md:w-[50%]  w-full md:relative">
            <div className="ltl-image width-[100%]">
              <img src={macbook} alt="" className="w-full" />
            </div>
          </div>
          <div className="lt-right lg:w-[40%] md:w-[50%] w-full md:absolute md:top-[15%]  z-20 xl:right-[10%]  md:right-0 mt-[40px] md:mt-0">
            <div className="ltr-content text-center md:text-right ">
              <h2 className="  font-Ibrand text-[#000000] xl:text-[48px] lg:text-[40px] md:text-[36px] text-[28px] xl:leading-[48px] lg:leading-[40px] md:leading-[36px] leading-[28px] mb-3  ">
                Your Ultimate Productivity Partner
              </h2>
              <p className=" font-poppins text-[#5A5A5A] lg:text-[13px] text-[11px] font-[400] ">
                Experience seamless efficiency with Aide Automated Virtual
                Assistant—your go-to system for managing tasks, schedules, and
                appointments effortlessly. Designed to integrate smoothly into
                your daily routine, this virtual assistant ensures you stay
                organized, informed, and prepared to tackle your goals. Say
                goodbye to missed deadlines and hello to a smarter way of
                staying on top of everything. Let Aide revolutionize your
                productivity today!
              </p>
              <div className="button mt-[20px]  ">
                <button className="px-6 py-2 rounded-full text-[#0090C4] text-sm font-semibold bg-[rgba(255, 255, 255, 0.5)] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2),inset_-2px_-2px_4px_rgba(0,0,0,0.05),0_4px_10px_rgba(0,0,0,0.3)] hover:brightness-70 transition cursor-pointer">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="vsb-video py-[50px]">
          <h1 className=" text-[#323B4B] font-Ibrand md:text-[48px] text-[36px] text-center">
            How to Setup
          </h1>
          <div className="vsbv-vid w-full py-[40px] ">
            <video
              src=""
              className="w-full rounded-[24px] bg-white"
              autoPlay
              loop
              controls
            ></video>
            <div className="video-text-bottom md:w-[70%] w-[85%] m-auto text-center mt-10">
              <p className=" font-Inter text-[#5D6A83] font-[400] md:text-[18px] text-[14px] ">
                Quickly set up your virtual assistant with our simple,
                step-by-step guide. Enjoy seamless integration and start
                managing your tasks and schedule effortlessly in just minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;

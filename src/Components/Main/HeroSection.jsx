import React from "react";
import mobileImage from "../../Images/mobile1.png";
import image1 from "../../Images/MainBottom/mb1.png";
import image2 from "../../Images/MainBottom/mb2.png";
import image3 from "../../Images/MainBottom/mb3.png";
import image4 from "../../Images/MainBottom/mb4.png";
import image5 from "../../Images/MainBottom/mb5.png";
import image6 from "../../Images/MainBottom/mb6.png";

const images = [image1, image2, image3, image4, image5, image6];

const HeroSection = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#f8f7f4] via-[#d9f3f3] to-[#e9d9f3]">
      <div className=" flex lg:px-[50px] px-[20px] pt-[40px] lg:h-[90vh] md:h-[78vh] md:flex-row flex-col md:gap-0 gap-10">
        <div className="left lg:w-1/2 md:w-[60%] w-full ">
          <div className="heading  flex flex-col xl:mt-[20%] lg:mt-[10%] md:mt-[25%] md:text-left text-center mt-[10%]">
            <h1 className=" text-[#383838] font-Ibrand lg:text-[56px]  text-[30px] lg:leading-[60px] font-[600] ">
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
        <div className="right lg:w-1/2 md:w-[40%] w-full h-full ">
          <div className="hero-image w-full h-full">
            <img
              src={mobileImage}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      <div className="main-bottom w-full">
        <div className="main-bottom-body w-full flex flex-wrap">
          {images.map((image, index) => {
            const isSecondImage = index === 1; // image2 has index 1
            return (
              <div
                className={`main-bottom-item md:w-[16.6666%] w-[33.333%] p-5 border border-[#0000006E] flex items-center justify-center ${
                  isSecondImage ? "bg-[#565656]" : "bg-white"
                }`}
                key={index}
              >
                <div className="mainbottom-image w-[50%]">
                  <img src={image} alt="" className="w-full " />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

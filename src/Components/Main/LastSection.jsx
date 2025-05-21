import React from "react";
import FAQ from "./FAQ";
import OverLap from "./Overlap";
import Footer from "./Footer";

const LastSection = () => {
  return (
    <div className="relative  overflow-hidden bg-gradient-to-b from-[#fef6ff] via-[#f6faff] to-[#fffefc] pb-[50px] pt-[10px]">
      <div className="absolute top-[-100px] right-[-150px] w-[300px] h-[300px] bg-[#d5f0ff] rounded-full opacity-40 blur-3xl pointer-events-none"></div>
      <div className="absolute top-[50%] left-[-100px] w-[400px] h-[400px] bg-[#e7d9ff] rounded-full opacity-50 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-150px] left-[20%] w-[500px] h-[500px] bg-[#fff2d8] rounded-full opacity-40 blur-3xl pointer-events-none"></div>
      <div className="relative z-10 ">
        <FAQ />
        <OverLap />
        <Footer />
      </div>
    </div>
  );
};

export default LastSection;

import React from "react";
import unionImage from "../../Images/Overlap/Union.png";

const OverLap = () => {
  return (
    <section className=" w-full py-[30px]">
      <div className="body w-[80%] m-auto ">
        <div className="union w-full relative">
          <div className="union-image w-full relative">
            <img src={unionImage} alt="" className=" w-full object-contain" />
          </div>
          <div
            className="subtract bg-cover bg-center bg-no-repeat absolute top-0 w-full"
            style={{
              backgroundImage: "url('/Images/Overlap/Subtract.png')",
              height: "10vh", // this replaces invalid Tailwind class
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default OverLap;

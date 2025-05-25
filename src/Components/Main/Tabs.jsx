import React, { useState } from "react";

const slides = [
  {
    number: "01",
    title: "Centralized Information Management.",
    heading: "How to use",
    description:
      "Centralized information management, including calendar integration and task synchronization.",
  },
  {
    number: "02",
    title: "Automated Daily Summaries.",
    heading: "Automated Summaries",
    description:
      "Centralized information management, including calendar integration and task synchronization.",
  },
  {
    number: "03",
    title: "Real-Time Updates.",
    heading: "Real-Time Updates",
    description:
      "Centralized information management, including calendar integration and task synchronization.",
  },
  {
    number: "04",
    title: "Customizable Scheduling.",
    heading: "Customizable Scheduling.",
    description:
      "Centralized information management, including calendar integration and task synchronization.",
  },
];

const Tabs = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="w-full py-20 bg-white">
      <div className="flex max-w-[1500px] h-[60vh] mx-auto border border-gray-400 rounded-[50px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`transition-all duration-500 ease-in-out cursor-pointer relative border-r border-gray-300 last:border-r-0 ${
              activeSlide === index ? "flex-[5]" : "flex-[0.5]"
            } flex items-center justify-center`}
          >
            {/* Slide Left */}
            <div className="flex flex-col items-center justify-center h-[50vh] w-[20%] text-center">
              <h3 className="text-lg font-semibold mb-4">{slide.number}</h3>
              <h4 className="writing-mode-vertical-rl transform rotate-180 text-md font-medium tracking-wide text-gray-700 h-[44vh] px-2">
                {slide.title}
              </h4>
            </div>

            {/* Slide Right (visible only if active) */}
            {activeSlide === index && (
              <div className="w-[80%] flex flex-col justify-center items-center px-4">
                <h2 className="text-2xl font-semibold mb-4">{slide.heading}</h2>
                <div className="flex justify-between w-full">
                  <p className="w-[55%] text-gray-600 text-[16px] leading-6 font-[400] font-poppins px-2">
                    {slide.description}
                  </p>
                  <div className="w-[23%] flex flex-col items-center justify-center pr-6">
                    <a
                      href="#"
                      className="bg-[#b64b0b] text-white py-2 px-4 rounded-full text-[16px]"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
                <div className="absolute right-40 top-20 opacity-30 z-[-1]">
                  <img src="/images/Vector.png" alt="Gradient" />
                </div>
                <div className="w-[92%] h-[282px] bg-gray-200 mt-4 rounded-[30px]" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;

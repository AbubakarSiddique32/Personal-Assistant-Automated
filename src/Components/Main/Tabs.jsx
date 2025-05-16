import { useState } from "react";

const slides = [
  {
    id: 0,
    title: "How to use.",
    desc: "Detailed walkthrough of each feature, including calendar integration, task synchronization, and automated summaries.",
    sideLabel: "Centralized Information Management.",
    button: "Learn More",
  },
  {
    id: 1,
    title: "Automated Summaries.",
    desc: "Receive daily summaries with key tasks and appointments in one place.",
    sideLabel: "Automated Daily Summaries.",
    button: "Explore",
  },
  {
    id: 2,
    title: "Real-Time Updates.",
    desc: "Sync changes instantly across all your tools and platforms.",
    sideLabel: "Real-Time Updates.",
    button: "Discover",
  },
  {
    id: 3,
    title: "Custom Scheduling.",
    desc: "Organize your time with customizable scheduling tools and reminders.",
    sideLabel: "Customizable Scheduling.",
    button: "Start Now",
  },
  {
    id: 4,
    title: "Reporting Tools.",
    desc: "Generate PDF and CSV summaries from your data automatically.",
    sideLabel: "Smart Reporting & Exporting.",
    button: "Try Now",
  },
];

export default function Tabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex w-full max-w-6xl mx-auto mt-10 rounded-2xl overflow-hidden border border-gray-200">
      {slides.map((slide, index) => (
        <div
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`transition-all duration-500 ease-in-out cursor-pointer ${
            activeIndex === index ? "w-[70%] p-6 bg-white" : "w-[6%] bg-gray-50"
          }`}
        >
          {activeIndex === index ? (
            <div className="h-full flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2">{slide.title}</h2>
                <p className="text-sm text-gray-600 mb-4 max-w-md">
                  {slide.desc}
                </p>
                <button className="bg-orange-600 text-white px-4 py-1.5 text-sm rounded hover:bg-orange-700">
                  {slide.button}
                </button>
              </div>
              <div className="mt-6">
                <div className="w-full h-40 bg-gray-200 rounded flex items-center justify-center">
                  <img
                    src="/placeholder.png"
                    alt="Visual"
                    className="h-20 w-20"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full transform -rotate-90 text-[10px] font-medium whitespace-nowrap">
              {slide.sideLabel}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

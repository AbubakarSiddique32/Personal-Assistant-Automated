import { useState } from "react";

export default function Tabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 0,
      heading: "How to use.",
      subtext:
        "Detailed walkthrough of each feature, including calendar integration, task synchronization, and automated summaries.",
    },
    {
      id: 1,
      heading: "Summaries on Autopilot.",
      subtext:
        "Receive curated updates of your day based on tasks, calendar events, and notes.",
    },
    {
      id: 2,
      heading: "Stay Synced.",
      subtext:
        "Live updates across all workflows and tools to keep everyone aligned.",
    },
    {
      id: 3,
      heading: "Tailor Your Time.",
      subtext:
        "Create smart schedules with recurring tasks, reminders, and personal rules.",
    },
    {
      id: 4,
      heading: "Smart Notifications.",
      subtext:
        "Never miss important moments with priority-based alerts and custom triggers.",
    },
  ];

  return (
    <div className="flex w-full max-w-6xl mx-auto mt-10 rounded-xl overflow-hidden border border-gray-200 bg-white">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`transition-all duration-300 ease-in-out cursor-pointer group ${
            activeIndex === index ? "flex-[4]" : "flex-[1]"
          } relative h-[350px] border-r last:border-r-0 border-gray-200`}
          onClick={() => setActiveIndex(index)}
        >
          <div
            className={`p-6 h-full flex flex-col justify-center items-start transition-opacity duration-300 ${
              activeIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-xl font-bold mb-2">{slide.heading}</h2>
            <p className="text-gray-600 mb-4">{slide.subtext}</p>
            <button className="bg-orange-600 text-white text-sm px-4 py-2 rounded-full">
              Learn More
            </button>
          </div>

          {/* Vertical label for collapsed slides */}
          {activeIndex !== index && (
            <div className="absolute top-1/2 -rotate-90 origin-left left-[-40px] text-sm font-medium text-gray-500">
              0{index + 1}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

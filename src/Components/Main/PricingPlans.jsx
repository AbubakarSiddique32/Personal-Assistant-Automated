import React, { useState } from "react";
import { TiTick } from "react-icons/ti";

const PricingPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(1); // Middle plan preselected

  const plans = [
    {
      name: "Trial",
      price: "$X.XX",
      period: "/week",
      subtitle: "Save ~40% with annual billing",
      btn: "Try for Free",
      features: ["Cancel anytime", "Premium with no limits", "Full support"],
    },
    {
      name: "Monthly",
      price: "$X.XX",
      period: "/month",
      subtitle: "Save ~60% with annual billing",
      btn: "Try for Free",
      popular: true,
      features: [
        "24-hour free trial then charge",
        "Cancel anytime",
        "Premium with no limits",
      ],
    },
    {
      name: "Annual",
      price: "$XX.XX",
      period: "/year",
      subtitle: "Best price",
      btn: "Try for Free",
      features: ["Cancel anytime", "Premium with no limits", "Premium support"],
    },
  ];

  return (
    <div className="py-16  w-full bg-gradient-to-tr from-purple-50 to-pink-50">
      <div className="text-center mb-12 md:px-0  px-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          Discover The Perfect Plan For You
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Multiple inclusive features area, scalable preferences across screen
          sizes.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center lg:gap-10 md:gap-5 gap-10 lg:px-4 md:px-1 px-4 xl:w-[80%] lg:w-[90%] w-[95%] mx-auto py-[30px] ">
        {plans.map((plan, index) => (
          <div
            key={index}
            onClick={() => setSelectedPlan(index)}
            className={`relative cursor-pointer flex flex-col justify-between border rounded-xl lg:px-6 md:px-2 px-6 py-8 lg:w-[29%] md:w-[33%] w-full transition-transform ${
              selectedPlan === index
                ? "scale-105 shadow-2xl border-[#0090C44D] border-[3px] py-[50px] "
                : "border-[#0090C44D] border-[3px]"
            } ${plan.popular ? "z-10" : "z-0"} bg-white`}
            style={
              selectedPlan !== index
                ? { boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.25)" }
                : {}
            }
          >
            {/* Popular Badge */}
            {plan.popular && (
              <span className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                Popular
              </span>
            )}

            {/* Plan Info */}
            <div className="text-center">
              <h4 className="text-[32px] text-[#1C1C1C] font-[400] font-Ibrand mb-[20px]">
                {plan.name}
              </h4>
              <h2 className="text-[40px] text-[#1C1C1C] font-[400] font-Ibrand">
                {plan.price}
                <span className="text-[16px] font-[400] font-Ibrand text-[#767575]">
                  {plan.period}
                </span>
              </h2>
              <p className="text-[16px] font-[400] text-[#0090C4] font-Sans ">
                {plan.subtitle}
              </p>
            </div>

            {/* Features */}
            <ul className="text-sm space-y-2 mt-[20px]">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className={`flex items-center font-Sans text-[16px] font-[400] gap-2 ${
                    selectedPlan === index ? "text-[#1C1C1C]" : "text-[#1C1C1C]"
                  }`}
                >
                  <TiTick className="text-black text-[16px] " /> {feature}
                </li>
              ))}
            </ul>

            {/* Button */}
            <div className="mt-6">
              <button
                className={
                  "w-full py-2  font-[500] text-[16px] font-Sans bg-[#0090C4] text-[#FDF2EC] rounded-[64px] transition "
                }
                style={
                  selectedPlan === index
                    ? {
                        background:
                          "linear-gradient(to right, #a2d8f1, #008edb)",
                      }
                    : {}
                }
              >
                {plan.btn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;

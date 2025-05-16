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
    <div className="py-16 bg-gradient-to-tr from-purple-50 to-pink-50">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">
          Discover The Perfect Plan For You
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Multiple inclusive features area, scalable preferences across screen
          sizes.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-6 px-4 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            onClick={() => setSelectedPlan(index)}
            className={`relative cursor-pointer flex flex-col justify-between border rounded-xl px-6 py-8 w-full max-w-sm mx-auto transition-all duration-300 ${
              selectedPlan === index
                ? "scale-105 shadow-2xl border-blue-500"
                : "border-gray-200 hover:shadow-md"
            } ${plan.popular ? "z-10" : "z-0"} bg-white`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <span className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                Popular
              </span>
            )}

            {/* Plan Info */}
            <div className="text-center">
              <h4 className="text-lg font-semibold">{plan.name}</h4>
              <h2 className="text-4xl font-bold">
                {plan.price}
                <span className="text-base font-medium text-gray-500">
                  {plan.period}
                </span>
              </h2>
              <p className="text-sm text-green-600 mt-1">{plan.subtitle}</p>
            </div>

            {/* Button */}
            <div className="mt-6">
              <button
                className={`w-full py-2 rounded-md font-semibold text-sm transition ${
                  selectedPlan === index
                    ? "bg-blue-600 text-white"
                    : "bg-white text-black border border-black"
                }`}
              >
                {plan.btn}
              </button>
            </div>

            {/* Divider */}
            <div className="my-4 h-[1px] bg-gray-200 w-full" />

            {/* Features */}
            <ul className="text-sm space-y-2">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className={`flex items-center gap-2 ${
                    selectedPlan === index ? "text-blue-700" : "text-gray-700"
                  }`}
                >
                  <TiTick className="text-green-500" /> {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;

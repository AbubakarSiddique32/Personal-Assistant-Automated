import React, { useState } from "react";
import weather from "../../../Images/Get Started/Pages/Image.png";

const WeatherUpdate = () => {
  const [unit, setUnit] = useState("celsius");
  const [frequency, setFrequency] = useState("");

  return (
    <div className="font-[Poppins]">
      {/* Main Section */}
      <main className="bg-gradient-to-br from-[#fef9eb] via-[#f2f5f0] to-[#f8f3fd] py-20 px-5">
        <div className="xl:w-[70%] md:w-[85%] w-full m-auto bg-white md:px-8 px-3 py-7  rounded-[50px]">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
            <img
              src={weather}
              alt="Client"
              className="w-[84px] h-[84px] rounded-full border border-red-900 object-cover"
            />
            <p className="text-[28px] font-poppins font-semibold text-[#1B2228]]">
              Scott Wisse
            </p>
          </div>

          <div className="mb-4">
            <p className="text-xl font-poppins font-bold text-[#1b2228]">
              Settings
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-blue-200 pb-4 mb-6">
            <div>
              <h4 className="font-semibold text-[#1B2228] font-poppins text-[17px]">
                Enable Weather Update
              </h4>
              <p className=" text-[#14242E9E] font-[400] text-[15px]">
                Turn on to receive notifications daily
              </p>
            </div>
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-500 relative after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-black after:border-black after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
            </label>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <label className="text-[13px] font-[600] font-poppins text-[#000000] ">
                Location
              </label>
              <select className="p-2 border rounded text-[#0000005C]">
                <option value="current">Use Current Location</option>
              </select>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex flex-col">
                <label className="text-[13px] font-[600] font-poppins text-[#000000]">
                  Unit
                </label>
                <select
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  className="p-2 border rounded text-[#0000005C]"
                >
                  <option value="celsius">Celsius</option>
                  <option value="fahrenheit">Fahrenheit</option>
                </select>
              </div>
              <div className="flex-1 flex flex-col">
                <label className="text-[13px] font-[600] font-poppins text-[#000000]">
                  Frequency
                </label>
                <select
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                  className="p-2 border rounded text-[#0000005C]"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="hourly">Hourly</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex md:justify-start justify-center   ">
              <div className="border-t  border-[#495F6E33] py-5">
                <button className=" border border-[#495F6E33] text-black py-2 px-6 rounded-[8px] mr-4">
                  Save
                </button>
                <button className="border border-[#495F6E33] text-black py-2 px-6 rounded-[8px]">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WeatherUpdate;

import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const WeatherUpdate = () => {
  const [unit, setUnit] = useState("celsius");
  const [frequency, setFrequency] = useState("");

  return (
    <div className="font-[Poppins]">
      {/* Main Section */}
      <main className="bg-[#f6ebfe] py-20 px-5">
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-[50px]">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
            <img
              src="/images/cl.png"
              alt="Client"
              className="w-[84px] h-[84px] rounded-full border border-red-900 object-cover"
            />
            <p className="text-2xl font-semibold text-[#1b2228]">Scott Wisse</p>
          </div>

          <div className="mb-4">
            <p className="text-lg font-bold text-[#1b2228]">Settings</p>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-blue-200 pb-4 mb-6">
            <div>
              <h4 className="text-[17px] font-bold">Enable Weather Update</h4>
              <p className="text-sm text-gray-600">
                Turn on to receive notifications daily
              </p>
            </div>
            <label className="relative inline-block w-11 h-6">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-full h-full bg-gray-300 rounded-full peer-checked:bg-blue-500 transition-all"></div>
              <div className="absolute top-[3px] left-[3px] w-[15px] h-[15px] bg-black rounded-full peer-checked:translate-x-5 transition-transform"></div>
            </label>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-bold mb-2">Location</label>
              <select className="p-2 border rounded">
                <option value="current">Use Current Location</option>
              </select>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex flex-col">
                <label className="text-sm font-bold mb-2">Unit</label>
                <select
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  className="p-2 border rounded"
                >
                  <option value="celsius">Celsius</option>
                  <option value="fahrenheit">Fahrenheit</option>
                </select>
              </div>
              <div className="flex-1 flex flex-col">
                <label className="text-sm font-bold mb-2">Frequency</label>
                <select
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                  className="p-2 border rounded"
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

            <div className="mt-6 flex gap-4">
              <button className="bg-blue-600 text-white py-2 px-6 rounded">
                Save
              </button>
              <button className="border border-gray-400 text-black py-2 px-6 rounded">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WeatherUpdate;

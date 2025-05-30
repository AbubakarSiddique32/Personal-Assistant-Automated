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
  const [menuOpen, setMenuOpen] = useState(false);
  const [unit, setUnit] = useState("celsius");
  const [frequency, setFrequency] = useState("");

  return (
    <div className="font-[Poppins]">
      {/* Header */}
      <header className="w-full bg-white/30">
        <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <FaBars
              className="text-xl cursor-pointer md:hidden"
              onClick={() => setMenuOpen(true)}
            />
            <Link to="/started">
              <img src="/images/get-logo.png" alt="Logo" className="h-8" />
            </Link>
          </div>
          <nav className="hidden md:flex gap-6 text-gray-600 text-sm">
            <Link className="hover:underline" to="#">
              Home
            </Link>
            <Link className="hover:underline" to="#">
              How it Works
            </Link>
            <Link className="hover:underline" to="#">
              Testimonial
            </Link>
            <Link className="hover:underline" to="#">
              Pricing
            </Link>
            <Link className="hover:underline" to="#">
              Settings
            </Link>
          </nav>
          <div className="hidden md:flex gap-4">
            <Link to="/log" className="text-black text-sm">
              Sign In
            </Link>
            <Link to="" className="text-black text-sm font-semibold">
              Get Started
            </Link>
          </div>
        </div>
        <div
          className={`fixed top-0 left-0 h-full w-[310px] bg-white p-5 z-50 shadow-lg transition-all duration-700 ease-in-out ${
            menuOpen ? "left-0" : "-left-full"
          }`}
        >
          <div className="flex justify-end">
            <FaTimes
              className="text-xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          </div>
          <ul className="mt-5 space-y-6 border-t pt-5 text-black text-lg">
            <li>
              <Link to="/started">Get-Started</Link>
            </li>
            <li>
              <Link to="/notification">Notification</Link>
            </li>
            <li>
              <Link to="/weather">Weather</Link>
            </li>
            <li>
              <Link to="/motivation">Motivation</Link>
            </li>
            <li>
              <Link to="/event">Event_update</Link>
            </li>
            <li>
              <Link to="/second-motivation">Health-Care</Link>
            </li>
            <li>
              <Link to="/notification">Assistant</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar</Link>
            </li>
          </ul>
        </div>
      </header>

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

      {/* Footer */}
      <footer className="bg-white px-5 pt-10 pb-5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <img
              src="/images/Footer-logo.png"
              alt="Footer Logo"
              className="mb-4"
            />
            <p className="text-sm mb-4">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system
            </p>
            <p className="text-xs">
              © 2022 Virtual Assistant. All Rights Reserved. With love by Elmous
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h2 className="font-bold mb-2">Services</h2>
              <ul className="text-sm space-y-1">
                <li>Personal Tasks</li>
                <li>Business Support Services</li>
                <li>Digital Marketing</li>
                <li>IT/Web Services</li>
                <li>Business Model</li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold mb-2">Terms of Use</h2>
              <ul className="text-sm space-y-1">
                <li>Terms & Conditions</li>
                <li>Refund Policy</li>
                <li>Privacy Policy</li>
                <li>Disclaimer</li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold mb-2">Social Media</h2>
              <div className="flex space-x-4">
                <FaFacebookF />
                <FaTwitter />
                <FaYoutube />
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WeatherUpdate;

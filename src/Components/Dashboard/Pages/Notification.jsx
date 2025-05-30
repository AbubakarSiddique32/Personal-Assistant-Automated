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

const DailyNotification = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-[Poppins]">
      {/* Main Section */}
      <main className="bg-gradient-to-br from-[#fef9eb] via-[#f2f5f0] to-[#f8f3fd] py-20 px-5">
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-[50px]">
          <h1 className="text-2xl font-bold mb-6">Daily Notifications</h1>

          <div className="flex items-center gap-6 mb-6">
            <img
              src="/images/cl.png"
              alt="Client"
              className="w-[84px] h-[84px] object-contain rounded-full border border-red-900"
            />
            <p className="text-2xl font-semibold text-[#1b2228]">Scott Wisse</p>
          </div>

          <div className="mb-8">
            <p className="text-xl font-bold text-[#1b2228]">Settings</p>
          </div>

          <div className="flex justify-between items-center bg-[#efefef] px-4 py-3 rounded mb-10">
            <div>
              <h4 className="font-semibold">Enable Daily Notifications</h4>
              <p className="text-sm">Turn on to receive notifications daily</p>
            </div>
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-500 relative after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
            </label>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start items-center gap-2 mb-2">
                <p className="font-bold text-[#416675]">LITTLE TEXT HERE</p>
                <img src="/images/Vector 1.png" alt="Arrow" />
              </div>
              <h2 className="text-[30px] md:text-[40px] font-semibold text-[#323b4b] mb-4">
                Stay Informed with Daily Notifications
              </h2>
              <p className="text-[#5d6a83] mb-6">
                Lorem ipsum dolor sit amet consectetur. Elementum risus tempor
                at vivamus curabitur viverra diam nec.
              </p>
              <Link
                to="/calendar"
                className="inline-block text-sm text-[#0090c4] bg-[#f3f3f3] py-3 px-4 rounded-lg shadow-inner"
              >
                Connect With Google Calendar
              </Link>
            </div>
            <div className="lg:w-1/2">
              <img
                src="/images/daily-noti.png"
                alt="Notification"
                className="max-w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DailyNotification;

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

        {/* Mobile Menu */}
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

export default DailyNotification;

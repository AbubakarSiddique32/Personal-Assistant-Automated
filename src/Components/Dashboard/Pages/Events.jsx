import React, { useState } from "react";

const EventNotification = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="bg-[#f6ebfe] min-h-screen">
      {/* Header */}
      <header className="bg-white/30 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <img src="/images/get-logo.png" alt="Logo" className="h-10" />
          <nav className="space-x-4 hidden md:flex">
            <a href="#" className="text-gray-700 hover:underline">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:underline">
              How it Works
            </a>
            <a href="#" className="text-gray-700 hover:underline">
              Testimonial
            </a>
            <a href="#" className="text-gray-700 hover:underline">
              Pricing
            </a>
            <a href="#" className="text-gray-700 hover:underline">
              Settings
            </a>
          </nav>
          <div className="space-x-4">
            <a href="/log.html" className="text-gray-700">
              Sign In
            </a>
            <a
              href="/account.html"
              className="bg-black text-white px-4 py-2 rounded"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Notification Section */}
      <main className="max-w-6xl mx-auto bg-white mt-8 p-6 rounded-3xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-[#1b2228]">
          Events Notifications
        </h1>

        {/* Profile */}
        <div className="flex items-center space-x-4 mb-4">
          <img
            src="/images/cl.png"
            alt="User"
            className="w-12 h-12 rounded-full border border-red-600 object-cover"
          />
          <p className="text-lg font-semibold text-[#1b2228]">Scott Wisse</p>
        </div>

        {/* Toggle Setting */}
        <div className="flex justify-between items-center bg-gray-100 p-4 rounded mb-6">
          <div>
            <h4 className="font-bold text-lg">Enable Event Notifications</h4>
            <p className="text-gray-600 text-sm">
              Turn on to receive notifications daily
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={enabled}
              onChange={() => setEnabled(!enabled)}
            />
            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-checked:bg-blue-500 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-black after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          </label>
        </div>

        {/* Event Info */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl text-[#323b4b] font-normal mb-4">
              Stay Organized with Event Alerts
            </h2>
            <p className="text-[#416675] text-base mb-6">
              Lorem ipsum dolor sit amet consectetur. Elementum risus tempor at
              vivamus curabitur viverra diam nec.
            </p>
            <a
              href="/calendar.html"
              className="inline-block bg-[#f3f3f3] shadow-inner text-[#0090c4] px-6 py-2 rounded-md text-sm font-medium"
            >
              Connect With Google Calendar
            </a>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/update.png"
              alt="Update"
              className="w-full object-contain"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-10 py-8 border-t">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4 text-sm text-gray-600">
          <div>
            <img
              src="/images/Footer-logo.png"
              alt="Footer Logo"
              className="h-10 mb-3"
            />
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born.
            </p>
            <p className="mt-4 text-xs text-gray-400">
              © 2022 Virtual Assistant. With love by Elmous
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Services</h3>
            <ul className="space-y-1">
              <li>Personal Tasks</li>
              <li>Business Support Services</li>
              <li>Digital Marketing</li>
              <li>IT/Web Services</li>
              <li>Business Model</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Social Media</h3>
            <div className="flex space-x-4 text-xl">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-linkedin-in"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EventNotification;

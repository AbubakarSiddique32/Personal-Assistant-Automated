import React, { useState } from "react";

const EventNotification = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="bg-[#f6ebfe] min-h-screen">
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
    </div>
  );
};

export default EventNotification;

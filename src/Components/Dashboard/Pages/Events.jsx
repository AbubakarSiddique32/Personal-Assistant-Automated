import React, { useState } from "react";
import pageImage from "../../../Images/Get Started/Pages/Image.png";
import eveImage from "../../../Images/Get Started/Pages/Event.png";

const EventNotification = () => {
  return (
    <div className="font-[Poppins]">
      {/* Main Section */}
      <main className="bg-gradient-to-br from-[#fef9eb] via-[#f2f5f0] to-[#f8f3fd] py-20 px-5">
        <div className="xl:w-[70%] md:w-[85%] w-full m-auto bg-white md:px-8 px-3 py-7  rounded-[50px]">
          <h1 className="text-[28px] font-poppins font-bold mb-5">
            Events Notifications
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
            <img
              src={pageImage}
              alt="Client"
              className="w-[84px] h-[84px] object-contain rounded-full border border-red-900"
            />
            <p className="text-[28px] font-poppins font-semibold text-[#1B2228]]">
              Scott Wisse
            </p>
          </div>

          <div className="mb-8">
            <p className="text-xl font-poppins font-bold text-[#1b2228]">
              Settings
            </p>
          </div>

          <div className="flex md:flex-row flex-col justify-between  bg-[#EFEFEF] px-4 py-3 gap-2  mb-10">
            <div>
              <h4 className="font-semibold text-[#1B2228] font-poppins text-[17px]">
                Enable Event Notifications
              </h4>
              <p className=" text-[#14242E9E] font-[400] text-[15px]">
                Turn on to receive notifications daily
              </p>
            </div>
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-500 relative after:content-[''] after:absolute after:top-0.5 after:left-0.5  after:bg-black after:border-black after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
            </label>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-[30px] md:text-[40px] font-Ibrand font-semibold text-[#000000] mb-4">
                Stay Organized with Event Alerts
              </h2>
              <p className="text-[#5D6A83] font-Inter font-[400] text-[18px] mb-6">
                Stay informed about events with real-time notifications and
                seamless Google Calendar integration.
              </p>
              <div className="button mt-[20px]">
                <button className="px-6 py-2 rounded-full text-[#0090C4] text-sm font-semibold bg-[rgba(255, 255, 255, 0.5)] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2),inset_-2px_-2px_4px_rgba(0,0,0,0.05),0_4px_10px_rgba(0,0,0,0.3)] hover:brightness-70 transition cursor-pointer">
                  Connect With Google Calander
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src={eveImage}
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

export default EventNotification;

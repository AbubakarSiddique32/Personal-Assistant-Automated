import React from "react";
import pageImage from "../../../Images/Get Started/Pages/Image.png";

const HealthCare = () => {
  return (
    <main className="bg-gradient-to-br from-[#fef9eb] via-[#f2f5f0] to-[#f8f3fd] py-20 px-5">
      <div className="xl:w-[70%] md:w-[85%] w-full m-auto bg-white md:px-8 px-3 py-7  rounded-[50px]">
        <h1 className="text-[28px] font-poppins font-bold mb-5">
          Health Care Reminder
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

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-blue-200 pb-4 mb-6">
          <div>
            <h4 className="font-semibold text-[#1B2228] font-poppins text-[17px]">
              Enable Daily Notifications
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

        <div className="bg-white rounded-[10px] w-full px-6 py-8">
          <h2 className="text-[22px] font-semibold text-[#333] mb-6 font-poppins">
            Personal Details
          </h2>

          {/* First row - Name & Age */}
          <div className="flex flex-wrap gap-5 mb-5">
            <div className="flex-1 min-w-[200px]">
              <label
                htmlFor="patient-name"
                className="text-sm text-[#555] font-medium block mb-1"
              >
                Patient Name
              </label>
              <input
                type="text"
                id="patient-name"
                placeholder="Enter your name"
                className="w-full p-2.5 text-[15px] text-[#14242e] bg-[#f3f7f9] rounded-md border border-[#ccc] cursor-pointer"
              />
            </div>
            <div className="flex-1 min-w-[200px]">
              <label
                htmlFor="age"
                className="text-sm text-[#555] font-medium block mb-1"
              >
                Age
              </label>
              <input
                type="text"
                id="age"
                placeholder="Enter your age"
                className="w-full p-2.5 text-[15px] text-[#14242e] bg-[#f3f7f9] rounded-md border border-[#ccc] cursor-pointer"
              />
            </div>
          </div>

          {/* Second row - Weight & Blood Group */}
          <div className="flex flex-wrap gap-5 mb-8">
            <div className="flex-1 min-w-[200px]">
              <label
                htmlFor="weight"
                className="text-sm text-[#555] font-medium block mb-1"
              >
                Weight
              </label>
              <input
                type="text"
                id="weight"
                placeholder="Enter your weight"
                className="w-full p-2.5 text-[15px] text-[#14242e] bg-[#f3f7f9] rounded-md border border-[#ccc] cursor-pointer"
              />
            </div>
            <div className="flex-1 min-w-[200px]">
              <label
                htmlFor="blood-group"
                className="text-sm text-[#555] font-medium block mb-1"
              >
                Blood Group
              </label>
              <input
                type="text"
                id="blood-group"
                placeholder="Enter your blood group"
                className="w-full p-2.5 text-[15px] text-[#14242e] bg-[#f3f7f9] rounded-md border border-[#ccc] cursor-pointer"
              />
            </div>
          </div>

          {/* Medicines section */}
          <h3 className="text-[14px] font-semibold text-[#222] mb-3">
            Medicines
          </h3>
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex flex-wrap md:flex-nowrap gap-4 mb-5">
              <input
                type="text"
                placeholder={`Medicine 0${num}`}
                className="flex-1 min-w-[150px] p-2.5 bg-[#f3f7f9] text-[#14242e] rounded-md border border-[#ccc] cursor-pointer"
              />
              <input
                type="text"
                placeholder={`Dosage 0${num}`}
                className="flex-1 min-w-[150px] p-2.5 bg-[#f3f7f9] text-[#14242e] rounded-md border border-[#ccc] cursor-pointer"
              />
              <input
                type="text"
                placeholder={`Time To Take 0${num}`}
                className="flex-1 min-w-[150px] p-2.5 bg-[#f3f7f9] text-[#14242e] rounded-md border border-[#ccc] cursor-pointer"
              />
            </div>
          ))}

          <div className="flex justify-end mb-10 mt-">
            <button className="bg-[#009DFF] hover:bg-[#007acc] text-white font-medium py-2 px-4 rounded-[8px] transition">
              Add Medicine
            </button>
          </div>

          {/* Save/Cancel Buttons */}
          <div className="mt-6 flex md:justify-start justify-center    ">
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
  );
};

export default HealthCare;

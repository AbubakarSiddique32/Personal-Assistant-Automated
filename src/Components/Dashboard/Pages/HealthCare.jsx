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

        <div className="flex md:flex-row flex-col justify-between  bg-[#EFEFEF] px-4 py-3 gap-2  mb-10">
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

        <div className="bg-white rounded-[10px] w-full">
          <h2 className="text-[22px] font-semibold text-[#333] mb-6 font-poppins">
            Personal Details
          </h2>
          <div className="flex flex-wrap gap-5 mb-5">
            <div className="flex-1 min-w-[150px]">
              <label
                htmlFor="patient-name"
                className="text-[13px] text-[#555] font-medium font-poppins mb-1 block"
              >
                Patient Name
              </label>
              <input
                type="text"
                id="patient-name"
                placeholder="Enter your name"
                className="w-full p-2.5 text-[15px] text-[#14242e66] bg-[#ebf0f3] rounded-[5px] border border-[#ddd] opacity-85 cursor-pointer"
              />
            </div>
            <div className="flex-1 min-w-[150px]">
              <label
                htmlFor="age"
                className="text-[13px] text-[#555] font-medium font-poppins mb-1 block"
              >
                Age
              </label>
              <input
                type="text"
                id="age"
                placeholder="Enter your age"
                className="w-full p-2.5 text-[15px] text-[#14242e66] bg-[#ebf0f3] rounded-[5px] border border-[#ddd] opacity-85 cursor-pointer"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-5 mb-5">
            <div className="flex-1 min-w-[150px]">
              <label
                htmlFor="weight"
                className="text-[13px] text-[#555] font-medium font-poppins mb-1 block"
              >
                Weight
              </label>
              <input
                type="text"
                id="weight"
                placeholder="Enter your weight"
                className="w-full p-2.5 text-[15px] text-[#14242e66] bg-[#ebf0f3] rounded-[5px] border border-[#ddd] opacity-85 cursor-pointer"
              />
            </div>
            <div className="flex-1 min-w-[150px]">
              <label
                htmlFor="blood-group"
                className="text-[13px] text-[#555] font-medium font-poppins mb-1 block"
              >
                Blood Group
              </label>
              <input
                type="text"
                id="blood-group"
                placeholder="Enter your blood group (e.g., A+, O-)"
                className="w-full p-2.5 text-[15px] text-[#14242e66] bg-[#ebf0f3] rounded-[5px] border border-[#ddd] opacity-85 cursor-pointer"
              />
            </div>
          </div>
          <h3 className="text-[13px] font-medium text-[#1b2228] font-poppins">
            Medicines
          </h3>
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="flex flex-col md:flex-row justify-between py-2 gap-2"
            >
              <input
                type="text"
                placeholder={`Medicine 0${num}`}
                className="md:w-[227px] h-[31px] bg-[#ebf0f3] opacity-85 text-center md:text-start cursor-pointer rounded"
              />
              <input
                type="text"
                placeholder={`Dosage 0${num}`}
                className="md:w-[227px] h-[31px] bg-[#ebf0f3] opacity-85 text-center cursor-pointer rounded"
              />
              <input
                type="text"
                placeholder={`Time To Take 0${num}`}
                className="md:w-[227px] h-[31px] bg-[#ebf0f3] opacity-85 text-center md:text-start cursor-pointer rounded"
              />
            </div>
          ))}
          <div className="flex justify-end mt-4 mb-12">
            <button className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-white hover:text-black border hover:border-[#14242e] transition">
              Add Medicine
            </button>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-2 bg-gray-200 text-[#333] rounded hover:bg-blue-700 hover:text-white font-medium">
              Save
            </button>
            <button className="px-5 py-2 bg-gray-200 text-[#333] rounded hover:bg-blue-700 hover:text-white font-medium">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HealthCare;

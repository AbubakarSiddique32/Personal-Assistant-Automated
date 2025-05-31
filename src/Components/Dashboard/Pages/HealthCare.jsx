import React from "react";

const HealthCare = () => {
  return (
    <main className="bg-gradient-to-br from-[#fef9eb] via-[#f2f5f0] to-[#f8f3fd] py-20 px-5">
      <div className="xl:w-[70%] md:w-[85%] w-full m-auto bg-white md:px-8 px-3 py-7  rounded-[50px]">
        <div className="mb-4">
          <h1 className="text-[28px] font-bold text-[#1b2228] font-poppins">
            Health Care Reminder
          </h1>
        </div>
        <div className="flex items-center w-full my-6" id="direction">
          <div className="w-[84px]">
            <img
              src="images/cl.png"
              alt=""
              className="rounded-full border border-red-800 object-cover"
            />
          </div>
          <p className="ml-4 text-[28px] font-semibold text-[#1b2228] font-poppins">
            Scott Wisse
          </p>
        </div>
        <div className="mb-4">
          <p className="text-[20px] font-bold text-[#1b2228] font-poppins">
            Settings
          </p>
        </div>
        <div className="flex justify-between items-center border-b border-blue-200 pb-6 mb-6">
          <div>
            <h4 className="text-[17px] font-bold font-poppins text-[#1b2228]">
              Enable Weather Update
            </h4>
            <p className="text-[15px] text-[#666] font-poppins mt-1">
              Turn on to receive notifications daily
            </p>
          </div>
          <label className="relative inline-block w-[46px] h-[24px]">
            <input type="checkbox" className="hidden" />
            <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#ccc] rounded-full transition-all before:absolute before:content-[''] before:h-[15px] before:w-[15px] before:left-[3px] before:bottom-[5px] before:bg-black before:rounded-full before:transition-all peer-checked:bg-blue-500 peer-checked:before:translate-x-[25px]" />
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

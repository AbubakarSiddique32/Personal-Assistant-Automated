import React from "react";
import chatbot from "../../Images/chatbot.png";

const Chatbot = () => {
  return (
    <div className="w-full py-[80px]">
      <div className="body xl:w-[80%] w-[90%]  m-auto flex md:flex-row flex-col md:gap-0 gap-10">
        <div className="left md:w-1/2 w-full">
          <div className="content md:text-left text-center">
            <h1 className=" font-Ibrand xl:text-[48px] lg:text-[40px] xl:leading-[60px] lg:leading-[50px]  md:text-[30px] md:leading-[40px] text-[24px] leading-[30px] font-[600] text-[#000000] mb-3">
              Seamless Interaction with Your Virtual Assistant
            </h1>
            <p className=" font-poppins font-[400] lg:text-[12px] text-[11px] text-[#5A5A5A] lg:pr-0 md:pr-[16px]">
              Meet your Automated Virtual Assistant, your ultimate productivity
              partner designed to simplify and enhance your daily routine. This
              intuitive assistant adapts to your personal needs, seamlessly
              managing your schedule, organizing tasks, and sending timely
              reminders. Whether you're juggling meetings, appointments, or
              personal to-dos, it ensures nothing slips through the cracks. Its
              user-friendly interface and smart interaction system make
              communication effortless, saving you time and energy. Ideal for
              busy professionals, students, or anyone seeking better
              organization, the assistant integrates effortlessly into your
              workflow, helping you stay on track and achieve more. With
              real-time assistance and proactive features, it’s like having a
              personal assistant at your fingertips. Embrace a smarter, more
              efficient way of managing your life today
            </p>
            <div className="button mt-[20px]  ">
              <button className="px-6 py-2 rounded-full text-[#0090C4] text-sm font-semibold bg-[rgba(255, 255, 255, 0.5)] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2),inset_-2px_-2px_4px_rgba(0,0,0,0.05),0_4px_10px_rgba(0,0,0,0.3)] hover:brightness-70 transition cursor-pointer">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="right md:w-1/2  w-full flex items-center justify-center ">
          <div className="right-image lg:w-[80%] w-full m-auto  ">
            <img src={chatbot} alt="" className=" w-full object-cover h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;

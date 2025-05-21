import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const faqs = [
  {
    question: "What is the Automated Virtual Assistant System?",
    answer:
      "Yes, NFTs can be sold across multiple platforms, as long as they are supported by those platforms. However, our marketplace offers exclusive features that enhance your selling and buying experience.",
  },
  {
    question: "How does it work?",
    answer:
      "The assistant uses AI to understand tasks, schedule meetings, manage reminders, and automate repetitive work based on your commands.",
  },
  {
    question: "What can I do with it?",
    answer:
      "You can automate your calendar, emails, task lists, and even control smart devices, saving hours each week.",
  },
  {
    question: "How accurate is the AI Assistant? Can I trust its answers?",
    answer:
      "While no AI is perfect, our assistant is trained on verified data and provides high-accuracy responses. Still, human review is encouraged for critical decisions.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleIndex = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className=" w-full">
      <section className=" lg:w-[80%] md:w-[90%] w-[100%] m-auto md:px-4 px-5 py-10">
        <div className="mb-10 flex justify-between md:flex-row flex-col md:px-0 px-3">
          <h2 className="lg:text-[48px] md:text-[33px]  text-[26px] font-[600] font-Ibrand text-[#000000] mb-3">
            Frequently Asked Questions
          </h2>
          <div className="para md:w-[30%]">
            <p className="text-[#000000] lg:text-[14px]  md:text-[11px] text-[11px] mt-4 font-poppins font-[300]">
              FAQs, short for Frequently Asked Questions, is a section on
              websites or platforms where common questions.
            </p>
          </div>
        </div>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`transition-all duration-300 mb-4 rounded-[55px] px-3 lg:py-5 md:py-2 py-1 ${
              activeIndex === index
                ? "bg-gradient-to-r from-[#95D4EA] to-[#0090C4] text-white  border  border-[#0090C4]"
                : "bg-white text-black   border  border-[#777777]"
            }`}
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex items-center justify-between gap-3 font-Ibrand  px-6 py-5 text-left lg:text-[24px]  md:text-[20px] text-[16px] font-[600] focus:outline-none"
            >
              {faq.question}
              <span className="text-xl flex items-center justify-center text-[20px] bg-black text-white rounded-full p-2">
                {activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </button>

            {activeIndex === index && (
              <div className="px-6 pr-[70px] pb-6  md:text-[15px] text-[12px] font-poppins font-[400] text-white">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default FAQ;

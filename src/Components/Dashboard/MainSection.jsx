import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import imageIcon from "../../Images/Get Started/health.jpeg";

const services = [
  {
    title: "Daily Notifications",
    desc: "Stay on top of your day with customized daily notifications. Get timely reminders for tasks, meetings, and important updates, ensuring you never miss a beat. With personalized alerts tailored to your needs, managing your schedule has never been easier. Keep everything organized and enjoy the peace of mind that comes with staying informed every step of the way.",
    href: "notification.html",
    img: imageIcon,
    bg: "bg-blue-100",
  },
  {
    title: "Weather Update",
    desc: "Prepare for your day with precise and reliable weather updates. Whether it’s sunshine, rain, or snow, stay informed with real-time forecasts that help you plan your activities accordingly. From your morning commute to weekend plans, these updates ensure you’re always ready for whatever the day brings. Make weather surprises a thing of the past with accurate insights.",
    href: "weather.html",
    img: imageIcon,
    bg: "bg-pink-100",
  },
  {
    title: "Motivational",
    desc: "Brighten your day with daily motivational messages crafted to inspire and uplift. These thoughtful quotes and affirmations provide the encouragement you need to tackle challenges, stay focused, and achieve your goals. Whether you’re starting a new project or simply need a boost, these positive words will keep you motivated and ready to conquer whatever comes your way.",
    href: "motivation.html",
    img: imageIcon,
    bg: "bg-red-100",
  },
  {
    title: "Events Updates",
    desc: "Stay informed and prepared with instant updates on events, appointments, and meetings. From work commitments to personal gatherings, never miss an important occasion again. Your virtual assistant keeps track of your schedule, ensuring you’re always organized and ready. With effortless event management, you can focus on enjoying the moment without worrying about missing anything important.",
    href: "event.html",
    img: imageIcon,
    bg: "bg-green-100",
  },
  {
    title: "Health Care Reminder",
    desc: "Take charge of your health with timely reminders for medications, doctor appointments, and fitness routines. This personalized health assistant ensures you never forget important wellness tasks. Stay consistent with your self-care habits, improve your health, and maintain a balanced lifestyle. Simplify health management with automated reminders that make prioritizing your well-being effortless and stress-free.",
    href: "second-motivation.html",
    img: imageIcon,
    bg: "bg-yellow-100",
  },
  {
    title: "Personal Assistant",
    desc: "Experience the convenience of a virtual personal assistant that handles your day-to-day tasks with precision. From managing schedules to organizing to-dos, this smart tool adapts to your needs seamlessly. It saves time, boosts productivity, and makes juggling responsibilities easier than ever. Whether it’s work or personal life, your assistant ensures you stay organized and focused on what matters most.",
    href: "assistant.html",
    img: imageIcon,
    bg: "bg-purple-100",
  },
];

const MainSection = () => {
  return (
    <div className=" bg-gradient-to-br from-[#f6fbe4] via-[#e9d9f3] to-[#e5cafc]] px-4 py-10">
      <div className="max-w-screen-xl mx-auto">
        {/* Top Headline */}
        <div className="heading bg-white py-10 px-5 rounded-full flex items-center justify-center w-[90%] m-auto">
          <h1 className="md:text-[32px] lg:text-[48px] text-[28px] font-[400] font-Ibrand text-center ">
            Headline of Website Will Goes Here in
          </h1>
        </div>

        {/* What Can I Do For You */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-10 pt-10 w-[80%] m-auto">
          <h2 className="md:text-3xl text-2xl font-semibold font-Inter mb-4 lg:mb-0">
            What Can I Do For You?
          </h2>
          <a
            href="#"
            className="bg-black text-white px-6 py-2 rounded-[32px] font-poppins text-[13px] hover:bg-gray-800 transition"
          >
            See all services
          </a>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-20 w-[80%] m-auto">
          {services.map((item, i) => (
            <a
              href={item.href}
              key={i}
              className={`${item.bg} p-6 rounded-lg shadow-md transition hover:shadow-xl`}
            >
              <div className="flex justify-between items-center mb-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-14 h-14 rounded object-cover"
                />
                <FaArrowRightLong className=" w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simplify Your Day with Smarter <br /> Solutions
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-6">
            Discover the power of automation and efficiency with our innovative
            virtual assistant. Designed to streamline your tasks, organize your
            schedule, and maximize productivity.
          </p>
          <a
            href="#"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Button
          </a>
        </div>

        {/* Illustration Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["img1.png", "img2.png", "img3.png", "img4.png"].map((img, i) => (
            <img
              key={i}
              src={`images/${img}`}
              alt={`Illustration ${i + 1}`}
              className="w-full h-40 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainSection;

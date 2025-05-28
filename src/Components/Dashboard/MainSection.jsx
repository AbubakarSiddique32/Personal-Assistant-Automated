import React from "react";

const services = [
  {
    title: "Daily Notifications",
    desc: "Stay updated with your daily tasks and important alerts.",
    href: "notification.html",
    img: "images/noti.jpg",
    bg: "bg-blue-100",
  },
  {
    title: "Weather Update",
    desc: "Get real-time weather forecasts tailored to your location.",
    href: "weather.html",
    img: "images/weather.jpeg",
    bg: "bg-pink-100",
  },
  {
    title: "Motivational",
    desc: "Receive inspiring messages to keep you going every day.",
    href: "motivation.html",
    img: "images/moti.jpeg",
    bg: "bg-red-100",
  },
  {
    title: "Events Updates",
    desc: "Never miss important events and meetings again.",
    href: "event.html",
    img: "images/event.jpg",
    bg: "bg-green-100",
  },
  {
    title: "Health Care Reminder",
    desc: "Timely health checkup and medicine intake alerts.",
    href: "second-motivation.html",
    img: "images/health.jpeg",
    bg: "bg-yellow-100",
  },
  {
    title: "Personal Assistant",
    desc: "Your smart AI assistant to handle everyday tasks.",
    href: "assistant.html",
    img: "images/personal.jpeg",
    bg: "bg-purple-100",
  },
];

const MainSection = () => {
  return (
    <div className="bg-gradient-to-br from-white via-[#f3f3f3] to-white px-4 py-10">
      <div className="max-w-screen-xl mx-auto">
        {/* Top Headline */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Headline of Website Will Goes Here{" "}
          <span className="text-blue-600">in</span>
        </h1>

        {/* What Can I Do For You */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
          <h2 className="text-3xl font-semibold mb-4 lg:mb-0">
            What Can I Do For You?
          </h2>
          <a
            href="#"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            See all services
          </a>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-20">
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
                <img src="images/long arrow.png" alt="arrow" className="w-6" />
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

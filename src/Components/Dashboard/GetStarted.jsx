import React from "react";

const GetStarted = () => {
  return (
    <div>
      <div className="headline-main px-4 py-10">
        <div className="headline-items text-center">
          <div className="headline-h1">
            <h1 className="text-4xl font-bold">
              Headline of website goes here
              <span id="in" className="text-blue-500">
                in
              </span>
            </h1>
          </div>
        </div>

        <div className="boxes-main mt-10">
          <div className="boxes-items-2">
            <div className="boxes-items grid lg:grid-cols-2 gap-6">
              <div className="box-text mb-8">
                <div className="box-head-two mb-4">
                  <h1 className="text-3xl font-semibold">
                    What Can I Do For You?
                  </h1>
                </div>
                <div className="box-btn">
                  <a
                    href="#"
                    className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    See all services
                  </a>
                </div>
              </div>

              <div className="box-background grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {[
                  {
                    title: "Daily Notifications",
                    img: "images/noti.jpg",
                    href: "notification.html",
                  },
                  {
                    title: "Weather Update",
                    img: "images/weather.jpeg",
                    href: "weather.html",
                  },
                  {
                    title: "Motivational",
                    img: "images/moti.jpeg",
                    href: "motivation.html",
                  },
                  {
                    title: "Events Updates",
                    img: "images/event.jpg",
                    href: "event.html",
                  },
                  {
                    title: "Health Care Reminder",
                    img: "images/health.jpeg",
                    href: "second-motivation.html",
                  },
                  {
                    title: "Personal Assistant",
                    img: "images/personal.jpeg",
                    href: "assistant.html",
                  },
                ].map((item, index) => (
                  <a
                    href={item.href}
                    className="sub-box block bg-white shadow-lg rounded-lg overflow-hidden"
                    key={index}
                  >
                    <div className="box-data p-4">
                      <div className="arrow-div flex items-center space-x-4 mb-4">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <img
                          id="long"
                          src="images/long arrow.png"
                          alt="arrow"
                          className="w-6"
                        />
                      </div>
                      <div className="daily-noti">
                        <h2 className="text-xl font-semibold mb-2">
                          {item.title}
                        </h2>
                        <p className="text-gray-600 text-sm">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form...
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="two-lines mt-16 text-center">
          <div className="lines-items">
            <div className="line-head">
              <h1 className="text-2xl md:text-4xl font-bold mb-4">
                Headline of Website Will Goes Here in Two Line and Centered
              </h1>
              <div className="line-p max-w-xl mx-auto mb-6">
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur. Elementum risus tempor
                  at vivamus curabitur viverra diam nec.
                </p>
              </div>
              <a
                href="#"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Button
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

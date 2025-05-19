import React from "react";

const reviews = [
  {
    name: "Great Experience!",
    text: "Absolutely love this assistant! It syncs perfectly with my schedule and keeps me organized all day. A must-have for anyone juggling a busy routine.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Smart Work!",
    text: "This virtual assistant has transformed my daily productivity. It's simple to use and integrates seamlessly with my tools. Highly recommended.",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Easy to Use!",
    text: "A lifesaver! It keeps my tasks on track and reminds me of everything I might otherwise forget. So reliable and easy to use.",
    avatar: "https://randomuser.me/api/portraits/men/61.jpg",
  },
  {
    name: "Good Jobs!",
    text: "Super impressed by how well this works. It's like having a personal assistant 24/7. My work and life feel more balanced already.",
    avatar: "https://randomuser.me/api/portraits/men/70.jpg",
  },
  {
    name: "I am so Happy!",
    text: "This assistant has made a huge difference in managing my time. From reminders to task organization, it does it all. A fantastic tool!",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full overflow-hidden py-10 bg-gradient-to-b from-white to-[#f1f9ff]">
      <div className="heading lg:w-1/2  md:w-[60%] w-full relative md:left-[10%] md:px-0 px-[16px] md:text-left text-center">
        <h1 className=" text-[28px] font-Ibrand md:text-4xl font-bold text-[#1A2232] mb-10 ">
          What Customers Say
        </h1>
        <p className="  font-poppins text-[12px] md:text-base  text-[#525252] mb-8">
          Discover how Aide Automated Virtual Assistant has transformed the
          lives of users by enhancing productivity, streamlining schedules, and
          simplifying daily tasks. Hear from satisfied customers today!
        </p>
      </div>

      <div
        className="testimonials-slides bg-contain bg-center bg-no-repeat rounded-xl"
        style={{
          backgroundImage: "url('src/Images/Background.png')",
        }}
      >
        {[0, 1].map((rowIndex) => (
          <div key={rowIndex} className="group overflow-hidden">
            <div
              className={`flex w-[200%]  ${
                rowIndex % 2 === 1
                  ? "flex-row-reverse animate-scroll-reverse group-hover:[animation-play-state:paused]"
                  : "animate-scroll group-hover:[animation-play-state:paused]"
              }`}
            >
              {Array(2)
                .fill(null)
                .flatMap((_, repeatIndex) =>
                  reviews.map((review, index) => (
                    <div
                      key={`${rowIndex}-${repeatIndex}-${index}`}
                      className="flex flex-none w-80 md:w-96 py-10 px-4 gap-3 transition-transform duration-300 hover:scale-105 "
                    >
                      <div className="body w-full flex">
                        <div className="image w-[20%]">
                          <img
                            src={review.avatar}
                            alt="avatar"
                            className=" w-12 h-12 rounded-full  border-2 border-white shadow-md"
                          />
                        </div>
                        <div className="w-[80%] flex flex-col px-[16px] py-[20px] rounded-xl shadow border border-[#82B2FB]  relative ">
                          <h3 className="text-[#299FF4] text-[21px]  font-poppins font-[600]  mb-2">
                            {review.name}
                          </h3>
                          <p className="text-[#525252] text-[14px]  font-poppins font-[500] leading-[18px]">
                            {review.text}
                          </p>
                          <div className="mt-4 text-[#1A2232] font-Inter  font-[600] text-[16px] flex items-center gap-2">
                            <span className="text-[#4e9ce3] font-Inter  font-[600] text-[18px]">
                              ★
                            </span>
                            5.0
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

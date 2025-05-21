import arrow from "../../Images/Overlap/arrow-img.png";

export default function VirtualAssistantHero() {
  return (
    <div className="w-full   md:py-[50px] md:pb-[100px] pb-[150px]">
      <div
        className=" xl:w-[80%] w-[90%] md:h-[500px] h-[300px]   m-auto bg-no-repeat bg-contain bg-center px-5"
        style={{
          backgroundImage: "url('src/Images/Overlap/assistant-back.png')",
        }}
      >
        <div
          className="relative md:h-[95%] h-[100%] md:w-[80%] w-[90%] flex items-center md:ml-12 ml-3 bg-no-repeat bg-contain bg-center"
          style={{
            backgroundImage: "url('src/Images/Overlap/content-back.png')",
          }}
        >
          <div className="flex items-end w-full md:ml-8 ml-4 ">
            <div>
              <h1 className="font-normal lg:text-[56px] lg:leading-[75px] md:text-[36px] md:leading-[55px]  text-[18px] leading-[22px] text-[#0090c4] font-[Ibrand] m-0">
                Virtual Automated Assistant System For You.
              </h1>
            </div>
            <div className="absolute md:left-[70%] left-0 lg:bottom-[30%] md:bottom-[35%] bottom-[15%] md:ml-0 ml-[-30px]">
              <a
                href="started.html"
                className="py-[15px] px-[25px] text-[12.49px] leading-[14.99px] font-[600] rounded-[27px] bg-white text-black font-Ibrand no-underline hover:bg-[#3eacd4] hover:text-white hover:font-bold transition-all duration-300 inline-block text-center"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-between w-full lg:mt-[-3rem] md:mt-[-6rem] mt-[-1.5rem] md:flex-row flex-col">
          <div className="lg:w-[48%] md:w-[55%] w-full">
            <p className="text-[#5a5a5a] md:text-[12.77px] text-[10px] md:leading-[22.99px] leading-[15px] font-[Poppins]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              ultrices erat ante, non pretium justo hendrerit vitae. Nullam
              venenatis eros tellus. Vivamus a purus sed metus cursus mollis.
              Fusce.
            </p>
          </div>
          <img
            src={arrow}
            alt="arrow"
            className="md:w-[51.21px] w-[35px] md:h-[49.07px] h-[35px] lg:mr-4 md:mr-3 md:mt-0 mt-5 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

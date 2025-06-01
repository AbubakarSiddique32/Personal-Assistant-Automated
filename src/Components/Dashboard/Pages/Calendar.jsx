import React from "react";

const Calendar = () => {
  return (
    <div className="bg-gradient-to-br from-[#fef9eb] via-[#f2f5f0] to-[#f8f3fd] py-20 px-5">
      <div className="xl:w-[70%] md:w-[85%] w-full m-auto bg-white md:px-8 px-3 py-7  rounded-[50px]">
        <div className="w-full bg-[#f5e9fe] py-10 px-6">
          <div className="max-w-[1280px] mx-auto bg-white p-10 rounded-3xl">
            <h1 className="text-[40px] text-center text-[#323b4b] font-[ibrand]">
              Headline of website goes here in
            </h1>
            <div className="mt-10">
              <iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FKarachi&showPrint=0&src=emFra2lzaDgxQGdtYWlsLmNvbQ&src=ZW4ucGsjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%230B8043"
                className="w-full h-[80vh] rounded-2xl border border-gray-400"
                frameBorder="0"
                scrolling="no"
                title="Google Calendar"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;

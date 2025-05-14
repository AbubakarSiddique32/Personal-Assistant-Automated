import React, { useState } from "react";
import navImage from "../../Images/Logo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const items = ["Home", "Solutions", "How it Works", "Testimonial", "Pricing"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className=" w-full">
      <nav className=" flex w-[90%] m-auto py-[20px] justify-between items-center">
        <div className="left">
          <div className="nav-image ">
            <img
              src={navImage}
              alt=""
              className="w-[100px] h-[50px] object-contain"
            />
          </div>
        </div>
        <div className="center lg:block hidden">
          <ul className=" flex gap-10">
            {items.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    to=""
                    className=" text-[#888888] font-poppins font-[400] text-[15px] cursor-pointer hover:text-[#000000] hover:scale-105"
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="right lg:block hidden">
          <div className="buttons flex gap-4">
            <button className="py-[12px] px-[12px]  text-[#000000]  font-poppins font-[400] text-[15px] cursor-pointer hover:scale-105  ">
              Sign In
            </button>
            <button className=" py-[12px] px-[20px] rounded-[37.5px] bg-[#000000] text-[#FFFFFF] font-poppins font-[400] text-[15px] cursor-pointer hover:scale-105  ">
              Get Started
            </button>
          </div>
        </div>

        <div className="hamburger lg:hidden block ">
          <button
            onClick={() => setMenuOpen(true)}
            className=" text-3xl text-[#888888]"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>
      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white z-50 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 shadow-lg`}
      >
        <div className="flex justify-between items-center p-4 border-b border-[#d1d0d0]">
          <h2 className="text-lg font-bold font-poppins text-[#888888]">
            a.i.d.e
          </h2>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-3xl text-[#888888]"
          >
            <IoClose />
          </button>
        </div>
        <ul className="flex flex-col gap-6 p-6 ">
          {items.map((item, index) => (
            <li key={index}>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-[#888888] font-poppins font-[400] text-[15px] cursor-pointer hover:text-[#000000] hover:scale-105"
              >
                {item}
              </Link>
            </li>
          ))}
          <li>
            <button className=" w-full text-center py-[12px] px-[12px]  text-[#000000] border rounded-[37.5px]  font-poppins font-[400] text-[15px] cursor-pointer hover:scale-105 ">
              Sign In
            </button>
          </li>
          <li>
            <button className="w-full text-center py-[12px] px-[12px] rounded-[37.5px] bg-[#000000] text-[#FFFFFF] font-poppins font-[400] text-[15px] cursor-pointer hover:scale-105  ">
              Get Started
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

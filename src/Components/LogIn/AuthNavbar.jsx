import React from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import logo from "../../Images/Logo.png"; // Replace with your actual logo path

const AuthNavbar = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-white border-b shadow-sm py-5  md:px-8 px-3 flex items-center justify-between">
      <button
        onClick={() => navigate(-1)}
        className="text-2xl text-gray-600 hover:text-black transition"
        aria-label="Go Back"
      >
        <IoChevronBack />
      </button>
      <div className="flex-1 flex justify-center">
        <img
          src={logo}
          alt="a.i.d.e. logo"
          className="md:h-12  h-10 object-contain"
        />
      </div>
      {/* Right-side empty space to balance layout */}
      <div className="w-6" />
    </header>
  );
};

export default AuthNavbar;

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../../Images/Footer-Logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r w-[95%] m-auto from-[#75C5E2] to-[#0090C4] text-white py-10 xl:px-6 lg:px-5 md:px-16 rounded-[17px]">
      <div className="w-full flex gap-2 ">
        {/* Logo + Description */}
        <div className=" w-[40%]">
          <div className="footer-image w-[25%] mb-5">
            <img src={logo} alt="" className=" w-full" />
          </div>

          <p className=" font-poppins font-[400] text-[#FFFFFF] text-[14px] mb-4">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system
          </p>
          <p className="font-poppins font-[400] text-[#FFFFFF] text-[13px]">
            © 2022 Virtual Assistant. All Rights Reserved. With love by Efnous
          </p>
        </div>

        {/* Services */}
        <div className=" w-[20%]">
          <h2 className=" font-poppins font-[400] text-[20px] text-[#FFFFFF] mb-4">
            Services
          </h2>
          <ul className="space-y-2 font-poppins font-[400] text-[14px] text-[#FFFFFF]">
            <li>Personal Tasks</li>
            <li>Business Support Services</li>
            <li>Digital Marketing</li>
            <li>IT/Web Services</li>
            <li>Business Model</li>
          </ul>
        </div>

        {/* Terms of Use */}
        <div className=" w-[15%]">
          <h2 className="font-poppins font-[400] text-[20px] text-[#FFFFFF] mb-3">
            Terms of Use
          </h2>
          <ul className="space-y-2 font-poppins font-[400] text-[14px] text-[#FFFFFF]">
            <li>Terms & Conditions</li>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
            <li>Disclaimer</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className=" w-[20%]">
          <h2 className="font-poppins font-[400] text-[20px] text-[#FFFFFF] mb-4 ">
            Social Media
          </h2>
          <div className="flex space-x-4 text-white">
            <div className="p-3 border border-white rounded-full">
              <FaFacebookF className="text-white hover:text-gray-300 cursor-pointer" />
            </div>
            <div className="p-3 border border-white rounded-full">
              <FaTwitter className="text-white hover:text-gray-300 cursor-pointer" />
            </div>
            <div className="p-3 border border-white rounded-full">
              <FaYoutube className="text-white hover:text-gray-300 cursor-pointer" />
            </div>
            <div className="p-3 border border-white rounded-full">
              <FaLinkedinIn className="text-white hover:text-gray-300 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

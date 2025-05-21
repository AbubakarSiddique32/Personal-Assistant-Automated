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
    <footer className="bg-gradient-to-r w-[95%] m-auto from-[#75C5E2] to-[#0090C4] text-white py-10 xl:px-6 lg:px-5 md:px-6 px-6 rounded-[17px]">
      <div className="w-full flex gap-4 lg:flex-nowrap flex-wrap  ">
        {/* Logo + Description */}
        <div className=" lg:w-[40%] w-full lg:mb-0 mb-5">
          <div className="footer-image lg:w-[25%] md:w-[15%] w-[25%] mb-5">
            <img src={logo} alt="" className=" w-full" />
          </div>

          <div className="footer-image-content lg:w-[90%] w-full">
            <p className=" font-poppins font-[400] text-[#FFFFFF] text-[14px] mb-4">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system
            </p>
            <p className="font-poppins font-[400] text-[#FFFFFF] text-[13px]">
              © 2022 Virtual Assistant. All Rights Reserved. With love by Efnous
            </p>
          </div>
        </div>

        {/* Services */}
        <div className=" xl:w-[20%] md:w-[30%] w-[50%]  ">
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
        <div className=" xl:w-[15%] md:w-[25%] w-[40%]  ">
          <h2 className="font-poppins font-[400] text-[20px] text-[#FFFFFF] mb-4">
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
        <div className=" lg:w-[20%] md:w-[40%] w-full md:text-left text-center ">
          <h2 className="font-poppins font-[400] text-[20px] text-[#FFFFFF] mb-4 ">
            Social Media
          </h2>
          <div className="flex gap-4 text-white flex-wrap md:justify-start justify-center ">
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

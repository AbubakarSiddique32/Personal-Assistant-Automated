import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-sky-300 to-sky-600 text-white py-10 px-6 md:px-16 rounded-md">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Logo + Description */}
        <div>
          <h1 className="text-xl font-bold mb-2">a.i.d.e.</h1>
          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system
          </p>
          <p className="mt-4 text-xs">
            © 2022 Virtual Assistant. All Rights Reserved. With love by Efnous
          </p>
        </div>

        {/* Services */}
        <div>
          <h2 className="font-semibold mb-3">Services</h2>
          <ul className="space-y-1">
            <li>Personal Tasks</li>
            <li>Business Support Services</li>
            <li>Digital Marketing</li>
            <li>IT/Web Services</li>
            <li>Business Model</li>
          </ul>
        </div>

        {/* Terms of Use */}
        <div>
          <h2 className="font-semibold mb-3">Terms of Use</h2>
          <ul className="space-y-1">
            <li>Terms & Conditions</li>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
            <li>Disclaimer</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="font-semibold mb-3">Social Media</h2>
          <div className="flex space-x-4 text-white">
            <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
            <FaTwitter className="hover:text-gray-300 cursor-pointer" />
            <FaYoutube className="hover:text-gray-300 cursor-pointer" />
            <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

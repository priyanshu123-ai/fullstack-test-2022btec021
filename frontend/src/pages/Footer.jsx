import React from "react";

import { FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-50 via-white to-blue-50 mt-20">
  
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between px-6 py-12 gap-8 backdrop-blur-md rounded-2xl shadow-md border border-white/20">
        
       
        <div className="md:w-[35%] w-full flex flex-col gap-4">
          <div className="flex items-center gap-3">
            
            <p className="text-2xl font-bold text-gray-800">V-Cart</p>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            V-Cart is your all-in-one online shopping destination, offering top-quality products, unbeatable deals, and fast delivery — all backed by trusted service designed to make your life easier every day.
          </p>
        </div>

     
        <div className="md:w-[20%] w-full flex flex-col items-center text-center">
          <p className="text-lg font-semibold text-gray-800 mb-3">COMPANY</p>
          <ul className="space-y-2">
          

            <li className="text-gray-600 text-sm hover:text-blue-600 cursor-pointer transition">Home</li>
              <li className="text-gray-600 text-sm hover:text-blue-600 cursor-pointer transition">About Us</li>
                <li className="text-gray-600 text-sm hover:text-blue-600 cursor-pointer transition">Delivery</li>
                  <li className="text-gray-600 text-sm hover:text-blue-600 cursor-pointer transition">Privacy Policy</li>
          </ul>
        </div>

        {/* RIGHT SECTION - Get in Touch */}
        <div className="md:w-[25%] w-full flex flex-col items-center text-center">
          <p className="text-lg font-semibold text-gray-800 mb-3">GET IN TOUCH</p>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="flex items-center gap-2"><FaPhoneAlt /> +91-9876543210</li>
            <li className="flex items-center gap-2"><FaEnvelope /> contact@vcart.com</li>
            <li className="flex items-center gap-2"><FaPhoneAlt /> +1-123-456-7890</li>
            <li className="flex items-center gap-2"><FaEnvelope /> admin@vcart.com</li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4 text-gray-600">
            <FaFacebook className="hover:text-blue-600 cursor-pointer transition" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer transition" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gray-300 my-6"></div>

      {/* Bottom Copyright */}
      <div className="w-full flex items-center justify-center py-4">
        <p className="text-gray-600 text-sm text-center font-medium">
          © 2025 V-Cart.com — All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

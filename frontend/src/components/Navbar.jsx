import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-black/30 backdrop-blur-md shadow-sm p-4">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
       
        <h1
          className="text-2xl font-extrabold text-white tracking-wide cursor-pointer"
          onClick={() => navigate("/")}
        >
          V-cart
        </h1>

        {/* Links */}
        <div className="space-x-8 hidden md:flex">
          <button
            className="text-white text-lg hover:text-blue-400 transition duration-200 relative group"
            onClick={() => navigate("/")}
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
          </button>
          <button
            className="text-white text-lg hover:text-blue-400 transition duration-200 relative group"  onClick={() => navigate("/about")}
          >
            About
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
          </button>
          <button
            className="text-white text-lg hover:text-blue-400 transition duration-200 relative group"
            onClick={() => navigate("/contact")}
          >
            Contact Us
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

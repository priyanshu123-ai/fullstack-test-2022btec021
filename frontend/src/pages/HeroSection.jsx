import React from "react";
import image from "../assets/image3.gif"

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <img
        src={image}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      <div className="relative z-10 text-center px-6 max-w-4xl mt-20">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Shop Smart, Live Better with{" "}
          <span className="text-blue-400">V-Cart</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Explore top-quality products, exclusive deals, and a smooth shopping
          experience—all in one place.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold text-lg shadow-lg hover:bg-blue-700 transition-all duration-300">
            Start Shopping
          </button>
          <button className="px-6 py-3 rounded-lg bg-white text-blue-600 font-semibold text-lg shadow-lg hover:bg-gray-100 transition-all duration-300">
            Learn More
          </button>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
          <div>
            <h2 className="text-2xl font-bold">10K+</h2>
            <p className="text-sm text-gray-300">Happy Customers</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">5K+</h2>
            <p className="text-sm text-gray-300">Products</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">99%</h2>
            <p className="text-sm text-gray-300">Positive Reviews</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">24/7</h2>
            <p className="text-sm text-gray-300">Customer Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

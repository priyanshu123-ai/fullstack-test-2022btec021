import React from "react";

 import aboutImage from "../assets/image2.png"
import Navbar from "../components/Navbar";
import Services from "./Service";
import Footer from "./Footer";

const About = () => {
  return (
    <>
    <Navbar />
    <section className="w-full bg-gray-50 py-40 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
   
        <div className="flex justify-center">
          <img
            src={aboutImage}
            alt="About V-Cart"
            className="w-80 md:w-[400px] lg:w-[450px] rounded-xl shadow-lg"
          />
        </div>

        
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            About <span className="text-blue-600">V-Cart</span>
          </h2>
          <p className="text-gray-600 text-lg">
            V-Cart is your ultimate online shopping destination. We bring you a wide variety of top-quality products at unbeatable prices, combined with a seamless shopping experience designed for your convenience.
          </p>
          <p className="text-gray-600 text-lg">
            Our mission is to make online shopping simple, enjoyable, and secure for everyone. From exclusive deals to fast delivery, V-Cart ensures you always get the best value.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="w-3 h-3 bg-blue-600 rounded-full mt-2"></span>
              <p className="text-gray-700">Wide Product Selection</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-3 h-3 bg-blue-600 rounded-full mt-2"></span>
              <p className="text-gray-700">Fast & Reliable Delivery</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-3 h-3 bg-blue-600 rounded-full mt-2"></span>
              <p className="text-gray-700">Secure Payment Options</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-3 h-3 bg-blue-600 rounded-full mt-2"></span>
              <p className="text-gray-700">24/7 Customer Support</p>
            </div>
          </div>
        </div>
      </div>

      <Services />
      <Footer />
    </section>
    </>
  );
};

export default About;

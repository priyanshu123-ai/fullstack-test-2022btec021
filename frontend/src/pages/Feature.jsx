import React from "react";
import { Star, DollarSign, ThumbsUp, Globe } from "lucide-react";
import image from "../assets/image.png";

const Features = () => {
  const features = [
    {
      icon: <Star className="w-7 h-7 text-blue-600" />,
      title: "Top Rated Products",
      desc: "Handpicked items with high ratings and trusted by thousands of users.",
    },
    {
      icon: <DollarSign className="w-7 h-7 text-blue-600" />,
      title: "Best Prices",
      desc: "We guarantee competitive prices so you always get the best deal.",
    },
    {
      icon: <ThumbsUp className="w-7 h-7 text-blue-600" />,
      title: "Easy to Use",
      desc: "A smooth shopping experience designed with simplicity in mind.",
    },
    {
      icon: <Globe className="w-7 h-7 text-blue-600" />,
      title: "Global Reach",
      desc: "Shop from anywhere in the world with seamless international shipping.",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-blue-50 to-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center">
          <img
            src={image}
            alt="Features Illustration"
            className="w-80 md:w-[420px] lg:w-[480px] drop-shadow-2xl rounded-xl"
          />
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-snug">
            Why Choose <span className="text-blue-600">V-Cart</span>?
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-lg">
            Experience the future of online shopping with features that make
            every purchase smarter, faster, and more rewarding.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex gap-4 items-start"
              >
                <div className="flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

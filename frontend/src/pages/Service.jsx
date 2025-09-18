import React from "react";
import { ShoppingBag, Truck, ShieldCheck, Headphones } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <ShoppingBag className="w-10 h-10 text-blue-600" />,
      title: "Wide Range of Products",
      desc: "Choose from thousands of categories and items tailored to your lifestyle.",
    },
    {
      icon: <Truck className="w-10 h-10 text-blue-600" />,
      title: "Fast & Free Delivery",
      desc: "Get your orders delivered quickly and free of charge above a minimum spend.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
      title: "Secure Payments",
      desc: "Enjoy peace of mind with safe and encrypted payment methods.",
    },
    {
      icon: <Headphones className="w-10 h-10 text-blue-600" />,
      title: "24/7 Customer Support",
      desc: "Our support team is always here to assist you, anytime and anywhere.",
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          Our <span className="text-blue-600">Services</span>
        </h2>
        <p className="mt-3 text-gray-600 text-lg">
          We provide everything you need for a smooth and enjoyable shopping
          experience.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:-translate-y-2 hover:shadow-xl transition duration-300"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

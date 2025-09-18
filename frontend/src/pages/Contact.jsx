import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [contact, setContact] = useState({
    title: "",
    description: "",
    name:"",
    email:""
  });
  const [message, setMessage] = useState(""); 
  const [type, setType] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(
        "http://localhost:3000/api/v2/contact",
        contact,
        { withCredentials: true }
      );

      console.log(resp);
      setMessage("Your message has been sent successfully!");
      setType("success");
      setContact({ title: "", description: "" }); 
    } catch (error) {
      console.log(error);
      setMessage("Failed to send message. Please try again.");
      setType("error");
    }
  };

  return (
    <div className="pt-20 flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Contact Us
        </h2>

        {message && (
          <div
            className={`mb-4 p-3 rounded-lg text-center ${
              type === "success"
                ? "bg-green-100 text-green-700 border border-green-300"
                : "bg-red-100 text-red-700 border border-red-300"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
             
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter name"
              name="name"
              value={contact.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

         
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              value={contact.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>
            <label className="block font-semibold text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={contact.title}
              onChange={handleChange}
              placeholder="Enter title"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={contact.description}
              onChange={handleChange}
              placeholder="Enter description"
              className="w-full border border-gray-300 rounded-lg p-3 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

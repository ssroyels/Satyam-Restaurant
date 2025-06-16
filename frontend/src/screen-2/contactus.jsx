import axios from "../config/axios.js";
import React from "react";
import { useState } from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaPinterest,
  FaXTwitter,
} from "react-icons/fa6"; // using FA6 for modern look
import { useNavigate } from "react-router-dom";

const ContactSupport = () => {
  const [FullName,setFullName] = useState("");
  const [Email,setEmail] = useState("");
  const [Message,setMessage] = useState("");
  const navigate = useNavigate();
  const SubmitHandler = async (e) => {
    e.preventDefault();
   const response =  await axios.post("/support/supportmsg",{FullName,Email,Message})
    
      alert("User Sent Msg successfully ")
      console.log(response.data)
      setFullName("")
      setEmail("")
      setMessage("")
      navigate("/foodItems")


    
   
  }
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#f5f6fa] via-[#fdf1f1] to-[#f7f5ff] px-6 py-12 flex flex-col md:flex-row justify-between items-start relative overflow-hidden">

      {/* Floating images */}
      <img
        src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/Sandwich-1-1194x1536.webp"
        alt="Sandwich"
        className="absolute top-4 right-4 w-24 hidden md:block"
      />
      <img
        src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/yoga-day-2-1024x944.webp"
        alt="Veggies"
        className="absolute bottom-0 left-0 w-28 hidden md:block"
      />

      {/* Left Panel */}
      <div className="max-w-lg space-y-6 z-10">
        <h1 className="text-4xl font-bold text-gray-900">Customer Support</h1>

        <p className="text-lg text-gray-800">
          Email:{" "}
          <span className="text-orange-500 font-medium">
            support@singhrestaurent.in
          </span>
        </p>

        <div>
          <h2 className="text-lg font-semibold mb-2">Find us on</h2>
          <div className="flex gap-4 text-orange-500 text-xl">
            <FaLinkedin />
            <FaInstagram />
            <FaFacebook />
            <FaPinterest />
            <FaXTwitter />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Corporate Office</h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            No. 55, Sy No. 8–14, Ground Floor, I&J Block, Embassy TechVillage,
            Outer Ring Road, Devarabisanahalli, Bengaluru 560 103, Karnataka,
            India. <br />
            Corporate Identity Number: LZ4110KA2013PLC096530 <br />
            Registration Number: 096530
          </p>
        </div>

        <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full shadow-md">
          Get Directions
        </button>
      </div>

      {/* Right Panel - Contact Form */}
      <div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl p-8 mt-10 md:mt-0 w-full max-w-md z-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Get in touch</h2>
        <form onSubmit={SubmitHandler} className="space-y-5">
          <input
            type="text"
            value={FullName}
            onChange={e => setFullName(e.target.value)}
            placeholder="Enter FullName"
            className="w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:ring-orange-500 focus:outline-none"
          />
          <input
            type="email"
            value={Email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter Email Address"
            className="w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:ring-orange-500 focus:outline-none"
          />
          <textarea
            rows="4"
            value={Message}
            onChange={e => setMessage(e.target.value)} 
            placeholder="Enter Message"
            className="w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:ring-orange-500 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-6 py-2 rounded-full shadow-md"
          >
            Submit
          </button>
        </form>
        <p className="text-xs text-gray-600 mt-4">
          By contacting us you agree to the{" "}
          <span className="text-orange-600 font-semibold">Terms and Conditions</span>{" "}
          and{" "}
          <span className="text-orange-600 font-semibold">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default ContactSupport;

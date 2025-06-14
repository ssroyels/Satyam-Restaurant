import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MainComponents = () => {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/Business/getBusiness");
        setBusinesses(response.data.BusinessStore || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBusinesses();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-[#f3efff] py-12 px-6 md:px-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-orange-600 mb-12">
        Our Businesses
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {businesses.map((item, index) => (
         <div
  key={index}
  data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
  className="group relative bg-white border border-orange-200 rounded-[30px] p-8 shadow-md transition-all duration-300 hover:shadow-2xl hover:shadow-orange-300 hover:scale-[1.02] flex flex-col items-start text-left md:items-center md:text-center"
>
  <div className="transition-transform duration-300 group-hover:-translate-y-6 w-full flex justify-center">
    <img
      src={item.image}
      alt={item.title}
      className="w-40 h-40 object-contain mb-4"
    />
  </div>

  <h2 className="text-xl md:text-2xl font-bold text-orange-600 mb-2">
    {item.title}
  </h2>

  <hr className="border-t border-gray-200 w-3/4 mx-0 md:mx-auto mb-4" />

  <p className="text-gray-700 text-sm leading-relaxed mb-6">
    {item.paragraph}
  </p>

  <button className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-semibold text-sm px-6 py-2 rounded-xl shadow-md transition-all">
    {item.title === "Swiggy Dineout"
      ? "Click here to make reservations"
      : "Place your order here"}
  </button>
</div>

          
        ))}
      </div>
    </div>
  );
};

export default MainComponents;



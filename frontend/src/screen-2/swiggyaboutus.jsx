import React from "react";
import { Utensils, ShoppingBag, Wine } from "lucide-react";
import ipo from "../assets/ipo.jpg"

const SwiggyAboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f9f7fd] text-gray-800">
      {/* Header */}
      {/* <header className="text-center py-10 px-4">
        <h1 className="text-4xl font-bold text-orange-600">Swiggy</h1>
        <p className="text-gray-600 mt-2">Your Everyday Convenience Partner</p>
      </header> */}

      {/* About Us */}
      <section className="text-center py-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">ABOUT US</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
          Singh-Restaurent is a new-age consumer-first organization offering an
          easy-to-use convenience platform, accessible through a unified app.
        </p>

        {/* Services */}
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-12">
          {[
            { icon: <Utensils size={36} />, label: "Food" },
            { icon: <ShoppingBag size={36} />, label: "Instamart" },
            { icon: <Wine size={36} />, label: "Dineout" },
          ].map(({ icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center transition-transform hover:scale-105"
            >
             <div
  className="bg-white p-5 rounded-full shadow-lg text-orange-500 hover:bg-orange-100 animate-wiggle"
>
  {icon}
</div>

              <p className="mt-2 font-semibold">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* IPO Section */}
      <section className="mt-16 text-center px-6">
        <h3 className="text-2xl font-bold text-orange-500 mb-4">
          — IPO DELIVERED - NOVEMBER 2024 —
        </h3>
        <div className="max-w-2xl mx-auto overflow-hidden rounded-2xl shadow-xl bg-black">
         <img
  src={ipo}
  alt="IPO Delivered"
  className="w-full object-cover animate-float"
/>

        </div>
        <p className="text-sm text-gray-600 mt-4 max-w-lg mx-auto">
          Our IPO launch marked a new milestone in our journey of delivering
          convenience to millions of households.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-16 py-8 bg-white text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Singh. All rights reserved.
      </footer>
    </div>
  );
};

export default SwiggyAboutUs;





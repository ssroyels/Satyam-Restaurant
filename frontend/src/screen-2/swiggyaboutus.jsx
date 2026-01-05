import React from "react";
import { Utensils, ShoppingBag, Wine, Users, Store, Truck } from "lucide-react";
import ipo from "../assets/ipo.jpg";

const SwiggyAboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800">

      {/* ================= ABOUT ================= */}
      <section className="text-center py-20 px-4">
        <span className="inline-block mb-3 px-4 py-1 text-xs font-semibold tracking-widest text-orange-600 bg-orange-100 rounded-full">
          ABOUT SINGH RESTAURANT
        </span>

        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Consumer-First Food & Convenience Platform
        </h2>

        <p className="text-lg max-w-3xl mx-auto text-gray-600">
          Singh Restaurant is a modern, consumer-first organization delivering
          food, groceries, and dining experiences through one seamless platform.
          Built on trust, speed, and quality.
        </p>

        {/* ================= SERVICES ================= */}
        <div className="mt-14 flex flex-col md:flex-row justify-center gap-12">
          {[
            { icon: <Utensils size={34} />, label: "Food Delivery" },
            { icon: <ShoppingBag size={34} />, label: "Instamart" },
            { icon: <Wine size={34} />, label: "Dineout" },
          ].map(({ icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center group"
            >
              <div className="bg-white p-6 rounded-full shadow-md text-orange-500 group-hover:bg-orange-50 transition">
                {icon}
              </div>
              <p className="mt-3 font-semibold">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { icon: <Users />, value: "10M+", label: "Happy Customers" },
            { icon: <Store />, value: "25K+", label: "Restaurant Partners" },
            { icon: <Truck />, value: "50K+", label: "Delivery Executives" },
          ].map(({ icon, value, label }) => (
            <div key={label} className="flex flex-col items-center">
              <div className="text-orange-500 mb-3">{icon}</div>
              <h3 className="text-2xl font-extrabold">{value}</h3>
              <p className="text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= IPO ================= */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-gray-50 to-white">
        <h3 className="text-2xl font-extrabold text-orange-500 mb-4">
          IPO Delivered — November 2024
        </h3>

        <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-xl">
          <img
            src={ipo}
            alt="Singh Restaurant IPO"
            className="w-full object-cover"
          />
        </div>

        <p className="text-sm text-gray-600 mt-6 max-w-xl mx-auto">
          Our IPO marked a historic milestone in the journey of Singh Restaurant,
          reinforcing trust, transparency, and long-term value creation.
        </p>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To become India’s most loved and trusted food & convenience
              platform, powered by technology and human connection.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To deliver quality, convenience, and delight to every customer,
              every day, while empowering partners and communities.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-8 bg-gray-50 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Singh Restaurant. All rights reserved.
      </footer>
    </div>
  );
};

export default SwiggyAboutUs;

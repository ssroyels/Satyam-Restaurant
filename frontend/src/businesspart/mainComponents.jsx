import React, { useEffect, useState } from "react";
import axios from "../config/axios.js";
import AOS from "aos";
import "aos/dist/aos.css";

const MainComponents = () => {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH DATA ================= */
  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const res = await axios.get("/Business/getBusiness", {
          withCredentials: true,
        });
        setBusinesses(res.data?.BusinessStore || []);
      } catch (err) {
        console.error("Error fetching businesses:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBusinesses();
  }, []);

  /* ================= AOS INIT ================= */
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-[#f6f3ff] py-20 px-6 md:px-16">
      {/* ================= HEADER ================= */}
      <div className="text-center mb-14">
        <span className="inline-block mb-3 px-4 py-1 text-xs font-semibold tracking-widest text-orange-600 bg-orange-100 rounded-full">
          SINGH RESTAURANT ECOSYSTEM
        </span>

        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800">
          Our Businesses
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Building India’s most trusted food & convenience platform through
          innovation, partnerships, and customer-first thinking.
        </p>
      </div>

      {/* ================= GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse bg-white rounded-3xl p-8 shadow"
              >
                <div className="h-40 bg-gray-200 rounded-xl mb-6" />
                <div className="h-6 bg-gray-200 rounded w-2/3 mb-3" />
                <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                <div className="h-4 bg-gray-200 rounded w-5/6" />
              </div>
            ))
          : businesses.map((item, index) => (
              <div
                key={index}
                data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
                className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="flex justify-center mb-6">
                  <div className="bg-orange-50 rounded-2xl p-4 transition-transform group-hover:-translate-y-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-32 h-32 object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-center mb-3">
                  {item.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed text-center mb-8">
                  {item.paragraph}
                </p>

                {/* CTA */}
                <div className="mt-auto flex justify-center">
                  <button
                    aria-label={item.title}
                    className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-semibold text-sm px-6 py-2 rounded-full shadow transition"
                  >
                    {item.title === "Swiggy Dineout"
                      ? "Make a Reservation"
                      : "Explore Now"}
                  </button>
                </div>
              </div>
            ))}
      </div>
    </section>
  );
};

export default MainComponents;

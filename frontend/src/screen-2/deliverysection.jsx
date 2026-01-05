import React, { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const data = [
  {
    title: "Restaurants on Singh",
    image:
      "https://www.swiggy.com/corporate/wp-content/uploads/2024/10/swiggy-768x765.webp",
  },
  {
    title: "HDFC Credit Card Offers",
    image:
      "https://www.swiggy.com/corporate/wp-content/uploads/2024/10/hdfcs-card-768x714.webp",
  },
  {
    title: "Ride with Singh Restaurant",
    image:
      "https://www.swiggy.com/corporate/wp-content/uploads/2024/10/Desktop-3-768x513.png",
  },
  {
    title: "Partner Programme",
    image:
      "https://www.swiggy.com/corporate/wp-content/uploads/2024/10/swiggy-768x699.png",
  },
  {
    title: "Flavour Meets Fame",
    image:
      "https://www.swiggy.com/corporate/wp-content/uploads/2024/10/Resto-Comp_TB.webp",
  },
];

const DeliveringForEveryone = () => {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);

  /* ================= AUTO SCROLL ================= */
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!scrollRef.current) return;
      scrollRef.current.scrollBy({ left: 260, behavior: "smooth" });

      if (
        scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >=
        scrollRef.current.scrollWidth - 10
      ) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 3500);

    return () => clearInterval(intervalRef.current);
  }, []);

  /* ================= CONTROLS ================= */
  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -260 : 260,
      behavior: "smooth",
    });
  };

  const pause = () => clearInterval(intervalRef.current);

  return (
    <section className="relative py-20 px-6 bg-gray-50 overflow-hidden">
      {/* ================= HEADER ================= */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <span className="inline-block mb-3 px-4 py-1 text-xs font-semibold tracking-widest text-orange-600 bg-orange-100 rounded-full">
          SINGH RESTAURANT ECOSYSTEM
        </span>

        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
          Delivering for Everyone
        </h2>

        <p className="text-gray-600 text-base">
          Creating value for consumers, restaurant partners, delivery
          executives, and communities.
        </p>
      </div>

      {/* ================= CONTROLS ================= */}
      <div className="flex justify-end max-w-7xl mx-auto mb-4 gap-2">
        <button
          onClick={() => scroll("left")}
          className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
          aria-label="Scroll left"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
          aria-label="Scroll right"
        >
          <ChevronRight />
        </button>
      </div>

      {/* ================= CAROUSEL ================= */}
      <div
        ref={scrollRef}
        onMouseEnter={pause}
        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4 max-w-7xl mx-auto"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="min-w-[220px] bg-white rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 p-5 flex flex-col items-center text-center"
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-24 h-24 object-cover rounded-full mb-4 border"
            />
            <p className="text-sm font-semibold text-gray-800">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DeliveringForEveryone;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { title: "Fresh Salads", image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1964&auto=format&fit=crop" },
  { title: "Grilled Wraps", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop" },
  { title: "Sweet Cakes", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1974&auto=format&fit=crop" },
  { title: "Hearty Meals", image: "https://plus.unsplash.com/premium_photo-1673580742890-4af144293960?q=80&w=1964&auto=format&fit=crop" },
  { title: "Biryani Specials", image: "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=1974&auto=format&fit=crop" },
  { title: "Sizzling Sizzlers", image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1547&auto=format&fit=crop" },
  { title: "Cheesy Pizzas", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=1974&auto=format&fit=crop" },
  { title: "Spicy Tacos", image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=2076&auto=format&fit=crop" },
  { title: "Juicy Burgers", image: "https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?q=80&w=2030&auto=format&fit=crop" },
  { title: "Chilled Beverages", image: "https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?q=80&w=1974&auto=format&fit=crop" },
];

const ExploreMenu = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gray-50 px-4">
      {/* ================= HEADING ================= */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          Explore Our Menu 🍽️
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3">
          Handpicked dishes crafted with fresh ingredients and bold flavors.
          Find your next favorite meal.
        </p>
      </div>

      {/* ================= SLIDER ================= */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="max-w-7xl mx-auto"
      >
        {menuItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => navigate("/foodItems")}
            >
              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">
                  Crafted fresh & served hot. A must-try favorite.
                </p>

                <button
                  className="mt-4 inline-block bg-orange-500 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-orange-600 transition"
                >
                  Order Now →
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ExploreMenu;

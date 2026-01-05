import React, { useEffect, useMemo, useState } from "react";
import { Filter, Search, User, Star } from "lucide-react";
import Footer from "../src/screens/Footer";

/* ================= DATA ================= */
const bannerImages = [
  "https://images.unsplash.com/photo-1585127580102-15ff5cb422a4",
  "https://images.unsplash.com/photo-1670984939096-f3cfd48c7408",
  "https://images.unsplash.com/photo-1737134871761-bdf132724a7f",
];

const cuisines = [
  "Chinese Restaurant Near Me",
  "South Indian Restaurant Near Me",
  "Indian Restaurant Near Me",
  "Kerala Restaurant Near Me",
  "Korean Restaurant Near Me",
  "North Indian Restaurant Near Me",
  "Seafood Restaurant Near Me",
  "Bengali Restaurant Near Me",
  "Punjabi Restaurant Near Me",
  "Italian Restaurant Near Me",
  "Andhra Restaurant Near Me",
  "Mexican Restaurant Near Me",
  "Rajasthani Restaurant Near Me",
  "Goan Restaurant Near Me",
];

const filters = [
  "Sort By",
  "Book a Table",
  "Within 5km",
  "Rating 4+",
  "Pure Veg",
  "Serves Alcohol",
];

const restaurants = [
  {
    name: "Dinin Delight Cafe",
    rating: 3.8,
    cuisine: "Chinese • North Indian",
    location: "Husainganj, Lucknow",
    cost: "₹800 for two",
    distance: "0.1 km",
    image:
      "https://images.unsplash.com/flagged/photo-1556742524-750f2ab99913",
    offer: "Flat 30% off on pre-booking",
  },
  {
    name: "The Pacific Hut",
    rating: 4.0,
    cuisine: "Chinese • North Indian",
    location: "Charbagh, Lucknow",
    cost: "₹500 for two",
    distance: "0.6 km",
    image:
      "https://images.unsplash.com/photo-1669410647983-ef742ccdfe6d",
    offer: "Flat 50% off on pre-booking",
  },
  {
    name: "Umrao Jaan Restaurant",
    rating: 3.9,
    cuisine: "North Indian • Biryani",
    location: "Hazratganj, Lucknow",
    cost: "₹1500 for two",
    distance: "2.6 km",
    image:
      "https://images.unsplash.com/photo-1654483949849-ed21ae4fb2c1",
    offer: "Flat 30% off on pre-booking",
  },
];

/* ================= COMPONENT ================= */
const SinghDineoutBanner = () => {
  const [slide, setSlide] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [search, setSearch] = useState("");

  /* ---------- Auto Banner ---------- */
  useEffect(() => {
    const timer = setInterval(
      () => setSlide((s) => (s + 1) % bannerImages.length),
      3500
    );
    return () => clearInterval(timer);
  }, []);

  /* ---------- Helpers ---------- */
  const ratingColor = (r) =>
    r >= 4 ? "bg-green-600" : r >= 3 ? "bg-yellow-500" : "bg-red-500";

  const filteredRestaurants = useMemo(() => {
    return restaurants.filter(
      (r) =>
        r.name.toLowerCase().includes(search.toLowerCase()) ||
        r.cuisine.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const displayedCuisines = showAll ? cuisines : cuisines.slice(0, 11);

  return (
    <div className="bg-gray-50 font-sans">

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-30 bg-white shadow-sm">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="bg-orange-500 w-8 h-8 rounded flex items-center justify-center text-white font-bold">
              S
            </div>
            <span className="font-bold text-orange-500 text-xl">
              Singh Restaurant
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 text-gray-500" size={16} />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search restaurants"
                className="pl-9 pr-4 py-2 bg-gray-100 rounded-full text-sm outline-none"
              />
            </div>
            <User className="text-gray-600 cursor-pointer" />
          </div>
        </div>
      </header>

      {/* ================= BANNER ================= */}
      <div className="relative h-64 sm:h-80">
        <img
          src={bannerImages[slide]}
          className="w-full h-full object-cover"
          alt="Dineout banner"
        />
        <div className="absolute inset-0 bg-black/40 flex items-end px-6 pb-8">
          <h2 className="text-white text-3xl sm:text-4xl font-bold">
            Best Dine-in Deals Near You
          </h2>
        </div>
      </div>

      {/* ================= FILTERS ================= */}
      <div className="sticky top-[72px] z-20 bg-white px-6 py-4 flex gap-2 flex-wrap shadow-sm">
        <button className="flex items-center gap-1 px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
          Filter <Filter size={14} />
        </button>
        {filters.map((f) => (
          <button
            key={f}
            className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200"
          >
            {f}
          </button>
        ))}
      </div>

      {/* ================= RESTAURANTS ================= */}
      <section className="px-6 py-12 max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRestaurants.map((r) => (
          <div
            key={r.name}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <div className="relative">
              <img src={r.image} className="h-48 w-full object-cover" />
              <span
                className={`absolute top-3 right-3 ${ratingColor(
                  r.rating
                )} text-white text-xs px-2 py-1 rounded-full flex items-center gap-1`}
              >
                <Star size={12} /> {r.rating}
              </span>
            </div>

            <div className="p-4 space-y-1">
              <h3 className="font-semibold text-lg">{r.name}</h3>
              <p className="text-sm text-gray-500">{r.cuisine}</p>
              <p className="text-xs text-gray-400">
                {r.location} • {r.distance}
              </p>
              <p className="text-sm">{r.cost}</p>

              <div className="mt-3 bg-green-100 text-green-700 text-sm px-3 py-1 rounded">
                {r.offer}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ================= CUISINES ================= */}
      <section className="px-6 pb-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Best Cuisines Near Me</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {displayedCuisines.map((c) => (
            <div
              key={c}
              className="bg-white border rounded-xl px-4 py-3 text-center hover:shadow-sm"
            >
              {c}
            </div>
          ))}
          {!showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="border px-4 py-3 rounded-xl text-orange-500 font-semibold hover:bg-orange-50"
            >
              Show More ↓
            </button>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SinghDineoutBanner;

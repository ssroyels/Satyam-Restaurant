// Final responsive Swiggy-style Dineout Page with improvements

import React, { useState, useEffect } from "react";
import { Filter, Search, User, Star } from "lucide-react";
import FoodItems from "./FoodItem";
import Footer from "../src/screens/Footer";

const SwiggyDineoutBanner = () => {
  const [showAll, setShowAll] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerImages = [
    "https://images.unsplash.com/photo-1585127580102-15ff5cb422a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGluaW5nJTIwdGFibGUlMjByZXN0YXVyZW50fGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1670984939096-f3cfd48c7408?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmVudHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1737134871761-bdf132724a7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlc3RhdXJlbnR8ZW58MHx8MHx8fDA%3D"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
    "Book a table",
    "Within 5km",
    "Rating 4+",
    "Pure Veg",
    "Serves Alcohol",
  ];

  const restaurants = [
    {
      name: "Dinin Delight Cafe & Restaurant",
      rating: 3.8,
      cuisine: "Chinese • North Indian",
      location: "Hotel Uday Raj, Husainganj, Lucknow",
      cost: "₹800 for two",
      distance: "0.1 km",
      image: "https://images.unsplash.com/flagged/photo-1556742524-750f2ab99913?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbmVzZSUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
      offer: "Flat 30% off on pre-booking",
      extraOffers: "+ 2 more",
      bankOffer: "Up to 10% off with bank offers",
    },
    {
      name: "The Pacific Hut",
      rating: 4.0,
      cuisine: "Chinese • North Indian",
      location: "Charbagh, Lucknow",
      cost: "₹500 for two",
      distance: "0.6 km",
      image: "https://images.unsplash.com/photo-1669410647983-ef742ccdfe6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpbmVzZSUyMHJlc3RhdXJlbnR8ZW58MHx8MHx8fDA%3D",
      offer: "Flat 50% off on pre-booking",
      extraOffers: "+ 3 more",
      bankOffer: "Up to 10% off with bank offers",
    },
    {
      name: "Umrao Jaan Restaurant & Cafe",
      rating: 3.9,
      cuisine: "North Indian • Biryani",
      location: "Hazratganj, Lucknow",
      cost: "₹1500 for two",
      distance: "2.6 km",
      image: "https://images.unsplash.com/photo-1654483949849-ed21ae4fb2c1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      offer: "Flat 30% off on pre-booking",
      extraOffers: "+ 3 more",
      bankOffer: "Up to 10% off with bank offers",
    },
    {
      name: "Dolly's Kitchen",
      rating: 3.5,
      cuisine: "Chinese • North Indian",
      location: "Husainganj, Lucknow",
      cost: "₹500 for two",
      distance: "0.5 km",
      image: "https://images.unsplash.com/photo-1562613498-8abe16e8373b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoaW5lc2UlMjByZXN0YXVyZW50fGVufDB8fDB8fHww",
      offer: "Flat 15% off on walk-in",
      extraOffers: "+ 1 more",
      bankOffer: "Up to 10% off with bank offers",
    },
  ];

  const getRatingColor = (rating) => {
    if (rating >= 4) return "bg-green-600";
    if (rating >= 3) return "bg-yellow-500";
    return "bg-red-500";
  };

  const displayedCuisines = showAll ? cuisines : cuisines.slice(0, 11);

  return (
    <div className="font-sans bg-gray-50">
      {/* Header */}
      <header className="flex flex-wrap justify-between items-center px-4 sm:px-6 py-4 bg-white shadow-sm sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <img
            src="https://www.google.com/search?client=ms-android-realme-terr1-rso2&sca_esv=8900ff206bef6d47&sxsrf=AE3TifNmbH93QozlYap1pIhrmd2eCVvtvw:1750173643192&udm=2&fbs=AIIjpHz30rPMyW-0vSP0k1VTNmO_kCOARpjPjQRkBWH2HwUIz5XUSIJvSK0oms7XOxizDlnr_4ZY5sR6MhoHu3TFlth2dELiNU5e9vD7To8bxJqzGBXrLR8MX_HosxIhYYaJwWP5dHP8bhRIWxPqVHYuxJfzWWkrsCKfIDJFGY7AOJSqSHDGSBWjFqGiPqkr_wiz_8EgAZS9oV6KhQtd_5bv0s92UjMHxj7FoOktE8zzMghVnp9jKa4&q=singh+restaurant+logo&sa=X&sqi=2&ved=2ahUKEwiBx7Dy4PiNAxWKs1YBHcdUG0AQtKgLegQIEhAB&biw=360&bih=691&dpr=3"
            alt="Swiggy Logo"
            className="w-8 h-8"
          />
          <h1 className="text-xl font-bold text-orange-500">Singh-Restaurant</h1>
          <span className="ml-2 text-sm text-gray-600 cursor-pointer hover:underline hidden sm:inline">
            Set your precise location ▼
          </span>
        </div>
        <div className="flex items-center gap-4 mt-3 sm:mt-0">
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Search for restaurant and food"
              className="px-4 py-2 pl-10 rounded-full bg-gray-100 text-sm w-full focus:outline-none"
            />
            <Search size={16} className="absolute top-2.5 left-3 text-gray-500" />
          </div>
          <User className="text-gray-600 cursor-pointer" />
        </div>
      </header>

      {/* Banner */}
      <div className="relative h-60 sm:h-80 w-full overflow-hidden">
        <img
          src={bannerImages[currentSlide]}
          alt="Banner"
          loading="lazy"
          className="w-full h-full object-cover transition-opacity duration-700 opacity-100"
        />
        <div className="absolute top-4 left-4 sm:left-6 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
          Dineout
        </div>
        <div className="absolute bottom-6 left-4 sm:left-6 text-white">
          <h2 className="text-xl sm:text-4xl font-bold leading-tight">
            Restaurants With <br className="hidden sm:block" /> Great Offers Near Me
          </h2>
        </div>
      </div>

      {/* Filters */}
      <div className="px-4 sm:px-6 py-4 flex flex-wrap gap-2 sm:gap-3 bg-white sticky top-[72px] z-20 shadow-sm">
        <button className="flex items-center gap-2 px-4 py-2 border rounded-full text-sm font-medium bg-orange-100 text-orange-500 border-orange-300">
          <span className="rounded-full bg-orange-500 text-white text-xs px-2 py-0.5">1</span>
          Filter <Filter size={14} />
        </button>
        {filters.map((filter, idx) => (
          <button
            key={idx}
            className="px-4 py-2 border rounded-full text-sm font-medium bg-gray-100 hover:bg-gray-200 transition"
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Restaurant Cards */}
      <div className="px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {restaurants.map((res, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-2xl overflow-hidden transition hover:shadow-lg">
            <div className="relative">
              <img src={res.image} alt={res.name} loading="lazy" className="w-full h-48 object-cover" />
              <div className="absolute bottom-2 left-3 text-white font-semibold text-lg drop-shadow-lg">
                {res.name}
              </div>
              <div className={`absolute bottom-2 right-3 text-white text-xs px-2 py-0.5 rounded-full flex items-center gap-1 ${getRatingColor(res.rating)}`}>
                <Star size={12} /> {res.rating}
              </div>
            </div>
            <div className="p-4 text-sm text-gray-700 space-y-1">
              <div className="font-medium">{res.cuisine}</div>
              <div className="flex justify-between text-gray-500 text-xs">
                <span>{res.location}</span>
                <span>{res.distance}</span>
              </div>
              <div className="text-gray-600">{res.cost}</div>
              <div>
                <span className="inline-block bg-gray-100 text-xs px-2 py-0.5 rounded-full">🪑 Table booking</span>
              </div>
              <div className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-lg font-medium flex justify-between items-center">
                {res.offer}
                <span className="text-gray-700 text-xs">{res.extraOffers}</span>
              </div>
              <div className="text-green-700 text-sm">{res.bankOffer}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Cuisines */}
      <div className="px-4 sm:px-6 pb-10 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Best Cuisines Near Me</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {displayedCuisines.map((item) => (
            <div
              key={item}
              className="border border-gray-300 px-4 py-3 rounded-xl text-center text-base font-medium bg-white hover:shadow-sm transition"
            >
              {item}
            </div>
          ))}
          {!showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="border border-gray-300 px-4 py-3 rounded-xl text-orange-500 font-semibold bg-white hover:bg-orange-50 transition"
            >
              Show More ↓
            </button>
          )}
        </div>

        {/* Explore Section */}
        <h2 className="text-2xl font-bold mt-14 mb-6">Explore Every Restaurant Near Me</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {["Explore Restaurants Near Me", "Explore Top Rated Restaurants Near Me"].map((item) => (
            <div
              key={item}
              className="border border-gray-300 px-4 py-3 rounded-xl text-center text-base font-medium bg-white hover:shadow-sm transition"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <Footer/>t
    </div>
  );
};

export default SwiggyDineoutBanner;



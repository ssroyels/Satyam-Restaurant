import React, { useEffect, useState } from "react";
import ExploreMenu from "./Explore";
import { UtensilsCrossed } from "lucide-react";
import axios from '../config/axios.js';
import { useNavigate } from "react-router-dom";



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

const exploreOptions = [
  "Explore Restaurants Near Me",
  "Explore Top Rated Restaurants Near Me",
];

const Middle = () => {
  const [location, setLocationName] = useState(null);
  const [error1, setError1] = useState("");
  const navigate = useNavigate();

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const res = await axios.post("/api/location", {
            latitude,
            longitude,
          });
          console.log(res.data);
          setLocationName(res.data.display_name); // from OpenStreetMap
        } catch (err) {
          setError("Error getting location name");
        }
      },
      () => {
        setError("Permission denied or error in fetching location.");
      },
      {
        enableHighAccuracy: true,
      }
    );
  };

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedCuisines = showAll ? cuisines : cuisines.slice(0, 11);

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await axios.get("/Item/getItems");
        const items = response?.data?.itemStore;
        if (Array.isArray(items)) {
          setCategories(items);
        } else {
          setCategories([]);
          setError("No items found");
        }
      } catch (err) {
        console.error("Error fetching items:", err);
        setError("Failed to load items");
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    getItems();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/foodItems")
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-900 text-white">
      {/* Brighter Lighting Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-pink-400 opacity-30 rounded-full blur-[200px] animate-pulse" />
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-purple-500 opacity-25 rounded-full blur-[180px] animate-pulse" />
        <div className="absolute bottom-[15%] left-[20%] w-[700px] h-[700px] bg-yellow-300 opacity-30 rounded-full blur-[240px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-green-300 opacity-20 rounded-full blur-[200px] animate-pulse" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 py-8 flex items-start justify-center">
        <div className="w-full bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl max-w-7xl text-black">
          {/* Search Section */}
          <div className="w-full flex flex-col gap-4 sm:flex-row sm:gap-6 items-center justify-center mt-4">
            <div className="p-6 text-center">
              <button
                onClick={getLocation}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Choose your current location
              </button>

              {location && (
                <p className="mt-4 font-semibold text-green-700">{location}</p>
              )}
              {error && <p className="text-red-600 mt-4">{error}</p>}
            </div>

            <div className="relative w-full sm:w-1/2">
              <input
                type="text"
                placeholder="Search for restaurant, item or more"
                className="w-full border border-gray-300 text-gray-700 rounded-lg pl-12 pr-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 15z"
                />
              </svg>
            </div>
          </div>

          {/* Items Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
            {loading ? (
              <p className="text-center col-span-full text-gray-500">
                Loading...
              </p>
            ) : error ? (
              <p className="text-center col-span-full text-red-500">{error}</p>
            ) : categories.length === 0 ? (
              <p className="text-center col-span-full text-gray-500">
                No items available
              </p>
            ) : (
              categories.map((item, index) => (
                <form action="" key={index} onSubmit={submitHandler}>
                  <div
                    key={index}
                    className="rounded-2xl overflow-hidden shadow-xl bg-white cursor-pointer transition-transform hover:scale-105 hover:shadow-2xl"
                  >
                    <div
                      className="h-40 bg-cover bg-center"
                      style={{
                        backgroundImage: `url('${
                          item?.image || "/fallback.jpg"
                        }')`,
                      }}
                    ></div>

                    <div className="p-4 flex flex-col items-center text-center">
                      <UtensilsCrossed className="w-7 h-7 text-green-700 mb-2" />
                      <h2 className="text-lg font-semibold text-gray-800">
                        {item?.title || "Untitled"}
                      </h2>
                      <p className="text-sm text-gray-600 mt-1 mb-3">
                        Enjoy premium taste & freshness
                      </p>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-green-600 text-white rounded-full text-sm hover:bg-green-700 transition"
                      >
                        Buy Food
                      </button>
                    </div>
                  </div>
                </form>
              ))
            )}
          </div>

          {/* Explore Section */}
          <div className="mt-10">
            <ExploreMenu />
          </div>
          <div className="px-6 py-10 max-w-6xl mx-auto">
            {/* Best Cuisines */}
            <h2 className="text-2xl font-bold mb-6">Best Cuisines Near Me</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {displayedCuisines.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-300 px-4 py-3 rounded-xl text-center text-[16px] font-medium hover:shadow-sm transition"
                >
                  {item}
                </div>
              ))}

              {!showAll && (
                <button
                  onClick={() => setShowAll(true)}
                  className="border border-gray-300 px-4 py-3 rounded-xl text-orange-500 font-semibold hover:bg-orange-50 transition"
                >
                  Show More ↓
                </button>
              )}
            </div>

            {/* Explore Every Restaurant */}
            <h2 className="text-2xl font-bold mt-14 mb-6">
              Explore Every Restaurants Near Me
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {exploreOptions.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-gray-300 px-4 py-3 rounded-xl text-center text-[16px] font-medium hover:shadow-sm transition"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;

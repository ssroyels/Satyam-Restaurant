import React, { useEffect, useState } from "react";
import { UtensilsCrossed } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "../config/axios.js";
import ExploreMenu from "./Explore";

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
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showAll, setShowAll] = useState(false);

  /* ================= LOCATION ================= */
  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          const res = await axios.post(
            "/api/location",
            { latitude: coords.latitude, longitude: coords.longitude },
            { withCredentials: true }
          );
          setLocation(res.data.display_name);
        } catch {
          setError("Unable to fetch location");
        }
      },
      () => setError("Location permission denied")
    );
  };

  /* ================= ITEMS ================= */
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get("/Item/getItems", {
          withCredentials: true,
        });
        setItems(res.data?.itemStore || []);
      } catch {
        setError("Failed to load food items");
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm p-6">

        {/* ================= SEARCH ================= */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-10">
          <button
            onClick={getLocation}
            className="border border-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-100"
          >
            Use current location
          </button>

          <input
            type="text"
            placeholder="Search for restaurant or food"
            className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
          />
        </div>

        {location && (
          <p className="text-center text-green-600 text-sm mb-6">
            📍 {location}
          </p>
        )}
        {error && (
          <p className="text-center text-red-500 text-sm mb-6">
            {error}
          </p>
        )}

        {/* ================= ITEMS GRID ================= */}
        <h2 className="text-2xl font-bold mb-6">
          Popular Food Categories
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <div
                key={item._id}
                onClick={() => navigate("/foodItems")}
                className="bg-white border rounded-xl overflow-hidden cursor-pointer hover:shadow-md transition"
              >
                <img
                  src={item.image || "/fallback.jpg"}
                  alt={item.title}
                  className="h-40 w-full object-cover"
                />

                <div className="p-4 text-center">
                  <UtensilsCrossed className="mx-auto text-orange-500 mb-2" />
                  <h3 className="font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Fresh & delicious
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ================= EXPLORE ================= */}
        <div className="mt-12">
          <ExploreMenu />
        </div>

        {/* ================= CUISINES ================= */}
        <div className="mt-14">
          <h2 className="text-2xl font-bold mb-6">
            Best Cuisines Near Me
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {(showAll ? cuisines : cuisines.slice(0, 11)).map((c, i) => (
              <div
                key={i}
                className="border px-4 py-3 rounded-lg text-center text-sm hover:shadow-sm"
              >
                {c}
              </div>
            ))}

            {!showAll && (
              <button
                onClick={() => setShowAll(true)}
                className="border px-4 py-3 rounded-lg text-orange-500 font-semibold"
              >
                Show more ↓
              </button>
            )}
          </div>
        </div>

        {/* ================= EXPLORE OPTIONS ================= */}
        <div className="mt-14">
          <h2 className="text-2xl font-bold mb-6">
            Explore Restaurants Near Me
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {exploreOptions.map((item, idx) => (
              <div
                key={idx}
                className="border px-4 py-3 rounded-lg text-center hover:shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Middle;

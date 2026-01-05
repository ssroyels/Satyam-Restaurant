import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  User,
  Plus,
  Minus,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

/* -------------------- DATA -------------------- */
const allFoodItems = [
  {
    name: "Vada Pav",
    discount: "20% OFF UPTO ₹50",
    time: "25–30 mins",
    rating: 4.4,
    location: "Street Food, Mumbai",
    price: 40,
    image:
      "https://www.nehascookbook.com/wp-content/uploads/2022/09/Ahemdabad-style-vada-pav-WS.jpg",
    related: [
      {
        name: "Vada Pav with Cheese",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPmG2VV-cgoF-6XC3H_qvLi8KeUBz_jrEPRA&s",
        price: 50,
      },
      {
        name: "Spicy Vada Pav",
        image:
          "https://www.nehascookbook.com/wp-content/uploads/2022/09/Ahemdabad-style-vada-pav-WS.jpg",
        price: 45,
      },
    ],
  },
  {
    name: "Paneer Tikka",
    discount: "15% OFF UPTO ₹80",
    time: "30–35 mins",
    rating: 4.6,
    location: "Grill, Punjabi",
    price: 150,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj_w-NpRCnX_t4ro-6LXLqPPAQA9F_VQljbQ&s",
    related: [
      {
        name: "Paneer Tikka Masala",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaPu3edeqXdrKGacHTt7WNtULrNfmWgF3eIQ&s",
        price: 160,
      },
    ],
  },
];

/* -------------------- COMPONENT -------------------- */
export default function FoodItems() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  /* ---------------- CART LOGIC ---------------- */
  const addToCart = (item) => {
    setCart((prev) => {
      const found = prev.find((i) => i.name === item.name);
      if (found) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (name, delta) => {
    setCart((prev) =>
      prev
        .map((i) =>
          i.name === name
            ? { ...i, quantity: Math.max(1, i.quantity + delta) }
            : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  const totalAmount = cart.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  /* -------------------- UI -------------------- */
  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-lg">
            🍽️ Singh Restaurant
          </div>

          <div className="flex items-center gap-4 text-sm">
            <button className="flex items-center gap-1 text-gray-600">
              <Search size={16} /> Search
            </button>

            <Link to="/login" className="flex items-center gap-1 text-gray-600">
              <User size={16} /> Login
            </Link>

            <button
              onClick={() => setShowCart(true)}
              className="relative flex items-center gap-1"
            >
              <ShoppingCart size={18} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {!selectedCard ? (
          <>
            <h2 className="text-2xl font-bold mb-6">
              Popular Food Items
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {allFoodItems.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedCard(item)}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition cursor-pointer group"
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-44 w-full object-cover group-hover:scale-105 transition"
                    />
                    <span className="absolute bottom-0 w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-semibold py-1 text-center">
                      {item.discount}
                    </span>
                  </div>

                  <div className="p-4 space-y-1">
                    <h3 className="font-bold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      ⭐ {item.rating} • {item.time}
                    </p>
                    <p className="text-sm text-gray-600">
                      ₹{item.price}
                    </p>
                    <p className="text-xs text-gray-400">
                      {item.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <button
              onClick={() => setSelectedCard(null)}
              className="flex items-center gap-2 mb-6 text-sm font-semibold text-gray-700 hover:text-black"
            >
              <ArrowLeft size={16} /> Back
            </button>

            <h2 className="text-xl font-bold mb-4">
              More like {selectedCard.name}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {selectedCard.related.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 text-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-36 w-full object-cover rounded-lg"
                  />
                  <h4 className="mt-2 font-medium">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    ₹{item.price}
                  </p>
                  <button
                    onClick={() => addToCart(item)}
                    className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white text-sm py-2 rounded-lg"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* CART MODAL */}
      {showCart && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6">
            <h3 className="text-xl font-bold mb-4 text-center">
              Your Cart
            </h3>

            {cart.length === 0 ? (
              <p className="text-center text-gray-500">
                Cart is empty
              </p>
            ) : (
              <div className="space-y-4 max-h-64 overflow-y-auto">
                {cart.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3"
                  >
                    <img
                      src={item.image}
                      className="h-12 w-12 rounded object-cover"
                      alt=""
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        ₹{item.price} × {item.quantity}
                      </p>
                      <div className="flex gap-2 mt-1">
                        <button
                          onClick={() =>
                            updateQuantity(item.name, -1)
                          }
                          className="p-1 bg-gray-200 rounded"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.name, 1)
                          }
                          className="p-1 bg-gray-200 rounded"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {cart.length > 0 && (
              <p className="text-center font-semibold mt-4">
                Total: ₹{totalAmount}
              </p>
            )}

            <div className="flex gap-2 mt-6">
              <button className="flex-1 bg-orange-500 text-white py-2 rounded-lg">
                Order Now
              </button>
              <button
                onClick={() => setShowCart(false)}
                className="flex-1 bg-gray-800 text-white py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

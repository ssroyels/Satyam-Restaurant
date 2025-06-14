// FoodItems.jsx
import React, { useState, useEffect } from "react";
import {
  Search,
  ShoppingCart,
  User,
  Filter,
  ChevronDown,
  Plus,
  Minus,
} from "lucide-react";
// import "tailwindcss/tailwind.css";

const allFoodItems = [
  {
    name: "Vada Pav",
    discount: "20% OFF UPTO ₹50",
    time: "25–30 mins",
    rating: 4.4,
    location: "Street Food, Mumbai",
    price: 40,
    image: "https://www.nehascookbook.com/wp-content/uploads/2022/09/Ahemdabad-style-vada-pav-WS.jpg",
    related: [
      {
        name: "Vada Pav with Cheese",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPmG2VV-cgoF-6XC3H_qvLi8KeUBz_jrEPRA&s",
        price: 50,
      },
      {
        name: "Spicy Vada Pav",
        image: "https://www.nehascookbook.com/wp-content/uploads/2022/09/Ahemdabad-style-vada-pav-WS.jpg",
        price: 45,
      },
      {
        name: "Butter Vada Pav",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr9QPztaZHiDlwjOTb8a057A2VqsYbNEUYHA&s",
        price: 55,
      },
      {
        name: "Double Vada Pav",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLdWY_CzYRJ2Cu9xZN5W3Zg5ZyF3nqXcRIOA&s",
        price: 60,
      },
      {
        name: "Crispy Vada Pav",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmRviwldJduiE24Vjq4gsBvNcYrcaJzELXvg&s",
        price: 48,
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj_w-NpRCnX_t4ro-6LXLqPPAQA9F_VQljbQ&s",
    related: [
      {
        name: "Paneer Tikka Masala",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaPu3edeqXdrKGacHTt7WNtULrNfmWgF3eIQ&s",
        price: 160,
      },
      {
        name: "Grilled Paneer",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp-7BaoRznmYztytDS3N611Rg8eiNLba2tDg&s",
        price: 155,
      },
      {
        name: "Smoky Paneer",
        image: "https://www.archanaskitchen.com/images/archanaskitchen/Indian_Appetizers/Smoked-Tandoori-Paneer-Tikka-Recipe-6222.jpg",
        price: 165,
      },
      {
        name: "Paneer Tikka Roll",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvX7zUCDmyK-SpYuh3oM0uiQUPdphrFJBkBQ&s",
        price: 140,
      },
      {
        name: "Tandoori Paneer",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTGprnId_Ykr5g4UC0FmCND-t9y5dD6B1acA&s",
        price: 170,
      },
    ],
  },
  {
    name: "pizza",
    discount: "10% OFF UPTO ₹40",
    time: "20–25 mins",
    rating: 4.3,
    location: "Street Food, Maharashtra",
    price: 80,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8P3VgokcHFAVTIsXMojkG4F9jysoA5ksAdw&s",
    related: [
      {
        name: "Onion Pizza",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtA5vVA9c8k82OQ2czLg3w7MWCzapWFfUhCQ&s",
        price: 90,
      },
      {
        name: "Paneer Pizza",
        image: "https://i0.wp.com/khaddoroshik.com/wp-content/uploads/2024/01/Homemade-Paneer-Pizza-Recipe.webp?resize=1024%2C1024&ssl=1",
        price: 85,
      },
      {
        name: "Combo Pizza",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRC_m8aWCm2P1ATLupNvTOoZZ-ThFhgGyzRw&s",
        price: 80,
      },
      {
        name: "Tomato Pizza",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYxs1d2RKxMVLOJSFwjSQsK8YnY4I-Qawa_Q&s",
        price: 95,
      },
      {
        name: "Cheese Pizza",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPikG3d_HKgjUP0ibgToMO-IQpg9wyldBaUw&s",
        price: 100,
      },
    ],
  },
]

export default function FoodItems() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showBhandarBg, setShowBhandarBg] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowBhandarBg(true);
      setTimeout(() => setShowBhandarBg(false), 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const addToCart = (item) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.name === item.name);
      if (exists) {
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
        .map((item) =>
          item.name === name
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-white px-4 py-6">
      {showBhandarBg && (
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555243896-c709bfa0b564')] bg-cover bg-center bg-opacity-60 backdrop-blur-md z-50 animate-pulse transition duration-1000"></div>
      )}

      <header className="sticky top-0 z-40 bg-white shadow-md border-b py-2 px-4 flex items-center justify-between">
        <div className="flex items-center gap-3 font-bold">
          <img
            src="https://png.pngtree.com/template/20190223/ourmid/pngtree-restaurant-logo-image_58802.jpg"
            className="w-10 h-10 rounded-full"
            alt="Logo"
          />
          <span>Singh Restaurent</span>
        </div>
        <nav className="flex items-center gap-3 text-sm">
          <button className="flex items-center gap-1">
            <Search size={16} /> Search
          </button>
          <a href="/login" className="flex items-center gap-1">
            <User size={16} /> Sign In
          </a>
          <button
            onClick={() => setShowCart(true)}
            className="flex items-center gap-1 relative"
          >
            <ShoppingCart size={16} /> Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>
        </nav>
      </header>

      {!selectedCard ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {allFoodItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleCardClick(item)}
              className="cursor-pointer bg-white rounded-xl shadow hover:shadow-lg transition p-2"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-sm px-2 py-1 rounded-b-lg">
                  {item.discount}
                </div>
              </div>
              <div className="mt-2 px-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">Price: ₹{item.price}</p>
                <p className="text-sm text-gray-600 flex items-center gap-1">
                  ⭐ {item.rating} • {item.time}
                </p>
                <p className="text-xs text-gray-500">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-6">
          <button
            onClick={() => setSelectedCard(null)}
            className="mb-6 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
          >
            ← Back to All
          </button>
          <h2 className="text-xl font-bold mb-4">
            More like {selectedCard.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {selectedCard.related.map((variant, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow hover:shadow-md p-4 text-center"
              >
                <img
                  src={variant.image}
                  alt={variant.name}
                  className="w-full h-36 object-cover rounded"
                />
                <h4 className="mt-2 font-medium text-sm">{variant.name}</h4>
                <p className="text-sm text-gray-600">₹{variant.price}</p>
                <button
                  onClick={() => addToCart(variant)}
                  className="mt-2 w-full bg-green-600 hover:bg-green-700 text-white text-sm py-1 rounded"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {showCart && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative">
            <h2 className="text-xl font-bold mb-4 text-center">Your Cart</h2>
            {cart.length === 0 ? (
              <p className="text-center text-gray-500">Cart is empty.</p>
            ) : (
              <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                {cart.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-2 border rounded">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-xs text-gray-600">
                        Price: ₹{item.price} × {item.quantity} = ₹
                        {item.price * item.quantity}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          onClick={() => updateQuantity(item.name, -1)}
                          className="bg-gray-200 p-1 rounded"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.name, 1)}
                          className="bg-gray-200 p-1 rounded"
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
              <p className="text-center mt-4 font-semibold">
                Total: ₹{totalAmount}
              </p>
            )}
            <div className="flex gap-2 mt-6">
              <button className="flex-1 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                Pay Now
              </button>
              <button className="flex-1 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Order Now
              </button>
              <button
                onClick={() => setShowCart(false)}
                className="flex-1 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
              >
                Close Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
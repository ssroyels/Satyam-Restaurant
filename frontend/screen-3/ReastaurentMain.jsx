import React from "react";
import RestaurantCard from "./ReastaurentCard";


const restaurants = [
  {
    name: "Paratha Wala",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/15/4fc163ad-2895-447a-b68e-4e68dc6ba8e0_910003.JPG",
    rating: "3.7",
    time: "40–45 mins",
    cuisine: "Thalis, Snacks",
    location: "Subhash Nagar",
    offer: "30% OFF UPTO ₹150",
  },
  {
    name: "Parathe Wala",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/4b0a80423a5bf1443493578a8a09dd63",
    rating: "4.5",
    time: "40–45 mins",
    cuisine: "Indian",
    location: "Subhash Nagar",
    offer: "₹75 OFF ABOVE ₹199",
  },
  {
    name: "House Of Spice Restaurant",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/27a03c452c983d1b90f36faa2cbc0b0a",
    rating: "3.8",
    time: "50–55 mins",
    cuisine: "Indian, Thalis, Chinese",
    location: "Subhash Nagar",
    offer: "60% OFF UPTO ₹120",
  },
  {
    name: "Taste Of Home",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/529e21b6-6d97-4d38-bc8b-5e0737db8997_958243.jpg",
    rating: "–",
    time: "55–60 mins",
    cuisine: "Indian",
    location: "Subhash Nagar",
    offer: "₹40 OFF ABOVE ₹399",
  },
  {
    name: "Momo Magic",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/203b221988ce52724674f77db2382119",
    rating: "4.2",
    time: "35–40 mins",
    cuisine: "Chinese",
    location: "Subhash Nagar",
    offer: "ITEMS AT ₹79",
  },
  {
    name: "Samosa Point",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/60f6075bb5d24a7a99e13b12cf45920c",
    rating: "4.0",
    time: "30–35 mins",
    cuisine: "Snacks",
    location: "Subhash Nagar",
    offer: "10% OFF UPTO ₹40",
  },
  {
    name: "Paneer Junction",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/2/25/cbdccc19-cf4b-4f9f-8d04-b099795abfc6_1052570.jpg",
    rating: "4.3",
    time: "45–50 mins",
    cuisine: "Indian",
    location: "Subhash Nagar",
    offer: "15% OFF UPTO ₹100",
  },
];

export default function ReastaurentMain() {
  return (
    <div className="p-6 bg-[#fdfdfd] min-h-screen">
      <h2 className="text-2xl font-bold mb-4">
        Restaurants with online food delivery in Faizabad
      </h2>
      <div className="flex flex-wrap gap-6 justify-start">
        {restaurants.map((rest, idx) => (
          <RestaurantCard key={idx} restaurant={rest} />
        ))}
      </div>
    </div>
  );
}

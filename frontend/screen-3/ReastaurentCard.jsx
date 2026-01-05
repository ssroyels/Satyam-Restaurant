import React from "react";

const getRatingColor = (rating) => {
  const num = parseFloat(rating);
  if (isNaN(num)) return "bg-gray-400";
  if (num >= 4) return "bg-green-600";
  if (num >= 3) return "bg-yellow-500";
  return "bg-red-500";
};

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="group w-full max-w-xs bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
      
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Offer Badge */}
        {restaurant.offer && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-semibold text-center py-1.5">
            {restaurant.offer}
          </div>
        )}

        {/* Rating Badge */}
        {restaurant.rating && (
          <div
            className={`absolute top-2 left-2 px-2 py-1 text-xs font-bold text-white rounded-md flex items-center gap-1 ${getRatingColor(
              restaurant.rating
            )}`}
          >
            ★ {restaurant.rating}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-1">
        <h3 className="text-base font-bold text-gray-800 leading-tight truncate">
          {restaurant.name}
        </h3>

        <p className="text-xs text-gray-500">
          {restaurant.cuisine}
        </p>

        <div className="flex justify-between items-center text-xs text-gray-600 mt-1">
          <span>{restaurant.time}</span>
          <span className="truncate max-w-[120px]">{restaurant.location}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;

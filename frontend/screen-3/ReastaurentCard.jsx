import React from "react";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div  className="w-full cursor-pointer max-w-xs bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all">
      <div className="relative">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="h-40 w-full object-cover"
        />
        {restaurant.offer && (
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-sm font-semibold text-center py-1">
            {restaurant.offer}
          </div>
        )}
      </div>
      <div className="p-3">
        <h3 className="text-lg font-bold">{restaurant.name}</h3>
        <p className="text-sm text-gray-600 flex items-center gap-1">
          <span className="text-green-600 font-bold">★ {restaurant.rating}</span> ·{" "}
          {restaurant.time}
        </p>
        <p className="text-sm text-gray-600">{restaurant.cuisine}</p>
        <p className="text-sm text-gray-500">{restaurant.location}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;

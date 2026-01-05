import React from "react";

export default function Card({ data, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 w-44 p-3 text-center hover:-translate-y-1"
    >
      {/* Image */}
      <div className="overflow-hidden rounded-xl bg-gray-100">
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Text */}
      <h3 className="mt-3 text-sm font-semibold text-gray-800 truncate">
        {data.name}
      </h3>
      <p className="text-xs text-gray-500 mt-1">
        Popular choice
      </p>
    </div>
  );
}

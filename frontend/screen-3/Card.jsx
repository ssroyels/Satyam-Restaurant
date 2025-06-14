// Card.jsx
import React from "react";

export default function Card({ data, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white rounded-lg shadow hover:shadow-lg transition duration-300 w-40 p-3 text-center"
    >
      <img src={data.image} alt={data.name} className="w-full h-32 object-cover rounded-md" />
      <h3 className="mt-2 font-semibold">{data.name}</h3>
    </div>
  );
}

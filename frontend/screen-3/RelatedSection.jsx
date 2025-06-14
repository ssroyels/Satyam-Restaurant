// RelatedSection.jsx
import React from "react";

export default function RelatedSection({ selectedCard, onBack, onRelatedClick }) {
  return (
    <div className="mt-8 text-center">
      <h2 className="text-xl font-bold mb-4">Items Related to: {selectedCard.name}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
        {selectedCard.related.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 w-60 cursor-pointer hover:shadow-lg transition"
            onClick={() => onRelatedClick(item)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <p className="font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
      <button
        onClick={onBack}
        className="mt-6 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
      >
        Back
      </button>
    </div>
  );
}

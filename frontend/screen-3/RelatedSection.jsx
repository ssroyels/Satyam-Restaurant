import React from "react";

const RelatedSection = ({ selectedCard, onBack, onRelatedClick }) => {
  return (
    <section className="mt-12 px-4 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800">
          Related to{" "}
          <span className="text-orange-500">{selectedCard.name}</span>
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          You might also like these items
        </p>
      </div>

      {/* Related Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 place-items-center">
        {selectedCard.related.map((item, index) => (
          <div
            key={index}
            onClick={() => onRelatedClick(item)}
            className="group bg-white w-60 rounded-2xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-1"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-4 text-center">
              <p className="font-semibold text-gray-800 truncate">
                {item.name}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                View similar item
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Back Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={onBack}
          className="px-8 py-2.5 rounded-full bg-black text-white font-semibold tracking-wide hover:bg-gray-900 active:scale-95 transition-all"
        >
          ← Back to Menu
        </button>
      </div>
    </section>
  );
};

export default RelatedSection;

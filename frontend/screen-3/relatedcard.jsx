import React from "react";

const Relatedcard = ({ items = [] }) => {
  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {items.map((item, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
          >
            {/* Image */}
            <div className="overflow-hidden aspect-[4/3] bg-gray-100">
              <img
                src={`https://source.unsplash.com/400x300/?${item}`}
                alt={item}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-3 text-center">
              <p className="text-sm font-semibold text-gray-800 truncate">
                {item}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Popular choice
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Relatedcard;

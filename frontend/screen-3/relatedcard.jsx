import React from "react";

const Relatedcard = ({ items }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="p-3 border rounded-xl hover:shadow-md transition text-center"
        >
          <img
            src={`https://source.unsplash.com/400x300/?${item}`}
            alt={item}
            className="w-full h-28 object-cover rounded-md mb-2"
          />
          <p className="text-sm font-semibold">{item}</p>
        </div>
      ))}
    </div>
  );
};

export default Relatedcard;

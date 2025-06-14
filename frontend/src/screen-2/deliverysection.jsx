import React from 'react';

const data = [
  {
    title: 'Restaurent One',
    image: 'https://www.swiggy.com/corporate/wp-content/uploads/2024/10/swiggy-768x765.webp',
  },
  {
    title: 'HDFC Credit Card',
    image: 'https://www.swiggy.com/corporate/wp-content/uploads/2024/10/hdfcs-card-768x714.webp',
  },
  {
    title: 'Ride With Singh-Restaurent',
    image: 'https://www.swiggy.com/corporate/wp-content/uploads/2024/10/Desktop-3-768x513.png',
  },
  {
    title: 'Partner Programme',
    image: 'https://www.swiggy.com/corporate/wp-content/uploads/2024/10/swiggy-768x699.png',
  },
  {
    title: 'Flavour Meets Fame',
    image: 'https://www.swiggy.com/corporate/wp-content/uploads/2024/10/Resto-Comp_TB.webp',
  },
];

const DeliveringForEveryone = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Animated Glowing Lights */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300 opacity-30 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-20 w-72 h-72 bg-purple-300 opacity-20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-300 opacity-10 rounded-full filter blur-[160px] animate-pulse" />
      </div>

      {/* Actual Content */}
      <div className="relative z-10 py-16 px-6 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">DELIVERING FOR EVERYONE</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Multiple benefits across the ecosystem for consumers, partners and riders.
          </p>
        </div>

        {/* Horizontal Scroll */}
        <div className="overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex gap-6 w-max px-4">
            {data.map((item, index) => (
              <div
                key={index}
                className="min-w-[200px] bg-white rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transform transition-all duration-300 p-4 flex flex-col items-center text-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-full mb-3 border-4 border-white shadow"
                />
                <p className="text-sm font-medium text-gray-800">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveringForEveryone;

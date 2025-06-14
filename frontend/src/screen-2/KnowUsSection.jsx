import React, { useState } from "react";

const tabContent = {
  Mission: {
    text: "Our mission is to elevate the quality of life of the urban consumer by offering unparalleled convenience. Convenience is what makes us tick. It’s what makes us get out of bed and say, 'Let’s do this.'",
    image:
      "https://www.swiggy.com/corporate/wp-content/uploads/2024/10/Mission.png",
  },
  Vision: {
    text: "To be the most customer-obsessed platform delivering food, groceries, and more — faster, safer, and more sustainably than ever.",
    image:
      "https://www.shutterstock.com/image-vector/courier-on-motor-scooter-quick-600nw-736312513.jpg",
  },
  Values: {
    text: "Integrity, innovation, and impact — these are the values that guide us. We dream big, move fast, and never forget who we’re building for.",
    image:
      "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=800&q=80",
  },
};

const KnowUsSection = () => {
  const [activeTab, setActiveTab] = useState("Mission");

  return (
    <section className="py-16 px-6 md:px-20 bg-white text-gray-800">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 relative">
        <span className="absolute left-1/4 top-1/2 w-12 h-[2px] bg-orange-500 transform -translate-y-1/2" />
        <span className="px-4">GET TO KNOW US</span>
        <span className="absolute right-1/4 top-1/2 w-12 h-[2px] bg-orange-500 transform -translate-y-1/2" />
      </h2>

      <div className="flex flex-col-reverse md:grid md:grid-cols-3 gap-8 items-center">
        {/* Tabs */}
        <div className="flex md:flex-col justify-center gap-4 md:gap-8 text-center md:text-left w-full">
          {Object.keys(tabContent).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`text-lg font-semibold transition-all duration-200 w-full ${
                activeTab === key
                  ? "text-orange-500"
                  : "text-gray-400 hover:text-orange-400"
              }`}
            >
              {key}
              {activeTab === key && <span className="ml-1">→</span>}
            </button>
          ))}
        </div>

        {/* Description */}
        <div className="text-center md:text-left md:col-span-1">
          <p className="text-lg leading-relaxed">{tabContent[activeTab].text}</p>
        </div>

        {/* Image */}
        <div className="w-full rounded-3xl overflow-hidden shadow-lg aspect-[4/3] max-h-[300px] md:max-h-none">
          <img
            src={tabContent[activeTab].image}
            alt={activeTab}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default KnowUsSection;


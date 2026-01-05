import React, { useEffect, useRef, useState } from "react";

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

const tabs = Object.keys(tabContent);

const KnowUsSection = () => {
  const [activeTab, setActiveTab] = useState("Mission");
  const intervalRef = useRef(null);

  /* ================= AUTO ROTATE ================= */
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveTab((prev) => {
        const idx = tabs.indexOf(prev);
        return tabs[(idx + 1) % tabs.length];
      });
    }, 6000);

    return () => clearInterval(intervalRef.current);
  }, []);

  /* ================= PAUSE ON HOVER ================= */
  const pauseRotation = () => clearInterval(intervalRef.current);
  const resumeRotation = () => {
    intervalRef.current = setInterval(() => {
      setActiveTab((prev) => {
        const idx = tabs.indexOf(prev);
        return tabs[(idx + 1) % tabs.length];
      });
    }, 6000);
  };

  return (
    <section
      className="py-20 px-6 md:px-20 bg-white text-gray-800"
      onMouseEnter={pauseRotation}
      onMouseLeave={resumeRotation}
    >
      {/* ================= TITLE ================= */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14 relative">
        <span className="absolute left-1/4 top-1/2 w-12 h-[2px] bg-orange-500 -translate-y-1/2 hidden md:block" />
        <span className="px-4">GET TO KNOW US</span>
        <span className="absolute right-1/4 top-1/2 w-12 h-[2px] bg-orange-500 -translate-y-1/2 hidden md:block" />
      </h2>

      <div className="flex flex-col-reverse md:grid md:grid-cols-3 gap-10 items-center">
        {/* ================= TABS ================= */}
        <div
          className="flex md:flex-col justify-center gap-4 md:gap-8 w-full"
          role="tablist"
          aria-label="Know us tabs"
        >
          {tabs.map((key) => (
            <button
              key={key}
              role="tab"
              aria-selected={activeTab === key}
              tabIndex={0}
              onClick={() => setActiveTab(key)}
              onKeyDown={(e) =>
                (e.key === "Enter" || e.key === " ") &&
                setActiveTab(key)
              }
              className={`text-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? "text-orange-500"
                  : "text-gray-400 hover:text-orange-400"
              }`}
            >
              {key}
              {activeTab === key && <span className="ml-2">→</span>}
            </button>
          ))}
        </div>

        {/* ================= TEXT ================= */}
        <div
          key={activeTab}
          className="md:col-span-1 text-center md:text-left animate-fade-in"
        >
          <p className="text-lg leading-relaxed text-gray-700">
            {tabContent[activeTab].text}
          </p>
        </div>

        {/* ================= IMAGE ================= */}
        <div className="w-full rounded-3xl overflow-hidden shadow-lg aspect-[4/3] max-h-[300px] md:max-h-none">
          <img
            src={tabContent[activeTab].image}
            alt={activeTab}
            className="w-full h-full object-cover transition-opacity duration-500"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default KnowUsSection;

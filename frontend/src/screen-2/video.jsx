import React from "react";

const IpoDeliveredSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      {/* ================= HEADING ================= */}
      <div className="text-center mb-12">
        <span className="inline-block mb-3 px-4 py-1 text-xs font-semibold tracking-widest text-orange-600 bg-orange-100 rounded-full">
          MILESTONE ACHIEVED
        </span>

        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          IPO Delivered
          <span className="text-orange-500"> — November 2024</span>
        </h2>

        <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          A historic moment marking growth, trust, and the journey towards a
          stronger future.
        </p>
      </div>

      {/* ================= VIDEO ================= */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black">
          
          {/* Subtle Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-400/30 via-pink-400/20 to-purple-400/30 blur-2xl" />

          <div className="relative aspect-video rounded-3xl overflow-hidden">
            <video
              controls
              preload="metadata"
              poster="https://i.pinimg.com/736x/b4/61/a6/b461a69928f939eb6df6190be82ff8cc.jpg"
              className="w-full h-full object-cover"
            >
              <source
                src="https://www.swiggy.com/corporate/wp-content/uploads/2024/11/WhatsApp-Video-2024-11-18-at-15.49.51.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IpoDeliveredSection;

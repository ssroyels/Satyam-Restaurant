import React from "react";

const IpoDeliveredSection = () => {
  return (
    <section className="py-12 px-4 text-center bg-gradient-to-b from-white to-[#f9f7fd]">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-10 tracking-wide relative inline-block">
        <span className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full w-10 h-[2px] bg-orange-500 rounded-full animate-pulse"></span>
        IPO DELIVERED - NOVEMBER 2024
        <span className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full w-10 h-[2px] bg-orange-500 rounded-full animate-pulse"></span>
      </h2>

      {/* Video Container */}
      <div className="mx-auto max-w-4xl px-4">
        <div className="rounded-[30px] overflow-hidden shadow-2xl bg-black animate-fade-in aspect-video">
          {/* Use this if MP4 plays correctly */}
          <video
            controls
            className="w-full h-full object-cover"
            poster="https://i.pinimg.com/736x/b4/61/a6/b461a69928f939eb6df6190be82ff8cc.jpg"
          >
            <source src="https://www.swiggy.com/corporate/wp-content/uploads/2024/11/WhatsApp-Video-2024-11-18-at-15.49.51.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Or use this YouTube iframe alternative if MP4 fails */}
          {/* 
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/uGSwtLHpkUE"
            title="Swiggy IPO"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          ></iframe> 
          */}
        </div>
      </div>
    </section>
  );
};

export default IpoDeliveredSection;







import React, { useEffect, useRef, useState } from "react";
import axios from "../config/axios.js";

const teamTabs = ["Management Team", "Board of Directors"];

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState("Management Team");
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  /* ================= FETCH TEAM ================= */
  useEffect(() => {
    const getTeam = async () => {
      try {
        const res = await axios.get("/Team/getTeam", {
          withCredentials: true,
        });
        setTeam(res.data?.TeamStore || []);
      } catch (err) {
        console.error("Failed to load team");
      } finally {
        setLoading(false);
      }
    };

    getTeam();
  }, []);

  /* ================= AUTO SCROLL (MOBILE) ================= */
  useEffect(() => {
    if (!carouselRef.current) return;

    intervalRef.current = setInterval(() => {
      const el = carouselRef.current;
      if (!el) return;

      el.scrollBy({ left: 260, behavior: "smooth" });

      if (el.scrollLeft + el.offsetWidth >= el.scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, []);

  /* ================= PAUSE ON HOVER ================= */
  const pauseScroll = () => clearInterval(intervalRef.current);
  const resumeScroll = () => {
    if (!carouselRef.current) return;
    intervalRef.current = setInterval(() => {
      carouselRef.current.scrollBy({ left: 260, behavior: "smooth" });
    }, 3000);
  };

  const dataToShow =
    activeTab === "Management Team"
      ? team
      : []; // Board of Directors future-ready

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* ================= TABS ================= */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {teamTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-sm md:text-base font-semibold transition ${
              activeTab === tab
                ? "bg-orange-500 text-white shadow"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            aria-pressed={activeTab === tab}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ================= CONTENT ================= */}
      {loading ? (
        <p className="text-center text-gray-500">Loading team...</p>
      ) : dataToShow.length === 0 ? (
        <p className="text-center text-gray-400 italic">
          Content coming soon...
        </p>
      ) : (
        <>
          {/* ================= MOBILE CAROUSEL ================= */}
          <div
            ref={carouselRef}
            onMouseEnter={pauseScroll}
            onMouseLeave={resumeScroll}
            className="flex sm:hidden overflow-x-auto gap-4 pb-4 scroll-smooth snap-x snap-mandatory"
          >
            {dataToShow.map((member) => (
              <div
                key={member._id}
                className="min-w-[250px] bg-white rounded-2xl shadow-md snap-start"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-t-2xl"
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {member.department}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ================= DESKTOP GRID ================= */}
          <div className="hidden sm:grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {dataToShow.map((member) => (
              <div
                key={member._id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition hover:scale-[1.02]"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {member.department}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default TeamSection;

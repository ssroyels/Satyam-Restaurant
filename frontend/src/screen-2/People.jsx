import React, { useState, useEffect, useRef } from "react";
import axios from "../config/axios.js";

const teamTabs = ["Management Team", "Board of Directors"];



const TeamSection = () => {
  const [activeTab, setActiveTab] = useState("Management Team");
  const carouselRef = useRef(null);
  const [TeamSection,setTeamSection] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: 260, behavior: "smooth" });

        // Reset scroll to start if reached end
        if (
          carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >=
          carouselRef.current.scrollWidth
        ) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);

  
  }, []);

  useEffect ( () => {
      const getTeam = async () => {

      const TeamStore = await axios.get("/Team/getTeam");
    
      setTeamSection(TeamStore.data.TeamStore);

    
    }
    getTeam();
  },[])

  const dataToShow = activeTab === "Management Team" ? TeamSection : [];
  

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {teamTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 ${
              activeTab === tab
                ? "bg-orange-500 text-white shadow"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Team Cards */}
      {dataToShow.length > 0 ? (
        <>
          {/* Mobile Carousel */}
          <div
            ref={carouselRef}
            className="flex sm:hidden overflow-x-auto gap-4 pb-4 scroll-smooth snap-x snap-mandatory"
          >
            {dataToShow.map((member, index) => (
              <div
                key={index}
                className="min-w-[250px] flex-shrink-0 bg-white rounded-2xl shadow-md snap-start"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500">{member.department}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Grid Layout for Tablet & Desktop */}
          <div className="hidden sm:grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {dataToShow.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform hover:scale-105"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 object-cover"
                />
                <div className="p-5">
                  <h3 className="font-bold text-xl text-gray-800">
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
      ) : (
        <div className="text-center text-gray-400 italic mt-10">
          Content coming soon...
        </div>
      )}
    </section>
  );
};

export default TeamSection;

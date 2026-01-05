import React, { useEffect } from "react";
import NavBar2 from "./NavBar2";
import Footer from "../screens/Footer";

const Screenroute = () => {
  // 🔹 Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full min-h-screen overflow-x-hidden flex flex-col">
      {/* Header */}
      <NavBar2 />

      {/* Page Content */}
      <main className="flex-1">
        {/* Future content goes here */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Screenroute;

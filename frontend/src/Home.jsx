import React from "react";
import Navbar from "./screens/Navbar";
import Middle from "./screens/Middle";
import Footer from "./screens/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="mx-4 md:mx-0">
        <Middle />
        <Footer />
      </div>
    </>
  );
};

export default Home;


import React from "react";
import Navbar from "./screens/Navbar";
import Middle from "./screens/middle";
import Footer from "./screens/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="mx-4 md:mx-0">
      
        <Middle />
        <Footer />
      </div>
      x
    </>
  );
};

export default Home;

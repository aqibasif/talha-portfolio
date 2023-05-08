import React from "react";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <div data-scroll data-scroll-section>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;

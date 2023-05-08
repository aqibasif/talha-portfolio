import React from "react";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Introduction from "../components/Introduction/Introduction";

const Home = () => {
  return (
    <>
      {/* <div data-scroll data-scroll-section> */}
      <Navbar />
      <Hero />
      <Introduction />
    </>
  );
};

export default Home;

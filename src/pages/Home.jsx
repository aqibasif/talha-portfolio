import React from "react";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Introduction from "../components/Introduction/Introduction";
import Services from "../components/Services/Services";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      {/* <div data-scroll data-scroll-section> */}
      <Navbar />
      <Hero />
      <Introduction />
      <Services />
      {/* Projects will come here */}
      <Footer />
    </>
  );
};

export default Home;

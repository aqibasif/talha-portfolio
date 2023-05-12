import React from "react";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Introduction from "../components/Introduction/Introduction";
import Services from "../components/Services/Services";
import Footer from "../components/Footer/Footer";
import MyProjects from "../components/MyProjects/MyProjects";

const Home = ({ locoScroll }) => {
  return (
    <>
      <Navbar />
      <Hero locoScroll={locoScroll} />
      <Introduction />
      <Services />
      <MyProjects />
      <Footer />
    </>
  );
};

export default Home;

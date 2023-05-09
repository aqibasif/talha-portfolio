import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div
      data-scroll-section
      className='navbar'
      data-scroll
      data-scroll-speed='5'
      data-scroll-position='top'
    >
      <p
        className='pc-only'
        // data-scroll
        // data-scroll-speed='-3'
        // data-scroll-delay='0.05'
        // data-scroll-position='top'
      >
        TEMPORARY PORTFOLIO OF
      </p>
      <p
      // data-scroll
      // data-scroll-speed='-3'
      // data-scroll-delay='0.1'
      // data-scroll-position='top'
      >
        MUHAMMAD AQIB ASIF
      </p>
      <p
        // data-scroll
        // data-scroll-speed='-3'
        // data-scroll-delay='0.2'
        // data-scroll-position='top'
        className='pc-only'
      >
        AQIBASIF48@GMAIL.COM
      </p>
    </div>
  );
};

export default Navbar;

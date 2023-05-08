import React, { useState, useEffect } from "react";
import "./navbar.scss";

const Navbar = () => {
  // const [offsetY, setOffsetY] = useState(0);

  // const handleScroll = () => setOffsetY(window.pageYOffset);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className='navbar' data-scroll data-scroll-section>
      <p
        className='pc-only'
        data-scroll
        data-scroll-speed='-1'
        data-scroll-delay='0.05'
        data-scroll-position='top'
      >
        TEMPORARY PORTFOLIO OF
      </p>
      <p
        data-scroll
        data-scroll-speed='-1'
        data-scroll-delay='0.1'
        data-scroll-position='top'
      >
        MUHAMMAD AQIB ASIF
      </p>
      <p
        data-scroll
        data-scroll-speed='-1'
        data-scroll-delay='0.2'
        data-scroll-position='top'
        className='pc-only'
      >
        AQIBASIF48@GMAIL.COM
      </p>
    </div>
  );
};

export default Navbar;

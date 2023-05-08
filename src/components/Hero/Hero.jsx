import React, { useState, useEffect } from "react";
import "./hero.scss";

const Hero = () => {
  // const [offsetY, setOffsetY] = useState(0);

  // const handleScroll = () => setOffsetY(window.pageYOffset);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div
      data-scroll
      data-scroll-section
      // data-scroll-repeat
      // data-scroll-section-inview
      className='hero'
    >
      <div className='main-head' data-scroll >
        <div
          data-scroll
          data-scroll-speed='5'
          // data-scroll-delay='0.05'
          data-scroll-position='top'
        >
          <h1 className='main-heading'>THINKER</h1>
        </div>
        <div
          data-scroll
          data-scroll-speed='3.5'
          // data-scroll-delay='0.07'
          data-scroll-position='top'
        >
          <h1 className='main-heading2'>DESIGNER</h1>
        </div>
        <div
          data-scroll
          data-scroll-speed='2'
          // data-scroll-delay='0.09'
          data-scroll-position='top'
        >
          <h1 className='main-heading3'>DEVELOPER</h1>
        </div>
      </div>

      {/* <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6 p-5'> */}
      <div className='main-img' data-scroll>
        <img
          // style={
          //   offsetY < window.innerHeight + 350
          //     ? {
          //         transform: `translateY(${
          //           window.innerWidth > 500 ? offsetY * 0.1 : offsetY * 0.12
          //         }px)`,
          //       }
          //     : {}
          // }
          className='hero-img'
          src='/img/mocky.jpg'
          alt='Hero'
          data-scroll
          data-scroll-speed='1.5'
          data-scroll-postion='top'
        />
      </div>
      {/* </div>
        <div className='col-md-3'></div>
      </div> */}
    </div>
  );
};

export default Hero;

import React, { useRef } from "react";
import "./hero.scss";

const Hero = ({ locoScroll }) => {
  const heading1 = useRef(null);
  const heading2 = useRef(null);
  const heading3 = useRef(null);

  locoScroll?.on("scroll", (args) => {
    // console.log("SC ARGS", args);
    if (args?.currentElements?.el1?.inView) {
      let scrollY = args?.scroll?.y || 0;
      heading1.current.style.transform = `scale(${
        1 - scrollY * 0.0006 >= 0 ? 1 - scrollY * 0.00065 : 0
      })`;
      heading2.current.style.transform = `scale(${
        1 - scrollY * 0.0004 >= 0 ? 1 - scrollY * 0.0005 : 0
      })`;
      heading3.current.style.transform = `scale(${
        1 - scrollY * 0.0002 >= 0 ? 1 - scrollY * 0.00035 : 0
      })`;
    }
  });

  return (
    <div data-scroll-section className='hero'>
      <div className='hero-headings' data-scroll>
        <div
          data-scroll
          // data-scroll-speed='3'
          data-scroll-speed='2'
          // data-scroll-delay='0.05'
          data-scroll-delay='0.05'
          data-scroll-position='top'
        >
          <h1 ref={heading1} className='heading-1'>
            THINKER
          </h1>
        </div>
        <div
          data-scroll
          // data-scroll-speed='3.5'
          data-scroll-speed='3'
          // data-scroll-delay='0.03'
          data-scroll-delay='0.04'
          data-scroll-position='top'
        >
          <h1 ref={heading2} className='heading-2'>
            DESIGNER
          </h1>
        </div>
        <div
          data-scroll
          // data-scroll-speed='4'
          data-scroll-speed='4'
          // data-scroll-delay='0.01'
          data-scroll-delay='0.03'
          data-scroll-position='top'
        >
          <h1 ref={heading3} className='heading-3'>
            DEVELOPER
          </h1>
        </div>
      </div>

      <div className='hero-img-container' data-scroll>
        <img
          className='hero-img'
          src='/img/mocky.jpg'
          alt='Hero'
          data-scroll
          data-scroll-speed='-1'
          data-scroll-postion='top'
        />
      </div>
    </div>
  );
};

export default Hero;

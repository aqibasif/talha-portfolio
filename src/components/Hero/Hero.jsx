import React from "react";
import "./hero.scss";

const Hero = () => {
  // const { scroll } = useLocomotiveScroll();

  // console.log("SC", scroll);

  // scroll?.on("scroll", (args) => {
  //   // Get all current elements : args.currentElements
  //   // if (typeof args.currentElements["hey"] === "object") {
  //   //   let progress = args.currentElements["hey"].progress;
  //   //   console.log(progress);
  //   //   // ouput log example: 0.34
  //   //   // gsap example : myGsapAnimation.progress(progress);
  //   // }
  // });
  
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-section-inview
      className='hero'
    >
      <div className='hero-headings' data-scroll>
        <div
          data-scroll
          data-scroll-speed='3'
          data-scroll-delay='0.05'
          data-scroll-position='top'
        >
          <h1 className='heading-1'>THINKER</h1>
        </div>
        <div
          data-scroll
          data-scroll-speed='4'
          data-scroll-delay='0.1'
          data-scroll-position='top'
        >
          <h1 className='heading-2'>DESIGNER</h1>
        </div>
        <div
          data-scroll
          data-scroll-speed='5'
          data-scroll-delay='0.2'
          data-scroll-position='top'
        >
          <h1 className='heading-3'>DEVELOPER</h1>
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

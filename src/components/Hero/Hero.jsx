import React from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import "./hero.scss";

const Hero = () => {
  const { scroll } = useLocomotiveScroll();

  console.log("SC", scroll);

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
      // data-scroll-repeat
      data-scroll-section-inview
      className='hero'
    >
      <div className='main-head' data-scroll>
        <div
          data-scroll
          data-scroll-speed='2'
          data-scroll-delay='0.05'
          data-scroll-position='top'
        >
          <h1 className='main-heading'>THINKER</h1>
        </div>
        <div
          data-scroll
          data-scroll-speed='2'
          data-scroll-delay='0.1'
          data-scroll-position='top'
        >
          <h1 className='main-heading2'>DESIGNER</h1>
        </div>
        <div
          data-scroll
          data-scroll-speed='2'
          data-scroll-delay='0.2'
          data-scroll-position='top'
        >
          <h1 className='main-heading3'>DEVELOPER</h1>
        </div>
      </div>

      {/* <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6 p-5'> */}
      <div
        className='main-img'
        data-scroll
        // data-scroll-call='dynamicBackground'
      >
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
          data-scroll-speed='0.5'
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

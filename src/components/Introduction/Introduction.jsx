import React, { useState, useEffect, useRef } from "react";
import "./introduction.scss";

const Introduction = ({ theme }) => {
  const [appear, setAppear] = useState(false);
  // const introRef = useRef();

  // const handleScroll = () => {
  //   var top = window.pageYOffset;

  //   var introOffset;
  //   if (window.innerWidth < 450)
  //     introOffset = introRef.current.offsetTop - window.innerHeight + 320;
  //   else introOffset = introRef.current.offsetTop - window.innerHeight + 380;

  //   if (top >= introOffset) setAppear(true);
  //   else setAppear(false);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div
      // ref={introRef}
      className={`intro intro-${theme}`}
      data-scroll
      data-scroll-section
      data-scroll-repeat
      data-scroll-section-inview
    >
      <div className='textbox'>
        <h4 className={appear ? "" : "hide-heading"}>WELCOME</h4>
      </div>
      <div className='textbox'>
        <p className={appear ? "" : "hide"} data-scroll>
          I'm Muhammad Aqib Asif, Designer and Full stack Developer based in
          Pakistan. I work as a freelancer with agencies, start-ups and
          individuals. I have a fondness for interaction design, beautiful
          animations and creative development.
          <br />
          <br />
          Currently : I am available to work on creative projects.
        </p>
      </div>
    </div>
  );
};

export default Introduction;

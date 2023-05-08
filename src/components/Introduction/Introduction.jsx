import React, { useState, useEffect, useRef } from "react";
import "./introduction.scss";

const Introduction = ({ theme }) => {
  return (
    <section
      // ref={introRef}
      // className={`intro intro-${theme}`}
      className={`intro intro-${theme}`}
      // data-scroll
      data-scroll-section
      // data-scroll-repeat
      // data-scroll-section-inview
    >
      <div className='textbox'>
        <h4
          // className={appear ? "" : "hide-heading"}
          data-scroll
          data-scroll-inview
          data-scroll-repeat
        >
          WELCOME
        </h4>
      </div>
      <div className='textbox'>
        <p
          // className={appear ? "" : "hide"}
          data-scroll
          data-scroll-inview
          data-scroll-repeat
        >
          I'm Muhammad Aqib Asif, Designer and Full stack Developer based in
          Pakistan. I work as a freelancer with agencies, start-ups and
          individuals. I have a fondness for interaction design, beautiful
          animations and creative development.
          <br />
          <br />
          Currently : I am available to work on creative projects.
        </p>
      </div>
    </section>
  );
};

export default Introduction;

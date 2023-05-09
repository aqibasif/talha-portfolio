import React from "react";
import "./introduction.scss";

const Introduction = ({ theme = "light" }) => {
  return (
    <section
      // className={`intro intro-${theme}`}
      className={`intro intro-${theme}`}
      data-scroll-section
    >
      <div className='textbox'>
        <h4 data-scroll data-scroll-inview data-scroll-repeat>
          WELCOME
        </h4>
      </div>
      <div className='textbox'>
        <p data-scroll data-scroll-inview data-scroll-repeat>
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

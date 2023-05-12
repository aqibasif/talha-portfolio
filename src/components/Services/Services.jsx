import React from "react";
import "../Introduction/introduction.scss";

const Services = () => {
  return (
    <div className='intro' data-scroll-section>
      <div className='textbox'>
        <h4
          data-scroll
          data-scroll-inview
          data-scroll-repeat
          data-scroll-offset='100px, -100px'
        >
          SERVICES
        </h4>
      </div>
      <div>
        <div className='textbox'>
          <p
            data-scroll
            data-scroll-inview
            data-scroll-repeat
            data-scroll-offset='100px, -100px'
          >
            I’m working as a creative designer and full stack developer across
            UX/UI Design, Websites, IOS Andriod apps and I am constantly
            exploring new opportunities. My clients range from small startups
            and independents to large global brands. Take a look at my work
            overview!
            <br />
            <br />
            Currently I'm working in following technologies.
          </p>
          <br />
        </div>

        <div className='textbox'>
          <p
            data-scroll
            data-scroll-inview
            data-scroll-repeat
            data-scroll-offset='100px, -100px'
          >
            <i className='fab fa-react'></i>
            <i className='fab fa-node'></i>
            <i className='fab fa-apple'></i>
            <i className='fab fa-android'></i>
            <i className='fab fa-js-square'></i>
            <i className='fab fa-wordpress'></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

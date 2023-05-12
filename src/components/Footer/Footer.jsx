import React from "react";
import "../Introduction/introduction.scss";
import "./footer.scss";

const Footer = ({ theme = "light" }) => {
  return (
    <div data-scroll-section>
      <div className={`intro-${theme} upper-footer`}>
        <div className='footer'>
          <div className='textbox'>
            <h4
              data-scroll
              data-scroll-inview
              data-scroll-repeat
              data-scroll-offset='40px'
            >
              HAVE A CREATIVE IDEA?
            </h4>
          </div>

          <div className='textbox'>
            <div
              className='link-button'
              data-scroll
              data-scroll-inview
              data-scroll-repeat
              data-scroll-offset='40px'
            >
              <h4>
                <a href='mailto:aqibasif48@gmail.com?subject=I have a creative idea'>
                  LET'S TALK!
                </a>
              </h4>
              <div className={`line line-${theme}`}></div>
            </div>
          </div>
        </div>
      </div>

      <div className='lower-footer'>
        <p
          data-scroll
          data-scroll-inview
          data-scroll-repeat
          // data-scroll-offset='15px'
        >
          Muhammad Aqib Asif © {new Date().getFullYear()}. Made in Pakistan.
        </p>
      </div>
    </div>
  );
};

export default Footer;

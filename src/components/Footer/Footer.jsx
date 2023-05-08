import React from "react";
import "../Introduction/introduction.scss";
import "./footer.scss";

const Footer = ({ theme = "light" }) => {
  return (
    <div data-scroll-section>
      <div className={`intro-${theme}`}>
        <div className='upper-footer'>
          <div className='footer'>
            <h3>HAVE A CREATIVE IDEA?</h3>

            <div className='link-button'>
              <h3>
                <a href='mailto:aqibasif48@gmail.com?subject=I have a creative idea'>
                  LET'S TALK!
                </a>
              </h3>
              <div className={`line line-${theme}`}></div>
            </div>
          </div>
        </div>
      </div>

      <div className='lower-footer'>
        <p>
          Muhammad Aqib Asif © {new Date().getFullYear()}. Made in Pakistan.
        </p>
      </div>
    </div>
  );
};

export default Footer;

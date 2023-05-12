import React, { useState, useEffect, useRef } from "react";
// import detect from "detect.js";

const tabletWidth = 968;

function getWidth() {
  const { innerWidth: width } = window;
  return width;
}

const descriptionBlock = (title, description, techs, link, format, width) => {
  return (
    <div
    // data-scroll data-scroll-speed='-0.7'
    >
      <div
        className='project-details'
        style={
          format === "2" && width > tabletWidth ? { textAlign: "right" } : {}
        }
      >
        <h2 className='project-title'>{title}</h2>
        <p className='project-description'>{description}</p>
        <p className='project-description'>
          <span>Technologies used: </span>
          {techs}
        </p>
        <p>
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='project-link'
          >
            Link to visit
          </a>
        </p>
      </div>
    </div>
  );
};

const imageBlock = (id, img) => {
  return (
    // <div className='col-md-6'>
    <div className='project-img-block' data-scroll>
      <img
        // style={{ transform: `translateY(${offsetY * 1.75}px)` }}
        src={img}
        alt='img'
        className='project-img'
        data-scroll
        data-scroll-speed='4'
        data-scroll-offset='-80px' // Just for testing
        // data-scroll-offset='-600px'
        // data-scroll-delay='0.05'

        // data-scroll-position='bottom'
      />
      <h1 className='p-head'>{id}</h1>
    </div>
    // </div>
  );
};

const Project = ({ id, title, description, techs, img, link, format }) => {
  const [width, setWidth] = useState(getWidth());

  useEffect(() => {
    const handleResize = () => setWidth(getWidth());
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return format === "1" && width > tabletWidth ? (
    <div className='project' data-scroll-section>
      {descriptionBlock(title, description, techs, link)}
      {imageBlock(id, img)}
    </div>
  ) : (
    <div className='project' data-scroll-section>
      {imageBlock(id, img)}
      {descriptionBlock(title, description, techs, link, format, width)}
    </div>
  );
};

export default Project;

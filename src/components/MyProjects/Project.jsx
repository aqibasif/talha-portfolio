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

const imageBlock = (id, img, offsetY) => {
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
  const [offsetY, setOffsetY] = useState(0);
  const projectRef = useRef();

  useEffect(() => {
    const handleResize = () => setWidth(getWidth());

    // const handleScroll = () => {
    //   var top = window.pageYOffset;
    //   const height = window.innerHeight;
    //   const offSetTop = projectRef.current.offsetTop;

    //   // const user = detect.parse(navigator.userAgent);
    //   const isSafari = true;
    //   // user.browser.family.includes("Safari");

    //   // handle scrolling for large screens

    //   var projectOff;
    //   if (getWidth() < 768)
    //     projectOff = offSetTop - height + (isSafari ? 0 : 250);
    //   else projectOff = offSetTop - height + 150 + (isSafari ? 0 : 200);

    //   if (top >= projectOff) {
    //     var val = top - projectOff;
    //     var movingval = -0.3 * val;

    //     setOffsetY(movingval);
    //   }
    // };

    window.addEventListener("resize", handleResize);
    // window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      // window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return format === "1" && width > tabletWidth ? (
    <div
      // ref={projectRef}
      className='project'
      data-scroll-section
    >
      {descriptionBlock(title, description, techs, link)}
      {imageBlock(id, img, offsetY)}
    </div>
  ) : (
    <div
      // ref={projectRef}
      className='project'
      data-scroll-section
    >
      {imageBlock(id, img, offsetY)}
      {descriptionBlock(title, description, techs, link, format, width)}
    </div>
  );
};

export default Project;

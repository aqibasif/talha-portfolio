import React, { useState, useRef } from "react";
import projectsList from "../../utils/projectsList";
import Project from "./Project";
import "./myProjects.scss";

const MyProjects = () => {
  return (
    // <div
    //   // ref={projectsRef}
    //   className='projects'
    //   data-scroll-section
    // >
    <>
      <div className='projects-inner-div' data-scroll-section>
        <div className='textbox'>
          <h1
            className={`myprojects`}
            data-scroll
            data-scroll-inview
            data-scroll-repeat
            data-scroll-offset='100px, -100px'
          >
            {/* <h1 className={`myprojects ${appear ? "" : "hide-heading"}`}> */}
            MY PROJECTS
          </h1>
        </div>
        <div className='space' />
      </div>

      {/* 
        <br />
        <br /> */}

      {projectsList.map((project) => {
        return (
          <Project
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            techs={project.techs}
            link={project.link}
            img={project.img}
            format={project.format}
          />
        );
      })}
    </>
    // </div>
  );
};

export default MyProjects;

import React from "react";
import projectsList from "../../utils/projectsList";
import Project from "./Project";
import "./myProjects.scss";

const MyProjects = () => {
  return (
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
            MY PROJECTS
          </h1>
        </div>
        <div className='space' />
      </div>

      {projectsList.map((project, idx) => {
        return (
          <Project
            key={idx + 1}
            id={"0" + (idx + 1)}
            title={project.title}
            description={project.description}
            techs={project.techs}
            link={project.link}
            img={project.img}
            format={idx % 2 === 0 ? "1" : "2"}
          />
        );
      })}
    </>
  );
};

export default MyProjects;

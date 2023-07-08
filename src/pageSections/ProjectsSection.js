import React from "react";
import "../index.css";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function ProjectSection() {
  return (
    <>
      <div className="row">
        <div className="col-md-02 projects-font">
          <span id="first-project">Projects</span>
        </div>
      </div>

      <div className="row d-flex justify-content-between mt-4">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={project.name}
              name={project.name}
              deployedUrl={project.deployedUrl}
              png={project.png}
              description={project.description}
              keywords={project.keywords}
              githubUrl={project.githubUrl}
            />
          );
        })}
      </div>
    </>
  );
}

export default ProjectSection;

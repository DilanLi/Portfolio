import React from "react";
import "../index.css";
import ProjectCard from "../components/ProjectCard";
import Projects from "../data/projects.json";
import lonewolf from "../assets/lonewolf.png";
import exodus from "../assets/exodus.png";
import llamacornIsland from "../assets/llamacorn-island.png";
import scout19 from "../assets/scout19.png";
import eatDaBurger from "../assets/eat-da-burger.png";
import weatherDashboard from "../assets/weather-dashboard.png";


function ProjectSection() {

    let data = Projects.projects;

    return (
        <>
            <div className="row">
                <div className="col-md-02 projects-font">
                    <span id="first-project">Projects</span>
                </div>
            </div>

            <div className="row d-flex justify-content-between mt-4">
                <ProjectCard name={data[0].name} deployedUrl={data[0].deployedUrl} png={lonewolf} description={data[0].description} keywords={data[0].keywords} githubUrl={data[0].githubUrl} />
                <ProjectCard name={data[1].name} deployedUrl={data[1].deployedUrl} png={scout19} description={data[1].description} keywords={data[1].keywords} githubUrl={data[1].githubUrl} />
            </div>

            <div className="row d-flex justify-content-between mt-5">
                <ProjectCard name={data[3].name} deployedUrl={data[3].deployedUrl} png={llamacornIsland} description={data[3].description} keywords={data[3].keywords} githubUrl={data[3].githubUrl} />
                <ProjectCard name={data[2].name} deployedUrl={data[2].deployedUrl} png={exodus} description={data[2].description} keywords={data[2].keywords} githubUrl={data[2].githubUrl} />
            </div>

            <div className="row d-flex justify-content-between mt-5">
                <ProjectCard name={data[4].name} deployedUrl={data[4].deployedUrl} png={weatherDashboard} description={data[4].description} keywords={data[4].keywords} githubUrl={data[4].githubUrl} />
                <ProjectCard name={data[5].name} deployedUrl={data[5].deployedUrl} png={eatDaBurger} description={data[5].description} keywords={data[5].keywords} githubUrl={data[5].githubUrl} />
            </div>

        </>
    );
}

export default ProjectSection;
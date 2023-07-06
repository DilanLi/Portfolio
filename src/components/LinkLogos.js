import React from "react";
import "../index.css";
import githubLogo from "../assets/github.svg";
import linkedinLogo from "../assets/linkedin.png";
import resume from "../assets/resume.pdf";


function LinkLogos() {
    return (
              <div className="logos-list mr-5 mt-3">
                    <a href="https://github.com/DilanLi" target="_blank" rel="noopener noreferrer"><img src={githubLogo} alt="github logo"
                            className='logos'/></a>
                    <a href="https://www.linkedin.com/in/dilan-li-b3a8b3170" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo}
                            alt="linkedin logo" className="logos"/></a>
                    <a href={resume} target="_blank" rel="noopener noreferrer"><button type="button"
                            className="btn btn-warning resume">resume</button></a>
                </div>
    );
}

export default LinkLogos;
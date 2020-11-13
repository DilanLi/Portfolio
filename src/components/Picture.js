import React from "react";
import "../index.css";
import professionalProfile from "../assets/headshot.png";
import goofyProfile from "../assets/headshot2.png"


function Picture() {
  return (
    <div className="col-md-4 col-sm-8 profile-container">
                <img className="img-fluid" src={professionalProfile} alt="professional-profile" id="profile-picture"/>
                <img className="img-fluid" src={goofyProfile} alt="goofy-profile" id="profile-picture2"/>
            </div>
  );
}

export default Picture;
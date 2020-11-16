import React from "react";
import "../index.css";
import professionalProfile from "../assets/headshot.png";
import goofyProfile from "../assets/headshot2.png"


function Picture() {
  return (
    <div className="col-md-4 profile-container d-flex justify-content-center">
                <img  src={professionalProfile} alt="professional-profile" id="profile-picture"/>
                <img  src={goofyProfile} alt="goofy-profile" id="you-found-the-easter-egg"/>
            </div>
  );
}

export default Picture;
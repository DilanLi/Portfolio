import React from "react";
import "../index.css";
import Introduction from "../components/Introduction";
import LinkLogos from "../components/LinkLogos";
import Picture from "../components/Picture"

function introductionSection() {
  return (
    <div className="row about-me d-flex justify-content-center">
      <div className="description col-md-6 col-sm-10">
        <Introduction />
        <LinkLogos />
      </div>
      <Picture />
    </div>
  );
}

export default introductionSection;

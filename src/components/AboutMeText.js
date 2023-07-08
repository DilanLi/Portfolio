import React from "react";
import "../index.css";

function AboutMeText() {
  return (
    <div className="row">
      <div className="col-md-2 col-sm-10 mx-2 mb-3" id="projects-title">
        <span id="about-title">About</span>
      </div>
      <div className="col-md-9 col-sm-12 mx-2 about-me-text">
        I am a full stack web developer who strives to deliver intuitive and impactful user
        experiences. My dream is to contribute to products and applications that enhance people’s everyday life,
        and have fun doing so! <span aria-label="sunglasses emoji" role="img">😎</span>
        <br/><br/>
        I grew up in China and now live in Salt Lake City, Utah. Growing up in two distinct cultures, I became a
        person who likes to maintain an open perspective and a curious mind. I love traveling, books, coffee,
        cats, good food, video games, and much more.
        <br/><br/>

        Scroll down to see some personal projects I did for fun.
    </div>
    </div>
  );
}

export default AboutMeText;
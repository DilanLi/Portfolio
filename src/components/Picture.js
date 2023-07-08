import "../index.css";
import headshot from "../assets/headshot.png";
import headshot2 from "../assets/headshot2.png";

function Picture() {
  return (
    <div className="col-md-4 profile-container d-flex justify-content-center">
      <div className="profile">
        <img src={headshot2} alt="goofy-profile" className="profile-back" />
        <img
          src={headshot}
          alt="professional-profile"
          className="profile-front"
        />
      </div>
    </div>
  );
}

export default Picture;

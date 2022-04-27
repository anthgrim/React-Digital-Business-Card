import React from "react";
import bio from "../images/bio.jpeg";

const Header = () => {
  return (
    <header>
      <img src={bio} alt="bio" className="card-img" />
      <h4 className="name">Kevin Grimaldi</h4>
      <h5 className="title">Full Stack Developer</h5>
      <a href="https://anthgrimk.dev/" className="link">
        anthgrimk.dev
      </a>
      <div className="btn-group">
        <button className="btn email-btn" href="mailto:anthgrim@icloud.com">
          Email
        </button>
        <button
          className="btn media-btn"
          href="https://www.linkedin.com/in/kevin-grimaldi-392b44178/"
        >
          LinkedIn
        </button>
      </div>
    </header>
  );
};

export default Header;

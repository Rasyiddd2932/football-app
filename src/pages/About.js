import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <img
        src="https://media.tenor.com/xkLBXVT-uYgAAAAC/siuu.gif"
        alt="siuuu"
        className="about-image"
      />
      <h2>About</h2>
      <p className="about-description">
        This is a simple React app that uses the{" "}
        <a
          href="https://www.football-data.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Football Data API
        </a>{" "}
        to display information about football teams and competitions.
      </p>
    </div>
  );
};

export default About;

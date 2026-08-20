import React from "react";
import profileImage from "../assets/pas photo (transparent).png";

function Home() {
  return (
    <div className="home-page">
      <div className="menu-bar">
        <div className="logo">
          <p className="semi-bold-medium">Faqihuddin Al-Ghiffary</p>
        </div>
        <div className="menus">
          <a href="#about">About Me</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>
      </div>
      <div className="profile">
        <div className="profile-description">
          <p className="semi-bold-medium">{"Hello I'm"}</p>
          <p className="larger-bold">Faqihuddin Al-Ghiffary</p>
          <p className="semi-bold-medium">
            Mechatronics and Artificial Intelligence Undergraduate
          </p>
          <br />
          <br />
          <p className="paragraph">
            A student studying Artificial Intelligence with a keen interest in
            the latest developments across Machine Learning, Deep Learning,
            Natural Language Processing, Generative AI, and cutting-edge AI
            technologies. Experienced in executing various projects involving AI
            model development, data analytics dashboard creation, and the
            implementation of automated machine learning systems.
          </p>
          <br />
          <a className="contact-button" href="#contact">
            Contact Me
          </a>
        </div>
        <div className="profile-image">
          <img src={profileImage} alt="Profile" />
        </div>
      </div>
    </div>
  );
}

export default Home;

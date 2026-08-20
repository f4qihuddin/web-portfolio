import React from "react";
import universityLogo from "../assets/logo upi.png";
import dicodingLogo from "../assets/dicoding-logo.png";
import bulletListIcon from "../assets/bullet-list.svg";

function Education() {
  return (
    <div id="education" className="education-page">
      <p className="semi-bold-large">Education</p>
      <div className="university-info">
        <div className="university-logo">
          <img src={universityLogo} />
        </div>
        <div className="university-description">
          <p className="semi-bold-medium">Universitas Pendidikan Indonesia</p>
          <p className="regular-small">
            Mechatronics and Artificial Intelligence
          </p>
          <p className="regular-small">2023 - Present</p>
        </div>
      </div>
      <br />
      <p className="paragraph">
        Currently pursuing bachelor degree majoring in Mechatronic and
        Artificial Intelligence. During my learning journey, i learned a lot
        about Artificial Intelligence from basic concepts of AI, Machine
        Learning, and also Deep Learning. Besides that, i have done multiple AI
        projects. Besides mandatory classes, i also participated and got
        certified by joining various online courses to further boost my skill
      </p>
      <br />
      <p className="semi-bold-small">Recent courses i finished: </p>
      <br />
      <div className="courses">
        <div className="dicoding-logo">
          <img src={dicodingLogo} />
        </div>
        <div>
          <div className="course-item">
            <img src={bulletListIcon} />
            <p>AWS AI Academy 2026</p>
          </div>
          <div className="course-item">
            <img src={bulletListIcon} />
            <p>Pijak in Colaboration with IBM SkilsBuild</p>
          </div>
          <div className="course-item">
            <img src={bulletListIcon} />
            <p>Microsoft Elevate Training Center</p>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Education;

import { useState } from "react";
import AIIcon from "../assets/ai-icon.svg";
import BackendIcon from "../assets/code-window.svg";
import pythonIcon from "../assets/python_5968350.png";
import tensorflowIcon from "../assets/TensorFlow.png";
import scikitIcon from "../assets/scikit-learn.png";
import mlflowIcon from "../assets/MLflow_idOeRd2gAI_0.png";
import prometheusIcon from "../assets/Prometheus.png";
import grafanaIcon from "../assets/Grafana.png";
import streamlitIcon from "../assets/Streamlit.png";
import reactIcon from "../assets/React.png";
import jsIcon from "../assets/JavaScript.png";
import javaIcon from "../assets/Java.png";
import phpIcon from "../assets/PHP.png";
import htmlIcon from "../assets/HTML5.png";
import cssIcon from "../assets/CSS3.png";
import CIcon from "../assets/C.png";
import mysqlIcon from "../assets/MySQL.png";

function Skills() {
  const [activeButton, setActiveButton] = useState("ai");

  return (
    <div id="skills" className="skills-page">
      <p className="semi-bold-large">Skills</p>
      <div
        className={`nav-bar ${activeButton ? `active-${activeButton}` : ""}`}
      >
        <button
          type="button"
          className={
            activeButton === "ai" ? "nav-button clicked" : "nav-button"
          }
          onClick={() => setActiveButton("ai")}
        >
          <img className="ai-icon" src={AIIcon} />
          Artificial Intelligence
        </button>
        <button
          type="button"
          className={
            activeButton === "backend" ? "nav-button clicked" : "nav-button"
          }
          onClick={() => setActiveButton("backend")}
        >
          <img className="back-end-icon" src={BackendIcon} />
          Back-End & Front-End
        </button>
      </div>
      <br />
      {activeButton === "ai" && (
        <div className="ai-skills-container">
          <div className="skills-list">
            <div className="skills-item">Data Analysis</div>
            <div className="skills-item">Machine Learning</div>
          </div>
          <div className="skills-list">
            <div className="skills-item">Deep Learning</div>
            <div className="skills-item">Natural Language Processing</div>
          </div>
          <br />
          <p className="medium-small">Tech Stacks</p>
          <br />
          <div className="tech-stacks">
            <div className="tech-stacks-item">
              <img className="skills-icon" src={pythonIcon} />
              Python
            </div>
            <div className="tech-stacks-item">
              <img className="skills-icon" src={tensorflowIcon} />
              TensorFlow
            </div>
            <div className="tech-stacks-item">
              <img className="skills-icon" src={scikitIcon} />
              Scikit-learn
            </div>
            <div className="tech-stacks-item">
              <img className="mlflow-icon" src={mlflowIcon} />
              MLflow
            </div>
          </div>
          <br />
          <br />
          <div className="tech-stacks">
            <div className="tech-stacks-item">
              <img className="skills-icon" src={prometheusIcon} />
              Prometheus
            </div>
            <div className="tech-stacks-item">
              <img className="skills-icon" src={streamlitIcon} />
              Streamlit
            </div>
            <div className="tech-stacks-item">
              <img className="skills-icon" src={grafanaIcon} />
              Grafana
            </div>
          </div>
        </div>
      )}

      {activeButton === "backend" && (
        <div className="backend-skills-container">
          <div className="skills-list">
            <div className="skills-item">Database Management System</div>
            <div className="skills-item">Web Developement</div>
          </div>
          <div className="skills-list">
            <div className="skills-item">UI/UX Design</div>
            <div className="skills-item">Web Scrapping</div>
          </div>
          <br />
          <p className="medium-small">Tech Stacks</p>
          <br />
          <div className="tech-stacks">
            <div className="tech-stacks-item">
              <img className="skills-icon" src={reactIcon} />
              React
            </div>
            <div className="tech-stacks-item">
              <img className="skills-icon" src={jsIcon} />
              Javascript
            </div>
            <div className="tech-stacks-item">
              <img className="skills-icon" src={javaIcon} />
              Java
            </div>
            <div className="tech-stacks-item">
              <img className="skills-icon" src={phpIcon} />
              PHP
            </div>
          </div>
          <br />
          <br />
          <div className="tech-stacks">
            <div className="tech-stacks-item">
              <img className="skills-icon" src={htmlIcon} />
              HTML
            </div>
            <div className="tech-stacks-item">
              <img className="skills-icon" src={cssIcon} />
              CSS
            </div>
            <div className="tech-stacks-item">
              <img className="skills-icon" src={CIcon} />C
            </div>
            <div className="tech-stacks-item">
              <img className="skills-icon" src={mysqlIcon} />
              MySQL
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Skills;

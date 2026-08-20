import { useState } from "react";
import arrowIcon from "../assets/arrow.svg";
import analyticsDashboardImage from "../assets/data analytics dashboard.png";
import sentifyChatbotImage from "../assets/sentify-chatbot.png";
import apiMonitoringImage from "../assets/monitoring_latensi_API_model.png";
import githubIcon from "../assets/GitHub_Symbol_1.png";

const projects = {
  sentifyChatbot: {
    image: sentifyChatbotImage,
    title: "Sentify: AI Based E-Commerce Data Analysis",
    description:
      "Sentify is an AI-based e-commerce data analysis web application that allows you to summarize and gain insights from your e-commerce data through a dashboard, deep learning-based sentiment classification, as well as a large language model-based chatbot to answer various questions related to your data.",
  },
  analyticsDashboard: {
    image: analyticsDashboardImage,
    title: "E-Commerce Data Analysis",
    description:
      "Conducting E-Commerce sales data analysis, Olist. Using the SMART framework to formulate questions, then performing data wrangling and RFM (recency, frequency, and monetary) analysis to extract insights and provide action-oriented recommendations, as well as creating a dashboard for explanatory data analysis.",
  },
  apiMonitoring: {
    image: apiMonitoringImage,
    title: "Automated Machine Learning Workflow",
    description:
      "Creating an automated machine learning system workflow using GitHub Actions and MLFlow, and developing a monitoring and alerting system with Prometheus and Grafana",
  },
};

const projectList = Object.values(projects);

function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const activeProject = projectList[activeProjectIndex];

  const showPreviousProject = () => {
    setActiveProjectIndex(
      (currentIndex) =>
        (currentIndex - 1 + projectList.length) % projectList.length,
    );
  };

  const showNextProject = () => {
    setActiveProjectIndex(
      (currentIndex) => (currentIndex + 1) % projectList.length,
    );
  };

  return (
    <div id="projects" className="projects-page">
      <p className="semi-bold-large">Projects</p>
      <div className="project-showcase">
        <button
          type="button"
          className="project-arrow"
          onClick={showPreviousProject}
          aria-label="Previous project"
        >
          <img src={arrowIcon} alt="" className="previous-arrow" />
        </button>
        <div className="project-screenshot">
          <img src={activeProject.image} alt={activeProject.title} />
        </div>
        <button
          type="button"
          className="project-arrow"
          onClick={showNextProject}
          aria-label="Next project"
        >
          <img className="arrow-icon" src={arrowIcon} alt="" />
        </button>
      </div>
      <div className="about-project">
        <p>{activeProject.title}</p>
        <p className="paragraph">{activeProject.description}</p>
      </div>
      <div className="project-indicators" aria-label="Project navigation">
        {projectList.map((project, projectIndex) => (
          <button
            type="button"
            className={
              projectIndex === activeProjectIndex
                ? "project-indicator active"
                : "project-indicator"
            }
            onClick={() => setActiveProjectIndex(projectIndex)}
            aria-label={`Show ${project.title}`}
            aria-current={
              projectIndex === activeProjectIndex ? "true" : undefined
            }
            key={project.title}
          />
        ))}
      </div>
      <br />
      <div className="github-link">
        <img src={githubIcon} alt="GitHub" />
        <a
          className="medium-small"
          href="https://github.com/f4qihuddin?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          See more projects on my Github!
        </a>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Projects;

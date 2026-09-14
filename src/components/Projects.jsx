import { useState } from "react";
import arrowIcon from "../assets/arrow.svg";
import analyticsDashboardImage from "../assets/data analytics dashboard.png";
import sentifyChatbotImage from "../assets/sentify-chatbot.png";
import apiMonitoringImage from "../assets/monitoring_latensi_API_model.png";
import githubIcon from "../assets/GitHub_Symbol_1.png";
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
import dockerIcon from "../assets/docker.png";
import metabaseIcon from "../assets/metabase.png";
import businessDashboardImage from "../assets/business_dashboard.png"
import bitcoinTrend from "../assets/bitcoin_trend.png"

const projects = {
  sentifyChatbot: {
    image: sentifyChatbotImage,
    title: "Sentify: AI Based E-Commerce Data Analysis",
    description:
      "Sentify is an AI-based e-commerce data analysis web application that allows you to summarize and gain insights from your e-commerce data through a dashboard, deep learning-based sentiment classification, as well as a large language model-based chatbot to answer various questions related to your data.",
    skills: [
      {
        icon: pythonIcon,
        name: "Python",
        className: "skills-icon",
      },
      {
        icon: tensorflowIcon,
        name: "TensorFlow",
        className: "skills-icon",
      },
      {
        icon: reactIcon,
        name: "React",
        className: "skills-icon",
      },
    ],
  },
  analyticsDashboard: {
    image: analyticsDashboardImage,
    title: "E-Commerce Data Analysis",
    description:
      "Conducting E-Commerce sales data analysis, Olist. Using the SMART framework to formulate questions, then performing data wrangling and RFM (recency, frequency, and monetary) analysis to extract insights and provide action-oriented recommendations, as well as creating a dashboard for explanatory data analysis.",
    skills: [
      {
        icon: pythonIcon,
        name: "Python",
        className: "skills-icon",
      },
      {
        icon: streamlitIcon,
        name: "Streamlit",
        className: "skills-icon",
      },
    ],
  },
  apiMonitoring: {
    image: apiMonitoringImage,
    title: "Automated Machine Learning Workflow",
    description:
      "Creating an automated machine learning system workflow using GitHub Actions and MLFlow to automate model training, and developing a monitoring and alerting system with Prometheus and Grafana to monitor model performance in real-time and give alerts when a problem occur.",
    skills: [
      {
        icon: mlflowIcon,
        name: "MLFlow",
        className: "mlflow-icon",
      },
      {
        icon: grafanaIcon,
        name: "Grafana",
        className: "skills-icon",
      },
      {
        icon: prometheusIcon,
        name: "Prometheus",
        className: "skills-icon",
      },
    ],
  },
  attritionAnalysis: {
    image: businessDashboardImage,
    title: "Employee Attrition Analysis",
    description:
      "Conducting exploratory data analysis to extract meaningful insights about factors affecting  employee attrition rate. Building a business dashboard using Metabase and developing a classfification to classify wheter an employee will resign or not.",
    skills: [
      {
        icon: pythonIcon,
        name: "Python",
        className: "skills-icon",
      },
      {
        icon: scikitIcon,
        name: "Scikit-learn",
        className: "skills-icon",
      },
      {
        icon: dockerIcon,
        name: "Docker",
        className: "skills-icon",
      },
      {
        icon: metabaseIcon,
        name: "Metabase",
        className: "skills-icon",
      },
    ],
  },
  bitcoinPricePrediction: {
    image: bitcoinTrend,
    title: "Bitcoin Multistep Forecasting using LSTM",
    description: "Building a multistep forecssting model to predict bitcoin price in the next 24 hours. I built and compared the result of LSTM and Sequence to Sequence LSTM to predict bitcoin trend as accurrately as possible",
    skills: [
      {
        icon: pythonIcon,
        name: "Python",
        className: "skills-icon",
      },
      {
        icon: tensorflowIcon,
        name: "TensorFlow",
        className: "skills-icon",
      }
    ]
  },
  recommenderSystem: {
    title: "Netflix Recommender System using Content-based Filtering",
    description:
      "Building a recommender system based on Netflix movie dataset to recommend top 10 movies or TV Shows based on user preferences. The recommender system is built with Content-based Filtering Algorithm using cosine similiarity to calculate similiarity between each movies",
    skills: [
      {
        icon: pythonIcon,
        name: "Python",
        className: "skills-icon",
      },
    ],
  },
  sentimentAnalysis: {
    title: "Sentiment Analysis Model for Tokopedia Application Reviews",
    description:
      "Building a sentiment classifier model based on neural-network to classifiy Tokopedia reviews sentiment. The text data is collected using web scrapping, then cleaned using casefolding, tokenizing, filtering, lemmatization. The model then used the cleaned data to predict whether a review sentiment categorized as positive or negative",
    skills: [
      {
        icon: pythonIcon,
        name: "Python",
        className: "skills-icon",
      },
      {
        icon: tensorflowIcon,
        name: "TensorFlow",
        className: "skills-icon",
      },
    ],
  },
  etlPipeline: {
    title: "Web Scrapping ETL Pipeline",
    description:
      "Extracting data using web scrapping technique, then transforming the raw data to produce clean data, the cleaned data then loaded into PostgreSQL, Google Sheets, dan CSV format.",
    skills: [
      {
        icon: pythonIcon,
        name: "Python",
        className: "skills-icon",
      },
    ],
  },
  elderlyPreFallDetection: {
    title: "Elderly Pre-Fall Detection using Machine Learning",
    description: "Participated in 'Teman Jalan' research. During this research, i contributed by building a predictive model to detect elderly pre-fall occurence. Performing data augmentation using windowing technique and then built and compared various classification models such as  XGBoost, Random Forest, KNN, Decision Tree, dan more to determine the best model for detecting pre-fall occurence. The model then converted using TinyML to be embedded in a microcontroller in the prototype.",
    skills: [
      {
        icon: pythonIcon,
        name: "Python",
        className: "skills-icon",
      },
      {
        icon: scikitIcon,
        name: "Scikit-learn",
        className: "skills-icon",
      }
    ],
  },
  documentChatbot: {
    title: "Document Summarizer Chatbot",
    description:
      "Building a Large Language Model based Chatbot using Grok API. The LLM model is used to build a chatbot with abilities to summarize documents such as PDF and text files",
    skills: [
      {
        icon: pythonIcon,
        name: "Python",
        className: "skills-icon",
      },
    ],
  }
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
        <div className="project-details">
          <p className="semi-bold-medium">{activeProject.title}</p>
          <div className="project-overview">
            {activeProject.image && (
              <div className="project-screenshot">
                <img src={activeProject.image} alt={activeProject.title} />
              </div>
            )}
            <div className="project-description">
              <p className="paragraph">{activeProject.description}</p>
            </div>
          </div>
          <p className="semi-bold-small">Related Skills</p>
          <div className="tech-stacks">
            {activeProject.skills?.map((skill) => (
              <div className="tech-stacks-item">
                <img
                  className={skill.className}
                  src={skill.icon}
                  alt={skill.name}
                />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
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
      <br />
      <br />
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

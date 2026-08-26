const learningPath = [
  {
    number: "01",
    title: "The Basics of AI",
    description:
      "Learning the basics concepts of Artificial Intelligence, Machine Learning, and Deep Learning and the application of cutting-edge AI technology in real world scenario",
  },
  {
    number: "02",
    title: "Machine Learning with Python",
    description:
      "Learning how to perform Exploratory Data Analysis, Data Cleaning, Data Preprocessing, and building machine learning models for predictive analytics ranging from regression, classification, and clustering with Python",
  },
  {
    number: "03",
    title: "Deep Learning Fundamental",
    description:
      "Learning the basics of neural network, frameworks such as TensorFlow and Keras, image classification, Natural Language Processing, dan recommender system . in addiion, I also built sentiment analysis model and computer vision projects",
  },
  {
    number: "04",
    title: "Applied Machine Learning",
    description:
      "Learning how to build machine learning models to solve real-world problems such as predictive analytics, sentiment classification, computer vision, content-based filtering and collaborative filtering recommendation systems",
  },
];

function Education() {
  return (
    <div id="education" className="education-page">
      <p className="semi-bold-large">Education</p>
      <p className="paragraph-centered">
        During my study, I have learned many things about data analytics and
        artificial intelligence. In addition to my academic background, i also
        participated in various data analytics and artificial intelligence
        courses
      </p>
      <br />
      <div className="learning-path" aria-label="Learning path">
        {learningPath.map((step) => (
          <article className="learning-step" key={step.number}>
            <div className="step-number">{step.number}</div>
            <div className="learning-card">
              <h2>{step.title}</h2>
              <p className="paragraph-centered">{step.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Education;

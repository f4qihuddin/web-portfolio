import React from "react";
import Home from "./Home";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Home/>
        <br/>
        <br/>
        <br/>
        <Education/>
        <br/>
        <br/>
        <br/>
        <Skills/>
        <br/>
        <br/>
        <br/>
        <Projects/>
        <br/>
        <br/>
        <br/>
        <Footer/>
      </div>
    );
  }
}

export default App;

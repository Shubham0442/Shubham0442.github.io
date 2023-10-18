import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Components/AllRoutes";
import { useRef } from "react";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Skill from "./Pages/Skill";
import About from "./Pages/About";
import Work from "./Pages/Work";

function App() {
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);
  const workRef = useRef(null);

  return (
    <div className="App">
      <Navbar
        aboutRef={aboutRef}
        skillRef={skillRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        homeRef={homeRef}
        workRef={workRef}
      />
      <div className="item-container" ref={homeRef}>
        <Home />
      </div>
      <div className="item-container" ref={aboutRef}>
        <About />
      </div>
      <div className="item-workContact" ref={workRef}>
        <Work />
      </div>
      <div className="item-containerSkill" ref={skillRef}>
        <Skill />
      </div>
      <div
        ref={projectsRef}
        h={{ base: "2200px", sm: "2000px", md: "1800px", lg: "1500px" }}
      >
        <Projects />
      </div>
      <div className="item-containerContact" ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;

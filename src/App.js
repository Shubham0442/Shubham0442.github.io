import "./App.css";
import Navbar from "./Components/Navbar";
import { useRef } from "react";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Skill from "./Pages/Skill";
import About from "./Pages/About";
import Work from "./Pages/Work";
import { Box } from "@chakra-ui/react";

function App() {
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);
  const workRef = useRef(null);

  const scrollRef = useRef("home");

  return (
    <div className="App" style={{ backgroundColor: "#e0e5e9" }}>
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
      <Box
        h={{ base: "800px", sm: "900px", md: "900px", lg: "800px" }}
        ref={workRef}
      >
        <Work />
      </Box>
      <div className="item-containerSkill" ref={skillRef}>
        <Skill />
      </div>
      <div
        ref={projectsRef}
        h={{ base: "2600px", sm: "2200px", md: "2000px", lg: "1700px" }}
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

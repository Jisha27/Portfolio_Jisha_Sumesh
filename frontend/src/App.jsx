import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import { About } from "./components/About";
import { Toaster } from "react-hot-toast";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import {portData} from './components/PortfolioData'

function App() {
  const [portfolioData, setPortfolioData] = useState(portData);
   
  useEffect(() => {
    fetch("https://portfolio-backend-xijw.onrender.com/api/portfolio")
      .then((res) => res.json())
      .then((data) => setPortfolioData(data))
      .catch((error) => console.log(error));
  }, []);

 
  return (
    <>
      <Toaster position="top-center z-1000" />
      <Navbar />
      <section id="home">
        <HeroBanner data={portfolioData.hero} />
      </section>

      <section id="about">
        <About data={portfolioData.about} />
      </section>

      <section id="skills">
        <Skills data={portfolioData.skills} />
      </section>

      <section id="projects">
        <Projects data={portfolioData.projects} />
      </section>

      <section id="contact">
        <Contact data={portfolioData.contact} />
      </section>
    </>
  );
}

export default App;

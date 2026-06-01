import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import { About } from "./components/About";
import { Toaster } from "react-hot-toast";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/portfolio")
      .then((res) => res.json())
      .then((data) => setPortfolioData(data))
      .catch((error) => console.log(error));
  }, []);

  if (!portfolioData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--background)] text-white">
        Loading...
      </div>
    );
  }
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

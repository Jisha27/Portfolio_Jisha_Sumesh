import { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaLock,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiJsonwebtokens,
} from "react-icons/si";

const techIconMap = {
  MongoDB: SiMongodb,
  "Express.js": SiExpress,
  "React.js": SiReact,
  "Node.js": SiNodedotjs,
  JWT: SiJsonwebtokens,
};

const Projects = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!data || data.length === 0) return null;

  const project = data[activeIndex];

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % data.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  return (
    <section
      id="projects"
      className="bg-[var(--background)] py-14 md:py-20 px-4 md:px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
            My Projects <span className="text-[var(--primary)]">✦──</span>
          </h2>

          <p className="text-[var(--text-secondary)] mt-3 text-sm md:text-base">
            Here are some of the projects I've built using the MERN stack.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prevProject}
            className="absolute left-2 md:left-[-35px] top-1/2 -translate-y-1/2 z-20 size-11 md:size-12 rounded-full border border-[var(--primary)] bg-[var(--background)] text-white shadow-[0_0_20px_var(--primary)] flex items-center justify-center hover:scale-110 transition"
          >
            <FaChevronLeft />
          </button>

          {/* Card */}
          <div className="grid lg:grid-cols-2 border border-[var(--card-border)] rounded-2xl overflow-hidden bg-[var(--surface)] shadow-[0_0_35px_rgba(124,77,255,0.2)]">
            {/* Image */}
            <div className="h-[220px] sm:h-[280px] lg:h-[360px] bg-black overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Content */}
            <div className="p-5 md:p-10 flex flex-col justify-center min-w-0">
              <div className="flex items-start gap-4 md:gap-6 mb-6 min-w-0">
                <div className="size-12 md:size-16 shrink-0 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--gradient-end)] flex items-center justify-center text-white text-2xl md:text-3xl">
                  <FaLock />
                </div>

                <div className="min-w-0">
                  <h3 className="text-2xl md:text-3xl font-bold text-white break-words leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-[var(--primary)] mt-2 text-sm md:text-base break-words">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-[var(--text-secondary)] leading-7 md:leading-8 mb-6 md:mb-8 text-sm md:text-base">
                {project.description}
              </p>

              <div className="h-px bg-[var(--card-border)] mb-6 md:mb-8" />

              {/* Tech Stack */}
              <div className="flex gap-3 md:gap-4 mb-6 md:mb-8 overflow-x-auto hide-scrollbar pb-1">
                {project.techStack?.map((tech) => {
                  const TechIcon = techIconMap?.[tech?.icon] || FaLock;

                  return (
                    <span
                      key={tech?.name}
                      className="shrink-0 flex items-center gap-2 bg-[#101827] text-[var(--text-secondary)] px-4 py-2 text-xs rounded-lg"
                    >
                      <TechIcon className="text-[var(--primary)]" />
                      {tech?.name}
                    </span>
                  );
                })}
              </div>

              {/* Links */}
              <div className="flex flex-wrap items-center gap-4 md:gap-8">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--primary)] px-4 md:px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-[var(--primary)] hover:text-white transition text-sm md:text-base"
                >
                  Live Demo <FaExternalLinkAlt />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white flex items-center gap-3 hover:text-[var(--primary)] transition text-sm md:text-base"
                >
                  GitHub <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextProject}
            className="absolute right-2 md:right-[-35px] top-1/2 -translate-y-1/2 z-20 size-11 md:size-12 rounded-full border border-[var(--primary)] bg-[var(--background)] text-white shadow-[0_0_20px_var(--primary)] flex items-center justify-center hover:scale-110 transition"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-4 mt-8">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`size-3 rounded-full transition ${
                activeIndex === index
                  ? "bg-[var(--primary)]"
                  : "bg-[var(--text-muted)] opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
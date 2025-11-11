import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projectData = [
  {
    name: "Gemini clone (AI chatbot)",
    description:
      "An interactive AI chatbot built with React.js and the Gemini API. It replicates the Gemini chat UI and supports real-time user queries with a smooth UX.",
    image: "./image.png",
    live: "https://gemini-clone-roan-nine.vercel.app/",
    github: "https://github.com/mr-sanketsathe/Gemini-Clone",
  },
  {
    name: "Wonderlust (Airbnb replica)",
    description:
      "A responsive vacation rental platform built with modern web tech. It replicates Airbnb’s core features like adding/editing listings, interactive map view, and user reviews — all with a clean, intuitive UI.",
    image: "./Airbnb.png",
    live: "https://wonderlust-v0r0.onrender.com/",
    github: "https://github.com/mr-sanketsathe/WonderLust",
  },
  {
    name: "Zerodha clone (stock trading app)",
    description:
      "A stock trading platform built with React.js, Node.js, and MongoDB, inspired by Zerodha. It replicates the core features of stock platforms, including user authentication, buy/sell functions, and a real-time trading dashboard with a clean UI.",
    image: "./zerodha.png",
    live: "https://zerodha-clone-tau-seven.vercel.app",
    github: "https://github.com/mr-sanketsathe/Zerodha-Clone",
  },
];

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2, // cards appear one by one
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

function Projects() {
  return (
    <section id="Projects" className="Projects">
      <motion.h2
        className="project-heading"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="Projects-list">
        {projectData.map((project, index) => (
          <motion.div
            className="Project-card"
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img src={project.image} alt={project.name} className="project-img" />
            <div className="project-info">
              <h3 className="Project-name">{project.name}</h3>
              <p className="Project-desc">{project.description}</p>
              <div className="project-links">
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  Live
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

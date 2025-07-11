import React from 'react';
import './Projects.css';

const projectData = [
  {
    name: "Gemini clone (AI chatbot)",
    description: "An interactive AI chatbot built with React.js and the Gemini API. It replicates the Gemini chat UI and supports real-time user queries with a smooth UX.",
    image: "./image.png",
    live: "https://gemini-clone-roan-nine.vercel.app/", 
    github: "https://github.com/mr-sanketsathe/Gemini-Clone"
  },
  {
    name: "Wonderlust(airbnb replica)",
    description:"A responsive vacation rental platform built with modern web tech. It replicates Airbnb’s core features like adding/editing listings, interactive map view, and user reviews — all with a clean, intuitive UI.",
    image: "./Airbnb.png",
    live: "https://wonderlust-v0r0.onrender.com/",
    github: "https://github.com/mr-sanketsathe/WonderLust"
  },
  {
    name: "Zerodha clone (stock trading app)",
    description: "A stock trading platform built with React.js, Node.js, and MongoDB, inspired by Zerodha. It replicates the core features of stock platforms, including user authentication, buy/sell functions, and a real-time trading dashboard with a clean UI.",
    image: "./zerodha.png",
    live: "https://zerodha-clone-tau-seven.vercel.app",
    github: "https://github.com/mr-sanketsathe/Zerodha-Clone"
  }
];

function Projects() {
  return (
    <section id='Projects' className="Projects">
      <h2 className="project-heading">Projects</h2>
      <div className="Projects-list">
        {projectData.map((project, index) => (
          <div className='Project-card' key={index}>
            <img src={project.image} alt={project.name} className="project-img" />
            <div className="project-info">
              <h3 className="Project-name">{project.name}</h3>
              <p className="Project-desc">{project.description}</p>
              <div className="project-links">
                <a href={project.live} >Live</a>
                <a href={project.github}>GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

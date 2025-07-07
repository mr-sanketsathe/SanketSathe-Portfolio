import React from 'react';
import './Projects.css';

const projectData = [
  {
    name: "Gemini Clone",
    description: "An interactive AI chatbot built with React.js and the Gemini API. It replicates the Gemini chat UI and supports real-time user queries with a smooth UX.",
    image: "./image.png",
    live: "https://gemini-clone-roan-nine.vercel.app/", 
    github: "https://github.com/mr-sanketsathe/Gemini-Clone"
  },
  {
    name: "Wonderlust-airbnb replica",
    description:"A responsive vacation rental platform built with modern web tech. It replicates Airbnb’s core features like adding/editing listings, interactive map view, and user reviews — all with a clean, intuitive UI.",
    image: "./Airbnb.png",
    live: "https://wonderlust-v0r0.onrender.com/",
    github: "https://github.com/mr-sanketsathe/WonderLust"
  },
  {
    name: "demo3",
    description: "An interactive AI chatbot built with React.js and the Gemini API. It replicates the Gemini chat UI and supports real-time user queries with a smooth UX.",
    image: "https://images.unsplash.com/photo-1528721071427-cab7de8e8050?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://via.placeholder.com/400x200?text=Zerodha+Clone",
    live: "#",
    github: "#"
  },
  {
    name: "demo4",
    description: "An interactive AI chatbot built with React.js and the Gemini API. It replicates the Gemini chat UI and supports real-time user queries with a smooth UX.",
    image: "https://images.unsplash.com/photo-1528721071427-cab7de8e8050?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    live: "#",
    github: "#"
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

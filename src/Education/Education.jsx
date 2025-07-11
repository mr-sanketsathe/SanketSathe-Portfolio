import React from 'react';
import './Education.css';

function Education() {
  const educationData = [
    {
      degree: "Diploma in Computer Engineering",
      institution: "SMT. Geeta D Tatakare Polytechnic, Gove Kolad",
      year: "2023 - 2025",
      score: "86.46%"
    },
    {
      degree: "Higher Secondary Education (HSC) - Science",
      institution: "D G Tatakare Junior College, Kolad",
      year: "2020 - 2022",
      score: "55.50%"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "D G Tatakare Vidhyalay, Sutarwadi",
      year: "2019 - 2020",
      score: "79.60%"
    }
  ];

  return (
    <section id="Education" className="Education-section">
      <h2 className="education-heading">Education</h2>
      <div className="timeline">
        {educationData.map((edu, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-college">{edu.institution}</p>
              <p className="education-year">{edu.year}</p>
              <span className="education-score">{edu.score}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;

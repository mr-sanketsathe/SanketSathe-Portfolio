import React from "react";
import { motion } from "framer-motion";
import "./Education.css";

const educationData = [
  {
    degree: "Diploma in Computer Engineering",
    institution: "SMT. Geeta D Tatakare Polytechnic, Gove Kolad",
    year: "2023 - 2025",
    score: "86.46%",
  },
  {
    degree: "Higher Secondary Education (HSC) - Science",
    institution: "D G Tatakare Junior College, Kolad",
    year: "2020 - 2022",
    score: "55.50%",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "D G Tatakare Vidhyalay, Sutarwadi",
    year: "2019 - 2020",
    score: "79.60%",
  },
];

// Animation Variants
const itemVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

function Education() {
  return (
    <section id="Education" className="Education-section">
      <motion.h2
        className="education-heading"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>

      <div className="timeline">
        {educationData.map((edu, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="timeline-dot"></div>
            <motion.div
              className="timeline-content"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-college">{edu.institution}</p>
              <p className="education-year">{edu.year}</p>
              <span className="education-score">{edu.score}</span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;

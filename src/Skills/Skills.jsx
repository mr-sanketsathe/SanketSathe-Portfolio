import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiPython,
  SiMysql,
  SiGit,
  SiDocker,
} from "react-icons/si";
import "./Skills.css";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Python", icon: <SiPython /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "SQL", icon: <SiMysql /> },
];

const tools = [
  { name: "Git", icon: <SiGit /> },
  { name: "Docker", icon: <SiDocker /> },
];

// Parent animation container
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // delay between skill cards
    },
  },
};

// Each card animation
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

function Skills() {
  return (
    <section className="skills-wrapper" id="Skills">
      <motion.h1
        className="skills-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
      >
        My Skills
      </motion.h1>

      <motion.h3
        className="tech"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ amount: 0.3 }}
      >
        Technologies
      </motion.h3>

      {/* Skills Grid */}
      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.07, rotate: 1 }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </motion.div>
        ))}
      </motion.div>

      <motion.h3
        className="tools"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ amount: 0.3 }}
      >
        Tools
      </motion.h3>

      {/* Tools Grid */}
      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        {tools.map((tool, index) => (
          <motion.div
            className="skill-card"
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.07, rotate: 1 }}
          >
            <div className="skill-icon">{tool.icon}</div>
            <div className="skill-name">{tool.name}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;

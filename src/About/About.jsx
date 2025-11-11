import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import "./About.css";

function About() {
  return (
    <section id="About" className="About">
      {/* Heading Animation */}
      <motion.h2
        className="About-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ amount: 0.3 }} // triggers again each time it's visible
      >
        About Me
      </motion.h2>

      <div className="about-content">
        {/* Profile Image */}
        <motion.img
          src={profile}
          alt="Sanket Sathe"
          className="profile"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
        />

        {/* Text + Social Links */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ amount: 0.3 }}
        >
          <p className="self-desc">
            I'm <strong>Full Stack Developer</strong> passionate about{" "}
            <strong>Web Development</strong> & <strong>Artificial Intelligence</strong>.
            I enjoy building interactive and responsive websites using modern technologies like{" "}
            <strong>React</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>.
            <br />   <br />
            I'm fascinated by the intersection of <strong>AI and the Web</strong>, and I’m
            actively learning to blend the two to create smarter, more efficient applications.
            A curious and self-motivated developer, I love solving problems and turning ideas
            into real-world solutions.
          </p>

          <motion.ul
            className="social-media"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ amount: 0.3 }}
          >
            <li>
              <a
                href="https://www.linkedin.com/in/sanket-sathe-654347362/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/mr-sanketsathe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/itzs_sanket?igsh=MTVzeG16OWF1NTIzMg=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

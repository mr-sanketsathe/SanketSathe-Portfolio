import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Home.css";

function Home() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="Home" className="Home" ref={ref}>
      <motion.div
        className="home-content"
        initial="hidden"
        animate={controls}
        variants={fadeUp}
      >
        <h1 className="greet">
          <span className="wave">👋</span> Hello, I'm <br />
          <span className="name">Sanket Sathe</span>
        </h1>

        <p className="home-desc">
          I'm a <strong>Full Stack Developer</strong> passionate about creating
          interactive, responsive, and smart web applications. I love exploring
          the fusion of <strong>AI</strong> and <strong>Web Development</strong>
          — crafting modern digital experiences that feel human.
        </p>

        <motion.div
          className="home-connect"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#Contact">Connect with me</a>
        </motion.div>
      </motion.div>

      <motion.span
        className="home-arrow"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0], y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <i className="fa-solid fa-angles-down"></i>
      </motion.span>
    </section>
  );
}

export default Home;

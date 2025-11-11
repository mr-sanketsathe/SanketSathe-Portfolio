import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "ebfaed2c-c46a-4dbb-89f5-3d0d88279d61");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thanks! Your message has been sent.");
      alert("Form submitted!");
      event.target.reset();
    } else {
      setResult("Oops! Something went wrong.");
    }
  };

  return (
    <section id="Contact" className="Contact-section">
      {/* Heading Animation */}
      <motion.h2
        className="contact-heading"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Let's Get in Touch
      </motion.h2>

      <div className="contact-container">
        {/* Info Section Animation */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3 className="contact-title">Contact Details</h3>
          <p className="contact-text">
            I'm open to freelance, collaborations, or any project ideas. Drop your
            message and I’ll get back to you.
          </p>
          <p><i className="fa-solid fa-envelope"></i> sanketsathe198@gmail.com</p>
          <p><i className="fa-solid fa-phone"></i> +91 93229 62717</p>
          <p><i className="fa-solid fa-location-dot"></i> Raigad, Maharashtra, India</p>
        </motion.div>

        {/* Form Animation */}
        <motion.form
          onSubmit={onSubmit}
          className="contact-form"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.label
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Your Name
          </motion.label>
          <motion.input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            whileFocus={{ scale: 1.02 }}
          />

          <motion.label
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Your Email
          </motion.label>
          <motion.input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            whileFocus={{ scale: 1.02 }}
          />

          <motion.label
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Your Message
          </motion.label>
          <motion.textarea
            name="message"
            required
            placeholder="Write your message..."
            rows="5"
            whileFocus={{ scale: 1.02 }}
          />

          <motion.button
            type="submit"
            className="Submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>

          <motion.span
            className="form-result"
            initial={{ opacity: 0 }}
            animate={{ opacity: result ? 1 : 0 }}
          >
            {result}
          </motion.span>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;

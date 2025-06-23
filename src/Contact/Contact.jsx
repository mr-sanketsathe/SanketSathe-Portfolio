import React from 'react';
import './Contact.css';

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
      <h2 className="contact-heading">Let's Get in Touch</h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3 className="contact-title">Contact Details</h3>
          <p className="contact-text">
            I'm open to freelance, collaborations, or any project ideas. Drop your message and I’ll get back to you.
          </p>
          <p><i className="fa-solid fa-envelope"></i> sanketsathe198@gmail.com</p>
          <p><i className="fa-solid fa-phone"></i> +91 93229 62717</p>
          <p><i className="fa-solid fa-location-dot"></i> Raigad, Maharashtra, India</p>
        </div>

        <form onSubmit={onSubmit} className="contact-form">
          <label>Your Name</label>
          <input type="text" name="name" required placeholder="Enter your name" />
          
          <label>Your Email</label>
          <input type="email" name="email" required placeholder="Enter your email" />
          
          <label>Your Message</label>
          <textarea name="message" required placeholder="Write your message..." rows="5"></textarea>
          
          <button type="submit" className="Submit">Send Message</button>
          <span className="form-result">{result}</span>
        </form>
      </div>
    </section>
  );
}

export default Contact;

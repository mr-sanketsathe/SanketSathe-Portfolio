import React from 'react';
import profile from '../assets/profile.jpg';
import './About.css';

function About() {
    return (
        <section id="About" className="About">
            <h2 className="About-heading">About me</h2>
            <div className="about-content">
                <img src={profile} alt="Sanket Sathe" className="profile" />

                <div className="about-text">
                    <p className="self-desc">
                        I'm an aspiring <strong>Full Stack Developer</strong> passionate about Web Development & Artificial Intelligence.
                        I enjoy building interactive and responsive websites using modern technologies like <strong>React</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>.
                        <br /><br />
                        I'm fascinated by the intersection of AI and the web, and I’m actively learning to blend the two to create smarter, more efficient applications.
                        A curious and self-motivated developer, I love solving problems and turning ideas into real-world solutions.
                    </p>

                    <ul className="social-media">
                        <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-github"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default About;

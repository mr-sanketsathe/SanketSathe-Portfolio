import React from 'react';
import profile from '../assets/profile.jpg';
import './About.css';
function About() {
    return (<div id='About' className="About">
        <img src={profile} alt="sanket sathe" className="profile" />
        <div className="About-me">
            {/* <h1 className='title'>About me</h1> */}
            
                <p className="self-desc">I'm an aspiring Full Stack Developer passionate about Web Development and Artificial Intelligence.
                    I enjoy building interactive, responsive websites and applications using modern technologies like React, Node.js, and MongoDB. I'm fascinated by the intersection of AI and the web, and I’m actively learning how to blend the two to create smarter, more efficient applications.
                    A curious and self-motivated developer, I love exploring new technologies, solving problems, and turning ideas into real-world solutions.</p>
                <ul className="social-media">
                    <li><i class="fa-brands fa-linkedin"></i></li>
                    <li><i class="fa-brands fa-square-github"></i></li>
                    <li><i class="fa-brands fa-square-instagram"></i></li>
                    <li><i class="fa-brands fa-square-facebook"></i></li>
                </ul>
            
        </div>


    </div>);

}

export default About;
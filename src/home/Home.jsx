import React from 'react';
import './Home.css';

function Home() {
    return (
        <section id="Home" className="Home">
            <div className="home-content">
                <h1 className="greet">
                    <span className="wave">👋</span> Hello, I'm <br />
                    <span className="name">Sanket Sathe</span>
                </h1>

                <p className="home-desc">
                    I'm a Full Stack Developer who loves building modern web apps and exploring AI. While I've already created some real-world projects, I'm constantly learning and striving to improve my skills further.
                </p>

                <div className="home-connect">
                    <a href="#Contact">Connect with me</a>
                </div>
                
            </div>

            <span className="home-arrow">
                <i className="fa-solid fa-angles-down"></i>
            </span>
        </section>
    );
}

export default Home;

import React from 'react';
import './Home.css'
import profile from '../assets/profile.jpg'
function Home() {
    return (
        <div id='Home' className="Home">
            <h1 className="greet">Hello,<br />I'm <span className='name'>Sanket Sathe</span></h1>
            <p className="home-desc">Aspiring Full Stack Developer | Enthusiastic About Web Technologies & AI</p>

            <div  className="home-connect"><a href="#Contact">Connect with me</a></div>

            <span className='home-arrow'><i className="fa-solid fa-angles-down"></i></span>
        </div>
    );
}

export default Home;
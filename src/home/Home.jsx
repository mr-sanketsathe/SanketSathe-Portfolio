import React from 'react';
import './Home.css'
import profile from '../assets/profile.jpg'
function Home() {
    return (
        <div id='Home' className="Home">
            <h1 className="greet">Hello,<br />I'm <span className='name'>Sanket Sathe</span></h1>
            <p className="des">Aspiring Full Stack Developer | Enthusiastic About Web Technologies & AI</p>

            <div  className="home-connect">Connect with me</div>

            <span className='home-arrow'><i class="fa-solid fa-angles-down"></i></span>
        </div>
    );
}

export default Home;
import React from 'react';
import logo from '../assets/logo2.png';
import './Navbar.css'
function Navbar() {
  return ( 
    <div className="Navbar">
      <img src={logo} alt="" className="logo" />
      <ul className="nav-menu">
        <a href="#Home" className='nav-link'>Home</a>
        <a href="#About"  className='nav-link'>About me</a>
        <a href="#Skills-section"  className='nav-link'>Skills</a>
        <a href="#Projects"  className='nav-link'>Projects</a>
        <a href="#Education"  className='nav-link'>Education</a>
        <a href="#Contact" className='nav-link'>Contact</a>
      </ul>
      <div className="connect-btn">Download CV</div>
    </div>
   );
}

export default Navbar;
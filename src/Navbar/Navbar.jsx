import React from 'react';
import logo from '../assets/logo2.png';
import './Navbar.css'
import { useState,useEffect } from 'react';
function Navbar() {
  let[collapse,setCollapse]=useState(true);
  let handleSidebar=()=>{
    setCollapse((curr)=>!curr);
  }
  return ( 
    <div  className={`Navbar ${!collapse?'Nav-Collapse':''}`}>
      <div onClick={handleSidebar}className="menu-btn">{collapse?<i className=" fa-solid fa-xmark "></i>:<i className="fa-solid fa-bars"></i>}</div>
       <ul className="nav-menu">
         <a onClick={handleSidebar} href="#Home" className='nav-link'>Home</a>
         <a  onClick={handleSidebar} href="#About"  className='nav-link'>About me</a>
        <a onClick={handleSidebar} href="#Skills"  className='nav-link'>Skills</a>
         <a onClick={handleSidebar} href="#Projects"  className='nav-link'>Projects</a>
        <a  onClick={handleSidebar}href="#Education"  className='nav-link'>Education</a>
         <a onClick={handleSidebar} href="#Contact" className='nav-link'>Contact</a>
      </ul>
      <div className="connect-btn"><a href="./SanketSathe_Resume.pdf" download="SanketSathe_Resume.pdf"><i className="fa-solid fa-download">CV</i></a></div>
    </div>
   );
}

export default Navbar;
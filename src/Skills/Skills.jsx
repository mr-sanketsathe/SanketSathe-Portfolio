import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiPython, SiMysql } from 'react-icons/si';
import { SiGit, SiDocker} from 'react-icons/si';


const skills = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'Python', icon: <SiPython /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'SQL', icon: <SiMysql /> },
];
const Tools=[
    
   {
        name:'Git',icon:<SiGit/>
    } ,{
        name:'Docker',icon:<SiDocker/>
    },

];

function Skills() {
  return (
    <div className="skills-wrapper" id="Skills">
      <h1 className="skills-title">My Skills</h1>
      <h3 className='tech'>Technologies</h3>
      <div className="skills-grid">
        
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
      <h3 className="tools">Tools</h3>
     <div className="skills-grid">
        
        {Tools.map((tool, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{tool.icon}</div>
            <div className="skill-name">{tool.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;

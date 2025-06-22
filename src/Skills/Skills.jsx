import React from 'react';
import './Skills.css'
function Skill() {
    return (
        <div id='Skills-section' className="Skills-section">
            <div className="skills">
                <div className="programing-lang">
                    <h4 className="title">Programing Language</h4>
                    <ul className="lang-list">
                        <li>Python <div className="progress-bar"></div></li>
                        <li>Java <div className="progress-bar"></div></li>
                        <li>Javacript <div className="progress-bar"></div></li>
                        <li>SQL <div className="progress-bar"></div></li>
                    </ul>
                </div>
                <div className="Web-dev">
                    <h4 className="title">Web Development</h4>
                    <ul className="web-dev-list">
                        <li>Html5,Css3 <div className="progress-bar"></div></li>
                        <li>Bootstrap  <div className="progress-bar"></div></li>
                        <li>Tailwind   <div className="progress-bar"></div></li>
                        <li>React.js   <div className="progress-bar"></div></li>
                        <li>Node.js    <div className="progress-bar"></div></li>
                        <li>Express.js <div className="progress-bar"></div></li>
                        <li>MongoDB    <div className="progress-bar"></div></li>
                    </ul>
                </div>
            </div>
            <div className="tools">
                <p className="title"> Used Tools </p>
                <ul className="tools-list">
                    <li>
                        <img className='icons' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                    </li>
                    <li>
                        <img className='icons' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
                    </li>
                    <li>
                        <img className='icons' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
                    </li>
                    <li>

                        <img className='icons' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />

                    </li>

                </ul>
            </div>
        </div>
    );
}

export default Skill;
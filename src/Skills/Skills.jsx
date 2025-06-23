import React from 'react';
import './Skills.css';

function Skill() {
    const programmingSkills = [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 75 },
        { name: 'JavaScript', level: 80 },
        { name: 'SQL', level: 70 },
    ];

    const webDevSkills = [
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Bootstrap', level: 85 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'React.js', level: 85 },
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 70 },
        { name: 'MongoDB', level: 80 },
    ];

    const tools = [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    ];

    return (
        <section id='Skills-section' className="Skills-section">
            <h2 className="skills-heading">My Skills</h2>
            <div className="skills-grid">
                <div className="skills-card">
                    <h3>Programming Languages</h3>
                    {programmingSkills.map((skill, index) => (
                        <div className="skill-item" key={index}>
                            <span>{skill.name}</span>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: `${skill.level}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="skills-card">
                    <h3>Web Development</h3>
                    {webDevSkills.map((skill, index) => (
                        <div className="skill-item" key={index}>
                            <span>{skill.name}</span>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: `${skill.level}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="skills-card tools-card">
                    <h3>Tools I Use</h3>
                    <div className="tools-list">
                        {tools.map((icon, index) => (
                            <img className="tool-icon" src={icon} key={index} alt="tool" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skill;

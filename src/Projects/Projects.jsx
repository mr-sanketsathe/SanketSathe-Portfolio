import React from 'react';
import './Projects.css';
function Projects() {
    return (
        <div id='Projects' className="Projects">
            <div className="Projects-list">
                <div className='Project'>
                    <h3 className='Project-name'>Gemini Clone</h3>
                    <p className='Project-desc'> A responsive and interactive AI-powered chatbot web application built using React.js and Gemini API (by Google AI).
                        This project replicates core features of the Gemini chat experience with a clean and modern UI.</p>
                    <button className='view-Project'>View</button>   
                </div>
                <div className='Project'></div>
                <div className='Project'></div>
                <div className='Project'></div>
               
            </div>
        </div>
    );
}

export default Projects;
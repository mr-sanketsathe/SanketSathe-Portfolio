import React from 'react';
import './Education.css'
function Education() {
    return ( 
        <div id='Education' className="Education-section">
           <div className="Education-list">
            <div className='Education'>
                <h2 className="Education-name">Diploma In Computer Enggineering</h2>
                <p className='College-name'>SMT.Geeta D Tatakare Polytechnic,Gove kolad</p>
                <p className='completion-year'>2023 To 2025</p>
                <span className='percentage'>86.46%</span>
            </div>
            <div className='Education'>
                <h2 className="Education-name">Higher Secondary Education In Science(HSC)</h2>
                <p className='College-name'>D G Tatakare Junior College,Kolad</p>
                <p className='completion-year'>2020 To 2022</p>
                <span className='percentage'>55.46%</span>
            </div>
            <div className='Education'>
                <h2 className="Education-name">Secondary School Education(SSC)</h2>
                <p className='College-name'>D G Tatakare vidhyalay Sutarwadi</p>
                <p className='completion-year'>2019 To 2020</p>
                <span className='percentage'>79.46 %</span>
            </div>
           </div>
        </div>

     );
}

export default Education;
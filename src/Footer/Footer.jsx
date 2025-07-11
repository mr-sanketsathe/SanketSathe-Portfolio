import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-text">© {new Date().getFullYear()} Sanket Sathe. All rights reserved.</p>
                <div className="footer-icons">
                    <a href="https://www.linkedin.com/in/sanket-sathe-654347362/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/mr-sanketsathe" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.instagram.com/itzs_sanket?igsh=MTVzeG16OWF1NTIzMg==" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                   
                </div>
            </div>
        </footer>
    );
}

export default Footer;

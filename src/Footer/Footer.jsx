import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-text">© {new Date().getFullYear()} Sanket Sathe. All rights reserved.</p>
                <div className="footer-icons">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#">
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

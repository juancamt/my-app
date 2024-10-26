import React from 'react';
import '../modulosUsuario/home.css'
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__section footer__brand-section">
                    <img src={`${process.env.PUBLIC_URL}/imagenes/logo.png`} alt="Logo" className="footer__logo" />

                    <div className="footer__social-icons">
                        <span><FaInstagram /> </span>
                        <span><FaFacebookF /></span>
                        <span><FaTwitter /></span>
                    </div>
                </div>
                
                <div className="footer__section">
                    <h3>Company</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Our Services</li>
                        <li>Our Projects</li>
                        <li>Blog & Updates</li>
                    </ul>
                </div>

                <div className="footer__section">
                    <h3>Links</h3>
                    <ul>
                        <li>FAQ</li>
                        <li>Testimonials</li>
                        <li>Recent Work</li>
                        <li>Features</li>
                    </ul>
                </div>

                <div className="footer__section">
                    <h3>Contact</h3>
                    <ul>
                        <li>+327 286 7870</li>
                        <li>info@DeveloperHouse.com</li>
                    </ul>
                </div>
            </div>
            <div className="footer__bottom">
                <span>&copy; 2024 DeveloperHouse. All Rights Reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;

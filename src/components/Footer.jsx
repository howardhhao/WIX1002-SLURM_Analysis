import React from 'react';
import '../frontend/Footer.css';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {

    const handleLinkedIn = (event) => {
        event.preventDefault();
        window.location.href = 'www.linkedin.com/in/wong-wen-hao-9036b6258';
      };

      
      const handleIG = (event) => {
        event.preventDefault();
        window.location.href = 'https://www.instagram.com/wenhao_82/';
      };
    
      
      const SocialMediaIcons = () => {
        return (
          <div className="social-media-icons">
            <a onClick={handleIG} className="social-icon">
            <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a onClick={handleLinkedIn} className="social-icon">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        );
      };
      
      const FooterCopyright = () => {
        return (
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} Created by Wong Wen Hao. All rights reserved.
          </div>
        );
      };

  return (
    <footer className="footer">
      <SocialMediaIcons />
      <FooterCopyright />
    </footer>
  );
};

export default Footer;

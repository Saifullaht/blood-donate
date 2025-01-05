import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; 2024 Blood Donation. All rights reserved.</p>
        </div>
        <div className="footer-center">
          <p>Follow Us:</p>
          <div className="social-icons">
            <a href="#" className="social-icon">Facebook</a>
            <a href="#" className="social-icon">Twitter</a>
            <a href="#" className="social-icon">Instagram</a>
          </div>
        </div>
        <div className="footer-right">
          <p>Contact: contact@blooddonation.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

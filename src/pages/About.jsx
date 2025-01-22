import React from 'react';
import { motion } from 'framer-motion';
import './About.css';


const About = () => {
  return (
    <motion.div 
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <div className="about-header">
        <h1>About Us</h1>
        <p>Your trusted platform for connecting blood donors and recipients.</p>
      </div>
      <div className="about-content">
        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            We aim to create a reliable and efficient platform that bridges the gap between blood donors and those in need. 
            Our goal is to save lives by making blood donation more accessible and hassle-free.
          </p>
        </section>
        <section className="vision">
          <h2>Our Vision</h2>
          <p>
            A world where no one suffers due to a lack of blood. We envision a future with a robust and interconnected community 
            of blood donors ready to step up whenever there's a need.
          </p>
        </section>
        <section className="team">
          <h2>Meet the Team</h2>
          <p>
            Our team consists of dedicated individuals passionate about making a difference. From developers to volunteers, 
            we work together to ensure this platform remains a beacon of hope for those in need.
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default About;
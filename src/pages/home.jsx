import React from "react";
import { motion } from "framer-motion";
import Categaries from "../components/Categareies";
import BloodHome from "./bloodhome";

const Home = () => {
  return (

    
    <motion.div

      // className="home-page"
      // initial={{ opacity: 0, y: 20 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.8 }}
      style={{ padding: "5px", backgroundColor: "#f0f4f8" }}
    >
       
       <BloodHome/>
      {/* Hero Section */}
      <div className="hero-section" style={heroSectionStyle}>
        <motion.h1
          style={heroTitleStyle}
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Donate Blood, Save Lives
        </motion.h1>
        <motion.p
          style={heroSubtitleStyle}
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Your donation can make a difference. Join our community of heroes today!
        </motion.p>
        <motion.button
          style={buttonStyle}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Find Donors
        </motion.button>
      </div>

      {/* Stats Section */}
      <div className="stats-section" style={statsSectionStyle}>
        {[
          { number: "10,000+", label: "Donors Registered" },
          { number: "5,000+", label: "Lives Saved" },
          { number: "2,000+", label: "Requests Fulfilled" },
        ].map((stat, index) => (
          <motion.div
            className="stat"
            key={index}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            style={statStyle}
          >
            <h3 style={statNumberStyle}>{stat.number}</h3>
            <p style={statLabelStyle}>{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Steps Section */}
      <div className="steps-section" style={stepsSectionStyle}>
        <h2 style={sectionTitleStyle}>How It Works</h2>
        <div className="steps-container" style={stepsContainerStyle}>
          {[
            "Register as a donor or recipient.",
            "Search for matching donors in your area.",
            "Contact and arrange a donation.",
          ].map((step, index) => (
            <motion.div
              className="step"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={stepStyle}
            >
              <span style={stepNumberStyle}>{index + 1}</span>
              <p style={stepTextStyle}>{step}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Donate Section */}
      <div className="info-section" style={infoSectionStyle}>
        <h2 style={sectionTitleStyle}>Why Donate Blood?</h2>
        <p style={infoTextStyle}>
          Every blood donation can save up to three lives. Be a hero and make a difference.
        </p>
      </div>

      {/* Categories Section */}
      <div>
        <Categaries />
      </div>
    </motion.div>
  );
};

// Styles
const heroSectionStyle = {
  textAlign: "center",
  padding: "60px 20px",
  background: "linear-gradient(135deg, #ff6b6b, #f7d9a0)",
  borderRadius: "10px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  marginBottom: "40px",
};

const heroTitleStyle = {
  fontSize: "48px",
  fontWeight: 800,
  color: "#fff",
};

const heroSubtitleStyle = {
  fontSize: "18px",
  color: "#fff",
  margin: "20px 0",
};

const buttonStyle = {
  padding: "12px 24px ",
  fontSize: "16px",
  backgroundColor: "#fff",
  color: "#ff6b6b",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s, transform 0.3s",
};

const statsSectionStyle = {
  display: "flex",
  justifyContent: "space-around",
  margin: "20px 0",
};

const statStyle = {
  textAlign: "center",
  padding: "20px",
  backgroundColor: "#fff",
  borderRadius: "10px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  flex: "1",
  margin: "0 10px",
};

const statNumberStyle = {
  fontSize: "32px",
  color: "#ff6b6b",
};

const statLabelStyle = {
  fontSize: "16px",
  color: "#555",
};

const stepsSectionStyle = {
  margin: "40px 0",
  textAlign: "center",
};

const sectionTitleStyle = {
  fontSize: "28px",
  color: "#ff6b6b",
  marginBottom: "20px",
};

const stepsContainerStyle = {
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
};

const stepStyle = {
  backgroundColor: "#fff",
  borderRadius: "10px",
  padding: "20px",
  margin: "10px",
  flex: "1 1 30%",
  textAlign: "center",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
};

const stepNumberStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#ff6b6b",
  display: "inline-block",
  marginBottom: "10px",
};

const stepTextStyle = {
  fontSize: "16px",
  color: "#555",
};

const infoSectionStyle = {
  textAlign: "center",
  margin: "40px 0",
};

const infoTextStyle = {
  fontSize: "16px",
  color: "#555",
  maxWidth: "600px",
  margin: "0 auto",
};

export default Home; 
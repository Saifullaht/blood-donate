import React from "react";
import { motion } from "framer-motion";
 
import Categaries from "../components/Categareies";
import Imgcards from "../components/imgcard";
import Changeimg from "../components/changeimg";

const Home = () => (
  <motion.div
    className="home-page"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: "20px", padding: "20px" }}>
  <div style={{ flex: "1" }}>
    <h1 style={{ fontSize: "36px", fontWeight:800, color: "#a80d0d", marginBottom: "10px" }}>Donate Blood, Save Lives</h1>
    <p style={{ fontSize: "16px",  color: "#555", lineHeight: "1.6" }}>
    Donating blood is a noble act that saves lives and brings hope to those in critical need. Every drop you give can make the difference between life and death for someone fighting illness or facing an emergency. Be a hero—donate blood today and inspire others to join this life-saving mission.
    </p>
  </div>
  <div style={{ flex: "1" }}>
    <img
      src="https://as2.ftcdn.net/v2/jpg/02/77/81/95/1000_F_277819554_FwRXduqsSjlANdlwM4hesqGmAKlb1GE7.jpg"
      alt="Loading..."
      style={{ maxWidth: "95%", height: "auto", borderRadius: "10px", marginLeft:"50px" }}  />
  </div>
</div>

    {/* Hero Section */}
    <div className="hero-section">
      <h1 className="hero-title">Donate Blood, Save Lives</h1>
      <p className="hero-subtitle">
        Join our community of donors and make a difference today.
      </p>
      <button className="hero-button">Find Donors</button>
    </div>
     

    {/* Stats Section */}
    <div className="stats-section">
      <div className="stat">
        <h3>10,000+</h3>
        <p>Donors Registered</p>
      </div>
      <div className="stat">
        <h3>5,000+</h3>
        <p>Lives Saved</p>
      </div>
      <div className="stat">
        <h3>2,000+</h3>
        <p>Requests Fulfilled</p>
      </div>
    </div>

    

    {/* Steps Section */}
    <div className="steps-section">
      <h2 className="section-title">How It Works</h2>
      <div className="steps-container">
        <div className="step">
          <span className="step-number">1</span>
          <p>Register as a donor or recipient.</p>
        </div>
        <div className="step">
          <span className="step-number">2</span>
          <p>Search for matching donors in your area.</p>
        </div>
        <div className="step">
          <span className="step-number">3</span>
          <p>Contact and arrange a donation.</p>
        </div>
      </div>
    </div>

    {/* Testimonials Section */}
    <Imgcards/>
  {/* Why Donate Section */}
  <div className="info-section">
      <h2 className="section-title">Why Donate Blood?</h2>
      <p className="info-text">
        Every blood donation can save up to three lives. Be a hero and make a
        difference.
      </p>
    </div>
    <Changeimg/>
    <div>
       <Categaries/>
    </div>
  </motion.div>
);

export default Home;

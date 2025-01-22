import React from "react"
import { motion } from "framer-motion"
import Categaries from "../components/Categareies"
import "./bloodhome.css"
const BloodHome = () => {
  return (
    <motion.div
    //   className="home-page"
    //   initial={{ opacity: 0, y: 20 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="logo-container">
            <svg viewBox="0 0 24 24" className="blood-drop">
              <path d="M12 21.5C7.313 21.5 3.5 17.687 3.5 13C3.5 8.313 12 2.5 12 2.5C12 2.5 20.5 8.313 20.5 13C20.5 17.687 16.687 21.5 12 21.5Z" />
            </svg>
            <div className="blood-type">
              <span>-</span>
              <span>+</span>
            </div>
          </div>
          <motion.h1 initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 0.8 }}>
            <span className="hashtag">#</span>Save Blood
            <br />Save Life
          </motion.h1>
          <motion.p initial={{ y: -30 }} animate={{ y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            YOU DON'T NEED TO BE A DOCTOR
            <br />
            TO SAVE A LIFE
          </motion.p>
          <motion.button className="cta-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            GIVE NOW
          </motion.button>
        </div>
        <div className="hero-image">
          <img src="https://img.graphicsurf.com/2020/08/blood-donation-vector-illustration.jpg" alt="Blood donation campaign" />
        </div>
      </div>

       

      {/* Other sections (Stats, Steps, Why Donate, Categories) can be added here */}
       
    </motion.div>
  )
}

export default BloodHome


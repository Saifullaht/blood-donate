import React from "react";
import "./Dashboard.css"

const homeeee = () => {
  return (
    <div className="dashboard">
      {/* Left Section */}
      <div className="left-section">
        <img
          src="./images/drop-icon.png"
          alt="Drop Icon"
          className="icon"
        />
        <h1># ANYONE CAN BE A HERO</h1>
        <div className="social-icons">
          <img
            src="./images/twitter-icon.png"
            alt="Twitter Icon"
          />
          <img
            src="./images/facebook-icon.png"
            alt="Facebook Icon"
          />
          <img
            src="./images/instagram-icon.png"
            alt="Instagram Icon"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="content">
          <h2>YOU DON'T NEED TO BE A DOCTOR TO SAVE A LIFE</h2>
          <p>Give Now</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. When an unknown printer took a galley of type and scrambled
            it to make a type specimen book.
          </p>
        </div>
        <img
          src="./images/arm-image.png"
          alt="Arm Image"
          className="arm-image"
        />
      </div>
    </div>
  );
};

export default homeeee;

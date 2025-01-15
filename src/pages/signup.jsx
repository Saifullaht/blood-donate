import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../Constant/constant";
import { Spin, message } from "antd";

const Signup = () => {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    setLoading(true);

    const fullname = e.target.fullname.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const obj = { fullname, email, password };

    axios
      .post(AppRoutes.register, obj)
      .then((res) => {
        setLoading(false);

        // Show success message
        message.success("Signup successful! Please log in.");
        // Redirect to Home page after successful signup
        navigate("/home"); // Directly redirect to Home page
      })
      .catch((err) => {
        setLoading(false);

        // Show error message
        const errorMessage =
          err.response?.data?.message || "Signup failed! Please try again.";
        message.error(errorMessage);
      });
  };

  return (
    <div className="box">
      <span className="borderLine" />
      <form onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <div className="inputBox">
          <input type="text" name="fullname" required />
          <span className="white">Full Name</span>
          <i />
        </div>
        <div className="inputBox">
          <input type="text" name="email" required />
          <span className="white">Email</span>
          <i />
        </div>
        <div className="inputBox">
          <input type="password" name="password" required />
          <span>Password</span>
          <i />
        </div>
        <div className="links">
          <a href="/login" color="blue">
            Login
          </a>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="google-btn"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          {isLoading ? (
            <>
              <Spin
                size="small"
                className="custom-spinner"
                style={{
                  color: "white", // Ensure spinner color is white
                }}
              />
              <span style={{ color: "white" }}>Signing up...</span>
            </>
          ) : (
            "Sign Up"
          )}
        </button>
        
      </form>
    </div>
  );
};

export default Signup;

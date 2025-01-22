import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../Constant/constant";
import { Spin, message } from "antd";

const Signup = () => {
  const [isLoginActive, setLoginActive] = useState(false);
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
      .then(() => {
        setLoading(false);
        message.success("Signup successful! Please log in.");
        navigate("/login");
      })
      .catch((err) => {
        setLoading(false);
        const errorMessage =
          err.response?.data?.message || "Signup failed! Please try again.";
        message.error(errorMessage);
      });
  };

  return (
    <div className="wrapper">
      <div className="title-text">
        <div className={`title ${isLoginActive ? "login" : "signup"}`}>
          {isLoginActive ? "Login Form" : "Signup Form"}
        </div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input
            type="radio"
            name="slide"
            id="login"
            checked={isLoginActive}
            onChange={() => {
              setLoginActive(true);
              navigate("/login");
            }}
          />
          <input
            type="radio"
            name="slide"
            id="signup"
            checked={!isLoginActive}
            onChange={() => setLoginActive(false)}
          />
          <label htmlFor="login" className="slide login">
            Login
          </label>
          <label htmlFor="signup" className="slide signup">
            Signup
          </label>
          <div className={`slider-tab ${isLoginActive ? "login" : "signup"}`}></div>
        </div>
        <div className="form-inner">
          <form onSubmit={handleSignup} className="signup">
            <div className="field">
              <input type="text" name="fullname" placeholder="Full Name" required />
            </div>
            <div className="field">
              <input type="text" name="email" placeholder="Email Address" required />
            </div>
            <div className="field">
              <input type="password" name="password" placeholder="Password" required />
            </div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <button
                type="submit"
                disabled={isLoading}
                style={{
                  background: "none",
                  border: "none",
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                {isLoading ? (
                  <>
                    <Spin size="small" className="custom-spinner" /> Signing up...
                  </>
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
            <div className="login-link">
              Already a member?{" "}
              <a
                onClick={() => navigate("/login")}
                style={{ color: "#3498db", cursor: "pointer", fontWeight: "bold" }}
              >
                Login now
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

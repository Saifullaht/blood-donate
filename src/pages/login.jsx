import React, { useContext, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { AppRoutes } from "../Constant/constant";
import { AuthContext } from "../Context/Authcontext";
import { message, Spin } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const [isLoginActive, setLoginActive] = useState(true); // Controls active state between login/signup
  const [isLoading, setLoading] = useState(false);
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    const obj = { email, password };

    axios
      .post(AppRoutes.login, obj)
      .then((res) => {
        setLoading(false);

        Cookies.set("token", res?.data?.data?.token);
        setUser(res?.data?.data?.user);

        message.success("Login successful! Welcome back.");
        navigate("/home"); // Redirect after login
      })
      .catch((err) => {
        setLoading(false);

        const errorMessage =
          err.response?.data?.message || "Login failed! Please try again.";
        message.error(errorMessage);
      });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setLoading(true);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const obj = { name, email, password };

    axios
      .post(AppRoutes.signup, obj)
      .then((res) => {
        setLoading(false);

        message.success("Signup successful! Please login to continue.");
        setLoginActive(true); // Switch to login after successful signup
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
          <label
            className={`slide login  ${isLoginActive ? "active" : ""}`}
            onClick={() => {
              setLoginActive(true);
              navigate("/login");
            }}
          >
            Login
          </label>
          <label
            className={`slide signup  ${!isLoginActive ? "active" : " "}`}
            onClick={() => {
              setLoginActive(false);
              navigate("/signup");
            }}
          >
            Signup
          </label>
          <div className={`slider-tab ${isLoginActive ? "login" : "signup"}`}></div>
        </div>
        <div className="form-inner">
          {isLoginActive ? (
            <form onSubmit={handleLogin} className="login">
              <div className="field">
                <input type="text" name="email" placeholder="Email Address" required />
              </div>
              <div className="field">
                <input type="password" name="password" placeholder="Password" required />
              </div>
              <div className="pass-link">
                <a href="/forgot-password">Forgot password?</a>
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
                      <Spin size="small" className="custom-spinner" /> Logging in...
                    </>
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
              <div className="signup-link">
                Not a member?{" "}
                <a
                  onClick={() => {
                    setLoginActive(false);
                    navigate("/signup");
                  }}
                  style={{ color: "#3498db", cursor: "pointer", fontWeight: "bold" }}
                >
                  Signup now
                </a>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSignup} className="signup">
              <div className="field">
                <input type="text" name="name" placeholder="Full Name" required />
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
                    "Signup"
                  )}
                </button>
              </div>
              <div className="signup-link">
                Already a member?{" "}
                <a
                  onClick={() => {
                    setLoginActive(true);
                    navigate("/login");
                  }}
                  style={{ color: "#3498db", cursor: "pointer", fontWeight: "bold" }}
                >
                  Login now
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

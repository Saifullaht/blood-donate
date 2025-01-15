import React, { useContext, useState } from "react";
import "./login.css"; // Ensure your styles are imported
import Cookies from "js-cookie";
import axios from "axios";
import { AppRoutes } from "../Constant/constant";
import { AuthContext } from "../Context/Authcontext";
import { message, Spin } from "antd";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const Login = () => {
  const [isLoading, setLoading] = useState(false);
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate(); // Initialize useNavigate

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

        // Navigate to the home page after successful login
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);

        const errorMessage =
          err.response?.data?.message || "Login failed! Please try again.";
        message.error(errorMessage);
      });
  };

  return (
    <div className="box">
      <span className="borderLine" />
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
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
          <a href="#" color="blue">
            Forgot Password
          </a>
          <a href="signup">Signup</a>
        </div>
        <button
          type="submit"
          className="google-btn"
          disabled={isLoading}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          {isLoading ? (
            <>
              <Spin size="small" className="custom-spinner" /> {/* Add custom class */}
              <span style={{ color: "white" }}>Logging in...</span>
            </>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;

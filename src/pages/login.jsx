

import React from 'react';
import "./login.css"
 

const Login = () => {
  return (
    <div className="box">
  <span className="borderLine" />
  <form action="">
    <h2>Login</h2>
    <div className="inputBox">
      <input type="text"  required  />
      <span className='white'>Email</span>
      <i />
    </div>
    <div className="inputBox">
      <input type="password"   required />
      <span>Password</span>
      <i />
    </div>
    <div className="links">
      <a href="#" color='blue'>Forgot Password</a>
      <a href="signup">Signup</a>
    </div>
    <button className="google-btn">
          <span className="google-icon">
            {/* Add Google Icon here if you want */}
          </span>
          log in with Google
        </button>
    <input type="submit" className='google-btn' defaultValue="Login" />
  </form>
</div>

  );
};
export default Login;
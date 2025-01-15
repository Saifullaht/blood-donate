import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const handleGoogleLogin = (credentialResponse) => {
  const token = credentialResponse.credential;

  axios
    .post("http://localhost:4000/auth/google-login", { token })
    .then((res) => {
      console.log("Google Login Successful:", res.data);
      // Save JWT token and user info in localStorage or context
    })
    .catch((err) => {
      console.error("Google Login Error:", err.response?.data?.message);
    });
};

// Render Google Login Button
<GoogleLogin onSuccess={handleGoogleLogin} onError={() => console.error("Google Login Failed")} />;

import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie"; // Library for managing cookies
import axios from "axios"; // Axios for API requests
import { AppRoutes } from "../Constant/constant"; // Assuming AppRoutes is defined elsewhere

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null); // User state is initially null

  useEffect(() => {
    // When the component mounts, check if token exists in cookies
    const token = Cookies.get("token");
    const userInfo = Cookies.get("user"); // Check if user info is saved in cookies

    if (token && userInfo) {
      // If both token and user info are available, set them
      setUser(JSON.parse(userInfo)); // Parse user info from cookies
    } else {
      setUser(null); // If no token or user info, set user to null (logged out)
    }
  }, []);

  const getUserInfo = () => {
    const token = Cookies.get("token");

    if (token) {
      axios.get(AppRoutes.myinfo, {
        headers: {
          Authorization: `Bearer ${token}`, // Send token in the authorization header
        },
      })
      .then((response) => {
        setUser(response.data.data); // Set user info from API response
        Cookies.set("user", JSON.stringify(response.data.data)); // Store user info in cookies
      })
      .catch((error) => {
        console.error("Error fetching user info:", error);
        setUser(null); // In case of error, set user state to null (logout)
        Cookies.remove("token"); // Remove invalid token
        Cookies.remove("user"); // Remove invalid user info
      });
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

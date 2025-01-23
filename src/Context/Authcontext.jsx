import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { AppRoutes } from "../Constant/constant";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  // Check localStorage for token on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userInfo = localStorage.getItem("user");

    if (token && userInfo) {
      setUser(JSON.parse(userInfo));
    } else {
      setUser(null);
    }
  }, []);

  const getUserInfo = () => {
    const token = localStorage.getItem("token");

    if (token) {
      axios
        .get(AppRoutes.myinfo, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUser(response.data.data);
          localStorage.setItem("user", JSON.stringify(response.data.data)); // Save user info in localStorage
        })
        .catch((error) => {
          console.error("Error fetching user info:", error);
          setUser(null);
          localStorage.removeItem("token"); // Clear invalid token
          localStorage.removeItem("user");
        });
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

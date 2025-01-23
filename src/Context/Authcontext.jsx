import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie"; // Library for managing cookies
import axios from "axios"; // Axios for API requests
import { AppRoutes } from "../Constant/constant"; // Assuming AppRoutes is defined elsewhere
import { Spinner } from "@nextui-org/react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null); // User state is initially null
  const [loading, setLoading] = useState(true); // Loading state for session restoration

  useEffect(() => {
    const token = Cookies.get("token"); // Check if token exists in cookies

    if (token) {
      // Fetch user info if token exists
      axios
        .get(AppRoutes.myinfo, {
          headers: {
            Authorization: `Bearer ${token}`, // Pass token in Authorization header
          },
        })
        .then((response) => {
          setUser(response.data.data); // Restore user info to state
          Cookies.set("user", JSON.stringify(response.data.data)); // Save user info in cookies
        })
        .catch((error) => {
          console.error("Error restoring session:", error);
          setUser(null); // Logout user if session restoration fails
          Cookies.remove("token"); // Remove invalid token
          Cookies.remove("user"); // Remove invalid user info
        })
        .finally(() => {
          setLoading(false); // End loading state after user info is processed
        });
    } else {
      // No token, set user to null and stop loading
      setUser(null);
      setLoading(false);
    }
  }, []);

  const getUserInfo = () => {
    const token = Cookies.get("token");

    if (token) {
      axios
        .get(AppRoutes.myinfo, {
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

  if (loading) {
    return <div><Spinner/></div>;  
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

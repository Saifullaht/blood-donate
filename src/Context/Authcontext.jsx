import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { AppRoutes } from "../Constant/constant";
import axios from "axios";
 

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (!user) {
            const token = Cookies.get("token");  
            if (token) {
              getUserinfo();
            }
        }
    },[user]);

    const getUserinfo = () => {
        axios.get(AppRoutes.myinfo,{
            headers: { 
              Authorization: `Bearer ${Cookies.get("token")}`
            }
        }).then((res) => {
            console.log("Response from my info API", res.data);
             
            setUser(res.data.data);  
        }).catch((err) => {
            console.log("Error fetching user data:", err);
        });
    };

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

import axios from "axios";
import React, { useEffect, useState } from "react";
import { AppRoutes } from "../Constant/constant";
 
const BloodDonars = () => {
  console.log("donar" , BloodDonars);
  
  const [donar , setDonar] = useState([])

  useEffect(()=>{
    getDonar()
} , []);

const getDonar = () =>{
  axios.get(AppRoutes.donarForm , {
   headers:{
    Authorization: `Bearer` + Cookies.get("token")
   }
  }).then((res)=>{
    console.log("donarinfo",res.data);
    
  })
}
  return (
    
    <div>
      
      <h1 className="text-black main">Blood-donars</h1>
    </div>
  );
};

export default BloodDonars;
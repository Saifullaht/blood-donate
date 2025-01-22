 import React from "react";
import Sidebar from "../components/Sidebar";
const Dashboard = () => {
    return (
       <>
        
      <div className="dashboard">
        <h3>Dashboard Overview</h3>
        <div className="stats">
          <div className="stat-item">
            <h4>Total Donors</h4>
            <p>1200</p>
          </div>
          <div className="stat-item">
            <h4>Blood Stock</h4>
            <p>500 units</p>
          </div>
          <div className="stat-item">
            <h4>Recent Requests</h4>
            <p>5 requests pending</p>
          </div>
        </div>
      </div>
      </> 
    );
  };
  
  export default Dashboard;
  
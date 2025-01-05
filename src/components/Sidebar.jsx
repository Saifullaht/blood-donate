import React, { useState } from "react";
import { Link } from "react-router-dom"; // Use Link for navigation
import "./Sidebar.css"; // Import CSS for sidebar

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div  >
      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <div className="sidebar-top">
          <h2>Blood-info</h2>
          <ul>
            <li>
              <Link to="/dashboard" className="nav-item">
                {/* Dashboard Icon */}
                <svg
                  className="icon"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 3.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-1 0v-12a.5.5 0 0 1 .5-.5z" />
                  <path d="M4.146 9.146a.5.5 0 0 1 .708 0L10 14.293l5.146-5.147a.5.5 0 1 1 .708.708l-5.5 5.5a.5.5 0 0 1-.708 0l-5.5-5.5a.5.5 0 0 1 0-.708z" />
                </svg>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/reports" className="nav-item">
                {/* Reports Icon */}
                <svg
                  className="icon"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4z" />
                </svg>
                Reports
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebar-footer">
          <a href="#" className="logout">
            <svg
              className="icon"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.293 9.293a1 1 0 0 1 1.414 0L10 13.586l4.293-4.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414z" />
            </svg>
            Logout
          </a>
        </div>
      </aside>

      {/* Sidebar Toggle Button */}
      <button className="toggle-btn" onClick={toggleSidebar}>
        <svg
          className="icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Sidebar;

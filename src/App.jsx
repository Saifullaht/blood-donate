import React, { useContext, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import "./App.css";
 import BloodDonorForm from "./pages/BloodDonarForm";
import Home from "./pages/home";
import About from "./pages/About";
import ContactUs from "./pages/Contact";
import Login from "./pages/login";
import Signup from "./pages/signup";
import BloodDonars from "./pages/BloodDonars";
import Admin from "./pages/Admin";
import { AuthContext } from "./Context/Authcontext";
import Cookies from "js-cookie";

// Layout for main content pages (with Navbar)
const MainLayout = ({ children }) => (
  <div>
    <Navbar />
    <div>{children}</div>
    {/* <Footer /> */}
  </div>
);

// Layout for Admin (with Sidebar)
const AdminLayout = ({ children }) => (
  <div style={{ display: "flex" }}>
    <Sidebar />
    <div style={{ marginLeft: "16rem", flex: 1 }}>{children}</div>
  </div>
);

// Private Route wrapper for authenticated routes
const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
};

// Public Route wrapper for Login and Signup pages
const PublicRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? <Navigate to="/home" /> : children;
};

const App = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      // Set user context based on the token
      setUser({ token }); // Replace this with an API call to fetch user details if needed
    } else {
      // If no token is present, ensure user is null
      setUser(null);
    }
  }, [setUser]);

  return (
    <Routes>
      {/* Private Routes */}
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <MainLayout>
              <Home />
            </MainLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/about"
        element={
          <PrivateRoute>
            <MainLayout>
              <About />
            </MainLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/contact"
        element={
          <PrivateRoute>
            <MainLayout>
              <ContactUs />
            </MainLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/BloodDonorForm"
        element={
          <PrivateRoute>
            <MainLayout>
               <BloodDonorForm/>
            </MainLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/BloodDonars"
        element={
          <PrivateRoute>
            <MainLayout>
              <BloodDonars />
            </MainLayout>
          </PrivateRoute>
        }
      />
       

      {/* Admin Route */}
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <AdminLayout>
              <Admin />
            </AdminLayout>
          </PrivateRoute>
        }
      />

       
      <Route
        path="/login"
        element={
          <PublicRoute>
            <MainLayout>
              <Login />
            </MainLayout>
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <MainLayout>
              <Signup />
            </MainLayout>
          </PublicRoute>
        }
      />

      {/* Catch-All Route for redirecting unauthorized access */}
      <Route
        path="*"
        element={
          user ? (
            <Navigate to="/home" />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
};

export default App;

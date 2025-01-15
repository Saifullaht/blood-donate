import React, { useContext, useState } from "react";
import "./Navbar.css";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { AuthContext } from "../Context/Authcontext";
import Cookies from "js-cookie";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

// AcmeLogo component
export const AcmeLogo = () => {
  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQypZVWVC0SkY8QXsmMI0yA38Pxy_9wJXOSNQ&s"
        alt="Acme Logo"
        width="36"
        height="36"
      />
    </div>
  );
};

// Main App Component
export default function App() {
  const { user, setUser } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    Cookies.remove("token"); // Remove token from cookies
    setUser(null); // Reset user context
    navigate("/login"); // Redirect to login page
    message.success("You have successfully logged out.");
  };

  const handleAdminAccess = () => {
    if (!user || user.role !== "admin") {
      message.error("Only admins can access this page.");
      navigate("/"); // Redirect to home page
    }
  };

  const handleProtectedAccess = (url) => {
    if (!user) {
      message.warning("You need to log in to access this page.");
      navigate("/login"); // Redirect to login page
    } else {
      navigate(url); // Navigate to the desired page
    }
  };

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="fixed top-0 w-[100%] z-50 shadow-lg"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-red-700 hover:text-red-500 cursor-pointer  transition-all duration-300">
            Blood Donate
          </p>
        </NavbarBrand>

        {/* Accessible to all */}
        <NavbarItem>
          <Link
            onClick={() => handleProtectedAccess("/")}
            className="hover:text-blue-500 font-semibold cursor-pointer   transition-all duration-300"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            onClick={() => handleProtectedAccess("/about")}
            className="hover:text-blue-500 font-semibold cursor-pointer transition-all duration-300"
          >
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            onClick={() => handleProtectedAccess("/contact")}
            className="hover:text-blue-500  font-semibold cursor-pointer transition-all duration-300"
          >
            Contact Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            onClick={() => handleProtectedAccess("/BloodDonars")}
            className="hover:text-blue-500 font-semibold cursor-pointer  transition-all duration-300"
          >
            Blood Donors
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            onClick={() => handleProtectedAccess("/BloodDonorForm")}
            className="hover:text-blue-500 font-semibold cursor-pointer  transition-all duration-300"
          >
            Blood Donar Form
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        {!user ? (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link
                href="/login"
                className="bg-red-700 hover:bg-red-700 text-white transition-all duration-300 px-4 py-2 rounded"
              >
                Login
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Button
                as={Link}
                href="/signup"
                color="warning"
                variant="flat"
                className="bg-red-700 hover:bg-red-700 text-white transition-all duration-300 rounded"
              >
                Sign Up
              </Button>
            </NavbarItem>
          </>
        ) : (
          <div className="flex items-center gap-4">
            <img
              id="avatarButton"
              src="/default-avatar.jpg" // Add your profile image URL here
              alt="User dropdown"
              className="w-10 h-10 rounded-full cursor-pointer border-3 border-red-500 hover:border-red-700 transition-all duration-400"
              onClick={toggleDropdown}
            />
            {isDropdownOpen && (
              <div
                id="userDropdown"
                className="absolute right-0 z-10 mt-60 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <div className="px-4 py-3 text-sm font-serif text-black">
                  <div className="font-medium truncate font-serif">
                    {user?.email || "User Email"}
                  </div>
                </div>
                <ul
                  className="py-2 text-sm text-black"
                  aria-labelledby="avatarButton"
                >
                  <li>
                    <Link
                      onClick={handleAdminAccess}
                      className="block text-black font-serif cursor-pointer  px-4 py-2 hover:bg-gray-300"
                    >
                      Admin
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      href=""
                      className="block px-4 py-2 font-serif cursor-pointer  text-black hover:bg-gray-300"
                    >
                      Settings
                    </Link>
                  </li> */}
                </ul>
              </div>
            )}
            <Button
              onClick={handleLogout}
              color="error"
              variant="flat"
              className="bg-red-700 hover:bg-red-800 cursor-pointer  text-white rounded transition-all duration-300 px-4 py-2"
            >
              Logout
            </Button>
          </div>
        )}
      </NavbarContent>
    </Navbar>
  );
}


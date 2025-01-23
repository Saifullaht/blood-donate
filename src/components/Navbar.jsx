import React, { useContext, useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarItem,
  Link,
  Button,
  NavbarContent,
} from "@nextui-org/react";
import { AuthContext } from "../Context/Authcontext";
import Cookies from "js-cookie";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

export default function App() {
  const { user, setUser } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isActionDropdownOpen, setIsActionDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if token exists when the page is loaded (including after refresh)
    const token = Cookies.get("token");

    if (token) {
      // If token exists, fetch user data
      setUser({ token }); // Set token in user state
    } else {
      setUser(null); // Set user to null if no token is found
    }
  }, [setUser]);

  const handleLogout = () => {
    Cookies.remove("token"); // Remove token from cookies
    localStorage.removeItem("token");
    setUser(null); // Set user state to null
    navigate("/login"); // Redirect to login page
    message.success("You have successfully logged out.");
  };

  const handleProtectedAccess = (url) => {
    if (!user) {
      message.warning("You need to log in to access this page.");
      navigate("/login"); // Redirect to login if user is not logged in
    } else {
      navigate(url); // Otherwise, navigate to the requested page
    }
  };

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="fixed top-0 w-[100%] z-50 shadow-lg bg-gray-200 text-black"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="start">
        <NavbarBrand>
          <img
            src="https://png.pngtree.com/png-clipart/20231129/ourmid/pngtree-3d-red-blood-drop-png-image_10759934.png"
            alt="Blood Donation Logo"
            width="50"
            height="50"
          />
          <p className="font-bold mr-24  text-red-800 hover:text-red-500 cursor-pointer transition-all duration-300">
            Blood Donate
          </p>
        </NavbarBrand>

        <NavbarItem>
          <Link
            onClick={() => handleProtectedAccess("/")}
            className="hover:text-red-700 text-red-800 font-semibold cursor-pointer transition-all duration-300"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            onClick={() => handleProtectedAccess("/about")}
            className="hover:text-red-700 text-red-800 font-semibold cursor-pointer transition-all duration-300"
          >
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            onClick={() => handleProtectedAccess("/BloodDonorForm")}
            className="hover:text-red-700 text-red-800 font-semibold cursor-pointer transition-all duration-300"
          >
            Contact Us
          </Link>
        </NavbarItem>

        <NavbarItem>
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsActionDropdownOpen(!isActionDropdownOpen)}
              className="btn btn-danger dropdown-toggle"
            >
              Services{" "}
              <span>
                {isActionDropdownOpen ? "▲" : "▼"}
              </span>
            </button>
            {isActionDropdownOpen && (
              <div className="absolute bg-white border border-gray-300 rounded-lg shadow-lg mt-2">
                <a className="block px-4 py-2 hover:bg-gray-100" href="BloodDonorForm">
                  Blood-donar-form
                </a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                  Another Action
                </a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                  Something Else
                </a>
                <div className="border-t border-gray-200"></div>
              </div>
            )}
          </div>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        {!user ? (
          <NavbarItem>
            <Link
              href="/login"
              className="bg-white ml-12 border-collapse hover:bg-gray-200 font-serif text-black transition-all duration-300 px-4 py-2 rounded"
            >
              Login/Signup
            </Link>
          </NavbarItem>
        ) : (
          <div className="relative flex items-center gap-4">
            <img
              id="avatarButton"
              src="/default-avatar.jpg"
              alt="User dropdown"
              className="w-10 h-10 rounded-full cursor-pointer border-3 border-red-500 hover:border-red-700 transition-all duration-400"
              onClick={() =>
                setIsProfileDropdownOpen(!isProfileDropdownOpen)
              }
            />
            <span
              className="cursor-pointer"
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
            >
            </span>
            {isProfileDropdownOpen && (
              <div className="absolute bg-white border border-gray-300 rounded-lg shadow-lg mt-52 right-0 w-48">
                <div className="pt-4">
                  <p className="text-sm font-semibold">{user?.email || "User Email"}</p>
                </div>
                <div className="border border-gray-200"></div>
                <ul className="py-1">
                <li>
                <Link
          to="/dashboard" // Use `to` for routing in React Router
          className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
        >
          Dashboard
        </Link>
        </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </NavbarContent>
    </Navbar>
  );
}

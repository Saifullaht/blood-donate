import React from "react";
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
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const menuItems = [
    "Home",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

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
          <p className="font-bold text-red-700 hover:text-red-500 transition-all duration-300">
            Blood Donate
          </p>
        </NavbarBrand>

        <NavbarItem>
          <Link
            href="/"
            className="hover:text-blue-500 font-semibold  transition-all duration-300"
          >
            Home
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
           color="foreground"
           href="About"
           className="hover:text-blue-500 font-semibold  transition-all duration-300"
          >
            About Us
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
           color="foreground"
           href="Contact"
          
           className="hover:text-blue-500 font-semibold transition-all duration-300"
          >
            Contact Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
           color="foreground"
           href="BloodDonars"
          
           className="hover:text-blue-500 font-semibold transition-all duration-300"
          >
            BloodDonars
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link
            href="login"
            className="bg-red-700 hover:bg-red-700 text-white transition-all duration-300 px-4 py-2 rounded"
          >
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href="signup"
            color="warning"
            variant="flat"
            className="bg-red-700 hover:bg-red-700 text-white transition-all duration-300 rounded"
          >
            Sign Up
          </Button>
        </NavbarItem>

        {/* Avatar with Dropdown */}
        <div className="relative">
      <img
        id="avatarButton"
        src="/docs/images/people/profile-picture-5.jpg" // Add your profile image URL here
        alt="User dropdown"
        className="w-10 h-10 rounded-full cursor-pointer border-3 border-red-500 hover:border-red-700 transition-all duration-400"
        onClick={toggleDropdown}
      />
      {isDropdownOpen && (
        <div
          id="userDropdown"
          className="absolute right-0 z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          <div className="px-4 py-3 text-sm font-serif  text-black">
            <div className="font-serif ">Bonnie Green</div>
            <div className="font-medium truncate font-serif ">name@flowbite.com</div>
          </div>
          <ul
            className="py-2 text-sm text-black"
            aria-labelledby="avatarButton"
          >
            <li className="boldd">
              <Link
                href="/admin"
                className="block text-black font-serif  px-4 py-2 hover:bg-gray-300"
              >
                Admin
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="block px-4 py-2 font-serif  text-black hover:bg-gray-300"
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                to="/earnings"
                className="block px-4 py-2 font-serif  text-black hover:bg-gray-300"
              >
                Earnings
              </Link>
            </li>
          </ul>
          <div className="py-1">
            <Link
              to="/signout"
              className="block px-4 py-2 text-sm font-serif  text-black hover:bg-gray-300"
            >
              Sign out
            </Link>
          </div>
        </div>
      )}
    </div>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full py-2 px-4 hover:bg-gray-200 transition-all duration-300 rounded"
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

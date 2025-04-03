// import React from "react";
// import Logo from ".././../assets/logo.png";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div className=" flex  py-8 lg:px-24 md:px-18 px-14 font-Inter text-xl justify-between">
//       <div>
//         <img
//           src={Logo}
//           className=" w-40"
//           alt="logo"
//         />
//       </div>

//       <div className=" list-none items-center gap-6 mx-6 flex">
//         <Link to="/">
//           <li>Home</li>
//         </Link>

//         <Link to="/about">
//           <li>About Us</li>
//         </Link>
//         <Link to="/contact">
//           <li>Contact Us</li>
//         </Link>

//         <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
//           Book a service
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import { Link, useLocation } from "react-router-dom";
// import Logo from ".././../assets/logo.png";

// const Navbar = () => {
//   const location = useLocation();
//   const currentPath = location.pathname;

//   return (
//     <div className="flex py-8 lg:px-24 md:px-18 px-14 font-Inter text-xl justify-between">
//       <div>
//         <img
//           src={Logo || "/placeholder.svg"}
//           className="w-40"
//           alt="logo"
//         />
//       </div>

//       <div className="list-none items-center gap-6 mx-6 flex">
//         <Link to="/">
//           <li
//             className={`${
//               currentPath === "/"
//                 ? "text-blue-600 font-semibold border-b-2 border-blue-600"
//                 : "hover:text-blue-600 transition-colors"
//             }`}
//           >
//             Home
//           </li>
//         </Link>

//         <Link to="/about">
//           <li
//             className={`${
//               currentPath === "/about"
//                 ? "text-blue-600 font-semibold border-b-2 border-blue-600"
//                 : "hover:text-blue-600 transition-colors"
//             }`}
//           >
//             About Us
//           </li>
//         </Link>

//         <Link to="/contact">
//           <li
//             className={`${
//               currentPath === "/contact"
//                 ? "text-blue-600 font-semibold border-b-2 border-blue-600"
//                 : "hover:text-blue-600 transition-colors"
//             }`}
//           >
//             Contact Us
//           </li>
//         </Link>

//         <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
//           Book a service
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

"use client";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from ".././../assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 px-4 md:py-8 md:px-14 lg:px-24 font-Inter">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div>
          <img
            src={Logo || "/placeholder.svg"}
            className="w-32 md:w-40"
            alt="logo"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex list-none items-center gap-6">
          <Link to="/">
            <li
              className={`${
                currentPath === "/"
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                  : "hover:text-blue-600 transition-colors"
              }`}
            >
              Home
            </li>
          </Link>

          <Link to="/about">
            <li
              className={`${
                currentPath === "/about"
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                  : "hover:text-blue-600 transition-colors"
              }`}
            >
              About Us
            </li>
          </Link>

          <Link to="/contact">
            <li
              className={`${
                currentPath === "/contact"
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                  : "hover:text-blue-600 transition-colors"
              }`}
            >
              Contact Us
            </li>
          </Link>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
            Book a service
          </button>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 py-4 bg-white">
          <ul className="flex flex-col space-y-4 px-4">
            <Link
              to="/"
              onClick={toggleMenu}
            >
              <li
                className={`py-2 ${
                  currentPath === "/" ? "text-blue-600 py-2 font-semibold" : ""
                }`}
              >
                Home
              </li>
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
            >
              <li
                className={`py-2 ${
                  currentPath === "/about" ? "text-blue-600 py-2 font-semibold" : ""
                }`}
              >
                About Us
              </li>
            </Link>
            <Link
              to="/contact"
              onClick={toggleMenu}
            >
              <li
                className={`py-2 ${
                  currentPath === "/contact"
                    ? "text-blue-600 font-semibold"
                    : ""
                }`}
              >
                Contact Us
              </li>
            </Link>
            <li>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
                Book a service
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

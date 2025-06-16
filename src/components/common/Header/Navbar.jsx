import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../../index.css";
import Logo from "../../../assets/images/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    // Add a small delay to ensure navigation completes
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 100);
  };

  return (
    <header className="flex justify-between items-center py-[20px] px-[30px] w-[100%] shadow-custom  bg-white fixed top-0  z-50 ">
      <div className="nav-logo  ">
        <img
          src={Logo}
          alt="codesewa logo"
          className=" max-[450px]:w-[250px] md:w-[280px] lg:w-[300px]"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-4 lg:mr-34">
        <NavLink
          className="text-[18px] text-gray-800 hover:text-blue-500 transition-colors duration-200"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="text-[18px] text-gray-800 hover:text-blue-500 transition-colors duration-200"
          to="/services"
        >
          Services
        </NavLink>
        <NavLink
          className="text-[18px] text-gray-800 hover:text-blue-500 transition-colors duration-200"
          to="/projects"
        >
          Projects
        </NavLink>
        <NavLink
          className="text-[18px] text-gray-800 hover:text-blue-500 transition-colors duration-200"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className="text-[18px] text-gray-800 hover:text-blue-500 transition-colors duration-200"
          to="/contact"
        >
          Contact
        </NavLink>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 z-50 cursor-pointer"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Navigation Menu */}
      <nav
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 transition-all duration-300 ease-in-out z-50 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col py-4 px-6 space-y-4">
          <NavLink
            className="text-[18px] text-gray-800 hover:text-blue-500 transition-colors duration-200 py-2 block"
            to="/"
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            className="text-[18px] text-gray-800 hover:text-blue-500 transition-colors duration-200 py-2 block"
            to="/services"
            onClick={closeMenu}
          >
            Services
          </NavLink>
          <NavLink
            className="text-[18px] text-gray-800 hover:text-blue-500 transition-colors duration-200 py-2 block"
            to="/projects"
            onClick={closeMenu}
          >
            Projects
          </NavLink>
          <NavLink
            className="text-[18px] text-gray-800 hover:text-blue-500 transition-colors duration-200 py-2 block"
            to="/about"
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink
            className="text-[18px] text-gray-800 hover:text-blue-500 transition-colors duration-200 py-2 block"
            to="/contact"
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40" onClick={closeMenu}></div>
      )}
    </header>
  );
}

export default Navbar;

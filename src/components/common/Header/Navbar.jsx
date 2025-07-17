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
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 100);
  };

  return (
    <header className="flex justify-between items-center py-4 px-6 sm:px-8 w-full shadow-custom bg-white fixed top-0 z-50">
      <div className="nav-logo">
        <img
          src={Logo}
          alt="codesewa logo"
          className="w-[180px] sm:w-[220px] md:w-[250px] lg:w-[280px]"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 lg:gap-8">
        <NavLink
          className="text-base lg:text-lg text-gray-800 hover:text-blue-500 transition-colors duration-200"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="text-base lg:text-lg text-gray-800 hover:text-blue-500 transition-colors duration-200"
          to="/services"
        >
          Services
        </NavLink>
        <NavLink
          className="text-base lg:text-lg text-gray-800 hover:text-blue-500 transition-colors duration-200"
          to="/projects"
        >
          Projects
        </NavLink>
        <NavLink
          className="text-base lg:text-lg text-gray-800 hover:text-blue-500 transition-colors duration-200"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className="text-base lg:text-lg text-gray-800 hover:text-blue-500 transition-colors duration-200"
          to="/contact"
        >
          Contact
        </NavLink>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-50 cursor-pointer"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
            isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Navigation Menu */}
      <nav
        className={`md:hidden fixed top-16 left-0 w-full bg-white shadow-lg border-t border-gray-100 transition-all duration-300 ease-in-out z-40 ${
          isMenuOpen 
            ? "opacity-100 visible translate-y-0" 
            : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <div className="flex flex-col py-3 px-6 space-y-3">
          <NavLink
            className="text-base text-gray-800 hover:text-blue-500 transition-colors duration-200 py-2 px-3 rounded hover:bg-gray-50"
            to="/"
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            className="text-base text-gray-800 hover:text-blue-500 transition-colors duration-200 py-2 px-3 rounded hover:bg-gray-50"
            to="/services"
            onClick={closeMenu}
          >
            Services
          </NavLink>
          <NavLink
            className="text-base text-gray-800 hover:text-blue-500 transition-colors duration-200 py-2 px-3 rounded hover:bg-gray-50"
            to="/projects"
            onClick={closeMenu}
          >
            Projects
          </NavLink>
          <NavLink
            className="text-base text-gray-800 hover:text-blue-500 transition-colors duration-200 py-2 px-3 rounded hover:bg-gray-50"
            to="/about"
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink
            className="text-base text-gray-800 hover:text-blue-500 transition-colors duration-200 py-2 px-3 rounded hover:bg-gray-50"
            to="/contact"
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </div>
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-10 z-30" 
          onClick={closeMenu}
        ></div>
      )}
    </header>
  );
}

export default Navbar;
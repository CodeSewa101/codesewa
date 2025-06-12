import React from "react";
import { NavLink } from "react-router-dom";
import "../../../index.css";
import Logo from "../../../assets/images/logo.png";
function Navbar() {
  return (
    <header className=" flex justify-between items-center py-[20px] px-[30px] w-[100%] shadow-custom ">
      <div className="nav-logo">
        <img src={Logo} alt="codesewa logo" width="300px" />
      </div>
      <nav className="flex gap-4 ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;

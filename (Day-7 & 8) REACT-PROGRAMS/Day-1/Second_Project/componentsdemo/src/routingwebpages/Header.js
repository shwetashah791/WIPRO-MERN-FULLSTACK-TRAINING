import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h2>My Website</h2>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        {" | "}
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
          About Us
        </NavLink>
        {" | "}
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
          Contact Us
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;

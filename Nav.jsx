import React from "react";
import "./Nav.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo py-4 ">
        <i class="fa-solid fa-car"></i> Logo
      </div>
      <ul className="nav-list">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        {/* Add more list items as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;

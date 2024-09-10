import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content">
    <div className="flex-1 px-2 mx-2">
      <span className="text-lg font-bold">Products</span>
    </div>
    <div className="flex-none hidden lg:block">
      <ul className="menu menu-horizontal px-1">
        <li className="menu-item">
          <Link to="/">Home</Link>
        </li>
        <li className="menu-item">
          <Link to="/about">About</Link>
        </li>
        <li className="menu-item">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="menu-item">
          <Link to="/services">Services</Link>
        </li>
      </ul>
    </div>
  </div>
  );
};

export default Navbar;

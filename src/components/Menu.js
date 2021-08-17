import React from "react";
import { Link } from "react-router-dom";
export default function Menu() {
  return (
    <div className="menu menu--open">
      <Link to="/" className="menu__link">
        Home
      </Link>
      <Link to="/about" className="menu__link">
        About
      </Link>
      <Link to="/projects" className="menu__link">
        Projects
      </Link>
      <Link to="/contact" className="menu__link">
        Contact
      </Link>
    </div>
  );
}

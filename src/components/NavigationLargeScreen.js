import React from "react";
import { Link } from "react-router-dom";

export default function NavigationLargeScreen() {
  return (
    <nav className="nav-large-screen ">
      <ul className="row">
        <li>
          <Link to="/projects" />
          Projects
        </li>
        <li>
          <Link to="/about" />
          About
        </li>
        <li>
          <a href="resume.pdf" download>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

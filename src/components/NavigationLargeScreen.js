import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CursorContext } from "./Cursor";

export default function NavigationLargeScreen() {
  const { cursorChangeHandler } = useContext(CursorContext);
  return (
    <nav className="nav-large-screen ">
      <ul className="row">
        <li
          onMouseEnter={() => cursorChangeHandler({ hoverNav: true })}
          onMouseLeave={() => {
            cursorChangeHandler({ hoverNav: false });
          }}
        >
          <Link to="/projects" />
          Projects
        </li>
        <li
          onMouseEnter={() => cursorChangeHandler({ hoverNav: true })}
          onMouseLeave={() => {
            cursorChangeHandler({ hoverNav: false });
          }}
        >
          <Link to="/about" />
          About
        </li>
        <li
          className="resume"
          onMouseEnter={() => cursorChangeHandler({ hoverNav: true })}
          onMouseLeave={() => {
            cursorChangeHandler({ hoverNav: false });
          }}
        >
          <a href="resume.pdf" download>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

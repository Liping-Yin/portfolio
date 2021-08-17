import React from "react";
import { Link } from "react-router-dom";
export default function MenuOpener() {
  return (
    <Link to="/menu" className="menu-opener">
      <span className="menu-opener__bar"></span>
    </Link>
  );
}

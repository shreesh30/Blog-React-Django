import React from "react";
import { Link } from "react-router-dom";
import "../style/nav.css";

import SvgIcon from "../static/icon";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <div class="navbar-header">
        <Link className="navbar-brand " to="/">
          <SvgIcon />
          The Explorer
        </Link>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
);

export default Navbar;

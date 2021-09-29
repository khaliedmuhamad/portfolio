import React, { useState } from "react";
import "./Nav.css";
import { FcHome, FcAbout, FcDeployment, FcPhoneAndroid } from "react-icons/fc";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export function Nav() {
  const [check, setCheck] = useState(false);
  return (
    <Router>
      <nav className="navbar navbar-expand-md navbar-fixed navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            onClick={() => {
              setCheck(!check);
            }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            {!check ? <FiMenu /> : <FiX />}
          </button>
          <NavLink
            exact
            activeClassName="active"
            to="/"
            className="navbar-brand"
            aria-current="page"
          >
            K <span className="logo">haled</span>
          </NavLink>
          <div className=" collapse navbar-collapse " id="navbarTogglerDemo03">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item me-2">
                <NavLink
                  activeClassName="active"
                  to="/"
                  className="nav-link"
                  aria-current="page"
                >
                  <FcHome /> Home
                </NavLink>
              </li>
              <li className="nav-item me-2">
                <a href="#About" className="nav-link">
                  <FcAbout /> About
                </a>
              </li>
              <li className="nav-item me-2">
                <a href="#Work" className="nav-link">
                  <FcDeployment /> Work
                </a>
              </li>
              <li className="nav-item contact">
                <a
                  href="#Contact"
                  className="nav-link text-light p-md-2 w-md-50 m-md-auto text-center"
                >
                  <FcPhoneAndroid /> Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Router>
  );
}

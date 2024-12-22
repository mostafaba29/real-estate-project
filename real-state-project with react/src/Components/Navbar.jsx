import React from 'react';
import { NavLink } from 'react-router-dom';  // Use NavLink here
import '../assets/css/indexstyle.css';
import logoImage from "../assets/imgs/logo@2x.png"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className="w-50 p-2" src={logoImage} alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item m-3">
              {/* NavLink instead of Link, and the active class is applied automatically */}
              <NavLink
                className="nav-link"
                exact
                to="/"
                activeClassName="active"  // Apply the "active" class
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item m-3">
              <NavLink
                className="nav-link"
                to="/listing"
                activeClassName="active"
              >
                Listing
              </NavLink>
            </li>
            <li className="nav-item m-3">
              <NavLink
                className="nav-link"
                to="/about"
                activeClassName="active"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item m-3">
              <NavLink
                className="nav-link"
                to="/blog"
                activeClassName="active"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link m-3"
                to="/contact"
                activeClassName="active"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="d-flex p-2 align-items-baseline">
            <p className="mx-4">
              <span className="primary-text m-2">
                <i className="fa-solid fa-phone"></i>
              </span>
              (603)555-0123
            </p>
            <NavLink to="/add-property">
              <button className="navbarbutton">Add Property</button>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


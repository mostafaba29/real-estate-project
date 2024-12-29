import React from 'react';
import '@/assets/css/indexstyle.css';
import logoImage from "@/assets/imgs/logo@2x.png"
import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <Image className="w-50 p-2" src={logoImage} alt="Logo" />
        </Link>
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
              {/* Link instead of Link, and the active class is applied automatically */}
              <Link
                className="nav-link"
                exact
                href="/"
                activeClassName="active"  // Apply the "active" class
              >
                Home
              </Link>
            </li>
            <li className="nav-item m-3">
              <Link
                className="nav-link"
                href="/listing"
                activeClassName="active"
              >
                Listing
              </Link>
            </li>
            <li className="nav-item m-3">
              <Link
                className="nav-link"
                href="/about"
                activeClassName="active"
              >
                About
              </Link>
            </li>
            <li className="nav-item m-3">
              <Link
                className="nav-link"
                href="/blog"
                activeClassName="active"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="nav-link m-3"
                href="/contact"
                activeClassName="active"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="d-flex p-2 align-items-baseline">
            <p className="mx-4">
              <span className="primary-text m-2">
                <i className="fa-solid fa-phone"></i>
              </span>
              (603)555-0123
            </p>
            <Link href="/add-property">
              <button className="navbarbutton">Add Property</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


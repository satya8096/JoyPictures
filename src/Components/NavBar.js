import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { brandName } from "../Data/BrandData";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleNavCollapse = () => {
    if (window.innerWidth <= 1100) {
      const navbarToggler = document.querySelector(".navbar-toggler");
      if (
        navbarToggler &&
        navbarToggler.getAttribute("aria-expanded") === "true"
      ) {
        navbarToggler.click();
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="container">
        {/* Logo and Brand */}
        <NavLink
          to="/"
          className="navbar-brand d-flex align-items-center"
          title="Joypicturestudio - Photography and Videography in Bangalore"
        >
          <i className="fas fa-camera-retro me-2 logo-icon"></i>
          <span className="brand-text">{brandName}</span>
        </NavLink>

        {/* Toggle button */}
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

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                title="Home - Joypicturestudio"
                onClick={handleNavCollapse}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/services"
                className="nav-link"
                title="Photography & Videography Services"
                onClick={handleNavCollapse}
              >
                Services & Pricing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/portfolio"
                className="nav-link"
                title="View Portfolio - Joypicturestudio"
                onClick={handleNavCollapse}
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link"
                title="About Joypicturestudio in Bangalore"
                onClick={handleNavCollapse}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link"
                title="Contact Joypicturestudio - Book Now"
                onClick={handleNavCollapse}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

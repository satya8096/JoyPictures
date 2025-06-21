import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-4">
      <div className="container text-md-left">
        <div className="row text-md-left">
          {/* Branding & Intro */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
            <h6 className="footer-title text-uppercase fw-bold">
              Joypicturesstudio
            </h6>
            <hr className="mb-2 mt-0 d-inline-block mx-auto hr-custom" />
            <p>
              Premier photography & videography studio in Bangalore. We
              specialize in weddings, events, portraits, and promotional shoots.
            </p>
          </div>

          {/* Services */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="footer-title text-uppercase fw-bold">
              Our Services
            </h6>
            <hr className="mb-2 mt-0 d-inline-block mx-auto hr-custom" />
            <ul className="list-unstyled">
              <li>
                <Link to="/services/" title="Wedding Photography Bangalore">
                  Wedding Photography
                </Link>
              </li>
              <li>
                <Link to="/services/" title="Event Coverage in Bangalore">
                  Event Videography
                </Link>
              </li>
              <li>
                <Link to="/services/" title="Portrait Sessions in Bangalore">
                  Portrait Sessions
                </Link>
              </li>
              <li>
                <Link
                  to="/services/"
                  title="Corporate & Branding Videos Bangalore"
                >
                  Branding Shoots
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="footer-title text-uppercase fw-bold">Quick Links</h6>
            <hr className="mb-2 mt-0 d-inline-block mx-auto hr-custom" />
            <ul className="list-unstyled">
              <li>
                <a href="#portfolio" title="See Our Photography Work">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#about" title="Know About Joypicturesstudio">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" title="Contact Bangalore Photography Studio">
                  Contact
                </a>
              </li>
              <li>
                <a href="#faq" title="Frequently Asked Questions">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="footer-title text-uppercase fw-bold">Contact</h6>
            <hr className="mb-2 mt-0 d-inline-block mx-auto hr-custom" />
            <p>
              <i className="fas fa-map-marker-alt me-2"></i> Bangalore, India
            </p>
            <p>
              <i className="fas fa-envelope me-2"></i>{" "}
              info@joypicturesstudio.com
            </p>
            <p>
              <i className="fas fa-phone me-2"></i> +91 98765 43210
            </p>
            <p>
              <i className="fab fa-instagram me-2"></i> @joypicturesstudio
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-4">
          <p className="small mb-0">
            &copy; {new Date().getFullYear()}{" "}
            <strong>Joypicturesstudio. All rights Reserved. </strong> | Created
            with ❤️{" "}
            <a href="https://nexgenwebdesigns.com">NexGen Web Designs</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

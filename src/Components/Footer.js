import React from "react";
import { Link } from "react-router-dom";
import { brandName, email, phoneNumber, whatsappLink } from "../Data/BrandData";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-4">
      <div className="container text-md-left">
        <div className="row text-md-left">
          {/* Branding & Intro */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
            <h6 className="footer-title text-uppercase fw-bold">{brandName}</h6>
            {/* <hr className="mb-2 mt-0 d-inline-block mx-auto hr-custom" /> */}
            <img
              src={require("./../Assets/IMG_0730.png")}
              alt="joypictures_logo"
              style={{ width: "7rem", borderRadius: "0.6rem" }}
              className="me-3"
            />
            <p>
              Premier photography & videography studio in Bangalore. We
              specialize in Newborn Photography, Maternity Photography, Kids
              Portraits, Family Portraits.
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
                <Link to="/services/" title="Portrait Sessions in Bangalore">
                  Portrait Sessions
                </Link>
              </li>
              <li>
                <Link
                  to="/services/"
                  title="Corporate & Branding Videos Bangalore"
                >
                  Newborn
                </Link>
              </li>
              <li>
                <Link
                  to="/services/"
                  title="Corporate & Branding Videos Bangalore"
                >
                  Maternity Photography
                </Link>
              </li>
              <li>
                <Link
                  to="/services/"
                  title="Corporate & Branding Videos Bangalore"
                >
                  Family Portraits
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
                <Link to="/portfolio/" title="See Our Photography Work">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about/" title="Know About Joypicturestudio">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact/"
                  title="Contact Bangalore Photography Studio"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/services/" title="Frequently Asked Questions">
                  FAQs
                </Link>
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
              <i className="fas fa-envelope me-2"></i> {email}
            </p>
            <p>
              <i className="fas fa-phone me-2"></i> +{phoneNumber}
            </p>
            <p>
              <Link to={whatsappLink}>
                <i className="fa-brands fa-whatsapp me-2"></i> +{phoneNumber}
              </Link>
            </p>
            <p>
              <i className="fab fa-instagram me-2"></i>
              <a href="https://www.instagram.com/joypictures_studio">
                {" "}
                @joypicturesstudio
              </a>{" "}
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-4">
          <p className="small mb-0">
            &copy; {new Date().getFullYear()}{" "}
            <strong>{brandName}. All rights Reserved </strong> | Created with
            ❤️ by <a href="https://nexgenwebdesigns.com">NexGen Web Designs</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

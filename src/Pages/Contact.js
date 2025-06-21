import React from "react";
import { Link } from "react-router-dom";
import { whatsappLink } from "../Data/BrandData";

const branches = [
  {
    name: "Main Studio - Indiranagar",
    address: "No. 23, 2nd Cross, 5th Main, Indiranagar, Bangalore - 560038",
    phone: "+91 98765 43210",
    email: "indiranagar@joypicturesstudio.com",
  },
  {
    name: "South Studio - JP Nagar",
    address: "14th Cross Rd, JP Nagar 7th Phase, Bangalore - 560078",
    phone: "+91 99887 65432",
    email: "jpnagar@joypicturesstudio.com",
  },
  {
    name: "East Studio - Whitefield",
    address: "Prestige Shantiniketan, Whitefield, Bangalore - 560066",
    phone: "+91 98760 32145",
    email: "whitefield@joypicturesstudio.com",
  },
];

const Contact = () => {
  return (
    <div className="overflow-hidden">
      <section className="contact-header-section d-flex align-items-center justify-content-center text-center">
        <div className="contact-header-overlay"></div>
        <div className="contact-header-content">
          <h2 className="contact-header-title" data-aos="fade-right">
            Contact Joypicturesstudio
          </h2>
          <p className="contact-header-subtitle" data-aos="fade-left">
            Have questions or want to book a session? <br />
            Reach out to our Bangalore-based photography & videography experts.
          </p>
          <Link
            to={whatsappLink}
            className="btn btn-danger mt-4"
            data-aos="zoom-in"
          >
            <i className="fas fa-envelope-open-text me-2"></i> Send a Message
          </Link>
        </div>
      </section>
      <section className="d-none contact-info-section py-5">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md-4">
              <div className="info-box shadow-sm p-4 h-100">
                <div className="icon mb-3">
                  <i className="fas fa-map-marker-alt fa-2x"></i>
                </div>
                <h5 className="info-title">Our Studio</h5>
                <p className="info-text">
                  2nd Floor, MG Road
                  <br />
                  Bangalore - 560001, India
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="info-box shadow-sm p-4 h-100">
                <div className="icon mb-3">
                  <i className="fas fa-phone fa-2x"></i>
                </div>
                <h5 className="info-title">Call Us</h5>
                <p className="info-text">
                  +91 98765 43210
                  <br />
                  (Mon - Sat, 10am - 7pm)
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="info-box shadow-sm p-4 h-100">
                <div className="icon mb-3">
                  <i className="fas fa-envelope fa-2x"></i>
                </div>
                <h5 className="info-title">Email Us</h5>
                <p className="info-text">info@joypicturesstudio.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="branch-section py-5">
        <div className="container">
          <h3 className="text-center section-heading mb-4" data-aos="fade">
            Our Studio Branches
          </h3>
          <div className="row">
            {branches.map((branch, index) => (
              <div key={index} className="col-md-4 mb-4" data-aos="zoom-in">
                <div className="card location-card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">
                      <i className="fas fa-map-marker-alt me-2 text-danger"></i>
                      {branch.name}
                    </h5>
                    <p className="card-text">
                      <i className="fas fa-location-dot me-2 text-muted"></i>
                      {branch.address}
                    </p>
                    <p className="card-text">
                      <i className="fas fa-phone-alt me-2 text-muted"></i>
                      <a href={`tel:${branch.phone}`} className="text-dark">
                        {branch.phone}
                      </a>
                    </p>
                    <p className="card-text">
                      <i className="fas fa-envelope me-2 text-muted"></i>
                      <a href={`mailto:${branch.email}`} className="text-dark">
                        {branch.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="contact-form d-none container py-5" id="contact">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="form-wrapper shadow-lg p-5 rounded-4">
              <h3 className="text-center mb-4 section-heading">
                <i className="fas fa-envelope-open-text me-2 text-danger"></i>
                Send Us a Message
              </h3>
              <form>
                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name *"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email *"
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject (e.g., Wedding Shoot Booking)"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Your Message or Inquiry..."
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-danger btn-lg w-100">
                    <i className="fas fa-paper-plane me-2"></i>Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="location" className="map-wrapper py-5">
        <div className="container">
          <h3 className="section-heading text-center mb-4" data-aos="fade">
            Find Joypicturesstudio in Bangalore
          </h3>

          {/* Map Card */}
          <div className="map-card shadow-lg rounded-4 overflow-hidden position-relative">
            {/* Google Maps Iframe */}
            <iframe
              className="map-iframe"
              src="https://www.google.com/maps/embed?pb=..." /* ← replace with real embed URL */
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Joypicturesstudio Location - Bangalore"
              data-aos="fade"
            ></iframe>

            {/* Address Badge Overlay */}
            <div
              className="map-badge d-none d-md-flex flex-column gap-1 text-start"
              data-aos="fade"
            >
              <div className="fw-semibold">Joypicturesstudio</div>
              <small>
                2<sup>nd</sup> Floor, MG Road,
                <br />
                Bangalore 560001
              </small>
              <small>
                <i className="fas fa-phone me-1"></i> +91 98765 43210
              </small>
              <a
                href="tel:+919876543210"
                className="btn btn-danger btn-sm mt-2"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="social-media-section text-center py-5">
        <h3 className="section-heading" data-aos="fade">
          Follow Joypicturesstudio
        </h3>
        <p className="section-subtitle" data-aos="fade">
          Stay connected for our latest photography & videography projects in
          Bangalore
        </p>

        <div className="social-icons d-flex justify-content-center mt-4">
          <a
            href="https://instagram.com/joypicturesstudio"
            className="social-icon instagram"
            title="Follow us on Instagram"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://facebook.com/joypicturesstudio"
            className="social-icon facebook"
            title="Connect on Facebook"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://youtube.com/@joypicturesstudio"
            className="social-icon youtube"
            title="Subscribe on YouTube"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;

import React from "react";
import { Link } from "react-router-dom";
import { brandName, email, phoneNumber, whatsappLink } from "../Data/BrandData";
import { ContactSEO } from "../Data/AllPagesSEO";
import Breadcrumbs from "../Components/Breadcrumbs";

const branches = [
  {
    name: "Joy Pictures Studio Yeshwantpur",
    address:
      "4/1, 4/1, Tumkur Rd, Yeshwanthpur Industrial Area, Phase 1, Yeswanthpur, Bengaluru, Karnataka 560022",
    phone: phoneNumber,
    email: email,
  },
  {
    name: "Joy Pictures Studio",
    address:
      "17, 14th Main Rd, Kamalanagar, Sriram Nagar, Chamrajpet, Bengaluru, Karnataka 560018",
    phone: phoneNumber,
    email: email,
  },
  {
    name: "Joy Pictures Studio",
    address:
      "20/13, Sarjapur - Marathahalli Rd, Carmelaram, Janatha Colony, Doddakannelli, Bengaluru, Karnataka 560035",
    phone: phoneNumber,
    email: email,
  },
  {
    name: "Joy Pictures Newborn & Maternity Studio",
    address:
      "329, 7th Cross Rd, Kalyan Nagar, Nagarbhavi 1st Stage, Chandra Layout Extension II Stage, Chandra Layout, Bengaluru, Karnataka 560072",
    phone: phoneNumber,
    email: email,
  },
  {
    name: "Joy Pictures Studio",
    address:
      "Pillar No 500, Metro Station Nagasandra, Bagalakunte, Bengaluru, Karnataka 560073",
    phone: phoneNumber,
    email: email,
  },
  {
    name: "Joy Pictures Studio",
    address:
      "916/A, 80 Feet Rd, next to Atreum Speciality Hospital, Entrance, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098",
    phone: phoneNumber,
    email: email,
  },
  {
    name: "Joy Pictures Studio RR Nagar",
    address:
      "first SBI Bank, 915, Remco Bhel Layout, Ideal Homes Twp, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098",
    phone: phoneNumber,
    email: email,
  },
];

const Contact = () => {
  return (
    <div className="overflow-hidden">
      {ContactSEO}
      <section className="contact-header-section d-flex align-items-center justify-content-center text-center">
        <div className="contact-header-overlay"></div>
        <div className="contact-header-content">
          <h2 className="contact-header-title" data-aos="fade-right">
            Contact {brandName}
          </h2>
          <p className="contact-header-subtitle" data-aos="fade-left">
            Have questions or want to book a session? <br />
            Reach out to our Bangalore-based photography & videography experts.
          </p>
          <div
            className="d-flex align-items-center justify-content-center"
            data-aos="fade"
          >
            <Breadcrumbs currentPage={"Contact"} />
          </div>
          <Link to={whatsappLink} className="btn btn-danger" data-aos="zoom-in">
            <i className="fas fa-envelope-open-text me-2"></i> Send a Message
          </Link>
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
                        +{branch.phone}
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
      <section id="location" className="map-wrapper py-5">
        <div className="container">
          <h3 className="section-heading text-center mb-4" data-aos="fade">
            Find {brandName} in Bangalore
          </h3>

          {/* Map Card */}
          <div className="map-card shadow-lg rounded-4 overflow-hidden position-relative">
            {/* Google Maps Iframe */}
            <iframe
              className="map-iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248775.66603468746!2d77.25551678671876!3d13.028043400000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dec32c6c991%3A0x3b9487867ac4d6ff!2sJoy%20Pictures%20Studio%20Yeshwantpur!5e0!3m2!1sen!2sin!4v1750785304402!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Joypicturestudio Location - Bangalore"
              data-aos="fade"
            ></iframe>
            <div
              className="map-badge d-none d-md-flex flex-column gap-1 text-start"
              data-aos="fade"
            >
              <div className="fw-semibold">{brandName}</div>
              <small>
                4/1, 4/1, Tumkur Rd, Yeshwanthpur Industrial Area, Phase 1,
                Yeswanthpur, Bengaluru, Karnataka 560022
              </small>
              <small>
                <i className="fas fa-phone me-1"></i> +{phoneNumber}
              </small>
              <a
                href={`tel:${phoneNumber}`}
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
          Follow {brandName}
        </h3>
        <p className="section-subtitle" data-aos="fade">
          Stay connected for our latest photography & videography projects in
          Bangalore
        </p>

        <div className="social-icons d-flex justify-content-center mt-4">
          <a
            href="https://www.instagram.com/joypictures_studio"
            className="social-icon instagram"
            title="Follow us on Instagram"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/TeamJoyPictures/"
            className="social-icon facebook"
            title="Connect on Facebook"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.youtube.com/@joypicturesstudio2603"
            className="social-icon youtube"
            title="Subscribe on YouTube"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href={whatsappLink}
            className="social-icon youtube"
            title="Subscribe on YouTube"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;

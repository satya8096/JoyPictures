import React from "react";
import { Link } from "react-router-dom";
import { faqData, services } from "../Data/ServicesPageData";
import PricingPackage from "../Components/PricingPackage";
import WhyChooseUs from "../Components/WhyChooseUs";
import { ServiceSEO } from "../Data/AllPagesSEO";
import Breadcrumbs from "./../Components/Breadcrumbs";
import { brandName, whatsappLink } from "../Data/BrandData";
import ImagesCarosoul from "../Components/ImagesCarosoul";

const Services = () => {
  return (
    <div className="overflow-hidden">
      {ServiceSEO}

      <section
        className="services-hero d-flex align-items-center"
        id="services-hero"
      >
        <div className="container text-center text-white">
          <h2
            className="fw-bold"
            title="Photography and Videography Services in Bangalore"
            data-aos="fade-right"
          >
            Professional Photography & Videography Services in Bangalore
          </h2>
          <p className="lead mt-3 mb-4" data-aos="fade-left">
            Capture your life's most cherished moments with {brandName} – From
            tiny toes to family bonds shoots, we bring your story to life
            through the lens.
          </p>
          <div
            className="d-flex align-items-center justify-content-center"
            data-aos="fade"
          >
            <Breadcrumbs currentPage={"Services & Pricing"} />
          </div>
          <div>
            <Link
              to="/services/"
              className="btn btn-danger me-2 mb-3"
              data-aos="zoom-in"
            >
              <i className="fas fa-camera me-2"></i>Explore Services
            </Link>
            <Link
              to="/contact/"
              className="btn btn-light mb-3"
              data-aos="zoom-in"
            >
              <i className="fas fa-phone-alt me-2"></i>Book Now
            </Link>
          </div>
        </div>
      </section>
      <section id="core-services" className="core-services-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h3 className="section-heading" data-aos="fade">
              Our Core Services
            </h3>
            <p className="section-subtitle" data-aos="fade">
              Experience our full range of creative photography and cinematic
              videography services in Bangalore.
            </p>
          </div>

          <div className="row">
            {services.map((service, index) => (
              <div
                className="col-md-6 col-lg-3 mb-4"
                key={index}
                data-aos="zoom-in"
              >
                <div className="car h-100 shadow-sm border-0">
                  <img
                    src={service.image}
                    alt={service.title + " in Bangalore"}
                    className="card-img-top service-img"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <PricingPackage />
      <ImagesCarosoul />
      <section className="faq-section py-5" id="faqs">
        <div className="container">
          <div className="text-center mb-4">
            <h3 className="section-heading" data-aos="fade">
              Frequently Asked Questions
            </h3>
            <p className="section-subtitle" data-aos="fade">
              Got questions? We've got answers. Here’s what clients usually ask
              about our photography & videography services in Bangalore.
            </p>
          </div>

          <div className="accordion" id="faqAccordion">
            {faqData.map((item, index) => (
              <div className="accordion-item" key={item.id} data-aos="fade">
                <h2 className="accordion-header" id={`heading${item.id}`}>
                  <button
                    className={`accordion-button ${
                      index !== 0 ? "collapsed" : ""
                    }`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${item.id}`}
                    aria-expanded={index === 0 ? "true" : "false"}
                    aria-controls={`collapse${item.id}`}
                  >
                    {item.question}
                  </button>
                </h2>
                <div
                  id={`collapse${item.id}`}
                  className={`accordion-collapse collapse ${
                    index === 0 ? "show" : ""
                  }`}
                  aria-labelledby={`heading${item.id}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="cta-section py-5 text-center bg-ligh"
        id="cta-booking"
      >
        <div className="container">
          <h3 className="cta-heading mb-3 fw-bold" data-aos="fade">
            ✨ Ready to create stunning memories?
          </h3>
          <p className="cta-subtext text-white mb-4" data-aos="fade">
            Book your session with {brandName} – Bangalore’s trusted photography
            & videography team.
          </p>
          <div className="cta-buttons">
            <Link
              to="/contact/"
              className="btn btn-danger me-3 mb-3"
              title="Book your photography session in Bangalore"
              data-aos="fade"
            >
              📅 Book Your Session
            </Link>
            <Link
              to={whatsappLink}
              className="btn btn-light mb-3"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp Joypicturestudio"
              data-aos="fade"
            >
              💬 WhatsApp Us Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

import React from "react";
import { Link } from "react-router-dom";
import { faqData, services } from "../Data/ServicesPageData";
import PricingPackage from "../Components/PricingPackage";
import WhyChooseUs from "../Components/WhyChooseUs";

const Services = () => {
  return (
    <div className="overflow-hidden">
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
            Capture your life's most cherished moments with Joypicturesstudio –
            From weddings to corporate shoots, we bring your story to life
            through the lens.
          </p>
          <div>
            <Link
              to="/services/"
              className="btn btn-danger btn-lg me-2"
              data-aos="zoom-in"
            >
              <i className="fas fa-camera me-2"></i>Explore Services
            </Link>
            <Link
              to="/contact/"
              className="btn btn-light btn-lg"
              data-aos="zoom-in"
            >
              <i className="fas fa-phone-alt me-2"></i>Book Now
            </Link>
          </div>
        </div>
      </section>
      <section
        id="core-services"
        className="core-services-section py-5 bg-light"
      >
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
                <div className="card service-card h-100 shadow-sm border-0">
                  <img
                    // src={service.image}
                    src="https://img.freepik.com/free-photo/groom-gently-embracing-his-bride-forest_1153-5979.jpg?uid=R191256068&ga=GA1.1.297081695.1734783164&semt=ais_hybrid&w=740"
                    alt={service.title + " in Bangalore"}
                    className="card-img-top service-img"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <PricingPackage />
      <section
        className="portfolio-preview-section py-5 bg-light"
        id="portfolio-preview"
      >
        <div className="container">
          <div className="text-center mb-4">
            <h3 className="section-heading" data-aos="fade">
              Our Portfolio Highlights
            </h3>
            <p className="section-subtitle" data-aos="fade">
              A glimpse into the moments we’ve captured across Bangalore —
              weddings, maternity shoots, events & more.
            </p>
          </div>

          <div
            id="portfolioCarousel"
            className="carousel slide carousel-dark"
            data-bs-ride="carousel"
            data-aos="fade"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://img.freepik.com/free-photo/groom-gently-embracing-his-bride-forest_1153-5979.jpg?uid=R191256068&ga=GA1.1.297081695.1734783164&semt=ais_hybrid&w=740"
                  className="d-block w-100 img-fluid rounded"
                  alt="Candid Wedding Photography in Bangalore"
                  title="Candid Wedding Photography in Bangalore"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://img.freepik.com/free-photo/bridal-couple-hugging-field_1139-342.jpg?uid=R191256068&ga=GA1.1.297081695.1734783164&w=740"
                  className="d-block w-100 img-fluid rounded"
                  alt="Maternity Photoshoot in Bangalore"
                  title="Maternity Photoshoot in Bangalore"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://img.freepik.com/premium-photo/nature-outdoor-couple-with-love-wedding-bonding-with-happiness-relationship-embrace-partners-bride-groom-outdoor-park-hug-with-marriage-loving-romance-with-celebration_590464-191750.jpg?uid=R191256068&ga=GA1.1.297081695.1734783164&w=740"
                  className="d-block w-100 img-fluid rounded"
                  alt="Event Videography Bangalore"
                  title="Event Videography Bangalore"
                />
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#portfolioCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#portfolioCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <div className="text-center mt-4">
            <a
              href="/portfolio/"
              className="btn btn-outline-danger me-3"
              title="See Full Wedding Photography Album"
              data-aos="zoom-in"
            >
              View Wedding Album
            </a>
            <a
              href="/portfolio/"
              className="btn btn-outline-secondary"
              title="Explore Maternity & Family Shoots"
              data-aos="zoom-in"
            >
              See Maternity Shoot
            </a>
          </div>
        </div>
      </section>
      <section className="faq-section py-5 bg-light" id="faqs">
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
        className="cta-section py-5 text-center bg-light"
        id="cta-booking"
      >
        <div className="container">
          <h2 className="cta-heading mb-3" data-aos="fade">
            ✨ Ready to create stunning memories?
          </h2>
          <p className="cta-subtext text-white mb-4" data-aos="fade">
            Book your session with Joypicturesstudio – Bangalore’s trusted
            photography & videography team.
          </p>
          <div className="cta-buttons">
            <Link
              to="/contact/"
              className="btn btn-danger btn-lg me-3"
              title="Book your photography session in Bangalore"
              data-aos="fade"
            >
              📅 Book Your Session
            </Link>
            <Link
              to="https://wa.me/919876543210"
              className="btn btn-light btn-lg"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp Joypicturesstudio"
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

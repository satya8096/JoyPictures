import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { services, testimonialsData } from "../Data/HomePageData";
import PricingPackage from "../Components/PricingPackage";
import WhyChooseUs from "../Components/WhyChooseUs";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="overflow-hidden">
      <section className="hero-section d-flex align-items-center" id="home">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-md-6 hero-text" data-aos="fade-right">
              <h2 className="fw-bold">
                Capturing <span className="highlight">Moments</span> That Matter
              </h2>
              <p className="mt-3">
                Joypicturesstudio – Bangalore’s premium photography &
                videography studio. Specializing in weddings, portraits, and
                corporate events.
              </p>
              <div className="mt-4">
                <Link
                  to="/portfolio/"
                  className="btn btn-primary btn-lg me-3 mb-3"
                  title="View Portfolio of Joypicturesstudio"
                >
                  <i className="fas fa-images me-2"></i> View Portfolio
                </Link>
                <Link
                  to="/contact/"
                  className="btn btn-light btn-lg mb-3"
                  title="Book a Photoshoot in Bangalore"
                >
                  <i className="fas fa-calendar-check me-2"></i> Book Now
                </Link>
              </div>
            </div>

            {/* Right Image or Visual */}
            <div
              className="col-md-6 text-center mt-4 mt-md-0"
              data-aos="fade-left"
            >
              <img
                src={
                  "https://img.freepik.com/premium-photo/indian-couple-traditional-modern-styles-cultural-romantic-photography_788415-7240.jpg?uid=R191256068&ga=GA1.1.297081695.1734783164&semt=ais_items_boosted&w=740"
                }
                alt="Photographer capturing wedding in Bangalore"
                className="img-fluid hero-img"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="services-section py-5" id="services">
        <div className="container">
          <div className="text-center mb-5">
            <h3 className="section-heading" data-aos="fade">
              Our Services
            </h3>
            <p className="section-subtitle" data-aos="fade">
              Creative Visual Storytelling by Top Photographers in Bangalore
            </p>
          </div>
          <div className="row">
            {services.map((service, index) => (
              <div
                className="col-md-6 col-lg-3 mb-4"
                key={index}
                data-aos="zoom-in"
              >
                <div
                  className="service-card h-100 text-center p-4 shadow-sm"
                  title={service.seoTitle}
                >
                  <div>
                    <img src={service.image} alt="Service" width={"100%"} />
                  </div>
                  {/* <div className="icon-wrapper mb-3">
                    <i className={`fas ${service.icon} service-icon`}></i>
                  </div> */}
                  <h5 className="service-title">{service.title}</h5>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="portfolio" className="portfolio-section py-5 bg-light">
        <div className="container">
          {/* Section Heading */}
          <div className="section-header text-center mb-5">
            <h3 className="section-heading" data-aos="fade">
              Featured Works
            </h3>
            <p className="section-subtitle" data-aos="fade">
              Handpicked moments from weddings, events, and portraits across
              Bangalore.
            </p>
          </div>

          {/* Portfolio Carousel */}
          <div
            id="portfolioCarousel"
            className="carousel slide portfolio-carousel"
            data-bs-ride="carousel"
            data-aos="fade"
          >
            <div className="carousel-inner">
              {/* Carousel Item 1 */}
              <div className="carousel-item active">
                <img
                  src="https://img.freepik.com/premium-photo/wedding-couple-stairs-park_240347-105.jpg?uid=R191256068&ga=GA1.1.297081695.1734783164&semt=ais_hybrid&w=740"
                  className="d-block w-100 portfolio-image"
                  alt="Wedding photography by Joypicturesstudio in Bangalore"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Wedding Elegance</h5>
                  <p>
                    Capturing timeless love stories in Bangalore’s top wedding
                    venues.
                  </p>
                </div>
              </div>

              {/* Carousel Item 2 */}
              <div className="carousel-item">
                <img
                  src="https://img.freepik.com/free-photo/married-couple-nature-full-shot_23-2149617142.jpg?uid=R191256068&ga=GA1.1.297081695.1734783164&semt=ais_hybrid&w=740"
                  className="d-block w-100 portfolio-image"
                  alt="Event videography Bangalore by Joypicturesstudio"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Event Grandeur</h5>
                  <p>High-energy event coverage with cinematic flair.</p>
                </div>
              </div>

              {/* Carousel Item 3 */}
              <div className="carousel-item">
                <img
                  src="https://img.freepik.com/premium-photo/beautiful-bride-groom-posing-near-lake-sunset_266716-91.jpg?uid=R191256068&ga=GA1.1.297081695.1734783164&semt=ais_hybrid&w=740"
                  className="d-block w-100 portfolio-image"
                  alt="Portrait session in Bangalore studio"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Portrait Masterpiece</h5>
                  <p>Studio perfection with creative lighting and style.</p>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
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
        </div>
      </section>
      <WhyChooseUs />
      <section id="about" className="about-section section-padding">
        <div className="container">
          {/* Section Heading */}
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h3 className="section-heading" data-aos="fade">
                About Joypictures studio
              </h3>
              <p className="about-section__subtitle" data-aos="fade">
                Professional Photography & Videography Services in Bangalore —
                Capturing Emotions, Moments, and Stories.
              </p>
            </div>
          </div>

          <div className="row align-items-center">
            {/* Image Block */}
            <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
              <div className="about-section__image-container">
                <img
                  src="https://img.freepik.com/premium-photo/young-couple-kissing-outdoors_1048944-10928325.jpg?uid=R191256068&ga=GA1.1.297081695.1734783164&semt=ais_hybrid&w=740"
                  alt="Joypicturesstudio Bangalore photography team"
                  className="img-fluid about-section__image"
                />
                <div className="about-section__image-overlay">
                  <i className="fas fa-camera-retro"></i>
                </div>
              </div>
            </div>

            {/* Text Block */}
            <div className="col-lg-6" data-aos="fade-left">
              <div className="about-section__content">
                <h3 className="about-section__headline">
                  Crafting Visual Memories Since 2015
                </h3>
                <p className="about-section__text">
                  At Joypicturesstudio, we go beyond just clicking pictures — we
                  craft timeless visual stories. Based in Bangalore, our
                  creative team specializes in cinematic wedding shoots, candid
                  portraits, high-end event coverage, and modern branding
                  visuals for individuals and businesses alike.
                </p>
                <ul className="about-section__features list-unstyled">
                  <li>
                    <i className="fas fa-check-circle me-2 text-success"></i>{" "}
                    500+ Events Captured
                  </li>
                  <li>
                    <i className="fas fa-check-circle me-2 text-success"></i>{" "}
                    State-of-the-Art Equipment
                  </li>
                  <li>
                    <i className="fas fa-check-circle me-2 text-success"></i>{" "}
                    Award-Winning Creators
                  </li>
                </ul>
                <a
                  href="#contact"
                  className="btn btn-primary mt-3"
                  title="Book Your Photographer in Bangalore"
                >
                  <i className="fas fa-calendar-check me-2"></i> Book a Session
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PricingPackage />
      <section className="testimonials-section py-5 bg-light" id="testimonials">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h3 className="section-heading" data-aos="fade">
              What Our Clients Say
            </h3>
            <p className="section-subtitle" data-aos="fade">
              Trusted by hundreds across Bangalore, we turn your moments into
              memories.
            </p>
          </div>

          <div className="carousel-wrapper position-relative">
            <div
              className="testimonial-carousel d-flex justify-content-center"
              data-aos="zoom-out"
            >
              {testimonialsData.map((testimonial, index) => (
                <div
                  key={index}
                  className={`testimonial-card shadow-sm p-4 rounded-4 bg-white ${
                    index === activeIndex ? "active" : "inactive"
                  }`}
                >
                  <div className="client-icon mb-3 text-center">
                    <i className="fas fa-quote-left fa-2x text-danger"></i>
                  </div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="client-info mt-4 text-center">
                    <h6 className="client-name mb-0">{testimonial.name}</h6>
                    <p className="client-location small text-muted">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots Navigation */}
            <div className="carousel-dots text-center mt-4">
              {testimonialsData.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === activeIndex ? "active-dot" : ""}`}
                  onClick={() => setActiveIndex(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section d-flex align-items-center text-white">
        <div className="overlay"></div>
        <div className="container text-center cta-content">
          <h3 className="fw-bold" data-aos="zoom-in">
            Capturing Emotions, Crafting Stories
          </h3>
          <p className="cta-subheading" data-aos="zoom-in">
            Book your session with <strong>Joypicturesstudio</strong> –
            Bangalore’s premier photography & videography team.
          </p>
          <Link
            to={"/contact/"}
            className="btn btn-cta mt-3"
            title="Contact Joypicturesstudio in Bangalore"
            data-aos="zoom-in"
          >
            <i className="fas fa-calendar-check me-2"></i> Book Your Shoot Now
          </Link>
        </div>
      </section>
      <section className="blog-section py-5" id="blog">
        <div className="container">
          {/* Section Heading */}
          <div className="text-center mb-5">
            <h3 className="section-heading" data-aos="fade">
              Latest Photography Tips & Stories
            </h3>
            <p className="section-subtitle" data-aos="fade">
              Explore creative ideas, behind-the-scenes stories, and expert tips
              from Bangalore’s premier photography team.
            </p>
          </div>

          {/* Blog Cards */}
          <div className="row">
            {/* Blog Post 1 */}
            <div className="col-md-4" data-aos="zoom-in">
              <div className="blog-card">
                <img
                  src="https://img.freepik.com/free-photo/groom-gently-embracing-his-bride-forest_1153-5979.jpg?uid=R191256068&ga=GA1.1.297081695.1734783164&semt=ais_hybrid&w=740"
                  alt="Wedding Photography Tips Bangalore"
                  className="blog-img"
                />
                <div className="blog-content">
                  <h5 className="blog-title">
                    5 Magical Wedding Poses You Must Try
                  </h5>
                  <p className="blog-snippet">
                    Discover timeless poses that elevate your wedding album with
                    elegance and emotion. Perfect for Bangalore couples.
                  </p>
                  <a
                    href="#blog1"
                    className="read-more"
                    title="Read Wedding Photography Tips"
                  >
                    Read More <i className="fas fa-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="col-md-4" data-aos="zoom-in">
              <div className="blog-card">
                <img
                  src="https://img.freepik.com/free-photo/bridal-couple-hugging-field_1139-342.jpg?uid=R191256068&ga=GA1.1.297081695.1734783164&w=740"
                  alt="Candid Photography Bangalore Tips"
                  className="blog-img"
                />
                <div className="blog-content">
                  <h5 className="blog-title">
                    Capturing Candid Moments Naturally
                  </h5>
                  <p className="blog-snippet">
                    Learn the art of candid photography to create emotional,
                    story-driven images that speak volumes.
                  </p>
                  <a
                    href="#blog2"
                    className="read-more"
                    title="Learn Candid Photography Bangalore"
                  >
                    Read More <i className="fas fa-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="col-md-4" data-aos="zoom-in">
              <div className="blog-card">
                <img
                  src="https://img.freepik.com/premium-photo/nature-outdoor-couple-with-love-wedding-bonding-with-happiness-relationship-embrace-partners-bride-groom-outdoor-park-hug-with-marriage-loving-romance-with-celebration_590464-191750.jpg?uid=R191256068&ga=GA1.1.297081695.1734783164&w=740"
                  alt="Photography Gear Bangalore"
                  className="blog-img"
                />
                <div className="blog-content">
                  <h5 className="blog-title">
                    Top Gear for Stunning Shoots in 2025
                  </h5>
                  <p className="blog-snippet">
                    Our top equipment picks for pro-level photo and video
                    quality — ideal for shoots across Bangalore.
                  </p>
                  <a
                    href="#blog3"
                    className="read-more"
                    title="Photography Gear Guide Bangalore"
                  >
                    Read More <i className="fas fa-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

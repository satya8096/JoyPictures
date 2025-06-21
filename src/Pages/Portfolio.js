import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  categories,
  highlights,
  imageData,
  testimonials,
} from "../Data/PortfolioPageData";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? imageData
      : imageData.filter((img) => img.category === activeCategory);
  return (
    <div className="overflow-hidden">
      <section className="portfolio-hero-section d-flex align-items-center justify-content-center text-center">
        <div className="overlay"></div>
        <div className="content text-white">
          <h2 className="fw-bold" data-aos="fade-right">
            Capturing Timeless Moments
          </h2>
          <p className="mt-3" data-aos="fade-left">
            Discover our curated portfolio of wedding, event, and portrait
            photography in Bangalore.
          </p>
          <Link
            to={"/portfolio/"}
            className="btn btn-outline-light mt-4"
            data-aos="zoom-in"
          >
            View Our Work
          </Link>
        </div>
      </section>
      <section className="portfolio-section">
        {/* Parallax Header */}
        <div className="parallax-header text-center text-white">
          <div className="overlay">
            <h3 className="fw-bold" data-aos="fade">
              Explore Our Work
            </h3>
            <p className="" data-aos="fade">
              A collection of moments captured across Bangalore
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="container text-center py-4">
          <div className="btn-group flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`btn btn-outline-dark m-1 ${
                  activeCategory === cat ? "active" : ""
                }`}
                onClick={() => setActiveCategory(cat)}
                title={`View ${cat} Portfolio`}
                data-aos="zoom-in"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="container pb-5">
          <div className="row g-4">
            {filteredImages.map((img, index) => (
              <div className="col-sm-6 col-md-4" key={index} data-aos="fade">
                <div className="gallery-item shadow-sm rounded overflow-hidden">
                  <img
                    src={img.src}
                    alt={`${img.category} Photography in Bangalore`}
                    className="img-fluid"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="project-highlights-section py-5 bg-light">
        <div className="container">
          <h3
            className="section-heading text-center mb-5 fw-bold"
            data-aos="fade"
          >
            Project Highlights
          </h3>

          {highlights.map((project, index) => (
            <div
              className={`row align-items-center mb-5 ${
                index % 2 === 1 ? "flex-row-reverse" : ""
              }`}
              key={index}
            >
              <div className="col-md-6" data-aos="fade-right">
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid rounded shadow-sm project-img"
                />
              </div>
              <div className="col-md-6" data-aos="fade-left">
                <h4 className="fw-bold mb-3 mt-3">{project.title}</h4>
                <p>{project.description}</p>
                <a href={project.link} className="btn btn-danger mt-2">
                  {project.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="portfolio-testimonial-section bg-light py-5">
        <div className="container">
          <h3 className="section-heading text-center fw-bold mb-4">
            What Our Clients Say
          </h3>
          <div className="row g-4">
            {testimonials.map((item, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="card portfolio-testimonial-card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <i className="fa-regular fa-circle-user portfolio-testimonial-img rounded-circle"></i>
                      <div>
                        <h6 className="mb-0 fw-semibold">{item.name}</h6>
                        <small className="text-muted">{item.location}</small>
                      </div>
                    </div>
                    <p className="portfolio-testimonial-text">
                      “{item.feedback}”
                    </p>
                    <div className="portfolio-rating">
                      {Array(item.rating)
                        .fill()
                        .map((_, i) => (
                          <i
                            key={i}
                            className="fas fa-star text-warning me-1"
                          ></i>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="cta-section text-white d-flex align-items-center">
        <div className="container text-center">
          <h3 className="cta-heading" data-aos="fade-right">
            Love What You See?
          </h3>
          <p className="" data-aos="fade-left">
            Let’s create timeless memories together. Book your next shoot with{" "}
            <strong>Joypicturesstudio</strong> — Bangalore’s trusted name in
            photography and videography.
          </p>
          <Link to="/contact/" className="btn btn-cta mt-3" data-aos="zoom-in">
            <i className="fas fa-calendar-check me-2"></i> Book a Session Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

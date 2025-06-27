import React from "react";
import { Link } from "react-router-dom";
import { highlights } from "../Data/PortfolioPageData";
import { PortfolioSEO } from "../Data/AllPagesSEO";
import Testimonials from "../Components/Testimonials";
import Breadcrumbs from "../Components/Breadcrumbs";
import Gallery from "../Components/Gallery";
import { brandName } from "../Data/BrandData";

const Portfolio = () => {
  return (
    <div className="overflow-hidden">
      {PortfolioSEO}
      <section className="portfolio-hero-section d-flex align-items-center justify-content-center text-center">
        <div className="overlay"></div>
        <div className="content text-white">
          <h2 className="fw-bold" data-aos="fade-right">
            Capturing Timeless Moments
          </h2>
          <p className="mt-3" data-aos="fade-left">
            Discover our curated portfolio of Photography, Maternity
            Photography, Kids Portraits, Family Portraits and portrait
            photography in Bangalore.
          </p>
          <div
            className="d-flex align-items-center justify-content-center"
            data-aos="fade"
          >
            <Breadcrumbs currentPage={"Portfolio"} />
          </div>
          <Link to={"/portfolio/"} className="btn btn-light" data-aos="zoom-in">
            View Our Work
          </Link>
        </div>
      </section>
      <section className="portfolio-section">
        {/* Parallax Header */}
        <div className="parallax-header text-center mt-5">
          <div className="overlay">
            <h3 className="fw-bold section-heading" data-aos="fade">
              Explore Our Work
            </h3>
            <p className="text-dark" data-aos="fade">
              A collection of moments captured across Bangalore
            </p>
          </div>
        </div>

        <Gallery />
      </section>
      <section className="project-highlights-section py-5">
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
                <Link to={project.link} className="btn btn-danger mt-2">
                  {project.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Testimonials />
      <section className="cta-section text-white d-flex align-items-center">
        <div className="container text-center">
          <h3 className="cta-heading" data-aos="fade-right">
            Love What You See?
          </h3>
          <p className="" data-aos="fade-left">
            Let’s create timeless memories together. Book your next shoot with{" "}
            <strong>{brandName}</strong> — Bangalore’s trusted name in
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

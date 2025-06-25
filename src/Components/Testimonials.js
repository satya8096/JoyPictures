import React, { useEffect } from "react";
import { testimonials } from "../Data/TestimonialsData";
import { Link } from "react-router-dom";

const Testimonials = () => {
  useEffect(() => {
    // Ensure Bootstrap's carousel is initialized (optional in most setups)
    if (window.bootstrap) {
      const carouselEl = document.querySelector("#testimonialCarousel");
      window.bootstrap.Carousel.getOrCreateInstance(carouselEl);
    }
  }, []);

  return (
    <section className="testimonial-section py-5">
      <div className="container">
        <h3 className="section-heading text-center mb-4 fw-bold">
          What Our Clients Say
        </h3>
        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div className="d-flex flex-column align-items-center text-center p-4">
                  <i className="fa-regular fa-circle-user testimonial-img rounded-circle"></i>
                  <h5 className="fw-semibold">
                    <Link
                      to={testimonial.link}
                      className="text-decoration-none text-dark"
                    >
                      {testimonial.name}
                    </Link>
                  </h5>
                  <p
                    className="fst-italic text-muted mx-auto"
                    style={{ maxWidth: "600px" }}
                  >
                    “{testimonial.feedback}”
                  </p>
                  <div>
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`fa-star me-1 ${
                          i < testimonial.rating
                            ? "fas text-warning"
                            : "far text-muted"
                        }`}
                      ></i>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

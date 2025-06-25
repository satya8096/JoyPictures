import React from "react";
const ImagesCarosoul = () => {
  return (
    <div>
      <section
        className="portfolio-preview-section py-5"
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
                  src={require("./../Gallery Images/img6.jpg")}
                  className="d-block w-100 img-fluid rounded"
                  alt="Candid Wedding Photography in Bangalore"
                  title="Candid Wedding Photography in Bangalore"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("./../Gallery Images/img13.jpg")}
                  className="d-block w-100 img-fluid rounded"
                  alt="Maternity Photoshoot in Bangalore"
                  title="Maternity Photoshoot in Bangalore"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("./../Gallery Images/img3.jpg")}
                  className="d-block w-100 img-fluid rounded"
                  alt="Event Videography Bangalore"
                  title="Event Videography Bangalore"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("./../Gallery Images/img16.jpg")}
                  className="d-block w-100 img-fluid rounded"
                  alt="Event Videography Bangalore"
                  title="Event Videography Bangalore"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("./../Gallery Images/img17.jpg")}
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
              className="btn btn-outline-danger me-3 mb-3"
              title="See Full Wedding Photography Album"
              data-aos="zoom-in"
            >
              View Wedding Album
            </a>
            <a
              href="/portfolio/"
              className="btn btn-outline-secondary mb-3"
              title="Explore Maternity & Family Shoots"
              data-aos="zoom-in"
            >
              See Maternity Shoot
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImagesCarosoul;

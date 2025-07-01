import React from "react";
import { Link } from "react-router-dom";
import PricingPackage from "../Components/PricingPackage";
import WhyChooseUs from "../Components/WhyChooseUs";
import { HomeSEO } from "../Data/AllPagesSEO";
import { services } from "../Data/ServicesPageData";
import Testimonials from "../Components/Testimonials";
import { brandName, whatsappLink } from "../Data/BrandData";
import ImagesCarosoul from "../Components/ImagesCarosoul";

const Home = () => {
  return (
    <div className="overflow-hidden">
      {HomeSEO}
      <section className="hero-section d-flex align-items-center" id="home">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-md-6 hero-text" data-aos="fade-right">
              <h2 className="fw-bold">
                Capturing <span className="highlight">Moments</span> That Matter
              </h2>
              <p className="mt-3">
                {brandName} – Bangalore’s premium photography & videography
                studio. Specializing in Newborn Photography, Maternity
                Photography, Kids Portraits, Family Portraits.
              </p>
              <div className="mt-4">
                <Link
                  to="/portfolio/"
                  className="btn btn-primary me-3 mb-3"
                  title="View Portfolio of Joypicturestudio"
                >
                  <i className="fas fa-images me-2"></i> View Portfolio
                </Link>
                <Link
                  to="/contact/"
                  className="btn btn-light mb-3"
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
                src={require("./../Gallery Images/img14.jpg")}
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
                    <img
                      src={service.image}
                      alt="Service"
                      width={"100%"}
                      style={{ height: "15rem" }}
                    />
                  </div>
                  <h5 className="service-title">{service.title}</h5>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ImagesCarosoul />
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

          <div className="row">
            {/* Image Block */}
            <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
              <div className="about-section__image-container">
                <img
                  src={require("./../Assets/home_page_img2.jpg")}
                  alt="about"
                  className="img-fluid about-section__image"
                />
                <div className="about-section__image-overlay">
                  <img
                    src={require("./../Assets/IMG_0730.png")}
                    alt="joypictures_logo"
                    style={{ width: "7rem", borderRadius: "0.6rem" }}
                    className="me-3"
                  />
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
                  At {brandName}, we go beyond just clicking pictures — we craft
                  timeless visual stories. Based in Bangalore, our creative team
                  specializes in Newborn Photography, Maternity Photography,
                  Kids Portraits, Family Portraits.
                </p>
                <ul className="about-section__features list-unstyled">
                  <li>
                    <i className="fas fa-check-circle me-2 text-success"></i>{" "}
                    500+ Photos Captured
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
                <Link
                  to={whatsappLink}
                  className="btn btn-primary mt-3"
                  title="Book Your Photographer in Bangalore"
                >
                  <i className="fas fa-calendar-check me-2"></i> Book a Session
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PricingPackage />
      <Testimonials />
      <section className="cta-section d-flex align-items-center text-white">
        <div className="overlay"></div>
        <div className="container text-center cta-content">
          <h3 className="fw-bold" data-aos="zoom-in">
            Capturing Emotions, Crafting Stories
          </h3>
          <p className="cta-subheading" data-aos="zoom-in">
            Book your session with <strong>{brandName}</strong> – Bangalore’s
            premier photography & videography team.
          </p>
          <Link
            to={"/contact/"}
            className="btn btn-cta mt-3"
            title="Contact Joypicturestudio in Bangalore"
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
                    href="/"
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
                    href="/"
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
                    href="/"
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

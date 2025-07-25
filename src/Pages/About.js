import React from "react";
import WhyChooseUs from "../Components/WhyChooseUs";
import { AboutSEO } from "../Data/AllPagesSEO";
import Breadcrumbs from "../Components/Breadcrumbs";
import { brandName } from "../Data/BrandData";
import { Link } from "react-router-dom";

const team = [
  {
    name: "Nagaraj",
    role: "Photographer & Editor",
    experience: "5+ years experience",
    icon: "fa-user",
  },
  {
    name: "Sunil",
    role: "Photographer & Editor",
    experience: "5+ years experience",
    icon: "fa-user",
  },
  {
    name: "Abhishek",
    role: "Baby Handler",
    experience: "3+ years experience",
    icon: "fa-baby",
  },
  {
    name: "Bharth",
    role: "Photographer",
    experience: "Skilled in photography",
    icon: "fa-camera-retro",
  },
  {
    name: "Krishna",
    role: "Photographer",
    experience: "Specializes in Photography",
    icon: "fa-camera",
  },
  {
    name: "Suresh",
    role: "Photo Editor",
    experience: "Specializes in Photo Editor",
    icon: "fa-camera",
  },
];

const About = () => {
  return (
    <div className="overflow-hidden">
      {AboutSEO}
      <section
        className="about-hero-section d-flex align-items-center text-white"
        id="about-hero"
      >
        <div className="container text-center">
          <h2
            className="fw-bold"
            title="About Joypicturestudio - Best Photography Studio in Bangalore"
            data-aos="fade-right"
          >
            About {brandName}
          </h2>
          <p
            className="mt-3"
            title="Crafting timeless memories through the lens in Bangalore"
            data-aos="fade-left"
          >
            Crafting timeless memories through the lens in Bangalore
          </p>
          <div
            className="d-flex align-items-center justify-content-center"
            data-aos="fade"
          >
            <Breadcrumbs currentPage={"About"} />
          </div>
        </div>
      </section>
      <section className="founder-section py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Founder Image */}
            <div className="col-md-5 text-center">
              <div className="founder-img-wrapper">
                <img
                  src={require("./../Assets/founder_image.jpg")}
                  alt="Founder of Joypicturestudio"
                  className="img-fluid rounded-circle shadow founder-image"
                />
              </div>
            </div>

            {/* Founder Details */}
            <div className="col-md-7">
              <h3 className="fw-bold mb-2">Meet Our Founder</h3>
              <h5 className="text-muted mb-3 fw-bold">
                Emanuel Paul – Newborn and Maternity Photographer
              </h5>
              <p className="text-secondary mb-4">
                With over 10 years of hands-on experience in Newborn and
                Maternity, capturing life’s most precious moments, Emanuel Paul
                founded Joypicturesstudio with a simple belief — every story
                deserves to be remembered in its truest light. His creative
                vision blends traditional beauty with cinematic flair, ensuring
                every shoot is authentic, emotional, and timeless.
              </p>
              <blockquote className="blockquote fst-italic text-dark">
                “Photography is not just about clicking a shutter — it’s about
                connecting with people, moments, and memories.”
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      <section id="our-story" className="our-story-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-left">
              <h3 className="fw-bold">Our Story</h3>
              <p className="story-text">
                Founded in the heart of <strong>Bangalore</strong>,{" "}
                <strong>{brandName}</strong> was born out of a deep love for{" "}
                <em>visual storytelling</em>. With over{" "}
                <strong>10 years</strong> of experience in{" "}
                <strong>
                  Newborn Photography, Maternity Photography, Kids Portraits,
                  Family Portraits.
                </strong>
                , <strong>event</strong>, our mission is to turn every moment
                into a beautiful memory that lasts forever.
              </p>
              <p className="story-text">
                We believe that every story is unique and deserves to be
                captured with passion, creativity, and precision.
              </p>
            </div>
            <div className="col-lg-6 mb-4" data-aos="fade-right">
              <img
                src={require("./../Gallery Images/img3.jpg")}
                alt="about-image"
                className="img-fluid rounded shadow story-img"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mission-values-section py-5" id="mission-values">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
              <img
                src={require("./../Gallery Images/img5.jpg")}
                alt="Our Mission - Joypicturestudio Bangalore"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6 text-content" data-aos="fade-left">
              <h3 className="mb-3">Our Mission</h3>
              <p className="mb-4">
                To deliver visually stunning and emotionally rich imagery that
                tells your unique story through every frame we capture across
                Bangalore and beyond.
              </p>
              <ul className="list-unstyled values-list">
                <li>
                  <i className="fas fa-bullseye me-2 text-danger"></i>
                  Creativity with a purpose
                </li>
                <li>
                  <i className="fas fa-comments me-2 text-primary"></i>
                  Transparent communication
                </li>
                <li>
                  <i className="fas fa-clock me-2 text-success"></i>
                  Punctuality and professionalism
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="team-alt-section py-5">
        <div className="container">
          <h3 className="text-center fw-bold mb-5 section-heading">
            Our Creative Team
          </h3>
          <div className="row justify-content-center g-4">
            {team.map((member, index) => (
              <div className="col-md-4 col-sm-6 col-10 team-card" key={index}>
                <div className="team-avatar">
                  <div className="avatar-circle">
                    <i className="fa-solid fa-user-tie fa-3x mb-2"></i>
                  </div>
                  <div className="team-details">
                    <h4>{member.name}</h4>
                    <p>{member.role}</p>
                    <small>{member.experience}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <section className="about-cta-section py-5">
        <div className="container text-center">
          <h4 className="mb-3">
            Every Picture Has a Story—Let’s Tell Yours Beautifully
          </h4>
          <p className="cta-subtext mb-4">
            At Joypicturestudio, we don’t just click photos—we freeze emotions,
            joy, and life’s milestones. Let’s create memories you’ll cherish
            forever.
          </p>
          <Link to="/contact/" className="btn btn-warning px-4">
            Book Your Storytelling Session
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;

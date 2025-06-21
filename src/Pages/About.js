import React from "react";
import WhyChooseUs from "../Components/WhyChooseUs";

const TeamCard = ({ name, role, bio, img }) => {
  return (
    <div className="team-card card shadow-sm border-0 h-100" data-aos="zoom-in">
      <img
        src={img}
        alt={`${name} - ${role}`}
        className="card-img-top team-img"
      />
      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
        <h6 className="text-muted mb-2">{role}</h6>
        <p className="card-text">{bio}</p>
        <div className="social-icons mt-3">
          <a href="#" title="Instagram" className="me-3">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" title="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="overflow-hidden">
      <section
        className="about-hero-section d-flex align-items-center text-white"
        id="about-hero"
      >
        <div className="container text-center">
          <h2
            className="fw-bold"
            title="About Joypicturesstudio - Best Photography Studio in Bangalore"
            data-aos="fade-right"
          >
            About Joypicturesstudio
          </h2>
          <p
            className="mt-3"
            title="Crafting timeless memories through the lens in Bangalore"
            data-aos="fade-left"
          >
            Crafting timeless memories through the lens in Bangalore
          </p>
        </div>
      </section>
      <section id="our-story" className="our-story-section py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4" data-aos="fade-right">
              <img
                src="https://img.freepik.com/premium-photo/wedding-rings-background-engagement-marriage-template_568886-5602.jpg?uid=R191256068&ga=GA1.1.297081695.1734783164&semt=ais_hybrid&w=740"
                alt="Joypicturesstudio team working in Bangalore"
                className="img-fluid rounded shadow story-img"
              />
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <h3 className="fw-bold">Our Story</h3>
              <p className="story-text">
                Founded in the heart of <strong>Bangalore</strong>,{" "}
                <strong>Joypicturesstudio</strong> was born out of a deep love
                for <em>visual storytelling</em>. With over{" "}
                <strong>10 years</strong> of experience in{" "}
                <strong>wedding</strong>, <strong>event</strong>, and{" "}
                <strong>commercial photography</strong>, our mission is to turn
                every moment into a beautiful memory that lasts forever.
              </p>
              <p className="story-text">
                We believe that every story is unique and deserves to be
                captured with passion, creativity, and precision.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mission-values-section py-5" id="mission-values">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
              <img
                src="https://img.freepik.com/premium-photo/awesome-beautiful-tall-beard-man-photographer-glasses-black-t-shirt-with-professional-camera-hands_151355-5212.jpg?uid=R191256068&ga=GA1.1.297081695.1734783164&semt=ais_hybrid&w=740"
                alt="Our Mission - Joypicturesstudio Bangalore"
                className="img-fluid rounded shadow"
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
      <section id="team" className="team-section py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h3 className="section-heading" data-aos="fade">
              Meet Our Team
            </h3>
            <p className="section-subtitle" data-aos="fade">
              Creative minds behind Joypicturesstudio
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 mb-4">
              <TeamCard
                name="Satya"
                role="Lead Photographer"
                bio="A passionate artist with an eye for detail and over a decade of capturing weddings, events, and portraits in Bangalore."
                img="https://img.freepik.com/premium-photo/young-photographer-caucasian-man-isolated-blue-background-pointing-with-index-finger-great-idea_1368-228723.jpg?uid=R191256068&ga=GA1.1.297081695.1734783164&semt=ais_hybrid&w=740"
              />
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <TeamCard
                name="Anita"
                role="Creative Director"
                bio="Bringing visual concepts to life, Anita blends storytelling with innovation to craft stunning visuals."
                img="https://img.freepik.com/premium-photo/man-shirt-holding-professional-camera_54391-3112.jpg?uid=R191256068&ga=GA1.1.297081695.1734783164&semt=ais_hybrid&w=740"
              />
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <TeamCard
                name="Anita"
                role="Creative Director"
                bio="Bringing visual concepts to life, Anita blends storytelling with innovation to craft stunning visuals."
                img="https://img.freepik.com/premium-photo/man-shirt-holding-professional-camera_54391-3112.jpg?uid=R191256068&ga=GA1.1.297081695.1734783164&semt=ais_hybrid&w=740"
              />
            </div>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <section className="cta-booking py-5 text-center text-white">
        <div className="container">
          <div className="cta-inner mx-auto p-5 shadow-lg rounded-4">
            <h3 className="fw-bold mb-4" data-aos="fade-right">
              Ready to capture your special moments?
            </h3>
            <a
              href="#contact"
              className="btn btn-primary btn-lg"
              data-aos="fade-left"
            >
              <i className="fas fa-calendar-check me-2"></i>Book a Session in
              Bangalore
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import React from "react";
import { features } from "../Data/ServicesPageData";
import { brandName } from "../Data/BrandData";

const WhyChooseUs = () => {
  return (
    <div>
      <section id="why-choose" className="why-choose-section py-5">
        <div className="container text-center">
          <h3 className="section-heading mb-4" data-aos="fade">
            Why Choose {brandName} ?
          </h3>
          <p className="section-subtitle mb-5" data-aos="fade">
            Discover what sets our photography and videography services apart in
            Bangalore.
          </p>

          <div className="row g-4">
            {features.map((feature, index) => (
              <div className="col-md-6 col-lg-3" key={index} data-aos="zoom-in">
                <div className="feature-box p-4 shadow-sm rounded bg-white h-100">
                  <i className={`${feature.icon} fa-2x mb-3`}></i>
                  <h5>{feature.title}</h5>
                  <p className="small">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;

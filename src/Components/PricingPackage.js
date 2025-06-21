import React from 'react'
import { Link } from 'react-router-dom';

const PricingPackage = () => {
  return (
    <section className="pricing-section py-5" id="packages">
      <div className="container text-center">
        <h3 className="section-heading" data-aos="fade">
          Photography Packages in Bangalore
        </h3>
        <p className="section-subtitle" data-aos="fade">
          Choose the perfect plan for your event, wedding, or portfolio shoot.
        </p>

        <div className="row mt-5 justify-content-center">
          {/* Basic Plan */}
          <div className="col-md-4" data-aos="fade-right">
            <div className="pricing-card basic-plan shadow-sm">
              <h3 className="plan-title">Basic</h3>
              <p className="plan-price">₹9,999</p>
              <ul className="plan-features list-unstyled">
                <li>
                  <i className="fas fa-check-circle"></i> 2 Hours Session
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> 25 Edited Photos
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> HD Video Highlights
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Online Delivery
                </li>
              </ul>
              <Link
                to="/contact/"
                className="btn btn-primary mt-3"
                title="Book Basic Photography Plan in Bangalore"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="col-md-4" data-aos="fade-up">
            <div className="pricing-card standard-plan shadow-lg">
              <div className="recommended-badge">Popular</div>
              <h3 className="plan-title">Standard</h3>
              <p className="plan-price">₹18,999</p>
              <ul className="plan-features list-unstyled">
                <li>
                  <i className="fas fa-check-circle"></i> 4 Hours Session
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> 50 Edited Photos
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Cinematic Video
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Custom Album
                </li>
              </ul>
              <Link
                to="/contact/"
                className="btn btn-primary mt-3"
                title="Book Standard Photography Plan in Bangalore"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="col-md-4" data-aos="fade-left">
            <div className="pricing-card premium-plan shadow-sm">
              <h3 className="plan-title">Premium</h3>
              <p className="plan-price">₹29,999</p>
              <ul className="plan-features list-unstyled">
                <li>
                  <i className="fas fa-check-circle"></i> Full Day Coverage
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> 100+ Edited Photos
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Drone + Cinematic Film
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Custom Boxed Album
                </li>
              </ul>
              <Link
                href="/contact/"
                className="btn btn-primary mt-3"
                title="Book Premium Photography Package in Bangalore"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingPackage

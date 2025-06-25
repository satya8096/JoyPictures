import React from "react";
import { Link } from "react-router-dom";
import { whatsappLink } from "./../Data/BrandData";

const pricingData = [
  {
    title: "Gold",
    price: "₹5,900",
    details: "10 Soft Copies",
  },
  {
    title: "Platinum",
    price: "₹8,250",
    details: "15 Soft Copies",
  },
  {
    title: "Diamond",
    price: "₹11,800",
    details: "20 Soft Copies + 12x15 Frame (1)",
  },
  {
    title: "Family Legacy",
    price: "₹15,350",
    details: "25 Soft Copies with Photobook",
  },
  {
    title: "Family Royal",
    price: "₹18,900",
    details: "30 Soft Copies with Photobook (Large)",
  },
  {
    title: "Family Global",
    price: "₹24,900",
    details: "All Soft Copies with Photobook (Large) + 20x20 & 12x15 Frames",
  },
];

const PricingPlans = () => {
  return (
    <section className="pricing-section py-5">
      <div className="container">
        <h3 className="text-center section-heading mb-5">Our Packages</h3>
        <div className="d-flex  justify-content-around flex-wrap">
          {pricingData.map((plan, index) => (
            <div key={index} className="card pricing-card shadow-lg">
              <div className="card-body text-center">
                <h5 className="card-title plan-title">{plan.title}</h5>
                <h6 className="plan-price">{plan.price}</h6>
                <p className="plan-details">{plan.details}</p>
                <Link
                  to={whatsappLink}
                  className="btn btn-warning pricing-card-btn"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;

import React from "react";
import { Link } from "react-router-dom";
import { whatsappLink } from "../Data/BrandData";

const pricingData = [
  {
    title: "Gold",
    price: "₹5,900",
    details: "10 Soft Copies",
    color: "",
  },
  {
    title: "Platinum",
    price: "₹8,250",
    details: "15 Soft Copies",
    color: "green",
  },
  {
    title: "Diamond",
    price: "₹11,800",
    details: "20 Soft Copies + 12x15 Frame (1)",
    color: "pink",
  },
  {
    title: "Family Legacy",
    price: "₹15,350",
    details: "25 Soft Copies with Photobook",
    color: "teal",
  },
  {
    title: "Family Royal",
    price: "₹18,900",
    details: "30 Soft Copies with Photobook (Large)",
    color: "orange",
  },
  {
    title: "Family Global",
    price: "₹24,900",
    details: "All Soft Copies with Photobook (Large) + 20x20 & 12x15 Frames",
    color: "purple",
  },
];

const PricingPlans = () => {
  return (
    <div className="container">
      <div className="row text-center">
        <h3 className="text-center section-heading mb-5">Our Packages</h3>
        <p>
          Discover tailored photography packages designed to capture your
          special moments with creativity, professionalism, and exceptional
          value in Bangalore.
        </p>
      </div>
      <div className="row d-flex justify-content-around">
        {pricingData.map((priceDetail, index) => {
          return (
            <div className={`pricingTable ${priceDetail.color}`} key={index}>
              <div className="pricingTable-header">
                <h4 className="fw-bold">{priceDetail.title}</h4>
              </div>
              <ul className="pricing-content">
                <li>{priceDetail.details}</li>
              </ul>
              <div className="price-value">
                <span className="price-title">
                  Price <b>From</b>
                </span>
                <span className="price-amount">
                  {" "}
                  <span style={{ fontSize: "1.2rem" }}>
                    {" "}
                    {priceDetail.price}
                  </span>{" "}
                  <span className="duration">per shoot</span>
                </span>
              </div>
              <div className="pricingTable-signup mt-4">
                <Link to={whatsappLink}>Book Now</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingPlans;

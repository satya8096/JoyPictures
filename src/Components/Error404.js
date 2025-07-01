import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="notfound-section d-flex align-items-center justify-content-center">
      <div className="text-center">
        <div className="error-icon text-center mb-3">
          <img
            src={require("./../Assets/404.jpg")}
            alt="joypictures_logo"
            style={{ width: "20rem", borderRadius: "0.6rem" }}
            className="me-3"
          />
        </div>
        <Link to="/" className="btn btn-warning px-4 py-2">
          <i className="fa-solid fa-house"></i> Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;

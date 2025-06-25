import React from "react";

const Breadcrumbs = ({ currentPage }) => {
  return (
    <nav aria-label="breadcrumb" className="mb-3">
      <div className="container">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <a href="/" className="text-decoration-none text-white">
              <i className="fas fa-home me-1"></i> Home
            </a>
          </li>
          <li className="breadcrumb-item active text-white" aria-current="page">
            {currentPage}
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;

import React, { useState } from "react";
import { imageData } from "../Data/GalleryData";

const Gallery = () => {
  const categories = ["All", "Newborn", "Maternity", "Kids", "Family"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? imageData
      : imageData.filter((img) => img.category === activeCategory);
  return (
    <section className="gallery-section">
      <div className="container text-center py-4">
        <div className="btn-group flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn btn-outline-dark m-1 ${
                activeCategory === cat ? "active" : ""
              }`}
              onClick={() => setActiveCategory(cat)}
              title={`View ${cat} Portfolio`}
              disabled="true"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="row g-3">
          {filteredImages.map((img, index) => (
            <div
              className={`col-12 col-sm-6 col-md-4 gallery-item ${img.size}`}
              key={index}
            >
              <div className="img-wrap">
                <img
                  src={img.src}
                  //   alt={img.alt}
                  className="img-fluid rounded shadow-sm"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

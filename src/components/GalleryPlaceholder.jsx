import React from "react";

const GalleryPlaceholder = () => (
  <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
    {[...Array(6)].map((_, idx) => (
      <div key={idx} className="col mb-2 text-center px-1 placeholder-glow">
        <span className="placeholder col-12" style={{ height: "240px" }}></span>
      </div>
    ))}
  </div>
);

export default GalleryPlaceholder;

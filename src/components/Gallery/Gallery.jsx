import "./Gallery.css";
import React from "react";

function Gallery() {
  return (
    <div className="gallery">
      <div className="gallarycontent">
        <div className="gallarycontent__title">
          <h1>Gallery</h1>
        </div>
        <div className="gallarycontent__images">
          <div className="gallarycontent__image">
            <p>No Images Added</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;

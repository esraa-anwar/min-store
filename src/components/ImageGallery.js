import React, { useState } from "react";
import "./style.css";
const ImageGallery = ({ images }) => {
  const [main, setMain] = useState(images[0]);

  return (
    <div className="wrapper">
      <div className="gallery">
        {images.map((img, index) => {
          return (
            <img
              key={index}
              src={img}
              className="main"
              alt="gallery"
              onClick={() => setMain(images[index])}
            />
          );
        })}
      </div>
      <div>
        <img src={main} alt="gallery" className="bigImage" />
      </div>
    </div>
  );
};

export default ImageGallery;

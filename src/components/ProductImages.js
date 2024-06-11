import React, { useState } from "react";

const ProductImages = ({ images = [] }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  return (
    <section className="product-images">
      <img src={mainImage} alt="product" className="main-image" />
      <div className="small-images">
        {images.map((img, index) => {
          return (
            <img
              src={img}
              alt="product"
              key={index}
              className={img === mainImage ? "active-image" : ""}
              onClick={() => setMainImage(images[index])}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductImages;

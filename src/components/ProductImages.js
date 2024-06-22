import React, { useState } from "react";

const ProductImages = ({ image = [{url:""}] }) => {
  console.log(image);
  const [mainImage, setMainImage] = useState(image[0]);
  return (
    <section className="product-images">
      <img src={mainImage.url} alt="product" className="main-image" />
      <div className="small-images">
        {image.map((img, index) => {
          return (
            <img
              src={img.url}
              alt="product"
              key={index}
              className={img === mainImage ? "active-image" : ""}
              onClick={() => setMainImage(image[index])}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductImages;

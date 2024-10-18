import React from "react";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import sampleProductImage from "../Assets/product_122.webp";
import "./ProductDisplay.css"

const ProductDisplay = () => {
  // Hard-coded product for testing
  const product = {
    name: "Sample Product",
    image: sampleProductImage, // Use the imported image
    old_price: 120.0, // Example old price
    new_price: 100.0, // Example new price
  };

  if (!product || !product.image) {
    return <div>Loading product...</div>;
  }

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt={product.name || "Product"} />
          <img src={product.image} alt={product.name || "Product"} />
          <img src={product.image} alt={product.name || "Product"} />
          <img src={product.image} alt={product.name || "Product"} />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt={product.name || "Product"}
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="star rating" />
          <img src={star_icon} alt="star rating" />
          <img src={star_icon} alt="star rating" />
          <img src={star_icon} alt="star rating" />
          <img src={star_dull_icon} alt="star rating" />
          <p>(122)</p>
        </div>
        <div className="product-display-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Available In Black. Faux Leather Blouse Top Long Sleeve Sweetheart
          Studded Detail Hook And Eye Closure Cropped Non Stretch Coating: 100%
          Polyurethane Base Fabric: 100% Polyester Imported
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-size-options">
            <div>XS</div>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
          </div>
        </div>
        <button className="addProductBtn">Add to bag</button>
        <p className="productdisplay-right-category">
          <span>Category:</span> Women, Tops, Shirts & Blouses
        </p>
        <p className="productdisplay-right-category">
          <span>Tags:</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;

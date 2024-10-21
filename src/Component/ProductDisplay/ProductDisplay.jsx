import React, { useContext, useState } from "react";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  const [selectedSize, setSelectedSize] = useState(""); // State for selected size

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to the cart.");
      return;
    }
    addToCart(product.id, selectedSize); // Pass selected size along with product ID
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {/* Display multiple images dynamically */}
          {product.images?.map((imgSrc, index) => (
            <img key={index} src={imgSrc} alt={`Product image ${index + 1}`} />
          ))}
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
          {/* Static stars for rating */}
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src={index < product.rating ? star_icon : star_dull_icon}
              alt="star rating"
            />
          ))}
          <p>({product.reviews || 122})</p>
        </div>
        <div className="product-display-right-prices">
          {product.old_price && (
            <div className="productdisplay-right-price-old">
              ${product.old_price}
            </div>
          )}
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          {/* Dynamic description */}
          {product.description || "No description available for this product."}
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-size-options">
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <div
                key={size}
                className={`size-option ${
                  selectedSize === size ? "selected" : ""
                }`} // Add selected style
                onClick={() => setSelectedSize(size)} // Set selected size
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <button className="addProductBtn" onClick={handleAddToCart}>
          Add to cart
        </button>
        <p className="productdisplay-right-category">
          <span>Category:</span> {product.category || "Uncategorized"}
        </p>
        <p className="productdisplay-right-category">
          <span>Tags:</span>Modern, Latest {product.tags?.join(", ") || ""}
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;

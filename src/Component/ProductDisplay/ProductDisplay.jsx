import React, { useContext } from "react";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import "./ProductDisplay.css"
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext); 
  
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt=""/>
          <img src={product.image} alt=""/>
          <img src={product.image} alt=""/>
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={image}
            alt={name || "Product"}
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{name}</h1>
        <div className="productdisplay-right-stars">
          {/* Static stars for rating */}
          <img src={star_icon} alt="star rating" />
          <img src={star_icon} alt="star rating" />
          <img src={star_icon} alt="star rating" />
          <img src={star_icon} alt="star rating" />
          <img src={star_dull_icon} alt="star rating" />
          <p>(122)</p>
        </div>
        <div className="product-display-right-prices">
          <div className="productdisplay-right-price-old">
            ${old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${new_price}
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
        <button className="addProductBtn" onClick={() =>{addToCart(product.id)}}>Add to cart</button>
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

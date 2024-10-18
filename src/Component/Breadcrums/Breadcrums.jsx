import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrums.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrums = ({ product }) => {
  // Check if product is defined and has the necessary properties
  if (!product || !product.category || !product.id || !product.name) {
    return <div className="breadcrums">Loading...</div>; // Handle undefined product gracefully
  }

  return (
    <div className="breadcrums">
      <Link to="/">HOME</Link>
      <img src={arrow_icon} alt="arrow" />

      <Link to="/shop">SHOP</Link>
      <img src={arrow_icon} alt="arrow" />

      <Link to={`/category/${product.category}`}>{product.category}</Link>
      <img src={arrow_icon} alt="arrow" />

      <Link to={`/product/${product.id}`}>{product.name}</Link>
    </div>
  );
};

export default Breadcrums;

import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Offers.css";
import exclusive_image1 from "../Assets/exclusive_image1.webp";

const Offers = () => {
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleCheckNow = () => {
    // Navigate to the desired route, for example: "/best-sellers"
    navigate("/best-sellers");
  };

  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button onClick={handleCheckNow}>Check Now</button>{" "}
        {/* Button click handler */}
      </div>
      <div className="offers-right">
        <img src={exclusive_image1} alt="Exclusive Offers" />
      </div>
    </div>
  );
};

export default Offers;

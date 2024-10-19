import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { cartItems } = useContext(ShopContext); // Get cart items from the context
  const navigate = useNavigate();

  // Calculate total cart items
  const totalCartItems = Object.values(cartItems).reduce(
    (sum, quantity) => sum + quantity,
    0
  );

  // Function to navigate to the cart page when the cart icon is clicked
  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>YWSZN</p>
      </div>

      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men
          </Link>
          {menu === "mens" && <hr />}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link style={{ textDecoration: "none" }} to="/womens">
            Women
          </Link>
          {menu === "womens" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>

        {/* Cart Icon */}
        <div className="nav-cart" onClick={handleCartClick}>
          <img src={cart_icon} alt="Cart" className="nav-cart-icon" />
          {totalCartItems > 0 && (
            <div className="nav-cart-count">{totalCartItems}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

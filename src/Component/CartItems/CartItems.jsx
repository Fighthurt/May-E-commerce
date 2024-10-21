import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Add useNavigate
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);
  const navigate = useNavigate(); // Hook to navigate

  // State to handle the promo code
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0); // State to store discount

  if (!all_product || Object.keys(cartItems).length === 0) {
    return <div>Your cart is empty</div>;
  }

  // Function to handle promo code submission
  const handlePromoCodeSubmit = () => {
    // Define valid promo codes and corresponding discounts
    const validPromoCodes = {
      SAVE10: 10, // 10% discount for SAVE10
      SAVE20: 20, // 20% discount for SAVE20
    };

    // Check if the entered promo code is valid
    if (validPromoCodes[promoCode.toUpperCase()]) {
      const discountValue = validPromoCodes[promoCode.toUpperCase()];
      setDiscount(discountValue);
      alert(`Promo code applied! You received a ${discountValue}% discount.`);
    } else {
      alert("Invalid promo code. Please try again.");
    }
  };

  // Calculate the total amount after discount
  const getTotalWithDiscount = () => {
    const totalAmount = getTotalCartAmount();
    return discount > 0
      ? totalAmount - (totalAmount * discount) / 100
      : totalAmount;
  };

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Quantity</p>
        <p>Title</p>
        <p>Price</p>
        <p>Total</p>
        <p>Remove</p>
              
      </div>
      <hr />
      {all_product.map((product) => {
        const productQuantity = cartItems[product.id];

        if (productQuantity > 0) {
          return (
            <div key={product.id}>
              <div className="cartitems-format cartitems-format-main">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="carticon-product-icon"
                  />
                </Link>
                <div className="productQuantity">
                  <p>{productQuantity}</p>
                </div>
                <p>{product.name}</p>
                <p>${product.new_price}</p>

                <p>${product.new_price * productQuantity}</p>
                <img
                  src={remove_icon}
                  onClick={() => removeFromCart(product.id)}
                  alt="Remove"
                  className="remove-icon"
                />
              </div>
              <hr />
            </div>
          );
        }

        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Discount</p>
              <p>{discount > 0 ? `${discount}% off` : "None"}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalWithDiscount().toFixed(2)}</h3>
            </div>
          </div>
          <button onClick={() => navigate("/payment")}>
            Proceed to Checkout
          </button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input
              type="text"
              placeholder="promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button onClick={handlePromoCodeSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

import React, { useContext } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";


const CartItems = () => {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

  if (!all_product || Object.keys(cartItems).length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((product) => {
        const productQuantity = cartItems[product.id];

        if (productQuantity > 0) {
          return (
            <div key={product.id}>
              <div className="cartitems-format cartitems-format-main" >
                {/* Link to navigate to product details */}
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
    </div>
  );
};

export default CartItems;

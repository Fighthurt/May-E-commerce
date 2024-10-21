import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/Payment.css"; // Add some styles for the Payment form

const Payment = () => {
  const [bankDetails, setBankDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  });

  const [deliveryDetails, setDeliveryDetails] = useState({
    address: "",
    city: "",
    postalCode: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle payment logic here (e.g., API call for payment processing)
    alert("Payment successful!");

    // Redirect user after successful payment
    navigate("/");
  };

  return (
    <div className="payment-container">
      <h1>Payment and Delivery Details</h1>
      <form onSubmit={handleSubmit}>
        <h2>Bank Details</h2>
        <input
          type="text"
          placeholder="Card Number"
          value={bankDetails.cardNumber}
          onChange={(e) =>
            setBankDetails({ ...bankDetails, cardNumber: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Expiry Date (MM/YY)"
          value={bankDetails.expiryDate}
          onChange={(e) =>
            setBankDetails({ ...bankDetails, expiryDate: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="CVV"
          value={bankDetails.cvv}
          onChange={(e) =>
            setBankDetails({ ...bankDetails, cvv: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Name on Card"
          value={bankDetails.nameOnCard}
          onChange={(e) =>
            setBankDetails({ ...bankDetails, nameOnCard: e.target.value })
          }
          required
        />

        <h2>Delivery Details</h2>
        <input
          type="text"
          placeholder="Address"
          value={deliveryDetails.address}
          onChange={(e) =>
            setDeliveryDetails({ ...deliveryDetails, address: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="City"
          value={deliveryDetails.city}
          onChange={(e) =>
            setDeliveryDetails({ ...deliveryDetails, city: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Postal Code"
          value={deliveryDetails.postalCode}
          onChange={(e) =>
            setDeliveryDetails({
              ...deliveryDetails,
              postalCode: e.target.value,
            })
          }
          required
        />

        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
};

export default Payment;

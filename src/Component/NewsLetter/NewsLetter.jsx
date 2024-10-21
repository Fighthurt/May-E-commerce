import React, { useState } from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  const [email, setEmail] = useState(""); // State to capture email input
  const [message, setMessage] = useState(""); // State for feedback message

  // Handle form submission
  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Simulate a subscription action (like calling an API)
    console.log("Subscribed with email:", email);
    setMessage(`Thank you for subscribing! Offers will be sent to: ${email}`);
    setEmail(""); // Clear input field after submission
  };

  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <form onSubmit={handleSubscribe}>
        <div>
          <input
            type="email"
            placeholder="Your Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Capture email input
            required
          />
          <button type="submit">Subscribe</button>
        </div>
      </form>
      {message && <p className="message">{message}</p>} {/* Display message */}
    </div>
  );
};

export default NewsLetter;

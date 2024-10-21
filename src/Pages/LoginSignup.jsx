// src/Pages/LoginSignup.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/LoginSignup.css"; // Make sure the CSS path is correct

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true); // To toggle between login and signup
  const [name, setName] = useState(""); // For signup name
  const [email, setEmail] = useState(""); // For email input
  const [password, setPassword] = useState(""); // For password input
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // Handle login logic
      console.log("Logging in:", { email, password });
      // Replace this with actual login logic (e.g., API call)
      if (email && password) {
        alert("Login successful!");
        navigate("/"); // Redirect to the home page
      } else {
        alert("Please enter valid credentials");
      }
    } else {
      // Handle signup logic
      console.log("Signing up:", { name, email, password });
      // Replace this with actual signup logic (e.g., API call)
      if (name && email && password) {
        alert("Signup successful!");
        setIsLogin(true); // Switch to login mode after successful signup
      } else {
        alert("Please fill in all fields");
      }
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required={!isLogin}
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{isLogin ? "Login" : "Continue"}</button>
          <p className="loginsignup-login">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span
              onClick={() => setIsLogin(!isLogin)}
              style={{ cursor: "pointer"}}
            >
              {isLogin ? "Signup here" : "Login here"}
            </span>
          </p>
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;

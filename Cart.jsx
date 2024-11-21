import React, { useState } from "react";

const Cart = () => {
  const [isError, setIsError] = useState(false); // Simulates error state
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulates login state

  const handleRetry = () => {
    setIsError(false); // Reset error state
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      <h1>Your Cart</h1>
      {isError ? (
        <div>
          <p style={{ color: "red", fontWeight: "bold" }}>Oops, something went wrong.</p>
          <p>Please clear your cart and try again.</p>
          <button
            onClick={handleRetry}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Retry
          </button>
        </div>
      ) : (
        <div>
          <img
            src="https://img.freepik.com/premium-vector/oops-your-cart-is-empty-page-template_586724-97.jpg" // Replace with an actual empty cart image URL
            alt="Empty Cart"
            style={{ width: "200px", marginBottom: "20px" }}
          />
          <h2>Cart Empty</h2>
          <p style={{ color: "#555" }}>
            Good food is always cooking! Go ahead, order some yummy treats.
          </p>
          <button
            style={{
              margin: "10px 0",
              padding: "10px 20px",
              backgroundColor: "#FFA500",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            See Restaurants Near You
          </button>
          <br />
          <a href="/" style={{ textDecoration: "none", color: "#007bff" }}>
            Go to Home Page
          </a>
        </div>
      )}
      <hr style={{ margin: "20px 0" }} />
      {!isLoggedIn && (
        <div>
          <h3>Account</h3>
          <p>
            To place your order now, log in to your existing account or sign up.
          </p>
          <div style={{ margin: "10px 0" }}>
            <span>Have an account?</span>{" "}
            <button
              onClick={() => alert("Login Clicked")}
              style={{
                marginLeft: "10px",
                padding: "8px 15px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              LOG IN
            </button>
          </div>
          <div>
            <span>New to Swiggy?</span>{" "}
            <button
              onClick={() => alert("Sign Up Clicked")}
              style={{
                marginLeft: "10px",
                padding: "8px 15px",
                backgroundColor: "#28a745",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              SIGN UP
            </button>
          </div>
        </div>
      )}
      <hr style={{ margin: "20px 0" }} />
      <div>
        <h3>Delivery Address</h3>
        <p>Please add your delivery address during checkout.</p>
      </div>
      <hr style={{ margin: "20px 0" }} />
      <div>
        <h3>Payment</h3>
        <p>Select your preferred payment method at checkout.</p>
      </div>
    </div>
  );
};

export default Cart;

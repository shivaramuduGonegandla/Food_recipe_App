import React from "react";

const SignIn = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Sign In</h1>
      <form>
        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label><br />
          <input type="email" placeholder="Enter your email" style={{ width: "100%", padding: "8px" }} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Password:</label><br />
          <input type="password" placeholder="Enter your password" style={{ width: "100%", padding: "8px" }} />
        </div>
        <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#28a745", color: "#fff", border: "none" }}>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;

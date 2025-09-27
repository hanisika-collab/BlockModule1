import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy credentials check
    if (email === "test@gmail.com" && password === "1234") {
      navigate("/dashboard"); // ✅ redirect to Dashboard
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="background">
      <div className="login-box">
        <div className="login-header">User Login</div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password *</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Login
          </button>

          <p className="switch-text">
            Don’t have an account?{" "}
            <a href="/register" className="switch-link">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

import React, { useState } from "react";
import "./RegisterForm.css";

const RegisterForm = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [inputCaptcha, setInputCaptcha] = useState("");

  function generateCaptcha() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setInputCaptcha("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputCaptcha !== captcha) {
      alert("Captcha does not match!");
      return;
    }
    alert("Registration successful!");
  };

  return (
    <div className="background">
      <div className="register-box">
        {/* Header (fixed inside box) */}
        <div className="register-header">User Registration</div>

        {/* Scrollable form */}
        <form className="register-form" onSubmit={handleSubmit}>
          {/* Username */}
          <div className="form-group">
            <label>Username *</label>
            <input type="text" placeholder="Enter Username" required />
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email *</label>
            <input type="email" placeholder="Enter Email" required />
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password *</label>
            <input type="password" placeholder="Enter Password" required />
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label>Confirm Password *</label>
            <input type="password" placeholder="Re-enter Password" required />
          </div>

          {/* Phone Number */}
          <div className="form-group">
            <label>Phone Number *</label>
            <input type="text" placeholder="Enter Phone Number" required />
          </div>

          {/* Aadhaar Number */}
          <div className="form-group">
            <label>Aadhaar Number *</label>
            <input type="text" placeholder="Enter Aadhaar Number" required />
          </div>

          {/* Captcha */}
          <div className="form-group captcha-container">
            <label>Captcha *</label>
            <div className="captcha-box">
              <span className="captcha-text">{captcha}</span>
              <button
                type="button"
                className="refresh-btn"
                onClick={refreshCaptcha}
              >
                ⟳
              </button>
            </div>
            <input
              type="text"
              placeholder="Enter Captcha"
              value={inputCaptcha}
              onChange={(e) => setInputCaptcha(e.target.value)}
              required
            />
          </div>

          {/* Submit button */}
          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
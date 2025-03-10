import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const Login = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      {/* Login Button */}
      <button
        type="button"
        className="btn btn-dark border border-info text-white px-5 py-2 rounded-3"
        style={{
          backgroundColor: "#000",
          borderColor: "#0dcaf0",
          minWidth: "150px",
          fontWeight: "bold",
          letterSpacing: "1px",
          boxShadow: "0 0 5px rgba(13, 202, 240, 0.5)",
          transition: "background-color 0.3s ease",
        }}
        onClick={() => setShowPopup(true)}
      >
         LOGIN
      </button>

      {/* Popup Modal */}
      {showPopup && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark overlay
            backdropFilter: "blur(2px)",
            zIndex: 1050, // Ensures the popup is above other content
          }}
        >
          <div
            className="card p-4 text-white position-relative"
            style={{
              backgroundColor: "#121212",
              borderRadius: "10px",
              width: "400px",
              border: "2px solid #0dcaf0", 
              // Matching the blue border from the image
            }}
          >
            {/* Close Button (X) */}
            <button
              className="btn-close position-absolute top-0 end-0 m-2"
              style={{ backgroundColor: "#fff", opacity: "1" }}
              onClick={() => setShowPopup(false)}
            ></button>

            {/* Welcome Header with Logo Styling */}
           <div className="text-center mb-3">
              <img
                src="/assets/fonts/logo.png" 
                alt="M's TRIBE Logo"
                style={{
                  maxWidth: "150px", 
                  height: "auto",
                }}
              />
            </div>
            {/* Username Field */}
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="mark@gmail.com"
                value={formData.username}
                onChange={handleChange}
                style={{ backgroundColor: "#1a1a1a", borderColor: "#333" }}
              />
            </div>

            {/* Password Field */}
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                style={{ backgroundColor: "#1a1a1a", borderColor: "#333" }}
              />
            </div>

            {/* Sign In Button */}
            <button
              className="btn w-100 mb-2"
              style={{
                backgroundColor: "#0dcaf0",
                color: "#fff",
                fontWeight: "bold",
                borderRadius: "5px",
              }}
            >
              Sign In
            </button>

            {/* Sign in with Google Button */}
            <button
      className="btn btn-light w-100 d-flex align-items-center justify-content-center mb-2"
      style={{ borderRadius: "5px" }}
    >
      <img
        src="/assets/img/iconImage/g.webp" // Ensure this path is correct
        alt="google"
        width="25" // Reduced size to fit better with text
        height="25"
        className="me-2"
        onError={(e) => {
          console.log("Image failed to load:", e.target.src);
          e.target.src = "https://via.placeholder.com/20"; // Fallback image
        }}
      />
      Sign in with Google
    </button>

            {/* Remember Checkbox and Forgot Password */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberMe"
                  style={{ backgroundColor: "#1a1a1a", borderColor: "#333" }}
                />
                <label className="form-check-label text-white" htmlFor="rememberMe">
                  Remember for 30 days
                </label>
              </div>
              <a href="/forgot-password" className="text-info" style={{ cursor: "pointer" }}>
                Forgot password
              </a>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <small>
                Doesn't have account?{" "}
                <a href="/signup" className="text-info" style={{ cursor: "pointer" }}>
                  Sign up
                </a>
              </small>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// export const Signup = () => {
//   const [hover, setHover] = useState(false);

//   return (
//     <button
//       type="button"
//       className="btn btn-dark border border-info text-white px-5 py-2 rounded-3"
//       style={{
//         backgroundColor: hover ? "#006cd2" : "#000", // Changes on hover
//         borderColor: "#0dcaf0",
//         minWidth: "150px",
//         fontWeight: "bold",
//         letterSpacing: "1px",
//         boxShadow: "0 0 5px rgba(13, 202, 240, 0.5)",
//         transition: "background-color 0.3s ease", // Smooth transition effect
//       }}
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//     >
//       SIGNUP
//     </button>
//   );
// };

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const Signup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [usernameTaken, setUsernameTaken] = useState(false);
  const suggestedUsernames = ["mark2407", "markJ007"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === "username") {
      setUsernameTaken(e.target.value.toLowerCase() === "mark_j"); // Simulating username taken
    }
  };

  return (
    <>
      {/* Signup Button */}
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
        }}
        onClick={() => setShowPopup(true)}
      >
        SIGNUP
      </button>

      {/* Popup Modal */}
      {showPopup && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark overlay
            backdropFilter: "blur(8px)", // Blur effect
            zIndex: 1050,
          }}
        >
          <div className="card p-4 text-white position-relative" style={{ backgroundColor: "#121212", borderRadius: "10px", width: "400px" }}>
            
            {/* Close Button (X) */}
            <button
              className="btn btn-close position-absolute btn-light top-0 end-0 m-2"
              onClick={() => setShowPopup(false)}
            ></button>

            <h4 className="text-center mb-3">Welcome to <span className="text-info">M's TRIBE</span></h4>
            
            {/* Username Field */}
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                name="username"
                className={`form-control ${usernameTaken ? "is-invalid" : ""}`}
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
              />
              {usernameTaken && (
                <div className="text-danger mt-1">Username already taken</div>
              )}
              {/* Suggested Usernames */}
              {usernameTaken && (
                <div className="mt-2">
                  <small>Use Suggested: </small>
                  {suggestedUsernames.map((name) => (
                    <button
                      key={name}
                      className="btn btn-sm btn-outline-info mx-1"
                      onClick={() => setFormData({ ...formData, username: name })}
                    >
                      @{name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Email Field */}
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="mark@gmail.com"
                value={formData.email}
                onChange={handleChange}
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
              />
            </div>

            {/* Signup Button */}
            <button className="btn btn-info w-100">Sign Up</button>

            {/* Signup with Google */}
            <button className="btn btn-light w-100 mt-2 d-flex align-items-center justify-content-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                alt="Google"
                width="20"
                height="20"
                className="me-2"
              />
              Sign up with Google
            </button>

            {/* Login Link */}
            <div className="text-center mt-3">
              <small>
                Already have an account?{" "}
                <a href="/login" className="text-info" style={{ cursor: "pointer" }}>
                  Log in
                </a>
              </small>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

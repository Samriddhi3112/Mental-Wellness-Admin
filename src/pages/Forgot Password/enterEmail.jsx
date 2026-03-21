import React, { useState } from "react";
import logo from "../../assets/images/auth-logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { requestPasswordReset } from "../../features/auth/authSlice";
import { toast } from "react-toastify";

const EnterEmail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const { loading } = useSelector((state) => state.auth);

  const handleSubmit = async () => {
    if (!email) {
      toast.error("Please enter email");
      return;
    }

    const res = await dispatch(requestPasswordReset(email));

    // handleSubmit (enterEmail.jsx me update)
    if (res.meta.requestStatus === "fulfilled") {
      const otp = res.payload?.otp;

      localStorage.setItem("resetEmail", email);
      localStorage.setItem("resetOtp", otp); // 👈 testing ke liye

      toast.success(`OTP sent: ${otp}`); // 👈 TESTING OTP SHOW
      navigate("/two-step");
    } else {
      toast.error(res.payload?.message || "Failed to send OTP");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-background-left" />
      <div className="auth-card">
        <div className="auth-logo">
          <img src={logo} alt="" />
        </div>

        <h2 className="auth-title">Reset your password</h2>
        <p className="auth-subtitle">
          Enter your work email and we’ll send a secure link.
        </p>

        <form className="auth-form">
          <div className="form-group mb-3">
            <label className="form-label">Work Email</label>
            <div className="input-icon">
              <i className="fas fa-envelope" />
              <input
                type="email"
                className="form-control"
                placeholder="admin@wellnessapp.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send reset link"}
          </button>

          <br />

          <NavLink to="/">
            <button
              type="button"
              className="btn btn-outline-secondary w-100 mt-2"
            >
              <i className="fas fa-arrow-left ms-2" />
              {" "} Back to sign in
            </button>
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default EnterEmail;

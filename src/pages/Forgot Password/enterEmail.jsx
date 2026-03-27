import React, { useState } from "react";
import logo from "../../assets/images/auth-logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { requestPasswordReset } from "../../features/auth/authSlice";
import { toast } from "react-toastify";
import topBg from "../../assets/images/auth-bg-top-left.png";
import bottomBg from "../../assets/images/auth-bg-bottom-right.png";
import Footer from "../../layout/Footer";

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

  if (res.meta.requestStatus === "fulfilled") {
    const data = res.payload;

    // 👇 IMPORTANT CHECK
    if (data?.success && data?.otp) {
      const otp = data.otp;

      localStorage.setItem("resetEmail", email);
      localStorage.setItem("resetOtp", otp); // testing ke liye

      toast.success(`OTP sent: ${otp}`);
      navigate("/two-step");
    } else {
      // 👇 agar email invalid hai ya backend reject kr rha
      toast.error(data?.message || "Invalid email or OTP not sent");
    }
  } else {
    toast.error(res.payload?.message || "Failed to send OTP");
  }
};

  return (
    <div>
      <div className="auth-container">
        <div
          className="auth-background-left"
          style={{ backgroundImage: `url(${topBg})` }}
        ></div>
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
                  placeholder="e.g. admin@wellnessapp.com"
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
                <i className="fas fa-arrow-left ms-2" /> Back to sign in
              </button>
            </NavLink>
          </form>
        </div>

        <div
          style={{
            position: "absolute",
            right: "-90px",
            bottom: "-100px",
            width: "300px",
            height: "300px",
            backgroundImage: `url(${bottomBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            zIndex: 0,
          }}
        ></div>
      </div>
      <Footer />
    </div>
  );
};

export default EnterEmail;

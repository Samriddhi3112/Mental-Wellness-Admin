import React, { useState, useEffect } from "react";
import logo from "../../assets/images/auth-two-step-verifictaion-icon.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { resendOtp } from "../../features/auth/authSlice";

const TwoStepVerification = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(30);

  // ⏳ countdown
  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`code${index + 2}`).focus();
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join("");
    const storedOtp = localStorage.getItem("resetOtp");

    if (enteredOtp !== storedOtp) {
      toast.error("Invalid OTP");
      return;
    }

    toast.success("OTP Verified");
    navigate("/confirm-password");
  };

  // 🔥 RESEND FUNCTION
  const handleResend = async () => {
    if (timer > 0) return;

    const email = localStorage.getItem("resetEmail");

    const res = await dispatch(resendOtp(email));

    if (res.meta.requestStatus === "fulfilled") {
      const newOtp = res.payload?.otp;

      localStorage.setItem("resetOtp", newOtp); // 👈 testing

      toast.success(`OTP resent: ${newOtp}`); // 👈 testing show

      setTimer(30); // 🔁 reset timer
      setOtp(["", "", "", "", "", ""]); // clear inputs
    } else {
      toast.error(res.payload?.message || "Failed to resend OTP");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-logo">
          <img src={logo} alt="" />
        </div>

        <h2 className="auth-title">Two-step verification</h2>
        <p className="auth-subtitle">
          Enter the 6-digit code sent to your email.
        </p>

        <div className="code-inputs">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`code${index + 1}`}
              type="text"
              maxLength={1}
              className="code-input"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
            />
          ))}
        </div>

        {/* 🔥 RESEND LINK */}
        <p
          className="resend-link"
          onClick={handleResend}
          style={{
            cursor: timer === 0 ? "pointer" : "not-allowed",
            color: timer === 0 ? "#007bff" : "#999",
          }}
        >
          {timer === 0 ? "Resend code" : `Resend in ${timer}s`}
        </p>

        <button
          className="btn btn-primary w-100 mt-4"
          onClick={handleVerify}
        >
          Verify & Continue
        </button>
      </div>
    </div>
  );
};

export default TwoStepVerification;
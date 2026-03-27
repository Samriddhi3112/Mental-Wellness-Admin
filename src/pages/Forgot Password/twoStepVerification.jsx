import React, { useState, useEffect } from "react";
import logo from "../../assets/images/auth-two-step-verifictaion-icon.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { resendOtp } from "../../features/auth/authSlice";
import Footer from "../../layout/Footer";
import topBg from "../../assets/images/auth-bg-top-left.png";
import bottomBg from "../../assets/images/auth-bg-bottom-right.png";

const TwoStepVerification = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(30);

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

  const handleResend = async () => {
    if (timer > 0) return;

    const email = localStorage.getItem("resetEmail");

    const res = await dispatch(resendOtp(email));

    if (res.meta.requestStatus === "fulfilled") {
      const newOtp = res.payload?.otp;

      localStorage.setItem("resetOtp", newOtp);

      toast.success(`OTP resent: ${newOtp}`);

      setTimer(30);
      setOtp(["", "", "", "", "", ""]);
    } else {
      toast.error(res.payload?.message || "Failed to resend OTP");
    }
  };

  const handleKeyDown = (e, index) => {
  if (e.key === "Backspace") {
    if (!otp[index] && index > 0) {
      document.getElementById(`code${index}`).focus();
    }

    const newOtp = [...otp];
    newOtp[index] = "";
    setOtp(newOtp);
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
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>

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

          <button className="btn btn-primary w-100 mt-4" onClick={handleVerify}>
            Verify & Continue
          </button>
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

export default TwoStepVerification;

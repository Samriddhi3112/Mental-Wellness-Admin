import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../features/auth/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ConfirmPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [strength, setStrength] = useState("Weak");

  const [validations, setValidations] = useState({
    length: false,
    numberSymbol: false,
    match: false,
  });

  const checkPassword = (password, confirmPass = confirmPassword) => {
    const isLengthValid = password.length >= 6;
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[^A-Za-z0-9]/.test(password);
    const isNumberSymbolValid = hasNumber && hasSymbol;
    const isMatch = password === confirmPass && confirmPass !== "";

    setValidations({
      length: isLengthValid,
      numberSymbol: isNumberSymbolValid,
      match: isMatch,
    });

    let strengthText = "Weak";
    if (isLengthValid && isNumberSymbolValid && password.length >= 8) {
      strengthText = "Strong";
    } else if (isLengthValid) {
      strengthText = "Medium";
    }

    setStrength(strengthText);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setNewPassword(value);
    checkPassword(value, confirmPassword);
  };

  const handleConfirmChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    checkPassword(newPassword, value);
  };

  const handleSubmit = async () => {
    if (!validations.length || !validations.numberSymbol) {
      toast.error("Please meet password requirements");
      return;
    }

    if (!validations.match) {
      toast.error("Passwords do not match");
      return;
    }

    const email = localStorage.getItem("resetEmail");
    const otp = localStorage.getItem("resetOtp");

    const res = await dispatch(
      resetPassword({ email, otp, newPassword })
    );

    if (res.meta.requestStatus === "fulfilled") {
      toast.success("Password updated successfully");
      navigate("/");
    } else {
      const errorMsg =
        res.payload?.data?.[0]?.message ||
        res.payload?.message ||
        "Failed to update password";

      toast.error(errorMsg);
    }
  };

  // 🔥 Strength color
  const getStrengthColor = () => {
    if (strength === "Weak") return "red";
    if (strength === "Medium") return "orange";
    return "green";
  };

  return (
    <div className="auth-container">
      <div className="auth-background-left" />
      <div className="auth-card">
        <h2 className="auth-title">Create a new password</h2>

        {/* 🔹 New Password */}
        <div className="form-group mb-3">
          <label className="form-label">New Password</label>
          <div className="input-icon">
            <i className="fas fa-lock" />
            <input
              type={showNew ? "text" : "password"}
              className="form-control"
              placeholder="Enter your Password"
              value={newPassword}
              onChange={handlePasswordChange}
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowNew(!showNew)}
            >
              <i className={`fas ${showNew ? "fa-eye-slash" : "fa-eye"}`} />
            </button>
          </div>
        </div>

        {/* 🔹 Strength */}
        <div className="password-strength mb-3">
          <span style={{ color: getStrengthColor(), fontWeight: "600" }}>
            {strength}
          </span>
          <div className="strength-bar">
            <div
              className="strength-fill"
              style={{
                width:
                  strength === "Weak"
                    ? "33%"
                    : strength === "Medium"
                    ? "66%"
                    : "100%",
                backgroundColor: getStrengthColor(),
              }}
            />
          </div>
        </div>

        {/* 🔹 Confirm Password */}
        <div className="form-group mb-3">
          <label className="form-label">Confirm Password</label>
          <div className="input-icon">
            <i className="fas fa-lock" />
            <input
              type={showConfirm ? "text" : "password"}
              className="form-control"
              placeholder="Enter your Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmChange}
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              <i className={`fas ${showConfirm ? "fa-eye-slash" : "fa-eye"}`} />
            </button>
          </div>
        </div>

        {/* 🔥 Requirements */}
        <div className="password-requirements">
          <div
            className="requirement-item"
            style={{ color: validations.length ? "green" : "#999" }}
          >
            <i
              className={`fas ${
                validations.length ? "fa-check-circle" : "fa-circle"
              }`}
            />
            <span>Minimum 6 characters length</span>
          </div>

          <div
            className="requirement-item"
            style={{ color: validations.numberSymbol ? "green" : "#999" }}
          >
            <i
              className={`fas ${
                validations.numberSymbol ? "fa-check-circle" : "fa-circle"
              }`}
            />
            <span>At least 1 number & 1 symbol</span>
          </div>

          <div
            className="requirement-item"
            style={{ color: validations.match ? "green" : "#999" }}
          >
            <i
              className={`fas ${
                validations.match ? "fa-check-circle" : "fa-circle"
              }`}
            />
            <span>Passwords match</span>
          </div>
        </div>

        <button
          className="btn btn-primary w-100 mt-4"
          onClick={handleSubmit}
          disabled={
            !validations.length ||
            !validations.numberSymbol ||
            !validations.match
          }
        >
          Update password
        </button>
      </div>
    </div>
  );
};

export default ConfirmPassword;
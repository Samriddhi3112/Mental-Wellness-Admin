import React, { useState } from "react";
import Footer from "../../layout/Footer";
import logo from "../../assets/images/auth-logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin } from "../../features/auth/authSlice";
import { toast } from "react-toastify";

const login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const { loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleLogin = async () => {
    const result = await dispatch(adminLogin(formData));

    console.log("Login result:", result);

    if (result.meta.requestStatus === "fulfilled") {
      const data = result.payload;
      console.log("Login payload:", data);

      // const data = result.payload;

      if (data?.success) {
        const token = data?.data?.token;
        const admin = data?.data?.admin;

        localStorage.setItem("token", token);

        localStorage.setItem("userId", admin?.id);

        localStorage.setItem("userData", JSON.stringify(admin));

        toast.success("Login successful");
        navigate("/dashboard");
      } else {
        toast.error(data?.message || "Login failed");
      }
    } else {
      console.log("Login rejected:", result.payload);
      toast.error(result.payload || "Something went wrong");
    }
  };

  return (
    <div>
      <div className="auth-container">
        <div className="auth-background-left" />
        <div className="auth-card">
          <div className="auth-logo">
            <img src={logo} alt="" />
          </div>

          <h2 className="auth-title">Admin sign in</h2>

          <p className="auth-subtitle">
            Manage users, content, and safety with care.
          </p>

          <form className="auth-form">
            <div className="form-group mb-3">
              <label className="form-label">Email Address</label>

              <div className="input-icon">
                <i className="fas fa-envelope" />

                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <NavLink to="/forgotPassword" className="forgot-link">
                Forgot password?
              </NavLink>
            </div>

            <div className="form-group mb-3">
              <label className="form-label">Password</label>

              <div className="input-icon">
                <i className="fas fa-lock" />

                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="password"
                  placeholder="Enter you password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    color: "#555",
                  }}
                >
                  <i
                    className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}
                    style={{ marginLeft: "-41px", cursor: "pointer" }}
                    onClick={() => setShowPassword(!showPassword)}
                  ></i>
                </span>
              </div>
            </div>

            {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default login;

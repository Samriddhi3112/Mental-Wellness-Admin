import { useState, useEffect } from "react";
import Footer from "../../layout/Footer";
import logo from "../../assets/images/auth-logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin } from "../../features/auth/authSlice";
import { toast } from "react-toastify";
import topBg from "../../assets/images/auth-bg-top-left.png";
import bottomBg from "../../assets/images/auth-bg-bottom-right.png";

const login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

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
    if (!formData.email) {
      toast.error("Email is required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email");
      return;
    }

    if (!formData.password) {
      toast.error("Password is required");
      return;
    }
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

        if (rememberMe) {
          localStorage.setItem("rememberEmail", formData.email);
          localStorage.setItem("rememberPassword", formData.password);
        } else {
          localStorage.removeItem("rememberEmail");
          localStorage.removeItem("rememberPassword");
        }

        toast.success("Login successful");
        navigate("/dashboard",{ replace: true });
      } else {
        toast.error(data?.message || "Login failed");
      }
    } else {
      console.log("Login rejected:", result.payload);
      toast.error(result.payload || "Something went wrong");
    }
  };

  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberEmail");
    const savedPassword = localStorage.getItem("rememberPassword");

    if (savedEmail && savedPassword) {
      setFormData({
        email: savedEmail,
        password: savedPassword,
      });
      setRememberMe(true);
    }
  }, []);

  useEffect(() => {
  const token = localStorage.getItem("token");

  if (token) {
    navigate("/dashboard", { replace: true });
  }
}, []);

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
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember this device
              </label>
            </div>

            {/* {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>} */}

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
      <div
        style={{
          position: "absolute",
          right: "-90px",
          bottom: "-2px",
          width: "300px",
          height: "300px",
          backgroundImage: `url(${bottomBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      ></div>
    </div>
  );
};

export default login;

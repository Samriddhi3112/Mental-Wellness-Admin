// import React, { useState, useRef, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// // import logoutIcon from "../assets/images/logout.png";
// import LogoutModal from "../components/LogoutModal";

// // Images
// import profileImg from "../assets/images/profile.png";
// import dropdownIcon from "../assets/images/profile-dropdown.png";

// const Header = () => {
//   const location = useLocation();
//   const [open, setOpen] = useState(false);
//   const dropdownRef = useRef();
//   const [showLogoutModal, setShowLogoutModal] = useState(false);

//   const toggleDropdown = () => {
//     setOpen(!open);
//   };

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const routeTitles = {
//     "/dashboard": "Dashboard",
//     "/onboarding-question": "Onboarding Questions",
//     "/risk-rules": "Risk Rules Config",
//     "/user-listing": "User Management",
//     "/activity-management": "Activity Management",
//     "/content-listing": "Content Management",
//     "/safety-alert": "Safety Alert",
//     "/subAdmin-listing": "Sub Admin Management",
//     "/notification-listing": "Notification Management",
//     "/profile": "Profile",
//   };

//   const title = routeTitles[location.pathname] || "Dashboard";

//   return (
//     <header className="top-header fixed-top">
//       <div className="container-fluid">
//         <div className="d-flex justify-content-between align-items-center">
//           <div className="header-left">
//             <h5 className="mb-0 page-title">{title}</h5>
//           </div>

//           <div className="header-right">
//             <div className="user-profile dropdown" ref={dropdownRef}>
//               <button className="btn user-dropdown" onClick={toggleDropdown}>
//                 <img src={profileImg} alt="" className="user-avatar" />

//                 <div className="user-info">
//                   <span className="user-name">Admin User</span>
//                   <small className="user-email">admin@wellness.com</small>
//                 </div>

//                 <img src={dropdownIcon} alt="" />
//               </button>

//               {open && (
//                 <ul
//                   className="dropdown-menu dropdown-menu-end logouttop show"
//                   style={{ marginTop: "60px" }}
//                 >
//                   <li>
//                     <button
//                       className="dropdown-item d-flex align-items-center"
//                       onClick={() => {
//                         setShowLogoutModal(true);
//                         setOpen(false); // dropdown close bhi ho jaye
//                       }}
//                     >
//                       <i className="fas fa-sign-out-alt me-2"></i>
//                       Logout
//                     </button>
//                   </li>
//                 </ul>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//       <LogoutModal
//   show={showLogoutModal}
//   onClose={() => setShowLogoutModal(false)}
// />
//     </header>
//   );
// };

// export default Header;

import React, { useState, useRef, useEffect } from "react";
import { useMatches } from "react-router-dom";
import LogoutModal from "../components/LogoutModal";

// Images
import profileImg from "../assets/images/profile.png";
import dropdownIcon from "../assets/images/profile-dropdown.png";

const Header = () => {
  const matches = useMatches();

  // 🔥 Get current route title
  const currentMatch = matches[matches.length - 1];

  const title =
    typeof currentMatch?.handle?.title === "function"
      ? currentMatch.handle.title(currentMatch)
      : currentMatch?.handle?.title || "Dashboard";

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="top-header fixed-top">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center">
          
          {/* 🔹 Dynamic Title */}
          <div className="header-left">
            <h5 className="mb-0 page-title">{title}</h5>
          </div>

          {/* 🔹 Profile */}
          <div className="header-right">
            <div className="user-profile dropdown" ref={dropdownRef}>
              <button className="btn user-dropdown" onClick={toggleDropdown}>
                <img src={profileImg} alt="" className="user-avatar" />

                <div className="user-info">
                  <span className="user-name">Admin User</span>
                  <small className="user-email">admin@wellness.com</small>
                </div>

                <img src={dropdownIcon} alt="" />
              </button>

              {open && (
                <ul
                  className="dropdown-menu dropdown-menu-end logouttop show"
                  style={{ marginTop: "60px" }}
                >
                  <li>
                    <button
                      className="dropdown-item d-flex align-items-center"
                      onClick={() => {
                        setShowLogoutModal(true);
                        setOpen(false);
                      }}
                    >
                      <i className="fas fa-sign-out-alt me-2"></i>
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </div>

        </div>
      </div>

      <LogoutModal
        show={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
      />
    </header>
  );
};

export default Header;
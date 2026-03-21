import React from "react";
import { NavLink } from "react-router-dom";

// Images import
import logo from "../assets/images/Logo.png";
import dashboardIcon from "../assets/images/dashboard-grey.png";
import onboardingIcon from "../assets/images/onboarding-grey.png";
import riskIcon from "../assets/images/risk-grey.png";
import userIcon from "../assets/images/user-grey.png";
import activityIcon from "../assets/images/activity-grey.png";
import contentIcon from "../assets/images/content-grey.png";
import safetyIcon from "../assets/images/safety-grey.png";
import subAdminIcon from "../assets/images/sub-admin-grey.png";
import notificationIcon from "../assets/images/notification-grey.png";
import profileIcon from "../assets/images/profile-grey.png";

const Sidenav = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul className="nav flex-column">

          <li className="nav-item">
            <NavLink to="/dashboard" className="nav-link">
              <img src={dashboardIcon} alt="" />
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/onboarding-question" className="nav-link">
              <img src={onboardingIcon} alt="" />
              <span>Onboarding Questions</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/risk-rules" className="nav-link">
              <img src={riskIcon} alt="" />
              <span>Risk Rules Config</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/user-listing" className="nav-link">
              <img src={userIcon} alt="" />
              <span>User Management</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/activity-management" className="nav-link">
              <img src={activityIcon} alt="" />
              <span>Activity Management</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/content-listing" className="nav-link">
              <img src={contentIcon} alt="" />
              <span>Content Management</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/safety-alert" className="nav-link">
              <img src={safetyIcon} alt="" />
              <span>Safety Alert</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/subAdmin-listing" className="nav-link">
              <img src={subAdminIcon} alt="" />
              <span>Sub Admin Management</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/notification-listing" className="nav-link">
              <img src={notificationIcon} alt="" />
              <span>Notification Management</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/profile" className="nav-link">
              <img src={profileIcon} alt="" />
              <span>Profile</span>
            </NavLink>
          </li>

        </ul>
      </nav>
    </aside>
  );
};

export default Sidenav;
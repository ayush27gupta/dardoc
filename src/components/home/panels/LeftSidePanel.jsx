import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./leftpanel.css";

const LeftSidePanel = () => {
  const location = useLocation();

  return (
    <div className="d-flex flex-column">
      <nav className="nav flex-column">
        <Link
          to="/home"
          className={`nav-sidepanel mt-2 mb-1 ${
            location.pathname === "/home" ? "active" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/online-visits"
          className={`nav-sidepanel mt-2 mb-1 ${
            location.pathname === "/online-visits" ? "active" : ""
          }`}
        >
          Online Visits
        </Link>
        <Link
          to="/lab-reports"
          className={`nav-sidepanel mt-2 mb-1 ${
            location.pathname === "/lab-reports" ? "active" : ""
          }`}
        >
          Lab Reports
        </Link>
        <Link
          to="/prescriptions"
          className={`nav-sidepanel mt-2 mb-1 ${
            location.pathname === "/prescriptions" ? "active" : ""
          }`}
        >
          Prescriptions
        </Link>
        <Link
          to="/appointments"
          className={`nav-sidepanel mt-2 mb-1 ${
            location.pathname === "/appointments" ? "active" : ""
          }`}
        >
          Appointments
        </Link>
      </nav>
    </div>
  );
};

export default LeftSidePanel;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./leftpanel.css";

const LeftSidePanel = (props) => {
  const location = useLocation();
  const { onLinkSelect } = props;

  const handleLinkClick = (link) => {
    onLinkSelect(link);
  };

  return (
    <div className="d-flex flex-column">
      <nav className="nav flex-column">
        <Link
          to="/home"
          className={`nav-sidepanel mt-2 mb-1 ${
            location.pathname === "/home" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("Home")}
        >
          Home
        </Link>
        <Link
          to="/online-visits"
          className={`nav-sidepanel mt-2 mb-1 ${
            location.pathname === "/online-visits" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("Online Visits")}
        >
          Online Visits
        </Link>
        <Link
          to="/lab-reports"
          className={`nav-sidepanel mt-2 mb-1 ${
            location.pathname === "/lab-reports" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("Lab Reports")}
        >
          Lab Reports
        </Link>
        <Link
          to="/prescriptions"
          className={`nav-sidepanel mt-2 mb-1 ${
            location.pathname === "/prescriptions" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("Prescriptions")}
        >
          Prescriptions
        </Link>
        <Link
          to="/appointments"
          className={`nav-sidepanel mt-2 mb-1 ${
            location.pathname === "/appointments" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("Appointments")}
        >
          Appointments
        </Link>
      </nav>
    </div>
  );
};

export default LeftSidePanel;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./leftpanel.css";

const LeftSidePanel = (props) => {
  const { links, onLinkSelect } = props;
  const location = useLocation();

  const handleLinkClick = (link) => {
    onLinkSelect(link);
  };

  return (
    <div className="d-flex flex-column">
      <nav className="nav flex-column">
        {links.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={`nav-sidepanel mt-2 mb-1 ${
              location.pathname === path ? "active" : ""
            }`}
            onClick={() => handleLinkClick(label)}
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default LeftSidePanel;

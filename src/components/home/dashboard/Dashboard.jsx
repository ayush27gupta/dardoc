import React, { useEffect, useState } from "react";
import LeftSidePanel from "../panels/LeftSidePanel";
import CenterPanel from "../panels/CenterPanel";
import RightPanel from "../panels/RightPanel";
import "./dashboard.css";
import { useLocation } from "react-router-dom";

const Dashboard = (props) => {
  const location = useLocation();
  const [selectedLink, setSelectedLink] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case "/home":
        setSelectedLink("Home");
        break;
      case "/online-visits":
        setSelectedLink("Online Visits");
        break;
      case "/lab-reports":
        setSelectedLink("Lab Reports");
        break;
      case "/prescriptions":
        setSelectedLink("Prescriptions");
        break;
      case "/appointments":
        setSelectedLink("Appointments");
        break;
      default:
        setSelectedLink("");
    }
  }, [location.pathname]);

  const handleLinkChange = (link) => {
    setSelectedLink(link);
  };

  return (
    <div className="d-flex  p-3 dashboard-container">
      <div className="left-main b-red ">
        <LeftSidePanel onLinkSelect={handleLinkChange} />
      </div>

      <div className="center-main b-green flex-grow-1">
        <CenterPanel header={selectedLink} />
      </div>

      <div className="right-main b-blue ">
        <RightPanel />
      </div>
    </div>
  );
};

export default Dashboard;

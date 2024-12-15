import React, { useEffect, useState } from "react";
import LeftSidePanel from "../panels/LeftSidePanel";
import CenterPanel from "../panels/CenterPanel";
import RightPanel from "../panels/RightPanel";
import "./dashboard.css";
import { useLocation } from "react-router-dom";

const Dashboard = (props) => {
  const location = useLocation();
  const [selectedLink, setSelectedLink] = useState("");

  const links = [
    { path: "/home", label: "Home" },
    { path: "/online-visits", label: "Online Visits" },
    { path: "/lab-reports", label: "Lab Reports" },
    { path: "/prescriptions", label: "Prescriptions" },
    { path: "/appointments", label: "Appointments" },
  ];

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

  const handleLinkSelect = (label) => {
    setSelectedLink(label);
  };

  return (
    <div className="d-flex  p-3 dashboard-container">
      <div className="left-main b-red ">
        <LeftSidePanel links={links} onLinkSelect={handleLinkSelect} />
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

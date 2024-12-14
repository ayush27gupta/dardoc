import React from "react";
import LeftSidePanel from "../panels/LeftSidePanel";
import CenterPanel from "../panels/CenterPanel";
import RightPanel from "../panels/RightPanel";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="d-flex  p-3 dashboard-container">
      <div className="left-main b-red ">
        <LeftSidePanel />
      </div>

      <div className="center-main b-green flex-grow-1">
        <CenterPanel />
      </div>

      <div className="right-main b-blue ">
        <RightPanel />
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import "./rightPanel.css";
import Patients from "../managePanel/patients/Patients";
import Support from "../managePanel/support/Support";

const RightPanel = () => {
  return (
    <div className="main-right">
      <div className="manage-header header-title">Manage</div>

      <div className="d-flex flex-column justify-content-between">
        <div className="patient-container">
          <Patients />
        </div>
        <div className="support-container">
          <Support />
        </div>
      </div>
    </div>
  );
};

export default RightPanel;

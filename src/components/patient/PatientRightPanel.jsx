import React from "react";
import "../home/panels/rightPanel.css";
import Support from "../home/managePanel/support/Support";

const PatientRightPanel = () => {
  const supportItems = [
    { title: "Issue early refill or change medication" },
    { title: "Reschedule appointment" },
    { title: "Cancel Weight Loss Rx" },
  ];

  return (
    <div className="main-right">
      <div className="manage-header header-title">Open Tasks</div>

      <div className="d-flex flex-column justify-content-between">
        <div className="patient-container"></div>
        <div className="support-container">
          <Support items={supportItems} />
        </div>
      </div>
    </div>
  );
};

export default PatientRightPanel;

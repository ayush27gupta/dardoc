import React from "react";

const PrescriptionsContainer = () => {
  return (
    <div className="pres-container common-container">
      <div className="">
        <div className="summary-header">
          <div>
          <i class='fas fa-pills'></i>
          </div>

          <div className="common-title">Active Prescription (Rx)</div>
        </div>
        <div className="summary-cards"></div>
      </div>
    </div>
  );
};

export default PrescriptionsContainer;

import React from "react";
import PrescriptionCards from "../prescriptions/PrescriptionCards";
import { PRES_DATA } from "../utils/dataConstants";

const PrescriptionsContainer = () => {
  const handleWritePres = () => {
    console.log("Add pres");
  };
  return (
    <div className="pres-container common-container p-3">
      <div className="">
        <div className="">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <i className="fas fa-pills"></i>
              </div>
              <div className="common-title"> Active Prescription (Rx)</div>
            </div>
            <div className="graph-log" onClick={() => handleWritePres()}>
              + Write Rx
            </div>
          </div>
        </div>
        <div className="prescription-cards">
          <PrescriptionCards presData={PRES_DATA} />
        </div>
      </div>
    </div>
  );
};

export default PrescriptionsContainer;

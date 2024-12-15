import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../home/managePanel/patients/patients.css";

const Tasks = () => {
  const location = useLocation();
  const [data]=useState(location?.state)
  return (
    <div>
      <div className="patient-box p-3 mt-2">
        <div className="d-flex justify-content-between ">
          <div className="d-flex justify-content-start align-items-center">
            <div className="sub-header-title">{data?.purpose}</div>
            <div className="patient-number-badge">4th Month</div>
          </div>
          <div>
            <div
              className="patient-right"
              //   onClick={() => handlePatientClick(item)}
            >
              <i class="fa fa-arrow-right" style={{ color: "#a2a2a2" }}></i>
            </div>
          </div>
        </div>
        <button className="common-btn">Start Workflow</button>
      </div>
    </div>
  );
};

export default Tasks;

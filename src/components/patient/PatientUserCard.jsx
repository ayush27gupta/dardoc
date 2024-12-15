import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./patientDetails.css";
const PatientUserCard = () => {
  // const { id } = useParams();
  const location = useLocation();
  const [userData] = useState(location?.state);

  return (
    <>
      <div className="user-card-container">
        <div className="d-flex flex-column justify-content-center align-items-start mb-3">
          <div className="user-img"></div>
          <div className="user-dets">
            <div className="user-dets-text">
              <div className="user-name">{userData?.name}</div>
              <div className="user-data">29, Male</div>
              <div className="user-data">Born on : 23 July, 1995</div>
              <div className="user-data">784-1995-9050375-3</div>
              <div className="user-data">Abu Dhabi, UAE</div>
            </div>
            <div className="user-dets-button mt-2">
              <span className="user-clip"></span>Files on record
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientUserCard;

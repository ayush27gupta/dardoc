import React from "react";
import { useNavigate } from "react-router-dom";

const PatientsCards = (props) => {
  const { patientData } = props;
  const navigate = useNavigate();
  const handlePatientClick = (data) => {
    navigate(`/patient/${data?.bookingId}`, { state: data });
  };
  return (
    <div className="mt-2 patient-cards">
      {patientData?.map((item, index) => (
        <div key={index}>
          <div className="patient-card">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-between align-items-center ">
                <div className="patient-img">
                  <img
                    src="./images/keswin.png"
                    alt="No img"
                    height="50"
                    width="50"
                  />
                </div>
                <div className="patient-details">
                  <div className="pateint-name">{item?.name}</div>
                  <div className="patient-purpose">{item?.purpose}</div>
                </div>
              </div>
            </div>
            <div
              className="patient-right"
              onClick={() => handlePatientClick(item)}
            >
              <i className="fa fa-arrow-right" style={{ color: "#a2a2a2" }}></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PatientsCards;
